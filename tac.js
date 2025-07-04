let boxes=document.querySelectorAll('.box');
let resetGamebtn=document.querySelector('#reset');
let newGamebtn=document.querySelector('#newGame')
let msgContainer=document.querySelector('.msg')
let msg=document.querySelector('#msg');

let turnO=true;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X"
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});
const disable= ()=>{
for (let box in boxes){
                    boxes.disabled = true;
                }
}
const enable= ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText= "";
    }
}
const showWinner= (winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
}
const checkWinner=()=>{
    for(pattern of winPatterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                console.log("winner ",pos1Val);
                showWinner(pos1Val);
                disable();
                }
            } 
        }
    }
    const ResetGame= ()=>{
        turnO= true;
        enable();
    }
    const NewGame= ()=>{
        turnO=true;
        enable();
    }
    newGamebtn.addEventListener("click",ResetGame );
    resetGamebtn.addEventListener("click",ResetGame);
        