//this variable keeps track of who's turn it is
let activePlayer = 'X';
//this array stores an array of moves. we use this to determine win conditions
let selectedSquares = [];

//this function is for placeing an x or an o in a square

function placeXOrO (squareNumber) {
    //this condition ensures a square hasn't been selected already
    //this .some() method is used to check each element of selectedSquare array to see if it contains the square number clicked on
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //this variable retrieves the html element id that was clicked
        let select = document.getElementById(squareNumber);
        //this condition checks who's turn it is
        if(activePlayer ==='X') {
            //if activePlayer is equal to 'X', the x.png is placed in HTML.
            select.style.backgroundImage = 'url("images/x.png")';
            //active player may only be 'X' or 'O',so if not 'X' it must be 'O'
        } else {
            //if activePlayer is equal to 'O', the o.png is placed in HTML
            select.style.backgroundImage = 'url("images/o.png")';
        }
        //squareNumber and activePlayer are concatenated together and added to array
        selectedSquares.push(squareNumber + activePlayer);
        //this calls a function to check for any win condition.
        checkWinConditions();
        //this condition is for changes the active player
        if (activePlayer === 'X') {
            //if active player is 'X' change it to 'O'.
            activePlayer = 'O';
        //If active player is anything other than 'X'
        } else {
            //change the active player to 'X'
            activePlayer = 'X';
        }
        //this function plays placemtn sounc.
        Audio('./media/place.mp3');
        //this condition checks to see if it is computers turn.
        if(activePlayer === 'O'){
            //This function disables clicking for computer choice.
            disableClick();
            //this function waits 1 second before placing the image & enabling click
            setTimeout(function () { computersTurn(); }, 1000);
        }
        //returning true is needed for our computerTurn() function to work
        return true;
    }
    //this function results in a random square being selected
    function computersTurn() {
        //this boolean is needed for our while loop
        let success = false;
        //this variable stores a random number 0-8
        let pickASquare;
        //this condition allows our while loop to keep trying if a square is selected alread
        while(!success) {
            //a random number between 0 and 8 is selected
            pickASquare = String(Math.floor(Math.random() * 9));
            //if the random number evaluates returns true, the square hasn't been slelected yet
            if (placeXOrO(pickASquare)) {
                //this line calls the function.
                placeXOrO(pickASquare);
                //this changes our boolean and ends the loop
                success = true;
            };
        }
    }
}