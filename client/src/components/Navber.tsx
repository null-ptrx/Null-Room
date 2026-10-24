
import { Link } from 'react-router-dom'

const Navber = () => {
  return (
    // Removed neon cyan glow, wide padding, uppercase tracking, and dark theme colors
    <nav className="w-full py-2 px-3 flex flex-col sm:flex-row justify-between items-center border-b border-[#b9b9b9] bg-white text-[#222] font-[Verdana,Arial,sans-serif] text-[13px] gap-2">
      <div className="flex items-center gap-2 font-bold text-lg text-[#222]">
        <Link to="/" className="text-[#222] hover:underline font-bold">
          NULL-ROOM
        </Link>
      </div>

      <ul className="flex flex-wrap gap-4 items-center text-[13px] list-none m-0 p-0">
        <li>
          <a href="#features" className="text-[#0000cc] hover:underline">
            Features
          </a>
        </li>
        <li>
          <a href="#how-it-works" className="text-[#0000cc] hover:underline">
            How It Works
          </a>
        </li>
        <li>
          <Link to="/login" className="text-[#0000cc] hover:underline">
            Login
          </Link>
        </li>
        <li>
          <Link to="/signup">
            <button className="bg-[#f0f0f0] border border-[#b9b9b9] px-2.5 py-0.5 text-[13px] text-[#222] hover:bg-[#e8e8e8] cursor-pointer rounded-none">
              Sign Up
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navber