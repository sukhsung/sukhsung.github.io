
function loadContent(pageName){
    $(".active").removeClass("active").addClass("inactive");
    $("#"+pageName).removeClass("inactive").addClass("active");
    $("#content").load(pageName+".html").hide().fadeIn();
}

function loadMain() {
    $(".active").removeClass("active").addClass("inactive");
    $("#content").load("main.html").hide().fadeIn();
}
