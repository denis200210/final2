const SIZE = 4;
document.querySelector('.container').style.gridTemplate = `repeat(${SIZE}, 1fr) / repeat(${SIZE}, 1fr)`

function createGrid() {
    let grid = document.querySelector('.container');

    for (let i = 0; i < SIZE; i++) {
        for (let j = 0; j < SIZE; j++) {
            let propeller = document.createElement("div");
            propeller.classList.add('propeller');
            propeller.setAttribute("data-col", '' + j);
            propeller.setAttribute("data-row", '' + i);

            if (Math.floor(Math.random() * 2) === 1) {
                propeller.classList.add('horizontal');
            } else {
                propeller.classList.add('vertical');
            }
            grid.appendChild(propeller);
        }
    }
}

// поворот вентилей
window.addEventListener("click", (e) => {
    let target = e.target;
    if (target.className === 'propeller horizontal' || e.target.className === 'propeller vertical') {
        let row = target.getAttribute('data-row');
        let col = target.getAttribute('data-col');

        for (let i = 0; i < SIZE; i++)  {
            rotate(document.querySelector('[data-col="' + i + '"][data-row="' + row + '"]'));
        }

        for (let j = 0; j < SIZE; j++) {
            rotate(document.querySelector('[data-col="' + col + '"][data-row="' + j + '"]'));
        }

        rotate(target);

        // конец игры
        if (document.querySelectorAll('.horizontal').length === 0 || document.querySelectorAll('.vertical').length === 0) {
            setTimeout(() => {
                let arr = document.querySelectorAll('.propeller');
                for (let i = 0; i < 16; i++) {
                    arr[i].style.setProperty("transform", "translatex(calc(100vw - 150px)");
                }
                setTimeout(() => {
                    document.querySelector(".container").innerHTML = '';
                    let propeller = document.createElement("div");
                    propeller.classList.add('restartPropeller');
                    propeller.classList.add('foreverPropeller');

                    let button = document.createElement("button");
                    button.textContent = "restart";

                    button.onclick = restart;
                    document.querySelector('.container').appendChild(propeller);
                    document.querySelector('.container').appendChild(button);
                }, 500);
            }, 500);
        }
    }
}, false)

function restart () {
    const clear = document.querySelector(".container");
    clear.innerHTML = '';
    createGrid();
}

function rotate(element) {
    if (element.className === 'propeller horizontal') {
        element.classList.remove('horizontal');
        element.classList.add('vertical');
    } else {
        element.classList.remove('vertical');
        element.classList.add('horizontal');
    }
}

createGrid();