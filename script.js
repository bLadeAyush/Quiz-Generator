const questions = [
        {
          "question": "What is the capital of France?",
          "answers": [
            {"text": "Berlin", "correct": false},
            {"text": "Madrid", "correct": false},
            {"text": "Paris", "correct": true},
            {"text": "Rome", "correct": false}
          ]
        },
        {
          "question": "Who wrote 'To Kill a Mockingbird'?",
          "answers": [
            {"text": "Harper Lee", "correct": true},
            {"text": "J.K. Rowling", "correct": false},
            {"text": "Ernest Hemingway", "correct": false},
            {"text": "Mark Twain", "correct": false}
          ]
        },
        {
          "question": "What is the largest planet in our solar system?",
          "answers": [
            {"text": "Earth", "correct": false},
            {"text": "Jupiter", "correct": true},
            {"text": "Mars", "correct": false},
            {"text": "Saturn", "correct": false}
          ]
        },
        {
          "question": "What year did the Titanic sink?",
          "answers": [
            {"text": "1912", "correct": true},
            {"text": "1905", "correct": false},
            {"text": "1915", "correct": false},
            {"text": "1920", "correct": false}
          ]
        },
        {
          "question": "What is the chemical symbol for gold?",
          "answers": [
            {"text": "Au", "correct": true},
            {"text": "Ag", "correct": false},
            {"text": "Pt", "correct": false},
            {"text": "Pb", "correct": false}
          ]
        },
        {
          "question": "What is the tallest mountain in the world?",
          "answers": [
            {"text": "K2", "correct": false},
            {"text": "Mount Kilimanjaro", "correct": false},
            {"text": "Mount Everest", "correct": true},
            {"text": "Denali", "correct": false}
          ]
        },
        {
          "question": "Who painted the Mona Lisa?",
          "answers": [
            {"text": "Vincent van Gogh", "correct": false},
            {"text": "Pablo Picasso", "correct": false},
            {"text": "Leonardo da Vinci", "correct": true},
            {"text": "Claude Monet", "correct": false}
          ]
        },
        {
          "question": "What is the smallest prime number?",
          "answers": [
            {"text": "0", "correct": false},
            {"text": "1", "correct": false},
            {"text": "2", "correct": true},
            {"text": "3", "correct": false}
          ]
        },
        {
          "question": "Who was the first President of the United States?",
          "answers": [
            {"text": "Thomas Jefferson", "correct": false},
            {"text": "John Adams", "correct": false},
            {"text": "George Washington", "correct": true},
            {"text": "Abraham Lincoln", "correct": false}
          ]
        },
        {
          "question": "Which element has the atomic number 1?",
          "answers": [
            {"text": "Helium", "correct": false},
            {"text": "Oxygen", "correct": false},
            {"text": "Hydrogen", "correct": true},
            {"text": "Carbon", "correct": false}
          ]
        },
        {
          "question": "What is the largest ocean on Earth?",
          "answers": [
            {"text": "Atlantic Ocean", "correct": false},
            {"text": "Indian Ocean", "correct": false},
            {"text": "Arctic Ocean", "correct": false},
            {"text": "Pacific Ocean", "correct": true}
          ]
        },
        {
          "question": "Which planet is known as the Red Planet?",
          "answers": [
            {"text": "Venus", "correct": false},
            {"text": "Mars", "correct": true},
            {"text": "Jupiter", "correct": false},
            {"text": "Mercury", "correct": false}
          ]
        },
        {
          "question": "Who developed the theory of relativity?",
          "answers": [
            {"text": "Isaac Newton", "correct": false},
            {"text": "Galileo Galilei", "correct": false},
            {"text": "Albert Einstein", "correct": true},
            {"text": "Niels Bohr", "correct": false}
          ]
        },
        {
          "question": "What is the hardest natural substance on Earth?",
          "answers": [
            {"text": "Gold", "correct": false},
            {"text": "Iron", "correct": false},
            {"text": "Diamond", "correct": true},
            {"text": "Platinum", "correct": false}
          ]
        },
        {
          "question": "In which year did World War II end?",
          "answers": [
            {"text": "1940", "correct": false},
            {"text": "1945", "correct": true},
            {"text": "1950", "correct": false},
            {"text": "1955", "correct": false}
          ]
        },
        {
          "question": "What is the most abundant gas in Earth's atmosphere?",
          "answers": [
            {"text": "Oxygen", "correct": false},
            {"text": "Carbon Dioxide", "correct": false},
            {"text": "Nitrogen", "correct": true},
            {"text": "Hydrogen", "correct": false}
          ]
        }
      ]


const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("next-button");

let currentQuestionIndex = 0;
let score = 0;
 
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct ==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct ==="true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState()
        questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`
        nextButton.innerHTML = "Play Again";
        nextButton.style.display = "block";
    
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();