//Playing with some properties from the book p 124
document.getElementById('information').addEventListener('click', function () {
    alert("Screensize and the available pixels for the site to display on.");
    alert("actual width: " + screen.width);
    alert("available width: " + screen.availWidth);
    alert("actual height: " + screen.height);
    alert("available width: " + screen.availHeight);
    alert(window.document);
    alert(window.location);
});

//Added class in current stylesheet instead of creating a new stylesheet
//for changing fontstyle on changed words

playingWithMethods();
function playingWithMethods() {
    document.getElementById('playDom').addEventListener('click', function () {
        window.alert("This will lead to Formula 1´s official website");
        window.open('http://www.formula1.com');
        window.print();
    }, false);
}

var play = (function playDom() {
    alert('Page title: ' + document.title
        + '\n\nPage URL: ' + document.URL
        + '\n\nPage domain: ' + document.domain
        + '\n\nPage last modified: ' + document.lastModified);
})();

var textArray = document.getElementById('makeMeAnArray').innerHTML.split(' ');

document.getElementById('makeMeAnArray').addEventListener('click', function () {

    var theArray = textArray.length;
    var dummy = 0;
    document.getElementById('arrayDisplay').innerHTML += "<strong>UpperCase</strong>";
    document.getElementById('arrayDisplay').setAttribute('class', 'changedWords');
    for (var i = 0; i < theArray; i++) {
        dummyUpperCase += textArray[i].toUpperCase() + " ";
    };
    
    document.getElementById('arrayDisplay').innerHTML += "<strong>LowerCase</strong>";
    for (var i = 0; i < theArray; i++) {
        dummyLowerCase += textArray[i].toLowerCase() + " ";
    };

    document.getElementById('arrayDisplay').innerHTML += "<strong>charAt</strong>";
    for (var i = 0; i < theArray; i++) {
        dummy += textArray[i].charAt(45) + " ";
    };

    document.getElementById('arrayDisplay').innerHTML += "<strong>indexOf('rr')</strong>";
    for (var i = 0; i < theArray; i++) {
        dummy += textArray[i].indexOf('rr') + " ";
    };

    document.getElementById('arrayDisplay').innerHTML += "<strong>lastIndexOf('o')</strong>";
    for (var i = 0; i < theArray; i++) {
        dummy += textArray[i].lastIndexOf('o') + " ";
    };

    document.getElementById('arrayDisplay').innerHTML += "<strong>substring(28,45)</strong>";
    for (var i = 0; i < theArray; i++) {
        dummy += textArray[i].substring(28,45) + " ";
    };

    document.getElementById('arrayDisplay').innerHTML += "<strong>trim()</strong>";
    for (var i = 0; i < theArray; i++) {
        dummy += textArray[i].trim() + " ";
    };

    document.getElementById('arrayDisplay').innerHTML += "<strong>replace('vo', 'a')</strong>";
    for (var i = 0; i < theArray; i++) {
        dummy += textArray[i].replace('vo', 'a') + " ";
    };
    alert('UpperCase ' + dummy);
    alert('LowerCase ' + dummy);
    alert('UpperCase ' + dummy);
    alert('UpperCase ' + dummy);
    alert('UpperCase ' + dummy);
    alert('UpperCase ' + dummy);
    alert('UpperCase ' + dummy);
    alert('UpperCase ' + dummy);
});


//CHECK THE BELOW!!
isTheFourthElementANumber();

function isTheFourthElementANumber() {
    var text = document.getElementById("makeMeAnArray").innerHTML;
    var array = text.split(" ");
    if (isNaN(array[4])) {
        alert("It´s not a number!");
    } else {
        alert("It is a number!");
    }
}

roundNumber();

function roundNumber() {
    var text = document.getElementById("makeMeAnArray").innerHTML;
    var array = text.split(" ");
    alert(Math.round(array[4]));
}

replaceWord();

function replaceWord() {
    var text = document.getElementById("makeMeAnArray").innerHTML;
    var array = text.split(" ");
    var nearest = array[2].replace(array[2], Math.PI);
    alert(Math.round(nearest));
}

howManyDaysToMyBday();

function howManyDaysToMyBday() {
    
    var today = new Date();
    var birth = new Date(today.getFullYear(), 3, 30); //April 30th

    var daysLeft = Math.round((birth - today) / 1000 / 60 / 60 / 24);
    document.getElementById("birthdayPresentation").innerHTML = "Days left: " + daysLeft;
}


calculateAgeInMinutes();

function calculateAgeInMinutes() {
    var today = new Date();
    var birth = new Date(today.getFullYear(), 3, 30); //April 30th

    var minutes = Math.round((birth - today) / (1000 * 60));
    document.getElementById("minutePresentation").innerHTML += "My age in minutes so far is: " + minutes + " and counting.";
}

/*
For each of the following aplicable exercise below you should present a box on the page 
with an alert that shows the result when the box is clicked!
### Window object at page 124: ###
1. Link the script with FixIt.hmtl - DONE
3. Play with the properties at page 124 in the book. 
   Use properties creatively to display things at the html page - DONE
4. Add a stylesheet that displays the changed words in fat font and in red. - DONE (my way)
5. PLay with the Methods  - DONE
### DOM page 126:###
6. Play with the DOM-properties - DONE
### String objects page 128, 129: ###
7. Save the the text from the makeMeAnArray-paragraph into an array. - DONE
8. Use all the string methods and propertys allong with the array - DONE
### String objects page 132: ###
9. check if the 4th element in the array is a number - DONE
*/

/*
### Math page 134: ###
10. Round one of the numbers in the paragraph up/down - DONE
11. replace the 3rd word with PI then roud it to the nearest integer - DONE

### Date object ###
12. Calculate how many days it's until your birthday and present it. - DONE
13. Calculate how many minutes old you are and present it. - DONE

Bonus exercises:
### Demo page 141: ###
-Download the code to the book. Wipe the code from the js-file and rewrite it with the help from the book.
-For additional reading and training go to: http://www.w3schools.com/jsref/jsref_obj_string.asp
 and look at JS String, JS Number, JS Math and JS Date

*/
