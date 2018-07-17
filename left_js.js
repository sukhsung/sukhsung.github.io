$(document).ready(function() {
    var $left = $(".left")
    var $right = $(".right")

    $left.css("background-color",localStorage.getItem("leftColor"));
    $right.css("background-color",localStorage.getItem("rightColor"));

});

