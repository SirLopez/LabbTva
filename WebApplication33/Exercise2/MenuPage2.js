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

var burgers = [mondayBurger, tuesdayBurger, wednesdayBurger, thursdayBurger, fridayBurger, saturdayBurger, sundayBurger];

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

function Product(name, size, price, weekday, img) {
    this.name = name;
    this.size = size;
    this.price = price;
    this.weekday = weekday;
    this.img = img;
}

var pizzas = [
    new Product("Tropicana", "medium", 8.90, "monday", "\Images/Pizza.png"),
    new Product("Godfather", "medium", 10.90, "tuesday", "\Images/Pizza.png"),
    new Product("Kebabpizza", "medium", 8.90, "wednesday", "\Images/Pizza.png"),
    new Product("Mexicana", "medium", 9.90, "thursday", "\Images/Pizza.png"),
    new Product("Calzone", "medium", 8.90, "friday", "\Images/Pizza.png"),
    new Product("Daniél Speciale", "medium", 10.90, "saturday", "\Images/Pizza.png"),
    new Product("Hawaii", "medium", 7.90, "sunday", "\Images/Pizza.png")
];

displayMenu(pizzas, "pizzaPlace");

var subs = [
    new Product("Bella´s sub", "medium", 7.50, "monday", "\Images/Subs.PNG"),
    new Product("King´s sub", "mega", 9.50, "tuesday", "\Images/Subs.PNG"),
    new Product("Veggie sub", "medium", 6.50, "wednesday", "\Images/Subs.PNG"),
    new Product("Volcano sub", "mega", 7.50, "thursday", "\Images/Subs.PNG"),
    new Product("Bacon sub", "medium", 7.50, "friday", "\Images/Subs.PNG"),
    new Product("Chicken sub", "medium", 7.50, "saturday", "\Images/Subs.PNG"),
    new Product("BimBim sub", "medium", 7.50, "sunday", "\Images/Subs.PNG")
];

displayMenu(subs, "subsPlace");

var drinks = [
    new Product("Fanta", "medium", 4.50, "monday", "\Images/Drink.png"),
    new Product("RedBull", "medium", 6.50, "tuesday", "\Images/Drink.png"),
    new Product("Sprite", "medium", 4.50, "wednesday", "\Images/Drink.png"),
    new Product("Mariestad Export", "medium", 8.50, "thursday", "\Images/Drink.png"),
    new Product("Pepsi", "medium", 4.50, "friday", "\Images/Drink.png"),
    new Product("Water", "medium", 2.50, "saturday", "\Images/Drink.png"),
    new Product("Coca Cola", "medium", 4.50, "sunday", "\Images/Drink.png")
];

displayMenu(drinks, "drinksPlace");

/*
1. create 7 hamburger objects using literal notation use attributes name, size, dayOfTheWeek and price(page. 104 in book) Please use the same html syntax of an article as in exercise1.
2. create Product objects with constructor notation, 
   use the parameters name, size, price, dayOfTheWeek  (page. 108 in book)
3. add 7 drinks to the page using Product.
4. add 7 pizzas to the page using Product.
5. add 7 subs to the page using Product.
6. GO to file FixIt.html
*/