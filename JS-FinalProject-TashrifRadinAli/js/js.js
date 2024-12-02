/* 
pseudocode:
-> Take imaga from image input and display
-> Allow users to enter name
-> Change text (Input hours here!) <p> to input box <input>
-> take value and set the timer
-> click on start to start timer
-> stop to pause
-> once timer hits 0 tell use to take care of plany

*/
window.onload = start;

function start() {
    /* for initial timer */
   
    var timerspeed = 100; /* set too 100ms for testing You can change the speed of the timers here! 1000ms for sec */

    document.getElementById("add").onclick = add;

    /* function to handle adding more timers */
    function add() {
       document.getElementById("timer3").style.display="flex";
    }


  
        // file input for image upload for timer 1
        var fileInput = document.querySelector("#fileInput");
        if (fileInput) {
            fileInput.addEventListener("change", function (event) {
                var file = event.target.files[0];
                var previewDiv = document.querySelector("#preview");

                if (file) {
                    if (file.type.startsWith("image/")) {
                        var reader = new FileReader();
                        reader.onload = function (e) {
                            previewDiv.innerHTML = `<img src="${e.target.result}" alt="Uploaded Image" />`;
                            document.getElementById("fileInput").style.display="none";
                        };
                        reader.readAsDataURL(file);
                    } else {
                        previewDiv.innerHTML = `<p>Unsupported file type. Please upload an image.</p>`;
                        previewDiv.style.display = "block";
                    }
                } else {
                    previewDiv.innerHTML = ''; // clear the preview
                }
            });

          
        

        // counter setup for timer 1
        var counterElement = document.querySelector("#counter");
        var buttonElement = document.querySelector("#strbtn");
        // intiial values
        var min = 0;
        var hour = 0;
        // for start and stop button
        var flag = true 
        // For timer interval
        var store;
        // for checking if correct values are given
        var click = false;
        var chk_value = false;

        // change from text <p> to input <input>
        counterElement.onclick = function () {
            var newNode = document.createElement("input");
            newNode.id = "counter";
            newNode.placeholder = "Type hrs and then start";
            var parent = counterElement.parentNode;
            parent.replaceChild(newNode, counterElement);
            click=true;
        };

        //start and stop <button>
        buttonElement.onclick = function () {
            if(click === true){
                var inputElement = document.querySelector("#counter");
                console.log(inputElement.value);
                console.log(hour);
                if (!isNaN(parseInt(inputElement.value))) {
                    hour = Math.round(parseFloat(inputElement.value)); // rounds the number 
                   //checks for existing tags with <p>
                    if (inputElement.tagName !== "P") {
                        var newNode = document.createElement("p");
                        newNode.id = "counter";
                        var parent = inputElement.parentNode;
                        parent.replaceChild(newNode, inputElement);
                        chk_value =true
                    }
                }
                //Switch between start and stop
                if(chk_value===true){
                    if (flag === false) {
                        buttonElement.innerHTML = "Start";
                        flag = true;
                        clearInterval(store);
                    } else {
                        buttonElement.innerHTML = "Stop";
                        store = setInterval(countdown, timerspeed); 
                        flag = false;
                    }
                }
               
            };
            
            //interval for timmer
            function countdown() {
                var counterElement = document.querySelector("#counter");
                if (hour <= 0 && min <= 0) {
                    hour = null;
                    min = null;
                    clearInterval(store);
                    buttonElement.innerHTML = "Start";
                    flag = true;
                    counterElement.innerHTML = "Time to take care of your plant";
                   return;
                }
    
                if (min === 0) {
                    hour -= 1;
                    min = 60;
                }
                min -= 1;
    
                if (hour>0){
                    counterElement.innerHTML = hour+" hour to next care ";
                } else{
                    counterElement.innerHTML = min+" minute to next care ";
                
                }
               
            } 
        } 
    }
           
     

    // file input for image upload for timer 2
    var fileInput = document.querySelector("#fileInput-2");
    if (fileInput) {
        fileInput.addEventListener("change", function (event) {
            var file = event.target.files[0];
            var previewDiv = document.querySelector("#preview-2");

            if (file) {
                if (file.type.startsWith("image/")) {
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        previewDiv.innerHTML = `<img src="${e.target.result}" alt="Uploaded Image" />`;
                        document.getElementById("fileInput-2").style.display="none";
                       
                    };
                    reader.readAsDataURL(file);
                } else {
                    previewDiv.innerHTML = `<p>Unsupported file type. Please upload an image.</p>`;
                    previewDiv.style.display = "block";
                }
            } else {
                previewDiv.innerHTML = ''; // clear the preview
            }
        });

      
    

    // counter for timer 2
    var counterElement2 = document.querySelector("#counter-2");
    var buttonElement2 = document.querySelector("#strbtn-2");
    // intiial values
    var min2 = 0; 
    var hour2 = 0 ;
    // for start and stop button
    var flag2 = true 
    // For timer interval
    var store2;
     // for checking if correct values are given
    var click2 = false;
    var chk_value2 = false;

    // change from text <p> to input <input>
    counterElement2.onclick = function () {
        var newNode = document.createElement("input");
        newNode.id = "counter-2";
        newNode.placeholder = "Type hrs and then start";
        var parent = counterElement2.parentNode;
        parent.replaceChild(newNode, counterElement2);
        click2=true;
    };

    //start and stop <button>
    buttonElement2.onclick = function () {
        if(click2 === true){
            var inputElement = document.querySelector("#counter-2");

        if (!isNaN(parseInt(inputElement.value))) {
            hour2 = Math.round(parseFloat(inputElement.value)); // rounds the number 
            //checks for existing tags with <p>
            if (inputElement.tagName !== "P") {
                var newNode = document.createElement("p");
                newNode.id = "counter-2";
                var parent = inputElement.parentNode;
                parent.replaceChild(newNode, inputElement);
                chk_value2 = true;
            }
        }
            //Switch between start and stop
        if (chk_value2===true){
            if (flag2 === false) {
                buttonElement2.innerHTML = "Start";
                flag2 = true;
                clearInterval(store2);
            } else {
                buttonElement2.innerHTML = "Stop";
                store2 = setInterval(countdown2, timerspeed); 
                flag2 = false;
            }
        }
       
    };
    //interval for timmer
    function countdown2() {
        var counterElement = document.querySelector("#counter-2");
        
        if (hour2 <= 0 && min2 <= 0) {
            hour2 = null;
            min2 = null;
            clearInterval(store2);
            buttonElement2.innerHTML = "Start";
            flag2 = true;
            counterElement.innerHTML = "Time to take care of your plant";
           return;
        }

        if (min2 === 0) {
            hour2 -= 1;
            min2 = 60;
        }
        min2 -= 1;

        if (hour2>0){
            counterElement.innerHTML = hour2+" hour to next care ";
        } else{
            counterElement.innerHTML = min2+" minute to next care ";
        
        }
       
    }

     }
}
        

  // file input for image upload timer 3
  var fileInput = document.querySelector("#fileInput-3");
  if (fileInput) {
      fileInput.addEventListener("change", function (event) {
          var file = event.target.files[0];
          var previewDiv = document.querySelector("#preview-3");

          if (file) {
              if (file.type.startsWith("image/")) {
                  var reader = new FileReader();
                  reader.onload = function (e) {
                      previewDiv.innerHTML = `<img src="${e.target.result}" alt="Uploaded Image" />`;
                      document.getElementById("fileInput-3").style.display="none";
                       
                  };
                  reader.readAsDataURL(file);
              } else {
                  previewDiv.innerHTML = `<p>Unsupported file type. Please upload an image.</p>`;
                  previewDiv.style.display = "block";
              }
          } else {
              previewDiv.innerHTML = ''; // clear the preview
          }
      });

    
  

  // counter for timer 3
  var counterElement3 = document.querySelector("#counter-3");
  var buttonElement3 = document.querySelector("#strbtn-3");
  // initial values
  var min3 = 0;
  var hour3 = 0;
  // for start and stop button
  var flag3 = true 
 // For timer interval
  var store3;
 // for checking if correct values are given
  var click3= false;
  var chk_value3 = false;

  // change from text <p> to input <input>
  counterElement3.onclick = function () {
        var newNode = document.createElement("input");
        newNode.id = "counter-3";
        newNode.placeholder = "Type hrs and then start";
        var parent = counterElement3.parentNode;
        parent.replaceChild(newNode, counterElement3);
        click3=true;
    };
    
    //start and stop <button>
    buttonElement3.onclick = function () {
        var inputElement = document.querySelector("#counter-3");
  
        if (!isNaN(parseInt(inputElement.value))) {
            hour3 = Math.round(parseFloat(inputElement.value)); // rounds the number 
             //checks for existing tags with <p>
            if (inputElement.tagName !== "P") {
                var newNode = document.createElement("p");
                newNode.id = "counter-3";
                var parent = inputElement.parentNode;
                parent.replaceChild(newNode, inputElement);
                chk_value3 = true;
            }
        }
          //Switch between start and stop
        if(chk_value3===true){
            if (flag3 === false) {
                buttonElement3.innerHTML = "Start";
                flag3 = true;
                clearInterval(store3);
            } else {
                buttonElement3.innerHTML = "Stop";
                store3 = setInterval(countdown3, timerspeed); 
                flag3 = false;
            }
        }
       
    };
    //interval for timmer
    function countdown3() {
        var counterElement = document.querySelector("#counter-3");
        console.log(hour);
        if (hour3 <= 0 && min3 <= 0) {
            hour3 = null;
            min3 = null;
            clearInterval(store3);
            buttonElement3.innerHTML = "Start";
            flag = true;
            counterElement.innerHTML = "Time to take care of your plant";
           return;
        }
  
        if (min3 === 0) {
            hour3 -= 1;
            min3 = 60;
        }
        min3 -= 1;
  
        if (hour3>0){
            counterElement.innerHTML = hour3+" hour to next care ";
        } else{
            counterElement.innerHTML = min3+" minute to next care ";
        
        }
       
    }
        
  }
    }
     
      



