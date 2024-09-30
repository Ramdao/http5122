//#### LAB 4 - FUNCTIONS ####
//PART 3:  SAFE DOG WALKING CHECK 


//================== CREATE YOUR checkTemp FUNCTION
//This function's job is to... Check to see if it is good for dog walking
//It needs to receive... a number
//It will return... boolean= true or false 

function checkTemp(currentTemp){
    if (currentTemp>30 || currentTemp<-10){
        return false;
    }
    return true;
}

//================== LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS

var temp= prompt("current temp");
temp= checkTemp(temp);
if(temp===false){
    alert("Yikes! not good for dog walking!");
} else if (temp===true){
    alert("You're good, have a nice walk!")
}

