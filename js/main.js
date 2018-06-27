let player1=""
let player2=""
let turn = "";
let playerOneIsNext = true;

const grid = [
    ['','',''],
    ['','',''],
    ['','','']
  ];
let Winner ='';
let MoveCount = 0;

const winnerCheck = function(player){
  if( (grid[0][0] === grid[0][1]) && (grid[0][0] === grid[0][2]) && (grid[0][0] === player) ||
      (grid[1][0] === grid[1][1]) && (grid[1][0] === grid[1][2]) && (grid[1][0] === player) ||
      (grid[2][0] === grid[2][1]) && (grid[2][0] === grid[2][2]) && (grid[2][0] === player) ||


     (grid[0][0] === grid[1][0]) && (grid[0][0] === grid[2][0]) && (grid[0][0] === player) ||
     (grid[0][1] === grid[1][1]) && (grid[0][1] === grid[2][1]) && (grid[0][1] === player) ||
     (grid[0][2] === grid[1][2]) && (grid[0][2] === grid[2][2]) && (grid[0][2] === player) ||


    (grid[0][0] === grid[1][1]) && (grid[0][0] === grid[2][2]) && (grid[0][0] === player) ||
    (grid[0][2] === grid[1][1]) && (grid[0][2] === grid[2][0]) && (grid[0][2] === player) )
    {
      boardMsg(player + " is winner!");
      Winner = player;
      MoveCount=0;
      return true;
    } else if(MoveCount === 8 ){

     boardMsg('Draw')
     return false;
    }
};
// function make arey empty any time//
const resetF = function(){
 for (var i = 0; i < grid.length; i++) {
   let innerArray = grid[i]
     for (var j = 0; j < innerArray.length; j++) {
      innerArray[j] = ""
    }
       $('.col').text('');
    }
};

$("#reset").click(function(){
  resetF();
});

const playTurn = function (row, column) {
  if ( playerOneIsNext === true ) {    // place an "X" into the grid[num]
    grid[row][column] = 'X';
     const result = winnerCheck("X");
      if (result === true) {
    }
    playerOneIsNext = false;

    }else if ( playerOneIsNext === false ){  // playerOneIsNext = false
     grid[row][column] = 'O';               // place an "O" into the grid[num]
      winnerCheck("O")
       playerOneIsNext = true                 // checkForDraw()
   }
    MoveCount = MoveCount + 1;

};

  function boardMsg(X){
  return $("#result").html(X); //replace html on 'text'
};

    $(".col").click(function (){
    // if this square is already occupied then return and don't place a new piece here.
    if ( $(this).text() !== "" ) {
      return;
    }
     if (playerOneIsNext) {
       $(this).text("X")

     } else{
       $(this).text("O")
     }
     let row = $(this).parent().index();
     let column = $(this).index();
     playTurn(row, column);

    });


 //another version
/*
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
});*/
