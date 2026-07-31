"use client";
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import React from 'react'
import Image from 'next/image'

const MoniPPDA = () => {
  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed('monitoramento-ppda');
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
    <div ref={ref} id="monitoramento-ppda" className="scroll-mt-20 rounded-xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 p-8 shadow-2xl border border-slate-100 dark:border-slate-700 space-y-12">
      
      {/* Título Principal */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-green-700 bg-clip-text text-transparent dark:bg-none dark:text-white">
            Monitoramento do Projeto
          </h1>
          
        </div>
        <p className="text-slate-600 dark:text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
          Acompanhe e avalie o desenvolvimento do seu projeto educacional através de estratégias estruturadas de monitoramento.
        </p>
      </div>

      {/* Seção 1: Planejamento do PPDA - Imagem à direita */}
      <div className="grid gap-8 md:grid-cols-3 items-stretch">
        <div className="md:col-span-2 space-y-6 flex flex-col justify-center order-1">
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-green-500 rounded-full"></div>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
              Planejamento do Professor
            </h2>
          </div>
          
          <p className="text-slate-700 dark:text-slate-200 text-base leading-relaxed">
            Este aspecto foca em verificar se os objetivos propostos no Planejamento, sejam eles conceituais, procedimentais ou atitudinais – estão sendo alcançados.
          </p>
          
          <p className="text-slate-700 dark:text-slate-200 text-base leading-relaxed">
            O monitoramento aqui é a checagem em tempo real: as atividades propostas estão levando os alunos a compreender os conceitos de educação financeira? Eles estão desenvolvendo as habilidades procedimentais (como calcular, planejar um orçamento)? E as atitudes (responsabilidade, colaboração, tomada de decisão) estão sendo cultivadas?
          </p>
        </div>
        
        <div className="flex items-center justify-center h-full order-2">
          <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-full h-full min-h-64">
            <Image
              src="/Moni1.jpg"
              alt="Planejamento do PPDA"
              fill
              className="rounded-xl object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      {/* Seção 2: Plano de Ação Coletivo - Imagem à esquerda */}
      <div className="grid gap-8 md:grid-cols-3 items-stretch">
        <div className="flex items-center justify-center h-full order-2 md:order-1">
          <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-full h-full min-h-64">
            <Image
              src="/Moni2.jpg"
              alt="Plano de Ação Coletivo"
              fill
              className="rounded-xl object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
        
        <div className="md:col-span-2 space-y-6 flex flex-col justify-center order-1 md:order-2">
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-gradient-to-b from-green-500 to-blue-500 rounded-full"></div>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
              Projeto dos Estudantes
            </h2>
          </div>
          
          <p className="text-slate-700 dark:text-slate-200 text-base leading-relaxed">
            Aqui, o monitoramento se concentra na execução prática das tarefas. É preciso observar se os estudantes estão cumprindo as atividades de projeto propostas, e se essas tarefas estão conectadas dentro da ideia de projeto sugerida.
          </p>
          
          <p className="text-slate-700 dark:text-slate-200 text-base leading-relaxed">
            Este acompanhamento permite identificar rapidamente gargalos, sobrecargas ou dificuldades na divisão de trabalho, possibilitando intervenções pontuais para manter o projeto no rumo certo.
          </p>
        </div>
      </div>

      {/* Seção 3: Diário de Bordo - Imagem à direita */}
      <div className="grid gap-8 md:grid-cols-3 items-stretch">
        <div className="md:col-span-2 space-y-6 flex flex-col justify-center order-1">
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
              Diário de Bordo
            </h2>
          </div>
          
          <p className="text-slate-700 dark:text-slate-200 text-base leading-relaxed">
            O Diário de Bordo é uma ferramenta poderosa para o monitoramento contínuo. Ele serve como um registro detalhado do processo, permitindo que o educador (e os próprios estudantes) documentem o desenvolvimento do projeto.
          </p>
          
          <p className="text-slate-700 dark:text-slate-200 text-base leading-relaxed">
            O Diário de Bordo é "recomendado para registrar atividades, progressos, ideias e desafios enfrentados durante o projeto". Ele facilita a organização e o acompanhamento das tarefas, documentando "o desenvolvimento de projetos, incluindo datas, locais, descobertas e resultados".
          </p>

          <p className="text-slate-700 dark:text-slate-200 text-base leading-relaxed">
            Ao registrar o processo, é possível diagnosticar possíveis falhas no percurso para saná-las, ou até mesmo identificar avanços que podem ser feitos antes do prazo estabelecido no cronograma.
          </p>
        </div>
        
        <div className="flex items-center justify-center h-full order-2">
          <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-full h-full min-h-64">
            <Image
              src="/Moni3.jpg"
              alt="Diário de Bordo"
              fill
              className="rounded-xl object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      {/* Seção 4: Ferramentas para o Monitoramento - Imagem à esquerda */}
      <div className="grid gap-8 md:grid-cols-3 items-stretch">
        <div className="flex items-center justify-center h-full order-2 md:order-1">
          <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-full h-full min-h-64">
            <Image
              src="/Moni3.png"
              alt="Ferramentas para o Monitoramento"
              fill
              className="rounded-xl object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
        
        <div className="md:col-span-2 space-y-6 flex flex-col justify-center order-1 md:order-2">
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-gradient-to-b from-orange-500 to-red-500 rounded-full"></div>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
              Ferramentas para o Monitoramento
            </h2>
          </div>
          
          <p className="text-slate-700 dark:text-slate-200 text-base leading-relaxed">
            Além do <strong>Diário de Bordo</strong>, o <strong>Padlet</strong> surge como uma ferramenta digital extremamente útil para o monitoramento colaborativo. O Padlet "funciona como um organizador virtual de tarefas. <strong>Ele permite criar e gerenciar murais em diversos formatos, promovendo a curiosidade, a criação e a comunicação entre os estudantes</strong>."
          </p>
          
          <p className="text-slate-700 dark:text-slate-200 text-base leading-relaxed">
            Ele pode ser usado para que os alunos compartilhem seus progressos, dúvidas, descobertas e produtos parciais, <strong>permitindo ao professor um acompanhamento visual e interativo</strong>.
          </p>
        </div>
      </div>

    </div>
  )
}

export default MoniPPDA