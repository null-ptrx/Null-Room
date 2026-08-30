import React from 'react';

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
    <section className="w-full flex flex-col gap-8">
      <div className="flex items-center gap-4 text-slate-500 text-sm font-bold tracking-widest uppercase">
        <span>//</span>
        <h2>Features</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/10 bg-white/[0.02]">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className={`p-8 flex flex-col gap-6 hover:bg-white/[0.04] transition-colors border-b lg:border-b-0
              ${index < features.length - 1 ? 'lg:border-r border-white/10' : ''}
              ${index % 2 === 0 ? 'md:border-r border-white/10' : ''}
            `}
          >
            <div className="w-10 h-10 flex items-center justify-center border border-white/10 bg-black text-cyan-400 rounded-sm">
              {feature.icon}
            </div>
            <div>
              <h3 className="text-white font-bold mb-3">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
