const loadWeather = () => {
    const inputCity = document.getElementById('input-location');
    const cityValue = inputCity.value;
    // console.log(cityValue);

    if (cityValue === '') {
        document.getElementById('validCity').classList.add('d-block');

        document.getElementById('weather-status').classList.add('d-none');
    }
    else {

        document.getElementById('validCity').classList.remove('d-block');



        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=15b741a5834682894c13c96dcafee67e&units=metric`;

        // console.log(url);

        fetch(url)
            .then(res => res.json())
            .then(data => displayData(data));
    }



}

const displayData = (data) => {

    // console.log(data);

    if (data.cod == '404') {
        document.getElementById('validCity').classList.add('d-block');
        document.getElementById('weather-status').classList.add('d-none');
        

    }
    else {


        document.getElementById('validCity').classList.remove('d-block');
        document.getElementById('weather-status').classList.remove('d-none');


        const city = document.getElementById('city');
        city.innerText = data.name;

        nameOfCountry = document.getElementById('countryName');
        nameOfCountry.innerText = data.sys.country;

        const temperature = document.getElementById('temperature');

        temperature.innerText = data.main.temp;
        const info = document.getElementById('weather-info');
        info.innerText = data.weather[0].main;

        //  set icon with url
        const icon = document.getElementById('icon');
        const url = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        icon.setAttribute('src', url);
    }




}


// automatic load

const autoLoadWeather = () => {


    const url = `https://api.openweathermap.org/data/2.5/weather?q=rangpur&appid=15b741a5834682894c13c96dcafee67e&units=metric`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => autoDisplayWeather(data));

}

autoLoadWeather();


const autoDisplayWeather = (data) => {


    const city = document.getElementById('city');
   
    
    city.innerText = data.name;

    nameOfCountry = document.getElementById('countryName');
    nameOfCountry.innerText = data.sys.country;

    const temperature = document.getElementById('temperature');

    temperature.innerText = data.main.temp;
    const info = document.getElementById('weather-info');
    info.innerText = data.weather[0].main;


    //  set icon with url
    const icon = document.getElementById('icon');
    const url = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    icon.setAttribute('src', url);
}


// Geolocation

// navigator.geolocation.getCurrentPosition(function (success) {
//     const lat = success.coords.latitude;
//     const lon = success.coords.longitude;
//     const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0e691a04785362e82a69898c75a60fd3`
//     fetch(url)
//         .then(Response => Response.json())
//         .then(data => {
//             console.log('this',data)
//         });
// })