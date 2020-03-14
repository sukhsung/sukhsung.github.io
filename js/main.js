
function loadContent(pageName){
    $(".active").removeClass("active");
    $("#"+pageName).addClass("active");
    $("#content").hide().load(pageName+".html").show().css({top:'1em',opacity:0}).animate({top:0,opacity:1});
}

function loadMain() {
    $(".active").removeClass("active");
    $("#content").load("main.html").hide().show().css({top:'1em',opacity:0}).animate({top:0,opacity:1});
}

function testFunc(){
    $("#content")
}