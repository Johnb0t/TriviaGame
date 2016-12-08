//declare global variables
	var correct = 0;
	var incorrect = 0;
	var triviaTimer = 120;
	var counter;

	function stop() {
		clearInterval(counter)
	}
	//hide/display html on click
	$(document).ready(function(){
		$('.questions').hide();
		$('#submit').hide();		
		$('#results').hide();
		$('#timeOut').hide();		
	});
	$('#start').on('click', function() {
		$('.questions').show();
		$('#submit').show();
		$('#start').hide();

		//create counter to run on click of start button
		function run() {
	  		counter = setInterval(decrement, 1000);	
		}
		
		run();
		//create decrement function and inject to html
		function decrement() {

     	 	//Decrease number by one.
      		triviaTimer--;
      		//Show the number in the #show-number tag.
      		$("#timer").html("<p>" + triviaTimer + " seconds remaining!!</p>");
      		//Once number hits zero...
      		if (triviaTimer === 0) {
        	//...run the stop function.
        	stop();
        	$('.questions').hide();
        	$('#timeOut').show().append("<h2>Out of Time!</h2>");
      		}
		}
	});
	//On click for submit button
	$('#submit').on('click', function() {
		stop();
		$('#submit').hide();
		$('.questions').hide();
		$('#results').show();
		$('#timeOut').hide()
		//Create loop to go through radio buttons and get values
		for (var i = 1; i <= 8; i++) {
			if ($('input[name=question' + i + ']:checked').val() == "true") {
				correct++;
			} else {
				incorrect++
			}
		};
		//Inject the results of the quiz
		var resultsHtml =  "<p>Correct: " + correct + " out of 8</p>" +
						   "<br>" + "<p>Incorrect: " + incorrect + " out of 8</p>";
						   
		$('#results').append(resultsHtml);
		if (correct < 7) {
			$('#results').append("<br><h2>You need to study!</h2>")
		}
		if (correct >= 7) {
			$('#results').append("<br><h2>Great Job!</h2>")
		}
	});