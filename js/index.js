var contentType = [];


function loadContent(pageName){
    $(".active").removeClass("active");
    $("#"+pageName).addClass("active");
    $("#content").hide().load(pageName+".html").show().css({top:'1em',opacity:0}).animate({top:0,opacity:1});
    contentType = pageName;
}

function loadMain() {
    if (contentType != "main"){
        $(".active").removeClass("active");
        $("#content").load("mainIsing.html").hide().show().css({top:'1em',opacity:0}).animate({top:0,opacity:1});

    }

    color_index = (color_index+1)%2;
    document.documentElement.style.setProperty('--color-main', color_main[color_index]);
    document.documentElement.style.setProperty('--color-light', color_light[color_index]);
    document.documentElement.style.setProperty('--color-accent', color_accent[color_index]);
    document.documentElement.style.setProperty('--color-bkg', color_bkg[color_index]);
    contentType = "main"

    document.getElementById("darkmode").src= darkmode_icon[color_index];
}

function toggleDark() {
    color_index = (color_index+1)%2;
    document.documentElement.style.setProperty('--color-main', color_main[color_index]);
    document.documentElement.style.setProperty('--color-light', color_light[color_index]);
    document.documentElement.style.setProperty('--color-accent', color_accent[color_index]);
    document.documentElement.style.setProperty('--color-bkg', color_bkg[color_index]);
    document.getElementById("darkmode").src= darkmode_icon[color_index];
}

function loadVar(){

    color_main= ["#022873","#F2BC8D"];
    color_light= ["#46658C","#E3B46D"];
    color_accent= ["#FB5569","#FB5569"];
    color_bkg= ["#F2E1D8","#383D59"];
    darkmode_icon = ["/data/lightmode.svg","/data/darkmode.svg"]

    // detect dark mode
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        color_index = 0;
    }
    else {
        color_index = 1;
    }
}
