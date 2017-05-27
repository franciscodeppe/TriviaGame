var correct = 0
var incorrect = 0
var questionN = 0
var answerN = 0
var choicesN = 0
var coverN = 0
var correctGif = 0
var incorrectGif = 0
var intervalID;
var time;
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
    "http://media.giphy.com/media/iELHADb11Yhmo/giphy.gif",
    "http://media.giphy.com/media/tPLEgK2pDgFgI/giphy.gif",
    "https://media.giphy.com/media/3YGKFfw611fZS/giphy.gif",
    "https://media.giphy.com/media/RrVzUOXldFe8M/giphy.gif",
  ],
  incorrectGif: ["https://media.giphy.com/media/RF0qU7VHLyPRu/giphy.gif",
    "https://media.giphy.com/media/Y8mYpYWkIYDao/giphy.gif",
    "https://giphy.com/gifs/blue-nicolas-bolts-Za3FFB6aXVAnS",
    "https://media.giphy.com/media/EoFeaQrOOUn3a/giphy.gif",
    "https://media.giphy.com/media/xyYouRSr7MAbS/giphy.gif"
  ],
}


function timer() {
	time = 16
  intervalId = setInterval(count, 1000);
}

function count() {
  time--;
  $("#time_remaining").html("<h2>" + time + "</h2>");
	if (time === 0) {
		incorrect++
		incorrectGif++
		value()
		reset()
		updateGame()
		inBetween()
	}
function reset() {
	clearInterval(intervalId)
}
function inBetween() {

}

}
$("img").attr("src", game.cover[coverN])
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
	timer()
  gameClick()
}


function updateGame() {

  if (questionN < 5) {
    $("#choices").text("")
    runGame()
  } else {
    coverN++
    $("img").attr("src", game.cover[coverN])

    $("#gameboard").html(
      "<h2>Correct: " + correct + "</h2>" + "<br>" +
      "<h2>Incorrect: " + incorrect + "</h2>" + "<br>" +
      "<button>" + "Play Again!" + "</button"
    )
    $("#question").text("")
    $("#choices").text("")
    $("#cover").show()
    $("button").on("click", function() {
      $("#gameboard").html("")
      correct = 0
      incorrect = 0
      questionN = 0
      answerN = 0
      choicesN = 0
      coverN = 0
      runGame()
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
        correctGif++
        time = 16
        value()
        updateGame()
      } else {
        incorrect++
        incorrectGif++
        value()
        updateGame()
      }
    })
}
