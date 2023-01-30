// your code here
let name = document.getElementById("name").value;
let year = document.getElementById("year").value;
function myFunc() {
	console.log("i m inside");
	if(name != "" && year != "") {
		let newUrl = document.getElementById("url");
		newUrl.innerText = newUrl.innerText + `?name=${name}&${year}`;
	}
	else if(name != "") {
		let newUrl = document.getElementById("url");
		newUrl.innerText = newUrl.innerText + `?name=${name}`;
	}
	else {
		let newUrl = document.getElementById("url");
		newUrl.innerText = newUrl.innerText + `?${year}`;
	}
}