<template>
    <section class="row bg-light">
    <div class="col-12 text-center">
        <h3>Visit our islands and experience new sensations.</h3>
        <h5>Cap Sur Mada offers you unforgettable trips to several destinations of your choice.</h5>
    </div>
        <div class="d-grid col-11 m-auto">
            <div class="icon items-1"><i class="bi bi-arrow-left-circle-fill text-primary d-flex align-items-center" ></i></div>
                <div scroll class="col-12 d-flex flex-nowrap justify-content-around overflow-x-scroll overflow-y-hidden">
                    <div v-for="i in refs.table" :key="i.name.toString()" class="col-lg-3 h-lg-100 h-md-50 h-10 col-md-6 col-sm-10 col-12 border p-0 m-0 overflow-hidden rounded" @click="next(i.name.toString())">
                        <div  class="col-12 h-100">
                            <div class="linear p-2 text-light">
                                <h3>Name : {{ i.name }} </h3>
                            <h4> A partir de {{ i.price }}<i class="bi bi-currency-pound"> price </i></h4>
                            <div class="d-flex justify-content-end">
                                <div class="button_slide slide_down text-white"><NuxtLink to="/list-of-child-road"></NuxtLink></div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            <div class="icon items-2"><i class="bi bi-arrow-right-circle-fill text-primary d-flex align-items-center" ></i></div>
    </div>
</section>
</template>
<script setup  lang="ts">
import { Method } from '~/all_model/fonction-classique';
import { parent_road_list } from '~/all_model/model';
import { HttpService } from '~/server/fetch-class/fetch';

let refs:Ref<{table : parent_road_list[]}> = ref({
    table : []
})
onMounted(() => {
    HttpService.get_all_parent_road().then((value) => {
        refs.value.table = [...value.data]
    })
})
function next(name : string) {
    Method.navigate("/internal-footer/list-of-child-road",{id : name})
}
</script>
<style scoped>
.row .col-12 {
    padding: 10px 0px;
}
.row .col-12 .col-lg-3 {
    display: block;
    overflow: hidden;
    outline: none;
    cursor: default;
}
.row .d-grid .col-12 {
    scrollbar-color: transparent transparent;
}
.row .col-12 .col-lg-3:hover > .col-12 {
    transition: 0.1s;
    transform: scale(1.2);
}
.row .col-12 .col-lg-3 .col-12 .linear h3 {
    font-weight: 400;
}
.row .col-12 .col-lg-3:hover > .col-12 .linear {
    transform: scale(0.8);
    transition: 0.1s;
}
.row .col-12 .col-lg-3 .col-12 {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    transition: 0.1s;
    /* overflow: hidden; */
    height: 100%;
}
.row .col-12 .col-lg-3 .col-12 .linear .d-flex .button_slide {
    box-shadow: inset 0 0 0 #2c2b2b;
    transition: 0.1s;
    font-weight: bold;
    padding: 5px;
    margin: 3px;
    overflow: hidden;
    cursor: pointer;
}
.row .col-12 .col-lg-3:hover > .col-12 .linear .d-flex .button_slide {
    box-shadow: inset 0 100px 0 #2c2b2b;
    transition: 1s;
}
.row .col-12 .col-lg-3 .linear h3 {
    font-weight: 400;
}
.row .col-12 .col-lg-3 .linear h4 {
    font-weight: 300;
}
.row .col-12 .col-lg-3:hover > .linear h3 {
    margin-left: 5px;
    transition: 0.5s;
    color: aqua;
}
.row .d-grid {
    grid-template-columns: 50px auto 50px;

}
.row .d-grid .items-1 {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    display: flex;
    justify-content: center;
    align-content: center;
}
.row .d-grid .items-2 {
    grid-row: 1 / 2;
    grid-column: 3 / 4;
    display: flex;
    justify-content: center;
    align-content: center;
}
.row .col-12 .col-lg-3:hover > .linear h4{
    animation-name: hover_animation;
    animation-duration: 0.5s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-delay: 0s;
}
.icon .bi {
    font-weight: 500;
    font-size: 50px;
}
@keyframes hover_animation {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(10px);
    }
}
</style>