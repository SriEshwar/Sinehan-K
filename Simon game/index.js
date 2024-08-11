
let level=0;
let started=false;
let buttonColours = ["red", "blue", "green", "yellow"];
let userClickedPattern=[];
let gamePattern = [];
$(document).keypress(function(){
    if(!started){
        $("h1").text("Level"+level);
        nextSequence();
        started=true;
    }
})
$(".btn").click(function (){
    let userChosenColour=$(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
})
function nextSequence() {
    userClickedPattern=[];

    level=level+1;
    $("h1").text(`level ${level}`);
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

  
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
  
}
function animatePress(currentColor) {

    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
  }
  
function playSound(name)
{
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function checkAnswer(currentLevel)
{
    if(gamePattern[currentLevel]===userClickedPattern[currentLevel])
    {
        console.log('success');
        if(gamePattern.length===userClickedPattern.length)
        {
            setTimeout(function(){
                nextSequence();
            },1000)
        }
    }
    else{
        let audio = new Audio("sounds/wrong"  + ".mp3");
        audio.play();
        $("body").addClass("game-over");
        setTimeout(function(){$("body").removeClass("game-over")},200)
        $("h1").text("Game Over Press Any Key to Restart");
        startOver();
    }
}
function startOver()
{
    level=0;
    started=false;
    gamePattern=[];
}