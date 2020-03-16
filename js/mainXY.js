const pi = Math.PI;

const colUp = '#f06';
const colDn = '#60f';

function runIsing() {

    var returnArray = drawHexagon();
    var hexsMatrix = returnArray[0];
    var spinMatrix = returnArray[1];
    var drawMatrix = returnArray[2];

    var ni = hexsMatrix.length;
    var nj = hexsMatrix[0].length; 


    var cur_i = [];
    var cur_j = [];


        cur_i = Math.round(30*Math.random())+1
        cur_j = Math.round(30*Math.random()) +1  

        spinMatrix[cur_i][cur_j] = 1
        spinMatrix[cur_i+1][cur_j] = 1
        spinMatrix[cur_i-1][cur_j] = 1
        spinMatrix[cur_i-1][cur_j+1] = 1
        spinMatrix[cur_i][cur_j+1] = 1
        spinMatrix[cur_i+1][cur_j-1] = 1
        spinMatrix[cur_i][cur_j-1] = 1
        setInterval(function(){reDraw(hexsMatrix,spinMatrix,ni,nj,drawMatrix)},100)


}


function reDraw(hexsMatrix,spinMatrix,ni,nj,drawMatrix){
    console.log('hi')
    for (var i =0; i <ni;i++){
        for (var j =0; j <nj; j++){
            if (drawMatrix[i][j] ==1) {
                if (Math.round(Math.random()) ==1) {
                    hexsMatrix[i][j].fill(colUp)
                }
                else{
                    hexsMatrix[i][j].fill(colDn)
                }
    

            }
        }
    }
}

function drawHexagon(){
    var draw = SVG().addTo('#svgDiv').size('100px', '100px')

    var hexs = [];
    var hexsMatrix=[];
    var spinMatrix=[];
    var drawMatrix=[];
    var a = 3;
    var rmax2 = 1600;
    var verts = hexCoord(a*0.5, 0,0,false);
    for (i = 0; i < 33; i++) {
        var hexsArray = [];
        var spinArray = [];
        var drawArray = [];
        for (j = 0; j<33; j++){
            
            x = a*(i + j*0.5)-25 ;
            y = a*(j*Math.sqrt(3)/2)+8;

            r2 = (x-50)*(x-50) + (y-50)*(y-50);

            if (Math.random() < -0.5){
                hexs = draw.polygon(verts).fill(colUp)
                spinArray.push(1);
            }
            else {
                hexs = draw.polygon(verts).fill(colDn)
                spinArray.push(0);

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
    draw.viewbox(0,0,100,100)
    draw.size(500,500)


    return ([hexsMatrix,spinMatrix,drawMatrix]);
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