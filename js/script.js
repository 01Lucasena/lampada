const lampadaImg = document.getElementById('lampada-img');
const switchBtn = document.querySelector('.switch');
const body = document.querySelector('body');


const imagemLampadaAcesa = '/images/lampada-acesa.png';
const imagemLampadaApagada = '/images/lampada-apagada.png';


function alternarLampada() {
    

    if (lampadaImg.src.includes(imagemLampadaApagada)) {
        
        lampadaImg.src = imagemLampadaAcesa;
    } else {
        
        lampadaImg.src = imagemLampadaApagada;
    }
    
    body.classList.toggle('modo-claro');
    
    switchBtn.classList.toggle('on');
}


switchBtn.addEventListener('click', alternarLampada);