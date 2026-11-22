import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-background border-t border-border">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-border">
          
          {/* Left Column: Author & Project Info */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              <div className="font-serif text-2xl font-normal text-foreground mb-2">
                Null-Room
              </div>
              <p className="font-sans text-sm text-foreground-secondary max-w-md leading-relaxed">
                An open-source real-time collaborative coding space built for students, friends, and classrooms. Designed with zero border-radius on the warm cream palette.
              </p>
            </div>

            <div className="mt-6 text-xs text-muted-foreground">
              Built by <span className="text-foreground font-medium">Dhami (@nullptr)</span> • November 2026
            </div>
          </div>

          {/* Center Column: Navigation */}
          <div className="md:col-span-3">
            <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">
              Explore
            </div>
            <ul className="space-y-2.5 text-sm text-foreground-secondary list-none p-0 m-0">
              <li>
                <a href="#why" className="hover:text-foreground transition-colors">
                  Why this exists
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-foreground transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-foreground transition-colors">
                  How it works
                </a>
              </li>
              <li>
                <a href="#stack" className="hover:text-foreground transition-colors">
                  Architecture & stack
                </a>
              </li>
            </ul>
          </div>

          {/* Right Column: Links */}
          <div className="md:col-span-3">
            <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">
              Account & Source
            </div>
            <ul className="space-y-2.5 text-sm text-foreground-secondary list-none p-0 m-0">
              <li>
                <Link to="/login" className="hover:text-foreground transition-colors">
                  Log in
                </Link>
              </li>
              <li>
                <Link to="/signup" className="hover:text-foreground transition-colors">
                  Create account
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  GitHub repository
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>
            &copy; {new Date().getFullYear()} Null-Room. MIT Licensed.
          </div>
          <div className="flex items-center gap-4">
            <span>Cream palette (#F5F0E6)</span>
            <span>•</span>
            <span>Zero border radius</span>
            <span>•</span>
            <span>Instrument Serif + Geist</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
