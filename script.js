document.getElementById('enviarBtn').onclick = function() {
    let envio = true;
    if (envio) {
        alert("Sua mensagem foi enviada");
       
    } else {
        alert("Falha no envio da mensagem");
    }
};

function disableOptions(questionName) {
    let options = document.getElementsByName(questionName);
    options.forEach(option => {
        if (!option.checked) {
            option.disabled = true;
        }
    });
}

function playsound() {
    let clicksound = document.getElementById('selecionasom');
    clicksound.play();
}

function SubmitQuiz() {
    let correctAnswers = {
        q1: "B",
        q2: "B",
        q3: "A",
        q4: "B",
        q5: "B",
        q6: "B",
        q7: "B",
        q8: "B",
        q9: "A",
        q10: "B"
    };

    let form = document.getElementById('quiz-form');
    let score = 0;

    for (let key in correctAnswers) {
        let userAnswers = form.elements[key].value;
        if (userAnswers === correctAnswers[key]) {
            score++;
        }
    }

    let result = document.getElementById('result');
    result.innerHTML = `Você acertou ${score} de 10 perguntas`;

    if (score === 10) {
        let sucessSound = document.getElementById('venceusom');
        sucessSound.play();
    } else {
        let errorSound = document.getElementById('perdeuSom');
        errorSound.play();
    }

    document.querySelector('button[onclick="SubmitQuiz()"]').disabled = true; 
    document.getElementById('resetButton').disabled = false; 
}

function resetQuiz() {
    let form = document.getElementById('quiz-form');
    form.reset();
    let options = form.querySelectorAll('input[type="radio"]');
    options.forEach(option => option.disabled = false);
    let resultSection = document.getElementById('result');
    resultSection.innerHTML = '';
    document.getElementById('resetButton').disabled = true;
    document.querySelector('button[onclick="SubmitQuiz()"]').disabled = false;
}