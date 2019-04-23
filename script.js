
/////////////////WSC//////////////////////////

//stores marker as variable
var wsc = document.getElementById("wsc");
var _wsc = document.getElementById("_wsc")
//stores event function
var onBuildingClick = function() {
	document.getElementById("_wsc").classList.remove("_card");
	document.getElementById("_wsc").classList.add("card");
	document.getElementById("_wsc").innerHTML = "This is the Wilk!";
	//img functionality
	//form
	var wscimgform = document.createElement("form");
	var wscimginput = document.createElement("input");
	wscimginput.setAttribute("id", "wscimginput");
	wscimginput.setAttribute("type", "file");
	wscimginput.setAttribute("accept", "image/*");
	wscimginput.addEventListener("change", showImage);

	wscimgform.appendChild(wscimginput);

	//img
	var wscimg = document.createElement("img");
	wscimg.setAttribute("id", "wscimg")
	wscimg.setAttribute("position", "absolute");
	wscimg.setAttribute("height", "80%");
	wscimg.setAttribute("top", "20%");

	_wsc.appendChild(wscimg);

	//display img
	function showImage(ev) {
		if (ev.target.files && ev.target.files[0]) {
			var readImage = new FileReader();
			readImage.onload = function (e) {
				document.getElementById("wscimg").setAttribute("src", e.target.result);
			}
			readImage.readAsDataURL(ev.target.files[0]);
		}
	}
}
//adds event listener to marker
wsc.addEventListener("click", onBuildingClick);
//stores compass as a variable
var compass = document.getElementById("compass_img");
//stores event function
var onCompassClick = function() {
	document.getElementById("_wsc").classList.remove("card");
	document.getElementById("_wsc").classList.add("_card");
	document.getElementById("_wsc").innerHTML = "";
}
//adds event listener to compass
compass.addEventListener("click", onCompassClick);

//////////////////////////////HBLL//////////////////////

//stores marker as variable
var hbll = document.getElementById("hbll");
//stores event function
var onBuildingClick = function() {
	document.getElementById("_hbll").classList.remove("_card");
	document.getElementById("_hbll").classList.add("card");
	document.getElementById("_hbll").innerHTML = "This is the Library!";
}
//adds event listener to marker
hbll.addEventListener("click", onBuildingClick);
//stores compass as a variable
var compass = document.getElementById("compass_img");
//stores event function
var onCompassClick = function() {
	document.getElementById("_hbll").classList.remove("card");
	document.getElementById("_hbll").classList.add("_card");
	document.getElementById("_hbll").innerHTML = "";
}
//adds event listener to compass
compass.addEventListener("click", onCompassClick);

//////////////////////////////HFAC//////////////////////

//stores marker as variable
var hfac = document.getElementById("hfac");
//stores event function
var onBuildingClick = function() {
	document.getElementById("_hfac").classList.remove("_card");
	document.getElementById("_hfac").classList.add("card");
	document.getElementById("_hfac").innerHTML = "This is the HFAC!";
}
//adds event listener to marker
hfac.addEventListener("click", onBuildingClick);
//stores compass as a variable
var compass = document.getElementById("compass_img");
//stores event function
var onCompassClick = function() {
	document.getElementById("_hfac").classList.remove("card");
	document.getElementById("_hfac").classList.add("_card");
	document.getElementById("_hfac").innerHTML = "";
}
//adds event listener to compass
compass.addEventListener("click", onCompassClick);
