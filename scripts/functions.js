$(document).ready(function () {
    $("#myController").jFlow({
        controller: ".jFlowControl",
        slideWrapper: "#jFlowSlider",
        slides: "#mySlides",
        selectedWrapper: "jFlowSelected",
        width: "960px",
        height: "350px",
        duration: 400,
        prev: ".jFlowPrev",
        next: ".jFlowNext",
        auto: true
    });

    $().UItoTop({easingType: 'easeOutQuart'});
    jQuery("a[data-gal^='prettyPhoto']").prettyPhoto({social_tools: false})
});

jQuery(function () {
    jQuery('ul.nav').superfish();
});

$('#loginBtn').click(function(){
	if($('#lightBoxOverlay')){
		$('#lightBoxOverlay').trigger('close');
	}	
	var loginForm =  '<div class="overlayHeader">LOGIN</div>'+
				   	'<div  class="form">'+
				'		<form id="contactform"> '+
				'			<p class="contact"><label for="name">First Name</label></p> '+
				'			<input id="Fname" name="name" placeholder="First name" required="" tabindex="1" type="text"> '+
			
				'			<p class="contact"><label for="name">Last Name</label></p> '+
				'			<input id="Lname" name="name" placeholder="Last name" required="" tabindex="1" type="text"> <br><br>'+
							 
							
				'		<input class="buttom" name="submit" id="submit" tabindex="5" value="LOGIN" type="submit"> 	 '+
				'		<a href="#" onclick="openForgetPassword();" id="forgetPassword" name="submit" class="signupLink" tabindex="5">Forget Password</a> 	 |'+
				'		<a href="#" onclick="openSignUp();" id="notAMemberYet" name="submit" class="signupLink" tabindex="5">Not a member yet!</a> 	 '+
			
				'	</form> '+
				'</div>';
	$('#lightBoxOverlay').html(loginForm);
	$('#lightBoxOverlay').lightbox_me();
});
$('#signupBtn').click(function(){
	if($('#lightBoxOverlay')){
		$('#lightBoxOverlay').trigger('close');
	}
	var loginForm ='<div class="overlayHeader">SIGN UP</div>'+
					  '<div  class="form">'+
				'		<form id="contactform"> '+
				'			<p class="contact"><label for="name">Name</label></p> '+
				'			<input id="Fname" name="name" placeholder="Name" required="" tabindex="1" type="text"> '+				 
							
				'			<p class="contact"><label for="email">Email</label></p> '+
				'			<input id="email" name="email" placeholder="example@domain.com" required="" type="email"> '+
							
				'			<p class="contact"><label for="password">Create a password</label></p> '+
				'			<input type="password" id="password" name="password" required=""> '+
							
				'			<p class="contact"><label for="repassword">Confirm your password</label></p> '+
				'			<input type="password" id="repassword" name="repassword" required=""> '+
							
				'		<p class="contact"><label for="phone">Mobile phone</label></p> '+
				'		<input id="phone" name="phone" placeholder="phone number" required="" type="text"> <br><br>'+
				'		<input class="buttom" name="submit" id="submit" tabindex="5" value="Sign me up!" type="submit"> 	 '+
				'	</form> '+
				'</div>';
	$('#lightBoxOverlay').html(loginForm);
	$('#lightBoxOverlay').lightbox_me();
});

function openSignUp(){
	$('#signupBtn').click();	
}
function openLoginForm(){
	$('#loginBtn').click();	
}
function openForgetPassword(){
	if($('#lightBoxOverlay')){
		$('#lightBoxOverlay').trigger('close');
	}	
	var loginForm ='<div class="overlayHeader">Forget Password</div>'+
					  '<div  class="form">'+
				'		<form id="contactform"> '+
				'			<p class="contact"><label for="name">First Name</label></p> '+
				'			<input id="Fname" name="name" placeholder="First name" required="" tabindex="1" type="text"> '+
				'			<p class="contact"><label for="name">Email</label></p> '+
				'			<input id="Fname" name="name" placeholder="Email" required="" tabindex="1" type="text"> <br><br>'+				 
				'			<input class="buttom" name="submit" id="submit" tabindex="5" value="Submit" type="submit"> 	 '+
				'			<input onclick="openLoginForm();" class="buttom" name="submit" id="backBtn" tabindex="6" value="Back" type="button"> 	 '+
				'	</form> '+
				'</div>';	
				$('#lightBoxOverlay').html(loginForm);
	$('#lightBoxOverlay').lightbox_me();
}