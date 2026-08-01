"use client";
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import React from 'react';
import Image from 'next/image';
import { FaClipboardCheck, FaUserGraduate, FaLightbulb, FaChartLine } from 'react-icons/fa';

const AvaRelevancia = () => {
  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed('relevancia-rubrica');
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
    <div
      ref={ref}
      id="relevancia-rubrica"
      className="scroll-mt-20 rounded-xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 p-8 shadow-2xl border border-slate-100 dark:border-slate-700 space-y-8"
    >
      {/* Cabeçalho com Título e Imagem */}
      <div className="grid gap-8 md:grid-cols-5 items-center">
        {/* Título - 3/5 */}
        <div className="md:col-span-3 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-1 h-16 bg-gradient-to-b from-blue-500 to-green-500 rounded-full"></div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-green-700 bg-clip-text text-transparent dark:bg-none dark:text-white">
              Relevância da Rubrica Avaliativa
            </h2>
          </div>
          
          <p className="text-slate-700 dark:text-slate-200 text-lg leading-relaxed">
            É fundamental que o professor <strong>apresente a rubrica aos estudantes</strong>, mesmo em turmas de estudantes mais novos, pois esse instrumento contribui significativamente para a <strong>transparência dos objetivos de aprendizagem</strong> e para o desenvolvimento do <strong>autoconhecimento</strong>.
          </p>
        </div>

        {/* Imagem Ilustrativa - 2/5 */}
        <div className="md:col-span-2 flex items-center justify-center">
          <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
              src="/kidz.webp"
              alt="Rubrica Avaliativa"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Cards com Pontos-Chave */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Card 1 - Transparência */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-slate-800 dark:to-slate-800 rounded-xl p-6 border-2 border-blue-200 dark:border-slate-700 shadow-md hover:shadow-lg transition-all duration-300">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center shadow-md">
              <FaClipboardCheck className="text-white text-xl" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-800 dark:text-blue-300 mb-3">Transparência e Clareza</h3>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                Quando o professor <strong>explicita os critérios de avaliação</strong>, ajuda os estudantes a compreenderem quais <strong>comportamentos, atitudes e conhecimentos</strong> são esperados em determinada atividade, favorecendo a <strong>autonomia e o engajamento</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 - Papel do Professor */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-slate-800 dark:to-slate-800 rounded-xl p-6 border-2 border-green-200 dark:border-slate-700 shadow-md hover:shadow-lg transition-all duration-300">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-500 flex items-center justify-center shadow-md">
              <FaUserGraduate className="text-white text-xl" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-green-800 dark:text-green-300 mb-3">Preenchimento pelo Professor</h3>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                Considerando turmas mais novas em que os alunos ainda estão em processo de desenvolvimento das habilidades de autorregulação, o professor pode preencher a rubrica, interpretando as evidências observadas durante as situações de aprendizagem.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 - Papel Diagnóstico */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-slate-800 dark:to-slate-800 rounded-xl p-6 border-2 border-blue-200 dark:border-slate-700 shadow-md hover:shadow-lg transition-all duration-300">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center shadow-md">
              <FaLightbulb className="text-white text-xl" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-800 dark:text-blue-300 mb-3">Papel Diagnóstico e Formativo</h3>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                A rubrica assume um <strong>papel diagnóstico e formativo</strong>, permitindo ao professor identificar <strong>avanços, dificuldades e potencialidades</strong>, além de planejar <strong>intervenções pedagógicas</strong> mais adequadas.
              </p>
            </div>
          </div>
        </div>

        {/* Card 4 - Compreensão dos Estudantes */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-slate-800 dark:to-slate-800 rounded-xl p-6 border-2 border-green-200 dark:border-slate-700 shadow-md hover:shadow-lg transition-all duration-300">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-500 flex items-center justify-center shadow-md">
              <FaChartLine className="text-white text-xl" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-green-800 dark:text-green-300 mb-3">Contato com os Critérios</h3>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                Mesmo que o preenchimento não seja realizado pelos estudantes, é essencial que eles <strong>tomem contato com os critérios</strong>, compreendendo o que se espera, o que já conseguem realizar e o que ainda precisam desenvolver.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Box de Destaque Final */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-green-600 p-8 text-white shadow-xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"></div>
        
        <div className="relative z-10 flex items-start gap-6">
          <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
            <FaClipboardCheck className="text-white text-3xl" />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-3">Em Resumo</h3>
            <p className="text-white/95 leading-relaxed text-lg">
              A rubrica é uma ferramenta poderosa que, quando bem utilizada, promove <strong>clareza, autonomia e desenvolvimento integral</strong> dos estudantes, mesmo quando o preenchimento é realizado pelo professor. O mais importante é garantir que os critérios sejam <strong>compartilhados, compreendidos e utilizados</strong> como bússola para o crescimento contínuo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvaRelevancia;