"use client";
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import React from 'react'
import { FaLightbulb, FaClipboard, FaPen } from 'react-icons/fa';

const MetAvaAt = () => {
  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed('atividade-pratica');
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
    <div ref={ref} id="atividade-pratica" className="scroll-mt-20 rounded-xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 p-8 shadow-2xl border border-slate-100 dark:border-slate-700 space-y-8">
      
      {/* Cabeçalho */}
      <div className="text-center space-y-3">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-green-700 bg-clip-text text-transparent dark:bg-none dark:text-white">
          Reflita
        </h2>
        <p className="text-xl font-semibold text-slate-700 dark:text-slate-200">
          Pense em um projeto recente:
        </p>
      </div>

      {/* Cards das perguntas */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Pergunta 1 */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-200 dark:border-slate-700 p-6 flex flex-col items-center justify-center text-center h-full">
            <div className="flex items-center justify-center w-16 h-16 mb-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full">
            <FaClipboard className="text-white text-xl" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-white">
            Que tipo de avaliação você aplicou?
            </h3>
        </div>

        {/* Pergunta 2 */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-200 dark:border-slate-700 p-6 flex flex-col items-center justify-center text-center h-full">
            <div className="flex items-center justify-center w-16 h-16 mb-4 bg-gradient-to-br from-green-500 to-green-600 rounded-full">
            <FaLightbulb className="text-white text-xl" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-white">
            Qual seria uma alternativa melhor?
            </h3>
        </div>

        {/* Pergunta 3 */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-200 dark:border-slate-700 p-6 flex flex-col items-center justify-center text-center h-full">
            <div className="flex items-center justify-center w-16 h-16 mb-4 bg-gradient-to-br from-blue-500 to-green-500 rounded-full">
            <FaPen className="text-white text-xl" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-white">
            Escreva duas ações que você pode testar na próxima atividade.
            </h3>
        </div>
        </div>

      {/* Tag discreta */}
      <div className="text-center">
        <span className="text-sm text-slate-400 dark:text-slate-500 tracking-widest uppercase">
          Momento de Reflexão e Planejamento
        </span>
      </div>

    </div>
  )
}

export default MetAvaAt