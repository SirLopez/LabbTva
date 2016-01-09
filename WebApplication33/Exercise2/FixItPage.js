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
    document.getElementById('makeMeAnArray').addEventListener('click', function() {
        window.alert("This will lead to Formula 1´s official website");
        window.open('http://www.formula1.com');
        window.print();
    }, false);
}

var play = (function playDOM() {
    alert('Page title: ' + document.title
        + '\n\nPage URL: ' + document.URL
        + '\n\nPage domain: ' + document.domain
        + '\n\nPage last modified: ' + document.lastModified);
})();


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
6. Play with the DOM-properties

### String objects page 128, 129: ###

7. Save the the text from the makeMeAnArray-paragraph into an array.
8. Use all the string methods and propertys allong with the array

### String objects page 132: ###
9. check if the 4th element in the array is a number

### Math page 134: ###
10. Round one of the numbers in the paragraph up/down
11. replace the 3rd word with PI then roud it to the nearest integer

### Date object ###
12. Calculate how many days it's until your birthday and present it.
13. Calculate how many minutes old you are and present it.

Bonus exercises:
### Demo page 141: ###
-Download the code to the book. Wipe the code from the js-file and rewrite it with the help from the book.
-For additional reading and training go to: http://www.w3schools.com/jsref/jsref_obj_string.asp
 and look at JS String, JS Number, JS Math and JS Date

*/
