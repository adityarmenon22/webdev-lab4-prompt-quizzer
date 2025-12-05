// Name: Aditya R Menon
// Class: Sem 1 B.Tech CSE (AI & Robotics)
// Roll No.: 2501630006

const quizQuestions = [
  {
    question: "What does HTML stand for?",
    answer: "hypertext markup language"
  },
  {
    question: "Which language is used to style web pages (CSS / JS)?",
    answer: "css"
  },
  {
    question: "Which built-in function is used to show a message box in JavaScript: alert or print?",
    answer: "alert"
  },
  {
    question: "Which JavaScript method is used to get input from the user in this assignment?",
    answer: "prompt"
  },
  {
    question: "Which loop are you required to use for this quiz (for / while)?",
    answer: "for"
  }
];

function runQuiz() {
  let score = 0;

  for (let i = 0; i < quizQuestions.length; i++) {
    const currentQuestion = quizQuestions[i];
    let userAnswer = prompt(currentQuestion.question);

    if (userAnswer === null) {
      alert("Quiz cancelled. Your score is: " + score + " out of " + quizQuestions.length);
      return;
    }

    userAnswer = userAnswer.toLowerCase().trim();

    if (userAnswer === currentQuestion.answer) {
      score++;
      alert("Correct!");
    } else {
      alert("Wrong. Correct answer is: " + currentQuestion.answer);
    }
  }

  alert("You scored " + score + " out of " + quizQuestions.length + ".");
}
