<template>
    <section class="row">
        <div v-for="i in reference.value" :key="i.id" class="col-12 d-flex justify-content-between p-1 tout">
            <div class="col-lg-7 col-10 m-auto">
                <h3 class="text-success"> Name : {{ i.name }}</h3>
                <div class="col-12d-lg-block d-md-block d-none">
                    <h4 class="text-primary">Description : </h4>
                    <span class="fw-bold">{{ i.description }}</span>
                </div>
                <div class="col-12d-lg-none d-md-none d-block">
                    <h4 class="text-primary">Description : </h4>
                    <span class="fw-bold">{{ i.description.split(".")[0] }}</span>
                </div>
                <div  class="col-12 d-lg-none d-md-none d-flex">
                    <h4 class="text-primary">From : <i class="bi bi-currency-euro"></i></h4> <h6 style="margin-bottom: 8px; margin-left: 12px;" class="fw-bold fs-3">{{ i.price }}</h6>
                    
                </div>
                <div class="col-12 d-flex justify-content-end">
                    <NuxtLink class=" text-decoration-none fw-bold" :to="{path : '/internal-footer/complete-information',query : {id : i.id}}">More</NuxtLink>
                </div>
            </div>
            <div class="col-lg-4 d-lg-block d-none"> 
                <NuxtImg class="col-10 border rounded m-auto" :src="i.presentation_image" />
            </div>
        </div>
        <loading-component v-if="loading"/>
    </section>
</template>
<script setup lang="ts">
import { forceInt, navigate } from '~/all_model/fonction-classique';
import {  child_road_list } from '~/all_model/model';
import { HttpService } from '~/server/fetch-class/fetch'
let reference :Ref<{value  : child_road_list[]}> = ref({
    value : []
})
let loading:Ref<boolean> = ref(true)
onMounted(async() => {
    console.log(useRoute().query.id ? forceInt(useRoute().query.id?.toString()) : undefined)
    await HttpService.getChilds(useRoute().query.id ? forceInt(useRoute().query.id?.toString()) : undefined).then((res) => {
        console.log(res)
        reference.value.value = res.data.data
    }).finally(function () {
        loading.value = false
    })
    console.log("vita le chargement")
})
</script>
<style scoped>
.row .tout {
    margin: 50px 0;
}
</style>