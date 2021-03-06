const city = document.getElementById("city-name")
const form = document.getElementById("new-city")

form.addEventListener("submit", event => {
	event.preventDefault()
	let cityName = city.value
	// console.log(cityName)
	

	
fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?q=${cityName}&units=metric`)
    .then(res => res.json())
    .then(data => 
    document.body.innerHTML+=`<div class="temperature-container"><span class="name">${data.name} </span><span class="temp"><br/>${data.main.temp.toFixed(1)}°C</span></div>`
    )
	
	form.reset()
})




    
/**

{
	coord: {
		lon: -111.8911,
		lat: 40.7608
	},
	weather: [{
		id: 803,
		main: "Clouds",
		description: "broken clouds",
		icon: "04d"
	}],
	base: "stations",
	main: {
		temp: 299.87,
		feels_like: 299.22,
		temp_min: 295.22,
		temp_max: 303,
		pressure: 1005,
		humidity: 25
	},
	visibility: 10000,
	wind: {
		speed: 2.24,
		deg: 299,
		gust: 4.92
	},
	clouds: {
		all: 75
	},
	dt: 1621458383,
	sys: {
		type: 2,
		id: 2032870,
		country: "US",
		sunrise: 1621425998,
		sunset: 1621478505
	},
	timezone: -21600,
	id: 5780993,
	name: "Salt Lake City",
	cod: 200
}

 */