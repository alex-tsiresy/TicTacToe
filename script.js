//create boxes
let Game = 'ready'
const GameBoard = ( ()=> {
     
    const spaces = [];
    const parentElement = document.querySelector('#board');
    //add reset button
    const reset  = document.createElement('button');
    const body = document.querySelector('body');
    body.appendChild(reset);
    reset.textContent = "RESET";

    for(let i = 0; i < 9; i++){
    const newSpace = document.createElement('div');
    parentElement.appendChild(newSpace);
    newSpace.className = "space";
    newSpace.style.userSelect = 'none'
    spaces[i]= {element: newSpace, val: "" };

    //position them
    newSpace.style.gridColumnStart = i - Math.floor(i/3)*3 + 1;
    newSpace.style.gridColumnEnd = i - Math.floor(i/3)*3 + 1 ;
    newSpace.style.gridRowStart = Math.floor(i/3) + 1;
    newSpace.style.gridRowStart = Math.floor(i/3) + 1;
    

    }

    //add reset action for each space
    reset.addEventListener('click', function(){
        Game = 'ready';

    })
    for(let i = 0; i < 9; i ++){
        reset.addEventListener('click', function (){
            let sp = spaces[i].element;
            spaces[i].val = "";
            sp.removeChild(sp.firstChild);
            
        });

        
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
//And check for wins



GameBoard.forEach( function(el){
    el.element.addEventListener('click', function (){
        if (el.val == ""){

            if(Game == "ready"){
                el.val = currentPlayer.marker;
                let img = document.createElement('img');
                if(currentPlayer.marker == "X"){
                    img.src = "./ressources/cross.png";
                    img.style.width = '90%';
                }
                else{
                    img.src = "./ressources/decagon.png";
                    img.style.width = '90%';
                
                }
                
                el.element.appendChild(img);
                img.style.width = '90%';
                let res = checkIfWin(GameBoard, player1, player2);
                if (res != null){
                    alert(res.name + " won")
                    Game = "complete";
                    return res
                    
                }
                if(currentPlayer.name == player1.name){
                    currentPlayer = player2;
                }
                else{
                    currentPlayer = player1;
                }

            }
                
        }
        else{
            alert("Spot taken");
        }
        
    });
    
});




