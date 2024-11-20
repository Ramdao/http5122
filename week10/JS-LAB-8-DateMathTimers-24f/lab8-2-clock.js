/* LAB 8.2 - STOP TIME */


//create page load listener
window.onload = start;
//create page load function
 function start(){

 
	//create variables for required HTML elements
	var hrshtml = document.getElementById("hoursOut");
	var minhtml = document.getElementById("minsOut");
	var sechtml = document.getElementById("secsOut");

	//create time variable so all functions have access to it
	var timmer 
	
	//CREATE FUNCTION THAT DISPLAYS THE TIME
	function displaytime(){
		var dateVar = new Date();
		var hrs = dateVar.getHours();
		var min = dateVar.getMinutes();
		var sec = dateVar.getSeconds();
		hrshtml.innerHTML = hrs;
		minhtml. innerHTML = ":"+ min;
		
		if (sec<10){
			sechtml.innerHTML = ":" + "0"+ sec;
		} else{
			sechtml.innerHTML = ":"+ sec;
		}
	}	
	
	function starttimer(){
		timmer = setInterval(displaytime,1000);
	}
	function stoptimmer (){
		clearInterval(timmer);
	}
	
	//CREATE FUNCTION TO START THE CLOCK.
	document.getElementById("btnStart").onclick= starttimer;
	document.getElementById("btnStop").onclick = stoptimmer;
	//CREATE FUNCTION TO STOP THE CLOCK
	
	
	// SET EVENT LISTENERS

}