var teamnum= prompt("What is your team number?");
 // 2. 4 s is the valid Team number to access team.

var promptname;
if (teamnum!=="4"){ //3. checks to see if team number is 4.
    alert("Access denied!")
} else if (teamnum==="4"){
    promptname= prompt("What is your first name?") //4. Asks for first name.
    if (promptname===null || promptname===""){
        alert("Please input valid name");
    } else{
    switch(promptname){
        //5. name of 4 other classmates
        //6. Alert full name if first name is one of these 4.
        case"Radin":
        alert(" Welcome Radin Ali");
        break;
        case "John":
        alert(" Welcome John Doe");
        break;
        case "Sam":
        alert(" Welcome Sam Summer");
        break;
        case "Alex":
        alert(" Welcome Alex Wood");
        break;

        default:
            alert("Access denied!"); //7. Access denied if Not in list of users.
    }
 }
}
