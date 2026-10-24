

const features = [
  {
    title: 'Real-time code viewing',
    description: 'Every keystroke, cursor, and selection streams instantly to the room.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: 'Voice & video chat',
    description: 'Low-latency audio and video built in - no second tab, no context switch.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400">
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" x2="12" y1="19" y2="22" />
      </svg>
    ),
  },
  {
    title: 'Permission-based collab',
    description: 'Grant write access per learner, revoke it in one keystroke.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Shared project mode',
    description: 'One filesystem, one terminal, one running dev server for the whole room.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400">
        <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
      </svg>
    ),
  }
];

const Features = () => {
  return (
    // Removed 4-column icon cards, hover transitions, and decorative dark grid; replaced with Codeforces roundbox panel and table
    <section id="features" className="w-full my-3 font-[Verdana,Arial,sans-serif] text-[13px] text-[#222]">
      <div className="border border-[#b9b9b9] bg-white rounded-none">
        <div className="bg-[#e1e1e1] border-b border-[#b9b9b9] px-2.5 py-1 text-[13px] font-bold text-[#222]">
          → Features
        </div>

        <div className="overflow-x-auto p-2">
          <table className="w-full border-collapse border border-[#b9b9b9] text-[13px] text-left">
            <thead>
              <tr className="bg-[#f0f0f0] border-b border-[#b9b9b9] font-bold text-[#222]">
                <th className="border border-[#b9b9b9] px-2 py-1 w-10 text-center">#</th>
                <th className="border border-[#b9b9b9] px-2 py-1 w-1/3">Feature</th>
                <th className="border border-[#b9b9b9] px-2 py-1">Description</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr 
                  key={index} 
                  className={`border-b border-[#b9b9b9] ${index % 2 === 0 ? 'bg-white' : 'bg-[#f5f5f5]'}`}
                >
                  <td className="border border-[#b9b9b9] px-2 py-1 text-center text-[#555]">{index + 1}</td>
                  <td className="border border-[#b9b9b9] px-2 py-1 font-bold text-[#222]">{feature.title}</td>
                  <td className="border border-[#b9b9b9] px-2 py-1 text-[#222]">{feature.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Features;

