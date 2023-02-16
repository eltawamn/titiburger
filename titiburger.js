$('.Nosburgers-droite').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });

window.addEventListener("mousemove", (e) => {
  nav.style.setProperty("--x", e.layerX + "px");
});