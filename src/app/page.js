import Navbar from "@/components/Navbar"
import HeroBento from "@/components/HeroBento"
import Footer from "@/components/Footer"
import ProgressBar from "@/components/ProgressBar"
import Modulo3ContentSection from "@/components/Modulo3ContentSection"

export default function Modulo3() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <ProgressBar />
      <main>
        <HeroBento
          eyebrow="Curso de Formação"
          title="Coleção Aprendendo a Lidar com Dinheiro"
          tag="Módulo 3"
          subtitle="Como monitorar e avaliar as atividades e projetos dos estudantes."
        />
        <Modulo3ContentSection />
      </main>
      <Footer />
    </div>
  )
}
