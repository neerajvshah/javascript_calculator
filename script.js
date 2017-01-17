var screenText = "";
var state = "";
$(document).ready(function(){
	$('button').click(function(){
		var value = $(this).attr("value");
		switch(value){
			case "ac":
				state = "";
				screenText = "";
				break;
			case "ce":
				screenText = state;
				break;
			case "=":
				screenText = eval(screenText);
				state = screenText;
				break;
			default:
				
				if(!isNaN(value) && screenText === state)
					screenText = "";
				screenText += value;
		}
		console.log("ScreenText: " + screenText);
		console.log("StateText: " + state);
		$("#screen_text").text(screenText);
		$("#state").text(state);
	});
});
