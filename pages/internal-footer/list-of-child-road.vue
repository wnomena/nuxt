<template>
    <section class="row m-0">
    <div v-for="i in reference.value" :key="i.name" class="col-lg-10 m-auto d-flex mt-3 mb-3 p-1">
            <div v-if="i.id % 2" class="col-12">
                <div class="col-lg-4 bg-primary "></div>
            <div class="col-lg-7 m-auto">
                <div><h5 class="fw-bold m-0 p-0"> Description : </h5> <small  class="ms-1">{{ i.description }}</small></div>
                <div class="d-flex justify-content-end"> <a class="text-decoration-none">More ..</a></div>
            </div>
            </div>
            <div v-else class="col-12">
                <div class="col-lg-7 m-auto">
                <div ><h5 class="fw-bold m-0 p-0"> Description : </h5> <small class="ms-1">{{ i.description }}</small></div>
                <div class="d-flex justify-content-end"> <p @click="next(i.name)" class="text-decoration-none text-primary">More ..</p></div>
            </div>
            <div class="col-lg-4 bg-primary ms-1"></div>
    </div>
</div>
</section>
</template>
<script setup lang="ts">
const router = useRoute()
import { Method } from '~/all_model/fonction-classique';
import { child_road_for_display } from '~/all_model/model';
import { HttpService } from '~/server/fetch-class/fetch'
let reference :Ref<{value  : child_road_for_display[]}> = ref({
    value : []
})

onMounted(async() => {
    await HttpService.get_all_child_road("0").then((res) => {
        console.log(res)
        reference.value.value = res.data.data
    })
})
function next(name :string) {
    Method.navigate("/internal-footer/complete-information",{name : name})
}
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
</style>