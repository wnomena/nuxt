import { createPinia, defineStore, setActivePinia} from "pinia"

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
      //   localStorage.setItem("piniaPersistance",JSON.stringify({token : data.token,mail : data.mail,type : data.type, display : token.value.display}))
     }
     const displayMenu = function():void {
        token.value.display = token.value.display ? false : true
        console.log(token.value.display)
     }
     const getToken = function ():{token:string,type:number,mail:string,display:boolean} {
        return token.value
     }
     const deleteToken = function ():void {
        token.value = {
            token : '',
            type : 0,
            mail : "",
            display : token.value.display
        }
        sessionStorage.removeItem("piniaPersistance")
     }
     return {updateToken,getToken,deleteToken,displayMenu}
  },{
   persist : true
  })
  
const pinia = createPinia()
setActivePinia(pinia)
export const Pinia = useCounterStore()
