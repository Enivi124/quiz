const quizContainer = document.querySelector('#quiz');
const quizQuestion= document.querySelector("#question");
const allQuestionOptions = document.querySelectorAll('.answer');
let optionA = document.getElementById('A_text');
let optionB = document.getElementById('B_text');
let optionC = document.getElementById('C_text');
let optionD = document.getElementById('D_text');
const submitBtn = document.querySelector('#submit');

const quizData = [
    {
        question: 'What is the correct syntax to print a message in the console in JavaScript?',
        a: 'console.log("Hello World") ',
        b: 'print("Hello World")  ',
        c: 'echo "Hello World" ',
        d: 'console.print("Hello World")',
        answer: 'A'
    },
    {
        question: 'How do you declare a variable in JavaScript?',
        a: 'let variableName;',
        b: ' var variableName; ',
        c: 'const variableName;',
        d: 'All of the above',
        answer: 'D'
    },
    {
      question: 'Which of the following is not a looping structure in JavaScript?',
      a: 'for',  
      b: 'while',  
      c: 'foreach',  
      d: 'repeat',
      answer: 'D'
    },
    {
      question: 'What is the output of the following code?\nconsole.log(2 + "2")',
      a: '4' , 
      b: '22',  
      c: 'NaN' , 
      d: 'undefined',
      answer: 'A'
    },
    {
      question: 'Which method is used to add elements to the end of an array?',
      a: 'push()',  
      b: 'pop()',  
      c: 'shift()',  
      d: 'unshift()',
      answer: 'A'
    }
]

let currentQuestion = 0;
let score = 0;

function loadQuiz(){
  deselectAnswers()
  const currentQuizData = quizData[currentQuestion];
  quizQuestion.innerText = currentQuizData.question;
  optionA.innerText = currentQuizData.a;
  optionB.innerText = currentQuizData.b;
  optionC.innerText = currentQuizData.c;
  optionD.innerText = currentQuizData.d;
}

const displayMessage = function(message, selectedElement){
  selectedElement.textContent = message;
};

function getSelected() {
  let selectedOption;
  allQuestionOptions.forEach(option => {
      if (option.checked) {
          selectedOption = option.id; 
      }
  });
  return selectedOption;
};

function deselectAnswers(params) {
  allQuestionOptions.forEach(option => {
    option.checked=false
  })
};


submitBtn.addEventListener('click', () => {
  const selectedOption = getSelected();
  if (selectedOption) {
      if (selectedOption === quizData[currentQuestion].answer) {
          score++;
          quizQuestion.innerText = 'Correct answer';
          
      } else {
          quizQuestion.innerText = 'Wrong answer';
      }
      
      currentQuestion++;
      if (currentQuestion < quizData.length) {
          setTimeout(loadQuiz, 1000); 
          // loadQuiz()
      } else {
          quizContainer.innerHTML = `Quiz finished! Your score is ${score}/${quizData.length}.
          <button onclick= "location.reload()"> Reload</button>`;
      }
  } else {
      quizQuestion.innerText = 'Please select an answer!';
  }
});

loadQuiz();