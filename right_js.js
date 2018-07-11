$(document).ready(function() {
    var $left = $(".left")
    var $right = $(".right")

    $left.css("background-color",localStorage.getItem("leftColor"));
    $right.css("background-color",localStorage.getItem("rightColor"));

	// Get the modal
	var modal = document.getElementById('myModal');

	// Get the image and insert it inside the modal - use its "alt" text as a caption
	var img1 = document.getElementById('myImg1');
	var img2 = document.getElementById('myImg2');
	var img3 = document.getElementById('myImg3');
	var img4 = document.getElementById('myImg4');
	var img5 = document.getElementById('myImg5');
	var img6 = document.getElementById('myImg6');

	var modalImg = document.getElementById("img01");

	img1.onclick = function(){
 		modal.style.display = "block";
    	modalImg.src = this.src;
	}

	img2.onclick = function(){
 		modal.style.display = "block";
    	modalImg.src = this.src;
	}

	img3.onclick = function(){
 		modal.style.display = "block";
    	modalImg.src = this.src;
	}

	img4.onclick = function(){
 		modal.style.display = "block";
    	modalImg.src = this.src;
	}

	img5.onclick = function(){
 		modal.style.display = "block";
    	modalImg.src = this.src;
	}

	img6.onclick = function(){
 		modal.style.display = "block";
    	modalImg.src = this.src;
	}




	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() { 
  	modal.style.display = "none";
	}

});

