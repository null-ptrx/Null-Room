const Hero = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-stretch justify-between gap-6 text-black bg-white">
      {/* Left Column: Intro */}
      <div className="w-full md:w-1/2 flex flex-col justify-between gap-4">
        <div className="flex flex-col gap-3">
          <div className="text-[14px]">
            <span>4,182 rooms live now</span>
          </div>

          <h1 className="text-[28px] font-bold leading-tight">
            Learn to code together, in real time.
          </h1>

          <p className="text-[14px] leading-normal">
            A collaborative classroom that runs like a terminal. Shared buffers, live cursors, voice on tap, and permissions you actually control.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <button className="w-full sm:w-auto bg-white text-black border-2 border-black px-4 py-2 text-[14px] font-bold hover:bg-black hover:text-white cursor-pointer">
            Create a room &rarr;
          </button>
          <button className="w-full sm:w-auto bg-white text-black border-2 border-black px-4 py-2 text-[14px] font-bold hover:bg-black hover:text-white cursor-pointer">
            Join a room
          </button>
        </div>
      </div>

      {/* Right Column: Terminal Preview Card */}
      <div className="w-full md:w-1/2 flex flex-col">
        <div className="border-2 border-black bg-white flex flex-col h-full">
          {/* Card Header */}
          <div className="border-b-2 border-black bg-white px-4 py-2 text-[14px] font-bold">
            ~/cs101/room.ts
          </div>

          {/* Card Code Content */}
          <div className="p-4 text-[14px] font-mono leading-normal overflow-x-auto bg-white flex-1 flex flex-col gap-1">
            <div className="flex">
              <span className="w-8 select-none font-bold">1</span>
              <span>const room = await syncd.create({'{'}</span>
            </div>
            <div className="flex">
              <span className="w-8 select-none font-bold">2</span>
              <span className="pl-4">name: "cs101-week-04",</span>
            </div>
            <div className="flex">
              <span className="w-8 select-none font-bold">3</span>
              <span className="pl-4">mode: "shared-project",</span>
            </div>
            <div className="flex">
              <span className="w-8 select-none font-bold">4</span>
              <span className="pl-4">write: ["@ada", "@linus"],</span>
            </div>
            <div className="flex">
              <span className="w-8 select-none font-bold">5</span>
              <span>{'}'})</span>
            </div>
          </div>

          {/* Card Footer */}
          <div className="border-t-2 border-black bg-white px-4 py-2 text-[14px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="font-bold">ada</span>,
              <span className="font-bold">linus</span>
            </div>
            <span>2 collaborators editing</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero