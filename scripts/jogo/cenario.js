class Cenario {
  constructor(imagemCenarioCeu, imagemCenarioFundo, imagemCenarioMeio, imagemCenarioFrente, imagemCenarioGrama, velocidade){
    this.velocidadeGrama = velocidade;
    this.velocidadeFrente = velocidade * 0.8;
    this.velocidadeMeio = velocidade * 0.6;
    this.velocidadeFundo = velocidade * 0.4;
    this.velocidadeCeu = velocidade * 0.2;
        
    this.imagemCenarioCeu = imagemCenarioCeu;
    this.imagemCenarioFundo = imagemCenarioFundo;
    this.imagemCenarioMeio = imagemCenarioMeio;
    this.imagemCenarioFrente = imagemCenarioFrente;
    this.imagemCenarioGrama = imagemCenarioGrama;
    
    this.x1Ceu = 0;
    this.x2Ceu = width;
    this.x1Fundo = 0;
    this.x2Fundo = width;
    this.x1Meio = 0;
    this.x2Meio = width;
    this.x1Frente = 0;
    this.x2Frente = width;
    this.x1Grama = 0;
    this.x2Grama = width;
  }
  
  exibe() {
    image(this.imagemCenarioCeu, this.x1Ceu, 0, width, height);
    image(this.imagemCenarioCeu, this.x2Ceu, 0, width, height);
    
    image(this.imagemCenarioFundo, this.x1Fundo, 0, width, height);
    image(this.imagemCenarioFundo, this.x2Fundo, 0, width, height);
    
    image(this.imagemCenarioMeio, this.x1Meio, 0, width, height);
    image(this.imagemCenarioMeio, this.x2Meio, 0, width, height);

    image(this.imagemCenarioFrente, this.x1Frente, 0, width, height);
    image(this.imagemCenarioFrente, this.x2Frente, 0, width, height);

    image(this.imagemCenarioGrama, this.x1Grama, 0, width, height);
    image(this.imagemCenarioGrama, this.x2Grama, 0, width, height);

    /* Estrutura inicial metodo Exibe:
    image(this.imagem, this.x1, 0, width, height);
    image(this.imagem, this.x2, 0, width, height);
    */
  }
  
  move() {
    this.x1Ceu = moveImagem(this.x1Ceu, this.velocidadeCeu);
    this.x2Ceu = moveImagem(this.x2Ceu, this.velocidadeCeu);
    
    this.x1Fundo = moveImagem(this.x1Fundo, this.velocidadeFundo);
    this.x2Fundo = moveImagem(this.x2Fundo, this.velocidadeFundo);

    this.x1Meio = moveImagem(this.x1Meio, this.velocidadeMeio);
    this.x2Meio = moveImagem(this.x2Meio, this.velocidadeMeio);

    this.x1Frente= moveImagem(this.x1Frente, this.velocidadeFrente);
    this.x2Frente = moveImagem(this.x2Frente, this.velocidadeFrente);

    this.x1Grama= moveImagem(this.x1Grama, this.velocidadeGrama);
    this.x2Grama = moveImagem(this.x2Grama, this.velocidadeGrama);
  }
}

function moveImagem(posicao, velocidade) {
  posicao -= velocidade;
  if(posicao <= -width) 
    posicao = width;

  return posicao;
}