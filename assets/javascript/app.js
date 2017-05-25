    var questionOne = {
			answer: "one",
			choices: ["two", "three", "four"],
      questions: "which is the number",

    }
    $("#question").html(questionOne.questions)

    function shuffle(array) {
			questionOne.choices.push(questionOne.answer)
      for (var i = 0; i < questionOne.choices.length; i++) {
        index = Math.floor(Math.random() * i);
        var temp = questionOne.choices[index];
        questionOne.choices[index] = questionOne.choices[i];
        questionOne.choices[i] = temp;
      }
    }

    shuffle(questionOne.choices);
    console.log(questionOne.choices);
    for (var i = 0; i < questionOne.choices.length; i++) {
      $("#choices").append("<p>" + questionOne.choices[i] + "</p>");
    }


    $("p").on("click", function() {
			var select = $(this).text();
			if (select === questionOne.answer) {
				alert("match")
			}
			else {
				alert("wrong")
			}
		})





    // var questionTwo = {
    //     choices: ["one", "two", "three", ],
    //     questions: "which is the number",
    //     answer: "one",
    // }
    //
    // function shuffle(array) {
    //     for (var i = 0; i < questionTwo.choices.length; i++) {
    //         index = Math.floor(Math.random() * i);
    //         var temp = questionTwo.choices[index];
    //         questionTwo.choices[index] = questionTwo.choices[i];
    //         questionTwo.choices[i] = temp;
    //     }
    // }
    //
    // shuffle(questionTwo.choices);
    // console.log(questionTwo.choices);
    // for (var i = 0; i < questionTwo.choices.length; i++) {
    // 	$("#choices").append("<br>" + questionTwo.choices[i]);
    // }
    //
    // var questionThree = {
    //     choices: ["one", "two", "three", ],
    //     questions: "which is the number",
    //     answer: "one",
    // }
    //
    // function shuffle(array) {
    //     for (var i = 0; i < questionThree.choices.length; i++) {
    //         index = Math.floor(Math.random() * i);
    //         var temp = questionThree.choices[index];
    //         questionThree.choices[index] = questionThree.choices[i];
    //         questionThree.choices[i] = temp;
    //     }
    // }
    //
    // shuffle(questionThree.choices);
    // console.log(questionThree.choices);
    // for (var i = 0; i < questionThree.choices.length; i++) {
    // 	$("#choices").append("<br>" + questionThree.choices[i]);
    // }
