<template>
  <div class="row d-flex">
    <div class="col-12 d-flex justify-content-end"> <NuxtLink style="height: fit-content;" class="text-decoration-none text-light bg-primary col-3 text-center" to="/internal-footer/menu-for-admin/list-of-parent"><i class="bi bi-chevron-left fs-4"> Retour</i></NuxtLink></div>
    <div class="col-10 rounded border m-auto align-items-center">
      <h1 class="text-center"> {{ value.name }}</h1>
      <h2 class="text-center">{{ value?.mail }}</h2>
      <h3 class="text-center">{{ value?.object }}</h3>
      <h5 class="text-center">{{ value?.corps }}</h5>
      <div v-if="value?.seen" class="col-12 d-flex justify-content-center">
        <Button disabled style="width: 100px; cursor: not-allowed;" class="border-0 bg-secondary p-1 p-1 rounded fw-bold m-1" >
            Vue
        </Button>
      </div>
      <div v-else class="col-12 d-flex justify-content-center">
        <Button style="width: 100px;" class="border-0 bg-primary p-1 p-1 rounded fw-bold m-1" @click="seen(value?._id)">
            Vue
        </Button>
      </div>
    </div>
    </div>
</template>
  
<script lang="ts" setup>
import type { contact } from '~/all_model/model';
import { HttpService } from '~/server/fetch-class/fetch';
let value:Ref<contact> = ref({name : "", mail : "", object : "", corps : "", seen : false, _id : ""})
const router = useRoute()
   onMounted(async() => {
    await HttpService.get_contact(router.query._id as string).then((response) => {
      value.value = response.data.data[0]
    })
    })
    async function seen(_id : string) {
      await HttpService.update_contact(_id).then((response) => {
        alert(response.data.message)
      })
    }
</script>
<style scoped>
.row  {
  height: 90vh;
}
</style>