var crystal = {
    blue:
    {
        name: "Blue",
        value: 0
    },

    pink:
    {
        name: "Pink",
        value: 0
    },

    purple:
    {
        name: "Purple",
        value: 0
    },

    red:
    {
        name: "Red",
        value: 0
    }
};

var currentScore = 0;
var targetScore = 0;
var winCount = 0;
var lossCount = 0;

var getRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var startGame = function () {
    currentScore = 0;

    targetScore = getRandom(19, 120);
    crystal.blue.value = getRandom(1, 12);
    crystal.pink.value = getRandom(1, 12);
    crystal.purple.value = getRandom(1, 12);
    crystal.red.value = getRandom(1, 12);

    $("#yourScore").html(currentScore);

    $("#targetScore").html(targetScore);
};

var addValues = function(crystal) {

    currentScore = currentScore + crystal.value;

    $("#yourScore").html(currentScore);

    checkWin();
};

var checkWin = function () {

    if(currentScore > targetScore) {
        alert("You Lose!");
        lossCount++;
        $("#lossCount").html(lossCount);
        startGame();
    }
    
    if(currentScore === targetScore) {
        alert("You Won!");
        winCount++;
        $("#winCount").html(winCount);
        startGame();
    }
};

startGame();

$("#blue").click(function () {
    addValues(crystal.blue);
});

$("#pink").click(function () {
    addValues(crystal.pink);
});

$("#purple").click(function () {
    addValues(crystal.purple);
});

$("#red").click(function () {
    addValues(crystal.red);
});