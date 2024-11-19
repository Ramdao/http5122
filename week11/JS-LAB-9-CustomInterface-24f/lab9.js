
window.onload = function() {
    //check for stored values
        //retrieve stored values
        var storedName = localStorage.getItem("welcome");
        var storedColour = localStorage.getItem("colour");
        //change welcome text to stored name
        var welcomText = document.getElementById("newMsgBox");
        
        if (storedName === null || storedName === "") {
            welcomText.innerHTML = "Welcome!";
        } else {
            welcomText.innerHTML = "Welcome, " + storedName + "!";
        }
        //change BG colour to stored colour
        
        if (storedColour === null || storedColour === "") {
            document.body.style.background ="#c0c0c0";
        } else {
            document.body.style.background = storedColour;
        }
        //  document.body.style.background = 
    
		
//#####============== DO THIS PART FIRST! ===============		
    //get the form and set submit listener
	document.forms.namedItem("infoForm").onsubmit = getTextFile;
    function getTextFile(){   
    
	//onsubmit Function


        //get values from form
        var userName = document.getElementById("inName").value;
        var changeColour = document.getElementById("inColour").value;
        
		//console.log the form values
        console.log(userName);
        console.log(changeColour);
        
        //store values
        localStorage.setItem("welcome", userName);
        localStorage.setItem("colour", changeColour);
        //Delete
       
        
}        
document.getElementById("btnDel").addEventListener("click", deleteData);
function deleteData (){
localStorage.removeItem("welcome");
localStorage.removeItem("colour");
window.location.reload();
}
}