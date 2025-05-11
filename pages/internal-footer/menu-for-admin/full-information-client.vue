<template>
  <div class="row d-flex">
    <div class="col-12 d-flex justify-content-end"> <NuxtLink style="height: fit-content;" class="text-decoration-none text-light bg-primary col-3 text-center" to="/internal-footer/menu-for-admin/list-of-parent"><i class="bi bi-chevron-left fs-4"> Retour</i></NuxtLink></div>
    <div style="margin: 0; padding: 0; overflow: hidden;" class="col-10 rounded border m-auto align-items-center">
      <h1 class="text-center"> {{ value.name }}</h1>
      <h2 class="text-center">{{ value?.mail }}</h2>
      <h3 class="text-center">{{ value?.object }}</h3>
      <h5 class="text-center">{{ value?.corps }}</h5>
      <div style="cursor: pointer;" class="col-12 bg-primary p-0 d-flex justify-content-center"><a style="font-size: 30px;" class="text-light text-decoration-none" href="https://mala.gasyweb.com:2096/cpsess2741722080/3rdparty/roundcube/?_task=mail&_mbox=INBOX" target="_blank">Répondre</a></div>
    </div>
      <loading-component v-if="loading"/>
    </div>
</template>
  
<script lang="ts" setup>
import type { contact } from '~/all_model/model';
import { HttpService } from '~/server/fetch-class/fetch';
let value:Ref<contact> = ref({name : "", mail : "", object : "", corps : "", id : "",vue : false})
const router = useRoute()
let loading:Ref<boolean> = ref(true)

   onMounted(async() => {
    await HttpService.getContact(router.query.id as string).then((response) => {
      console.log(response)
      value.value = response.data.data[0]
    }).finally(function () {
      loading.value = false
    })
    })
</script>
<style scoped>

</style>