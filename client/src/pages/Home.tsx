import Navber from '../components/Navber'
import Hero from '../components/Hero'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className="min-h-screen bg-white text-black font-['DejaVu_Sans_Mono',monospace] flex flex-col items-center">
      <div className="w-full max-w-[1100px] px-4 py-4 flex flex-col gap-6">
        <Navber />
        <main className="flex flex-col gap-6 w-full">
          <Hero />
          <Features />
          <HowItWorks />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Home
