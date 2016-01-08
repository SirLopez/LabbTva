var sundayBurger = {
    name: "L-A Burger",
    size: "mega",
    weekday: "sunday",
    price: 19.90,
    img: "Images/Hamburger.png"
};
var mondayBurger = {
    name: "Daniél Burger",
    size: "jumbo",
    weekday: "monday",
    price: 19.90,
    img: "Images/Hamburger.png"
};
var tuesdayBurger = {
    name: "Le Roje Burger",
    size: "big",
    weekday: "tuesday",
    price: 19.90,
    img: "Images/Hamburger.png"
};
var wednesdayBurger = {
    name: "EC Burger",
    size: "small",
    weekday: "wednesday",
    price: 19.90,
    img: "Images/Hamburger.png"
};
var thursdayBurger = {
    name: "JS Burger",
    size: "normal",
    weekday: "thursday",
    price: 19.90,
    img: "Images/Hamburger.png"
};
var fridayBurger = {
    name: "Crazy Burger",
    size: "mega",
    weekday: "friday",
    price: 19.90,
    img: "Images/Hamburger.png"
};
var saturdayBurger = {
    name: "Holiday Burger",
    size: "jumbo",
    weekday: "saturday",
    price: 19.90,
    img: "Images/Hamburger.png"
};

var burgers = [sundayBurger, mondayBurger, tuesdayBurger, wednesdayBurger, thursdayBurger, fridayBurger, saturdayBurger];

displayMenu(burgers, "burgersPlace");

function displayMenu(burgers, menu) {

    var foodmenu = document.getElementById(menu);

    for (var i = 0; i < burgers.length; i++) {
        var legend = document.createElement("legend").textContent = burgers[i].weekday.charAt(0).toUpperCase() + " Burger";
        var h3 = document.createElement("h3").textContent = burgers[i].name;
        var img = document.createElement("img").setAttribute("src", burgers[i].img);
        var span = document.createElement("span").appendChild(img);
        var div = document.createElement("div").textContent = burgers[i].price.toFixed(2);
        var divSize = document.createElement("div").textContent = burgers[i].size;

        var fieldset = document.createElement("fieldset")
             .appendChild(legend)
             .appendChild(h3)
             .appendChild(span)
             .appendChild(div)
             .appendChild(divSize);

        var article = document.createElement("article").appendChild(fieldset);
        foodmenu.appendChild(article);
    }
}



/*
1. create 7 hamburger objects using literal notation 
   use attributes name, size, dayOfTheWeek and price(page. 104 in book)
   Please use the same html syntax of an article as in exercise1.
*/





/*
2. create Product objects with constructor notation, 
   use the parameters name, size, price, dayOfTheWeek  (page. 108 in book)
3. add 7 drinks to the page using Product.
4. add 7 pizzas to the page using Product.
5. add 7 subs to the page using Product.
6. GO to file FixIt.html
*/
//DRINKS
//Subs