//happy hour logic: Mellan en viss tid är det 10% rabatt på ALLT (new Date getTime)
//sänka priser när det är hh

var now = new Date().getHours();
var happyHour = 16;

function happyTime() {
    var prices = document.getElementsByClassName("price").value;
    if (now === happyHour) {
        for (var i = 0; i < prices.length; i++) {
            prices[i].value = prices[i].value * 0.9;
        }
    }
}

//Method calls:

document.getElementsByClassName("price").innerHTML = happyTime();

//Adjust price function: (add .toFixed(2) for 2 decimals)



/*Add pictures function to span:*/

/*Add todays offer function. 
Make price background red. 
Reduce price by another 20%:*/

/*Stretch exercises: (increasing tuffness for each number!)

 1. Automate todays offer to be dependent of the day of the week
 2. Create an HTML page with an empty body and then fill it with help from JS.
    -use array with names and price of the burgers seperated by a simple "space"
    -use a loop to add all the html with different burgers
    -Add more pictures on a creative way...
 3. Add arrays for all in point 3 and show the products.
    Add a simulair menu under the burgers with a new <h2> for:
    -subs
    -sausages
    -pizza
    -drinks
    
 5. Add a Birthday function for the restaurant so that the entire week 
    the restaurant has its birthday the price is set to 14.99 per default.
    
*/