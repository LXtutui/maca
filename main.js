var canvas;
var x = 0;
var y = 0;
var largura=0;
var altura=0;
var numero=0;
var apple="";
var dadoFala="";
var drawApple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function preload(){
  apple=loadImage("aplle.png");
}

function start()
{
  document.getElementById("status").innerHTML = "O sistema está ouvindo. Por favor, fale.";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "A fala foi reconhecida: " + content; 
  numero=Number(content);
  if(Number.isInteger(numero)){
    document.getElementById("status").innerHTML = "A maça começou a ser desenhada";
    drawApple="set"; 
  }else{
    document.getElementById("status").innerHTML = "o numero não foi reconhecido";
  }
}

function setup() {
  largura=window.innerWidth;
  altura=window.innerHeight;
  canvas=createCanvas(largura, altura-150);
  canvas.positon(0, 150);
}

function draw() {
  if(drawApple == "set")
  {
    for(var M=1; M<=numero; M++){
      var X=Math.floor(Math.random()*700);
      var Y=Math.floor(Math.random()*400);
      image(apple, X, Y, 50, 50);
    }
    document.getElementById("status").innerHTML = toNumber + " maçãs desenhadas";
    drawApple = "";
    dadoFala=numero+" maçãs desenhadas";
    speak()
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(dadoFala);

    synth.speak(utterThis);

    dadoFala = "";
}
