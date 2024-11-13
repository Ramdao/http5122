/* LAB 8-1 - FINAL COUNTDOWN!! */


//create page load listener
window.onload = start;
//create page load function
function start(){
	//create variables for required HTML elements
	var today = document.getElementById("todayData");
	var finalData = document.getElementById("finalData");
	var duedatehtml = document.getElementById("dueData");
	//create variables for now date and due date
	var dateVar = new Date();
	var duedate = new Date ("December 13, 2023, 00:00:00");
	var duedateInt = duedate.getTime();
	var timeDif = Math.ceil((duedateInt - dateVar.getTime())/86400000);
	//OUTPUT NOW DATE & DUE DATE TO HTML PAGE
	today.innerHTML= dateVar.toDateString();
	finalData.innerHTML = duedate.toDateString();
	duedatehtml.innerHTML = timeDif;
	//CONVERT TO UTC AND SUBTRACT TO GET TIME DIFFERENCE
	
	//CONVERT TIME DIFFERENCE TO WHOLE NUMBER OF DAYS
		
	//LOGIC TO CHECK IF DUE DATE HAS PASSED, AND OUPUT APPROPRIATE MESSAGE TO HTML PAGE

	if (dateVar.getTime()> duedateInt){
		document.getElementById("countMsg").innerHTML= "The Deadline for the Final Assignment has passed!"
	}
}