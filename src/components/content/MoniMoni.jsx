'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import { FaPlus, FaArrowLeft } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

const MoniMoni = () => {

  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed('o-que-e');
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [markAsViewed]);

  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      ref={ref} 
      id="o-que-e"
      layout
      className="scroll-mt-20 relative w-full h-[70vh] rounded-2xl overflow-hidden shadow-2xl"
      transition={{ duration: 1.2 }}
    >
      {/* Imagem e camada escura */}
      <AnimatePresence>
        {!expanded && (
          <>
            <motion.div
              className="absolute inset-0 z-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <Image
                src="/learning.jpg"
                alt="Aprendizagem baseada em projetos"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-green-800/70 z-10" />
            </motion.div>

            <motion.div
              className="absolute inset-0 z-20 flex items-center justify-center px-6 text-center text-white"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1 }}
            >
              <div className="max-w-3xl">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                O que é o monitoramento pedagógico em Aprendizagem Baseada em Projetos?
                </h2>
                
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Texto alternativo com fundo verde */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            className="absolute inset-0 z-20 flex items-center justify-center px-6 text-center text-white bg-green-600 overflow-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
          >
            <div className="max-w-3xl py-8">
              <p className="text-base md:text-lg font-medium text-white leading-relaxed">
                No contexto da <span className="bg-white text-green-700 px-2 py-1 rounded font-semibold">Aprendizagem Baseada em Projetos (ABP)</span>, o monitoramento pedagógico vai muito além de uma simples verificação de tarefas. Ele é um <span className="bg-white text-green-700 px-2 py-1 rounded font-semibold">processo contínuo de observação, registro e análise do desenvolvimento dos estudantes e do próprio projeto</span>, com o objetivo de identificar avanços, desafios e necessidades de ajuste. <span className="bg-white text-green-700 px-2 py-1 rounded font-semibold">É a bússola</span> que orienta o educador e os alunos no <span className="bg-white text-green-700 px-2 py-1 rounded font-semibold">percurso da aprendizagem</span>. A partir desse acompanhamento constante, é possível <span className="bg-white text-green-700 px-2 py-1 rounded font-semibold">promover intervenções mais assertivas, fortalecer a autonomia dos estudantes</span> e garantir que cada etapa do projeto contribua de forma efetiva para a <span className="bg-white text-green-700 px-2 py-1 rounded font-semibold">construção do conhecimento</span>. Assim, o <span className="bg-white text-green-700 px-2 py-1 rounded font-semibold">monitoramento se transforma</span> em um instrumento de reflexão e melhoria contínua, que <span className="bg-white text-green-700 px-2 py-1 rounded font-semibold">valoriza o processo tanto quanto o resultado final</span>.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botão flutuante com efeito bounce */}
      <motion.button
        onClick={() => setExpanded(!expanded)}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        className="absolute bottom-4 right-4 z-30 bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-slate-700 rounded-full p-3 shadow-xl transition-all"
        aria-label={expanded ? 'Voltar' : 'Expandir'}
      >
        {expanded ? <FaArrowLeft className="text-lg" /> : <FaPlus className="text-lg" />}
      </motion.button>
    </motion.div>
  )
}

export default MoniMoni