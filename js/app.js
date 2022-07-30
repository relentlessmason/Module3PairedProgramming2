//initialize variables
const limit = 10;
    let answer = 0;
    const currentProblem = 1;
    const currentScore = 0;
    const displayProb = document.querySelector("#currentProblem");
    const displayScore = document.querySelector("#currentScore");


    function generate_equation(){
        //set up variables to generate randomly
        const prob1 = Math.floor(Math.random() * 10) + 1;
        const prob2 = Math.floor(Math.random() * 10) + 1;
        
        //setting up randomly generated variables to be used by front end
        document.getElementById('prob1').innerHTML = prob1;
        document.getElementById('prob2').innerHTML = prob2;

        answer = eval(prob1 * prob2); //using eval to make JS perform a math

        //sets up other answer possibilities (false options)
        const dummyAnswer1 = Math.floor(Math.random() * 50);
        const dummyAnswer2 = Math.floor(Math.random() * 50);
        const dummyAnswer3 = Math.floor(Math.random() * 50);

        //moves those options into a format usable by front end
        const opt1 = document.getElementById('opt1');
        opt2 = document.getElementById('opt2');
        opt3 = document.getElementById('opt3');
        opt4 = document.getElementById('opt4');

        //setting up the arrays to randomize what order the answers are in
        allAnswer = [];
        switchAnswers = [];

        //putting the answer varieties into an array
        allAnswer = [answer, dummyAnswer1, dummyAnswer2, dummyAnswer3];

        //for loop that randomizes the array into the switchAnswers array
        for (i = allAnswer.length; i--;){
            switchAnswers.push(allAnswer.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
        };
        //initializes the array to be red by the Front end
        opt1.innerHTML = switchAnswers[0];
        opt2.innerHTML = switchAnswers[1];
        opt3.innerHTML = switchAnswers[2];
        opt4.innerHTML = switchAnswers[3];

    }; //end of generate_equation

    // E V E N T S
    //Click event that adds a point when you're right and 
    //doesn't when you're wrong
    //always adds to the problem number

    opt1.addEventListener("click", ()=> {
        if(opt1.innerHTML == answer) {
            addPoints()
            if (currentProblem === limit){
                hideTheEquation();
            }
            generate_equation();
        }
        else {
            currentProblem = currentProblem + 1;
            displayProb.textContent = currentProblem;
            if (currentProblem === limit){
                hideTheEquation();
            }
            else {generate_equation();}
        }
    });

    opt2.addEventListener("click", ()=> {
        if(opt2.innerHTML == answer) {
            addPoints();
            if (currentProblem === limit){
                hideTheEquation();
            }
            generate_equation();
        }
        else {
            currentProblem = currentProblem + 1;
            displayProb.textContent = currentProblem;
            if (currentProblem === limit){
                hideTheEquation();
            }
            else {generate_equation();}
        }
    });

    opt3.addEventListener("click", ()=> {
        if(opt3.innerHTML == answer) {
            addPoints();
            if (currentProblem === limit){
                hideTheEquation();
            }
            generate_equation();}

        else {
            generate_equation();
            currentProblem = currentProblem + 1;
            displayProb.textContent = currentProblem;
            if (currentProblem === limit){
                hideTheEquation();
            }
        }
    });

    opt4.addEventListener("click", ()=> {

        if(opt4.innerHTML == answer) {
            addPoints();
            if (currentProblem === limit){
                hideTheEquation();
            }
            generate_equation();}

        else {
            currentProblem = currentProblem + 1;
            displayProb.textContent = currentProblem;
            if (currentProblem === limit){
                hideTheEquation();
            }
            else {generate_equation();}
        }
    });

    function hideTheEquation() {
    //document.getElementById(expression).style.display = 'none';
    }

    function addPoints() {
        currentScore = currentScore + 1;
            currentProblem = currentProblem + 1;
            displayProb.textContent = currentProblem;
            displayScore.textContent = currentScore;
    }

    generate_equation();