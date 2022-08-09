function post_success(response) {
let weather_section_result = document.getElementById(`weather_section_result`);
weather_section_result[`innerHTML`]= `
<h2>${response[`data`][`city`][`name`]}</h2>
<div>
<p>Date: ${response[`data`][`list`][0][`dt_txt`]}</p>
<p>Temperature: ${response[`data`][`list`][0][`main`][`temp`]}</p>
<p>Feels like: ${response[`data`][`list`][0][`main`][`feels_like`]}</p>
<p>Max Temperature: ${response[`data`][`list`][0][`main`][`temp_max`]}</p>
<p>Min Temperature: ${response[`data`][`list`][0][`main`][`temp_min`]}</p>
</div>
<hr>

<div>
<p>Date: ${response[`data`][`list`][8][`dt_txt`]}</p>
<p>Temperature: ${response[`data`][`list`][8][`main`][`temp`]}</p>
<p>Feels like: ${response[`data`][`list`][8][`main`][`feels_like`]}</p>
<p>Max Temperature: ${response[`data`][`list`][8][`main`][`temp_max`]}</p>
<p>Min Temperature: ${response[`data`][`list`][8][`main`][`temp_min`]}</p>
</div>
<hr>

<div>
<p>Date: ${response[`data`][`list`][16][`dt_txt`]}</p>
<p>Temperature: ${response[`data`][`list`][16][`main`][`temp`]}</p>
<p>Feels like: ${response[`data`][`list`][16][`main`][`feels_like`]}</p>
<p>Max Temperature: ${response[`data`][`list`][16][`main`][`temp_max`]}</p>
<p>Min Temperature: ${response[`data`][`list`][16][`main`][`temp_min`]}</p>
</div>
<hr>

<div>
<p>Date: ${response[`data`][`list`][24][`dt_txt`]}</p>
<p>Temperature: ${response[`data`][`list`][24][`main`][`temp`]}</p>
<p>Feels like: ${response[`data`][`list`][24][`main`][`feels_like`]}</p>
<p>Max Temperature: ${response[`data`][`list`][24][`main`][`temp_max`]}</p>
<p>Min Temperature: ${response[`data`][`list`][24][`main`][`temp_min`]}</p>
</div>
<hr>

<div>
<p>Date: ${response[`data`][`list`][32][`dt_txt`]}</p>
<p>Temperature: ${response[`data`][`list`][32][`main`][`temp`]}</p>
<p>Feels like: ${response[`data`][`list`][32][`main`][`feels_like`]}</p>
<p>Max Temperature: ${response[`data`][`list`][32][`main`][`temp_max`]}</p>
<p>Min Temperature: ${response[`data`][`list`][32][`main`][`temp_min`]}</p>
</div>
`
}

function post_failure(error) {
  alert(`The name of the city does not exist. Please, type a valid name of city.`)
}

function searchWeather(details) {
  let input_city = document.querySelector(`input`);
  let input_city_value = input_city[`value`];
  /* the launch.json file is working with 5501 port */
  axios
  /* API Key 5278afb02c63a037230d2fc1a5393a70 */
    .request({
      url: `https://api.openweathermap.org/data/2.5/forecast?q=${input_city_value}&appid=5278afb02c63a037230d2fc1a5393a70`,
    })
    .then(post_success)
    .catch(post_failure);
}

let search_button = document.getElementById(`search_button`);
search_button.addEventListener(`click`, searchWeather);