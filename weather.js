let FS = require("fs");
require("dotenv").config();
let BASE_URL =
  "https://api.openweathermap.org/data/2.5/weather?lat=47.37&lon=8.54&units=metric&appid=";

let API_KEY = process.env.API_KEY;
let URL = BASE_URL + API_KEY;

let d = Date(Date.now());

a = d.toString();

async function weather() {
  let Response = await fetch(URL);
  let Data = await Response.json();

  var req = {
    temp: Data.main.temp,
    humidity: Data.main.humidity,
    timestamp: a,
  };

  console.log(req);
  FS.writeFileSync("weathers.json", JSON.stringify(req, null, "\t"));
}

weather();
