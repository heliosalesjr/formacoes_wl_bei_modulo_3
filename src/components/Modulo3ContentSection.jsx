import { Button } from "@/components/ui/button"
import Link from "next/link"
import PageApresentacao1 from "@/components/content/PageApresentacao1"
import PageApresentacao2 from "@/components/content/PageApresentacao2"
import PageMonitorarAvaliar from "@/components/content/PageMonitorarAvaliar"

export default function Modulo3ContentSection() {
  return (
    <section id="content" className="w-full pt-6 pb-12 md:pt-8 md:pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-5xl space-y-8">

          <PageApresentacao1 />
          <PageMonitorarAvaliar />
          <PageApresentacao2 />

          <div className="flex justify-center mt-8">
            <Button asChild size="lg">
              <Link href="/monitoramento">Próxima Página: Monitoramento</Link>
            </Button>
          </div>

        </div>
      </div>
    </section>
  )
}
