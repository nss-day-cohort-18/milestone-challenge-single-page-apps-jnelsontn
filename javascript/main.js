
var CarLot = (function (original) {

    var carInventory = [];

    var mainDiv = document.querySelector(".row");

    original.populatePage = function (inventory) {
      // Loop over the inventory and populate the page
      carInventory = inventory;

/* Loop over your array of cars and build up an HTML string to build a card for each car. 
Also, use Bootstrap to create rows. Each row should contain 3 columns. 
Make sure you have a parent element with a class of container. 
Hint: You must build up the entire string of columns/rows before injecting into the DOM. 
Use a counter variable to know when to close a row after three columns.
*/

        for (car in carInventory) {
          var listOfCars = "";
          var eachCar = carInventory[car];

          listOfCars += `
                          <div id="${eachCar.model}" class="col-md-4 addspace carborderclass">
                          <b>Car:</b> ${eachCar.make} ${eachCar.model}<br />
                          <b>Year:</b> ${eachCar.year} <br />
                          <b>Price:</b> ${eachCar.price} <br />
                          <b>Description:</b> 
                          <p class="description">${eachCar.description}</p><br />
                          </div>
                        `
          mainDiv.innerHTML += listOfCars;
        }

        /*
         * Add Dotted Border containers on click
         */

        var getDefaultContainer = document.getElementsByClassName("col-md-4");
        for (var i = 0; i < getDefaultContainer.length; i++) {
          getDefaultContainer[i].addEventListener("click", function (event) {
            this.classList.toggle("dotted");
            grabInput.value = '';
            grabInput.focus(); // grab focus, var below
          })
        }


        

        /*
         * Add the edit Input
         */
         var grabInput = document.getElementById("editdescription");
         grabInput.addEventListener("keyup", editText);

         function editText () {
            for (var j = 0; j < getDefaultContainer.length; j++) {
              if (getDefaultContainer[j].classList.contains("dotted")) {
               getDefaultContainer[j].childNodes[15].innerHTML = grabInput.value;
               // the below allows me to see all the childnodes for this container 
                // console.log(getDefaultContainer[j].childNodes);
              }
            }
         }


    } // end populatePage function


  // Now that the DOM is loaded, establish all the event listeners needed
  // CarLot.activateEvents();


// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory();



  return original;

})(CarLot || {});