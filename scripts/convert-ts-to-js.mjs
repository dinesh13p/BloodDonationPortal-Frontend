import fs from 'node:fs';
import path from 'node:path';

const cwd = process.cwd();
const srcDir = path.resolve(cwd, 'src');

const tsExts = new Set(['.ts', '.tsx']);
const files = [];

function walk(dir) {
	for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
		if (entry.name === 'node_modules' || entry.name === '.git') continue;
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) walk(full);
		else if (tsExts.has(path.extname(entry.name))) files.push(full);
	}
}

function stripTypes(code) {
	let out = code;
	// Remove import type and type-only named imports
	out = out.replace(/import\s+type\s+\{[^}]+\}\s+from\s+['\"][^'\"]+['\"];?\n?/g, '');
	out = out.replace(/import\s+\{([^}]+)\}\s+from\s+(['\"][^'\"]+['\"])/g, (m, names, from) => {
		const cleaned = names
			.split(',')
			.map((s) => s.trim())
			.filter((s) => !/^type\s+/i.test(s))
			.map((s) => s.replace(/^type\s+/, ''))
			.join(', ');
		return cleaned ? `import { ${cleaned} } from ${from}` : '';
	});
	// Remove interfaces and type aliases
	out = out.replace(/\binterface\s+[A-Za-z0-9_]+\s*\{[\s\S]*?\}\n?/g, '');
	out = out.replace(/\btype\s+[A-Za-z0-9_<> ,=|&?\n\r\t\[\]]+?=\s*[\s\S]*?;\n?/g, '');
	// Remove "satisfies" clauses
	out = out.replace(/\s+satisfies\s+[^;]+;?/g, '');
	// Remove generic parameters on common calls
	out = out.replace(/React\.forwardRef\s*<[^>]+>\s*\(/g, 'React.forwardRef(');
	out = out.replace(/useState\s*<[^>]+>\s*\(/g, 'useState(');
	out = out.replace(/useRef\s*<[^>]+>\s*\(/g, 'useRef(');
	out = out.replace(/createContext\s*<[^>]+>\s*\(/g, 'createContext(');
	out = out.replace(/useContext\s*<[^>]+>\s*\(/g, 'useContext(');
	// Remove JSX/TS type assertions like "as Something"
	out = out.replace(/\s+as\s+[A-Za-z0-9_.<>,\[\]\s]+/g, '');
	// Remove simple type annotations in params/vars
	out = out.replace(/(:\s*[A-Za-z0-9_\[\]{}<>, |&:?]+)(?=\s*[),=])/g, '');
	// Clean common library-specific types
	out = out.replace(/VariantProps<[^>]+>/g, 'any');
	out = out.replace(/ClassValue/g, 'any');
	// Collapse leftover blank lines
	out = out.replace(/\n{3,}/g, '\n\n');
	return out;
}

function convert() {
	if (!fs.existsSync(srcDir)) {
		console.error('src directory not found at', srcDir);
		process.exit(1);
	}
	walk(srcDir);
	for (const file of files) {
		const code = fs.readFileSync(file, 'utf8');
		const out = stripTypes(code);
		const newPath = file.replace(/\.tsx$/i, '.jsx').replace(/\.ts$/i, '.js');
		fs.writeFileSync(newPath, out, 'utf8');
		if (newPath !== file) fs.unlinkSync(file);
	}
	console.log(`Converted ${files.length} files.`);
}

convert();
