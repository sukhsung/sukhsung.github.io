
function loadContent(pageName){
    $(".active").removeClass("active");
    $("#"+pageName).addClass("active");
    $("#content").load(pageName+".html");
}
