<template>
    <section class="row mt-3 mb-3">
        <form @submit="submit_function" class="col-lg-6 col-md-10 col-11 m-auto mb-3">
            <h1 class="text-center m-3 text-light">Contact us</h1>
            <h3 class="text-danger text-center">{{ notification.err }}</h3>
            <h3 class="text-success text-center">{{ notification.success }}</h3>
            <div v-if="notification.success == ''" class="col-11 m-auto mb-3 d-flex justify-content-around flex-wrap">
                <div class="col-lg-5 col-md-5 col-12">
                    <label for="name" class="col-12 text-light fw-bold">Name</label>
                    <input type="text" name="name" id="" class="col-12  bg-primary border-0 rounded">
                </div>
                <div  class="col-lg-5 col-md-5 col-12">
                    <label for="mail" class="col-12 text-light fw-bold">Mail</label>
                    <input type="text" name="mail" id="" class="col-12  bg-primary border-0 rounded">
                </div>
            </div>
            <div v-if="notification.success == ''" class="col-10 m-auto mb-3">
                <label for="object" class="col-12 text-light fw-bold">Object</label>
                <input type="text" name="object" id="" class="col-12 rounded border-0">
            </div>
            <div v-if="notification.success == ''" class="col-10 m-auto mb-3">
                <label for="corps" class="col-12 text-light fw-bold">Corps</label>
                <textarea type="text" name="corps" rows="5" class="col-12 rounded border-0"></textarea>
            </div>
            <div v-if="notification.success == ''" class="col-11 d-flex justify-content-end m-auto mb-3">
                <button type="submit" class="border-0 col-3 text-center rounded"> Send </button>
            </div>
        </form>
        <loading-component v-if="loading"/>
    </section>
</template>

<script lang="ts" setup>
import type { AxiosError } from 'axios';
import { HttpService } from '~/server/fetch-class/fetch';
    const loading = ref(false)
    const notification:Ref<{err: string,success : string}> = ref({
        err: '',
        success : ''
    })

    async function submit_function(e:Event) {
        e.preventDefault()
        loading.value = true
        const data = new FormData(e.target as HTMLFormElement)
        for(let [key,value] of data.entries() ){
            if(!value) {
                notification.value.err = "Required field"
                notification.value.success = ""
                return false
            }
        }
        await HttpService.addNewContact(data).then((response) => {
            console.log(response)
            notification.value.success = response.data.message
            notification.value.err = ""
        }).catch((err:AxiosError<{message : string}>) => {
            notification.value.err = err.response?.data.message as string
        }).finally(function () {
            loading.value = false
        })
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
    .row .col-lg-6 {
        background-color: #404758;
        border-radius: 10px;
    }
    section.row {
        height: 70vh;
    }
    label {
        font-weight: 200;
    }
    input {
        border: 0;
        outline: none;
        overflow: hidden;
    }
    input:active,input:focus {
        outline: none;
        overflow: hidden;
    }
    h1 {
        font-family: "Montserrat", sans-serif;
        font-optical-sizing: auto;
        /* font-weight: 400; */
        font-style: normal;
    }
    button {
        cursor : pointer
    }
</style>