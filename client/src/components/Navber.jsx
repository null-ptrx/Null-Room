import React from 'react'

const Navber = () => {
  return (
    <nav className='w-full py-8 flex justify-between items-center border-b border-white/10'>
       <div className='flex items-center gap-2 font-bold text-xl'>
         <span className='text-cyan-400'>{'>'}</span>
         <span className='text-white tracking-wider glow-text-cyan'>null-room</span>
         <span className='text-cyan-400'>{'://'}</span>
       </div>
        <ul className='flex gap-8 items-center text-sm tracking-widest text-slate-400'>
            <li className='hover:text-cyan-400 cursor-pointer transition-colors'>FEATURES</li>
            <li className='hover:text-cyan-400 cursor-pointer transition-colors'>HOW IT WORKS</li>
            <li className='hover:text-cyan-400 cursor-pointer transition-colors'>LOGIN</li>
            <button className='border border-cyan-400 text-cyan-400 px-4 py-2 hover:bg-cyan-400/10 transition-colors glow-box-cyan'>SIGN UP</button>
        </ul>
    </nav>
  )
}
export default Navber