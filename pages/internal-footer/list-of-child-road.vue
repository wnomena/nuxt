<template>
    <section class="row m-0">
    <div v-for="i in value" :key="i.name" class="col-lg-10 m-auto d-flex mt-3 mb-3 p-1">
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
                <div class="d-flex justify-content-end"> <a class="text-decoration-none text-primary">More ..</a></div>
            </div>
            <div class="col-lg-4 bg-primary ms-1"></div>
    </div>
</div>
<InternalFooter />
</section>
</template>
<script lang="ts">
import { child_road_for_display } from '~/all_model/model';
import { HttpService } from '~/server/fetch-class/fetch'

    export default {
        data(): {params : any,value : child_road_for_display[]} {
            return {
                params : useRoute(),
                value : []

            }
        },
        async useAsyncData() {
           await HttpService.get_all_child_road(this.params.id).then((res)=> {
                this.value = [...res.data]
            })
        }
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