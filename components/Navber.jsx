
const Navber = () => {
  return (
    <header className="w-full border-b border-border bg-background sticky top-0 z-50">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        
        {/* Brand */}
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="flex items-baseline gap-2 text-foreground hover:opacity-80 transition-opacity"
          >
            <span className="font-serif text-2xl font-normal tracking-tight">Null-Room</span>
          </Link>
          <span className="hidden sm:inline text-xs text-muted-foreground border-l border-border pl-3">
            live code collaboration
          </span>
        </div>

        {/* Plain Nav Words (Anti-AI tells rule 1) */}
        <nav className="hidden md:flex items-center gap-7 text-sm text-foreground-secondary">
          <a
            href="#why"
            className="hover:text-foreground transition-colors"
          >
            Why
          </a>
          <a
            href="#features"
            className="hover:text-foreground transition-colors"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="hover:text-foreground transition-colors"
          >
            How it works
          </a>
          <a
            href="#stack"
            className="hover:text-foreground transition-colors"
          >
            Tech stack
          </a>
        </nav>

        {/* Clean Auth Actions (no bracketed buttons, no arrows) */}
        <div className="flex items-center gap-4 text-sm">
          <Link
            to="/login"
            className="text-foreground-secondary hover:text-foreground transition-colors"
          >
            Log in
          </Link>
          <Link to="/signup">
            <button className="bg-foreground text-background text-sm font-medium px-4 py-2 border border-foreground hover:bg-foreground/90 transition-colors cursor-pointer">
              Create a room
            </button>
          </Link>
        </div>

      </div>
    </header>
  );
};

export default Navber;
