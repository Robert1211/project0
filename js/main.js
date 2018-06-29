//decler base varibles//
let player1 = ""
let player2 = ""
let turn = "";
let playerOneIsNext = true;
 //create array (now I know, create 1 simply array not 3 in 1 //
const grid = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];
//declere varibles for Winer,MoveCount//
let Winner = '';
let MoveCount = 0;
//create engine(brain) program function with logic about who win or loss;//
const winnerCheck = function(player) {
  if((grid[0][0] === grid[0][1]) && (grid[0][0] === grid[0][2]) && (grid[0][0] === player) ||
    (grid[1][0] === grid[1][1]) && (grid[1][0] === grid[1][2]) && (grid[1][0] === player) ||
    (grid[2][0] === grid[2][1]) && (grid[2][0] === grid[2][2]) && (grid[2][0] === player) ||


    (grid[0][0] === grid[1][0]) && (grid[0][0] === grid[2][0]) && (grid[0][0] === player) ||
    (grid[0][1] === grid[1][1]) && (grid[0][1] === grid[2][1]) && (grid[0][1] === player) ||
    (grid[0][2] === grid[1][2]) && (grid[0][2] === grid[2][2]) && (grid[0][2] === player) ||


    (grid[0][0] === grid[1][1]) && (grid[0][0] === grid[2][2]) && (grid[0][0] === player) ||
    (grid[0][2] === grid[1][1]) && (grid[0][2] === grid[2][0]) && (grid[0][2] === player)) {
    boardMsg(player + " is winner!");
    Winner = player;
    MoveCount = 0;
    // add function for change img background with setTimeout
    //add new class gameOver name
    $('body').addClass('gameOver');
    setTimeout(function() {
      $('body').removeClass('gameOver');
    }, 1000);
    //if is true show in boardMsg whow is winner//
    return true;
    //add new conditional for DRAW
    //  MoveCount = 0;
  } else if (MoveCount === 8) {
    boardMsg('Draw');
    return false;
    //add function for firs add after remove class in change img background//
    $('body').addClass('gameOver');
    setTimeout(function() {
    $('body').removeClass('gameOver');
  }, 800);
    return false;
  }
};
 // create function for refresh browser I use  loop insaid loop, becouse I have array inside array /
  const resetF = function() {
    for (var i = 0; i < grid.length; i++) {
    let innerArray = grid[i]
    for (var j = 0; j < innerArray.length; j++) {
      innerArray[j] = ""
    }
    //clean my display after result, print in html empty string for all marks 'X' and 'Y'
    $('.col').text('');
    //print in html empty string for result in display
    $('#result').text('');
      MoveCount = 0;        //Move = 0
  }
};
    // call for function  button reset//
    $("#reset").click(function() {
    resetF();
});
//create function for playTurn ('who is next')//
  const playTurn = function(row, column) {
    // place an "X" into the grid[row][column]
    if (playerOneIsNext === true) {
    grid[row][column] = 'X';
  const result = winnerCheck("X");
    if (result === true) {}
    playerOneIsNext = false;
    // playerOneIsNext = false
  } else if (playerOneIsNext === false) {
    // place an "O" into the grid[row][column]
    grid[row][column] = 'O';
    winnerCheck("O");
    playerOneIsNext = true
  }
      MoveCount = MoveCount + 1;
      //testing play turn in console help me alot;
      console.log(MoveCount);
};
   //function for display msg in display
  function boardMsg(X) {
  return $("#result").html(X); //replace html on 'text'
};

$(".col").click(function() {
  // if this square is already occupied then return and don't place a new piece here.
    if ($(this).text() !== "") {
    return;
  }
    if (playerOneIsNext) {
    $(this).text("X")

  } else {
    $(this).text("O")
  }
  let row = $(this).parent().index() - 2; // -2 to ignore the <button> and the bg that is in the game
  let column = $(this).index();
    playTurn(row, column);
});

////////////////////////////////////////////////////////////////////////////////
//another version for function conect with HTML
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
