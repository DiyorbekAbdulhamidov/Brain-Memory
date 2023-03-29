const game = document.querySelector(".game");
const gamezones = document.querySelectorAll(".gamezone");

let arr = [];
let count = 0;

function rand() {
    let num = [];
    for (let i = 0; i < 5; i++) {
        let random = Math.floor(Math.random() * gamezones.length);
        if (!num.includes(random)) {
            num.push(random);
            gamezones[random].classList.add('active');
            gamezones[random].classList.add('selected');
            setTimeout(() => {
                gamezones[random].classList.remove('active');
            }, 2000);
        }
        else i--;
    }
}

function play() {
    gamezones.forEach(function (game) {
        game.addEventListener("click", function () {
            if (game.classList.contains('selected')) {
                game.classList.add("active");
                arr.push(game);

                if (arr.length == 5) {
                    alert("Siz G`olibsiz!");
                    location.reload();
                }
            }
            else {
                alert("Siz Xato qildingiz Xotirangiz judayam past!")
                location.reload()
            }
        })
    });
}

function init() {
    rand();
    play();
}

init();