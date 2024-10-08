//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 1:  I OBJECT!

var meObject = {
    firstname: "Radin",
    lastname: "Ali",
    age : 24,
    course: "Web Dev",
    info: function(){
        alert("My name is "+meObject.firstname+", I study in "+meObject.course)
    }
};
console.log(meObject.lastname);
//alert("My name is "+meObject.firstname+", I study in "+meObject.course);
meObject.info();