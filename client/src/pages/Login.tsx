import { Link } from 'react-router-dom'
import { useState } from 'react'

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    let res = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
    console.log(res)
  }

  return (
    <div className="min-h-screen bg-white text-black font-['DejaVu_Sans_Mono',monospace] flex items-center justify-center p-4">
      <div className="w-full max-w-[420px] border-2 border-black bg-white flex flex-col">
        {/* Card Header */}
        <div className="border-b-2 border-black bg-white px-4 py-2 text-[20px] font-bold">
          Login into Null-Room
        </div>

        {/* Card Body */}
        <div className="p-4 flex flex-col gap-4">
          <div className="text-[14px] border-b-2 border-black pb-3">
            Enter your credentials to enter the room.
          </div>

          {/* Form Fields */}
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-[14px] font-bold">
                Email:
              </label>
              <input
                onChange={handleChange}
                id="email"
                type="email"
                name="email"
                value={form.email}
                placeholder="user@null-room.dev"
                className="w-full bg-white text-black border-2 border-black p-[10px] text-[14px] outline-none focus:outline-[3px] focus:outline-black focus:outline-offset-0"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="password" className="text-[14px] font-bold">
                Password:
              </label>
              <input
                onChange={handleChange}
                value={form.password}
                id="password"
                type="password"
                name="password"
                placeholder="••••••••"
                className="w-full bg-white text-black border-2 border-black p-[10px] text-[14px] outline-none focus:outline-[3px] focus:outline-black focus:outline-offset-0"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3 pt-1">
            <button
              onClick={handleLogin}
              className="w-full bg-white text-black border-2 border-black px-4 py-2 text-[14px] font-bold hover:bg-black hover:text-white cursor-pointer"
            >
              Login
            </button>
            <button className="w-full bg-white text-black border-2 border-black px-4 py-2 text-[14px] font-bold hover:bg-black hover:text-white cursor-pointer">
              Continue as Guest
            </button>
          </div>

          {/* Bottom Links */}
          <div className="flex flex-col gap-2 pt-3 border-t-2 border-black text-[14px]">
            <p className="m-0">
              No account?{' '}
              <Link to="/signup" className="text-black underline hover:no-underline font-bold">
                Sign up
              </Link>
            </p>
            <Link to="/" className="text-black underline hover:no-underline">
              &larr; Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
