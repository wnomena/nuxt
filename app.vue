<template>
    <div style="overflow-x: hidden">
        <NuxtRouteAnnouncer />
        <Header></Header>
        <NuxtPage />
    </div>
</template>
<script setup lang="ts">
    PiniaStore()
    onMounted(() => {
        document.title = "CAP ON MADA"
    })
</script>
<style >
@import url(https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css);
@import url(https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css);
</style>