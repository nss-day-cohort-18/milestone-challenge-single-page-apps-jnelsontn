
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
        var counter = 0;
        for (car in carInventory) {
          var listOfCars = "";
          var eachCar = carInventory[car];

          listOfCars += `
                          <div id="${eachCar.model}" class="col-md-4 addspace carborderclass">
                          Car: <b>${eachCar.make} ${eachCar.model}</b><br />
                          Year: ${eachCar.year} <br />
                          Price: ${eachCar.price} <br />
                          Description: 
                          ${eachCar.description} <br />
                          </div>
                        `
          mainDiv.innerHTML += listOfCars;
          counter++;
        }

        /*
         * Add Dotted Border containers
         */
        var getDefaultContainer = document.getElementsByClassName("col-md-4");
        for (var i = 0; i < getDefaultContainer.length; i++) {
          getDefaultContainer[i].addEventListener("click", function (event) {
            this.classList.toggle("dotted");
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
                console.log(getDefaultContainer[j].childNodes.length);
                getDefaultContainer[j].childNodes[1].innerHTML = grabInput.value;

                // grab the description field
                // = grabInput.value;

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