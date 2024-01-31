let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".option");
const msg = document.querySelector(".msg");
const userScorePara = document.querySelector(".user-score")
const compScorePara = document.querySelector(".comp-score")

const genCompChoice=()=>{
  const options = ["rock","paper","scissor"];
  const randomIdx = Math.floor(Math.random() * 3);
   return options[randomIdx];
}
const drawGame =()=>{
    msg.innerText = "Game was draw. play again.";
    msg.style.background ="#162521";
}
const playgame=(userchoice)=>{
  const compchoice = genCompChoice();
   const showWinner=(userWin, userchoice, compchoice)=>{
       if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userchoice} beats ${compchoice}`;
        msg.style.background = "green";
       }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose! ${compchoice} beats Your ${userchoice}`;
        msg.style.background = "red";
       }
   }
  if(userchoice === compchoice){
      drawGame();
  } else{
    let userWin = true;
    if(userchoice==="rock"){
      userWin = compchoice === "paper" ? false:true;
    }else if ( userchoice === "paper"){
      userWin = compchoice === "scissor" ? false : true;
    } else {
      userWin = compchoice === "rock" ? false : true;
    }
    showWinner(userWin, userchoice, compchoice);
  }
}

choices.forEach((option)=>{
  option.addEventListener("click",()=>{
    const userchoice = option.getAttribute("Id");
    playgame(userchoice);
  })
})