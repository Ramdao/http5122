//#### LAB 4 - FUNCTIONS ####
//PART 2:  AN AVERAGE FUNCTION


//################## CREATE YOUR AVERAGE FUNCTION
//This function takes five numbers and returns their average to one decimal place.
function avg1(num1,num2,num3,num4,num5){
    var total=  num1+num2+num3+num4+num5;
    var avg = total/5.0
    return avg;
}


//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS

console.log(avg1(5,10,15,20,25).toFixed(1));

var grade1 = parseInt(prompt("grade 1"))
var grade2 = parseInt(prompt("grade 2"))
var grade3 = parseInt(prompt("grade 3"))
var grade4 = parseInt(prompt("grade 4"))
var grade5 = parseInt(prompt("grade 5"))

if(avg1(grade1,grade2,grade3,grade4,grade5)>=70){
    console.log(avg(grade1,grade2,grade3,grade4,grade5))
    alert("Avg 70 or over")
} else {
    alert("Review required")
}