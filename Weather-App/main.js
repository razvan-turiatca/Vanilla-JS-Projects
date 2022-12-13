const input = document.getElementById('input')

const form = document.getElementById('form')
const temperature = document.querySelector('.temperature')
const feelsLike = document.querySelector('.feels-like')
const secondaryContainer = document.querySelector('.secondary-info')
const wind = document.querySelector('.wind')
const humid = document.querySelector('.humidity')
const city = document.querySelector('.location')
form.addEventListener('submit', submitForm)

const fetchingData = async (cb) => {
  let res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=50f5fce0632d826ec7e4875d23c17ac1&units=metric`,
  )
  const data = await res.json()
  cb(data)
}

const createEl = (type, parent, val) => {
  const el = document.createElement(type)
  parent.append(el)
  el.innerHTML = val
  return el
}

const render = (data) => {
  const {
    main: { temp, humidity, feels_like },
    wind: { speed },
    sys: { country },
    name,
  } = data
  console.log(data.weather[0].icon)
  temperature.textContent = `${temp} C`
  feelsLike.textContent = `Feels: ${feels_like} C`
  wind.textContent = `Wind speed: ${speed} km/h`
  humid.textContent = `Humidity: ${humidity}`
  city.textContent = `${name}, ${country}`

  // secondaryContainer.innerHTML = `${speed} km/h`
}

function submitForm(e) {
  e.preventDefault()

  if (input.value) {
    fetchingData(render)
  }
}

// fetchingData(url, render)
