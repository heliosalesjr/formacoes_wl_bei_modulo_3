"use client";
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import React from 'react'

const AvaBeneficios = () => {
  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed('avaliacao-beneficios');
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [markAsViewed]);

  return (
    <div ref={ref} id="avaliacao-beneficios" className="scroll-mt-20 rounded-xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 p-8 shadow-2xl border border-slate-100 dark:border-slate-700 space-y-12">
      
      {/* Título Principal */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-green-700 bg-clip-text text-transparent dark:bg-none dark:text-white">
            Benefícios da Utilização de Rubricas
          </h1>
          
        </div>
      </div>

      {/* Seção 1: Para o Professor */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          
          <h2 className="text-2xl font-bold text-slate-700 dark:text-slate-200 ml-6">
            Para o Professor
          </h2>
        </div>
        
        <div className="space-y-4">
          <div className="flex gap-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <p className="text-slate-700 dark:text-slate-200 text-base leading-relaxed">
                Facilita a avaliação, tornando-a mais rápida e consistente.
              </p>
            </div>
          </div>
          
          <div className="flex gap-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <p className="text-slate-700 dark:text-slate-200 text-base leading-relaxed">
                Reduz a subjetividade e aumenta a equidade na atribuição de notas ou feedbacks.
              </p>
            </div>
          </div>
          
          <div className="flex gap-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <p className="text-slate-700 dark:text-slate-200 text-base leading-relaxed">
                Ajuda a identificar pontos fortes e fracos da turma como um todo.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Seção 2: Para o Estudante */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          
          <h2 className="text-2xl font-bold text-slate-700 dark:text-slate-200 ml-6">
            Para o Estudante
          </h2>
        </div>
        
        <div className="space-y-4">
          <div className="flex gap-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <p className="text-slate-700 dark:text-slate-200 text-base leading-relaxed">
                Deixa claro o que se espera dele, desde o início da tarefa.
              </p>
            </div>
          </div>
          
          <div className="flex gap-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <p className="text-slate-700 dark:text-slate-200 text-base leading-relaxed">
                Permite a autoavaliação e a melhoria contínua, pois ele sabe exatamente o que precisa fazer para alcançar um nível superior.
              </p>
            </div>
          </div>
          
          <div className="flex gap-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <p className="text-slate-700 dark:text-slate-200 text-base leading-relaxed">
                Promove a autonomia e a responsabilidade pela própria aprendizagem.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default AvaBeneficios