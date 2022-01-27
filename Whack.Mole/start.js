const play = document.querySelector('.start-play');

play.addEventListener('click', playGame);

function playGame() {
    window.location ='index.html';
}

const easy = document.querySelector('.level-easy');
const medium = document.querySelector('.level-medium');
const hard = document.querySelector('.level-hard');

easy.addEventListener('click', chooseEasy);
medium.addEventListener('click', chooseMedium);
hard.addEventListener('click', chooseHard);

function chooseEasy() {
 backgroundsReset();
 easy.style.backgroundColor='white';
    sessionStorage.setItem('key', 1000);
}
function chooseMedium() {
 backgroundsReset();
 medium.style.backgroundColor='white';
 sessionStorage.setItem('key', 750);
}
function chooseHard() {
 backgroundsReset();
 hard.style.backgroundColor='white';
    sessionStorage.setItem('key', 500);
}

function backgroundsReset() {
    easy.style.backgroundColor= 'buttonface';
    medium.style.backgroundColor= 'buttonface';
    hard.style.backgroundColor= 'buttonface';
}

