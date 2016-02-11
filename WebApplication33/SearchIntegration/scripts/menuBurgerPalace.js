$(document).ready(function () {
    searching();

    $("#search").keyup(function () {
        searching();
    });

    $(".checkBoxes").change(function () {
        searching();
    });
});


function searching() {

    var searchfield = $("#search").val();
    var myReg = new RegExp(searchfield, "i");
    var output = "<ul class='searchresults'>";
    $.getJSON("JSON/burgers.json", function (data) {
        $.each(data, function (key, val) {

            if ((val.name.search(myReg) !== -1) ||
                (val.description.search(myReg) !== -1) ||
                (val.category.search(myReg) !== -1)) {
                if ($("#" + val.category).is(":checked")) {
                    output += "<li>";
                    output += "<h2>" + val.name + "</h2>";
                    output += "<p>";
                    output += val.description;
                    output += "</p>";
                    output += "<img src='" + val.image;
                    output += "'alt='" + val.name;
                    output += "'/>";
                    output += "<h3>Price: " + val.price + " euros</h3>";
                    output += "</li>";
                }
            }
        });
        output += "</ul>";
        $("#update").html(output);
    });
}