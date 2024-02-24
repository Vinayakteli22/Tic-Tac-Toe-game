// for buttons
let boxes=document.querySelectorAll(".box");// for buttons
let resetBtn=document.querySelector("#reset-game");//for reset button
let msgContainer=document.querySelector(".msg-container");//for msg container
let msg=document.querySelector("#msg"); // for msg
let newbtn=document.querySelector("#new-game");//for new button
let TurnO=true;//player x and player y
let gamecontainer=document.querySelector(".container");// for game container
let head=document.querySelector("#heading");// for heading
// array of winpatterns
let winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(TurnO){
            box.innerText="O";
            TurnO=false;
        }else{
            box.innerText="X";
            TurnO=true;
        }
        box.disabled=true;
        check_winner();
    })

});
// for disableda button
const disabledbtn=()=>{
    for(let box of boxes){
        box.disabled=ture;

    }
}
// for ensableda button
const enabledbtn=()=>{
    for(let box of boxes){
        box.disabled=false;

    }
}

//to display winner
const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    //disabledbtn();
    msgContainer.classList.remove("hide");
    gamecontainer.classList.add("hide");
    head.classList.add("hide");
}
const check_winner=()=>{
    for(let patterns of winPatterns){
        let patval1=boxes[patterns[0]].innerText;
        let patval2=boxes[patterns[1]].innerText;
        let patval3=boxes[patterns[2]].innerText;
        if(patval1!=""&&patval2!=""&&patval3!=""){
        if(patval1===patval2&&patval2===patval3){
            showWinner(patval1);
        }
    }

    }
}
// /new btn
const resetgame=()=>{
    TurnO=true;
    for(let box of boxes){
        box.innerText="";
    }
    msgContainer.classList.add("hide");
    
    enabledbtn();
}
const newgame=()=>{
    TurnO=true;
    for(let box of boxes){
        box.innerText="";
    }
    msgContainer.classList.add("hide");
    gamecontainer.classList.remove("hide");
    head.classList.remove("hide");
    enabledbtn();


}
newbtn.addEventListener("click",newgame);
resetBtn.addEventListener("click",resetgame);