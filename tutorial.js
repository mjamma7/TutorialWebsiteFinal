$(document).ready(function() {
	var nextSlide = $("#slides img:first-child");
	var nextCaption;
	var nextCaptiontwo = $("#slides #directions").val();
	var nextSlideSource;
	var nextCaptiontwoSource;
	
	
	$("timer").onclick = "runSlideShow;myStartFunction;alertMe;"
	
	
function alertMe() {
var counter = 60;
var interval = setInterval(function() {
    counter--;
    // Display 'counter' wherever you want to display it.
    if (counter <= 0) {
     		resetInterval();
	}else{
    	$('#time').text(counter);
      console.log("Timer --> " + counter);
    }
}, 60000);
}
						

	
	//the function for running the tutorial
	var runSlideShow = function() {
		$("#caption").fadeOut(60000);
		$("#caption2").fadeOut(60000);
		$("#slide").fadeOut(60000,
		function () {
			if (nextSlide.next().length == 0){
				nextSlide = $("#slides img:first-child");
			}
			else{
				nextSlide = nextSlide.next();
			}
			nextSlideSource = nextSlide.attr("src");
			nextCaption = nextSlide.attr("alt");
			$("#slide").attr("src", nextSlideSource).fadeIn(60000);
			$("#caption").text(nextCaption).fadeIn(60000);
			$("#caption2").next().fadeIn(60000);
		}
		);
	};
	function myStartFunction(){
	var timer1 = setInterval(runSlideShow, 60000);
	//starting and stopping the tutorial
	$("#slide").click(function() {
		if (timer1 != null) {
			clearInterval(timer1);
			timer1 = null;
		}
		else {
			timer1 = setInterval(runSlideShow, 60000);
		}
	});
	}
	
}); // end ready