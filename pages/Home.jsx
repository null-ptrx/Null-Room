
function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col w-full selection:bg-foreground selection:text-background font-sans">
      <Navber />
      
      <main className="flex-1 w-full flex flex-col">
        {/* Typographic Hero + Real Editor Preview */}
        <Hero />

        {/* The "Why" Section: Human reason behind the project (Anti-AI tells rule 3 & 8) */}
        <section id="why" className="w-full border-b border-border bg-card py-12 lg:py-16">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-4">
                <span className="text-xs uppercase tracking-wider text-muted-foreground font-mono block mb-2">
                  The Problem
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-normal text-foreground leading-tight">
                  "Can you see my screen?" is the slowest way to pair.
                </h3>
              </div>

              <div className="lg:col-span-8 space-y-4 text-sm sm:text-base text-foreground-secondary leading-relaxed">
                <p>
                  Whenever I tried helping friends or classmates debug code over video calls, we spent the first twenty minutes fighting pixelated screen compression, broken keyboard shortcuts, and "no, line 42, scroll down a bit".
                </p>
                <p>
                  Null-Room was built so I could send someone a link, immediately see their cursor moving in an authentic Monaco editor, talk through the bug over built-in voice, and keep working together without fighting the tools.
                </p>
                <div className="pt-2 text-xs font-mono text-muted-foreground">
                  — Dhami (@nullptr), project creator
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features: Asymmetric 7/5 Layout */}
        <Features />

        {/* How It Works: 3-Step Sequence */}
        <HowItWorks />

        {/* Tech Stack: Honest details directly from project architecture */}
        <section id="stack" className="w-full border-b border-border bg-background py-14">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-8">
              <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-foreground">
                Built with real web standards
              </h2>
              <p className="font-sans text-sm text-foreground-secondary mt-2">
                No buzzwords or fabricated performance claims. Here is what runs the project:
              </p>
            </div>

            <div className="border border-border bg-card divide-y divide-border text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-12 p-4 sm:p-5 gap-2">
                <div className="sm:col-span-4 font-mono font-medium text-foreground">
                  Editor & Real-Time Sync
                </div>
                <div className="sm:col-span-8 text-foreground-secondary leading-relaxed">
                  Monaco Editor bound to Yjs CRDTs through y-websocket. Documents sync character-by-character across tabs with zero lock contention.
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 p-4 sm:p-5 gap-2">
                <div className="sm:col-span-4 font-mono font-medium text-foreground">
                  Room Presence & Chat
                </div>
                <div className="sm:col-span-8 text-foreground-secondary leading-relaxed">
                  Socket.IO handling typed server/client events for room rosters, join/leave presence, and persistent message history.
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 p-4 sm:p-5 gap-2">
                <div className="sm:col-span-4 font-mono font-medium text-foreground">
                  Voice & Media
                </div>
                <div className="sm:col-span-8 text-foreground-secondary leading-relaxed">
                  LiveKit WebRTC client with server-side token auth for instant in-browser voice without opening Zoom or Meet.
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 p-4 sm:p-5 gap-2">
                <div className="sm:col-span-4 font-mono font-medium text-foreground">
                  Backend & Database
                </div>
                <div className="sm:col-span-8 text-foreground-secondary leading-relaxed">
                  Node.js + Express + TypeScript, Zod schema validation, JWT auth cookies, and MongoDB via Mongoose.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Clean, Human CTA Section */}
        <section className="w-full border-b border-border bg-card py-14">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border border-border bg-background p-8 sm:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h3 className="font-serif text-3xl sm:text-4xl font-normal text-foreground">
                  Start coding together right now
                </h3>
                <p className="font-sans text-sm text-foreground-secondary mt-2 max-w-lg">
                  Create a room, send the invite link to a friend, and start typing. Free and open source.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link to="/signup">
                  <button className="bg-foreground text-background font-medium text-sm px-6 py-3 border border-foreground hover:bg-foreground/90 transition-colors cursor-pointer">
                    Create a room
                  </button>
                </Link>
                <Link to="/login">
                  <button className="border border-border bg-card text-foreground font-medium text-sm px-6 py-3 hover:bg-secondary transition-colors cursor-pointer">
                    Log in
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
