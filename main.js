var times = prompt ("Please enter number of times");//(global scope) prompts for the number of times function should input a number
function myGame(times) {
	
	var i = Math.floor(Math.random() * 100) + 1; //Generates random numbers and stores it in i

	var j=i%2; //gets the modulus of the random number and stores the result in a variable j (function scope)
	if (j==0) //checks if j returns a zero or not
	    alert (" Number is Even"); // if result is zero then j = even
	else
	    alert (" Number is odd"); // if result is not zero then j= odd

	for(var count=1;count<=times; count++) // loop to counter the number of captured inputs
	{
	    var num = prompt ("Please enter a number:"); //Captures user input .....e.g of function scope
	    if (num==i){																// condition checks if auto gen. number is equal to captured number it terminates
	        alert("You WIN!", +"Clapp for yourself" );
	        break;
	    }
	    if (num<i){																											//condition checks if auto gen. number is les than captured number
	        alert("Number is lower, make another guess");
	    }
	    if (num>i){																									// condition checks if auto gen. number is greater than captured number
	                alert("Number is higher,make another guess");
	            }
	    if (count==times){    // if condition iterates 10 times with invalid gueses
	            alert("You LOSE!");}
	}
}

myGame(times); // invokes the function for output
