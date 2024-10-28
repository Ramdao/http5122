
/* 
 Create a car object with make, type, cost and discount as function
*/
var car={
    make: 'BMW',
    type: 'SUV',
    cost: 90000,
    fuel: 'electric',
    discount: function (){
        var discount= this.cost * 0.05;
        this.cost = this.cost - discount;
    }
    

}
/* 
outputs current values of objects to console
prompt user to change values + current values
change cost of car
output new values
*/
console.log(car);
var make = prompt("Choose brand, current brand: "+car.make);
car.make= make;
var type = prompt("Choose car type, current type: "+car.type);
car.type= type;
car.discount();
console.log(car);

