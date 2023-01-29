// your code here
function myFunc() {
	let name = document.getElementById("name").innerText;
	let year = document.getElementById("year").innerText;

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