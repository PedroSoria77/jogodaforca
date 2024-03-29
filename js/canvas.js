var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');
pincel.fillStyle = "rgb(239, 241, 245)";
pincel.fillRect(20, 0, 800, 400);

function desenhaCirculo(x, y, raio, cor) {

  pincel.fillStyle = cor;
  pincel.beginPath();
  pincel.arc(x, y, raio, 0, 2 * 3.14);
  pincel.fill();
}

function desenhaRetangulo(x, y, tamanho1, tamanho2, cor){

    pincel.fillStyle = cor;
    pincel.fillRect(x , y, tamanho1, tamanho2);
    pincel.fillStroke = cor;
    pincel.strokeRect(x , y, tamanho1, tamanho2);  
}

function desenhaBracoD(){
  pincel.fillStyle = 'black';
  pincel.beginPath();
  pincel.moveTo(180, 180);
  pincel.lineTo(142, 200);  
  pincel.stroke();
}

function desenhaBracoE(){
  pincel.fillStyle = 'black';
  pincel.beginPath();
  pincel.moveTo(215, 205 );
  pincel.lineTo(180, 180);  
  pincel.stroke();
}

function desenhaPernaE(){
  pincel.fillStyle = 'black';
  pincel.beginPath();
  pincel.moveTo(220, 265 );
  pincel.lineTo(183, 228);  
  pincel.stroke();
}

function desenhaPernaD(){
  pincel.fillStyle = 'black';
  pincel.beginPath();
  pincel.moveTo(176, 228 );
  pincel.lineTo(145, 270);  
  pincel.stroke();
}

desenhaRetangulo(60, 70, 20, 330, "red");
desenhaRetangulo(50, 80, 180, 20, "red");
desenhaRetangulo(180, 99, 2, 60, "red");


function desenha(erros){
  if(erros === 1){
    desenhaCirculo(180, 150, 18, "black")
    desenhaCirculo(180, 150, 16, "white")
  } else if(erros === 2){
    desenhaRetangulo(178, 168, 3, 60, "black");
  } else if(erros === 3){
    desenhaBracoD()
  }else if(erros === 4){
    desenhaBracoE()
  }else if(erros === 5){
    desenhaPernaE()
  }else if(erros === 6){
    desenhaPernaD()
  }
}






