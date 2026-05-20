document.addEventListener('DOMContentLoaded', () => {
    const sergi = document.querySelector('.sergi')
    const grid = document.querySelector('.grid')
    const alert = document.getElementById('alert')

    let gravity = 0.9
    let estaBotant = false;
    let isGameOver = false;

    let score = 0;
    
    function control(tecla) {

        if (tecla.code == 'Space') {
            if (estaBotant == false) {
                jump();
            }
        }
        if (tecla.key == 'c') {
            transformar();
        }
        if (tecla.key == 'j') {
            volver();
        }
    }

    let position = 0;
    function jump() {
        estaBotant = true;
        let count = 0;
        let puja = setInterval(function () {
            if (count == 15) {
                clearInterval(puja)
                let baixa = setInterval(function () {
                    if (count == 0) {
                        clearInterval(baixa)
                        estaBotant = false;

                    }
                    position -= 5;
                    count--;
                    position = position * gravity;
                    sergi.style.bottom = position + 'px';
                }, 20)
            }
            position += 50
            position = position * gravity
            count++
            sergi.style.bottom = position + 'px'
        }, 20)
    }

    function transformar() {
        sergi.style.backgroundImage = "url('./img/batman.png')";

    }

    function volver() {
        sergi.style.backgroundImage = "url('./img/spiderman.png')";

    }

    function obstaculo() {

        if (!isGameOver) {

            let posicio = 1600;
            let randomTime = Math.random() * 3000

            const obj = document.createElement('div')
            obj.classList.add('estrellamuerte')

            obj.style.left = posicio + 'px'
            grid.appendChild(obj)

            let mueve = setInterval(function () {
                if (posicio > 0 && posicio < 60 && position < 60) {
                    clearInterval(mueve);
                    isGameOver = true;

                    while (grid.firstChild) {
                        grid.removeChild(grid.lastChild)

                    }
                }
                posicio -= 15;
                obj.style.left = posicio + 'px';
            }, 20)
            setTimeout(obstaculo, randomTime);
        }



    }

    function generaObs() {

        let posicio = 1700;
        let randomTime = Math.random() * 3000;

        const obj = document.createElement('div')
        obj.classList.add('comida')

        obj.style.left = posicio + 'px'
        grid.appendChild(obj)

        let mueve = setInterval(function () {
            if (posicio > 0 && posicio < 70 && position < 60) {
                clearInterval(mueve);
              score++
              obj.remove();
              pintarPunts();
               
            }

            posicio -= 15;
            obj.style.left = posicio + 'px'
        }, 20)
        setTimeout(generaObs, randomTime);

    }

    function pintarPunts(){
        document.getElementById("score").innerHTML= 'Score:'+score;
       
    }

    generaObs()
    obstaculo();
    

    document.addEventListener('keydown', control)
})