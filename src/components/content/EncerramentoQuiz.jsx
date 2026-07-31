"use client";
import { useEffect, useRef, useState } from "react";
import confetti from "canvas-confetti";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/contexts/SidebarContext";

const perguntas = [
  {
    id: 1,
    enunciado: "O que é monitoramento pedagógico na ABP?",
    opcoes: [
      "A) Acompanhamento contínuo das etapas do projeto, com registros e devolutivas ao longo do processo.",
      "B) Observação apenas no momento das apresentações finais.",
      "C) Uso de instrumentos avaliativos em momentos específicos para verificar avanços.",
      "D) Reuniões periódicas para discutir ajustes nas atividades planejadas.",
    ],
    correta: 0,
    feedbacks: [
      "Perfeito! O monitoramento pedagógico na ABP é exatamente isso: um acompanhamento contínuo que permite ajustes e melhorias durante todo o processo.",
      "Incorreto. O monitoramento não se limita apenas às apresentações finais, mas acompanha todo o processo de desenvolvimento do projeto.",
      "Não está completo. O monitoramento vai além de momentos específicos, sendo um processo contínuo de acompanhamento.",
      "Embora as reuniões sejam importantes, o monitoramento pedagógico é mais amplo, incluindo registros e devolutivas constantes.",
    ],
  },
  {
    id: 2,
    enunciado: "O que o monitoramento das aprendizagens busca identificar?",
    opcoes: [
      "A) O cumprimento do cronograma de atividades.",
      "B) Os avanços, dificuldades e necessidades de apoio dos estudantes ao longo do processo.",
      "C) O nível de participação dos estudantes nas aulas.",
      "D) A quantidade de instrumentos avaliativos aplicados.",
    ],
    correta: 1,
    feedbacks: [
      "Não é a resposta correta.",
      "Excelente!",
      "Não é a resposta correta.",
      "Não é a resposta correta."
    ],
  },
  {
    id: 3,
    enunciado: "Complete a frase: O registro pedagógico é um instrumento que serve principalmente para ______.",
    opcoes: [
      "A) Guardar anotações de aulas passadas.",
      "B) Acompanhar o processo de aprendizagem e orientar intervenções do professor.",
      "C) Calcular médias e notas finais.",
      "D) Controlar a frequência dos estudantes.",
    ],
    correta: 1,
    feedbacks: [
      "Não é a resposta correta.",
      "Excelente!",
      "Não é a resposta correta.",
      "Não é a resposta correta."
    ],
  },
  {
    id: 4,
    enunciado: "Um grupo de alunos está usando o Diário de Bordo para registrar o que foi feito em cada etapa, dificuldades encontradas e soluções criadas. Qual é o principal benefício desse uso?",
    opcoes: [
      "A) Facilita a organização e permite acompanhar a evolução do projeto.",
      "B) Funciona como registro pessoal de experiências do professor.",
      "C) Guarda apenas dados numéricos de desempenho.",
      "D) Serve para substituir relatórios de avaliação.",
    ],
    correta: 0,
    feedbacks: [
      "Perfeito! O Diário de Bordo é uma ferramenta de organização que permite documentar e acompanhar todo o desenvolvimento do projeto.",
      "Incorreto. O Diário de Bordo é uma ferramenta dos alunos, não do professor.",
      "Não é correto. O Diário de Bordo registra informações qualitativas, não apenas dados numéricos.",
      "Não substitui relatórios, mas complementa o processo de avaliação e monitoramento.",
    ],
  },
  {
    id: 5,
    enunciado: "Entre as ferramentas digitais abaixo, qual é a mais indicada para reunir ideias e registros de forma colaborativa e visual?",
    opcoes: [
      "A) Google Docs.",
      "B) Padlet.",
      "C) Excel.",
      "D) Trello.",
    ],
    correta: 1,
    feedbacks: [
      "Embora o Google Docs seja colaborativo, não é a melhor opção para organização visual de ideias e registros.",
      "Correto! O Padlet é ideal para reunir ideias e registros de forma colaborativa e visual, como um mural digital.",
      "O Excel é mais adequado para dados numéricos e tabelas, não para colaboração visual de ideias.",
      "O Trello é bom para gerenciamento de tarefas, mas o Padlet é mais adequado para reunir ideias de forma visual.",
    ],
  },
  {
    id: 6,
    enunciado: "A avaliação que ocorre durante o processo, com o objetivo de identificar avanços e ajustar estratégias, recebe o nome de:",
    opcoes: [
      "A) Diagnóstica.",
      "B) Somativa.",
      "C) Formativa.",
      "D) Analítica.",
    ],
    correta: 2,
    feedbacks: [
      "A avaliação diagnóstica acontece antes do processo, para conhecer o estado inicial dos alunos.",
      "A avaliação somativa ocorre ao final do processo, para verificar os resultados alcançados.",
      "Exato! A avaliação formativa acontece durante o processo e tem como objetivo melhorar e ajustar as estratégias de ensino.",
      "Não existe um tipo de avaliação chamado 'analítica' na classificação pedagógica tradicional.",
    ],
  },
  {
    id: 7,
    enunciado: "Se o objetivo é conhecer o que os alunos já sabem e quais são seus interesses antes de iniciar o projeto, deve-se aplicar:",
    opcoes: [
      "A) Avaliação somativa.",
      "B) Avaliação diagnóstica.",
      "C) Autoavaliação.",
      "D) Avaliação formativa.",
    ],
    correta: 1,
    feedbacks: [
      "A avaliação somativa é aplicada ao final do processo para verificar os resultados obtidos.",
      "Correto! A avaliação diagnóstica é feita no início para conhecer os conhecimentos prévios e interesses dos alunos.",
      "A autoavaliação é quando os próprios alunos avaliam seu desempenho, não é específica para o início do projeto.",
      "A avaliação formativa ocorre durante o processo, não antes dele começar.",
    ],
  },
  {
    id: 8,
    enunciado: "Leia a seguinte situação: No encerramento do projeto, a equipe decide aplicar uma avaliação para verificar se os objetivos propostos foram atingidos e registrar os resultados obtidos. Essa avaliação é:",
    opcoes: [
      "A) Diagnóstica.",
      "B) Formativa.",
      "C) Somativa.",
      "D) Processual.",
    ],
    correta: 2,
    feedbacks: [
      "A avaliação diagnóstica acontece no início, não no encerramento do projeto.",
      "A avaliação formativa ocorre durante o processo, não no final.",
      "Perfeito! A avaliação somativa é aplicada ao final do processo para verificar se os objetivos foram alcançados.",
      "Avaliação processual é outro nome para avaliação formativa, que acontece durante o processo.",
    ],
  },
  {
    id: 9,
    enunciado: "Marque a alternativa que melhor justifica a importância de analisar erros durante o processo de aprendizagem:",
    opcoes: [
      "A) Permite compreender como o estudante conecta novos conhecimentos aos já existentes.",
      "B) Serve para descontar pontos de forma justa.",
      "C) Prova que o aluno não estudou o suficiente.",
      "D) Garante a padronização das notas.",
    ],
    correta: 0,
    feedbacks: [
      "Excelente! Analisar erros ajuda a compreender o processo de aprendizagem e como os alunos constroem conhecimento.",
      "Incorreto. Analisar erros não tem como objetivo punir, mas compreender e melhorar a aprendizagem.",
      "Essa é uma visão equivocada. Os erros fazem parte natural do processo de aprendizagem.",
      "A análise de erros não visa padronização, mas compreensão individual do processo de aprendizagem.",
    ],
  },
  {
    id: 10,
    enunciado: "Quais são os três elementos básicos de uma rubrica eficaz?",
    opcoes: [
      "A) Parâmetros de avaliação, pontuação e justificativa.",
      "B) Critérios objetivos, indicadores de qualidade e exemplos práticos.",
      "C) Tarefa bem descrita, critérios claros e níveis de desempenho definidos.",
      "D) Descrição da atividade, indicadores e escala de pontuação.",
    ],
    correta: 2,
    feedbacks: [
      "Não está completo. Faltam elementos fundamentais como a descrição da tarefa e níveis de desempenho.",
      "Esses elementos são importantes, mas não constituem os três elementos básicos fundamentais de uma rubrica.",
      "Perfeito! Uma rubrica eficaz deve ter: tarefa bem descrita, critérios claros e níveis de desempenho bem definidos.",
      "Embora sejam elementos relevantes, não representam os três elementos básicos essenciais de uma rubrica.",
    ],
  },
];

