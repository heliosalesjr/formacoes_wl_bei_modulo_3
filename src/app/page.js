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
          title="Módulo 3"
          tag="Módulo 3"
          subtitle="Este é o curso autoinstrucional da BEĨ Educação sobre a aplicação da coleção Aprendendo a Lidar com Dinheiro"
        />
        <Modulo3ContentSection />
      </main>
      <Footer />
    </div>
  )
}
