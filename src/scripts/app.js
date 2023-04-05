const all_categories = document.querySelector("#all-categories");
const print = document.querySelector("#print");
const identity = document.querySelector("#identity");
const branding = document.querySelector("#branding");
const web = document.querySelector("#web");

const allPictures = document.querySelectorAll(".box");
const printPictures = document.querySelectorAll(".print");
const identityPictures = document.querySelectorAll(".identity");
const brandingPictures = document.querySelectorAll(".branding");
const webPictures = document.querySelectorAll(".web");

const dashes = document.querySelectorAll(".portfolio li .dash");

function hideAll() {
	allPictures.forEach((picture) => {
		picture.style.display = "none";
	});

	dashes.forEach((dash) => {
		dash.style.visibility = "hidden";
	});
}

function customAddEventListener(buttonName, picturesArray) {
	buttonName.addEventListener("click", () => {
		hideAll();
		picturesArray.forEach((picture) => {
			picture.style.display = "unset";
		});

		document.querySelector(
			".portfolio #" + buttonName.id + " .dash"
		).style.visibility = "visible";
	});
}

customAddEventListener(print, printPictures);
customAddEventListener(identity, identityPictures);
customAddEventListener(branding, brandingPictures);
customAddEventListener(web, webPictures);

all_categories.addEventListener("click", () => {
	allPictures.forEach((picture) => {
		picture.style.display = "unset";
	});
	dashes.forEach((dash) => {
		dash.style.visibility = "hidden";
	});
	document.querySelector(".portfolio #all-categories .dash").style.visibility =
		"visible";
});
