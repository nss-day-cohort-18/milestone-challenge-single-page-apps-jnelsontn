
var CarLot = (function (original) {

	original.changeBorder = function(domElement, color){
		domElement.classList.add(color);
 	};

 	original.resetBorder = function(domElement, color){
 		domElement.classList.remove(color);
 	};

return original;

})(CarLot || {});