
var change = document.querySelector(".changeColor");
var alpha = [1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
function randomizer(){

	 return Math.floor(Math.random()*alpha.length);
}


change.addEventListener("click",function (){
	var hex = "#"; 
	for(var i=0;i<6;i++){
		hex += alpha[randomizer()];
	}
	document.querySelector("body").style.backgroundColor=hex;
	document.querySelector("p span").innerHTML = hex;
})
