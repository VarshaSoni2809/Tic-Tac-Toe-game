let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg")

let turnO=true;
let click_count=0;
let winPatterns=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        console.log("box clicked!")
        click_count++;
        if(turnO){
            box.innerHTML = "O";
            box.style.color="#EE4266";
            turnO = false;
        }
        else{
            box.innerHTML = "X";
            box.style.color="#312509";
            turnO = true;
        }
        box.disabled=true;

        checkWinner();
    });

});

const checkWinner=() =>{
    for(let pattern of winPatterns){
        // console.log(pattern);
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);
        //console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);

        let position1Val=boxes[pattern[0]].innerText;
        let position2Val=boxes[pattern[1]].innerText;
        let position3Val=boxes[pattern[2]].innerText;

        if(position1Val !="" && position2Val !="" && position3Val !=""){
            if(position1Val === position2Val && position2Val === position3Val){
                console.log("winner",position1Val);
                showWinner(position1Val);
            }
            else if(click_count==9){
                showDraw();

            }
        }
    }

}

const showWinner=(winner) =>{
    msg.innerText=`Congratulations the winner is ${winner}!`;
    msgContainer.classList.remove("hide");
    disableBoxes();

};
const showDraw=()=>{
    msg.innerText=`Match is draw!`;
    msgContainer.classList.remove("hide");
    disableBoxes();

}

const disableBoxes=() =>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const resetGame=()=>{
    turnO=true;
    click_count=0;
    enableBoxes();
}

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        msgContainer.classList.add("hide");
    }
}
 resetBtn.addEventListener("click",resetGame);
