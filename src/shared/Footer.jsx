import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black/5 border-t">
      <div className="container py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted-foreground">© {new Date().getFullYear()} HAMRO Blood Bank</div>
        <nav className="flex gap-4 text-sm">
          <Link to="/about" className="text-muted-foreground hover:text-foreground">About</Link>
          <Link to="/donate" className="text-muted-foreground hover:text-foreground">Donate</Link>
          <Link to="/faq" className="text-muted-foreground hover:text-foreground">FAQ</Link>
          <Link to="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

