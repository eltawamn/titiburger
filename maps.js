function initMap() {
    
    const uluru = { lat: 48.841600, lng: 2.655570};
    
    const map = new google.maps.Map(document.querySelector(".maps"), {
      zoom: 12,
      center: uluru,
    });
    
    //const marker = new google.maps.Marker({
      //position: uluru,
      //map: map,
    //});
  }
  
  window.initMap = initMap;