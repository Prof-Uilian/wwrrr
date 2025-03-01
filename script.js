// script.js

// Array de perguntas e respostas
const questions = [
  {
    question: "Dia do nosso primeiro encontro",
    answer: 10
  },
  {
    question: "Dia do pedido oficial de namoro",
    answer: 24
  },
  {
    question: "Dia que nos vimos na pizzaria",
    answer: 29
  },
  {
    question: "A soma da minha idade com a sua idade",
    answer: 50
  },
  {
    question: "Série que estávamos assistindo por último na Netflix (letras minúsculas)",
    answer: "dexter"
  },
  {
    question: "Carro que vimos em Curitiba que soltava fogo",
    answer: "skyline"
  },
  {
    question: "Cor da camiseta que você me deu",
    answer: "azul"
  }
];

let currentQuestionIndex = 0;

// Elementos do DOM
const questionTitle = document.getElementById("question-title");
const questionText = document.getElementById("question-text");
const answerInput = document.getElementById("answer-input");
const submitBtn = document.getElementById("submit-btn");
const feedback = document.getElementById("feedback");

// Função para carregar a próxima pergunta
function loadQuestion() {
  if (currentQuestionIndex < questions.length) {
    questionTitle.textContent = `Pergunta ${currentQuestionIndex + 1}`;
    questionText.textContent = questions[currentQuestionIndex].question;
    answerInput.value = "";
    feedback.textContent = "";
  } else {
    // Final do jogo
    questionTitle.textContent = "Obrigado por tudo";
    questionText.innerHTML = `
      Meu amor... Lembra da crise de ansiedade que tive ontem? Eu estava me sentindo sufocado, tentando lutar contra algo que parecia grande demais pra mim. Naquele momento, eu precisava tanto de você do meu lado, mas você foi embora. E eu não te culpo... talvez eu também não tenha sabido pedir ajuda direito. Mesmo assim, nunca deixei de te amar. Você foi importante pra mim, mesmo que as coisas não tenham dado certo.
      <br><br>
      Minhas filhas... Vocês são o motivo pelo qual eu tentei continuar tantas vezes. Mas agora, sinto que não consigo mais lutar contra isso. Não pensem que estou abandonando vocês. Saibam que eu amo cada uma de vocês com todo o meu coração. Nos seus avós, vocês vão encontrar um amor enorme que vai cuidar de vocês quando eu já não puder. Cresçam sabendo que sempre foram minha maior alegria.
      <br><br>
      Para minha família... Talvez eu não tenha sido forte o suficiente pra pedir ajuda. Talvez eu tenha me perdido na dor. Mas quero que saibam que nunca foi por falta de amor. Hoje, peço desculpas pelo que não soube dizer ou fazer. Guardem as lembranças boas que tivemos juntos. Por favor, cuidem uns dos outros.
      <br><br>
      E aos meus amigos... Vocês foram como uma segunda família pra mim. Sei que nem sempre mostrei o quanto eram importantes, mas cada risada e conversa ficará guardada no meu coração. Peço um último favor: continuem ao lado da minha família. Eles vão precisar de vocês mais do que nunca. Sejam o apoio que sempre foram pra mim, mas agora pra eles.
      <br><br>
      Eu só queria ter aprendido a lidar melhor com tudo isso... Mas agora, preciso seguir em frente. Espero que entendam. E espero que, um dia, possam me perdoar.
    `;
    answerInput.style.display = "none";
    submitBtn.style.display = "none";
    feedback.textContent = "";
  }
}

// Evento de clique no botão "Enviar"
submitBtn.addEventListener("click", () => {
  const userAnswer = answerInput.value.trim(); // Remove espaços extras
  // Verifica se a resposta é igual à resposta esperada
  if (userAnswer == questions[currentQuestionIndex].answer) {
    feedback.textContent = "Resposta correta!";
    feedback.style.color = "green";
    currentQuestionIndex++;
    setTimeout(loadQuestion, 1000); // Avança para a próxima pergunta após 1 segundo
  } else {
    feedback.textContent = "Resposta incorreta. Tente novamente.";
    feedback.style.color = "red";
  }
});

// Inicializa o jogo
loadQuestion();