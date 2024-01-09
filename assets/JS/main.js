const mainVideo = document.getElementById('main-video');
const interactionButtons = document.getElementById('interaction-buttons');
const button1 = document.getElementById('option1');
const button2 = document.getElementById('option2');
const video = document.getElementById('main-video');

let videoStart = "assets/videos/video1.mp4"
let videoFase1 = [ "assets/videos/video2.mp4", "assets/videos/video3.mp4", "assets/videos/video4.mp4", "assets/videos/video7.mp4", "assets/videos/video8.mp4"];
let videoFase2 = [ "assets/videos/video4.mp4", "assets/videos/video5.mp4", "assets/videos/video6.mp4"]

mainVideo.innerHTML = `<source src="${videoStart}" type="video/mp4"></source>`
interactionButtons.innerHTML = `
<button id="option1" onclick="selectOption1('${videoFase1[0]}')">Opção 1</button>
<button id="option2" onclick="selectOption2('${videoFase2[0]}')">Opção 2</button>`


mainVideo.addEventListener('timeupdate', function() {
    const currentTime = mainVideo.currentTime;
    const duration = mainVideo.duration;

    // Exibir botões faltando 3 segundos para o final do vídeo
    if (duration - currentTime <= 3) {
        interactionButtons.style.display = 'block';
    } 

});

function selectOption1(source) {
   
    video.src = source;
    video.load();
    video.play();
    interactionButtons.style.display = 'none';
    const buttons = document.querySelectorAll('#interaction-buttons button');
    
    //cria uma corrente de resultados específicos para o caminho escolhido
    
    switch (source){
        case videoFase1[0]:
            interactionButtons.innerHTML = `
    <button id="option1" onclick="selectOption1('${videoFase1[1]}')">Opção 1</button>
    <button id="option2" onclick="selectOption2('${videoFase1[2]}')">Opção 2</button>`;
        break;
        case videoFase1[1]:
            interactionButtons.innerHTML = `
    <button id="option1" onclick="selectOption1('${videoFase1[3]}')">Opção 1</button>
    <button id="option2" onclick="selectOption2('${videoFase1[4]}')">Opção 2</button>`;
        break;
        default:
        buttons.forEach(button => button.disabled = true);
    }
        
  // Desabilitar todos os botões após o clique
  //const buttons = document.querySelectorAll('#interaction-buttons button');
  //buttons.forEach(button => button.disabled = true);

}

function selectOption2(source) {
    
    video.src = source;
    video.load();
    video.play();
    interactionButtons.style.display = 'none';

    //cria uma corrente de resultados específicos para o caminho escolhido

     const buttons = document.querySelectorAll('#interaction-buttons button');
     
     switch (source){
        case videoFase2[0]:
            interactionButtons.innerHTML = `
    <button id="option1" onclick="selectOption1('${videoFase2[1]}')">Opção 1</button>
    <button id="option2" onclick="selectOption2('${videoFase2[2]}')">Opção 2</button>`;
        break;
        default:
        buttons.forEach(button => button.disabled = true);
        
    }

// Desabilitar todos os botões após o clique
//const buttons = document.querySelectorAll('#interaction-buttons button');
//buttons.forEach(button => button.disabled = true);
   
}