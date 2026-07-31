import { Button } from "@/components/ui/button"
import FadeInWhenVisible from "./FadeInWhenVisible"
import Link from "next/link"
import MoniMoni from "@/components/content/MoniMoni"
import MoniDef from "@/components/content/MoniDef"
import MoniPPDA from "@/components/content/MoniPPDA"

export default function MonitoramentoContentSection() {
  return (
    <section id="content" className="w-full pt-6 pb-12 md:pt-8 md:pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-5xl space-y-8">

              <FadeInWhenVisible>
                  <MoniMoni />
              </FadeInWhenVisible>
                  <MoniDef />
              <FadeInWhenVisible>
                <MoniPPDA />
              </FadeInWhenVisible>

          <div className="flex justify-center mt-8">
            <Button asChild size="lg">
              <Link href="/metodosavaliativos">Próxima Página: Métodos Avaliativos</Link>
            </Button>
          </div>

        </div>
      </div>
    </section>
  )
}
