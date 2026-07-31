"use client";
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import React from 'react'
import Image from 'next/image'

const AvaIntro = () => {
  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed('avaliacao-intro');
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
    <div ref={ref} id="avaliacao-intro" className="scroll-mt-20 rounded-xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 p-8 shadow-2xl border border-slate-100 dark:border-slate-700 space-y-12">
      
      {/* Título Principal */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-700 to-blue-700 bg-clip-text text-transparent dark:bg-none dark:text-white">
            Retomando registros e monitoramento para avaliar
          </h1>
          
        </div>
        <p className="text-slate-600 dark:text-slate-300 text-lg max-w-4xl mx-auto leading-relaxed">
          A eficácia da avaliação, especialmente a formativa, depende da qualidade dos registros e do monitoramento contínuo. Eles não são mera burocracia, mas a memória do processo de aprendizagem, oferecendo evidências concretas para a avaliação.
        </p>
      </div>

      {/* Seção 1: O Diário de Bordo como ferramenta central - Imagem à direita */}
      <div className="grid gap-8 md:grid-cols-3 items-stretch">
        <div className="md:col-span-2 space-y-6 flex flex-col justify-center order-1">
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-gradient-to-b from-green-500 to-blue-500 rounded-full"></div>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
              O Diário de Bordo como ferramenta central
            </h2>
          </div>
          
          <p className="text-slate-700 dark:text-slate-200 text-base leading-relaxed">
            O Diário de Bordo é fundamental para o acompanhamento e a avaliação, pois permite ao professor:
          </p>
          
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="text-slate-700 dark:text-slate-200 text-base leading-relaxed">
                  <strong>Acompanhar o progresso da turma</strong>: registros contínuos revelam avanços, dificuldades e superações.

                </p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="text-slate-700 dark:text-slate-200 text-base leading-relaxed">
                  <strong>Identificar padrões de aprendizagem</strong>: ao longo do tempo, mostram dúvidas recorrentes e habilidades em desenvolvimento.
                </p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="text-slate-700 dark:text-slate-200 text-base leading-relaxed">
                  <strong>Oferecer feedback qualificado</strong>: com base nos registros, o retorno ao estudante se torna mais preciso e formativo.
                </p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="text-slate-700 dark:text-slate-200 text-base leading-relaxed">
                  <strong>Documentar o processo</strong>: em projetos mais longos, funciona como registro da trajetória e das aprendizagens.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-center h-full order-2">
          <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-full h-full min-h-64">
            <Image
              src="/db.jpg"
              alt="Diário de Bordo como ferramenta central"
              fill
              className="rounded-xl object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      {/* Seção 2: Rubricas de Avaliação - Imagem à esquerda */}
      <div className="grid gap-8 md:grid-cols-3 items-stretch">
        <div className="flex items-center justify-center h-full order-2 md:order-1">
          <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-full h-full min-h-64">
            <Image
              src="/donedone.jpg"
              alt="Rubricas de Avaliação"
              fill
              className="rounded-xl object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
        
        <div className="md:col-span-2 space-y-6 flex flex-col justify-center order-1 md:order-2">
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-green-500 rounded-full"></div>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
              Rubricas de Avaliação: transparência e participação no processo avaliativo
            </h2>
          </div>
          
          <p className="text-slate-700 dark:text-slate-200 text-base leading-relaxed">
            As rubricas de avaliação ajudam a trazer clareza e objetividade ao processo avaliativo, tanto para o professor quanto para o estudante. Elas são especialmente úteis na Aprendizagem Baseada em Projetos (ABP), pois permitem definir de forma mais concreta os critérios de observação e análise do trabalho realizado. Também chamadas de rubricas avaliativas, consistem na definição de critérios ou atributos que orientam a avaliação das tarefas e o acompanhamento do desempenho dos estudantes.
          </p>
          
          
        </div>
      </div>

    </div>
  )
}

export default AvaIntro