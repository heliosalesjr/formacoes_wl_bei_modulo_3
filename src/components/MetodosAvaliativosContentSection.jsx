import { Button } from "@/components/ui/button"
import FadeInWhenVisible from "./FadeInWhenVisible"
import Link from "next/link"
import MetAvaIntro from "@/components/content/MetAvaIntro"
import MetAvErro from "@/components/content/MetAvErro"
import MetAvaTipos from "@/components/content/MetAvaTipos"
import MetAvaAt from "@/components/content/MetAvaAt"

export default function MetodosAvaliativosContentSection() {
  return (
    <section id="content" className="w-full pt-6 pb-12 md:pt-8 md:pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-5xl space-y-8">
            <FadeInWhenVisible>
              <MetAvaIntro />
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <MetAvErro />
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <MetAvaTipos />
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <MetAvaAt />
            </FadeInWhenVisible>
            
          <div className="flex justify-center mt-8">
            <Button asChild size="lg">
              <Link href="/avaliacao">Próxima Página: Avaliação</Link>
            </Button>
          </div>

        </div>
      </div>
    </section>
  )
}
