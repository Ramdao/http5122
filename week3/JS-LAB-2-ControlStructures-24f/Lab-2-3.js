//######## LAB 2-3 EMAIL SIGNUP ########
//alert("hey 2.3");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE
//==== VARIABLES =========
var valid;
var email;

//==== LOGIC =============
valid = confirm("Would you like to join our mailing list?");
if(valid=== true){
    email= prompt("Your email","me@example.com");
    if(email==="" || email==="me@example.com"|| email===null){
        alert("Thank you, but your email was not valid");
    } else {
        alert("Thank you, our next newsletter will be sent to"+" "+ email)
    }
} else{
    alert("Thank you, we will not bother you again")
}

