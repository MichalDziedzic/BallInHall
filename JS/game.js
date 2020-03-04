class Game{
    constructor(targetAmount){
       
        
        this.playground=document.querySelector('.play-ground');
        this.panelGame=document.querySelector('.panelGame');
        this.targetAmount=targetAmount;
        this.startTime=null;
        
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
        const startTime=new Date();
        const test1=new Ball(startTime,this.finishGame);
       
        
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

 