export default function EncerramentoQuiz() {
  const ref = useRef(null);
  const { markAsViewed } = useSidebar();

  const [respostas, setRespostas] = useState({});
  const [feedback, setFeedback] = useState({
    open: false,
    perguntaId: null,
    mensagem: "",
    correta: false,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed("encerramento-quiz");
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [markAsViewed]);

  const handleResposta = (perguntaIndex, opcaoIndex) => {
    const pergunta = perguntas[perguntaIndex];
    const jaAcertou = respostas[pergunta.id] === pergunta.correta;

    if (jaAcertou) return; // impede alteração se já acertou

    const correta = opcaoIndex === pergunta.correta;

    if (correta) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }

    setRespostas((prev) => ({
      ...prev,
      [pergunta.id]: correta ? opcaoIndex : prev[pergunta.id],
    }));

    setFeedback({
      open: true,
      perguntaId: pergunta.id,
      mensagem: pergunta.feedbacks[opcaoIndex],
      correta,
    });
  };

  const closeFeedback = () => {
    setFeedback({ open: false, perguntaId: null, mensagem: "", correta: false });
  };

  const perguntasCorretas = Object.values(respostas).filter(
    (resposta, index) => resposta === perguntas[index]?.correta
  ).length;

  return (
    <div
      
      className=" rounded-xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 p-8 shadow-2xl border border-slate-100 dark:border-slate-700"
    >
      <div ref={ref}
            id="encerramento-quiz" className="scroll-mt-20 flex items-center justify-center gap-3 mb-8">
        <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-green-500 rounded-full" />
        <h2 className="text-3xl font-bold text-center text-slate-700 dark:text-white">
          Quiz: Monitoramento Pedagógico na ABP
        </h2>
        <div className="w-1 h-12 bg-gradient-to-b from-green-500 to-slate-500 rounded-full" />
      </div>

      {Object.keys(respostas).length > 0 && (
        <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
          <p className="text-center text-blue-700 dark:text-blue-300 font-medium">
            Progresso: {perguntasCorretas} de {perguntas.length} perguntas corretas
          </p>
        </div>
      )}

      <div className="space-y-10 text-slate-700 dark:text-slate-200">
        {perguntas.map((pergunta, perguntaIndex) => {
          const respostaUsuario = respostas[pergunta.id];

          return (
            <div key={pergunta.id} className="space-y-4">
              <p className="text-xl font-medium">
                <span className="text-blue-600 font-bold">{pergunta.id}.</span> {pergunta.enunciado}
              </p>
              <div className="space-y-3">
                {pergunta.opcoes.map((opcao, opcaoIndex) => {
                  const selecionada = respostaUsuario === opcaoIndex;
                  const jaAcertou = respostaUsuario === pergunta.correta;

                  const cor =
                    selecionada && opcaoIndex === pergunta.correta
                      ? "bg-green-100 dark:bg-green-900/30 border-green-400 dark:border-green-600 text-green-800 dark:text-green-300 font-semibold"
                      : selecionada && opcaoIndex !== pergunta.correta
                      ? "bg-red-100 dark:bg-red-900/30 border-red-400 dark:border-red-600 text-red-800 dark:text-red-300"
                      : "bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border-slate-300 dark:border-slate-600";

                  return (
                    <button
                      key={opcaoIndex}
                      onClick={() => handleResposta(perguntaIndex, opcaoIndex)}
                      disabled={jaAcertou}
                      className={`w-full text-left px-4 py-3 rounded-md border transition-all duration-300 ease-in-out ${cor} ${
                        jaAcertou ? "cursor-not-allowed" : "cursor-pointer"
                      }`}
                    >
                      {opcao}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <AlertDialog open={feedback.open}>
        <AlertDialogContent className="max-w-md">
          <AlertDialogHeader>
            <AlertDialogTitle>
              {feedback.correta ? "✅ Resposta correta!" : "❌ Resposta incorreta"}
            </AlertDialogTitle>
            <AlertDialogDescription className="text-slate-600 mt-2">
              {feedback.mensagem}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex justify-end mt-4">
            <Button onClick={closeFeedback}>Fechar</Button>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}