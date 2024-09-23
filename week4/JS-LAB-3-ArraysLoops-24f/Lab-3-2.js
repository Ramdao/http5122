//LAB 3 - ARRAYS & LOOPS - PART 2


//TEAM MEMBER ARRAY
var ourTeam=["Radin","Radita","John","Sam","Alex"]

//OUTPUT TEAM ARRAY TO JS CONSOLE
console.log(ourTeam)

//REMOVE LAST MEMBER
ourTeam.pop()
console.log(ourTeam)
//ADD SEAN TO FRONT OF ARRAY
ourTeam.unshift("SEAN")
console.log(ourTeam)

//REARRANGE THE ARRAY ALPHABETICALLY
ourTeam.sort()
console.log(ourTeam)

//OUTPUT REQUIRED MESSAGE TO JS CONSOLE
console.log("We have "+ourTeam.length+" people in our group")

//LOOP THROUGH ARRAY TO OUTPUT TEAM MEMBERS/NUMBERS TO JS CONSOLE

for (var i = 0; i<=ourTeam.length-1;i=i+1){
    var num = i+1
    console.log(ourTeam[i]+" is Num# "+ num);
}