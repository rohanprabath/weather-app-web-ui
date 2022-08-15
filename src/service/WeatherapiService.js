import http from "./HTTPService";
const apiUrl = require("../Config").get(process.env.NODE_ENV).apiUrl;

export function getWeatherForecast() {
    const endPoint = apiUrl + "/weatherforecast/";
    return http.get(endPoint);
}
export function geCurrectWeather(countryCode, city) {
    const endPoint = apiUrl + "/api/weatherexplorer/current?CountryCode=" + countryCode + "&City=" + city;
    return http.get(endPoint);
}

