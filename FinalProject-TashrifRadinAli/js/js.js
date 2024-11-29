window.onload = start;

function start() {
    /* for initial timer */
   
    var timerspeed = 100;

    document.getElementById("add").onclick = add;

    /* function to handle adding more timers */
    function add() {
       document.getElementById("timer3").style.display="flex";
    }

    /* function to set up event listeners and functionality for a timer */
  
        // file input for image upload
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

          
        

        // counter for timer
        var counterElement = document.querySelector("#counter");
        var buttonElement = document.querySelector("#strbtn");
        var min = 0;
        var hour = 0;
        var flag = true 
        var store;

        counterElement.onclick = function () {
            var newNode = document.createElement("input");
            newNode.id = "counter";
            newNode.placeholder = "Type hrs and then start";
            var parent = counterElement.parentNode;
            parent.replaceChild(newNode, counterElement);
        };

        buttonElement.onclick = function () {
            var inputElement = document.querySelector("#counter");

            if (!isNaN(parseInt(inputElement.value))) {
                hour = Math.round(parseFloat(inputElement.value)); // rounds the number 
                if (inputElement.tagName !== "P") {
                    var newNode = document.createElement("p");
                    newNode.id = "counter";
                    var parent = inputElement.parentNode;
                    parent.replaceChild(newNode, inputElement);
                }
            }

            if (flag === false) {
                buttonElement.innerHTML = "Start";
                flag = true;
                clearInterval(store);
            } else {
                buttonElement.innerHTML = "Stop";
                store = setInterval(countdown, timerspeed); //PLEASE CHANGE HERE!!!
                flag = false;
            }
        };

        function countdown() {
            var counterElement = document.querySelector("#counter");
            console.log(hour);
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
     

    // file input for image upload
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

      
    

    // counter for timer
    var counterElement2 = document.querySelector("#counter-2");
    var buttonElement2 = document.querySelector("#strbtn-2");
    var min2 = 0; 
    var hour2 = 0 ;
    var flag2 = true 
    var store2;

    counterElement2.onclick = function () {
        var newNode = document.createElement("input");
        newNode.id = "counter-2";
        newNode.placeholder = "Type hrs and then start";
        var parent = counterElement2.parentNode;
        parent.replaceChild(newNode, counterElement2);
    };

    buttonElement2.onclick = function () {
        var inputElement = document.querySelector("#counter-2");

        if (!isNaN(parseInt(inputElement.value))) {
            hour2 = Math.round(parseFloat(inputElement.value)); // rounds the number 
            if (inputElement.tagName !== "P") {
                var newNode = document.createElement("p");
                newNode.id = "counter-2";
                var parent = inputElement.parentNode;
                parent.replaceChild(newNode, inputElement);
            }
        }

        if (flag2 === false) {
            buttonElement2.innerHTML = "Start";
            flag2 = true;
            clearInterval(store2);
        } else {
            buttonElement2.innerHTML = "Stop";
            store2 = setInterval(countdown2, timerspeed); //PLEASE CHANGE HERE!!!
            flag2 = false;
        }
    };

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

  // file input for image upload
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

    
  

  // counter for timer
  var counterElement3 = document.querySelector("#counter-3");
  var buttonElement3 = document.querySelector("#strbtn-3");
  var min3 = 0;
  var hour3 = 0;
  var flag3 = true 
  var store3;

  counterElement3.onclick = function () {
      var newNode = document.createElement("input");
      newNode.id = "counter-3";
      newNode.placeholder = "Type hrs and then start";
      var parent = counterElement3.parentNode;
      parent.replaceChild(newNode, counterElement3);
  };

  buttonElement3.onclick = function () {
      var inputElement = document.querySelector("#counter-3");

      if (!isNaN(parseInt(inputElement.value))) {
          hour3 = Math.round(parseFloat(inputElement.value)); // rounds the number 
          if (inputElement.tagName !== "P") {
              var newNode = document.createElement("p");
              newNode.id = "counter-3";
              var parent = inputElement.parentNode;
              parent.replaceChild(newNode, inputElement);
          }
      }

      if (flag3 === false) {
          buttonElement3.innerHTML = "Start";
          flag3 = true;
          clearInterval(store3);
      } else {
          buttonElement3.innerHTML = "Stop";
          store3 = setInterval(countdown3, timerspeed); //PLEASE CHANGE HERE!!!
          flag3 = false;
      }
  };

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


