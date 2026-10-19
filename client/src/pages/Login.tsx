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
await fetch('http://localhost:5173/login', {
            method : 'POST',
            headers : {'Content-Type' : "application/json"},
            body : JSON.stringify(form)
        });
    }
  return (
    <div className="min-h-screen bg-grid-pattern font-mono flex items-center justify-center px-4">
      {/* Terminal Card */}
      <div className="w-full max-w-md border border-white/10 bg-surface-light/80 backdrop-blur-sm">
        {/* Terminal Header Bar */}
        <div className="flex items-center px-4 py-3 border-b border-white/10 text-xs text-slate-500">
          <div className="flex gap-2 mr-4">
            <div className="w-2.5 h-2.5 border border-slate-600"></div>
            <div className="w-2.5 h-2.5 border border-slate-600"></div>
            <div className="w-2.5 h-2.5 border border-slate-600"></div>
          </div>
          <span className="text-cyan-400/70">~/null-room/login</span>
        </div>

        {/* Card Body */}
        <div className="p-8 flex flex-col gap-6">
          {/* Heading */}
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold text-white tracking-tight">
              <span className="text-cyan-400 glow-text-cyan">{'>'}</span> Welcome back
            </h1>
            <p className="text-sm text-slate-500">
              Authenticate to enter the room.
            </p>
          </div>

          {/* Form Fields */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-xs text-slate-400 tracking-widest uppercase">
                Email
              </label>
              <input
               onChange={handleChange}
                id="email"
                type="email"
                name="email"
                value = {form.email}
                placeholder="user@null-room.dev"
                className="w-full bg-surface border border-white/10 px-4 py-2.5 text-sm text-slate-200 placeholder-slate-600 outline-none focus:border-cyan-400/50 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="password" className="text-xs text-slate-400 tracking-widest uppercase">
                Password
              </label>
              <input
               onChange={handleChange}
               value = {form.password}
                id="password"
                type="password"
                name="password"
                placeholder="••••••••"
                className="w-full bg-surface border border-white/10 px-4 py-2.5 text-sm text-slate-200 placeholder-slate-600 outline-none focus:border-cyan-400/50 transition-colors"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3 mt-2">
                      <button onClick={handleLogin} className="w-full bg-cyan-400 text-black py-2.5 text-sm font-bold tracking-widest uppercase hover:bg-cyan-300 transition-colors glow-box-cyan"
          >
              Login
            </button>
            <button className="w-full border border-white/10 text-slate-400 py-2.5 text-sm font-bold tracking-widest uppercase hover:border-cyan-400/50 hover:text-cyan-400 transition-colors">
              Continue as Guest
            </button>
          </div>

          {/* Bottom Links */}
          <div className="flex flex-col gap-2 pt-2 border-t border-white/10 text-xs text-slate-500">
            <p>
              No account?{' '}
              <Link to="/signup" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                Sign up
              </Link>
            </p>
            <Link to="/Home" className="text-slate-600 hover:text-slate-400 transition-colors">
              &larr; Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
