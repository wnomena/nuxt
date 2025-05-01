<template>
<section class="row">
    <div class="col-12 d-flex align-items-center">
        <div class="m-auto col-5 border rounded d-block p-1">
            <div @click="() => logout" class="text-center text-danger col-12 fw-bold"><h2>Log out</h2></div>
            <div @click="() => navigateTo({path : '/internal-footer/change_pass'})" class="text-center  text-primary fw-bold col-12"><h3>Change password</h3></div>
            <div v-if="!useCounterStore().getToken().type" @click="() => navigateTo({path : '/internal-footer/add-commentary'})" class="text-center  text-warning fw-bold col-12"><h3>Commentary</h3></div>
            <div @click="() => useCounterStore().displayMenu()" class="text-center fw-bold col-12"><h3>Close</h3></div>
        </div>
    </div>
</section>
</template>

<script lang="ts" setup>
import { navigate } from '~/all_model/fonction-classique'

    const logout = function () {
        useCounterStore().deleteToken()
        useCounterStore().displayMenu()
        navigate("/internal-footer/connexion",{})
    }
</script>
<style scoped>
    .row .align-items-center {
        height: 100vh;
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 8;
        overflow: hidden;
    }
    .row .align-items-center .m-auto {
        background-color: green;
    }
    .row .align-items-center .m-auto .text-center {
        margin: 2px;
        cursor: pointer;
    }
    .row .align-items-center .m-auto .text-center:hover {
        background-color: #fff;
        box-sizing: border-box;
    }
</style>