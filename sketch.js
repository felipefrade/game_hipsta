let imagemCenario;
let imagemPersonagem;
let imagemInimigo;
let imagemGameover;

let somDoPulo;
let somDoJogo;
let somGameover;

let cenario;
let personagem;
let inimigo;

let puloMax = 0;

const matrizInimigo = [
  [0 , 0],
  [105, 0],
  [210, 0],
  [315, 0],
  [0, 100],
  [105, 100],
  [210, 100],
  [315, 100],
  [0, 200],
  [105, 200],
  [210, 200],
  [315, 200],
  [0, 300],
  [105, 300],
  [210, 300],
  [315, 300],
  [0, 400],
  [105, 400],
  [210, 400],
  [315, 400],
  [0, 500],
  [105, 500],
  [210, 500],
  [315, 500],
  [0, 600],
  [105, 600],
  [210, 600],
  [315, 600],
]; 

const matrizPersonagem = [
  [0, 0], 
  [220, 0], 
  [440, 0], 
  [660, 0], 
  [0, 270], 
  [220, 270], 
  [440, 270], 
  [660, 270], 
  [0, 540], 
  [220, 540], 
  [440, 540], 
  [660, 540], 
  [0, 810], 
  [220, 810], 
  [440, 810], 
  [660, 810]
];

function preload() {
  imagemCenario = loadImage ('imagens/cenario/floresta-vermelha.png');
  imagemPersonagem = loadImage ('imagens/personagem/correndo.png');
  imagemInimigo = loadImage ('imagens/inimigos/gotinha.png');
  imagemGameover = loadImage ('imagens/assets/game-over.png');
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  somDoPulo = loadSound('sons/somPulo.mp3');
  somGameover = loadSound('sons/som-gameover.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 3);
  personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 110, 135, 220, 270);
  inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 52, 52, 104, 104);
  frameRate(40)
  somDoJogo.loop();
}

function keyPressed() {
  //console.log(key);
  if((key=== 'ArrowUp') || (key === ' ')) {
    personagem.pula();
  }
}

function draw() {
  cenario.exibe();
  cenario.move();

  personagem.exibe();
  personagem.aplicaGravidade(); 

  inimigo.exibe();
  inimigo.move();

  if(personagem.estaColidindo(inimigo)){
    //console.log('colidiu');
    somDoJogo.stop();
    noLoop();
    somGameover.play();
    image(imagemGameover, (width / 2) - 280, (height / 2) - 30, 618, 117);
  }
}

function touchStarted() {
  getAudioContext().resume()
}

