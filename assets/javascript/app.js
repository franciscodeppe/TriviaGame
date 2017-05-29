var correct = 0
var incorrect = 0
var questionN = 0
var answerN = 0
var choicesN = 0
var coverN = 0
var gifN = 0
var intervalOne;
var intervalTwo;
var time;
var timeTwo;
var game = {
    answer: ["Con-Air", "Gone in 60 Seconds", "National Treasue", "Face/Off/", "Fast Times at Ridgemont High"],
    choices: [
        ["Kick-Ass", "Con-Air", "National Treasue", "Drive Angry"],
        ["Astro Boy", "Knowing", "Bangkok Dangerous", "Gone in 60 Seconds"],
        ["Next", "Grindhouse", "Rage", "National Treasue"],
        ["Lord of War", "Ghost Rider", "Face/Off/", "Kiss of Death"],
        ["Snake Eyes", "Raising Arizona", "Valley Girl", "Fast Times at Ridgemont High"],
    ],
    questions: ["Cameron Poe", "Memphis Raines", "Benjamin Gates", "Castor Troy/Sean Archer(easy)", "Literally a nameless character"],
    cover: ["https://media.giphy.com/media/LXtjHzZjC5WLu/giphy.gif",
        "https://media.giphy.com/media/boLYZgaKNOy0U/giphy.gif"
    ],
    correctGif: ["https://media.giphy.com/media/bn0zlGb4LOyo8/giphy.gif",
        "https://media.giphy.com/media/Y8mYpYWkIYDao/giphy.gif",
        "http://media.giphy.com/media/tPLEgK2pDgFgI/giphy.gif",
        "http://media.giphy.com/media/iELHADb11Yhmo/giphy.gif",
        "https://media.giphy.com/media/RrVzUOXldFe8M/giphy.gif",
    ],
    incorrectGif: ["https://media.giphy.com/media/Jmx29HtisvVV6/giphy.gif",
        "https://media.giphy.com/media/Za3FFB6aXVAnS/giphy.gif",
        "https://media.giphy.com/media/EoFeaQrOOUn3a/giphy.gif",
        "https://media.giphy.com/media/xyYouRSr7MAbS/giphy.gif",
		"https://media.giphy.com/media/10uct1aSFT7QiY/giphy.gif",
    ]
}

$("#cover").attr("src", game.cover[coverN])
$("#gifs").hide()


function timer() {
    time = 15
    $("#time_remaining").html("<h2>" + time + "</h2>")
    intervalOne = setInterval(count, 1000);
}

function count() {
    time--;
    $("#time_remaining").html("<h2>" + time + "</h2>");
    if (time < 0) {
        incorrect++
        $("#gifs").attr("src", game.incorrectGif[gifN])
        gifN++
        reset()
        timerTwo()
    }
}

function timerTwo() {
	timeTwo = 3;
	$("#gifs").show()
	hideAll()
    intervalTwo = setInterval(countTwo, 500);
}
function countTwo() {
    timeTwo--
    if (timeTwo < 0) {
		stop();
		reset()
		showAll()
		value()
		updateGame()
        $("#gifs").hide()


    }
}
function reset() {
	clearInterval(intervalOne)
}
function stop() {
	clearInterval(intervalTwo)
}

function hideAll() {
    $("#time_remaining").hide()
    $("#question").hide()
    $("#choices").hide()
}
function showAll() {
	$("#time_remaining").show()
	$("#question").show()
	$("#choices").show()
}


$("#start-button").on('click', function() {
    runGame()
    $("#start-button").hide()
    $("#cover").hide()

})

function runGame() {

    $("#question").html("<h2>" + game.questions[questionN] + "</h2>")


    for (var i = 0; i < game.choices[choicesN].length; i++) {
        $("#choices").append("<p>" + game.choices[[choicesN]][i] + "</p>");
    }

    function shuffle() {
        for (var i = 0; i < game.choices[questionN].length; i++) {
            index = Math.floor(Math.random() * i);
            var temp = game.choices[choicesN][index];
            game.choices[choicesN][index] = game.choices[choicesN][i];
            game.choices[choicesN][i] = temp;
        }
    }
	shuffle()
	timer()
    gameClick()
}


function updateGame() {

    if (questionN < 5) {
        $("#choices").text("")
        runGame()
    } else {
        coverN++
        $("#cover").attr("src", game.cover[coverN])
		$("#cover").show()
        $("#gameboard").html(
            "<h2>Correct: " + correct + "</h2>" + "<br>" +
            "<h2>Incorrect: " + incorrect + "</h2>" + "<br>" +
            "<button>" + "Play Again!" + "</button"
        )
		hideAll()
        $("button").on("click", function() {
			console.log("done")
			showAll()
			$("#gameboard").html("")
			correct = 0
            incorrect = 0
            questionN = 0
            answerN = 0
            choicesN = 0
            coverN = 0
			gifN = 0
		    $("#cover").hide()
			runGame()
			updateGame()


        });
    }
}

function value() {
    questionN++
    answerN++
    choicesN++
}

function gameClick() {

    $("p").on("click", function() {
        var select = $(this).text();
        if ((game.answer[answerN]).indexOf(select) > -1) {
            correct++
			$("#gifs").attr("src", game.correctGif[gifN])
			gifN++
            timerTwo()
        } else {
            incorrect++
            $("#gifs").attr("src", game.incorrectGif[gifN])
			gifN++
            timerTwo()
        }
    })
}
