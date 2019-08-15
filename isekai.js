$(document).ready(function(){
	$("form[name='isekai']").bind("Submit", function(e){
		e.preventDefault();
		var Username = $("input[name='Username']").val();
		var Password = $("input[name='Password']").val();

		if(Username == ""){
			alert("WE NEED YOUR Username!");
		}
		else if(Password == ""){
			alert("Password is required!");
		}
		else{
			$(this).submit();

		}
	});
});