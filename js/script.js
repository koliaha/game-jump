let hero = document.querySelector('.hero')
let process = false
let gameOver = false
let fdown = 0.9
let pos = 0;
let startgame = 0
let mes = document.querySelector('#mesover')
let ground = document.querySelector('.main-content')
document.addEventListener('keypress', (event) => {
    if (event.keyCode === 32) {
        if (!process) {
            process = true
            upFunc()
        }
    }
})
objectsGen()

mes.addEventListener('click', (e) => {
    gameOver = false;
    mes.style.opacity = "0"
    let arrObj = document.querySelectorAll('.mainObject')
    arrObj.forEach((el) => {
        el.remove()
    })
    mes.style.opacity = "0"
    startgame = 0
    pos = 0;
    objectsGen()
})

function objectsGen() {
    let objPos = 1000;
    let rndTime = Math.random() * 4000
    const objectMain = document.createElement('div')
    startgame++;
    console.log(startgame)
    if (gameOver == false) {
        objectMain.classList.add('mainObject')
        console.log('Playing...')
    }
    objectMain.style.left = objPos + 'px'
    ground.appendChild(objectMain)
    let timeObj = setInterval(() => {
        if (objPos > 0 && objPos < 60 && pos < 60) {
            clearInterval(timeObj)
            mes.innerHTML = 'Game Over'
            mes.style.opacity = "1"
            gameOver = true
        }
        if (startgame == 10) {
            clearInterval(timeObj)
            mes.style.opacity = "1"
            mes.innerHTML = 'Game Complited'
            gameOver = true
        }
        objPos -= 10;
        objectMain.style.left = objPos + 'px'
    }, 20)
    
    if (gameOver == false) {
        setTimeout(objectsGen, rndTime)
    }
}

function upFunc() {
    let counter = 0;
    let startTimer = setInterval(() => {
        if (counter >= 15) {
            clearInterval(startTimer)
            let endTimer = setInterval(() => {
                if (counter === 0) {
                    clearInterval(endTimer)
                    process = false
                }
                pos -= 5
                counter--
                pos = pos * fdown
                hero.style.bottom = pos + 'px'
            }, 40)
        }
        pos += 30
        counter++
        pos = pos * fdown
        hero.style.bottom = pos + 'px'
    }, 40)
}