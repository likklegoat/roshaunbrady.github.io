var curr = 1;
var test;

document.addEventListener("DOMContentLoaded", experience_slides);

function slideNum(n){
	curr += n;
	experience_slides();
}
function slideChange(n){
	curr = n;
	experience_slides();
}

function experience_slides(){
	var i;
	var slideList = document.getElementsByClassName("eSlides");
	var topList = document.getElementsByClassName("nav-exp");
	var total = slideList.length;

	if (curr > total) {curr = 1;}
	if (curr < 1) {curr = total;}

	var	c = curr - 1;
	test = c;

	for (i = 0; i < total; i++){
		if (i == c){
			slideList[i].style.display = 'block';
			test = 145
		}
		else {
			slideList[i].style.display = 'none';
		}
	}
}