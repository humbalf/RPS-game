let [computer_score, user_score] = [0,0];
let result_ref = document.getElementById("result");
let choicesObject = {
    'rock' : {
        'rock' : 'draw',
        'paper' : 'lose',
        'scissors' : 'win'
    },
    'scissors' : {
        'scissors' : 'draw',
        'rock' : 'lose',
        'paper' : 'win'
    },
    'paper' : {
        'paper' : 'draw',
        'scissors' : 'lose',
        'rock' : 'win'
    }

}

function checker(input){
    var choices = ["rock", "paper", "scissors"];
    var num = Math.floor(Math.random()*3);

    document.getElementById("cpu_choice").innerHTML = 
    `Computer chose <span> ${choices[num].toUpperCase()}</span>`;

    document.getElementById("user_choice").innerHTML = 
    `You chose <span> ${input.toUpperCase()} </span>`;

    let computer_choice = choices[num];

    switch(choicesObject[input][computer_choice]){
        case 'win':
            result_ref.style.cssText = "background-color: #cefdce; color: #689f38";
            result_ref.innerHTML = "You won";
            user_score++;
            break;
        case 'lose':
            result_ref.style.cssText = "background-color: #ffdde0; color: #d32f2f";
            result_ref.innerHTML = "You lost";
            computer_score++;
            break;
        default:
            result_ref.style.cssText = "background-color: #e5e5e5; color: #808080";
            result_ref.innerHTML = "Draw";
            break;
    }

    document.getElementById("cpu_score").innerHTML = computer_score;
    document.getElementById("user_score").innerHTML = user_score;

    document.getElementById("move").innerHTML = "";
}