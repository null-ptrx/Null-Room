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
    <section id="how-it-works" className="w-full text-black bg-white">
      <h2 className="text-[20px] font-bold border-b-2 border-black pb-4 mb-4">
        How It Works
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {steps.map((step, index) => (
          <div key={index} className="border-2 border-black bg-white p-4 flex flex-col h-full">
            <div className="font-bold text-[14px] mb-2">
              Step {step.num}: {step.title}
            </div>
            <div className="text-[14px] leading-normal flex-1">
              {step.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
