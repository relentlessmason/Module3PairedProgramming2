    let currentScore = 0;
    const limit = 10;
    let answer = 0;

    function generate_equation(){
        const prob1 = Math.floor(Math.random() * 10) + 1;
        const prob2 = Math.floor(Math.random() * 10) + 1;
        
        answer = eval(prob1 * prob2);
        const dummyAnswer1 = Math.floor(Math.random() * 50);
        const dummyAnswer2 = Math.floor(Math.random() * 50);
        const dummyAnswer3 = Math.floor(Math.random() * 50);

        const opt1 = document.getElementById('opt1'),
        opt2 = document.getElementById('opt2'),
        opt3 = document.getElementById('opt3'),
        opt4 = document.getElementById('opt4');
        currentScore = document.getElementById('currentScore');
        


        allAnswer = [];
        switchAnswers = [];

        document.getElementById('prob1').innerHTML = prob1;
        document.getElementById('prob2').innerHTML = prob2;

        allAnswer = [answer, dummyAnswer1, dummyAnswer2, dummyAnswer3];

        for (i = allAnswer.length; i--;){
            switchAnswers.push(allAnswer.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
        }

        opt1.innerHTML = switchAnswers[0];
        opt2.innerHTML = switchAnswers[1];
        opt3.innerHTML = switchAnswers[2];
        opt4.innerHTML = switchAnswers[3];

    };

    opt1.addEventListener("click", function() {
        if(opt1.innerHTML === answer) {
            generate_equation();
            currentScore.innerHTML = currentScore++;
        }
        else {
            generate_equation();
        }
    });

    opt2.addEventListener("click", function(){
        if(opt2.innerHTML === answer) {
            generate_equation();
            currentScore.innerHTML = currentScore++;
        }
        else {
            generate_equation();
        }
    });

    opt3.addEventListener("click", function(){
        if(opt3.innerHTML == answer) {
            generate_equation();
            currentScore.innerHTML = currentScore++;
        }
        else {
            generate_equation();
        }
    });

    opt4.addEventListener("click", function(){
        if(opt4.innerHTML === answer) {
            generate_equation();
            currentScore.innerHTML = currentScore++;
        }
        else {
            generate_equation();
        }
    });

    generate_equation();