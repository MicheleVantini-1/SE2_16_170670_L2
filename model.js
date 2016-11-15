// MODEL

// The following object will contain all 
// the product in our warehouse
warehouse = {};

// this variable will maintain the total
// number of items in the warehouse
counter = 0;

// This is the definition of the maximum default
// number of items that our warehouse can contain
defaultLimit = 50;
limit = 0;
setItemsLimit(defaultLimit);

/**
* Function that set the maximum number of product in the warehouse
* @param l - the maximum value of item allowed in the warehouse
*/
function setItemsLimit(l)
{
	// setting the new limit
	limit = parseInt(l);
	document.getElementById("limitLabel").innerHTML = limit;

	// since the limit has changed, the number of
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

	// setting the two input html tag value to empty		
	document.getElementById('productQuantityLimit').value = "";

}
