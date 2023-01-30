// your code here
let name = document.getElementById("name").value;
let year = document.getElementById("year").value;
function myFunc() {
	let prev = document.getElementById("url").innerText;
	if(name != "" && year != "") {
		let newUrl = document.getElementById("url");
		newUrl.innerText = prev + `?name=${name}&${year}`;
	}
	else if(name != "") {
		let newUrl = document.getElementById("url");
		newUrl.innerText = prev + `?name=${name}`;
	}
	else {
		let newUrl = document.getElementById("url");
		newUrl.innerText = prev + `?${year}`;
	}
}