const cards = [
  {
    "q": "Art. 1º — Não há crime ______ que o defina.",
    "a": "sem lei anterior"
  },
  {
    "q": "Art. 2º — Ninguém pode ser punido por fato que lei posterior ______ crime.",
    "a": "deixa de considerar"
  },
  {
    "q": "Art. 3º — A lei excepcional ou temporária, embora decorrido o período de sua duração, ______ ao fato praticado durante sua vigência.",
    "a": "aplica-se"
  },
  {
    "q": "Art. 4º — Considera-se praticado o crime no momento da ______ ou omissão.",
    "a": "ação"
  },
  {
    "q": "Art. 5º — Aplica-se a lei brasileira ao crime cometido no ______ nacional.",
    "a": "território"
  },
  {
    "q": "Art. 6º — Considera-se praticado o crime no lugar em que ocorreu a ação ou omissão, no todo ou em parte, bem como onde se produziu ou ______ produzir-se o resultado.",
    "a": "deveria"
  },
  {
    "q": "Art. 8º — A pena cumprida no estrangeiro ______ a pena imposta no Brasil pelo mesmo crime, quando diversas.",
    "a": "atenua"
  },
  {
    "q": "Art. 10 — O dia do começo ______ no cômputo do prazo.",
    "a": "inclui-se"
  },
  {
    "q": "Art. 12 — As regras gerais deste Código aplicam-se aos fatos incriminados por lei especial, se esta não ______ de modo diverso.",
    "a": "dispuser"
  },
  {
    "q": "Art. 100 — A ação penal é pública, salvo quando a lei expressamente a declara ______ do ofendido.",
    "a": "privativa"
  },
  {
    "q": "Art. 102 — A representação será irretratável depois de oferecida a ______.",
    "a": "denúncia"
  },
  {
    "q": "Art. 103 — O prazo para queixa ou representação é de ______ meses.",
    "a": "6 (seis)"
  },
  {
    "q": "Art. 104 — O direito de queixa não pode ser exercido quando renunciado expressa ou ______.",
    "a": "tacitamente"
  },
  {
    "q": "Art. 105 — O perdão do ofendido ______ ao prosseguimento da ação.",
    "a": "obsta"
  },
  {
    "q": "Art. 118 — As penas mais leves ______ com as mais graves.",
    "a": "prescrevem"
  },
  {
    "q": "Art. 119 — No concurso de crimes, a extinção da punibilidade incidirá sobre a pena de cada um, ______.",
    "a": "isoladamente"
  },
  {
    "q": "Art. 120 — O perdão judicial não será considerado para efeitos de ______.",
    "a": "reincidência"
  },
  {
    "q": "Art. 121 — ______: Pena — reclusão, de seis a vinte anos.",
    "a": "Matar alguém"
  },
  {
    "q": "Art. 121, §1º — O juiz pode reduzir a pena de ______ a um terço.",
    "a": "um sexto"
  },
  {
    "q": "Art. 129 — ______ a integridade corporal ou a saúde de outrem.",
    "a": "Ofender"
  },
  {
    "q": "Art. 150 — Entrar ou permanecer, clandestina ou ______, em casa alheia...",
    "a": "astuciosamente"
  },
  {
    "q": "Art. 154 — Revelar alguém, sem ______, segredo de que tem ciência em razão de função...",
    "a": "justa causa"
  },
  {
    "q": "Art. 294 — Fabricar, adquirir, fornecer, possuir ou guardar objeto especialmente destinado à ______.",
    "a": "falsificação"
  },
  {
    "q": "Art. 295 — Se o agente é funcionário público e comete o crime prevalecendo-se do cargo, aumenta-se a pena de ______.",
    "a": "sexta parte"
  },
  {
    "q": "Art. 297 — Falsificar, no todo ou em parte, ______, ou alterar documento público verdadeiro.",
    "a": "documento público"
  },
  {
    "q": "Art. 298 — Falsificar, no todo ou em parte, documento particular ou alterar documento particular ______.",
    "a": "verdadeiro"
  },
  {
    "q": "Art. 304 — A pena pelo uso de documento falso é a ______ à falsificação ou alteração.",
    "a": "cominada"
  },
  {
    "q": "Art. 307 — Atribuir-se ou atribuir a terceiro falsa identidade para obter ______.",
    "a": "vantagem"
  },
  {
    "q": "Art. 312 — O funcionário público pode apropriar-se de bem de que tem a posse em razão do ______.",
    "a": "cargo"
  },
  {
    "q": "Art. 359 — Exercer função, atividade, direito, autoridade ou múnus, de que foi suspenso ou ______ por decisão judicial.",
    "a": "privado"
  },
  {
    "q": "Art. 5º, §1º — Para os efeitos penais, consideram-se como ______ do território nacional certas embarcações e aeronaves brasileiras.",
    "a": "extensão"
  },
  {
    "q": "Art. 7º — Ficam sujeitos à lei brasileira, embora cometidos no ______.",
    "a": "estrangeiro"
  },
  {
    "q": "Art. 9º — A sentença estrangeira, quando a aplicação da lei brasileira produz na espécie as mesmas consequências, pode ser ______ no Brasil.",
    "a": "homologada"
  },
  {
    "q": "Art. 11 — Desprezam-se, nas penas privativas de liberdade e nas restritivas de direitos, as ______ de dia.",
    "a": "frações"
  },
  {
    "q": "Art. 100, §1º — A ação pública é promovida pelo ______.",
    "a": "Ministério Público"
  },
  {
    "q": "Art. 100, §2º — A ação de iniciativa privada é promovida mediante ______ do ofendido ou de quem tenha qualidade para representá-lo.",
    "a": "queixa"
  },
  {
    "q": "Art. 106 — Se o querelado ______ o perdão, ele não produz efeito.",
    "a": "recusa"
  },
  {
    "q": "Art. 107 — Extingue-se a punibilidade pela prescrição, decadência ou ______.",
    "a": "perempção"
  },
  {
    "q": "Art. 109 — A prescrição, antes de transitar em julgado a sentença final, regula-se pelo ______ da pena privativa de liberdade cominada ao crime.",
    "a": "máximo"
  },
  {
    "q": "Art. 110 — A prescrição depois de transitar em julgado a sentença condenatória regula-se pela pena ______.",
    "a": "aplicada"
  },
  {
    "q": "Art. 111 — Nos crimes permanentes, a prescrição começa a correr do dia em que cessou a ______.",
    "a": "permanência"
  },
  {
    "q": "Art. 114 — A prescrição da pena de multa ocorrerá em 2 anos quando a multa for a ______ cominada ou aplicada.",
    "a": "única"
  },
  {
    "q": "Art. 117 — O curso da prescrição interrompe-se pelo recebimento da ______ ou da queixa.",
    "a": "denúncia"
  },
  {
    "q": "Art. 121, §2º — O homicídio cometido para assegurar a execução, a ocultação, a impunidade ou vantagem de outro crime tem pena de reclusão de ______ a trinta anos.",
    "a": "doze anos"
  },
  {
    "q": "Art. 121, §3º — Se o homicídio é culposo, a pena é de ______ de um a três anos.",
    "a": "detenção"
  },
  {
    "q": "Art. 121, §4º — No homicídio culposo, a pena é aumentada de ______ se o crime resulta de inobservância de regra técnica de profissão, arte ou ofício.",
    "a": "1/3 (um terço)"
  },
  {
    "q": "Art. 297, §2º — Para os efeitos penais, equiparam-se a documento público o emanado de entidade paraestatal, o título ao portador ou transmissível por endosso, as ações de sociedade comercial, os livros mercantis e o ______.",
    "a": "testamento particular"
  },
  {
    "q": "Art. 299 — A falsidade ideológica consiste em omitir, em documento público ou particular, declaração que dele devia constar, ou nele inserir declaração ______ ou diversa da que devia ser escrita.",
    "a": "falsa"
  },
  {
    "q": "Art. 311-A — Utilizar ou divulgar indevidamente, com o fim de beneficiar a si ou a outrem, conteúdo sigiloso de ______ público.",
    "a": "concurso"
  },
  {
    "q": "Art. 312, §3º — Se a reparação do dano precede à sentença irrecorrível, ______ a punibilidade.",
    "a": "extingue"
  },
  {
    "q": "Art. 316 — O funcionário que exige vantagem indevida, para si ou para outrem, pratica ______.",
    "a": "concussão"
  },
  {
    "q": "Art. 325 — Revelar fato de que tem ciência em razão do cargo e que deva permanecer em segredo configura ______ de sigilo funcional.",
    "a": "violação"
  }
];

