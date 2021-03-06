/**
* Function that add a new product with the name and quantity
* specified by the user to an html table
* @param name - the name of the product to add
* @param quantity - the number of units of the new product to add
*/
function addProduct(name, quantity)
{
	// at first check if the name parameter is a non empty string
	// and if the quantity is a positive integer(if it is a double 
	// it will be casted to int)
	if(name.length == 0 || quantity.length == 0 || isNaN(parseInt(quantity)) || parseInt(quantity) <= 0)
	{
		// If the input values are invalid we alert the user
		alert("The name of the product must be a NON EMPTY string" 
			+ "\nand the quantity must be a POSITIVE integer ");
	}
	else
	{
		// we have to check if the product
		// is not already present in the warehouse
		if(warehouse[name] == undefined)
		{
			// if the product is new we add it to the warehouse
			// and then we add it to the html table
			warehouse[name] = quantity;

			// Getting the table where we have to add the product
			var table = document.getElementById("warehouse");
			var rowsLength = table.rows.length;

			// Adding a new row in the table
			var row = table.insertRow(rowsLength);

			// Adding two cells to the new row
			var nameCell = row.insertCell(0);
			var quantityCell = row.insertCell(1);
			quantityCell.id = "product_" + name;

			// Setting the value of the new row cell
			nameCell.innerHTML = name;
		}
		else
		{
			// if the product is already present
			// we simply update its quantity
			warehouse[name] = parseInt(warehouse[name]) + parseInt(quantity);
		}

		var quantityCell = document.getElementById("product_" + name);
		quantityCell.innerHTML = warehouse[name];
		
		// if adding the new items breaks the warehouse limit we 
		// add the items but we alert the user about that
		counter += parseInt(quantity);
		if(counter == limit)
		{
			alert("The warehouse is now full");
		}
		else if(counter > limit)
		{
			alert("The warehouse limit has been exceeded");				
		}		

		// setting the two input html tags values to empty
		document.getElementById('productName').value = "";
		document.getElementById('productQuantity').value = "";
	}	
}

// The following functions are related to the behavior of the VIEW

/**
* Function that show/hide the form that allow
* users to add new products;
*/
addInputsVisibility = false;
function showHideAddForm()
{
	if(addInputsVisibility)
	{
		document.getElementById('addFormDiv').style.display = "none";
		addInputsVisibility = false;
	}
	else
	{
		// we check if the wareouse is already full;
		// if it is the case the checkLimit() function will 
		// alert the user about that
		checkLimit();
		document.getElementById('addFormDiv').style.display = "block";
		addInputsVisibility = true;
	}
}

/**
* Wrapper function that call the addProduct function
* with the right parameters
*/
function addBtnClick()
{
	addProduct(document.getElementById('productName').value, document.getElementById('productQuantity').value);	
	showHideAddForm();
}

/**
* Wrapper function that call the setItemsLimit function
* with the right parameter
*/
function limitBtnClick()
{
	setItemsLimit(document.getElementById('productQuantityLimit').value);	
}