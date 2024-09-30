let options = document.querySelectorAll(".options");
let result = document.getElementById('finalResult');
let yourMove = document.getElementById('yourMove');
let botMove = document.getElementById('botMove');

let outcomes = ['Rock', 'Paper', 'Scissor'];

function outPutResult() {
    options.forEach((item) => {
        item.addEventListener('click', () => {

            yourMove.innerText = item.id;
            // console.log(item.id);
            let randomer = Math.floor(Math.random() * 3)

            let bot = outcomes[randomer];

            botMove.innerText = bot;



            if (item.id == bot) {console.log(bot);
                console.log('Game Tied.');
                result.innerText = "Game Tied"
            } else if (item.id == 'Rock' && bot == 'Scissor') {
                console.log(bot);
                console.log('You Win');
                result.innerText = "You Win";
            } else if (item.id == 'Paper' && bot == 'Rock') {
                console.log(bot);
                console.log('You Win');
                result.innerText = "You Win";
            } else if (item.id == 'Scissor' && bot == 'Paper') {
                console.log(bot);
                console.log('You Win');
                result.innerText = "You Win";
            } else {
                console.log(bot);
                console.log("You Lose");
                result.innerText = "You Lose";
            }
            
        })
    })

}

outPutResult();