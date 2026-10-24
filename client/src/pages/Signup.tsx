import { Link } from 'react-router-dom'
import { useState } from 'react'

const Signup = () => {
    const [form, setForm] = useState({
        name: "",
        email: '',
        password: '',
        confirmPassword: ''
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }
    const handleCreate = ()=>{
        const res = fetch('')
    }
    return (
        // Removed terminal dark theme, neon cyan accents, and uppercase tracking; replaced with Codeforces roundbox
        <div className="min-h-screen bg-white font-[Verdana,Arial,sans-serif] text-[13px] text-[#222] flex items-center justify-center p-4">
            {/* Codeforces Roundbox */}
            <div className="w-full max-w-sm border border-[#b9b9b9] bg-white rounded-none">
                {/* Roundbox Header Bar */}
                <div className="bg-[#e1e1e1] border-b border-[#b9b9b9] px-2.5 py-1 text-[13px] font-bold text-[#222]">
                    → Register into Null-Room
                </div>

                {/* Card Body */}
                <div className="p-4 flex flex-col gap-3">
                    {/* Notice */}
                    <div className="text-[12px] text-[#555] border-b border-[#e1e1e1] pb-2">
                        Initialize a new account.
                    </div>

                    {/* Form Fields */}
                    <div className="flex flex-col gap-2.5">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="name" className="text-[12px] font-bold text-[#222]">
                                Name:
                            </label>
                            <input
                                name='name'
                                value={form.name}
                                onChange={handleChange}
                                id="name"
                                type="text"
                                placeholder="null_ptr"
                                className="w-full bg-white border border-[#b9b9b9] px-2 py-1 text-[13px] text-[#222] rounded-none outline-none focus:border-[#777]"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label htmlFor="email" className="text-[12px] font-bold text-[#222]">
                                Email:
                            </label>
                            <input
                                name='email'
                                value={form.email}
                                onChange={handleChange}
                                id="email"
                                type="email"
                                placeholder="user@null-room.dev"
                                className="w-full bg-white border border-[#b9b9b9] px-2 py-1 text-[13px] text-[#222] rounded-none outline-none focus:border-[#777]"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label htmlFor="password" className="text-[12px] font-bold text-[#222]">
                                Password:
                            </label>
                            <input
                                name='password'
                                value={form.password}
                                onChange={handleChange}
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                className="w-full bg-white border border-[#b9b9b9] px-2 py-1 text-[13px] text-[#222] rounded-none outline-none focus:border-[#777]"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label htmlFor="confirm-password" className="text-[12px] font-bold text-[#222]">
                                Confirm Password:
                            </label>
                            <input
                                name='confirmPassword'
                                value={form.confirmPassword}
                                onChange={handleChange}
                                id="confirm-password"
                                type="password"
                                placeholder="••••••••"
                                className="w-full bg-white border border-[#b9b9b9] px-2 py-1 text-[13px] text-[#222] rounded-none outline-none focus:border-[#777]"
                            />
                        </div>
                    </div>

                    {/* Button */}
                    <div className="flex flex-col gap-2 mt-1">
                        <button 
                            onClick={handleCreate} 
                            className="w-full bg-[#f0f0f0] border border-[#b9b9b9] px-3 py-1 text-[13px] text-[#222] hover:bg-[#e8e8e8] active:bg-[#ddd] cursor-pointer rounded-none font-normal"
                        >
                            Create Account
                        </button>
                    </div>

                    {/* Bottom Links */}
                    <div className="flex flex-col gap-1.5 pt-2 border-t border-[#b9b9b9] text-[12px]">
                        <p className="m-0">
                            Already have an account?{' '}
                            <Link to="/login" className="text-[#0000cc] hover:underline">
                                Login
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

export default Signup

