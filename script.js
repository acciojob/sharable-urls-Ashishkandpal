// your code here
let name = document.getElementById("name").value;
let year = document.getElementById("year").value;
function myFunc() {
	if(name != "" && year != "") {
		let newUrl = document.getElementById("url").innerText;
		newUrl.innerText = newUrl + `?name=${name}&${year}`;
	}
	else if(name != "") {
		let newUrl = document.getElementById("url").innerText;
		newUrl.innerText = newUrl + `?name=${name}`;
	}
	else {
		let newUrl = document.getElementById("url").innerText;
		newUrl.innerText = newUrl + `?${year}`;
	}
}