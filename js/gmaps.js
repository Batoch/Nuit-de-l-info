function google_maps() {
  navigator.geolocation.getCurrentPosition(success, error);

  function success(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    let url = "https://maps.google.com/maps?q=" + latitude + "," + longitude + "&t=&z=13&ie=UTF8&iwloc=&output=embed"
    let iframe = document.getElementById('gmap_canvas');
    iframe.src = url;
  }

  function error() {
    location.innerHTML = "Unable to retrieve your location";
  }

  location.innerHTML = "Locating...";

}

google_maps()
