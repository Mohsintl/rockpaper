let ls =['rock','paper','Scissors']
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function getComputerChoice (){
    let CChoice=getRandomInt(3);
    return ls[CChoice];

}
function playRound(playerSelection, computerSelection) {
    // your code here!
    let winner;
    if (computerSelection == playerSelection ){
        console.log('TIE')

    }
    else{
        switch (playerSelection){
            case 'rock': if(computerSelection=='paper'){
                            winner='lose';
                        }
                        else{
                            winner='win';
                        }
                        break;
            case 'paper':if(computerSelection=='Scissors'){
                            winner='lose';
                        }
                        else{
                        winner='win';
                        }
                        break;
            case 'Scissors':if(computerSelection=='rock'){
                                winner='lose';
                            }
                            else{
                            winner='win';
                            }
                            break;
                            default:break;
        }
        if(winner=='win'){
            winner=`you win,${playerSelection} beats ${computerSelection}`
        }
        else{
            winner=`you lose,${computerSelection} beats ${playerSelection}`
        }
    }
    return winner;

  }


function game(){
    let WinCOunt=0,temp;
    for(let i=0;i<5;i++)
    {
        let playerSelection = prompt("Enter user choice");
        let computerSelection = getComputerChoice();        
        temp=playRound(playerSelection,computerSelection);
        if(temp=='win'){
            WinCOunt+=1;
        break;
        }
        else{
            WinCOunt-=1;
        }
        console.log(temp);
    }
    if(WinCOunt>=3)
    {
        console.log('you win');
    }
    else{
        console.log('you lose');
    }

}
game();