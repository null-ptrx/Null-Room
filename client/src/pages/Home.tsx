import Navber from '../components/Navber'
import Hero from '../components/Hero'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import Footer from '../components/Footer'

function Home() {
    return (
        // Removed custom dark grid patterns, monospace typography, and extra spacing
        <div className="min-h-screen bg-white text-[#222] font-[Verdana,Arial,sans-serif] text-[13px] flex flex-col items-center">
            <div className="w-full max-w-6xl px-3 flex flex-col">
                <Navber />
                <main className="flex flex-col gap-2 py-2">
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

