// MODEL

// The following object will contain all 
// the product in our warehouse
warehouse = {};

// this variable will maintain the total
// number of items in the warehouse
counter = 0;

// This is the definition of the maximum default
// number of items that our warehouse can contain
defaultLimit = 30;
limit = 0;

setItemsLimit(defaultLimit);

/**
* Function that set the maximum number of product in the warehouse
* @param l - the maximum value of item allowed in the warehouse
*/
function setItemsLimit(l)
{
	// at first check if the limit is a positive integer
	// (if it is a double it will be casted to int)
	if((l.length == 0 ||isNaN(parseInt(l)) || parseInt(l) <= 0))
	{
		// If the input value is invalid we alert the user
		alert("The limit must be a POSITIVE integer");
	}
	else
	{
		// setting the new limit
		limit = parseInt(l);
		document.getElementById("limitLabel").innerHTML = limit;

		checkLimit();

		// setting to empty the input field for the limit
		document.getElementById("productQuantityLimit").value = "";
	}
}

/**
* Function that checks if the number of items
* in the warehouse exceeds the limit and if it
* is the case alerts the user
*/
function checkLimit () {
	// if the limit has changed, the number of
	// items in the warehouse can now exceed the limit
	// If it is the case we alert the user
	if(counter == limit)
	{
		alert("The warehouse is now full");
	}
	else if(counter > limit)
	{
		alert("The warehouse limit has been exceeded");				
	}
}