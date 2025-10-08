const generateQuestions = () => {
    const questions = [];
    for (let i = 0; i < 10; i++) {
        const num1 = Math.floor(Math.random() * 10);
        const num2 = Math.floor(Math.random() * 10);
        questions.push({ question: `${num1} x ${num2}`, answer: num1 * num2 });
    }
    return questions;
};

const displayQuestions = (questions) => {
    const questionsDiv = document.getElementById('questions');
    questionsDiv.innerHTML = '';
    questions.forEach((q, index) => {
        questionsDiv.innerHTML += `
            <div class="mb-2">
                <label>${q.question} = </label>
                <input type="number" class="form-control" id="answer-${index}" required>
            </div>
        `;
    });
};

const checkAnswers = (questions) => {
    let correct = 0;
    questions.forEach((q, index) => {
        const userAnswer = parseInt(document.getElementById(`answer-${index}`).value);
        if (userAnswer === q.answer) correct++;
    });
    document.getElementById('results').innerHTML = `You got ${correct} out of ${questions.length} correct!`;
};

document.getElementById('quiz-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const questions = generateQuestions();
    checkAnswers(questions);
    displayQuestions(questions);
});

// Initial load
const initialQuestions = generateQuestions();
displayQuestions(initialQuestions);