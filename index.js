var inpForm = document.querySelector(".form-control");
var buttonPrimary = document.querySelector(".button-primary");
var areaName = document.querySelector(".area-name");
var temp = document.querySelector(".temp-value");
var humidityCond = document.querySelector(".humidity-value");
var isDay = document.querySelector(".day-night");
var conditio = document.querySelector(".area-cond");


buttonPrimary.addEventListener("click", f => {
  var cityName = inpForm.value;
  var BASE = "https://api.apixu.com/v1";
  var KEY = "da8c842914024fed88955221192301";
  fetch(`${BASE}/current.json?key=${KEY}&q=${cityName}`)
    .then(response => response.json())
    .then(result => {
      console.log(result);
      areaName.innerHTML = `${result.location.name}`;
      temp.innerHTML = `${result.current.temp_c}`;
      humidityCond.innerHTML = `${result.current.humidity}`;
      isDay.innerHTML = `${result.current.is_day}`;
    });
  inpForm.value = "";
});