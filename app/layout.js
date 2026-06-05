import './globals.css';
import Header from './header';
import Link from 'next/link';

export const metadata = {
  title: 'Hushtag - AI-Powered Content Creation Assistant for iOS',
  description: 'Streamline your content creation workflow. Turn creative ideas into engaging scripts, titles, and descriptions with Hushtag.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Header />
        
        {children}

        <footer className="footer">
          <div className="container footer-grid">
            <div className="footer-brand">
              <Link href="/" className="nav-brand">
                <img src="/images/logo.png" alt="Hushtag Logo" className="nav-logo-img" />
                <span>Hushtag</span>
              </Link>
              <p>Your premium AI-powered content creation assistant. Ideate, write, tag, and publish seamlessly.</p>
            </div>
            
            <div className="footer-col">
              <h4>Product</h4>
              <ul>
                <li><Link href="/#features">Features</Link></li>
                <li><Link href="/#workflow">Workflow</Link></li>
                <li><Link href="#download">Download iOS App</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Legal</h4>
              <ul>
                <li><Link href="/privacy">Privacy Policy</Link></li>
                <li><Link href="/terms">Terms & Conditions</Link></li>
              </ul>
            </div>
          </div>

          <div className="container footer-bottom">
            <p>&copy; {new Date().getFullYear()} Hushtag App. All rights reserved.</p>
            <div className="footer-bottom-links">
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
