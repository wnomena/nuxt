<template>
    <section class="row mt-3 mb-3">
        <form @submit="submit" class="col-lg-6 col-md-10 col-11 m-auto mb-3">
            <h1 class="text-center m-3 text-light">Contact us</h1>
            <h6 class="text-center text-success"></h6>
            <div class="col-11 m-auto mb-3 d-flex justify-content-around flex-wrap">
                <div class="col-lg-5 col-md-5 col-12">
                    <label for="name" class="col-12 text-light fw-bold">Name</label>
                    <input type="text" name="name" id="" class="col-12  bg-primary border-0 rounded">
                </div>
                <div class="col-lg-5 col-md-5 col-12">
                    <label for="mail" class="col-12 text-light fw-bold">Mail</label>
                    <input type="text" name="mail" id="" class="col-12  bg-primary border-0 rounded">
                </div>
            </div>
            <div class="col-10 m-auto mb-3">
                <label for="object" class="col-12 text-light fw-bold">Object</label>
                <input type="text" name="object" id="" class="col-12 rounded border-0">
            </div>
            <div class="col-10 m-auto mb-3">
                <label for="corps" class="col-12 text-light fw-bold">Corps</label>
                <textarea type="text" name="corps" rows="5" class="col-12 rounded border-0"></textarea>
            </div>
            <div class="col-11 d-flex justify-content-end m-auto mb-3">
                <button type="button" class="border-0 col-3 text-center rounded"> Send </button>
            </div>
        </form>
    </section>
</template>

<script lang="ts" setup>
import { HttpService } from '~/server/fetch-class/fetch';
    const err:Ref<string> = ref("")

    async function submit(e:Event) {
        const data = new FormData(e.target as HTMLFormElement)
        await HttpService.add_new_contact(data).then((response) => {
            err.value = response.data.message
        })
        e.preventDefault()
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
</style>