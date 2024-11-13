/*
check for valid name
check for valid id
check for valid dropdown
check for valid radio button

*/

window.onload = domReady; // one load start function

function domReady(){

    var formHandle = document.forms.ixdForm;
    formHandle.onsubmit = processform;

}
// to process data from form
function processform(){
// setting the variables
    var formHandle = document.forms.ixdForm;
    var firstName = formHandle.f__fName;
    var lastName = formHandle.f__lName;
    var humberID = formHandle.f__id;
    var dropdown = formHandle.f__program;
    var project =formHandle.f__project;
    var ischeked = false;
    var humberIDPattern = /^[Nn]\d{8}$/;

    for (var i =0; i<project.length; i++){
        if (project[i].checked===true){
            ischeked=true;
        }
    }

// Part 1
/*
    document.getElementById("welcome").style.display="none";
    document.getElementById("form").style.display="none";
    document.getElementById("result").style.display="block";

    document.getElementById("result__Fname").innerHTML= firstName.value;
    document.getElementById("result__Lname").innerHTML= lastName.value;
    document.getElementById("result__id").innerHTML= humberID.value;
    document.getElementById("result__program").innerHTML= dropdown[dropdown.selectedIndex].text;
    document.getElementById("result__project").innerHTML= project.value;

 */
// checking the conditions to see if given input is valid
    if (firstName.value===""){
        document.getElementById("in_fName").focus();
		document.getElementById("in_fName").style.background="red";
        return false;
    } else if (lastName.value===""){
		document.getElementById("in_lName").focus();
		document.getElementById("in_lName").style.background="red";
        return false;
	} else if(humberIDPattern.test(humberID.value)=== false){
		document.getElementById("in_id").focus();
		document.getElementById("in_id").style.background="red";
        return false;
	} 
    else if (dropdown.options[dropdown.selectedIndex].text==="CHOOSE ONE"){
		document.getElementById("in_program").focus();
		document.getElementById("in_program").style.background="red";
        return false;
	} else if(ischeked===false){
        document.getElementById("caption_project").style.background="red";
        return false;
    } else {
        document.getElementById("welcome").style.display="none";
        document.getElementById("form").style.display="none";
        document.getElementById("result").style.display="block";
    
        document.getElementById("result__Fname").innerHTML= firstName.value;
        document.getElementById("result__Lname").innerHTML= lastName.value;
        document.getElementById("result__id").innerHTML= humberID.value;
        document.getElementById("result__program").innerHTML= dropdown[dropdown.selectedIndex].text;
        document.getElementById("result__project").innerHTML= project.value;
        return false;
    }
    return false; // stops from fully submiting form
}