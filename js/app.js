
const limit = 10;
var gameover = false;
    let answer = 0;
    var currentProblem = 0;
    var currentScore = 0;
    var displayProb = document.querySelector("#currentProblem");
    var displayScore = document.querySelector("#currentScore");


    function generate_equation(){
        const prob1 = Math.floor(Math.random() * 10) + 1;
        const prob2 = Math.floor(Math.random() * 10) + 1;
        
        answer = eval(prob1 * prob2);
        const dummyAnswer1 = Math.floor(Math.random() * 50);
        const dummyAnswer2 = Math.floor(Math.random() * 50);
        const dummyAnswer3 = Math.floor(Math.random() * 50);

        const opt1 = document.getElementById('opt1');
        opt2 = document.getElementById('opt2');
        opt3 = document.getElementById('opt3');
        opt4 = document.getElementById('opt4');

        allAnswer = [];
        switchAnswers = [];

        document.getElementById('prob1').innerHTML = prob1;
        document.getElementById('prob2').innerHTML = prob2;

        allAnswer = [answer, dummyAnswer1, dummyAnswer2, dummyAnswer3];

        for (i = allAnswer.length; i--;){
            switchAnswers.push(allAnswer.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
        };

        opt1.innerHTML = switchAnswers[0];
        opt2.innerHTML = switchAnswers[1];
        opt3.innerHTML = switchAnswers[2];
        opt4.innerHTML = switchAnswers[3];

    }; //end of generate_equation

    opt1.addEventListener("click", ()=> {
        if(opt1.innerHTML == answer) {
            currentScore = currentScore + 1;
            currentProblem = currentProblem + 1;
            displayProb.textContent = currentProblem;
            displayScore.textContent = currentScore;
            generate_equation();
        }
        else {
            generate_equation();
            currentProblem = currentProblem + 1;
            displayProb.textContent = currentProblem;
        }
    });

    opt2.addEventListener("click", ()=> {
        if(opt2.innerHTML == answer) {
            currentScore = currentScore + 1;
            currentProblem = currentProblem + 1;
            displayProb.textContent = currentProblem;
            displayScore.textContent = currentScore;
            generate_equation();
        }
        else {
            generate_equation();
            currentProblem = currentProblem + 1;
            displayProb.textContent = currentProblem;
        }
    });

    opt3.addEventListener("click", ()=> {
        if(opt3.innerHTML == answer) {
            currentScore = currentScore + 1;
            currentProblem = currentProblem + 1;
            displayProb.textContent = currentProblem;
            displayScore.textContent = currentScore;
            generate_equation();
        }
        else {
            generate_equation();
            currentProblem = currentProblem + 1;
            displayProb.textContent = currentProblem;
        }
    });

    opt4.addEventListener("click", ()=> {
        if(opt4.innerHTML == answer) {
            currentScore = currentScore + 1;
            currentProblem = currentProblem + 1;
            displayProb.textContent = currentProblem;
            displayScore.textContent = currentScore;
            generate_equation();
        }
        else {
            generate_equation();
            currentProblem = currentProblem + 1;
            displayProb.textContent = currentProblem;
        }
    });

    generate_equation();