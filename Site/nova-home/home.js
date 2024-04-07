const myCarouselElement = document.querySelector('#carouselExampleAutoplaying')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 100,
  touch: false
})
carousel.addEventListener('slide.bs.carousel', event => {
    console.log('oi')
  })