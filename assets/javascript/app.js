var correct = 0
var incorrect = 0
var questionN = 0
var answerN = 0
var choicesN = 0
var game = {
  answer: ["one", "eight", "twelve", "thirteen", "nineteen"],
  choices: [
    ["two", "three", "four", "one"],
    ["five", "six", "seven", "eight"],
    ["nine", "ten", "eleven", "twelve"],
    ["fourteen", "fifteen", "sixteen", "thirteen"],
    ["seventeen", "eighteen", "twenty", "nineteen"],
  ],
  questions: ["which is the number", "which is the second number", "which is the third number", "which is the fourth number?", "which is the fifth number?"],
}

function startGame() {
  $("#question").html("<h2>" + game.questions[questionN] + "</h2>")
  gameClick()
}
startGame()


function updateGame() {
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
}
updateGame()

function gameClick() {
  if (questionN !== 5) {
    $("p").on("click", function() {
      var select = $(this).text();

      if ((game.answer[answerN]).indexOf(select) > -1) {
        correct++
        questionN++
        answerN++
        choicesN++
        $("#choices").text("")
        startGame()
        updateGame()
        gameClick()
      } else {
        incorrect++
        questionN++
        answerN++
        choicesN++
        $("#choices").text("")
        startGame()
        updateGame()
        gameClick()
      }
    })
  } else {
    $("#gameboard").html(
      "<h2>Correct: " + correct + "</h2>" + "<br>" +
      "<h2>Incorrect: " + incorrect + "</h2>" + "<br>" +
			"<button>" + "Play Again!" + "</button"
    )
		$("#question").text("")
		$("button").on("click", function() {
			$("#gameboard").html("")
			correct = 0
			incorrect = 0
			questionN = 0
			answerN = 0
			choicesN = 0
			startGame()
			updateGame()
			gameClick()
		})
  }
}
gameClick()
