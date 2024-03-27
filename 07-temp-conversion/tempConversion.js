function convertToCelsius(temprature){
    let celsius = (Math.round((5/9) * (temprature - 32) * 10))/10;
    return celsius;
}

function convertToFahrenheit(temprature){
    let fahrenheit = Math.round(((temprature * 9) / 5 + 32) * 10) / 10;;
    return fahrenheit;
}

module.exports = {
    convertToCelsius,
    convertToFahrenheit
};