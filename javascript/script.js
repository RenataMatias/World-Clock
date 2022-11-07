function updateTime() {
  //Paris:
  let parisDateElement = document.querySelector("#paris .date");
  let parisTimeElement = document.querySelector("#paris .time");
  let parisTimeZone = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = parisTimeZone.format("Do MMMM YYYY");
  parisTimeElement.innerHTML = parisTimeZone.format(
    "hh:mm:ss [<small>]A[</small>]"
  );

  //Tokyo:
  let tokyoDateElement = document.querySelector("#tokyo .date");
  let tokyoTimeElement = document.querySelector("#tokyo .time");
  let tokyoTimeZone = moment().tz("Asia/Tokyo");

  tokyoDateElement.innerHTML = tokyoTimeZone.format("Do MMMM YYYY");
  tokyoTimeElement.innerHTML = tokyoTimeZone.format(
    "hh:mm:ss [<small>]A[</small>]"
  );

  //Rome:
  let sydneyDateElement = document.querySelector("#sydney .date");
  let sydneyTimeElement = document.querySelector("#sydney .time");
  let sydneyTimeZone = moment().tz("Australia/Sydney");

  sydneyDateElement.innerHTML = sydneyTimeZone.format("Do MMMM YYYY");
  sydneyTimeElement.innerHTML = sydneyTimeZone.format(
    "hh:mm:ss [<small>]A[</small>]"
  );
}

setInterval(updateTime, 1000);
