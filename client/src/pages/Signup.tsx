import { Link } from 'react-router-dom'
import { useState } from 'react'

const Signup = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleCreate = async () => {
    await fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
  }

  return (
    <div className="min-h-screen bg-white text-black font-['DejaVu_Sans_Mono',monospace] flex items-center justify-center p-4">
      <div className="w-full max-w-[420px] border-2 border-black bg-white flex flex-col">
        {/* Card Header */}
        <div className="border-b-2 border-black bg-white px-4 py-2 text-[20px] font-bold">
          Register into Null-Room
        </div>

        {/* Card Body */}
        <div className="p-4 flex flex-col gap-4">
          <div className="text-[14px] border-b-2 border-black pb-3">
            Initialize a new account.
          </div>

          {/* Form Fields */}
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-[14px] font-bold">
                Name:
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                id="name"
                type="text"
                placeholder="null_ptr"
                className="w-full bg-white text-black border-2 border-black p-[10px] text-[14px] outline-none focus:outline-[3px] focus:outline-black focus:outline-offset-0"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-[14px] font-bold">
                Email:
              </label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                id="email"
                type="email"
                placeholder="user@null-room.dev"
                className="w-full bg-white text-black border-2 border-black p-[10px] text-[14px] outline-none focus:outline-[3px] focus:outline-black focus:outline-offset-0"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="password" className="text-[14px] font-bold">
                Password:
              </label>
              <input
                name="password"
                value={form.password}
                onChange={handleChange}
                id="password"
                type="password"
                placeholder="••••••••"
                className="w-full bg-white text-black border-2 border-black p-[10px] text-[14px] outline-none focus:outline-[3px] focus:outline-black focus:outline-offset-0"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="confirm-password" className="text-[14px] font-bold">
                Confirm Password:
              </label>
              <input
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                id="confirm-password"
                type="password"
                placeholder="••••••••"
                className="w-full bg-white text-black border-2 border-black p-[10px] text-[14px] outline-none focus:outline-[3px] focus:outline-black focus:outline-offset-0"
              />
            </div>
          </div>

          {/* Button */}
          <div className="flex flex-col gap-3 pt-1">
            <button
              onClick={handleCreate}
              className="w-full bg-white text-black border-2 border-black px-4 py-2 text-[14px] font-bold hover:bg-black hover:text-white cursor-pointer"
            >
              Create Account
            </button>
          </div>

          {/* Bottom Links */}
          <div className="flex flex-col gap-2 pt-3 border-t-2 border-black text-[14px]">
            <p className="m-0">
              Already have an account?{' '}
              <Link to="/login" className="text-black underline hover:no-underline font-bold">
                Login
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

export default Signup
