//######## LAB 2-2 LOGIN ########
//1. LINK THIS JS FILE TO THE HTML FILE
//alert("hey 2.2");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE

//====VARIABLES===============
//2. CREATE NECESSARY VARIABLES
		// Correct user name
		// Correct password
		// user name input
		// password input
var username = "dart";
var password = "vader";
var userinput;
var userpassword;


//====LOGIC===================
//3. CREATE POPUP BOX FOR USERNAME
userinput= prompt("What is your username");
//4. OUTPUT PROVIDED USERNAME TO JS CONSOLE
console.log(userinput);
//5. CREATE POPUP BOX FOR PASSWORD
userpassword= prompt("type your password");
//6. OUTPUT PROVIDED PASSWORD TO JS CONSOLE
console.log(userpassword)
//7. CHECK IF PROVIDED USERNAME AND PROVIDED PASSWORD MATCH THE STORED USERNAME/PASSWORD
if(username=== userinput && password===userpassword){
	alert("Welcome back"+ " "+userinput);
	console.log("Login successful");
} else{
	alert("Invalid username/password");
	console.log("Login Fail")
}
//8. IF THEY MATCH, POPUP SUCCESS MESSAGE AND OUTPUT TO CONSOLE



//9. IF THEY DON'T MATCH, POPUP INVALID MESSAGE & OUTPUT TO CONSOLE