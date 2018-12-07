function weather() {
  let location = document.getElementById("location")
  let apiKey = "87511bcd176e0ee1f87e97f32fa53beb"
  let url = "api.openweathermap.org"

  navigator.geolocation.getCurrentPosition(success, error);

  function success(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    location.innerHTML =
      "Latitude is " + latitude + "° Longitude is " + longitude + "°";

    $.getJSON(
      url + "/data/2.5/weather?" + "lat=" + latitude + "&" + "long=" + longitude + "&APPID=" + apiKey,
      function(data) {
        $("#temp").html(data.main.temp + "° F");
      }
    );
  }

  function error() {
    location.innerHTML = "Unable to retrieve your location";
  }

  location.innerHTML = "Locating...";
}
