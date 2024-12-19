export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive("change",{
        mounted(el,binding) {
            el.addEventListener("input", (e:InputEvent) => {
                let z = e.target as HTMLInputElement
                el.value = parseInt(z.value) > binding.value ? binding.value : z.value
            })
        },
        unmounted(el,binding) {
            el.removeEventListener("input",() => {
                console.log("removed")
            })
        }
    })
})