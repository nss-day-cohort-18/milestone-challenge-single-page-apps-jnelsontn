var CarLot = (function (original) {
  
    var inventory = [];

  	return {
  		/*
  		 *	JSON LOAD FUNCTION
  		 */
    	loadInventory: function (callback) {
    	      var inventoryLoader = new XMLHttpRequest();
      		  
            inventoryLoader.addEventListener("load", function () {
        		    
                var objectOfCars = JSON.parse(event.target.responseText);
                inventory = objectOfCars.cars; /* We use .cars because the JSON file needs to call on
                                                * 'properities(??) within that file
                                                */
        		    console.log("JSON Successfully Loaded");
                /*
                 * We can pass over 'inventory' which is equal to our car objects to the populatePage function.
                 * Additionally - we also run the activate event function
                 */
        		    CarLot.populatePage(inventory);
                CarLot.activateEvents();
    	      });

            inventoryLoader.addEventListener("error", function () {
              console.log("JSON Load Fail!");
            });

      		inventoryLoader.open("GET", "inventory.json");
      		inventoryLoader.send();
    	}, /* 
          * END JSON LOAD
          */
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
      /*
       * End Inventory Call
       */

    }; // end return

	return original;
  
})(CarLot || {});