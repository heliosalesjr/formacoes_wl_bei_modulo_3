"use client";
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import React from 'react'
import { FaFile, FaUsers, FaBook, FaBullseye, FaClock, FaChartLine, FaExclamationCircle } from 'react-icons/fa';

const MoniDef = () => {
  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed('aspectos');
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
    <div ref={ref} id="aspectos" className="scroll-mt-20 rounded-xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 p-8 shadow-2xl border border-slate-100 dark:border-slate-700 space-y-12">
      
      {/* Título Principal */}
      <div className="text-center space-y-6">
        <div className="flex items-center justify-center gap-3">
          
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-green-700 bg-clip-text text-transparent dark:bg-none dark:text-white">
            O Monitoramento
          </h1>
          
        </div>
        
        {/* Parágrafos de Introdução */}
        <div className="space-y-6 max-w-4xl mx-auto">
          <p className="text-slate-700 dark:text-slate-200 text-lg leading-relaxed">
            O monitoramento é crucial para observar <span className="font-semibold text-slate-800 dark:text-slate-100">"o quanto esses processos estão dando resultado"</span>. Ele nos permite ir além do <span className="font-semibold text-slate-800 dark:text-slate-100">"o quê"</span> está sendo feito, para entender o <span className="font-semibold text-slate-800 dark:text-slate-100">"como"</span> e o <span className="font-semibold text-slate-800 dark:text-slate-100">"porquê"</span> da aprendizagem.
          </p>
          
          <p className="text-slate-700 dark:text-slate-200 text-lg leading-relaxed">
            Para que o monitoramento seja eficaz e contribua para o êxito dos projetos, é fundamental observar três aspectos principais:
          </p>
        </div>
      </div>

      {/* Cards dos 3 Aspectos */}
      <div className="grid gap-8 md:grid-cols-3">
        
        {/* Card 1: Planejamento do PPDA */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 p-6 space-y-4 hover:scale-105">
          <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto shadow-lg">
            <FaBullseye className="text-white text-2xl" />
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">
              Planejamento do Professor
            </h3>
            
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              Observar se os objetivos (conceituais, procedimentais e atitudinais) elencados estão sendo alcançados através das verificações e de métodos avaliativos.
             
            </p>
          </div>
        </div>

        {/* Card 2: Plano de Ação Coletivo */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 p-6 space-y-4 hover:scale-105">
          <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full mx-auto shadow-lg">
            <FaUsers className="text-white text-2xl" />
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">
              Projeto dos Estudantes
            </h3>
            
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              Observar se os alunos estão cumprindo as tarefas de projeto propostas no livro, e se essas tarefas estão conectadas dentro da ideia de projeto sugerida.
            </p>
          </div>
        </div>

        {/* Card 3: Diário de Bordo */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 p-6 space-y-4 hover:scale-105">
          <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full mx-auto shadow-lg">
            <FaFile className="text-white text-2xl" />
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">
              Diário de Bordo
            </h3>
            
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              Registrar o processo e identificar avanços e eventuais falhas dentro do processo, para poder ajustar o cronograma.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default MoniDef