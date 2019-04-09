


//whats left ?\
//Strict mode 
//on /off switch
//replay on mistake


let beep = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
let beep2 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
let beep3 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
let beep4 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
let error = new Audio('http://66.90.93.122/ost/contra-arcade/uhmdreoq/02_Coin.mp3');


//start of game sequence
$(`#on`).on("click", function (){
  $(`#counter`).empty();
  $(`#counter`).append(`<p>00</p>`)
  recordSquence = [];
  playersInput = [];
  return randomColour();
});

$(`#off`).on("click", function (){
  recordSquence = [];
  playersInput = [];
  $(`#counter`).empty();
  $(`#counter`).append(`<p>00</p>`)
});


//array to hold the flash squence
let recordSquence = [];
//array to hold a copy of recordSquence array
let compareSquence = [];
// variable to hold the length of the recordSquence array
let lengthOfrecordSquence;
//--- Player Input section
let playersInput = [];
// copy of playerInput
let copyOfplayersInput = [];

/* Function to select a random fadeIn function which is unshifted to recordSquence array  */
function randomColour (){
  var random = Math.floor(Math.random() * 4); /* Variable to create a random integer between 0 -3 */
  const picker = [redFadeIn,yellowFadeIn,blueFadeIn,greenFadeIn]; /* array to hold the fadeIn functions*/
  recordSquence.unshift(picker[random]);//unshift choosen function to array so the record player function can keep track of the squence.
  compareSquence = recordSquence.slice(0);//copy of the above array for comparison in the playerSturn function.
  lengthOfrecordSquence = recordSquence.length; // variable to keep track of record length so the playersturn function can see if the player input has the same length.
  $(`#counter`).empty();
  $(`#counter`).append(`<p>${recordSquence.length}</p>`)
  return recordPlayer();
}

function recordPlayer () {
console.log(lengthOfrecordSquence);
  if (lengthOfrecordSquence === 0){
    return; // 
  }else {
  return recordSquence[lengthOfrecordSquence - 1]();
  }
} 

//------------------- Function that is activated by the players input when clicking the html divs
function playerTurn (){ 
//statement to check if the array's are of the same length and the last player input matches the last indexed squence. if both return true then the random colour function is pulled. 
  if (playersInput.length === recordSquence.length && copyOfplayersInput[copyOfplayersInput.length -1] === compareSquence[compareSquence.length -1]){
    //clears the players input when before starting squence again.
    playersInput = []; 
    //clears the copy of players input when before starting squence again.
    copyOfplayersInput = [];
    //replays squence
    return randomColour();
    //statement to check if the player selected div matchs the last index of the game squence.
  }else if (copyOfplayersInput[copyOfplayersInput.length -1] === compareSquence[compareSquence.length - 1]){
  //if true the last index of the compare squence is removed and the only* value in compareSquence is removed.
    copyOfplayersInput.pop();
    compareSquence.pop();
    return;
  } else if(copyOfplayersInput[copyOfplayersInput.length -1] != compareSquence[compareSquence.length - 1]) {
    console.log('error');
    error.load(); 
    error.play();
    playersInput.pop();
  copyOfplayersInput.pop();
  return;
  }
  return;
}

$(`#yellow`).click(function (){
  $(`#error`).empty();
  $("#yellow").animate({backgroundColor: "#fff177" });
  $("#yellow").animate({backgroundColor: "yellow" });
  beep.load();
  beep.play();
  playersInput.unshift(yellowFadeIn);
  copyOfplayersInput.unshift(yellowFadeIn);
  return playerTurn();
});

$(`#blue`).click(function (){
  $(`#error`).empty();;
  $("#blue").animate({backgroundColor: "#77b1ff" });
  $("#blue").animate({backgroundColor: "blue" });
  beep2.load();
  beep2.play();
  playersInput.unshift(blueFadeIn);
  copyOfplayersInput.unshift(blueFadeIn);
  return playerTurn();
});

$(`#red`).click(function (){
  $(`#error`).empty();
  $("#red").animate({backgroundColor: "#ff7777" });
  $("#red").animate({backgroundColor: "red" });
  beep3.load();
  beep3.play();
  playersInput.unshift(redFadeIn);
  copyOfplayersInput.unshift(redFadeIn);
  return playerTurn();
});

$(`#green`).click(function (){
  $(`#error`).empty();;
  $("#green").animate({backgroundColor: "#7bff77" });
  $("#green").animate({backgroundColor: "green" });
  beep4.load();
  beep4.play();
  playersInput.unshift(greenFadeIn);
  copyOfplayersInput.unshift(greenFadeIn);
  return playerTurn();
  
});


/*  Function set to fade in CSS colour and fade back to original colour against the html id's */


//-----------red
function redFadeIn(){
    $("#red").animate({backgroundColor: "#ff7777" }, 1000, function(){ beep3.load(); beep3.play();  return redFadeOut();});
}

function redFadeOut(){
    $("#red").animate({backgroundColor: "red" }, 1000, function(){ lengthOfrecordSquence--; return recordPlayer();});
}
//---------red


//-----yellow
function yellowFadeIn(){
    $("#yellow").animate({backgroundColor: "#fff177" }, 1000, function(){ beep.load(); beep.play(); return yellowFadeOut();});
}

function yellowFadeOut(){
    $("#yellow").animate({backgroundColor: "yellow" }, 1000 ,  function(){ lengthOfrecordSquence--;  return recordPlayer();});
}
//------yellow



//-------blue
function blueFadeIn(){
    $("#blue").animate({backgroundColor: "#77b1ff" }, 1000, function(){ beep2.load(); beep2.play(); return blueFadeOut();});
}

function blueFadeOut(){
    $("#blue").animate({backgroundColor: "blue" }, 1000,  function(){ lengthOfrecordSquence--;  return recordPlayer();});
}
//--------blue



//----------green
function greenFadeIn(){
    $("#green").animate({backgroundColor: "#7bff77" }, 1000, function(){ beep4.load(); beep4.play(); return greenFadeOut();});
}

function greenFadeOut(){
    $("#green").animate({backgroundColor: "green" }, 1000,  function(){ lengthOfrecordSquence--;  return recordPlayer();});
}
//--------green

