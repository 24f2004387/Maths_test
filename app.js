const totalQuestions = 10;
let currentQuestionIndex = 0;
let score = 0;

const questions = Array.from({ length: totalQuestions }, () => generateQuestion());

function generateQuestion() {
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);
    const operation = Math.random() < 0.5 ? '+' : '-';
    const answer = operation === '+' ? a + b : a - b;
    const options = generateOptions(answer);
    return { question: `${a} ${operation} ${b}`, answer, options };
}

function generateOptions(correctAnswer) {
    const options = new Set([correctAnswer]);
    while (options.size < 4) {
        options.add(Math.floor(Math.random() * 20));
    }
    return Array.from(options).sort(() => Math.random() - 0.5);
}

function loadQuestion() {
    const { question, options } = questions[currentQuestionIndex];
    document.querySelector('#question').textContent = question;
    document.querySelector('#options').innerHTML = options.map((opt, index) => 
        `<button class="btn btn-outline-secondary m-1" onclick="checkAnswer(${opt === questions[currentQuestionIndex].answer}, '${opt}')">${opt}</button>`
    ).join('');
    document.querySelector('#question-number').textContent = currentQuestionIndex + 1;
}

function checkAnswer(isCorrect, selectedOption) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert ${isCorrect ? 'alert-success' : 'alert-danger'}`;
    alertDiv.textContent = isCorrect ? 'Correct!' : `Wrong! The correct answer was ${questions[currentQuestionIndex].answer}.`;
    document.querySelector('#score').innerHTML = '';
    document.querySelector('#score').appendChild(alertDiv);
    if (isCorrect) score++;
    currentQuestionIndex++;
    if (currentQuestionIndex < totalQuestions) {
        setTimeout(loadQuestion, 1000);
    } else {
        setTimeout(showFinalScore, 1000);
    }
}

function showFinalScore() {
    document.querySelector('#quiz-card').innerHTML = `<h5 class="card-title">Quiz Finished!</h5><p>Your score: ${score} out of ${totalQuestions}</p>`;
}

document.addEventListener('DOMContentLoaded', loadQuestion);