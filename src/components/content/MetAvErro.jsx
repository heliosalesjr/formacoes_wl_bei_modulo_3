"use client";
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import React from 'react'
import Image from 'next/image'

const MetAvErro = () => {
  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed('importancia-erro');
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
    <div ref={ref} id="importancia-erro" className="scroll-mt-20 rounded-xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 p-8 shadow-2xl border border-slate-100 dark:border-slate-700 space-y-8">
      <div className="grid gap-8 md:grid-cols-3 items-stretch">
        {/* Conteúdo - 2/3 da largura */}
        <div className="md:col-span-2 space-y-6 flex flex-col justify-center">
          <div className="flex items-center gap-3">
            <div className="w-1 h-12 bg-gradient-to-b from-green-500 to-blue-500 rounded-full"></div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-700 to-green-700 bg-clip-text text-transparent dark:bg-none dark:text-white">
              A Importância do Erro no Processo de Aprendizagem
            </h2>
          </div>
          
          <p className="text-slate-700 dark:text-slate-200 text-lg leading-relaxed">
            No <strong>processo de avaliação da aprendizagem</strong>, o erro deixa de ser sinal de fracasso e passa a ser <strong>parte essencial do aprendizado</strong>. Ele mostra como o estudante <strong>articula o que já sabe com o que está aprendendo</strong>, revelando caminhos, dúvidas e formas de pensar que ajudam o professor a entender o processo.
          </p>
          
          
          
          <p className="text-slate-700 dark:text-slate-200 text-lg leading-relaxed">
            Com essa leitura, o professor <strong>usa o erro como pista para ajustar a mediação</strong>, oferece do <strong>devolutivas mais direcionadas e construtivas</strong>. Assim, o erro se torna <strong>oportunidade de revisão e reconstrução do conhecimento</strong>, especialmente na <strong>educação financeira</strong>, em que aprender também significa <strong>experimentar, testar hipóteses e refletir sobre as próprias escolhas</strong>.
          </p>
          
        </div>
        
        {/* Imagem - 1/3 da largura */}
        <div className="flex items-center justify-center h-full">
          <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-full h-full min-h-96">
            <Image
              src="/erro.jpg"
              alt="A importância do erro no processo de aprendizagem"
              fill
              className="rounded-xl object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MetAvErro