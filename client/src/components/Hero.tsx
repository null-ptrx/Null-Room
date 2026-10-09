import React from 'react'

const Hero = () => {
    return (
        <div className='w-full pt-20 pb-10 flex flex-col lg:flex-row items-center justify-between gap-12'>
            <div className='w-full lg:w-1/2 flex flex-col gap-8'>
                <div className='flex items-center gap-3 text-cyan-400 text-xs tracking-widest uppercase font-bold'>
                    <div className='w-2 h-2 bg-cyan-400 glow-box-cyan'></div>
                    <span>4,182 rooms live now</span>
                </div>
                
                <h1 className='text-5xl md:text-7xl font-sans font-bold leading-[1.1] tracking-tight'>
                    <span className='text-white block'>Learn to code</span>
                    <span className='text-cyan-400 block glow-text-cyan'>together, in</span>
                    <span className='text-white block'>real time.</span>
                </h1>

                <p className='text-slate-400 text-lg md:text-xl leading-relaxed max-w-lg'>
                    A collaborative classroom that runs like a terminal. Shared buffers, live cursors, voice on tap, and permissions you actually control.
                </p>
                
                <div className='flex flex-wrap gap-4 mt-4 text-sm font-bold tracking-widest uppercase'>    
                    <button className='bg-cyan-400 text-black px-6 py-3 hover:bg-cyan-300 transition-colors flex items-center gap-2 glow-box-cyan'>
                        Create a room <span>&rarr;</span>
                    </button>
                    <button className='border border-cyan-400 text-cyan-400 px-6 py-3 hover:bg-cyan-400/10 transition-colors'>
                        Join a room
                    </button>
                </div>
            </div >

            <div className='w-full lg:w-1/2 mt-12 lg:mt-0'>
                <div className='bg-black border border-white/10 rounded-sm overflow-hidden shadow-2xl relative'>
                    <div className='absolute inset-0 bg-gradient-to-b from-cyan-900/10 to-transparent pointer-events-none'></div>
                    
                    {/* Terminal Header */}
                    <div className='flex items-center px-4 py-3 border-b border-white/10 text-xs text-slate-500'>
                        <div className='flex gap-2 mr-4'>
                            <div className='w-2.5 h-2.5 border border-slate-600'></div>
                            <div className='w-2.5 h-2.5 border border-slate-600'></div>
                            <div className='w-2.5 h-2.5 border border-slate-600'></div>
                        </div>
                        <span className='text-cyan-400/70'>~/cs101/room.ts</span>
                    </div>

                    {/* Code Content */}
                    <div className='p-6 text-sm md:text-base leading-relaxed overflow-x-auto'>
                        <div className='flex'>
                            <span className='text-slate-600 w-8 select-none'>1</span>
                            <span><span className='text-purple-400'>const</span> <span className='text-white'>room</span> <span className='text-cyan-400'>=</span> <span className='text-purple-400'>await</span> <span className='text-white'>syncd.</span><span className='text-blue-400'>create</span><span className='text-cyan-400'>{'{'}</span></span>
                        </div>
                        <div className='flex'>
                            <span className='text-slate-600 w-8 select-none'>2</span>
                            <span className='pl-8'><span className='text-white'>name:</span> <span className='text-green-400'>"cs101-week-04"</span><span className='text-white'>,</span></span>
                        </div>
                        <div className='flex'>
                            <span className='text-slate-600 w-8 select-none'>3</span>
                            <span className='pl-8'><span className='text-white'>mode:</span> <span className='text-green-400'>"shared-project"</span><span className='text-white'>,</span></span>
                        </div>
                        <div className='flex'>
                            <span className='text-slate-600 w-8 select-none'>4</span>
                            <span className='pl-8'><span className='text-white'>write:</span> <span className='text-white'>[</span><span className='text-green-400'>"@ada"</span><span className='text-white'>, </span><span className='text-green-400'>"@linus"</span><span className='text-white'>],</span></span>
                        </div>
                        <div className='flex'>
                            <span className='text-slate-600 w-8 select-none'>5</span>
                            <span className='text-cyan-400'>{'}'}</span><span className='text-white'>)</span>
                        </div>
                    </div>

                    {/* Terminal Footer */}
                    <div className='flex items-center gap-3 px-4 py-3 border-t border-white/10 text-xs text-slate-500 bg-white/[0.02]'>
                        <div className='flex items-center gap-1.5'>
                            <div className='w-2 h-2 rounded-full bg-cyan-400'></div>
                            <span className='text-white'>ada</span>
                        </div>
                        <div className='flex items-center gap-1.5'>
                            <div className='w-2 h-2 rounded-full bg-purple-400'></div>
                            <span className='text-white'>linus</span>
                        </div>
                        <span className='ml-2'>- 2 collaborators editing</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero