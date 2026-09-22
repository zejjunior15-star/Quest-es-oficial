const cards = [

    {
        question: "Art. 1º — Não há crime ______ que o defina.",
        answer: "sem lei anterior"
    },

    {
        question: "Art. 2º — Ninguém pode ser punido por fato que lei posterior ______ crime.",
        answer: "deixa de considerar"
    },

    {
        question: "Art. 3º — A lei excepcional ou temporária, embora decorrido o período de sua duração, ______ ao fato praticado durante sua vigência.",
        answer: "aplica-se"
    },

    {
        question: "Art. 4º — Considera-se praticado o crime no momento da ______ ou omissão.",
        answer: "ação"
    },

    {
        question: "Art. 5º — Aplica-se a lei brasileira ao crime cometido no ______ nacional.",
        answer: "território"
    },

    {
        question: "Art. 6º — Considera-se praticado o crime no lugar em que ocorreu a ação ou omissão, bem como onde se produziu ou deveria produzir-se o ______.",
        answer: "resultado"
    },

    {
        question: "Art. 8º — A pena cumprida no estrangeiro ______ a pena imposta no Brasil pelo mesmo crime, quando diversas.",
        answer: "atenua"
    },

    {
        question: "Art. 10 — O dia do começo ______ no cômputo do prazo.",
        answer: "inclui-se"
    },

    {
        question: "Art. 12 — As regras gerais deste Código aplicam-se aos fatos incriminados por lei especial, se esta não ______ de modo diverso.",
        answer: "dispuser"
    },

    {
        question: "Art. 100 — A ação penal é pública, salvo quando a lei expressamente a declara ______ do ofendido.",
        answer: "privativa"
    },

    {
        question: "Art. 102 — A representação será irretratável depois de oferecida a ______.",
        answer: "denúncia"
    },

    {
        question: "Art. 103 — O prazo para queixa ou representação é de ______ meses.",
        answer: "6 (seis)"
    },

    {
        question: "Art. 104 — O direito de queixa não pode ser exercido quando renunciado expressa ou ______.",
        answer: "tacitamente"
    },

    {
        question: "Art. 105 — O perdão do ofendido ______ ao prosseguimento da ação.",
        answer: "obsta"
    },

    {
        question: "Art. 118 — As penas mais leves ______ com as mais graves.",
        answer: "prescrevem"
    },

    {
        question: "Art. 119 — No concurso de crimes, a extinção da punibilidade incidirá sobre a pena de cada um, ______.",
        answer: "isoladamente"
    },

    {
        question: "Art. 120 — O perdão judicial não será considerado para efeitos de ______.",
        answer: "reincidência"
    },

    {
        question: "Art. 121 — ______: Pena — reclusão, de seis a vinte anos.",
        answer: "Matar alguém"
    },

    {
        question: "Art. 121, §1º — O juiz pode reduzir a pena de ______ a um terço.",
        answer: "um sexto"
    },

    {
        question: "Art. 129 — ______ a integridade corporal ou a saúde de outrem.",
        answer: "Ofender"
    },

    {
        question: "Art. 150 — Entrar ou permanecer, clandestina ou ______, em casa alheia...",
        answer: "astuciosamente"
    },

    {
        question: "Art. 154 — Revelar alguém, sem ______, segredo de que tem ciência em razão de função...",
        answer: "justa causa"
    },

    {
        question: "Art. 294 — Fabricar, adquirir, fornecer, possuir ou guardar objeto especialmente destinado à ______.",
        answer: "falsificação"
    },

    {
        question: "Art. 295 — Se o agente é funcionário público e comete o crime prevalecendo-se do cargo, aumenta-se a pena de ______.",
        answer: "sexta parte"
    },

    {
        question: "Art. 297 — Falsificar, no todo ou em parte, ______, ou alterar documento público verdadeiro.",
        answer: "documento público"
    },

    {
        question: "Art. 298 — Falsificar, no todo ou em parte, documento particular ou alterar documento particular ______.",
        answer: "verdadeiro"
    },

    {
        question: "Art. 304 — A pena pelo uso de documento falso é a ______ à falsificação ou alteração.",
        answer: "cominada"
    },

    {
        question: "Art. 307 — Atribuir-se ou atribuir a terceiro falsa identidade para obter ______.",
        answer: "vantagem"
    },

    {
        question: "Art. 312 — O funcionário público pode apropriar-se de bem de que tem a posse em razão do ______.",
        answer: "cargo"
    },

    {
        question: "Art. 359 — Exercer função, atividade, direito, autoridade ou múnus, de que foi suspenso ou ______ por decisão judicial.",
        answer: "privado"
    }

];

let current = 0;
let correct = 0;
let wrong = 0;

const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer");
const answerArea = document.getElementById("answer-area");
const questionNumber = document.getElementById("question-number");
const cardNumber = document.getElementById("card-number");
const scoreElement = document.getElementById("score");
const progressElement = document.getElementById("progress");

const showAnswerButton = document.getElementById("show-answer");
const correctButton = document.getElementById("correct");
const wrongButton = document.getElementById("wrong");
const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");
const shuffleButton = document.getElementById("shuffle");
const resetButton = document.getElementById("reset");


function showCard() {

    const card = cards[current];

    questionElement.textContent = card.question;
    answerElement.textContent = card.answer;

    questionNumber.textContent =
        `Questão ${current + 1}`;

    cardNumber.textContent =
        `Questão ${current + 1} de ${cards.length}`;

    answerArea.classList.add("hidden");

    showAnswerButton.classList.remove("hidden");

    const percentage =
        ((current + 1) / cards.length) * 100;

    progressElement.style.width =
        percentage + "%";

    scoreElement.textContent =
        `${correct} acertos · ${wrong} erros`;
}


showAnswerButton.addEventListener("click", () => {

    answerArea.classList.remove("hidden");

    showAnswerButton.classList.add("hidden");

});


correctButton.addEventListener("click", () => {

    correct++;

    nextCard();

});


wrongButton.addEventListener("click", () => {

    wrong++;

    nextCard();

});


nextButton.addEventListener("click", () => {

    nextCard();

});


previousButton.addEventListener("click", () => {

    if (current > 0) {

        current--;

        showCard();

    }

});


function nextCard() {

    if (current < cards.length - 1) {

        current++;

        showCard();

    } else {

        alert(
            `Você terminou!\n\nAcertos: ${correct}\nErros: ${wrong}`
        );

    }

}


shuffleButton.addEventListener("click", () => {

    cards.sort(() => Math.random() - 0.5);

    current = 0;

    showCard();

});


resetButton.addEventListener("click", () => {

    current = 0;
    correct = 0;
    wrong = 0;

    showCard();

});


showCard();
