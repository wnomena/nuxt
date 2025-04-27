<template>
    <div class="col-12 d-flex text-center align-items-center">
        <div class="col-12 ">
            <div class="col-lg-4 col-md-7 col-10 m-auto rounded overflow-hidden border">
                <h5 class="text-center bg-primary col-12">Alert</h5>
                <p class="test">Adresse mail déjà existant parmi les commentaires</p>
                <small>Vous n'avez droit qu'à un commentaire</small>
                <div class="d-flex justify-content-center mb-1"><NuxtLink class="text-decoration-none" to="/"><button class="border-0 ps-3 pe-3 fs-5">Retour</button></NuxtLink></div>
            </div>
        </div>
        <loading-component v-if="loading"/>
    </div>
</template>
<script setup lang="ts">
//need implementation for commentary and loading for add
import { navigate } from '~/all_model/fonction-classique';
import type { child_road_for_display, child_road_list } from '~/all_model/model';
import { HttpService } from '~/server/fetch-class/fetch';
let all_value:Ref<{child_road : child_road_list[], authorization : boolean,mail : string}> = ref({
    child_road : [],
    authorization : true,
    mail : ""
})
let loading:Ref<boolean> = ref(true)
onMounted(async () => {
    if(!Teste.get().type) navigate("/internal-footer/connexion",{})
     await HttpService.getChilds(2).then((response) => {
        all_value.value.child_road = response.data.data
     }).finally(function () {
        loading.value = false
     })
})
</script>
<style scoped>
 .align-items-center {
    height: 90vh;
 }
</style>

<!-- <div class="d-grid"> 
    <div style="transition: 0.2s;" id="scroll" class="bg-transparent overflow-x-scroll overflow-y-hidden d-flex flex-nowrap">
        <div class="col-lg-4 col-md-6 col-12 p-1" v-for="i in all_value.child_road" :key="i.name">
            <div class="bg-transparent rounded h-inherit text-light" :style="{'background-image' : 'url(' + i.presentation_image + ')'}"><i @click="make_favorite($event)" ref="favorite"  class="bi bi-heart fw-bold"></i>
            <h5> Name: {{ i.name}}</h5><p class="m-0">Price : {{i.price}}</p> </div>
        </div>
    </div>
</div>  -->
