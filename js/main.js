let player1=""
let player2=""
let turn = "";  //declare let name all time difrent//
let playerOneIsNext = true;

const grid = [
    ['','',''],
    ['','',''],
    ['','','']
  ];
let Winner ='';
let MoveCount = 0;

const winnerCheck = function(player){
  if( (grid[0][0] === grid[0][1]) && (grid[0][0] === grid[0][1]) && (grid[0][2] === player) ||
      (grid[1][0] === grid[1][1]) && (grid[1][0] === grid[1][1]) && (grid[1][2] === player) ||
      (grid[2][0] === grid[2][1]) && (grid[2][0] === grid[2][1]) && (grid[2][0] === player) ||


     (grid[0][0] === grid[1][0]) && (grid[0][0] === grid[1][0]) && (grid[2][0] === player) ||
     (grid[0][1] === grid[1][1]) && (grid[0][1] === grid[1][1]) && (grid[2][1] === player) ||
     (grid[0][2] === grid[1][2]) && (grid[0][2] === grid[1][2]) && (grid[2][2] === player) ||


    (grid[0][0] === grid[1][1]) && (grid[0][0] === grid[2][2]) && (grid[0][0] === player) ||
    (grid[0][2] === grid[1][1]) && (grid[0][2] === grid[2][0]) && (grid[0][2] === player) )
    {

    boardMsg(player + " is winner!");
    Winner = player;
    MoveCount=0;
    return true;
  }
}
const playTurn = function (row, column) {
  if ( playerOneIsNext === true ) {
    // place an "X" into the grid[num]
    grid[row][column] = 'X';
    // render() - draw the contents of grid to the screen
    const result = winnerCheck("X");
    if (result === true) {

    }
    playerOneIsNext = false;

    //} //
    // checkForDraw()
    // playerOneIsNext = false
  } else if ( playerOneIsNext === false ){
    // place an "O" into the grid[num]
    grid[row][column] = 'O';
    // render() - draw the contents of grid to the screen
    winnerCheck("O")
    // checkForDraw()
     playerOneIsNext = true
  }
}



function boardMsg(X){
  return $("#result").html(X); //replace html on 'text'
};//end function


// $(".col").click(function (){
//   let row = $(this).parent().index(); //if player click any .col div then conditon checking who is play now
//     let column = $(this).index();
//     playTurn(row, column);
// });

$('#0').click( function () {
  if (playerOneIsNext) {
    $('#0').text("X")
  } else {
    $('#0').text("O")
  }
  playTurn(0,0)
});

$('#1').click( function () {
  if(playerOneIsNext){
    $('#1').text("X")
  }else{
    $('#1').text("0")
  }
  playTurn(0,1)
});

$('#2').click( function () {
  if(playerOneIsNext){
    $('#2').text("X")
  }else{
    $('#2').text("0")
  }
  playTurn(0,2)
});

$('#3').click( function () {
  if(playerOneIsNext){
    $('#3').text("X")
  }else{
    $('#3').text("0")
  }
  playTurn(1,0)
});

$('#4').click( function () {
  if(playerOneIsNext){
    $('#4').text("X")
  }else{
    $('#4').text("0")
  }
  playTurn(1,1)
});

$('#5').click( function () {
  if(playerOneIsNext){
    $('#5').text("X")
  }else{
    $('#5').text("0")
  }
  playTurn(1,2)
});

$('#6').click( function () {
  if(playerOneIsNext){
    $('#6').text("X")
  }else{
    $('#6').text("0")
  }
  playTurn(2,0)
});

$('#7').click( function () {
  if(playerOneIsNext){
    $('#7').text("X")
  }else{
    $('#7').text("0")
  }
  playTurn(2,1)
});

$('#8').click( function () {
  if(playerOneIsNext){
    $('#8').text("X")
  }else{
    $('#8').text("0")
  }
  playTurn(2,2)
});
