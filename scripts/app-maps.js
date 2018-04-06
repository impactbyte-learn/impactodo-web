const map = new GMaps({
  div: "#gmaps",
  lat: -6.2568093,
  lng: 106.8127567
});

map.addMarker({
  lat: -6.2568093,
  lng: 106.8127567,
  title: "Impact Byte Jakarta",
  infoWindow: {
    content: `
      <h3>Visit <a target="_blank" href="https://impactbyte.com">
      impactbyte.com</a></h3>`
  }
});
