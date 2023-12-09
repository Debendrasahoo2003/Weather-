var inputvalue = document.querySelector('#cityinput')
var btn = document.querySelector('#add')
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
apik='25402c79387d82f8086ce9586ab5fb6b'
function convertion(val)
{
    return (val-273).toFixed(3)
}
btn.addEventListener('click',function()
{
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik)
    .then(res=> res.json())
    .then (data =>
    {
        var nameval = data['name']
        var descrip = data['weather']['0']['description']
        var temperature = data['main']['temp']
        var windspeed = data['wind']['speed']


        city.innerHTML= `Weather of <span>${nameval}</span>`
        temp.innerHTML = `Temperature : <span>${ convertion (temperature)} C </span>`
        description.innerHTML= `Wind Speed : <span>${windspeed} km/h </span>`
    })
    .catch(err=> alert('you have entered wrong city name'))
})
