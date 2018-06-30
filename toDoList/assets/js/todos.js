//Line-through when clicking on li

$("ul").on("click","li", function(){
	$(this).toggleClass("strike");
});


//Deleting completed todos when clicking trash icon

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(1000, function(){
		$(this).remove();
	});
	event.stopPropagation();
});


//Adding new todos when writing text input and pressing enter

$("input[type='text']").keypress(function(event){
	if(event.which === 13) {
		var newToDo = $(this).val();
		$("ul").append($("<li><span><i class='fas fa-trash-alt'></i></span> " + newToDo + "</li>")); 
		$(this).val("");
	};
});


//Fading input form in and out

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});

