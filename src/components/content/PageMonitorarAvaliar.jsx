"use client";
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import { titleFont } from '@/lib/fonts';

const PageMonitorarAvaliar = () => {
  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) markAsViewed('monitorar-avaliar');
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [markAsViewed]);

  return (
    <div ref={ref} id="monitorar-avaliar" className="scroll-mt-20 p-8 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl mx-auto max-w-5xl space-y-8">

      <h2 className={`${titleFont.className} text-4xl font-bold text-center text-slate-600 dark:bg-none dark:text-white`}>
        Obetivos do Módulo 3
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-slate-800 dark:to-slate-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <h3 className="font-bold text-blue-800 dark:text-blue-300 text-lg">Monitoramento</h3>
          </div>
          <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
            Compreender a importância de monitorar as atividades e projetos para fazer ajustes necessários
          </p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-slate-800 dark:to-slate-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-green-800 dark:text-green-300 text-lg">Métodos Avaliativos</h3>
          </div>
          <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
            Refletir sobre diferentes práticas avaliativas cotidianas
          </p>
        </div>

        <div className="bg-gradient-to-br from-violet-50 to-purple-100 dark:from-slate-800 dark:to-slate-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-violet-500 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="font-bold text-violet-800 dark:text-violet-300 text-lg">Avaliação na ABP</h3>
          </div>
          <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
            Conhecer ferramentas avaliativas como a Rubrica
          </p>
        </div>

      </div>
    </div>
  );
};

export default PageMonitorarAvaliar;
