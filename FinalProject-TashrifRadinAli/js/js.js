window.onload = start;

function start() {
    /* for initial timer */
    picture();
    setupTimerEvents(document.querySelector(".timer"));

    document.getElementById("add").onclick = add;

    /* function to handle adding more timers */
    function add() {
        var container = document.getElementById("container");

        var timer = document.createElement("div");
        timer.classList.add("timer");

        var preview = document.createElement("div");
        preview.setAttribute("id", "preview");
        timer.appendChild(preview);

        var input1 = document.createElement("input");
        input1.setAttribute("type", "file");
        input1.setAttribute("id","fileInput");
        timer.appendChild(input1);

        var input2 = document.createElement("input");
        input2.setAttribute("type", "text");
        input2.setAttribute("class", "name");
        input2.setAttribute("placeholder", "Give a name here!");
        timer.appendChild(input2);

        var counter = document.createElement("p");
        var textNode = document.createTextNode("Input hours here!");
        counter.appendChild(textNode);
        counter.setAttribute("id", "counter");
        timer.appendChild(counter);

        var button = document.createElement("button");
        var buttonText = document.createTextNode("Start");
        button.appendChild(buttonText);
        button.setAttribute("id", "strbtn");
        timer.appendChild(button);

        container.appendChild(timer);

        // attach functionality to the new timer
        setupTimerEvents(timer);
    }

    /* function to set up event listeners and functionality for a timer */
    function setupTimerEvents(timer) {
        // file input for image upload
        var fileInput = timer.querySelector("#fileInput");
        if (fileInput) {
            fileInput.addEventListener("change", function (event) {
                var file = event.target.files[0];
                var previewDiv = timer.querySelector("#preview");

                if (file) {
                    if (file.type.startsWith("image/")) {
                        var reader = new FileReader();
                        reader.onload = function (e) {
                            previewDiv.innerHTML = `<img src="${e.target.result}" alt="Uploaded Image" />`;
                            fileInput.style.display = "none";
                            timer.querySelector(".name").style.marginLeft = "-55%";
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
        }

        // counter for timer
        var counterElement = timer.querySelector("#counter");
        var buttonElement = timer.querySelector("#strbtn");
        var min = 0 
        var hour = 0 
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
            var inputElement = timer.querySelector("#counter");

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
                store = setInterval(countdown, 100); //PLEASE CHANGE HERE!!!
                flag = false;
            }
        };

        function countdown() {
            var counterElement = timer.querySelector("#counter");

            if (hour <= 0 && min <= 0) {
                clearInterval(store);
                buttonElement.innerHTML = "Start";
                flag = true;
                counterElement.onclick();
                return;
            }

            if (min === 0) {
                hour -= 1;
                min = 60;
            }
            min -= 1;

            if (min < 10) {
                counterElement.innerHTML = hour+" h : 0"+ min+" min";
            } else {
                counterElement.innerHTML = hour+" h : "+ min+" min";
            }
        }
    }

    /* handles pictures */
    function picture() {
        document.getElementById("fileInput").addEventListener("change", function (event) {
            var file = event.target.files[0];
            var previewDiv = document.getElementById("preview");

            if (file) {
                if (file.type.startsWith("image/")) {
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        previewDiv.innerHTML = `<img src="${e.target.result}" alt="Uploaded Image" />`;
                        document.getElementById("fileInput").style.display = "none";
                        document.querySelector(".name").style.marginLeft = "-55%";
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
    }
}
