class Ball {
    constructor(startTime,finishGame) {
       // this.ball=document.querySelector('.ball'),
        this.svgBallBoard=document.querySelector('#BallBoard'),
        this.playGround= document.querySelector('.playGround'),
        this.health=3,
        this.finishBallGame=finishGame;
        this.posX=window.innerWidth/2;
        this.posY=window.innerHeight/2;
        this.circle={};
        this.radius=10;
        this.amount=0;
       // console.log('test4');
       this.startBallProperties();
        this.moveEvent = window.addEventListener('deviceorientation', (e) =>
        {
          this.BallSpeed(e.gamma, e.beta)
          setInterval(() => this.moveBall(), 10)
          
        },true),
        this.moveRateX = 0,
        this.moveRateY = 0;
        
        
        
    }

    startBallProperties(){

       // console.log('elo');
        const svgBallElem=document.createElementNS('http://www.w3.org/2000/svg','circle');
        this.circle.el = svgBallElem.cloneNode(false);
       // console.log(this.circle);
    
        this.circle.el.setAttribute('cx',this.posX);
        this.circle.el.setAttribute('cy',this.posY);
        this.circle.el.setAttribute('r', this.radius);
        this.circle.el.setAttribute('id','svgBallelem');
        this.svgBallBoard.appendChild(this.circle.el);
        // console.log(this.svgBallBoard); 

}
  
    
  
    moveBall(){
     
        const ball1=document.querySelector('#svgBallelem');


        ball1.setAttribute('cx',this.posX);
       ball1.setAttribute('cy',this.posY);
       
       // this.startBallProperties(this.posX,this.posY)
        this.posX += this.moveRateX;
        this.posY += this.moveRateY;
        
        
    
        // if(this.y>=265 && this.y<=285 && this.x>=25 && this.x<=53)
        // {
        //     console.log('udalo sie !');

        //     // finishGame(true,this.startTime);
        //     this.stopBallGame();
        // }
     
        
        


       
       
    //    else{
    //     this.x=150;
    //     this.y=150;
    //     this.moveRateX = 0,
    //     this.moveRateY = 0;
    //     this.health--;
    //     if(this.health===0)
    //     {
    //         console.log('koniec zycia gry');
    //         //finishGame(false,this.startTime);
    //        // this.finishPlaying(3);
    //        this.stopBallGame();

    //     }
        
      
        
     
    }
  
    BallSpeed = (gamma, beta) => {
        this.moveRateX += gamma / 1000;
        this.moveRateY += beta / 1000;
      
        
    }
  

     
  
  }
  
  