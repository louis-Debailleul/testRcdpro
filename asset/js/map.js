    function initMap() {
        const myLatLng = { lat:48.735188, lng:2.3018546 };
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 18,
          center: myLatLng,
        });
      
        new google.maps.Marker({
          position: myLatLng,
          map,
          title: "Hello World!",
        });
      }  
    