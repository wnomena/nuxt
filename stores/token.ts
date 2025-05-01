import { defineStore} from "pinia"

export const useCounterStore = defineStore('counter',function () {
     const token:Ref<{token:string,type:number,mail:string,display:boolean}> = ref({
        token : "",
        type : 0,
        mail : "",
        display : false
     })
     const updateToken = function (data : {token:string,type:number,mail:string}) {
        token.value = {
            token : data.token,
            mail : data.mail,
            type : data.type,
            display : token.value.display
        }
     }
     const displayMenu = function() {
        token.value.display = token.value.display ? false : true
     }
     const getToken = function () {
        return token.value
     }
     const deleteToken = function () {
        token.value = {
            token : '',
            type : 0,
            mail : "",
            display : token.value.display
        }
     }
     return {updateToken,getToken,deleteToken,displayMenu}
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
