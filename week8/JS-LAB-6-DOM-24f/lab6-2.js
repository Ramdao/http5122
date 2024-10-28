//#### LAB 6 - DOM MANIPULATION ####
//PART 2: MYSTERY BOX

//LISTEN FOR load EVENT
window.onload = start;

//'WRAPPER' FUNCTION FOR DOM LOGIC
function start(){

	//GET DOM ELEMENTS WE'LL NEED
	var mysterybox = document.getElementById("mysteryBox");
	var buttonBox = document.getElementById("buttonBox");
	//====CREATE THE FUNCTIONS WE'LL NEED====
	//FUNCTION TO ASK USER
	var asked;
	mysterybox.onmouseover = askme;
	function askme(){
		asked = confirm("Want to see something?");
		if (asked===true){
			Change();
		}
	}
	//FUNCTION TO CHANGE buttonBox
	function Change(){
		mysterybox.style.display="none";
	 	buttonBox.style.display="block";
	}
	
	buttonBox.onclick = changebutton;
	function changebutton(){
		buttonBox.style.width = "600px";
		buttonBox.style.background = "Orange";
		buttonBox.innerHTML="<h2>SURPRISE!!</h2>";
	}

	//SETUP LISTENERS


}//END onload FUNCTION