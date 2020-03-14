
function loadContent(pageName){
    $(".active").removeClass("active").addClass("inactive");
    $("#"+pageName).removeClass("inactive").addClass("active");
    $("#content").load(pageName+".html");
}

function loadMain() {
    $(".active").removeClass("active").addClass("inactive");
    $("#content").load("main.html");
}
