const steps = [
  {
    number: '1',
    title: 'Create a room in two clicks',
    summary: 'Pick a room name and launch. A unique invite code is created instantly.',
    detail: 'Under the hood, Express and MongoDB allocate a room document with owner privileges and an initial Yjs document session.',
  },
  {
    number: '2',
    title: 'Share the link with peers',
    summary: 'Send the URL or code to your classmates or review partner.',
    detail: 'Guests can jump in immediately without filling out long onboarding forms. Their presence registers via Socket.IO.',
  },
  {
    number: '3',
    title: 'Type, review, and talk',
    summary: 'Multiple cursors move across the shared Monaco buffer in real time.',
    detail: 'Yjs awareness handles cursor markers and color badges, while LiveKit carries low-latency voice without leaving the page.',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="w-full border-b border-border bg-background">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-foreground leading-[1.05]">
            How a room works from start to finish
          </h2>
          <p className="font-sans text-sm sm:text-base text-foreground-secondary mt-3">
            No terminal daemons to install on your local machine, and no separate video links to coordinate.
          </p>
        </div>
        {/* 3 Step Sequence with varied layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-border divide-y md:divide-y-0 md:divide-x divide-border bg-card">
          {steps.map((step) => (
            <div key={step.number} className="p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="font-serif text-3xl sm:text-4xl text-muted-foreground block mb-4">
                  0{step.number}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="font-sans text-sm text-foreground mb-4 leading-relaxed">
                  {step.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-border text-xs text-foreground-secondary font-sans leading-normal">
                {step.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
