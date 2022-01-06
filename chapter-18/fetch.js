const url = "https://eloquentjavascript.net/author";
const types = ["text/plain", "text/html", "application/json", "application/rainbows+unicorns"];

for (let i = 0; i < types.length; i++){
	fetch(url, {headers: {accept: types[i]}})
    .then(console.log(types[i]))
}
