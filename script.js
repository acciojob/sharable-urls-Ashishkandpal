// your code here
function myFunc() {
        	let name = document.getElementById("name").value;
			let year = document.getElementById("year").value;
        
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