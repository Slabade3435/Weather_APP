
let weather = {
    fetchWeather: function(city, temp){
        const accessKey = 'b89eaf6ff3b421082b9f1c48a5187aa4';
        const url = `http://api.weatherstack.com/current?access_key=${accessKey}&query=${city}&units=${temp}`;
    
        fetch(url)
        .then(response=>{return response.json()})
        .then(data=>{console.log(this.displayWeather(data, temp))})
        
    },

    displayWeather: function(data, tempVal){
        const{ name } = data.location;
        const{ weather_icons } = data.current;
        const{ weather_descriptions } = data.current;
        const{ temperature } = data.current;
        const{ humidity } = data.current;
        console.log(name, weather_icons, weather_descriptions, temperature, humidity);
        document.querySelector(".city").innerText = "Weather in " + name;
        if(tempVal == 'm'){
            document.querySelector(".temp").innerText = temperature+" °C";
        }
        else{
            document.querySelector(".temp").innerText = temperature+" °F";
        }
        
        document.querySelector(".icon").src = weather_icons;
        document.querySelector(".description").innerText = weather_descriptions;
        document.querySelector(".humidity").innerText = `Humidity: ${humidity}%`;
        
    },

    search: function(){
        var eleId;
        document.getElementsByName("temperature")
                .forEach(radio=>{
                    if(radio.checked){
                        eleId=radio.id;
                    }
                });

        this.fetchWeather(document.querySelector(".search-bar").value, eleId)
    },
}

document.querySelector(".search").addEventListener("click", function(){
    weather.search();
})
