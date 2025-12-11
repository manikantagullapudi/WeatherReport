function getData(){
    let input=document.getElementById("input")
    showWeather(input.value)
}
async function showWeather(city){
const url = `https://open-weather13.p.rapidapi.com/city?city=${city}&lang=EN`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '7c5c889db7msh6fc47232c61074cp1d5fb5jsn03bef5295133',
		'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
	}
};
try {
	const response = await fetch(url, options);
    if(!response.ok){
        throw new Error("Something Happend ")
    }
	const result = await response.json();
	getWeather(result)
} catch (error) {
	console.log(error);
}
}
function getWeather(data){
    let div=document.getElementById("main")
    div.innerHTML=data.main.temp;
}

