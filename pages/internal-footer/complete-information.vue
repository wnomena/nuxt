<template>
  <section class="row m-1 p-1">
    <div  class="col-12 large-text">
        <div  class="row d-flex flex-lg-row-reverse flex-md-row-reverse flex-row">
            <div class="col-lg-4 col-md-4 col-12 ps-2  border rounded">
                <div class="col-12 m-1">
                    <i class="bi bi-geo-alt-fill"> distance to be covered : {{ reference.value_to_show.distance }} Km</i>
                </div>
                <div class="col-12 m-1">
                    <i class="bi bi-clock-fill"> total duration : {{ reference.value_to_show.sejour_delay.toString()[0] }} Days - {{ reference.value_to_show.sejour_delay.toString()[2] }} Night</i>
                </div>
                <div class="col-12 m-1">
                    <i class="bi bi-calendar-plus"> Period : {{ period_function(reference.value_to_show.period) }}</i>
                </div>
                <div class="col-12 m-1">
                    <i class="bi bi-graph-up-arrow"> difficulty : <progress class="pt-2" id="file" max="100" :value="reference.value_to_show.difficulty">yujfgy</progress>
                    </i>
                </div>
                <div class="col-12 m-1">
                    <i class="bi bi-body-text"> Confort : <progress class="pt-2" id="file" max="100" :value="reference.value_to_show.confort">yujfgy</progress>
                    </i>
                </div>
                <div class="col-12 mt-4 mb-2 fs-3">
                    <i class="bi bi-wallet"> From {{ reference.value_to_show.price }} <i class="bi bi-currency-euro"></i></i>
                </div>
            </div>
            <div class="col-lg-8 col-md-8 col-12">
                <h2>{{ reference.value_to_show.name }}</h2>
                <div class="col-12">{{reference.value_to_show.description}}</div>
            </div>
        </div>
    </div>
    <div class="col-12 bg-transparent">
        <h3 class="text-decoration-underline text-green text-success">ITINERARY</h3>
        <p>Here is a copy of the route <i class="bi bi-car-front-fill"></i></p>
        <div class="col-12 d-flex justify-content-center gap-2">
            <NuxtImg :src="reference.value_to_show.presentation_image" class="col-3 border rounded"/>
            <NuxtImg :src="reference.value_to_show.carte" class="col-3 border rounded"/>
        </div>
        <div class="col-12 d-flex justify-content-center">
            <div class="col-9 border">
                <img src="" alt="" srcset="">
                <div class="col-12">
                        <h3 class="text-decoration text-center">All other completary information</h3>
                        <div class="col-12 d-flex justify-content-center">
                            <p class="col-8 text-center" > To better organize your trip, we invite you to contact us using the following contact methods    </p>
                        </div>
                        <div class="bg d-flex justify-content-center gap-2 mb-1">
                            <div class="bg-primary d-none d-lg-block"><i class="bi bi-telephone-fill"> +261 38 57 589 64</i></div>
                            <div class="bg-primary d-none d-lg-block"><i class="bi bi-envelope-at-fill">contact@caponmada.com</i></div>

                        </div>
                    </div>
                </div>
            </div>
    </div>
    <loading-component v-if="loading"/>
</section>
</template>
<script lang="ts" setup>
import { NuxtImg } from '#components';
import { forceInt, navigate, period_function } from '~/all_model/fonction-classique';
import type { child_road_list } from '~/all_model/model';
import { HttpService } from '~/server/fetch-class/fetch';
let loading:Ref<boolean> = ref(true)
    const router = useRoute()
    let reference : Ref<{value_to_show : child_road_list}> = ref({
        value_to_show : {id : 0,name : "",description : "", price : 0, distance : 0,difficulty : 0,like_by_membes : [], sejour_delay : "", period : "", presentation_image : "",parent_id : 0, confort : 0,carte : ""}
    })

    onMounted(async () => {
        console.log(`router.query.name : ${router.query.id}`)
        if(router.query.id) await HttpService.getChild(forceInt(router.query.id?.toString())).then((res) => {
            console.log(res)
            reference.value.value_to_show = res.data.data[0]
        }).finally(function() {
            loading.value = false
        })
        else navigate("/",{})
    })
</script>
<style scoped>
.row {
    overflow-y: scroll;
}
.row .col-12 .row .col-lg-4 {
    box-shadow: 5px 5px 10px gray;
}
.row .col-12 .row .col-lg-4 .col-12 {
    font-weight: bold;
    font-size: large;
    font-family: 'Gill Sans', 'Gill Sans MT',"Calibri", 'Trebuchet MS', sans-serif
}
/* .row .col-12 .row .col-lg-4 .col-12 .bi progress {
    background-color: transparent;
    border-radius: 10px;
    height: 20px;
}
progress[value] {
    color: red;
} */
.row .bg-transparent {
    border-top: 1px solid black;
    margin-top: 30px;
}
.row .bg-transparent p i {
    color : red;
}
.row .bg-transparent .col-12 .col-9 .col-12 .bg .bg-primary {
    padding: 5px 15px;
    border-radius: 15px;
    font-weight: bold;
    cursor: pointer;
}
@keyframes change_color {
    
}
</style>