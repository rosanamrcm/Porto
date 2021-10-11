var backgroundContainer = document.getElementsByClassName("container");
var count = 0;

function carousel(){
	//console.log(backgroundContainer[0].style.color)
	let aux = 2;
	let arrayImages = ["opo.jpg","opo2.jpg","opo3.jpg","opo4.jpg"];
	backgroundContainer[0].style.background = `url('${arrayImages[count]}') no-repeat center center`
	backgroundContainer[0].style.backgroundSize = "cover" 
	console.log(arrayImages);
	count >= 3 ? count = 0 : count ++;

}

setInterval(() => this.carousel(), 7000);