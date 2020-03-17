var pi = Math.PI;

var colUp = '#5D3BD9';
var colDn = '#F2A7B5';

var hexsMatrix=[];
var spinMatrix=[];
var drawMatrix=[];
var numSpin = [];
var a = 3;
var rmax2 = 1600;
var draw=[];
var numGrid = 33;
var numFlip = 20;

var slider = document.getElementById('TempSlider')
var radio_FM = document.getElementById('FM')
var radio_AFM = document.getElementById('AFM')

$(window).resize(function() {
    var dim = determineWidth();
    draw.size(dim,dim)
  })

function runIsing() {

    initialize();

    // var ni = hexsMatrix.length;
    // var nj = hexsMatrix[0].length; 


    // var cur_i = [];
    // var cur_j = [];



    //     cur_i = Math.round(30*Math.random())+1
    //     cur_j = Math.round(30*Math.random()) +1  

    //     spinMatrix[cur_i][cur_j] = 1
    //     spinMatrix[cur_i+1][cur_j] = 1
    //     spinMatrix[cur_i-1][cur_j] = 1
    //     spinMatrix[cur_i-1][cur_j+1] = 1
    //     spinMatrix[cur_i][cur_j+1] = 1
    //     spinMatrix[cur_i+1][cur_j-1] = 1
    //     spinMatrix[cur_i][cur_j-1] = 1
         requestAnimationFrame(function(){update()})


}


function update(){
    kBT = slider.value*0.2;

    if (radio_FM.checked) {
        FMAFM = -1
    }else if (radio_AFM.checked){
        FMAFM = 1;
    } else {
        radio_FM.checked = true;
        radio_AFM.checked = false;
    }

    for (var flip = 0; flip < numFlip; flip ++) {
    cur_i = Math.round(Math.random()*(numGrid-1));
    cur_j = Math.round(Math.random()*(numGrid-1));

    lfts = (cur_i  - 1 +numGrid)%numGrid ;
    rgts = (cur_i  + 1 )%numGrid ;
    ups  = (cur_j  - 1 +numGrid)%numGrid ;
    dwns = (cur_j  + 1 +numGrid)%numGrid ;


    if (Math.random() < 0.5){
        newSpin = 1;
        newCol = colUp;
    }
    else {
        newSpin = -1;
        newCol = colDn;
    }


    dE = FMAFM*(newSpin - spinMatrix[cur_i][cur_j])* ( spinMatrix[lfts][cur_j] + spinMatrix[rgts][cur_j] + spinMatrix[cur_i][ups] +spinMatrix[rgts][ups]+spinMatrix[cur_i][dwns]+spinMatrix[lfts][dwns] ); 

    if (Math.random() <Math.exp(-dE/kBT)){
        if (drawMatrix[cur_i][cur_j] == 1) {
            hexsMatrix[cur_i][cur_j].fill(newCol)

        }
        spinMatrix[cur_i][cur_j] = newSpin;
    }

    //     

    }
    requestAnimationFrame(function(){update()})
}

function initialize(){
    draw = SVG().addTo('#svgDiv').size('100px', '100px')

    var hexs = [];
    var verts = hexCoord(a*0.5, 0,0,false);
    for (i = 0; i < numGrid; i++) {
        var hexsArray = [];
        var spinArray = [];
        var drawArray = [];
        for (j = 0; j<  numGrid; j++){
            
            x = a*(i + j*0.5)-25;
            y = a*(j*Math.sqrt(3)/2)+8;

            r2 = (x-50)*(x-50) + (y-50)*(y-50);

            if (Math.random() < 0.5){
                hexs = draw.polygon(verts).fill(colUp)
                spinArray.push(1);
            }
            else {
                hexs = draw.polygon(verts).fill(colDn)
                spinArray.push(-1);

            }
            hexs.transform({translateX: x, translateY:y})
            hexsArray.push(hexs)

            if (r2>rmax2) {
                hexs.fill('none')
                drawArray.push(0)
            }
            else {
                drawArray.push(1)
            }

        }
        hexsMatrix.push(hexsArray)
        spinMatrix.push(spinArray)
        drawMatrix.push(drawArray)
    }
    draw.viewbox(10,8,80,82)
    var dim = determineWidth();
    draw.size(dim,dim)
    //draw.size(500,500)
    //draw.addClass('svgCSS')
    ni = hexsMatrix.length;
    nj = hexsMatrix[0].length; 
    return 1;
}

function hexCoord(a,x,y,rot) {
    var points ="";
    var b
    if (rot == true) {
        b = 0;
    } else {
        b = pi/6;
    }

    for (var i = 0; i<6; i++){

        points = points + (x+a*Math.cos(i*pi/3+b))+","+(y+a*Math.sin(i*pi/3+b))+" "

    }

    return points
}

function determineWidth() {
    var dim = $(window).width();

    if (dim < 576) {
        return dim*0.8;
    }
    else if (dim < 768) {
        return dim*0.7;
    }

    return dim*0.25;


}