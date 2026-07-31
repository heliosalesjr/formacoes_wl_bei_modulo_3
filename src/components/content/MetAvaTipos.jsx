"use client";
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import React from 'react'
import { FaSearch,  FaTrophy, FaUsers,  FaBook, FaEye } from 'react-icons/fa';

const MetAvaTipos = () => {
  const ref = useRef();
    const { markAsViewed } = useSidebar();
  
    useEffect(() => {
      if (!ref.current) return;

      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed("tipos-avaliacao");
        }
      }, { threshold: 0.5 });

      observer.observe(ref.current);

      return () => observer.disconnect();
    }, [markAsViewed, ref.current]);

  return (
    <div  className=" rounded-xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 p-8 shadow-2xl border border-slate-100 dark:border-slate-700 space-y-12">
      
      {/* Título Principal */}
      <div ref={ref} id="tipos-avaliacao" className="scroll-mt-20 text-center space-y-6">
        <div className="flex items-center justify-center gap-3">
          
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-green-700 bg-clip-text text-transparent dark:bg-none dark:text-white">
            Tipos de Avaliação: Diagnóstica, Formativa e Somativa
          </h1>
          
        </div>
        
        <p className="text-slate-700 dark:text-slate-200 text-lg leading-relaxed max-w-5xl mx-auto">
          Para uma avaliação completa e eficaz na Aprendizagem Baseada em Projetos, é fundamental compreender e aplicar os <strong>diferentes tipos de avaliação</strong>: diagnóstica, formativa e somativa. Cada uma delas tem um <strong>propósito específico</strong> e contribui de maneira única para o processo de ensino-aprendizagem.
        </p>
      </div>

      {/* Avaliação Diagnóstica */}
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-slate-800 dark:to-slate-800 rounded-xl p-8 border border-blue-200 dark:border-slate-700">
        <div className="space-y-6">
          {/* Cabeçalho da seção */}
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full shadow-lg">
              <FaSearch className="text-white text-2xl" />
            </div>
            <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-300">
              Avaliação Diagnóstica
            </h2>
          </div>

          {/* Cards de informações */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Propósito e Quando Aplicar */}
            <div className="bg-white dark:bg-slate-900 rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-bold text-blue-700 dark:text-blue-400 mb-3">Propósito</h3>
              <p className="text-slate-700 dark:text-slate-200 text-sm leading-relaxed mb-4">
                A avaliação diagnóstica é realizada no <strong>início de um novo ciclo</strong> de aprendizagem, projeto ou unidade. Seu principal objetivo é <strong>identificar os conhecimentos prévios</strong> dos estudantes, suas habilidades, interesses e possíveis <strong>lacunas de aprendizagem</strong>. Ela serve como um <strong>ponto de partida</strong> para o planejamento e a personalização do ensino.
              </p>
              <div className="flex items-center gap-2 text-blue-600">
                <FaEye className="text-sm" />
                <span className="text-xs font-semibold">QUANDO APLICAR:</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-sm mt-1">
                No início do ano letivo, de um novo projeto de educação financeira, ou antes de introduzir um novo conceito complexo.
              </p>
            </div>

            {/* Benefícios */}
            <div className="bg-white dark:bg-slate-900 rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-bold text-blue-700 dark:text-blue-400 mb-3">Benefícios</h3>
              <p className="text-slate-700 dark:text-slate-200 text-sm leading-relaxed">
                Permite ao professor <strong>adaptar o conteúdo</strong> e as estratégias de ensino às <strong>necessidades reais da turma</strong>, garantindo que a educação financeira seja relevante e acessível a todos.
              </p>
            </div>
          </div>

          {/* Estratégias */}
          <div className="bg-white dark:bg-slate-900 rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-bold text-blue-700 dark:text-blue-400 mb-4">Conexão com o Programa</h3>
            <p className="text-slate-700 dark:text-slate-200 text-sm mb-4">
              "Diagnóstico do perfil da turma e de seus conhecimentos prévios" no Módulo 1. Ele sugere diversas estratégias, como:
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <FaUsers className="text-blue-500" />
                  <span className="font-semibold text-blue-700 dark:text-blue-400 text-sm">Para o perfil da turma:</span>
                </div>
                <ul className="space-y-1 text-slate-600 dark:text-slate-300 text-sm">
                  <li>• "Jogo de perguntas e respostas"</li>
                  <li>• "Bate-papo em pequenos grupos"</li>
                  <li>• "Roda de conversa"</li>
                  <li>• "A pessoa mais importante da minha vida"</li>
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <FaBook className="text-blue-500" />
                  <span className="font-semibold text-blue-700 dark:text-blue-400 text-sm">Para conhecimentos prévios:</span>
                </div>
                <ul className="space-y-1 text-slate-600 dark:text-slate-300 text-sm">
                  <li>• "Atividades dos capítulos 1, 2 e 3 do Livro do Estudante"</li>
                  <li>• "Sondagem por meio do Google Formulários"</li>
                  <li>• "Quiz sobre conteúdo de matemática do ano anterior"</li>
                  <li>• "Provinhas (importante deixar claro aos estudantes que não vale nota)"</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Avaliação Formativa */}
      <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-slate-800 dark:to-slate-800 rounded-xl p-8 border border-green-200 dark:border-slate-700">
        <div className="space-y-6">
          {/* Cabeçalho da seção */}
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-lg">
              <FaTrophy className="text-white text-2xl" />
            </div>
            <h2 className="text-3xl font-bold text-green-800 dark:text-green-300">
              Avaliação Formativa
            </h2>
          </div>

          {/* Cards de informações */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Propósito e Quando Aplicar */}
            <div className="bg-white dark:bg-slate-900 rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-bold text-green-700 dark:text-green-400 mb-3">Propósito</h3>
              <p className="text-slate-700 dark:text-slate-200 text-sm leading-relaxed mb-4">
                A avaliação formativa ocorre <strong>durante o processo</strong> de ensino-aprendizagem. Seu objetivo é <strong>monitorar continuamente</strong> o progresso dos estudantes, fornecer <strong>feedback imediato e construtivo</strong>, e permitir que o professor ajuste suas estratégias pedagógicas em tempo real. É um processo de <strong>"avaliação para a aprendizagem"</strong>.
              </p>
              <div className="flex items-center gap-2 text-green-600">
                <FaEye className="text-sm" />
                <span className="text-xs font-semibold">QUANDO APLICAR:</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-sm mt-1">
                Regularmente e em momentos-chave ao longo do processo.
              </p>
            </div>

            {/* Benefícios */}
            <div className="bg-white dark:bg-slate-900 rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-bold text-green-700 dark:text-green-400 mb-3">Benefícios</h3>
              <p className="text-slate-700 dark:text-slate-200 text-sm leading-relaxed">
                Ajuda os estudantes a identificar seus <strong>pontos fortes e áreas de melhoria</strong>, promovendo a <strong>autorregulação da aprendizagem</strong>. Para o professor, oferece dados para <strong>intervir prontamente</strong>, sanar dúvidas e aprofundar conhecimentos.
              </p>
            </div>
          </div>

          {/* Conexão com o programa */}
          <div className="bg-white dark:bg-slate-900 rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-bold text-green-700 dark:text-green-400 mb-3">Conexão com o Programa</h3>
            <p className="text-slate-700 dark:text-slate-200 text-sm leading-relaxed">
              Este tipo de avaliação está intrinsecamente ligado ao conceito de <strong>"monitoramento"</strong> que discutimos na seção 3.1. As "verificações e métodos avaliativos" para acompanhar o avanço dos projetos são exemplos de avaliação formativa. O uso do <strong>"Diário de Bordo"</strong> e do <strong>"Padlet"</strong> para registrar o processo e as discussões em sala de aula são ferramentas formativas essenciais.
            </p>
          </div>
        </div>
      </div>

      {/* Avaliação Somativa */}
      <div className="bg-gradient-to-br from-blue-50 to-green-50 dark:from-slate-800 dark:to-slate-800 rounded-xl p-8 border border-blue-200 dark:border-slate-700">
        <div className="space-y-6">
          {/* Cabeçalho da seção */}
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full shadow-lg">
              <FaTrophy className="text-white text-2xl" />
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-800 to-green-800 bg-clip-text text-transparent dark:bg-none dark:text-white">
              Avaliação Somativa
            </h2>
          </div>

          {/* Cards de informações */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Propósito e Quando Aplicar */}
            <div className="bg-white dark:bg-slate-900 rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-bold bg-gradient-to-r from-blue-700 to-green-700 bg-clip-text text-transparent mb-3">Propósito</h3>
              <p className="text-slate-700 dark:text-slate-200 text-sm leading-relaxed mb-4">
                A avaliação somativa é realizada ao <strong>final de uma unidade</strong> de ensino, de um módulo ou de um projeto completo. Seu objetivo é <strong>verificar o nível de aprendizagem alcançado</strong> pelos estudantes em relação aos objetivos propostos. É uma <strong>"avaliação da aprendizagem"</strong>.
              </p>
              <div className="flex items-center gap-2 text-blue-600">
                <FaEye className="text-sm" />
                <span className="text-xs font-semibold">QUANDO APLICAR:</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-sm mt-1">
                Ao término de um projeto, de um capítulo do Livro do Estudante, ou no encerramento do programa anual.
              </p>
            </div>

            {/* Benefícios */}
            <div className="bg-white dark:bg-slate-900 rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-bold bg-gradient-to-r from-blue-700 to-green-700 bg-clip-text text-transparent mb-3">Benefícios</h3>
              <p className="text-slate-700 dark:text-slate-200 text-sm leading-relaxed">
                Fornece um <strong>panorama geral</strong> do que foi aprendido e serve como base para a certificação ou para a tomada de decisões sobre o próximo estágio da aprendizagem. É importante que, mesmo na avaliação somativa, o foco não seja apenas a nota, mas a <strong>demonstração de competências</strong> e a <strong>reflexão sobre o percurso</strong>.
              </p>
            </div>
          </div>

          {/* Conexão com o programa */}
          <div className="bg-white dark:bg-slate-900 rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-bold bg-gradient-to-r from-blue-700 to-green-700 bg-clip-text text-transparent dark:bg-none dark:text-white mb-4">Conexão com o Programa</h3>
            <p className="text-slate-700 dark:text-slate-200 text-sm leading-relaxed mb-4">
              Embora a ABP valorize o processo, <strong>a avaliação somativa ainda tem seu lugar</strong>. No momento de planejar o ano, é importante o professor incluir a necessidade de um bom <strong>plano de avaliação</strong> que contém <strong>indicadores ou evidências de aprendizagem de acordo com cada objetivo elencado</strong>. Além disso, a <strong>Culminância</strong>, que veremos no Módulo 4, <strong>é um momento somativo</strong>, onde os estudantes apresentam o produto final de seu aprendizado em educação financeira.
            </p>
            
          </div>
        </div>
      </div>

    </div>
  )
}

export default MetAvaTipos