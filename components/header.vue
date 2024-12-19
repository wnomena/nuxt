<template>
  <section class="row">
    <div class=" bg-primary col-12 pt-2 pb-2">
        <div class="container">
            <div class="row no-gutters d-flex align-items-start align-items-center px-md-0">
                <div class="col-lg-12 d-block">
                    <div class="row d-none d-md-flex justify-content-between">
                        <div class="col-6 d-flex topper align-items-center">
                            <div class="icon mr-2 d-flex justify-content-center align-items-center"><span class="icon-phone2"></span></div>
                            <span class="text">Adventure & Sensation in Madagascar.</span>
                        </div>
      
                        <div class="col-lg-3 pr-4 d-lg-flex d-none topper align-items-center">
                            <div class="icon mr-2 d-flex justify-content-center align-items-center"><span class="icon-paper-plane"></span></div>
                            <span class="text"> <i class="fas fa-paper-plane"><i class="bi bi-envelope"></i> contact@caponmada.com </i></span>
                        </div>
                        <div class="col-4 col-lg-3 pr-4 d-none d-lg-flex d-md-flex topper align-items-center text-lg-right">
                            <span class="text"><i class="bi bi-telephone-fill"> +261 38 57 589 64</i></span>
                        </div>
                    </div>
                </div>
            </div>
          </div>
      </div>
      <div class="bgc-undefined text-light col-12">
          <div class="d-flex justify-content-between col-12">
              <div class="p-0 m-0">
                  <h3 class="m-1 p-0 h-auto fs-lg-3 fs-md-4 fs-5">CAP ON MADA</h3>
              </div>
              <div class="col-6 h-auto p-0">
                <div class="full-screen col-12 p-0 m-0 d-flex">
                    <span class="d-flex justify-content-center col-3  ms-1 p-1"><NuxtLink class="text-light text-decoration-none d-flex col-12 justify-content-center h-inherit m-0 align-items-center button" to="/" ><i class="bi bi-house-door"></i> <p class="m-0 d-lg-block d-md-none d-none"> Home </p></NuxtLink></span>
                    <span class="d-flex justify-content-center  col-3 ms-1 p-1"><NuxtLink to="/internal-footer/list-of-child-road" class="text-light text-decoration-none d-flex col-12 justify-content-center h-auto m-0 align-items-center button" ><i class="bi bi-signpost-split"></i> <p class="m-0 d-lg-block d-md-none d-none"> Our Tours</p></NuxtLink></span>            
                    <span v-if="mail.mail" class="d-flex align-items-center justify-content-center flex-nowrap col-4 ms-1 p-1" data-bs-toggle="collapse" data-bs-target="#collapseExample"><i type="button" class="bi bi-people-fill"></i><small class="d-lg-flex align-items-center d-md-none d-none ms-1">{{ mail }}</small></span>
                    <span v-else class="d-flex justify-content-center  col-3 ms-1 p-1"><NuxtLink class="text-light text-decoration-none d-flex col-12 justify-content-center h-auto m-0 align-items-center button" to="/internal-footer/connexion"><i class="bi bi-globe2"></i> <p class="m-0 d-lg-block d-md-none d-none"> Connexion</p></NuxtLink></span>
            </div>
              </div>
          </div>
          <div class="collapse row bg-transparent p-0 m-0" id="collapseExample">
    <div class="col-12 d-flex p-0 m-0">
        <div  class="col-lg-4 col-4 h-auto"><p v-if="mail.type == 1" class="fw-bold border d-flex justify-content-center align-items-center bg-success mb-0"><i class="bi bi-person-fill-gear"> Page admin</i></p><p v-if="mail.type == 0" class="fw-bold border d-flex justify-content-center align-items-center bg-success mb-0"><i class="bi bi-person-fill-gear"> New commentary</i></p></div>

        <div  class="col-lg-4 col-4 h-auto"><NuxtLink to="/internal-footer/change_pass" class="fw-bold border d-flex justify-content-center align-items-center bg-success mb-0"><i class="bi bi-gear-fill"> Change pass</i></NuxtLink></div>
        <div @click="deco" class="col-lg-4 col-4 h-auto"><p class="fw-bold border d-flex justify-content-center align-items-center bg-success mb-0"><i class="bi bi-box-arrow-right"> Log out</i></p></div>
    </div>
</div>
      </div>
</section>
</template>
<script setup lang="ts">
const store = PiniaStore()
const mail = computed(() => {
    return store.get_mail_and_type()
})
const deco = () => store.delete_token()
</script>
<style scoped>
    /* @import url("node_modules/bootstrap/dist/css/bootstrap.min.css"); */
  span {
    font-family: sans-serif;
    font-weight: bold;
    cursor: pointer;
    align-content: center;
}
span:hover {
    background-color: #0d6efd;
}
.row .bgc-undefined {
    background-color: #383535;
}
.row .bgc-undefined .container .col-6 .me-2,.row .bgc-undefined .container .col-6 .me-2 .pe-2{
    height: 100%;
}
</style>
