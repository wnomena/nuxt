<template>
  <section class="row m-1 p-1">
    <div class="col-12 large-text">
        <div v-for="i in reference.value_to_show" :key="i.name" class="row">
            <div class="col-8">
                <h2>{{ i.name }}</h2>
                <div class="col-12">{{i.description}}</div>
            </div>
            <div class="col-4 ps-2  border rounded">
                <div class="col-12 m-1">
                    <i class="bi bi-geo-alt-fill"> Distance à parcourir : {{ i.distance }} Km</i>
                </div>
                <div class="col-12 m-1">
                    <i class="bi bi-clock-fill"> Durée total : {{ i.sejour_delay.split(" ")[0] }} Days - {{ i.sejour_delay.split(" ")[1] }} Night</i>
                </div>
                <div class="col-12 m-1">
                    <i class="bi bi-calendar-plus"> Période : {{ period_function(i.period) }}</i>
                </div>
                <div class="col-12 m-1">
                    <i class="bi bi-graph-up-arrow"> Difficulté : <progress class="pt-2" id="file" max="100" :value="i.difficulty">yujfgy</progress>
                    </i>
                </div>
                <div class="col-12 m-1">
                    <i class="bi bi-body-text"> Confort : <progress class="pt-2" id="file" max="100" :value="i.confort">yujfgy</progress>
                    </i>
                </div>
                <div class="col-12 mt-4 mb-2 fs-3">
                    <i class="bi bi-wallet"> A partir de {{ i.price }} <i class="bi bi-currency-pound"></i></i>
                </div>
            </div>
        </div>
    </div>
    <div class="col-12 bg-transparent">
        <h3 class="text-decoration-underline text-green text-success">ITINERAIRE</h3>
        <p>Voici un apreçu du trajet <i class="bi bi-car-front-fill"></i></p>
        <div class="col-12 d-flex justify-content-center">
            <div class="col-9 border">
                <img src="" alt="" srcset="">
                <div class="col-12">
                        <h3 class="text-decoration text-center">Toutes autres informations complementaire</h3>
                        <div class="col-12 d-flex justify-content-center">
                            <p class="col-8 text-center" > Pour mieux organiser votre voyage, nous vous invitons à nous joindre à l'aide de ces moyens de contact cité ci dessous</p>
                        </div>
                        <div class="bg d-flex justify-content-center gap-2 mb-1">
                            <div class="bg-primary"><i class="bi bi-telephone-fill"> +261 38 57 589 64</i></div>
                            <div class="bg-primary"><i class="bi bi-envelope-at-fill">contact@caponmada.com</i></div>

                        </div>
                    </div>
                </div>
            </div>
    </div>
</section>
</template>

<script lang="ts" setup>
import { Method, period_function } from '~/all_model/fonction-classique';
import type { child_road_list } from '~/all_model/model';
import { HttpService } from '~/server/fetch-class/fetch';
    const router = useRoute()
    let reference : Ref<{value_to_show : child_road_list[]}> = ref({
        value_to_show : []
    })

    onMounted(() => {
        if(router.query.name) HttpService.get_one_child(router.query.name).then((res) => {
            console.log(res.data.data)
            reference.value.value_to_show = [res.data.data]
        })
        else Method.navigate("/")
    })
</script>

<style scoped>
.row {
    overflow-y: scroll;
}
.row .col-12 .row .col-4 {
    box-shadow: 5px 5px 10px gray;
}
.row .col-12 .row .col-4 .col-12 {
    font-weight: bold;
    font-size: large;
    font-family: 'Gill Sans', 'Gill Sans MT',"Calibri", 'Trebuchet MS', sans-serif
}
.row .col-12 .row .col-4 .col-12 .bi progress {
    background-color: transparent;
    border-radius: 10px;
    height: 20px;
}
progress[value] {
    color: red;
}
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