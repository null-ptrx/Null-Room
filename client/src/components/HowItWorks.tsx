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
    // Removed neon corner accents, cyan glow, dark backgrounds, and hover animations; restyled with Codeforces roundboxes
    <section id="how-it-works" className="w-full my-3 font-[Verdana,Arial,sans-serif] text-[13px] text-[#222]">
      <div className="border border-[#b9b9b9] bg-white rounded-none">
        <div className="bg-[#e1e1e1] border-b border-[#b9b9b9] px-2.5 py-1 text-[13px] font-bold text-[#222]">
          → How It Works
        </div>

        <div className="p-2.5 flex flex-col md:flex-row items-stretch gap-3">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="flex-1 border border-[#b9b9b9] bg-white rounded-none flex flex-col">
                <div className="bg-[#e1e1e1] border-b border-[#b9b9b9] px-2 py-1 font-bold text-[12px] text-[#222]">
                  Step {step.num}: {step.title}
                </div>
                <div className="p-2 text-[12px] text-[#222] leading-normal flex-1">
                  {step.description}
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center text-[#888] font-bold px-1 select-none">
                  &rarr;
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

