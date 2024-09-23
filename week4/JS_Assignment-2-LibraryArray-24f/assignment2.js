// 2.Variables for all movies 
var movie1= "King Kong";
var movie2= "Lion King";
var movie3 = "Gravity";
var movie4 = "Spider-Man";
var movie5= "Batman";
var movie6= "Wall-E";
var movie7= "Shrek";

//3. array to hold movies
var topmovie =[movie1,movie2,movie3,movie4,movie5,movie6,movie7];
//4. Initial prompt to select number from 1-7
var pickedmovie= prompt("Which top 7 movie would you like?","Pick a number: 1-7");
//5. loops until number 1-7 given
while(Number.isInteger(parseInt(pickedmovie))!=true || parseInt (pickedmovie)>7 || parseInt(pickedmovie)<1){
    alert("Please enter a number between 1 and 7");
    var pickedmovie= prompt("Which top 7 movie would you like?","Pick a number: 1-7");
    
}
//7. Gives number and title of movie
alert("Number "+pickedmovie+ " on the list is "+topmovie[parseInt(pickedmovie)-1]);

/* code without loop
var pickedmovie= prompt("Which top 7 movie would you like?","Pick a number: 1-7");
if(Number.isInteger(parseInt(pickedmovie))!=true || parseInt (pickedmovie)>7){
    alert("Please enter a number between 1 and 7");
} else {
    alert("Number "+pickedmovie+ " on the list is "+topmovie[parseInt(pickedmovie)-1]);
}
*/

// outputs all movies in array with number
for (var i =0; topmovie.length>i;i++){
    console.log("Movie: "+(i+1)+" "+topmovie[i]);
}