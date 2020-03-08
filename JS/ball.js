class Ball {
    constructor(finishGame,checkBall) {
      
        this.svgBallBoard=document.querySelector('#BallBoard'),
        this.playGround= document.querySelector('.playGround'),
        this.svgBall=document.querySelector('#svgBallelem'),
        this.health=3,
        this.finishBallGame=finishGame;
        this.posX=window.innerWidth/2;
        this.posY=window.innerHeight/2;
        this.circle={};
        this.radius=10;
        this.size=61;
        this.amount=0;
        this.checkBall=checkBall;
        this.startTime=new Date();
      
       this.startBallProperties();
       //this.generateHoleOnBoard();
        this.moveEvent = window.addEventListener('deviceorientation', (e) =>
        {
          this.BallSpeed(e.gamma, e.beta)
          setInterval(() => this.moveBall(), 10)
          
        },true),
        this.moveRateX = 0,
        this.moveRateY = 0;
        
        
        
    }

    startBallProperties(){

   
        const svgBallElem=document.createElementNS('http://www.w3.org/2000/svg','circle');

       
        this.circle.el = svgBallElem.cloneNode(false);
        
    
        this.circle.el.setAttribute('cx',this.posX);
        this.circle.el.setAttribute('cy',this.posY);
        this.circle.el.setAttribute('r', this.radius);
        this.circle.el.setAttribute('id','svgBallelem');
        this.svgBallBoard.appendChild(this.circle.el);
        //.before(this.circle.el);
        // console.log(this.svgBallBoard); 

    }
    
    moveBall(){
     
        const ball1=document.querySelector('#svgBallelem');


        ball1.setAttribute('cx',this.posX);
       ball1.setAttribute('cy',this.posY);
       
       // this.startBallProperties(this.posX,this.posY)
        this.posX += this.moveRateX;
        this.posY += this.moveRateY;
        this.checkBall();
        
        
    
        // if(this.y>=265 && this.y<=285 && this.x>=25 && this.x<=53)
       
     
       
         
            // if(Math.floor(this.posX)===this.tabHall[this.amount].posX && Math.floor(this.posY)===this.tabHall[this.amount].posY) 
            // {
            //     console.log('work!');
                
            // }
            // this.amount++;
           

        
            
        
        
      
        
     
    }
  
    BallSpeed = (gamma, beta) => {
        this.moveRateX += gamma / 10000;
        this.moveRateY += beta / 10000;
      
        
    }
  

     
  
  }
  
  