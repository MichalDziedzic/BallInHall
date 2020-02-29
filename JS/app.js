// Timer=(startTime,el)=>
// {
    
//     // oblicz czas 

//     let h=data.getMinutes();
//     let s=data.getSeconds();
//     let ms=data.getMilliseconds();
//     let xd=el;

//     // document.querySelector(el).innerHTML=`${s}:${ms}`;
//     //console.log(`${s}:${ms}`);

//     return data;

    
const svgBall=document.createElementNS('http://www.w3.org/2000/svg','circle');
let circle;
let radius=10;
let posX;
let posY;

setBallProperties=()=>
{
    posX = window.innerWidth/2;
  posY = window.innerHeight/2;

  
  
  circle = {};
  circle.el = svgBall.cloneNode(false);
  circle.el.setAttribute('cx', posX);
  circle.el.setAttribute('cy', posY);
  circle.el.setAttribute('r', radius);
  circle.el.setAttribute('id','svgBall')
  board.appendChild(circle.el);
}

 setBallProperties()
// }
// finishGame=(param,time)=>
// {
//     // let finishtime=new Date();
//     // let diffTimes=new Date(finishtime-time);
//     // // console.log(diffTimes.getSeconds());
//     // // console.log(diffTimes.getMilliseconds());
//     // const emptyObj=new Game();
//     // emptyObj.finishPlaying(param,diffTimes);

    
    
     
        
//}
    






