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
		$('#instructions').hide();

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
      		$("#timer").html("<h2>" + triviaTimer + " seconds remaining!!</h2>");
      		//Change font color based on time
      		if (triviaTimer <= 30) {
      			$('#timer').css('color', 'yellow');
      		}; 
      		if (triviaTimer <= 10) {
      			$('#timer').css('color', 'red');
      		};
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
		$('#timeOut').hide();
		var checkAns = $('input[name=question1]:checked').val()
		//Create loop to go through radio buttons and get values
		console.log(checkAns);
		for (var i = 1; i <= 8; i++) {
			if ($('input[name=question' + i + ']:checked').val() == "true") {
				correct++;
			} else {
				incorrect++
			}
		};
		//Inject the results of the quiz
		var percentage = correct / 8 * 100;
		var resultsHtml = "<p>" + percentage + " %</p>" + "<p>Correct: " + correct + " out of 8</p>"
						  + "<p>Incorrect: " + incorrect + " out of 8</p>";
						   
		$('#results').append(resultsHtml);
		if (correct < 7) {
			$('#results').append("<br><h2>You need to study!</h2><br>" + '<br><img id="resultImage" src="assets/images/tryagain.png">')
		}
		if (correct >= 7) {
			$('#results').append("<br><h2>Great Job!</h2><br>" + '<br><img id="resultImage" src="assets/images/good.png">')
		}
	});