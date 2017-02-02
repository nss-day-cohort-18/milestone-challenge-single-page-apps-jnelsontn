
var CarLot = (function (original) {

	original.resetBorder = function (anEle, aClass) {
		anEle.classList.remove(aClass);
	};

	original.changeBorder = function (anEle, aClass) {
		anEle.classList.add(aClass);
	};

return original;

})(CarLot || {});