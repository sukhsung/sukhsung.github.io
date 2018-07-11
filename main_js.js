function lab2rgb(cie_l,cie_chr,cie_ang) {

    var cie_a = cie_chr * Math.cos(cie_ang);
    var cie_b = cie_chr * Math.sin(cie_ang);

    var xref = 95.047;
	var yref = 100;
	var zref = 108.833;

	var cie_y = ( cie_l + 16 ) / 116;
	var cie_x = cie_a / 500 + cie_y;
	var cie_z = cie_y - cie_b / 200;

	if (Math.pow(cie_y,3) > 0.008856) {
		cie_y = Math.pow(cie_y,3);
	} else {
		cie_y = (cie_y - 16 / 116 ) / 7.787;
	}

	if (Math.pow(cie_x,3) > 0.008856) {
		cie_x = Math.pow(cie_x,3);
	} else {
		cie_x = (cie_x - 16 / 116 ) / 7.787;
	}

	if (Math.pow(cie_z,3) > 0.008856) {
		cie_z = Math.pow(cie_z,3);
	} else {
		cie_z = (cie_z - 16 / 116 ) / 7.787;
	}

	cie_x = cie_x * xref / 100;
	cie_y = cie_y * yref / 100;
	cie_z = cie_z * zref / 100;


	var r = cie_x *  3.2406 + cie_y * -1.5372 + cie_z * -0.4986;
	var g = cie_x * -0.9689 + cie_y *  1.8758 + cie_z *  0.0415;
	var b = cie_x *  0.0557 + cie_y * -0.2040 + cie_z *  1.0570;

	if (r > 0.0031308) {
    	r =  1.055 * Math.pow(r,(1/2.4)) - 0.055;
	} else {
		r = 12.92 * r;
	}	
	if (g > 0.0031308) {
    	g =  1.055 *Math.pow(g,(1/2.4)) - 0.055;
	} else {
		g = 12.92 * g;
	}
	if (b > 0.0031308) {
    	b =  1.055 *Math.pow(b,(1/2.4)) - 0.055;
	} else {
		b = 12.92 * b;
	}

	if (r>1) {
		r = 1;
	} else if (r<0) {
		r = 0;
	}

	if (g>1) {
		g = 1;
	} else if (g<0) {
		g = 0;
	}

	if (b>1) {
		b = 1;
	} else if (b<0) {
		b = 0;
	}

	r = Math.round(r *255);
	g = Math.round(g *255);
	b = Math.round(b *255);

	return "rgb("+ r +","+ g +","+ b +")"
}


$(document).ready(function() {
    var $colLeft = $("#colLeft")
    var $colRight = $("#colRight")
    var $contLeft = $("#contLeft")
    var $contRight = $("#contRight")
    var $navLeft = $("#navLeft")
    var $navRight = $("#navRight")
    var $left = $(".left")
    var $right = $(".right")

    var pi = Math.PI;
    var cie_ang;
    //var cie_ang = Math.random()*2*	pi;
    var randNum = Math.random();

    if (randNum < 0.2) {
    	cie_ang = 0.402;
    } else if (randNum <0.4) {
    	cie_ang = 3.85; 
    } else if (randNum <0.6) {
    	cie_ang = 1.086;
    } else if (randNum <0.8) {
    	cie_ang = 3.38;
    }




   	localStorage.setItem("leftColor",lab2rgb(70,65,cie_ang));
   	localStorage.setItem("rightColor",lab2rgb(70,65,cie_ang+pi));

    $left.css("background-color",localStorage.getItem("leftColor"));
    $right.css("background-color",localStorage.getItem("rightColor"));

    //$contLeft.html(cie_ang);

    //0.402, 3.85 4.78 3.38 1.086



	$($navRight).mouseenter(function() {
      $contLeft.hide();
      $colLeft.removeClass("col-xs-8");
      $colLeft.addClass("col-xs-0");
      $colRight.removeClass("col-xs-0");
      $colRight.addClass("col-xs-8");
      $contRight.show();
	});


	$($navLeft).mouseenter(function() {
      $colLeft.removeClass("col-xs-0");
      $colLeft.addClass("col-xs-8");
      $colRight.removeClass("col-xs-8");
      $colRight.addClass("col-xs-0");
      $contLeft.show();
	});
});
