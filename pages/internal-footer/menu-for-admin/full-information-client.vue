<template>
  <div class="row">
    <div class="col-10 rounded">
      <p class="text-center">{{ value?.mail }}</p>
      <p class="text-center">{{ value?.object }}</p>
      <p class="text-center">{{ value?.corps }}</p>
      <div class="col-12">
        <div class="m-auto">
          <Button class="border-0 bg-primary" @click="seen">
            Vue
        </Button>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script lang="ts" setup>
import type { contact } from '~/all_model/model';
import { HttpService } from '~/server/fetch-class/fetch';

let value:Ref<contact|undefined> = ref()
const router = useRoute()
   onMounted(async() => {
    await HttpService.get_contact(router.query.name as string).then((response) => {
      value.value = response.data.data[0]
    })
    })
    async function seen(name : string) {
      await HttpService.update_contact(name).then((response) => {
        alert(response.data.message)
      })
    }
</script>

<style>

</style>