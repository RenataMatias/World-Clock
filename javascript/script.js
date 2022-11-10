function updateTime() {
  //Paris:
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = document.querySelector("#paris .date");
    let parisTimeElement = document.querySelector("#paris .time");
    let parisTimeZone = moment().tz("Europe/Paris");

    parisDateElement.innerHTML = parisTimeZone.format("Do MMMM YYYY");
    parisTimeElement.innerHTML = parisTimeZone.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  }

  //Tokyo:
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = document.querySelector("#tokyo .date");
    let tokyoTimeElement = document.querySelector("#tokyo .time");
    let tokyoTimeZone = moment().tz("Asia/Tokyo");

    tokyoDateElement.innerHTML = tokyoTimeZone.format("Do MMMM YYYY");
    tokyoTimeElement.innerHTML = tokyoTimeZone.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  }

  //Rome:
  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyDateElement = document.querySelector("#sydney .date");
    let sydneyTimeElement = document.querySelector("#sydney .time");
    let sydneyTimeZone = moment().tz("Australia/Sydney");

    sydneyDateElement.innerHTML = sydneyTimeZone.format("Do MMMM YYYY");
    sydneyTimeElement.innerHTML = sydneyTimeZone.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  }
}

function SelectCity(citySelected) {
  let citySelectedName = citySelected.replace("_", " ").split("/")[1];
  let citySelectedTimeZone = moment().tz(citySelected);
  displayCityElement.innerHTML = `
        <div class="cities">
          <div>
            <h2>${citySelectedName}</h2>
            <div class="date">${citySelectedTimeZone.format(
              "Do MMMM YYYY"
            )}</div>
          </div>
          <div class="time">${citySelectedTimeZone.format(
            "hh:mm:ss [<small>]A[</small>]"
          )}</div>
        </div>
        <a href="/">All cities</a>`;
}

function searchCity(event) {
  if (event.target.value.length > 0) {
    let citySelected = event.target.value;
    SelectCity(citySelected);
  }
}

function CurrentLocation() {
  let citySelected = moment.tz.guess();
  SelectCity(citySelected);
}

let displayCityElement = document.querySelector(".displayCity");
let searchCityElement = document.querySelector(".citiesSelect");
searchCityElement.addEventListener("change", searchCity);

setInterval(updateTime, 1000);

let buttonSelect = document.querySelector("button");
buttonSelect.addEventListener("click", CurrentLocation);
