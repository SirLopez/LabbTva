//happy hour logic:
//Method calls:
//Adjust price function: (add .toFixed(2) for 2 decimals)
function happyTime() {

    var now = new Date().getHours();
    var happyHour = 12;
    var isHappyHour = (now === happyHour);
    
    var prices = document.getElementsByClassName("price");
    if (isHappyHour) {
        for (var i = 0; i < prices.length; i++) {
            prices[i].innerHTML = (Number(prices[i].innerHTML) * Number(0.9)).toFixed(2);
        }
    }
}

document.getElementsByClassName("price").value = happyTime();

/*Add pictures function to span:*/
InsertPicture();

function InsertPicture() {
    
    var images = document.getElementsByTagName('span');

    for (var i = 0; i < images.length; i++) {

        var image = document.createElement('img');
        image.setAttribute('src', '../Images/Hamburger.png');
        images[i].appendChild(image);
    }
}

/*Add todays offer function. 
Make price background red. 
Reduce price by another 20%:*/

TodaysOffer();
function TodaysOffer() {
    
    var today = new Date().getDay();

    var weekday = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

    for (var i = 0; i < weekday.length; i++) {
        if (today === i) {
            document.getElementById(weekday[i]).className += ' todaysDeal';
            //document.getElementById(weekday[i]).classList.add('todaysDeal');
        }
    }
}



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