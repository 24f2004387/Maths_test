const questions = [
    { question: "5 + 3", answer: 8 },
    { question: "10 - 4", answer: 6 },
    { question: "3 * 7", answer: 21 },
    { question: "12 / 4", answer: 3 },
    { question: "9 + 6", answer: 15 },
    { question: "15 - 5", answer: 10 },
    { question: "8 * 2", answer: 16 },
    { question: "20 / 5", answer: 4 },
    { question: "6 + 7", answer: 13 },
    { question: "14 - 6", answer: 8 }
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const quizDiv = document.getElementById('quiz');
    quizDiv.innerHTML = `<h2>${questions[currentQuestionIndex].question}</h2>
                         <input type="number" id="user-answer" class="form-control" placeholder="Your answer">
                         <button id="submit" class="btn btn-success mt-2">Submit</button>`;
    document.getElementById('next').style.display = 'none';
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('user-answer').value);
    const resultDiv = document.getElementById('result');
    if (userAnswer === questions[currentQuestionIndex].answer) {
        resultDiv.innerHTML = "<p class='text-success'>Correct!</p>";
    } else {
        resultDiv.innerHTML = "<p class='text-danger'>Wrong! The correct answer is " + questions[currentQuestionIndex].answer + ".</p>";
    }
    document.getElementById('next').style.display = 'block';
}

document.getElementById('quiz').addEventListener('click', function(e) {
    if (e.target.id === 'submit') {
        checkAnswer();
    }
});

document.getElementById('next').addEventListener('click', function() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        document.getElementById('result').innerHTML = '';
    } else {
        document.getElementById('quiz').innerHTML = "<h2>Quiz Completed!</h2>";
        document.getElementById('next').style.display = 'none';
    }
});

loadQuestion();