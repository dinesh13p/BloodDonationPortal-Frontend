import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(process.cwd(), 'src');

const files = [];
function walk(dir) {
	for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) walk(full);
		else if (full.endsWith('.jsx') || full.endsWith('.js')) files.push(full);
	}
}

function capitalize(str) {
	return str.replace(/(^|[-_/])([a-z])/g, (_, __, c) => c.toUpperCase()).replace(/[-_/]/g, '');
}

walk(root);
for (const file of files) {
	let code = fs.readFileSync(file, 'utf8');
	let updated = code;
	// Fix malformed star import for React
	updated = updated.replace(/import\s*\*\s*"react"/g, 'import * as React from "react"');
	// Fix malformed star import for Radix primitives: import *"@radix-ui/react-xyz"
	updated = updated.replace(/import\s*\*\s*"(@radix-ui\/react-[^"]+)"/g, (m, mod) => {
		const name = mod.split('/').pop();
		const ns = capitalize(name) + 'Primitive';
		return `import * as ${ns} from "${mod}"`;
	});
	if (updated !== code) {
		fs.writeFileSync(file, updated, 'utf8');
	}
}

console.log('Fixed imports in', files.length, 'files');
