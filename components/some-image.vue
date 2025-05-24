<template>
 <div ref="container" class="keen-slider pt-0 pb-0">
    <div class="keen-slider__slide number-slide1 border">
      <div class="col-12 d-block m-0 p-0">
            <img  class="col-12" src="./some-image-inset/IMG_20230923_094118_767.jpg" alt=""> 
            <div class="col-12 bg-success m-0 p-0">
              <h3 class="fw-bold text-center">{{ array[0].title  }}</h3>
              <div class="col-12 text-center">{{ array[0].content }}</div>
            </div>
      </div>
    </div>
        <div class="keen-slider__slide number-slide1 border">
      <div class="col-12 d-block m-0 p-0">
        <img  class="col-12" src="./some-image-inset/vecteezy_ring-tailed-.jpg" alt="">
            <div class="col-12 bg-success m-0 p-0">
              <h3 class="fw-bold text-center">{{ array[1].title  }}</h3>
              <div class="col-12 text-center">{{ array[1].content }}</div>
            </div>
      </div>
    </div>
        <div class="keen-slider__slide number-slide1 border">
      <div class="col-12 d-block m-0 p-0">
        <img  class="col-12" src="./some-image-inset/vecteezy_black-lemur.jpg" alt="">
            <div class="col-12 bg-success m-0 p-0">
              <h3 class="fw-bold text-center">{{ array[2].title  }}</h3>
              <div class="col-12 text-center">{{ array[2].content }}</div>
            </div>
      </div>
    </div>
        <div class="keen-slider__slide number-slide1 border">
      <div class="col-12 d-block m-0 p-0">
        <img  class="col-12" src="./some-image-inset/IMG_20230923_142926_953.jpg" alt="">
            <div class="col-12 bg-success m-0 p-0">
              <h3 class="fw-bold text-center">{{ array[3].title  }}</h3>
              <div class="col-12 text-center">{{ array[3].content }}</div>
            </div>
      </div>
    </div>
        <div class="keen-slider__slide number-slide1 border">
      <div class="col-12 d-block m-0 p-0">
        <img  class="col-12" src="./some-image-inset/baobab_lena copy.jpg" alt="">
            <div class="col-12 bg-success m-0 p-0">
              <h3 class="fw-bold text-center">{{ array[4].title  }}</h3>
              <div class="col-12 text-center">{{ array[4].content }}</div>
            </div>
      </div>
    </div>
        <div class="keen-slider__slide number-slide1 border">
      <div class="col-12 d-block m-0 p-0">
        <img  class="col-12" src="./some-image-inset/capsM.jpeg" alt="">
            <div class="col-12 bg-success m-0 p-0">
              <h3 class="fw-bold text-center">{{ array[6].title  }}</h3>
             <div class="col-12 text-center">{{ array[6].content }}</div>
            </div>
      </div>
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
    const array = [
                {title : "Safety First:" ,content : "We prioritize the safety of our travelers at every step of their adventure. Our tours are carefully planned to minimize risks and provide a worry-free experience.",image : "/some-image-inset/vecteezy_cameleon_copy.jpg"},
                {title : "Local Expertise: " ,content : " With years of on-the-ground experience, our team knows Madagascar inside and out. Our local guides are passionate experts who will help you discover hidden treasures and share the island's secrets with you."},
                {title : "Personalized Journeys: " ,content : " Every traveler is unique, and we believe every adventure should be too. We offer tailor-made tours that are adapted to your desires and pace, ensuring a truly unforgettable experience."},
                {title : "Environmental Respect: " ,content : "By choosing our agency, you are opting for responsible tourism. We are committed to protecting the environment and promoting sustainable practices that benefit both nature and local communities."},
                {title : "Safety First:" ,content : "We prioritize the safety of our travelers at every step of their adventure. Our tours are carefully planned to minimize risks and provide a worry-free experience.",image : "/some-image-inset/vecteezy_cameleon_copy.jpg"},
                {title : "Local Expertise: " ,content : " With years of on-the-ground experience, our team knows Madagascar inside and out. Our local guides are passionate experts who will help you discover hidden treasures and share the island's secrets with you."},
                {title : "Personalized Journeys: " ,content : " Every traveler is unique, and we believe every adventure should be too. We offer tailor-made tours that are adapted to your desires and pace, ensuring a truly unforgettable experience."}
    ]
    return { container,array }
  }
}
</script>

<style scoped>
  .keen-slider {
    overflow: hidden;
    outline: none;
    border-radius: 10px;
    padding: 0;
  }
 .keen-slider .number-slide1 {
  height: 300px;
 }
.keen-slider .number-slide1 .col-12 {
    height: 200%;
    font-weight: bold;
    transition: 0.5s;
    }
.keen-slider .number-slide1:hover > .col-12 {
  transform: translateY(-50%);
  transition: 0.5s;
}
.keen-slider .number-slide1 .col-12 .col-12 {
  height: 50%;
}
</style>
