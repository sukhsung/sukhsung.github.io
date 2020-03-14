
function loadContent(pageName){
    $(".active").removeClass("active");
    $("#"+pageName).addClass("active");
    $("#content").load(pageName+".html");
}

function loadMain() {
    $(".active").removeClass("active");
    $("#content").load("main.html");
}
