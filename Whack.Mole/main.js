let data = sessionStorage.getItem('key');

if (!data){
    alert('ВЫБЕРИ УРОВЕНЬ УКРАТИТЕЛЬ КРОТОВ!');
    window.location= 'start.html';
}

console.log(data);

const exit = document.querySelector('.exit');

exit.addEventListener('click',exitGame);

const holes = document.querySelectorAll('.hole');

const moles = document.querySelectorAll('.mole');

const button = document.querySelector('.start-game');

button.addEventListener('click', startGame);

let score = document.querySelector('.score');
let timeBlock = document.querySelector('.time');

function exitGame() {
    window.location = 'start.html';
}

moles.forEach((mole)=>{
    mole.addEventListener('click', kick)
} );

let inProgress = false;

function randomTime(min, max) {
    return Math.round(Math.random() *
        (max- min)+ min);
}

function randomHole(holes) {
    const id = Math.floor(Math.random() * holes.length);
    const hole = holes[id];
    console.log(hole);
    return hole;
}

function showMole() {
    const time = data;
    const hole = randomHole(holes);
    hole.classList.remove('dead-mole');
    hole.classList.add('up');
    setTimeout(()=>{ hole.classList.remove('up');
    if(inProgress) showMole();
    }, time)
}

function startGame() {
    if (inProgress) return;
    inProgress = true;
    kicks= 0;
    showMole();
    countSeconds = 30;
    score.textContent = 0;
    startTracking();
    setTimeout(()=>{
        inProgress= false;
    }, 30000);
}

let kicks=0;

let countSeconds=0;

function kick(e) {
        if(!e.isTrusted) return;
        this.parentNode.classList.add('dead-mole');
        this.parentNode.classList.remove('up');
        kicks++;
        score.textContent = kicks;
}

function startTracking() {
    countSeconds = 31;
    updateTimer();
}

function updateTimer() {
    if (countSeconds===0)return;
    setTimeout(()=> {
        countSeconds--;
        timeBlock.textContent = '00:'+ (countSeconds>9 ?countSeconds: '0'+countSeconds );
        updateTimer();
    },1000)
}

