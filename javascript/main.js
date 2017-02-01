
var CarLot = (function (original) {

    var carInventory = [];

    original.populatePage = function (inventory) {
      // Loop over the inventory and populate the page
      carInventory = inventory;
              /* 
              Instructions: 
              Loop over your array of cars and build up an HTML string to build a card for each car. 
              Also, use Bootstrap to create rows. Each row should contain 3 columns. 
              Make sure you have a parent element with a class of container. 
              Hint: You must build up the entire string of columns/rows before injecting into the DOM. 
              Use a counter variable to know when to close a row after three columns.
              */
              /* let us grab bootstrap's row class which our columns are placed in */
              var mainDiv = document.querySelector(".row"); 
              for (car in carInventory) {
                      var listOfCars = "";
                      var eachCar = carInventory[car];

                      listOfCars += /* this isn't quite what the instructions call for
                                     * we actually build our string but make the assumption that bootstrap can only
                                     * handle a grid size of 4. Therefore, each four column div created wil only alow
                                     * three columns per row */
                                `
                                <div id="${eachCar.model}" class="col-md-4 addspace firstborder">
                                <b>Car:</b> ${eachCar.make} ${eachCar.model}<br />
                                <b>Year:</b> ${eachCar.year} <br />
                                <b>Price:</b> ${eachCar.price} <br />
                                <b>Description:</b> 
                                <p class="description">${eachCar.description}</p><br />
                                </div>
                              `
                      mainDiv.innerHTML += listOfCars;
            }
      }

      original.activateEvents = function (inventory) {

          let cardContainer = document.getElementsByClassName("col-md-4");
          let inputText = document.getElementById("editdescription");
          inputText.addEventListener("keyup", editText);

          for ( var i = 0 ; i < cardContainer.length; i++ )
            cardContainer[i].addEventListener("click", borderControl);

          function borderControl () {
              if (! event.currentTarget.classList.contains("addborder")) {  
                  for ( var j = 0; j < cardContainer.length; j++ ) 
                    cardContainer[j].classList.remove("addborder"); /* this genius move is from Jeremy */
                    this.classList.add("addborder"); 
              } else {
                    this.classList.remove("addborder");
              } 
          }

          function editText () {
            for ( var j = 0; j < cardContainer.length; j++ ) 
              if (cardContainer[j].classList.contains("addborder")) 
                  cardContainer[j].childNodes[15].innerHTML = inputText.value;
            }


      }   /* end of activateEvents */

// Now that the DOM is loaded, establish all the event listeners needed
// here


// Load the inventory and send a callback function to be invoked after the process is complete
CarLot.loadInventory();

return original;

})(CarLot || {});


/* We got childNode15 from console.log(getDefaultContainer[j].childNodes); */



/*
          function addBorder (something) {
              this.classList.toggle("addborder"); 
              inputText.value = '';
              inputText.focus();
          } */


