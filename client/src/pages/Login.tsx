import { Link } from 'react-router-dom'
import { useState } from 'react'

const Login = () => {
    const [form, setForm] = useState({
        email : "",
        password : ""
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
        setForm({...form,[ e.target.name] : e.target.value})
    };
    const handleLogin = async (e : React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        let res = await fetch('http://localhost:3000/login', {
            method : 'POST',
            headers : {'Content-Type' : "application/json"},
            body : JSON.stringify(form)
        });
        console.log(res)
    }
  return (
    // Removed terminal dark background, grid overlay, and cyan glows; replaced with Codeforces roundbox form
    <div className="min-h-screen bg-white font-[Verdana,Arial,sans-serif] text-[13px] text-[#222] flex items-center justify-center p-4">
      {/* Codeforces Roundbox */}
      <div className="w-full max-w-sm border border-[#b9b9b9] bg-white rounded-none">
        {/* Roundbox Header Bar */}
        <div className="bg-[#e1e1e1] border-b border-[#b9b9b9] px-2.5 py-1 text-[13px] font-bold text-[#222]">
          → Login into Null-Room
        </div>

        {/* Card Body */}
        <div className="p-4 flex flex-col gap-3">
          {/* Subheading / notice */}
          <div className="text-[12px] text-[#555] border-b border-[#e1e1e1] pb-2">
            Enter your credentials to enter the room.
          </div>

          {/* Form Fields */}
          <div className="flex flex-col gap-2.5">
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-[12px] font-bold text-[#222]">
                Email:
              </label>
              <input
                onChange={handleChange}
                id="email"
                type="email"
                name="email"
                value={form.email}
                placeholder="user@null-room.dev"
                className="w-full bg-white border border-[#b9b9b9] px-2 py-1 text-[13px] text-[#222] rounded-none outline-none focus:border-[#777]"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="password" className="text-[12px] font-bold text-[#222]">
                Password:
              </label>
              <input
                onChange={handleChange}
                value={form.password}
                id="password"
                type="password"
                name="password"
                placeholder="••••••••"
                className="w-full bg-white border border-[#b9b9b9] px-2 py-1 text-[13px] text-[#222] rounded-none outline-none focus:border-[#777]"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-2 mt-1">
            <button 
              onClick={handleLogin} 
              className="w-full bg-[#f0f0f0] border border-[#b9b9b9] px-3 py-1 text-[13px] text-[#222] hover:bg-[#e8e8e8] active:bg-[#ddd] cursor-pointer rounded-none font-normal"
            >
              Login
            </button>
            <button className="w-full bg-[#f0f0f0] border border-[#b9b9b9] px-3 py-1 text-[13px] text-[#222] hover:bg-[#e8e8e8] active:bg-[#ddd] cursor-pointer rounded-none font-normal">
              Continue as Guest
            </button>
          </div>

          {/* Bottom Links */}
          <div className="flex flex-col gap-1.5 pt-2 border-t border-[#b9b9b9] text-[12px]">
            <p className="m-0">
              No account?{' '}
              <Link to="/signup" className="text-[#0000cc] hover:underline">
                Sign up
              </Link>
            </p>
            <Link to="/Home" className="text-[#0000cc] hover:underline">
              &larr; Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

