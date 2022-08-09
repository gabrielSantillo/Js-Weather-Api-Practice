function post_success(response) {
  let temperature = Math.round(`${response[`data`][`main`][`temp`]}` - 273.15);
  let max_temperature = Math.round(
    `${response[`data`][`main`][`temp_max`]}` - 273.15
  );
  let min_temperature = Math.round(
    `${response[`data`][`main`][`temp_min`]}` - 273.15
  );
  let feels_like = Math.round(
    `${response[`data`][`main`][`feels_like`]}` - 273.15
  );

  let weather_section_result = document.getElementById(
    `weather_section_result`
  );
  weather_section_result[`innerHTML`] = `
  <h2>${response[`data`][`name`]}</h2>
  <p>Temperature: ${temperature}°C</p>
  <p>Max Temperature: ${max_temperature}°C</p>
  <p>Min Temperature: ${min_temperature}°C</p>
  <p>Feels Like: ${feels_like}°C</p>
  <hr>
  `;

  let input_city = document.querySelector(`input`);
  let input_city_value = input_city[`value`];
  axios
    /* API Key 5278afb02c63a037230d2fc1a5393a70 */
    .request({
      url: `https://api.openweathermap.org/data/2.5/forecast?q=${input_city_value}&appid=5278afb02c63a037230d2fc1a5393a70`,
    })
    .then(post_success_forecast)
    .catch(post_failure_forecast);
}

function post_failure(error) {
  alert(
    `The name of the city does not exist. Please, type a valid name of city.`
  );
}

function post_success_forecast(response) {
  let weather_section_forecast = document.getElementById(
    `weather_section_forecast`
  );
  for (let i = 8; i < response[`data`][`list`].length; i = i + 8) {
    let date = `${response[`data`][`list`][i][`dt_txt`]}`;
    function newDate(date) {
      let newDate = new Date(date);

      let week_day = `${newDate.getDay()}`;

      switch (week_day) {
        case `0`:
          week_day = `Sunday`;
          break;

        case `1`:
          week_day = `Monday`;
          break;

        case `2`:
          week_day = `Tuesday`;
          break;

        case `3`:
          week_day = `Wednesday`;
          break;

        case `4`:
          week_day = `Thursday`;
          break;

        case `5`:
          week_day = `Friday`;
          break;

        case `6`:
          week_day = `Saturday`;
          break;
      }

      return `${week_day} - ${
        newDate.getMonth() + 1
      }/${newDate.getDate()}/${newDate.getFullYear()}`;
    }

    let temperature = Math.round(
      `${response[`data`][`list`][i][`main`][`temp`]}` - 273.15
    );
    let max_temperature = Math.round(
      `${response[`data`][`list`][i][`main`][`temp_max`]}` - 273.15
    );
    let min_temperature = Math.round(
      `${response[`data`][`list`][i][`main`][`temp_min`]}` - 273.15
    );
    let feels_like = Math.round(
      `${response[`data`][`list`][i][`main`][`feels_like`]}` - 273.15
    );

    weather_section_forecast[`innerHTML`] += `
<div class="forecast_card">
<p>Date: ${newDate(date)}</p>
<p>Temperature: ${temperature}°C</p>
<p>Max Temperature: ${max_temperature}°C</p>
<p>Min Temperature: ${min_temperature}°C</p>
<p>Feels like: ${feels_like}°C</p>
</div>
<hr>`;
  }
}

function post_failure_forecast(error) {
  alert(
    `The name of the city does not exist. Please, type a valid name of city.`
  );
}

function search_weather(details) {
  let input_city = document.querySelector(`input`);
  let input_city_value = input_city[`value`];
  /* the launch.json file is working with 5501 port */
  axios
    /* API Key 5278afb02c63a037230d2fc1a5393a70 */
    .request({
      url: `https://api.openweathermap.org/data/2.5/weather?q=${input_city_value}&appid=5278afb02c63a037230d2fc1a5393a70`,
    })
    .then(post_success)
    .catch(post_failure);
}

let search_button = document.getElementById(`search_button`);
search_button.addEventListener(`click`, search_weather);
/** 
function search_weather_forecast(details) {
  axios
/* API Key 5278afb02c63a037230d2fc1a5393a70 
  .request({
    url: `https://api.openweathermap.org/data/2.5/forecast?q=${input_city_value}&appid=5278afb02c63a037230d2fc1a5393a70`,
  })
  .then(post_success_forecast)
  .catch(post_failure_forecast);
}*/
