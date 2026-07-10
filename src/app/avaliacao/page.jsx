import Navbar from "@/components/Navbar"
import HeroBento from "@/components/HeroBento"
import Footer from "@/components/Footer"
import ProgressBar from "@/components/ProgressBar"
import AvaliacaoContentSection from "@/components/AvaliacaoContentSection"

export default function Avaliacao() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <ProgressBar />
      <main>
        <HeroBento
          title="Avaliação"
          subtitle="Explore os instrumentos de avaliação deste módulo"
          tag="Módulo 3"
        />
        <AvaliacaoContentSection />
      </main>
      <Footer />
    </div>
  )
}
