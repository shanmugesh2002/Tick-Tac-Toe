let playerText=document.getElementById('player');
let restartBtn=document.getElementById('restart');

let boxes=Array.from(document.getElementsByClassName('box'));
let winning_indicator=getComputedStyle(document.body).getPropertyValue('--winning--color');


let x_text="X";
let o_text="O";
let current_player=x_text;

let indexes=Array(9).fill(null);
console.log(indexes);

const startGame = () =>{
    boxes.forEach(box => box.addEventListener('click',boxClicked));
}
function boxClicked(e){
const id=e.target.id;
if(!indexes[id]){
    indexes[id]=current_player;
    e.target.innerText=current_player;
    if(playerHasWon()!==false){
       
        let won=playerHasWon();
        console.log(won);
        playerText.innerText=` Player ${current_player} has won !`;
        won.map( box => boxes[box].style.backgroundColor=winning_indicator)
        return
    }
    current_player =current_player == x_text ? o_text:x_text;
}
}
const winningCombos=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
function playerHasWon(){
 for(const i of winningCombos){
    let [a,b,c]=i;
    if(indexes[a] && indexes[a]==indexes[b] && indexes[a]==indexes[c]){
        return [a,b,c];
    }
 }
 return false
}

startGame()
restartBtn.addEventListener('click',restartButton);
function restartButton(){
    indexes.fill(null);
   boxes.forEach(box=>{
    box.innerText='';
    box.style.backgroundColor='';
    playerText.innerText='Tick Tac Toe';
   })
   current_player=x_text;
}
