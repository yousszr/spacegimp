
//prendo il canvas

const cvs = document.getElementById('gioco');
const ctx = cvs.getContext("2d");

//creo l'unita di misura

const box = 52;

//carico le immagini

const spazioImg= new Image();
spazioImg.src ="img/grigliasfondo.png";

const navicellaImg= new Image();
navicellaImg.src="img/navicella.png";

const colpoImg = new Image();
colpoImg.src="img/colpo.png";

const vitaImg =new Image();
vitaImg.src="img/vita.png";

//creo navicella 
let navicella ={
    x : 7*box,
    y : 9*box
}

//creo vite
let vite=[];
vite[0]={
    x : 10*box,
    y : 0
}

vite[1]={
    x : 11*box,
    y : 0
}

vite[2]={
    x : 12*box,
    y : 0
}

//controllo della navicella
let d;
document.addEventListener("keydown",direction);

function direction(event){
    if(event.keyCode == 37){
        d="LEFT"; navicella.x-=box;
    }else if(event.keyCode == 39){
        d="RIGHT"; navicella.x+=box;
    }
}

let colpi=[];

//numero colpi
let i=0;

//creo lo score
let score=0;



//funzione draw

function draw(){

    //disegno sfondo
    ctx.drawImage(spazioImg,0,0);
    
    //disegno la navicella
    ctx.drawImage(navicellaImg,navicella.x,navicella.y);

    //disegno le vite
    for(let i=0;i<vite.length;i++){
    ctx.drawImage(vitaImg,vite[i].x,vite[i].y);
    }
    
    
    colpi[i]={
        x :  Math.floor(Math.random()*15) *box,
        y : 0
    }
    //disegno ostacoli
   
    for(i=0;i<colpi.length;i++){
    ctx.drawImage(colpoImg,colpi[i].x,colpi[i].y);
    colpi[i].y+=box;
    }
     
    //gameover
    for(i=0;i<colpi.length;i++){
        if(colpi[i].x==navicella.x && colpi[i].y==navicella.y && vite.length==1 ){
            alert("GAME OVER! Ricarica la pagina per iniziare una nuova partita!")
            clearInterval(game);
        } else if(colpi[i].x==navicella.x && colpi[i].y==navicella.y){
            vite.pop();
        }

        if( colpi[i].y>=10*box ){
            colpi.shift();
            i--;
            score++;
        }
    }
    
    //stampo il testo dello score
  ctx.fillStyle ="white";
  ctx.font ="25px Changa one";
  ctx.fillText("Score: "+score,0.2*box,0.5*box);
    

    i++;

  

}

let game =setInterval(draw,100);