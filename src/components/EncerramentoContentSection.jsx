import FadeInWhenVisible from '@/components/FadeInWhenVisible';
import Mat8 from '@/components/content/EncerramentoIntro';
import EncerramentoNesseModuloEu from '@/components/content/EncerramentoNesseModuloEu';
import EncerramentoQuiz from '@/components/content/EncerramentoQuiz';

export default function EncerramentoContentSection() {
  return (
    <section id="content" className="w-full pt-6 pb-12 md:pt-8 md:pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-5xl space-y-8">

          <FadeInWhenVisible><Mat8 /></FadeInWhenVisible>
          
          <FadeInWhenVisible><EncerramentoQuiz /></FadeInWhenVisible>
          <FadeInWhenVisible><EncerramentoNesseModuloEu /></FadeInWhenVisible>

        </div>
      </div>
    </section>
  )
}
