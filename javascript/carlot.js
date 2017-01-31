var CarLot = (function (original) {

	var inventory = [];

  	return { // begin return

  		/*
  		 *	JSON LOAD
  		 */
    	loadInventory: function (callback) {
    		var inventoryLoader = new XMLHttpRequest();
      		inventoryLoader.addEventListener("load", function () {
        		var objectOfCars = JSON.parse(event.target.responseText);
        		inventory = objectOfCars.cars;
        		console.log("JSON load complete");
        		CarLot.populatePage(inventory); // call the populate Page Function
    		});

      		inventoryLoader.open("GET", "inventory.json");
      		inventoryLoader.send();
    	}, /* END JSON LOAD */
		/* 
		 *	Call Inventory 
		 */ 
		getInventory: function (something) {
 			for (var i = 0; i < inventory.length; i++) {
            	var currentObject = inventory[i];
            	var putTogetherString = currentObject.year + " " + currentObject.make + " " + currentObject.model;
            	console.log(putTogetherString);
        	};
        }

	}; // end return

	return original;

})(CarLot || {});