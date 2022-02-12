//variables for getting time, date and information
const changeTime = document.getElementById('time');
const changeDate = document.getElementById('date');
const changeCurrentWeather = document.getElementById('current-weather-items');
const usersTimeZone = document.getElementById('time-zone');
const usersCountry = document.getElementById('country');
const futureForecast = document.getElementById('weather-forecast');
const currentForecast = document.getElementById('current-temp');

//Setting the day and months
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//gives the clock the current time based of your browser
setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursIn12HrFormat = hour >= 13 ? hour % 12 : hour;
    const minutes = time.getMinutes();
    const ampm = hour >= 12 ? 'PM' : 'AM';

    changeTime.innerHTML = `${hoursIn12HrFormat < 10 ? '0' + hoursIn12HrFormat : hoursIn12HrFormat}:${minutes < 10 ? '0' + minutes : minutes} <span id="am-pm">${ampm}</span>`;

    changeDate.innerHTML = `${months[month]} ${date}, ${days[day]}`;

}, 1000);

getGeoLocationData()
//based on your geo location data it will get your weather in your area
function getGeoLocationData() {
    navigator.geolocation.getCurrentPosition((success) => {

        let {latitude, longitude} = success.coords;

        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=imperial&appid=${OPEN_WEATHER_MAP_TOKEN}`).then(res => res.json()).then(data => {

            showWeatherData(data);
        })

    })
}
//function for when you type in the search bar, will display the weather for that specific area of your choosing.
function getWeatherData(coord) {


    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lng}&exclude=hourly,minutely&units=imperial&appid=${OPEN_WEATHER_MAP_TOKEN}`).then(res => res.json()).then(data => {

        showWeatherData(data);
    });
}


function showWeatherData(data) {
    let {humidity, pressure, sunrise, sunset, wind_speed} = data.current;

    usersTimeZone.innerHTML = data.timezone;
    usersCountry.innerHTML = `${data.lat} N ${data.lon} E`

    //language=HTML
    changeCurrentWeather.innerHTML =
        `
                    <div class="weather-info">
                        <div>Humidity</div>
                        <div>${humidity}%</div>
                    </div>
                    <div class="weather-info">
                        <div>Pressure</div>
                        <div>${pressure}</div>
                    </div>
                    <div class="weather-info">
                        <div>Wind Speed</div>
                        <div>${wind_speed} mph</div>
                    </div>
                    <div class="weather-info">
                        <div>Sunrise</div>
                        <div>${window.moment(sunrise * 1000).format('HH:mm a')}</div>
                    </div>
                    <div class="weather-info">
                        <div>Sunset</div>
                        <div>${window.moment(sunset * 1000).format('HH:mm a')}</div>
                    </div>`;

    let otherDayForcast = ''
    data.daily.forEach((day, index) => {
        if (index === 0) {
            //language=HTML
            currentForecast.innerHTML = `
                    <img src="http://openweathermap.org/img/wn//${day.weather[0].icon}@4x.png" alt="weather icon"
                         class="w-icon">
                    <div class="other">
                        <div class="day">${window.moment(day.dt * 1000).format('dddd')}</div>
                        <div class="temperature">Night: ${day.temp.night.toFixed(1)}\u00B0F</div>
                        <div class="temperature">Day: ${day.temp.day.toFixed(1)}\u00B0F</div>
                    </div>`
        } else {
            otherDayForcast += `
            <div class="daily-forecast">
                <div class="day">${window.moment(day.dt * 1000).format('ddd')}</div>
                <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="weather icon" class="w-icon">
                <div class="temperature">Night: ${day.temp.night.toFixed(1)}\u00B0F</div>
                <div class="temperature">Day: ${day.temp.day.toFixed(1)}\u00B0F</div>
            </div>`
        }
    });
    futureForecast.innerHTML = otherDayForcast;
}

mapboxgl.accessToken = MAPBOX_TOKEN;

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 10,
    center: [-95.463600, 29.740700]
});

var marker = new mapboxgl.Marker()
    .setLngLat([-95.463600, 29.740700])
    .addTo(map);

map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    })
);

function onMoveEnd() {
    var coords = map.getCenter();
    getWeatherData(coords);
}

map.on('moveend', onMoveEnd);