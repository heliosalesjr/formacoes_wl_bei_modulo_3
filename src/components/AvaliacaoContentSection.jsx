import { Button } from "@/components/ui/button"
import Link from "next/link"
import FadeInWhenVisible from "./FadeInWhenVisible"
import AvaIntro from "@/components/content/AvaIntro"
import AvaRubrica from "@/components/content/AvaRubrica"
import AvaBeneficios from "@/components/content/AvaBeneficios"
import AvaRelevancia from "@/components/content/AvaRelevancia"

export default function AvaliacaoContentSection() {
  return (
    <section id="content" className="w-full pt-6 pb-12 md:pt-8 md:pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-5xl space-y-8">
            
            <FadeInWhenVisible>
              <AvaIntro />
              </FadeInWhenVisible>
              <FadeInWhenVisible>
                <AvaRubrica />
              </FadeInWhenVisible>
              <FadeInWhenVisible>
                <AvaBeneficios />
              </FadeInWhenVisible>
              <FadeInWhenVisible>
                <AvaRelevancia />
              </FadeInWhenVisible>
          <div className="flex justify-center mt-8">
            <Button asChild size="lg">
              <Link href="/encerramento">Próxima Página: Encerramento</Link>
            </Button>
          </div>

        </div>
      </div>
    </section>
  )
}
