'use client'
import React, { useState, useEffect, useRef } from 'react'
import { useSidebar } from '@/contexts/SidebarContext';
import confetti from 'canvas-confetti'

const checklistItems = [
  'Aprendi a monitorar o desenvolvimento dos alunos usando o Plano de Ação e Diário de Bordo.',
  'Compreendi a diferença entre avaliação diagnóstica, formativa e somativa e quando aplicar cada uma delas.',
  'Entendi que o erro faz parte do aprendizado e como usar feedback, rubricas e registros para apoiar o avanço dos estudantes.'
]

const EncerramentoNesseModuloEu = () => {

  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed('what');
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [markAsViewed]);

  const [checkedItems, setCheckedItems] = useState(Array(checklistItems.length).fill(false))
  const allChecked = checkedItems.every(Boolean)

  useEffect(() => {
    if (allChecked) {
      confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.6 },
      })
    }
  }, [allChecked])

  const toggleCheckbox = (index) => {
    const updated = [...checkedItems]
    updated[index] = !updated[index]
    setCheckedItems(updated)
  }

  return (
    <div ref={ref} id="what" className="scroll-mt-20 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl p-8 md:p-12 max-w-3xl mx-auto space-y-6">
      <h2 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white mb-4">
        NESSE MÓDULO EU:
      </h2>
      <ul className="space-y-4">
        {checklistItems.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <button
              onClick={() => toggleCheckbox(index)}
              className={`w-6 h-6 mt-1 flex items-center justify-center border-2 rounded transition-colors duration-300 ${
                checkedItems[index]
                  ? 'bg-green-500 border-green-500 text-white'
                  : 'border-slate-400 bg-white dark:bg-slate-800 dark:border-slate-500'
              }`}
            >
              {checkedItems[index] && (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={3}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </button>
            <span className="text-slate-700 dark:text-slate-200 text-base">{item}</span>
          </li>
        ))}
      </ul>

      {allChecked && (
        <div className="text-green-600 font-semibold text-center text-lg mt-6">
          🎉 Parabéns! Você completou este módulo!
        </div>
      )}
    </div>
  )
}

export default EncerramentoNesseModuloEu
