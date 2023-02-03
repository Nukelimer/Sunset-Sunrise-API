const sunUp = document.querySelector('.sunrise');
const sunset = document.querySelector('.sunset');
const solarNoon = document.querySelector('.solar-noon');
const dayLength = document.querySelector('.day_length');
const civilTwilightStart = document.querySelector('.civil_twilight_begin');
const civilTwilightEnd = document.querySelector('.civil_twilight_end');
const nauticalTwilightStart = document.querySelector(
  '.nautical_twilight_begin'
);
const allList = document.querySelector('.sun');
const nauticalTwilightEnd = document.querySelector('.nautical_twilight_end');
const astronomicalTwilightStart = document.querySelector(
  '.astronomical_twilight_begin'
);
const astronomicalTwilightEnd = document.querySelector(
  '.astronomical_twilight_end'
);
const responseLocation = document.querySelector('.location')
const success = (suc) => {};
const error = (err) => {
  allList.textContent =
    'Error in getting your location, please grant your browser LOCATION permission...';
  allList.classList.add('wobble-hor-bottom');
};

const fetchData = () => {
  fetch(
    `https://api.sunrise-sunset.org/json?lat=${navigator.geolocation.getCurrentPosition(
      success,
      error
    )}&lng=${navigator.geolocation.getCurrentPosition(success, error)})}`
  )
    .then((response) => response.json())
    .then((data) => receivedResponse(data));
};

const fetchLocation = () => {
  fetch('https://ipinfo.io?token=aa9cfda629f2fe')
    .then((response) => response.json())
    .then((data_) => {
      receivedLocation(data_);
    });
};

const receivedLocation = (data_) => {

    if (data_) {
        let network = `${data_['org']}`.substring(7);
        let region = `${data_['country']}`
        let city = `${data_['city']}`
      
    
        responseLocation.textContent = `Your location is ${city},  ${region} and you are using ${network} internet services.`
    } else {
        response.style.display = 'none';
}


}





const receivedResponse = (data, data_) => {
  if (data) {
    sunUp.textContent = `The Sun will be up by: ${data['results']['sunrise']}`;
    sunset.textContent = ` The Sun will be down by : ${data['results']['sunset']}`;
    solarNoon.textContent = ` The Solar Moon will be down by : ${data['results']['solar_noon']}`;
    dayLength.textContent = ` The Length of today is : ${data['results']['day_length']}`;
    civilTwilightStart.textContent = `Today's Civil Twilight commences by : ${data['results']['civil_twilight_begin']}`;
    civilTwilightEnd.textContent = `Today's Civil Twilight end by :  ${data['results']['civil_twilight_end']}`;
    nauticalTwilightStart.textContent = `Today's Nautical Twilight commences by : ${data['results']['nautical_twilight_begin']}`;
    nauticalTwilightEnd.textContent = `Today's Nautical Twilight ends by :  ${data['results']['nautical_twilight_end']}`;
    astronomicalTwilightStart.textContent = `Today's Astronomical Twilight commences by :  ${data['results']['astronomical_twilight_begin']}`;
    astronomicalTwilightEnd.textContent = `Today's Astronomical Twilight ends by :  ${data['results']['astronomical_twilight_end']}`;
  }
};

fetchData();
fetchLocation()