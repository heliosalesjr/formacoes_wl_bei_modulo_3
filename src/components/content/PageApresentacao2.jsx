"use client";
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import Image from 'next/image';
import { titleFont } from '@/lib/fonts';

const PageApresentacao2 = () => {
  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) markAsViewed('ao-final');
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [markAsViewed]);

  return (
    <div ref={ref} id="ao-final" className="scroll-mt-20 p-8 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl mx-auto max-w-5xl">
      <div className="grid gap-8 md:grid-cols-3 items-stretch">

        {/* Imagem - 1/3 da largura */}
        <div className="relative w-full h-full min-h-[300px] overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <Image
            src="/check2.png"
            alt="Objetivos do módulo"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Conteúdo - 2/3 da largura */}
        <div className="md:col-span-2 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-green-500 rounded-full"></div>
            <h2 className={`${titleFont.className} text-3xl font-bold bg-gradient-to-r from-blue-700 to-green-700 bg-clip-text text-transparent dark:bg-none dark:text-white`}>
              Ao final deste módulo, você será capaz de:
            </h2>
          </div>

          <p className="text-slate-700 dark:text-slate-200 text-lg leading-relaxed">
            Compreender o conceito e a importância do monitoramento pedagógico na Aprendizagem Baseada em Projetos.
          </p>
          <p className="text-slate-700 dark:text-slate-200 text-lg leading-relaxed">
            Identificar e aplicar diferentes métodos e tipos de avaliação (diagnóstica, formativa e somativa) no contexto da educação financeira.
          </p>
          <p className="text-slate-700 dark:text-slate-200 text-lg leading-relaxed">
            Utilizar registros e ferramentas digitais, como o Padlet, para um monitoramento e avaliação eficazes dos projetos.
          </p>
          <p className="text-slate-700 dark:text-slate-200 text-lg leading-relaxed">
            Elaborar e aplicar rubricas de avaliação para promover clareza e autonomia no processo avaliativo.
          </p>
          <p className="text-slate-700 dark:text-slate-200 text-lg leading-relaxed">
            Reconhecer o erro como uma oportunidade de aprendizagem e utilizá-lo para aprimorar o processo avaliativo.
          </p>
        </div>

      </div>
    </div>
  );
};

export default PageApresentacao2;
