"use client";
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import Image from 'next/image';
import { titleFont } from '@/lib/fonts';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const images = ['em.png', 'ef1.png', 'ef2.png'];

const PageApresentacao1 = () => {
  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) markAsViewed('apresentacao-1');
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [markAsViewed]);

  return (
    <div className="p-8 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl mx-auto max-w-5xl">

      {/* TÍTULO + PARÁGRAFOS + CARROSSEL */}
      <div ref={ref} id="apresentacao-1" className="scroll-mt-20 space-y-6">
        <h2 className={`${titleFont.className} text-4xl font-bold text-center bg-gradient-to-r from-blue-700 to-green-700 bg-clip-text text-transparent dark:bg-none dark:text-white`}>
          Apresentação do Módulo
        </h2>

        <p className="text-slate-700 dark:text-slate-200 text-lg leading-relaxed">
          Nos Módulos 1 e 2 desta trilha formativa, mergulhamos na essência do programa <strong>"Aprendendo a Lidar com Dinheiro" da <span className="whitespace-nowrap">BEĨ Educação</span></strong>, compreendendo sua metodologia <strong>baseada em Projetos e as ferramentas essenciais para o planejamento de aulas</strong>. Agora, no Módulo 3, daremos um passo fundamental: como garantir que todo esse planejamento e esforço se traduza em aprendizagem efetiva para nossos estudantes.
        </p>

        <p className="text-slate-700 dark:text-slate-200 text-lg leading-relaxed">
          <strong>Neste módulo</strong>, o foco recai sobre a <strong>avaliação da aprendizagem como parte essencial do processo educativo</strong>. Serão exploradas estratégias que permitam acompanhar o progresso dos alunos, identificar avanços e desafios, e utilizar os resultados da avaliação para reorientar as práticas pedagógicas. <strong>A proposta é compreender a avaliação não apenas como um instrumento de mensuração</strong>, mas como uma ferramenta de transformação, capaz de promover reflexões, engajamento e o <strong>desenvolvimento integral dos estudantes no contexto da Educação Financeira</strong>.
        </p>

        {/* Carrossel — imagens 1920×615 (≈3:1), container segue a mesma proporção */}
        <div className="relative w-full overflow-hidden rounded-xl shadow-lg" style={{ aspectRatio: '1920/615' }}>
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            slidesPerView={1}
            className="w-full h-full"
          >
            {images.map((img, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative w-full" style={{ aspectRatio: '1920/615' }}>
                  <Image
                    src={`/${img}`}
                    alt={`Slide ${idx + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 960px"
                    className="object-cover object-center"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* CARDS */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-slate-800 dark:to-slate-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition duration-300">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-blue-900 dark:text-blue-300 text-lg">Sobre o Curso</h3>
          </div>
          <p className="text-slate-700 dark:text-slate-200 text-base leading-relaxed">
            Desenvolvido pela equipe pedagógica da <span className="font-semibold whitespace-nowrap">BEĨ Educação</span>,  o curso é oferecido no formato <span className="font-semibold text-blue-700 dark:text-blue-400">autoinstrucional</span> — ou seja, sem tutores para interação ou esclarecimento de dúvidas para os participantes.
          </p>
        </div>

        <div className="bg-gradient-to-br from-violet-50 to-purple-100 dark:from-slate-800 dark:to-slate-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition duration-300">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-full bg-violet-500 flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="font-bold text-violet-900 dark:text-violet-300 text-lg">Nossa Missão</h3>
          </div>
          <p className="text-slate-700 dark:text-slate-200 text-base leading-relaxed">
            Mais do que planejar e avaliar, este é o momento de transformar o conhecimento em ação e fazer da Educação Financeira um caminho para a autonomia e o futuro dos nossos estudantes.
          </p>
        </div>
      </section>

      {/* VÍDEO */}
      <section>
        <h3 className="text-4xl font-bold text-slate-600 dark:text-white text-center pb-8">
          Vídeo de Apresentação
        </h3>
        <div className="relative w-full pb-[56.25%] h-0 rounded-lg overflow-hidden shadow-lg">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/42BVLPl0xw8"
            title="Resumo Módulo 1"
            allowFullScreen
          />
        </div>
      </section>
    </div>
  );
};

export default PageApresentacao1;
