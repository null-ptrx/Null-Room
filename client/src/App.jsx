import Navber from './components/Navber'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-grid-pattern text-slate-300 font-mono w-full flex flex-col items-center overflow-x-hidden">
      <div className="w-full max-w-7xl px-4 md:px-12 flex flex-col gap-24 pb-12">
        <Navber />
        <main className="flex flex-col gap-32">
          <Hero />
          <Features />
          <HowItWorks />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
