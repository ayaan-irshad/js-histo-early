let root = document.getElementById("root");
let boot = document.getElementById("boot");

let textHolder = "";



async function getData(x) {

let result = await fetch(`https://en.wikipedia.org/api/rest_v1/feed/onthisday/births/12/${x}`).then(response => response.json());

	let data = await result.births;
// 	return data.map(e => {
	
// 	return `<div>${e.text}</div>`;
  
// }).join(" ");
    return `<h1>${data[0].text}</h1>`;

};


// Function for fetching image

async function getImage(text){
    let response =   await fetch(`https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?q=${text}&pageNumber=1&pageSize=1&autoCorrect=true&safeSearch=true`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "a4bb31e2a1mshf2a061b1457527fp1d799bjsn8ce19c4ff635",
		"x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com"
	}
});
   let x = await  response.json();
   let imgSrc = x.value[0].url;
    console.log(x);
    return `<img src="${imgSrc}">`

}
/// LOGIC TO FILL CANVAS
let arr = new Array(29).fill(null);

let x;

for(let i=1;i<arr.length;i++) {
x = 	arr.map((e, i) => {
 return	 `<div id='div${i}'}>${i}</div>`;
  }).join(" ");
 
}

boot.innerHTML = x;


for(let i=0;i<arr.length;i++) {
let sad = i;
document.getElementById(`div${i}`).addEventListener("mouseover", (e) => {
console.log(sad);
(async () => {

let ki = document.getElementById(`div${sad}`);
let fiData = await getData(sad);
textHolder = fiData.slice(4,-5);

let imData = await getImage(textHolder);
ki.innerHTML = fiData + imData;

})();

}
);

document.getElementById(`div${i}`).addEventListener("mouseleave", (e) => {
        (async () => {

        let ki = document.getElementById(`div${sad}`);
        let fiData = await getData(sad);
        ki.innerHTML = `${sad}`;

        })();


        e.target.style.color = "";

});

}
