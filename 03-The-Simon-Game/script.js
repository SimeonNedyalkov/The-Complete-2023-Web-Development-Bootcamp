let buttonColours = ["red", "blue", "green", "yellow"]
let gamePattern = []
let userClickedPattern = []
let game_on = false
let level = 0

// On click 
$(".btn").click(function() {

    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
  
    playSound(userChosenColour);
  
    animatePress(userChosenColour);

    
    $(`#level-title`).text(`Level ${level}`)
    checkAnswer(userClickedPattern.length - 1)
  });

// gets a random number for your next sequence
function nextSequence(){
    userClickedPattern = []
    let randomNumber = Math.floor(Math.random()*4)
    let randomChosenColour  = buttonColours[randomNumber]
    gamePattern.push(randomChosenColour)
    $(`#${randomChosenColour}`).fadeOut(50).fadeIn(50)
    playSound(randomChosenColour)
    level += 1
    
}
// sound function
function playSound(randomChosenColour){
    let audio = new Audio(`sounds/${randomChosenColour}.mp3`);
    audio.play();
}
// animates the buttons
function animatePress(currentColor) {

    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
  }

// detect keyboard press
$(document).keydown(function(){
    if(game_on == false){
        $(`#level-title`).text(`Level ${level}`)
        nextSequence()
        game_on = true
    } 
})
function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel] == gamePattern[currentLevel]){
        if (userClickedPattern.length === gamePattern.length){
            console.log('success')
            console.log(userClickedPattern)
            console.log(gamePattern)
            //5. Call nextSequence() after a 1000 millisecond delay.
            setTimeout(function () {
              nextSequence();
            }, 1000);
            
        
        
    }
    
}else{
    let audio = new Audio(`sounds/wrong.mp3`);
    audio.play();
    startOver()
    $(`#level-title`).text( "Game Over, Press Any Key to Restart")
    $('body').addClass('game-over')
    setTimeout(function () {
        $('body').removeClass('game-over')
      }, 200);
    
}}
function startOver(){
    level = 0
    gamePattern = []
    game_on = false
}
