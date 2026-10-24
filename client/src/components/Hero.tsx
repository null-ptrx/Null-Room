
const Hero = () => {
    return (
        // Removed oversized hero spacing, gradient backgrounds, and neon glow effects
        <div className='w-full py-4 flex flex-col lg:flex-row items-start justify-between gap-4 font-[Verdana,Arial,sans-serif] text-[13px] text-[#222]'>
            <div className='w-full lg:w-1/2 flex flex-col gap-3'>
                <div className='text-[12px] text-[#555]'>
                    <span>4,182 rooms live now</span>
                </div>
                
                <h1 className='text-lg font-bold text-[#222] leading-tight'>
                    Learn to code together, in real time.
                </h1>

                <p className='text-[13px] text-[#222] leading-normal'>
                    A collaborative classroom that runs like a terminal. Shared buffers, live cursors, voice on tap, and permissions you actually control.
                </p>
                
                <div className='flex flex-wrap gap-2 mt-1'>    
                    <button className='bg-[#f0f0f0] border border-[#b9b9b9] px-3 py-1 text-[13px] text-[#222] hover:bg-[#e8e8e8] active:bg-[#ddd] cursor-pointer rounded-none'>
                        Create a room &rarr;
                    </button>
                    <button className='bg-[#f0f0f0] border border-[#b9b9b9] px-3 py-1 text-[13px] text-[#222] hover:bg-[#e8e8e8] active:bg-[#ddd] cursor-pointer rounded-none'>
                        Join a room
                    </button>
                </div>
            </div>

            {/* Removed faux Mac window buttons, drop shadows, and neon syntax highlighting; styled as Codeforces roundbox */}
            <div className='w-full lg:w-1/2 mt-2 lg:mt-0'>
                <div className='border border-[#b9b9b9] bg-white rounded-none'>
                    {/* Roundbox Header */}
                    <div className='bg-[#e1e1e1] border-b border-[#b9b9b9] px-2.5 py-1 text-[13px] font-bold text-[#222]'>
                        ~/cs101/room.ts
                    </div>

                    {/* Code Content */}
                    <div className='p-2.5 text-[12px] font-mono leading-normal overflow-x-auto bg-[#fafafa]'>
                        <div className='flex'>
                            <span className='text-[#888] w-6 select-none'>1</span>
                            <span><span className='text-[#0000cc] font-bold'>const</span> room = <span className='text-[#0000cc] font-bold'>await</span> syncd.create({'{'}</span>
                        </div>
                        <div className='flex'>
                            <span className='text-[#888] w-6 select-none'>2</span>
                            <span className='pl-4'>name: <span className='text-[#008000]'>"cs101-week-04"</span>,</span>
                        </div>
                        <div className='flex'>
                            <span className='text-[#888] w-6 select-none'>3</span>
                            <span className='pl-4'>mode: <span className='text-[#008000]'>"shared-project"</span>,</span>
                        </div>
                        <div className='flex'>
                            <span className='text-[#888] w-6 select-none'>4</span>
                            <span className='pl-4'>write: [<span className='text-[#008000]'>"@ada"</span>, <span className='text-[#008000]'>"@linus"</span>],</span>
                        </div>
                        <div className='flex'>
                            <span className='text-[#888] w-6 select-none'>5</span>
                            <span>{'}'})</span>
                        </div>
                    </div>

                    {/* Roundbox Footer */}
                    <div className='bg-[#f5f5f5] border-t border-[#b9b9b9] px-2.5 py-1 text-[11px] text-[#555] flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                            <span className='font-bold text-[#222]'>ada</span>,
                            <span className='font-bold text-[#222]'>linus</span>
                        </div>
                        <span>2 collaborators editing</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero