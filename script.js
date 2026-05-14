document.addEventListener('DOMContentLoaded', () => {
    const sergi = document.querySelector('.sergi')
    const grid = document.querySelector('.grid')

    let gravity = 0.9

    function control(tecla){

        if(tecla.code == 'Space'){
           jump();
        }
        if(tecla.key == 'c'){
           transformar();
        }
        if(tecla.key == 'j'){
           volver();
        }
    }

    let position = 0;
    function jump(){
        let count = 0;
       let puja = setInterval(function(){
        if(count == 15){
            clearInterval(puja)
            let baixa = setInterval(function(){
                 if(count == 0){
            clearInterval(baixa)}
                position -= 5;
                count--;
                position = position*gravity;
                sergi.style.bottom = position+ 'px';
            },20)
        }
        position += 30
        position = position*gravity
        count++
        sergi.style.bottom = position+ 'px'
       },20) 
    }
    
    function transformar(){
        sergi.style.backgroundImage = "url('./img/batman.png')";
     
    }

    function volver(){
        sergi.style.backgroundImage = "url('./img/spiderman.png')";
     
    }

    function obstaculo(){
      const obj = document.createElement('div')
      obj.classList.add('estrellamuerte')
      grid.appendChild(obj)

    }

    obstaculo();

    document.addEventListener('keydown', control)
})