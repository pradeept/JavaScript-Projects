var reviews = [
{
	name:"Angela",
	job:"Web Developer",
	img: "Images/angela.jpg",
	text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis."
},

{
	name:"Tim",
	job:"UI/UX Designer",
	img:"Images/image2.jpeg",
	text:"Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis."
},
{
	name:"Arthur",
	job:"Web Designer",
	img:"Images/Arhur.jpg",
	text:"Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat."
}
];

const img = document.querySelector(".profile-pic");
const name = document.querySelector(".name");
const job = document.querySelector(".job");
const text = document.querySelector(".description");

var currentItem = 0;

window.addEventListener("DOMContentLoaded", function (){
	elementSet(currentItem);
});

document.querySelector(".next").addEventListener("click",function () {

		currentItem ++;

		if(currentItem > 2){
			currentItem = 0;
		}

		elementSet(currentItem);
});

document.querySelector(".prev").addEventListener("click", function () {
		currentItem --;

		if(currentItem < 0){
			currentItem = 2;
		}

		elementSet(currentItem);
})

function elementSet(currentItem){
	let cur = reviews[currentItem];
		img.src = cur.img;
		name.textContent = cur.name;
		job.textContent = cur.job;
		text.textContent = cur.text;
}