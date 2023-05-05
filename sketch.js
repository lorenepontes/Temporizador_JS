var iniciar = 1;

var t=0;
var m=5;
var s=60;
var tempo=0;



function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(220);  
  textSize(20);
  textAlign(CENTER);
  text('Temporizador regressivo',200,50);
  textSize(100);
  text(m,150,200); 
  textSize(100);
  text(':',180,200);
  textSize(100);
  text(s,250,200);  
  textSize(10);
  textAlign(CENTER);
  text('Versão Simples - Lorene Garcia',200,380);
  tempo++;
  contador();
  parar();
 
 
  
  if(tempo%60==0){
    tempo++; 
    s--;   
    }
  } 


function contador(){
    
  
  //verifico quando s fica 0 
 if(s == 0){
  if(s ==0 && m > 0) {
      m = m -1;
    s = 60;
     }
  
 }
   
if(m==0){
  t=1; 
   }


}  

function parar(){ 
 if(s==0 && t ==1 ){  //para quando tudo esta zero
  noLoop();
   
 } 
  
/*
Cogido de temporizador regressivo de 5 min
feito por Lorene Garcia
Versão simples

*/
  
  
} 

 
    




