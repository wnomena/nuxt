<template>
 <div ref="container" class="keen-slider">
    <div class="keen-slider__slide number-slide1 border">
        <img  class="col-12" src="./some-image-inset/vecteezy_cameleon_copy.jpg" alt="">
    </div>
    <div class="keen-slider__slide number-slide2">
        <img  class="col-12" src="./some-image-inset/vecteezy_lemur.jpg" alt="">
    </div>
    <div class="keen-slider__slide number-slide3">
        <img  class="col-12" src="./some-image-inset/vecteezy_black-lemur.jpg" alt="">
    </div>
    <div class="keen-slider__slide number-slide4">
        <img  class="col-12" src="./some-image-inset/couche_soleil_baobab.jpg" alt="">
    </div>
    <div class="keen-slider__slide number-slide5">
        <img  class="col-12" src="./some-image-inset/baobab_lena copy.jpg" alt="">
    </div>
    <div class="keen-slider__slide number-slide6">
        <img  class="col-12" src="./some-image-inset/capsM.jpeg" alt="">
    </div>
  </div>
</template>

<script>
import { useKeenSlider } from 'keen-slider/vue.es'
import 'keen-slider/keen-slider.min.css'


export default {
  setup(){
    const [container] = useKeenSlider({
      slides: {
        perView: 2,
      },
    })
    return { container }
  }
}
</script>

<style scoped>
body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
[class^="number-slide"],
[class*=" number-slide"] {
  background: grey;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  color: #fff;
  font-weight: 500;
  height: 300px;
  max-height: 100vh;
}
img {height: 100%;}
</style>
