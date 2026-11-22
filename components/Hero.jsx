import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="w-full border-b border-border bg-background">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">

        {/* Large, human typographic statement */}
        <div className="max-w-4xl mb-12">
          <p className="text-xs uppercase tracking-widest text-muted-foreground font-mono mb-4">
            Null-Room • Open-source collaborative workspace
          </p>

          <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-normal tracking-tight text-foreground leading-[0.93]">
            Pair program and teach code without spending 20 minutes on setup.
          </h1>

          <p className="font-sans text-base sm:text-lg text-foreground-secondary leading-relaxed max-w-2xl mt-6">
            Screen shares are laggy and nobody wants to configure remote SSH keys just to review code or tutor a friend. Null-Room gives you shared Monaco buffers, live cursors, and voice inside one browser link.
          </p>

          <div className="flex flex-wrap items-center gap-5 mt-8">
            <Link to="/signup">
              <button

                className="bg-foreground text-background font-medium text-sm px-6 py-3 border border-foreground hover:bg-foreground/90 transition-colors cursor-pointer"
              >
                Start a room
              </button>
            </Link>
            <Link
              to="/login"

              className="text-sm text-foreground-secondary hover:text-foreground underline underline-offset-4"
            >
              or join with an invite code
            </Link>
          </div>
        </div>

        {/* Real App Preview: Multi-user room mockup based on readme specs */}
        <div className="border border-border bg-card">
          {/* Top Room Metadata Bar */}
          <div className="border-b border-border px-4 py-2.5 bg-secondary/50 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-3">
              <span className="font-medium text-foreground">Room: cs101-week-04</span>
              <button
                type="button"
           
                className="text-muted-foreground border-l border-border pl-3 font-mono hover:text-foreground cursor-pointer"
              >
                invite: <span className="text-foreground underline underline-offset-2">null.dev/r/x9k2</span> 
              </button>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground text-xs">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 bg-foreground inline-block"></span>
                <span className="text-foreground font-medium">LiveKit Audio active</span>
              </span>
              <span className="border-l border-border pl-3">3 participants</span>
            </div>
          </div>

          {/* Room Workspace: Sidebar + Monaco Editor Area */}
          <div className="grid grid-cols-1 md:grid-cols-12 min-h-[340px]">
            {/* Sidebar */}
            <div className="md:col-span-3 border-b md:border-b-0 md:border-r border-border p-4 bg-background/50 flex flex-col justify-between text-xs">
              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground mb-3">
                  Participants
                </div>
                <ul className="space-y-2 list-none p-0 m-0">
                  <li className="flex items-center justify-between text-foreground">
                    <span className="font-medium">dhami </span>
                    <span className="text-[10px] border border-border px-1.5 py-0.5 text-muted-foreground">host</span>
                  </li>
                  <li className="flex items-center justify-between text-foreground-secondary">
                    <span>alex_chen</span>
                    <span className="text-[10px] text-muted-foreground font-mono">editing L14</span>
                  </li>
                  <li className="flex items-center justify-between text-foreground-secondary">
                    <span>kavya_r</span>
                    <span className="text-[10px] text-muted-foreground font-mono">view only</span>
                  </li>
                </ul>

                <div className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground mt-6 mb-2">
                  Files
                </div>
                <div className="font-mono text-xs text-foreground bg-secondary/60 px-2 py-1 border border-border">
                  server/connectDB.ts
                </div>
              </div>

              <div className="pt-4 border-t border-border text-[11px] text-muted-foreground">
                Permissions: <span className="text-foreground font-medium">Owner-enforced</span>
              </div>
            </div>

            {/* Monaco Editor Canvas */}
            <div className="md:col-span-9 p-5 font-mono text-xs leading-relaxed overflow-x-auto bg-card flex flex-col justify-between">
              <div className="space-y-1">
                <div className="text-muted-foreground text-[11px] mb-2">
                  // Real Yjs CRDT document synchronization with typed Mongo connection
                </div>
                <div><span className="text-muted-foreground select-none w-8 inline-block">1</span><span className="font-semibold text-foreground">import</span> mongoose <span className="font-semibold text-foreground">from</span> "mongoose";</div>
                <div><span className="text-muted-foreground select-none w-8 inline-block">2</span></div>
                <div><span className="text-muted-foreground select-none w-8 inline-block">3</span><span className="font-semibold text-foreground">export const</span> connectDB = <span className="font-semibold text-foreground">async</span> (): Promise&lt;<span className="font-semibold text-foreground">void</span>&gt; =&gt; &#123;</div>
                <div><span className="text-muted-foreground select-none w-8 inline-block">4</span>  <span className="font-semibold text-foreground">try</span> &#123;</div>
                <div><span className="text-muted-foreground select-none w-8 inline-block">5</span>    <span className="font-semibold text-foreground">const</span> conn = <span className="font-semibold text-foreground">await</span> mongoose.connect(process.env.MONGO_URI!);</div>
                <div><span className="text-muted-foreground select-none w-8 inline-block">6</span>    console.log(`MongoDB connected: $&#123;conn.connection.host&#125;`);</div>
                <div className="bg-secondary/70 -mx-5 px-5 border-l-2 border-foreground flex items-center justify-between">
                  <div>
                    <span className="text-muted-foreground select-none w-8 inline-block">7</span>    <span className="font-semibold text-foreground">const</span> dbState = mongoose.connection.readyState;
                  </div>
                  <span className="text-[10px] text-muted-foreground font-sans">
                    dhami typing
                  </span>
                </div>
                <div><span className="text-muted-foreground select-none w-8 inline-block">8</span>  &#125; <span className="font-semibold text-foreground">catch</span> (err) &#123;</div>
                <div><span className="text-muted-foreground select-none w-8 inline-block">9</span>    console.error("Connection failed", err);</div>
                <div><span className="text-muted-foreground select-none w-8 inline-block">10</span>    process.exit(1);</div>
                <div><span className="text-muted-foreground select-none w-8 inline-block">11</span>  &#125;</div>
                <div><span className="text-muted-foreground select-none w-8 inline-block">12</span>&#125;;</div>
              </div>

              <div className="pt-4 mt-6 border-t border-border flex items-center justify-between text-[11px] text-muted-foreground">
                <span>TypeScript • UTF-8</span>
                <span>Yjs Awareness: 3 clients connected</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
