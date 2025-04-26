<template>
    <section class="row m-0">
    <div v-for="i in reference.value" :key="i.name" class="col-lg-10 m-auto d-flex mt-3 mb-3 p-1">
            <div v-if="i.id % 2" style="border-color:red" class="col-12 d-lg-flex d-block flex-nowrap border rounded">
                <div class="col-lg-4 col-12 m-lg-start m-auto">
                    <img class="col-10 m-1 rounded"  style="height: 40vh" :src="i.presentation_image" alt="" srcset="">
                </div>
            <div class="col-lg-7 col-12">
                <div><h5 class="fw-bold m-0 p-0"> Description : </h5> <small  class="ms-1">{{ i.description }}</small></div>
                <div class="d-flex justify-content-end"> <div @click="function () {navigate('/internal-footer/complete-information',{id : i.id})}" class="text-decoration-none text-primary">Next ..</div></div>
            </div>
            </div>
            <div v-else class="col-12 d-flex flex-nowrap">
                <div class="col-lg-7 m-auto">
                <div ><h5 class="fw-bold m-0 p-0"> Description : </h5> <small class="ms-1">{{ i.description }}</small></div>
                <div class="d-flex justify-content-end"> <div @click="function () {navigate('/internal-footer/complete-information',{id : i.id})}" class="text-decoration-none text-primary">Next ..</div></div>
            </div>
            <div class="col-lg-4 ms-1">
                <img class="col-12" style="height: 40vh" :src="i.presentation_image" alt="" srcset="">
            </div>
    </div>
</div>
</section>
</template>
<script setup lang="ts">
const router = useRoute()
import { forceInt, navigate } from '~/all_model/fonction-classique';
import {  child_road_list } from '~/all_model/model';
import { HttpService } from '~/server/fetch-class/fetch'
let reference :Ref<{value  : child_road_list[]}> = ref({
    value : []
})

onMounted(async() => {
    await HttpService.getChilds(forceInt(useRoute().query.id?.toString())).then((res) => {
        console.log(res)
        reference.value.value = res.data.data
    })
})
</script>
<style scoped>
.row .col-lg-10 .col-lg-4 {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
.row .col-lg-10 .col-lg-7 div h5 {
    float: left;
}
img {
    border-radius: 10px;
    outline: none;
}
</style>