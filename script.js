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

    function jump(){
        sergi.style.bottom = '200px'
    }
    
    function transformar(){
        sergi.style.backgroundImage = "url('./img/batman.png')";
     
    }
    function volver(){
        sergi.style.backgroundImage = "url('./img/spiderman.png')";
     
    }


    document.addEventListener('keydown', control)
})