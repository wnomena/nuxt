<template>
  <div class="row bg-lg-transparent bg-md-transparent bg-lg-transparent bg-md-transparent bg-sm-secondary bg-xs-secondary">
    <div class="row">
    <div class="col-6 d-flex flex-nowrap m-auto overflow-hidden p-0 ">
        <div @click="updatestyle" :class="selected">Membre</div>
        <div @click="updatestyle" :class="unselected" >Admin</div>        
    </div>
</div>
    <form @submit="validate" class="rounded col-lg-4 col-md-6 col-12 mt-lg-3 mt-md-2 mt-0 mb-lg-3 mb-md-2 mb-0 bg-xs-transparent m-auto">
        <div class="text-center m-5">
            UPDATE PASSWORD
        </div>
        <div class="d-flex justify-content-center"><div class="text-center text-danger fw-bold">{{ err }}</div></div>
        <div class="mb-3 text-center col-12">
            <label for="password" class="form-label col-12">Tape your password</label>
            <input :type="input" :value="route.query.old" class="border-top-0 border-start-0 border-end-0 rounded-0 col-lg-10 col-md-10 col-7 overflow-hidden" name="password" aria-describedby="emailHelp">
          </div>
        <div class="mb-3 text-center col-12">
          <label for="new" class="form-label col-12">Tape your new password</label>
          <input :type="input" class="border-top-0 border-start-0 border-end-0 rounded-0 col-lg-10 col-md-10 col-7" name="new" aria-describedby="emailHelp">
        </div>
        <div class="mb-3 text-center col-12">
          <label for="confirmNewpass" class="form-label col-12">Confirm your new password</label>
          <input :type="input" class="border-top-0 border-start-0 border-end-0 rounded-0 col-lg-10 col-md-10 col-7" name="confirmNewpass">
        </div>
        <div class="col-10 m-auto d-flex">
          <input @click="checked" type="checkbox" id="" value="Show password"> <span class="ms-3 fw-bold">Show password</span>
        </div>
        <div class="d-flex justify-content-end col-12 mt-3">
            <button type="submit" class="btn btn-primary me-3">Save</button>
        </div>
        <div class="validate d-flex flex-column mt-3">
            <span  class="fs-5"><NuxtLink class="text-decoration-none text-light" to="/">Cancel </NuxtLink></span>
        </div>
      </form>
</div>
</template>

<script lang="ts" setup>
import { useCounterStore } from '#build/imports';
import { navigate } from '~/all_model/fonction-classique';
import { HttpService } from '~/server/fetch-class/fetch';
  let err:Ref<string> = ref("")
    const UseCounterStore = useCounterStore()
    const route = useRoute()
    let selected:Ref<string> = ref("selected text-center col-6 m-0 p-0")
      let unselected:Ref<string> = ref("text-center m-0 p-0 col-6")
        let input:Ref<string> = ref("password")
        let type:Ref<number> = ref(0)
onMounted(() => {
  if(!UseCounterStore.getToken().mail) navigateTo("/internal-footer/connexion")
})
    async function validate(e:Event) {
    e.preventDefault()
    let formData:FormData = new FormData(e.target as HTMLFormElement)
    formData.append("type",Teste.get().type.toString())
    for(let [key,value] of formData.entries()) {
     if(!value) err.value = "Required field"
    }

    if(formData.get("new") !== formData.get("confirmNewpass")) err.value = "New password not identical"
    else if(formData.get("new") === formData.get("confirmNewpass") && UseCounterStore.getToken().type) {
      await HttpService.updateUserPass(formData).then((res) => {
        navigate("/internal-footer/connexion",{})
      }).catch((error) => {
        console.log(error)
      })
    } else if(formData.get("new") === formData.get("confirmNewpass") && UseCounterStore.getToken().type !== 1) {
      await HttpService.updateMemberPass(formData).then((res) => {
        navigate("/internal-footer/connexion",{})
      }).catch((error) => {
        console.log(error)
      })
    } else {
      navigate("/internal-footer/connexion",{})
    }
  }
  function updatestyle() {
    const temp:string = selected.value
    selected.value = unselected.value
    unselected.value = temp
    type.value = type.value == 0 ? 1 : 0
}
  function checked(e:Event) {
    let a = e.target as HTMLInputElement
    if(a.checked) input.value = "text"
    else input.value = "password"
  }
</script>

<style>
.row .row .overflow-hidden {
  border-radius: 20px;
}
.row .col-6 .selected {
    background-color: #076eaa;
    color: #d3cccc;
    box-sizing: border-box;
    cursor: pointer;
}
label {
  font-weight: bold;
}
input {
  outline: none;
  overflow: hidden;
  text-align: center;
  transition: 1s;
  font-weight: bold;
}
input:focus, input:active {
  transform: translateY(3px);
  transition: 1s;
  background-color: white;
}
</style>