let current = 0;
let correct = 0;
let wrong = 0;
let answered = false;
let order = cards.map((_, i) => i);

const STORAGE_KEY = "questoesoficial-progress-v1";

const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const answerBtn = document.getElementById("answerBtn");
const correctBtn = document.getElementById("correctBtn");
const wrongBtn = document.getElementById("wrongBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const progressEl = document.getElementById("progress");
const statsEl = document.getElementById("stats");
const shuffleBtn = document.getElementById("shuffleBtn");
const resetBtn = document.getElementById("resetBtn");

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    current,
    correct,
    wrong,
    order
  }));
}

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved) return;

    current = Number.isInteger(saved.current) ? saved.current : 0;
    correct = Number.isInteger(saved.correct) ? saved.correct : 0;
    wrong = Number.isInteger(saved.wrong) ? saved.wrong : 0;

    if (Array.isArray(saved.order) && saved.order.length === cards.length) {
      order = saved.order;
    }
  } catch (e) {
    console.log("Não foi possível carregar o progresso.");
  }
}

function updateStats() {
  const totalAnswered = correct + wrong;
  const accuracy = totalAnswered
    ? Math.round((correct / totalAnswered) * 100)
    : 0;

  statsEl.textContent = `Acertos: ${correct} · Erros: ${wrong} · Aproveitamento: ${accuracy}%`;
}

