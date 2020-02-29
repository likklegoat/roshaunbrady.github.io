var curr = 1;
var test;

document.addEventListener("DOMContentLoaded", experience_slides2);

function slideChange2(n){
	curr = n;
	experience_slides2();
}

function experience_slide2(){
	var i;
	var slideList = document.getElementsByClassName("eSlides2");
	var topList = document.getElementsByClassName("nav-exp2");
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
	window.alert(total);
}