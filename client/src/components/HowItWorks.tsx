import React from 'react';

const steps = [
  {
    num: '01',
    title: 'Create a room',
    description: 'Spin up a sandbox in under a second.',
  },
  {
    num: '02',
    title: 'Invite friends',
    description: 'Share a link. No installs, no accounts required.',
  },
  {
    num: '03',
    title: 'Code together',
    description: 'Pair, review, and ship in the same buffer.',
  }
];

const HowItWorks = () => {
  return (
    <section className="w-full flex flex-col gap-8">
      <div className="flex items-center gap-4 text-slate-500 text-sm font-bold tracking-widest uppercase">
        <span>//</span>
        <h2>How It Works</h2>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="flex-1 w-full border border-white/10 bg-black p-8 hover:bg-white/[0.02] transition-colors flex flex-col gap-6 relative group">
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="text-cyan-400 font-bold text-2xl mb-4 glow-text-cyan">{step.num}</div>
              <div>
                <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm">{step.description}</p>
              </div>
            </div>
            
            {index < steps.length - 1 && (
              <div className="hidden md:flex text-slate-600 font-mono items-center justify-center">
                &rarr;
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
