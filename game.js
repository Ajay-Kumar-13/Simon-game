started = false;
var level = 0;
var sound = ["green","red","yellow","blue"];
randomButton = [];

$(document).keypress(function()
{
    if (!started)
    {
        $("h1").text("Level "+(level+1));
        started = true;
        nextSequence();
    }
});

function nextSequence()
{
    index = Math.floor(Math.random() * 4);
    var audio = new Audio("sounds/"+sound[index]+".mp3");
    audio.play();
    buttonAnimation("#"+sound[index]);
    randomButton.push(sound[index]);
}

$(".btn").click(function() 
{
    var userClicked = $(this).attr("id");
    var color = new Audio("sounds/"+userClicked+".mp3");
    color.play();
    buttonAnimation("#"+userClicked)
    if (userClicked == randomButton[level])
    {
        level++;
        $("h1").text("Level "+(level+1));
        nextSequence();
    }
    else
    {
        var gameover = new Audio("sounds/wrong.mp3");
        gameover.play()
        $("h1").text("GameOver! Press any key to restart");
        $("body").addClass("game-over");
        setTimeout(function()
        {
            $("body").removeClass("game-over"),200;
        });
       
        level = 0;
        started = false;
    }

})



function buttonAnimation(color)
{
    $(color).addClass('pressed')
    setTimeout(function()
    {
        $(color).removeClass("pressed"),100
    });
};

