import http from "./HTTPService";
const apiUrl = require("../Config").get(process.env.NODE_ENV).apiUrl;

export function getFahrentheitValue(celsiusValue) {

    const endPoint = apiUrl + "/api/TemperatureConversion/getFahrenheit/" + celsiusValue;
    return http.get(endPoint);
}

export function getCelsiusValue(fahrentheitValue) {
    const endPoint = apiUrl + "/api/TemperatureConversion/getCelsius/" + fahrentheitValue;
    return http.get(endPoint);
}
