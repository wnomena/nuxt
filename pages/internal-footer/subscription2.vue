<template>
    <div data-aos="fade-right" class="container pb-3 pt-3">
  <form @submit="takeallinformation" class="row">
    <div class="col-lg-4 col-md-6 col-12 m-lg-auto m-md-auto ps-3 pe-3 rounded">
      <div class="col-12 mt-3 mb-5"><h3 class="text-center text-light">Subscription</h3></div>
      <div class="col-12 mt-1 mb-1"><h5 class="text-center">{{ all_value.err }}</h5></div>
      <div class="col-lg-10 col-md-10 col-7 m-auto mb-4">
        <label class="col-12 text-center text-light fs-4" for="first_pass">Your password </label>
        <input name="first_pass"  class="col-11 m-auto mt-3 border-top-0 border-start-0 border-end-0 border-bottom-1 text-center" type="password"  id="">
      </div>
      <div class="col-lg-10 col-md-10 col-7 m-auto mb-4">
        <label class="col-12 text-center text-light fs-4" for="password">Confirm your password </label>
        <input name="password" class="col-11 m-auto mt-3 border-top-0 border-start-0 border-end-0 border-bottom-1 text-center" type="password"  id="">
      </div> 
        <div class="col-lg-10 col-md-10 col-7 m-auto mb-4 d-flex justify-content-lg-end justify-content-md-end justify-content-center">
          <button type="submit" class="bg-primary p-2 text-light rounded border-0"> Send </button>
        </div>
        <div class="validate d-flex flex-column mb-2">
          <span class="fs-5 text-lg-start text-md-start text-center"><NuxtLink class="text-decoration-none" to="internal-footer/connexion">You had already an account ? </NuxtLink></span>
          <span class="fs-6 text-lg-start text-md-start text-center"><NuxtLink to="/"  class="text-decoration-none">Cancel</NuxtLink></span>
      </div>
    </div>
</form>
</div>
</template>
<script setup lang="ts">
import { navigate } from '~/all_model/fonction-classique';
import { HttpService } from '~/server/fetch-class/fetch';

let router = useRoute()
let all_value:Ref<{err : string}> = ref({
        err: ''
})
async function takeallinformation(e:Event) {
    e.preventDefault()
    let formData:FormData = new FormData(e.target as HTMLFormElement)
    for(let [key,value] of formData.entries()) {
        console.log(`${key} : ${value}`)
        if(!value) return all_value.value.err = "required field"
    }
    if(formData.get("password") !== formData.get("first_pass")) return all_value.value.err = "Value not identical"
    formData.append("mail",router.query.mail as string)
    formData.append("name",router.query.complete as string)
    await HttpService.SignUp(formData).then((res) => {
       navigate("/internal-footer/connexion",{})
    })
}
</script>
<style scoped>
.row .col-lg-4 {
    background-color: #383535;
    padding: 0;
    /* border-radius: 10px; */
}
input {
    outline: none;
    color: rgb(206, 197, 197);
    transition: 0.5s;
    margin: auto;
    background-color: #383535;
    border-color: #b9b1b1;
    font-family: sans-serif;
}
input:focus {
    outline: none;
    background-color: #383535;
    color: white;
    caret-color: #b9b1b1;
    transform: translateY(5px);
    transition: 0.5s;
}
.row .col-lg-10 .p-2{
    transition: 0.5s;
}
.row .col-lg-10 .p-2:hover {
    transform: translateY(5px);
    transition: 0.5s;
}
.validate span a{
    cursor: pointer;
    transition: 1s;
    padding-left: 20px;
    color: gray;
}
.row .col-lg-4 .col-lg-10 label {
    color: white;
    font-size: 20px;
    font-family:  "Calibri Light (Titres)",sans-serif;
    
}
.row .col-lg-4 .col-lg-10 .bg-primary {
    font-weight: 500;
}
.validate span:hover > a{
    cursor: pointer;
    color: white;
}
.validate span:hover{
    cursor: pointer;
    color: white;
    transform: translateY(5px);
    transition: 0.5s;
}
h3 {
    font-family: "Lucida Handwriting", sans-serif;
    opacity: 0.5;
}
.row .col-lg-4 .col-12 h5 {
    color: red;
}
</style>