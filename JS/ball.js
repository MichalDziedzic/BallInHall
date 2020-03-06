class Ball {
    constructor(startTime,finishGame) {
       // this.ball=document.querySelector('.ball'),
        this.svgBallBoard=document.querySelector('#BallBoard'),
        this.playGround= document.querySelector('.playGround'),
        this.svgBall=document.querySelector('#svgBallelem'),
        this.health=3,
        this.finishBallGame=finishGame;
        this.posX=window.innerWidth/2;
        this.posY=window.innerHeight/2;
        this.circle={};
        this.tabHall=[{},{}];
        this.radius=10;
        this.amount=1;
       // console.log('test4');
       this.startBallProperties();
       this.generateHoleOnBoard();
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
        // console.log(this.svgBallBoard); 

    }
    
    generateHoleOnBoard()
    {

        const rangeH=window.innerWidth;
        const rangeW=window.innerWidth;

        const svghall=document.createElementNS('http://www.w3.org/2000/svg','circle');

         for(let i=0;i<this.tabHall.length;i++)
        {
            this.tabHall[i].el=svghall.cloneNode(false);
            
           let randPosX=Math.floor(Math.random()*(rangeW-30)+30);
           let randPosY=Math.floor(Math.random()*(rangeH-30)+30);
           this.tabHall[i].posX=randPosX;
           this.tabHall[i].posY=randPosY;

           
            this.tabHall[i].el.setAttribute('cx',randPosX);
            this.tabHall[i].el.setAttribute('cy',randPosY);
            this.tabHall[i].el.setAttribute('r', this.radius+5);
            this.tabHall[i].el.setAttribute('id',`svgHall${i}`);
           // this.svgBall.after(this.tabHall[i].el);
           this.svgBallBoard.appendChild(this.tabHall[i].el);
           console.log(this.tabHall[i].posX);

        
         }    
        
        
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
     
        for(let i=0;i<this.tabHall.length;i++)
        {
            //this.posX-5<=this.tabHall[i]randPosX && this.posX+5>this.tabHall[i] || this.posX===this.tabHall[i]
            //this.x>=25 && this.x<=53
            if(Math.floor(this.posX)>=(this.tabHall[i].randPosX) && Math.floor(this.posX)<=(this.tabHall[i].randPosX)+5)
            {
                console.log('work!');
            }
       
         
           console.log(this.tabHall[i].posX);

        
         }    
        


       
       
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
  
  