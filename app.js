let flashcards = [];

function addFlashcard() {
    question = document.getElementById('question').value;
    answer = document.getElementById('answer').value;

    if (question && answer) {
        flashcards.push({ question, answer });
        updateQuizForm();
        document.getElementById('flashcardForm').reset();
    }
}

function updateQuizForm() {
    quizForm = document.getElementById('quizForm');
    quizForm.innerHTML = ''; 

    flashcards.forEach((flashcard, index) => {
        quizForm.innerHTML += `
            <div>
                <p><strong>${flashcard.question}</strong></p>
                <input type="text" name="answer${index}" placeholder="Your Answer" required>
            </div>
        `;
    });

    quizForm.innerHTML += '<button type="submit">Submit Quiz</button>';
}

function submitQuiz() {
    let score = 0;

    flashcards.forEach((flashcard, index) => {
        userAnswer = document.getElementsByName(`answer${index}`)[0].value;
        if (userAnswer.toLowerCase() === flashcard.answer.toLowerCase()) {
            score++;
        }
    });

    quizResults = document.getElementById('quizResults');
    quizResults.innerHTML = `<p>Your Score: ${score} / ${flashcards.length}</p>`;
}


