<template> <Suspense> <template #default> <LazyComponent /> </template> <template #fallback> <div>Loading...</div> </template> </Suspense> </template>
<script setup>
        const LazyComponent = defineAsyncComponent(async() => await import("~/components/Assmembly-component.vue"))
</script>