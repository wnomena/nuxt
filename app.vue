<template>
    <div style="overflow-x: hidden">
        <NuxtRouteAnnouncer />
        <Header></Header>
        <NuxtPage @vue:mounted="(e) => console.log(e)" />
    </div>
</template>
<script setup lang="ts">

    const display = ref(false)
    onMounted(() => {
        document.title = "CAP ON MADA"
        console.log(useCounterStore().getToken())
    })
    window.addEventListener("DOMContentLoaded",function () {
        let a = this.sessionStorage.getItem("piniaPersistance")
        try {
            if(a !== null) {
                useCounterStore().updateToken(JSON.parse(a))
            } 
        } catch (error) {
            console.log("aucune données")
        }
    })
</script>
<style >
@import url(https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css);
@import url(https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css);
</style>