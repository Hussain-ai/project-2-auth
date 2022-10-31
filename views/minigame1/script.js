//allocate variables for the html tags
//allocate variable for tile
const tile = document.querySelectorAll('.tile');
//allocate variable for reset 
const resetBtn = document.querySelector('#reset');
//allocate variable for status
const statusText = document.querySelector('#status');
//create winningCondition for the board
const winningCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
//sets the board
let board = ['', '', '', '', '', '', '', '', '']
//sets the string for current player
let currentPlayer = 'X'
//sets boalean to check if the game is still running
let active = false;
startGame()
//Below we set the functions
//this function to start the game
function startGame(){
    tile.forEach(tile=>tile.addEventListener('click', tileClicked))
    resetBtn.addEventListener('click', resetGame)
    //below will change the announcer
    statusText.textContent = `${currentPlayer}'s turn`;
    active = true;
}
//this function to make a tile active from a click
function tileClicked(){
    const tileIndex = this.getAttribute("tileIndex");

    if(board[tileIndex] != "" || !active){
        return;*
}

updateTile(this, tileIndex);
checkWinner();
}
//function to update the tiles
function updateTile(tile,index){
    board[index] = currentPlayer
    tile.textContent = currentPlayer
}
//function to change players turn
function playerChange(){
    currentPlayer = (currentPlayer == "X") ? "O" : "X"
    statusText.textContent = `${currentPlayer}'s turn`
}
//function to check winner (most Important part)
function checkWinner(){
    let roundWon = false

    for(let i = 0; i < winningCondition.length; i++){
        //variables below state the position of the tiles 0,1,2 
        //(can also be used for the other positions becuase it is connected with the condition in a loop)
        const condition = winningCondition[i];
        const tileA = board[condition[0]];
        const tileB = board[condition[1]];
        const tileC = board[condition[2]];
        //checks if each tile is empty then it continues
        if(tileA == "" || tileB == "" || tileC == ""){
            continue;
        }
        //checks if all tiles beside each other are equal or the same then gives winning
        if(tileA == tileB && tileB == tileC){
            roundWon = true;
            break
        }
    }
    //checks if the condition roundwon is true then it gives the status of winning player and stops the game
    if(roundWon){
        statusText.textContent = `${currentPlayer} wins!`
        active = false;
    }
    //checks if board does not include an empty tile then it gives the status of draw and stops the game
    else if(!board.includes("")){
        statusText.textContent = `Draw!`
        active = false
    }
    //if none of the above conditions are met, if prompts the playchange function that switches the players turn
    else{
        playerChange()
    }
}
//function to restart game by making all tiles empty on board and makes current player x with status change and activates the game again
    function resetGame(){
        currentPlayer = "X";
        board = ["", "", "", "", "", "", "", "", ""];
        statusText.textContent = `${currentPlayer}'s turn`
        tile.forEach(tile => tile.textContent = "")
        active = true
}
