const game = document.querySelector(".game");
const gamezones = document.querySelectorAll(".gamezone");


function rand() {
    for (let i = 0; i < 5; i++) {
        let random = Math.floor(Math.random() * gamezones.length);
        gamezones[random].classList.add('active');
        gamezones[random].classList.add('selected');

        setTimeout(() => {
            gamezones[random].classList.remove('active');
        }, 2000);
    }
}

function play() {
    gamezones.forEach(function(game){
        game.addEventListener("click", function () {
            if(game.classList.contains('selected')){
                game.classList.add("active");
                game.classList.add("win");
            }
            else {
                alert("Siz Xato qildingiz Xotirangiz judayam past!")
                location.reload()
            }
        })
    });
}

function init() {
    rand()
    play();
}
init();

// KOD TEST REJIMIDA 
