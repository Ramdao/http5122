/* LAB 7 - SHIPPING FORM */
//Order Shipping object (for extra EXTRA challenge, otherwise, ignore it)
var shipInfo = {
	cid: 0,
	name: "",
	pc: "",
	speed: "",
	cost: 0
};

window.onload = domReady;

function domReady(){
	
	var formHandle = document.forms.form_ship;
	formHandle.onsubmit = processform;


}

function processform(){
	var formHandle = document.forms.form_ship;
	var name = formHandle.f_Name;
	var postalcode = formHandle.f_pc;
	var dropdown = formHandle.f_speed;
	/*
	document.getElementById("shippingForm").style.display="none";
	document.getElementById("thanks_msg").style.display="block";
	document.getElementById("thanksCustomer").innerHTML=name.value;
	document.getElementById("thanksPC").innerHTML=postalcode.value;
	*/
	if (dropdown.options[dropdown.selectedIndex].text==="===SELECT==="){
		document.getElementById("in_Speed").focus();
		document.getElementById("in_Speed").style.background="red";

	}
	else if (name.value===""){
		document.getElementById("in_Name").focus();
		document.getElementById("in_Name").style.background="red";
		
		return false;
	} else if (postalcode.value===""){
		document.getElementById("in_pc").focus();
		document.getElementById("in_pc").style.background="red";
		
		return false;
	} else{
		shipInfo.name=name.value;
		shipInfo.pc = postalcode.value;
		shipInfo.speed = dropdown[dropdown.selectedIndex].text;
		shipInfo.cost = dropdown.value;
		document.getElementById("shippingForm").style.display="none";
		document.getElementById("thanks_msg").style.display="block";
		document.getElementById("thanksCustomer").innerHTML=shipInfo.name;
		document.getElementById("thanksPC").innerHTML=shipInfo.pc;
		document.getElementById("thanksSpeed").innerHTML= shipInfo.speed;
		document.getElementById("thanksCost").innerHTML = shipInfo.cost;
	}
	
	return false;
}