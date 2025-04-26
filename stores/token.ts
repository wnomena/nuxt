import { defineStore} from "pinia"

export const useCounterStore = defineStore('counter',function () {
     const token:Ref<{token:string,type:number,mail:string}> = ref({
        token : "",
        type : 0,
        mail : ""
     })
     const updateToken = function (data : {token:string,type:number,mail:string}) {
        token.value = data
     }
     const getToken = function () {
        return token.value
     }
     return {updateToken,getToken}
  })
  
// const pinia = createPinia()
// setActivePinia(pinia)
// export const Pinia = useCounterStore()

export let Teste = {
    type : ref(0),
    mail : ref(""),
    display : ref(false),
    get : function(){
        return {
            mail : this.mail.value,
            type : this.type.value,
            display : this.display.value
        }
    },
    set : function(mail : string, type : number) {
        this.mail.value = mail
        this.type.value = type
    },
    set_display: function(display:boolean) {
        this.display.value = display
        console.log(display)
    },
    delete : function() {
        this.mail.value = ""
        this.type.value = 0
        this.display.value = false
        navigateTo({
            path : "/"
        })
    },
    authenticate : function() {
        return this.mail.value && this.type.value == 1 ? true : false
    }
}

function get() {
    throw new Error("Function not implemented.")
}
