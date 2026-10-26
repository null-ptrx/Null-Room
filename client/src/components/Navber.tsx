import { Link } from 'react-router-dom'

const Navber = () => {
  return (
    <nav className="w-full bg-black text-white border-2 border-black p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div className="flex items-center">
        <Link to="/" className="text-white hover:underline font-bold text-[20px] no-underline">
          NULL-ROOM
        </Link>
      </div>

      <ul className="flex flex-col md:flex-row flex-wrap gap-4 items-start md:items-center list-none m-0 p-0 text-[14px] w-full md:w-auto">
        <li>
          <a href="#features" className="text-white hover:underline">
            Features
          </a>
        </li>
        <li>
          <a href="#how-it-works" className="text-white hover:underline">
            How It Works
          </a>
        </li>
        <li>
          <Link to="/login" className="text-white hover:underline">
            Login
          </Link>
        </li>
        <li className="w-full md:w-auto">
          <Link to="/signup" className="block w-full md:w-auto">
            <button className="w-full md:w-auto bg-white text-black border-2 border-black px-4 py-2 text-[14px] font-bold hover:bg-black hover:text-white hover:border-white cursor-pointer">
              Sign Up
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navber