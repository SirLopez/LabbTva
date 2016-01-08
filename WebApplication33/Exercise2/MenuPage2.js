var sundayBurger = {
    name: "L-A Burger",
    size: "mega",
    weekday: "sunday",
    price: 19.90,
    img: "\Images/Hamburger.png"
};
var mondayBurger = {
    name: "Daniél Burger",
    size: "jumbo",
    weekday: "monday",
    price: 19.90,
    img: "\Images/Hamburger.png"
};
var tuesdayBurger = {
    name: "Le Roje Burger",
    size: "big",
    weekday: "tuesday",
    price: 19.90,
    img: "\Images/Hamburger.png"
};
var wednesdayBurger = {
    name: "EC Burger",
    size: "small",
    weekday: "wednesday",
    price: 19.90,
    img: "\Images/Hamburger.png"
};
var thursdayBurger = {
    name: "JS Burger",
    size: "normal",
    weekday: "thursday",
    price: 19.90,
    img: "\Images/Hamburger.png"
};
var fridayBurger = {
    name: "Crazy Burger",
    size: "mega",
    weekday: "friday",
    price: 19.90,
    img: "\Images/Hamburger.png"
};
var saturdayBurger = {
    name: "Holiday Burger",
    size: "jumbo",
    weekday: "saturday",
    price: 19.90,
    img: "\Images/Hamburger.png"
};

var burgers = [sundayBurger, mondayBurger, tuesdayBurger, wednesdayBurger, thursdayBurger, fridayBurger, saturdayBurger];

displayMenu(burgers, "burgersPlace");

function displayMenu(products, menu) {
    var d = document; //just for a nicer codeview, really don´t need it
    var foodmenu = d.getElementById(menu);
    
    for (var i = 0; i < products.length; i++) {

        var img = d.createElement("img");
        img.src = products[i].img;

        var article = d.createElement("article")
            .appendChild(d.createElement("fieldset"))
            .appendChild(d.createElement("legend"))
            .appendChild(d.createTextNode(products[i].weekday)).parentNode.parentNode
            .appendChild(d.createElement("h3"))
            .appendChild(d.createTextNode(products[i].name)).parentNode.parentNode;

        article.appendChild(d.createElement("span")).appendChild(img);
        article.appendChild(d.createElement("div")).appendChild(d.createTextNode("Price: " + products[i].price.toFixed(2)));
        article.appendChild(d.createElement("div")).appendChild(d.createTextNode("Size: " + products[i].size));

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