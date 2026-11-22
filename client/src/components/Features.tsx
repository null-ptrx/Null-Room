const Features = () => {
  return (
    <section id="features" className="w-full border-b border-border bg-background">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-10">
          <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-foreground leading-[1.05]">
            Built for actual coding sessions, not just casual chat.
          </h2>
          <p className="font-sans text-sm sm:text-base text-foreground-secondary mt-3">
            Most collaborative editors either butcher indentation or require everyone to install the exact same desktop extensions. Null-Room handles the state synchronization in the browser.
          </p>
        </div>

        {/* Asymmetric 7/5 Layout (Break symmetry - Anti-AI tells rule 4) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border border-border bg-card">
          
          {/* Dominant Large Card (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-border flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-wider text-muted-foreground font-mono block mb-2">
                Core Synchronization
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-foreground mb-4">
                Conflict-free replicated data types with Yjs and Monaco
              </h3>
              <p className="font-sans text-sm text-foreground-secondary leading-relaxed mb-6">
                When two people type on the same line, standard operational transforms often garble syntax tokens. Null-Room binds Monaco directly to Yjs documents over WebSockets. Every character insertion, deletion, and selection range updates cleanly across all clients.
              </p>
            </div>

            {/* Technical Detail Callout */}
            <div className="border border-border bg-background p-4 text-xs font-mono text-foreground-secondary">
              <div className="text-foreground font-medium mb-1">Architecture Note:</div>
              <div>Each code window maintains its own Y.Doc instance with shared awareness vectors, so participants can see exactly which line you are highlighting.</div>
            </div>
          </div>

          {/* Right Stacked Companion Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col divide-y divide-border">
            
            {/* Top Card */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between hover:bg-secondary/30 transition-colors">
              <div>
                <span className="text-xs uppercase tracking-wider text-muted-foreground font-mono block mb-2">
                  Voice & Video
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-foreground mb-2">
                  LiveKit audio directly in the buffer
                </h3>
                <p className="font-sans text-xs sm:text-sm text-foreground-secondary leading-relaxed">
                  No need to send a secondary Zoom or Google Meet link. Hop into a room, un-mute, and talk through the bug while looking at the exact same lines of code.
                </p>
              </div>
            </div>

            {/* Bottom Card */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between hover:bg-secondary/30 transition-colors">
              <div>
                <span className="text-xs uppercase tracking-wider text-muted-foreground font-mono block mb-2">
                  Permissions
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-foreground mb-2">
                  Enforced on the WebSocket server
                </h3>
                <p className="font-sans text-xs sm:text-sm text-foreground-secondary leading-relaxed">
                  You decide who can write, who can edit, and who is spectating. The server drops unauthorized mutation frames at the gateway, so view-only learners cannot accidentally delete your work.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Features;
