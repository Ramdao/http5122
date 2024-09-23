var array =[1,2,3];
var array2 =[4,5,6];

console.log(array[2]);
var all = array.concat(array2);
all.sort(); //For alpha sort not numeric
all.indexOf(1);
all.slice(0,2);
all.pop();//removes last
all.push(1);//adds to last
all.shift();//remove first
all.unshift(1);//adds to first
all.splice(0,1,1);// start, how many, add items 
console.log(all.join(", "));

for(var i = 10; i>=0; i=i-1){
    console.log(i);
}