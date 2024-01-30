let boxes=document.querySelectorAll('.box');
let resetbtn=document.querySelector('#reset-btn');
let newgamebtn=document.querySelector('#new-btn');
let msgcontainer=document.querySelector('.msg-container');
let msg=document.querySelector('#msg');

let turnO=true; //playerx, playerO

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

const resetgame=()=>{
    turnO=true;
    enableboxes();
    msgcontainer.classList.add('hide');
}

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        //console.log('box was clicked');
        if(turnO){
            box.innerHTML='O';
            turnO=false;
        }else{
            box.innerHTML='x';
            turnO=true;
        }
        box.disabled=true;

        checkwinner();
    })
});

const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerHTML="";
    }
};

const showwinner=(winner)=>{
    msg.innerHTML=`congratulations, Winner is ${winner}`
    msgcontainer.classList.remove('hide');
    disableboxes();
}

const checkwinner=()=>{
    for(let pattern of winpatterns){
        //console.log(pattern[0],pattern[1],pattern[2])
        // console.log(boxes[pattern[0]].innerHTML,
        //             boxes[pattern[1]].innerHTML,
        //             boxes[pattern[2]].innerHTML,);

        let pos1val=boxes[pattern[0]].innerHTML;
        let pos2val=boxes[pattern[1]].innerHTML;
        let pos3val=boxes[pattern[2]].innerHTML;

        if(pos1val !="" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                //console.log('winner',pos1val);
                showwinner(pos1val);
            }
        }
    }
}

newgamebtn.addEventListener('click',resetgame);
resetbtn.addEventListener('click',resetgame);





