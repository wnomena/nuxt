<template>
    <div>
        <NuxtRouteAnnouncer />
        <Header></Header>
        <NuxtPage />
    </div>
</template>
<script lang="ts">
    export default {
        mounted():void {
            document.title = "CAP ON MADA"
        }
    }
</script>
<style scoped>
div {
    overflow-x: hidden;
}
</style>