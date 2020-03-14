class Game{
    constructor(holesAmount){
       
        this.svgBallBoard=document.querySelector('#BallBoard'),
        this.playground=document.querySelector('.play-ground');
        this.panelGame=document.querySelector('.panelGame');
        this.holesAmount=holesAmount; //refact
        this.startTime=null;
        this.holes=[];
        this.score=0;
        this.ball=new Ball(this.finishGame,this.checkBallinHole)
        
        // this.playground.style.display="block";
        // this.panelGame.style.display="none";
        
        this.startGame();
        //this.health=3;
        
        
        
    }
    checkGameBtn()
    {
        //  this.playground.style.display="none";
        //      this.panelGame.style.display="block";
             
        console.log('xxx');
        
        
        
    }
    startGame()
    {
        this.generateHolesOnBoard();
        
        //const ;
        
       
        
    //     this.startGameStatus=!this.startGameStatus;
       
    //    if(this.startGameStatus)
    //     {
    //         this.playground.style.display="block";
    //         this.panelGame.style.display="none";
    //          this.startGameStatus=false;
    //         const startTime=new Date();
    //          const test1=new Ball(startTime,this.finishGame);
            

    //          //setInterval(() =>Timer(this.startTime,el),1);
            
        }
        
    generateHolesOnBoard()
    {

       
        const rangeH=window.innerWidth;
        const rangeW=window.innerWidth;

        

         for(let i=0;i<this.holesAmount;i++)
        {
            
            console.log('auus')
           let randPosX=Math.floor(Math.random()*(rangeW-30)+30);
           let randPosY=Math.floor(Math.random()*(rangeH-30)+30);
  
           const hole= new Hole(i,randPosX,randPosY);
            
           this.holes.push(hole);
           this.setHole(i,randPosX,randPosY);   
         }    
        
        
    }
    setHole(i,x,y)
    {
        
        const svgHole=document.createElementNS('http://www.w3.org/2000/svg','circle');
        this.holes[i].el=svgHole.cloneNode(false);
        this.holes[i].el.setAttribute('cx',x);
        this.holes[i].el.setAttribute('cy',y);
        this.holes[i].el.setAttribute('r', 15);
        this.holes[i].el.setAttribute('id',`svgHall${i}`);

    
        document.querySelector('#svgBallelem').before(this.holes[i].el);
        this.ActiveHole();
        

    }
    checkBallinHole=()=>
    {
        const ballxMin = (Math.floor(this.ball.posX))
        const ballxMax = ballxMin + this.ball.size
        const ballyMin = (Math.floor(this.ball.posY))
        const ballyMax = ballyMin + this.ball.size

        const holexMin = this.holes[this.score].posX;
        const holexMax = this.holes[this.score].posX + this.holes[this.score].size;
        const holeyMin = this.holes[this.score].posY;
        const holeyMax = this.holes[this.score].posY + this.holes[this.score].size;
        
        

     
        if ((((ballyMin > holeyMin) && (ballyMax < holeyMax)) && ((ballxMin > holexMin) && (ballxMax < holexMax)))) {
            //this.handlePoint();
            console.log('hihi');
            if(this.score===this.holesAmount)
            {
                this.finishGame();
            }else
            {   this.holes[this.score].el.remove();
                this.score++;
                this.ActiveHole();
                //remove ball o tym id 
            }
            
            
        }


    }
    ActiveHole()
    {
        this.holes[this.score].el.setAttribute('fill','rgb(132, 132, 130');
    }

    
    // finishPlaying(param)
    // {
        
    //     console.log(param);
    //     let xd=param;
    //     if(!this.startGameStatus)
    //     {
    //         this.playground.style.display="none";
    //          this.panelGame.style.display="block";
    //          let finishDiv=document.createElement("div");
    //          finishDiv.classList.add("TheEndGame");
    //          this.panelGame.append(finishDiv);
            
    //          if(param===true)
    //          {
    //             finishDiv.innerText=`YOU WIN!,your time is :${yourTime.getSeconds()}seconds ,${yourTime.getMilliseconds()}`;
    //          }else
    //          {
    //             finishDiv.innerText=`YOU LOSE! in time:${yourTime.getSeconds()}seconds ,${yourTime.getMilliseconds()} TRY AGAIN`;
    //          }
    //      }
    //  }
    
    finishGame(){
        console.log('xhtyhujj')

    }
    
   
    
}

 