function render() {
  const card = cards[order[current]];

  questionEl.textContent = card.q;
  answerEl.textContent = card.a;
  answerEl.classList.add("hidden");

  answered = false;

  answerBtn.disabled = false;
  correctBtn.disabled = true;
  wrongBtn.disabled = true;

  progressEl.textContent = `Questão ${current + 1} de ${cards.length}`;
  prevBtn.disabled = current === 0;
  nextBtn.disabled = current === cards.length - 1;

  updateStats();
  saveProgress();
}

function showAnswer() {
  if (answered) return;

  answerEl.classList.remove("hidden");
  answered = true;

  answerBtn.disabled = true;
  correctBtn.disabled = false;
  wrongBtn.disabled = false;
}

function markCorrect() {
  if (!answered) return;
  correct++;
  goNext();
}

function markWrong() {
  if (!answered) return;
  wrong++;
  goNext();
}

function goNext() {
  if (current < cards.length - 1) {
    current++;
  } else {
    current = 0;
  }

  render();
}

function goPrevious() {
  if (current > 0) {
    current--;
    render();
  }
}

function shuffle() {
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }

  current = 0;
  render();
}

function resetProgress() {
  const confirmed = confirm("Tem certeza que deseja zerar seus acertos e erros?");
  if (!confirmed) return;

  current = 0;
  correct = 0;
  wrong = 0;
  order = cards.map((_, i) => i);
  saveProgress();
  render();
}

answerBtn.addEventListener("click", showAnswer);
correctBtn.addEventListener("click", markCorrect);
wrongBtn.addEventListener("click", markWrong);
nextBtn.addEventListener("click", goNext);
prevBtn.addEventListener("click", goPrevious);
shuffleBtn.addEventListener("click", shuffle);
resetBtn.addEventListener("click", resetProgress);

document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    event.preventDefault();
    showAnswer();
  }

  if (event.key === "ArrowRight") {
    goNext();
  }

  if (event.key === "ArrowLeft") {
    goPrevious();
  }
});

loadProgress();
render();
