// global constants 
var clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

// global variables 
var pattern = [2, 2, 4, 3, 2, 1, 2, 4]; 
var progress = 0; 
var gamePlaying = false; 
var tonePlaying = false;
var volume = 0.5; // btwn 0.0 and 1.0
var guessCounter = 0; 
var mistakeCount = 0; 

var countDown = 0;

var isTimer = false; 
var endTimer = true; 

function startGame(){
  //initializing game variables 
  progress = 0; 
  guessCounter = 0; 
  mistakeCount = 0;
  gamePlaying = true; 
  randPattern();
  
  //swap start and stop buttons 
  document.getElementById("startBtn").classList.add("hidden");  
  document.getElementById("stopBtn").classList.remove("hidden"); 
  playClueSequence();
}

function stopGame(){
  gamePlaying = false; 
  progress = 0; 
  guessCounter = 0; 
  mistakeCount = 0;
  clueHoldTime = 1000;
  document.getElementById("countDown").innerHTML = ""; 
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 500,
  6: 570
}

// const myAudio = { 
//   1: "https://cdn.glitch.global/625ae385-5d9e-44f8-b2c4-2a9aa40d4c7f/Dog%20Howling%20At%20Moon-SoundBible.com-1369876823.mp3?v=1647624295911",
//   2: "",
//   3: "",
//   4: "",
//   5: "",
//   6: ""
// }

// my own audio for the buttons 

function playMyAudio(btn){
      // short audio clips so looping them 
      document.getElementById("myAudio"+btn).loop = true; 
      document.getElementById("myAudio"+btn).play();
     }

function stopMyAudio(btn){
       document.getElementById("myAudio"+btn).pause();
      // https://stackoverflow.com/questions/14834520/html5-audio-stop-function
      // this way sound starts from beginning when clicked 
      document.getElementById("myAudio"+btn).currentTime = 0;
     }

function playAudioTest(btn, len){
  playMyAudio(btn);
  setTimeout(function(){
    stopMyAudio(btn)
  },len)
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

//lighting and clearing 

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

// playing a clue 

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playAudioTest(btn, clueHoldTime);
    //playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0; 
  //context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  // making each turn time shorter 
  clueHoldTime-=100; 
  countDown = clueHoldTime; 
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game Over. You won!");
}

function guess(btn){  
  console.log("user guessed: " + btn);
  
  // check if game started 
  if(!gamePlaying){
    return; 
  }
  
  // checking if the usr guess is wrong 
  if(btn != pattern[guessCounter]){
    // added a 3 strike system & replays clues if wrong
    
    
    mistakeCount++; 
    if (mistakeCount == 4){
      endTimer = true; 
      loseGame();
    } else {
      alert("Mistake! Strike " + mistakeCount);
      clueHoldTime += 100; 
      playClueSequence();
    }
  } else {
    // adding an extra guess check condition 
    console.log("guess counter: " + guessCounter);
    
    // have correct pattern so far
    if (guessCounter == progress){
        // if the pattern is done then won
        if (progress == pattern.length-1){
          winGame();
          
        // progressing through pattern 
        } else {
          guessCounter = 0; 
          progress += 1; 
          // checking progress 
          console.log("current progress: " + progress);
          playClueSequence();
        }
    } else { 
      // adding to the guess if pattern != guessCounter 
      guessCounter += 1;
    } 
  }
}

// optional features 

// random pattern! 
function randPattern(){
  for (let i = 0; i < 8; i++){
    // generates random int from 0-4
    pattern[i] = Math.ceil(Math.random() * 6);
  }
}

// timer display 
// referenced w3schools 
setInterval(function () {
  
  if (gamePlaying == true){
    countDown -= 1; 
    
    if (countDown >= 0){
      document.getElementById("countDown").innerHTML = countDown; 
    } else {
      document.getElementById("countDown").innerHTML = "Time's up!"; 
      loseGame();
    }
  }
}, 1000);

