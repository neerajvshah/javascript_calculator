var screenText = "";
$(document).ready(function(){
	$('button').click(function(){
		var value = $(this).attr("value");
		switch(value){
			case "ac":
				break;
			case "ce":
				break;
			case "=":
				screenText = eval(screenText);
				break;
			default:
				screenText += value;
		}
		$("#screen_text").text(screenText);
	});
});
