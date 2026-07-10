import Navbar from "@/components/Navbar"
import HeroBento from "@/components/HeroBento"
import Footer from "@/components/Footer"
import ProgressBar from "@/components/ProgressBar"
import MonitoramentoContentSection from "@/components/MonitoramentoContentSection"

export default function Monitoramento() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <ProgressBar />
      <main>
        <HeroBento
          title="Monitoramento"
          subtitle="Acompanhe o monitoramento trabalhado neste módulo"
          tag="Módulo 3"
        />
        <MonitoramentoContentSection />
      </main>
      <Footer />
    </div>
  )
}
