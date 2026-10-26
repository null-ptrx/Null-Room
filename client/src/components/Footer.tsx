const Footer = () => {
  return (
    <footer className="w-full bg-black text-white border-2 border-black p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[14px]">
      <div>
        <span className="font-bold">null-room</span> &copy; 2026 - built for classrooms that ship.
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <a href="#features" className="text-white hover:underline">
          Features
        </a>
        <span className="text-white">|</span>
        <a href="#" className="text-white hover:underline">
          Docs
        </a>
        <span className="text-white">|</span>
        <a href="/login" className="text-white hover:underline">
          Login
        </a>
        <span className="text-white">|</span>
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="text-white hover:underline"
          aria-label="GitHub"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;
