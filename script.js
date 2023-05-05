//create boxes

const GameBoard = ( ()=> {
     
    const spaces = [];
    const parentElement = document.querySelector('#board');
    for(let i = 0; i < 9; i++){
    const newSpace = document.createElement('div');
    parentElement.appendChild(newSpace);
    newSpace.className = "space";
    spaces[i]= {element: newSpace, val: "" };

    //position them
    newSpace.style.gridColumnStart = i - Math.floor(i/3)*3 + 1;
    newSpace.style.gridColumnEnd = i - Math.floor(i/3)*3 + 1 ;
    newSpace.style.gridRowStart = Math.floor(i/3) + 1;
    newSpace.style.gridRowStart = Math.floor(i/3) + 1;
        
    }



    return spaces;
})();

function Player(name, marker){
    this.name = name;
    this.marker = marker;
}

function checkIfWin(GameBoard, player1, player2){
    //check columns
    let p1Counter = 0;
    let p2Counter = 0;
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 9; j = j + 3){
            if(GameBoard[i+j].val == player1.marker){
                p1Counter++;
            }
            else if(GameBoard[i+j].val == player2.marker){
                p2Counter++;
            }
        }

        if(p1Counter == 3){
            return player1;
        }
        else if(p2Counter == 3){
            return player2
        }
        else{
            p1Counter = 0;
            p2Counter = 0;
        }

    }
    //check rows
    for(let i = 0; i < 9; i = i + 3){
        for(let j = 0; j < 3; j++){
            if(GameBoard[i+j].val == player1.marker){
                p1Counter++;
            }
            else if(GameBoard[i+j].val == player2.marker){
                p2Counter++;
            }
        }

        if(p1Counter == 3){
            return player1;
        }
        else if(p2Counter == 3){
            return player2
        }
        else{
            p1Counter = 0;
            p2Counter = 0;
        }

    }
    
    //check diagonals
    for(let i = 0; i < 9; i = i + 4){
        if(GameBoard[i].val == player1.marker){
            p1Counter++;
        }
        else if(GameBoard[i].val == player2.marker){
            p2Counter++;
        }
    }

    if(p1Counter == 3){
        return player1;
    }
    else if(p2Counter == 3){
        return player2
    }
    else{
        p1Counter = 0;
        p2Counter = 0;
    }

    for(let i = 2; i < 9; i = i + 2){
        if(GameBoard[i].val == player1.marker){
            p1Counter++;
        }
        else if(GameBoard[i].val == player2.marker){
            p2Counter++;
        }
    }

    if(p1Counter == 3){
        return player1;
    }
    else if(p2Counter == 3){
        return player2
    }
    else{
        p1Counter = 0;
        p2Counter = 0;
    }



    return null;
}


//get players
const name1 = prompt("Who is the first player?");
const name2 = prompt("Who is the second player");
const player1 = new Player(name1, "X");
const player2 = new Player(name2, "O");
let currentPlayer = player1;

//Add click event and player alternation
GameBoard.forEach( function(el){
    el.element.addEventListener('click', function (){
        if (el.val == ""){
            el.val = currentPlayer.marker;
            el.element.textContent = currentPlayer.marker;
            let res = checkIfWin(GameBoard, player1, player2);
            if (res != null){
                alert(res.name + " won")
                return res
                
            }
            if(currentPlayer.name == player1.name){
                currentPlayer = player2;
            }
            else{
                currentPlayer = player1;
            }
        }
        else{
            alert("Spot taken");
        }
        
    });
    
});

//run game

//return winner



