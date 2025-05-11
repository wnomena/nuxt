import  axios, { AxiosResponse } from "axios"
import { createPinia, setActivePinia } from "pinia"
import piniaPluginPersistedstate from "pinia-plugin-persistedstate"
import { child_road_list, commentary_model, contact
    ,member_model, parent_road_list } from "~/all_model/model"
import { useCounterStore } from "~/stores/token"
function token() {
    const a = sessionStorage.getItem("piniaPersistance")
    if(a) {
        const b:{token:string, mail : string, type : number,display:boolean} = a ? JSON.parse(a) : undefined
        console.log(b.token)
        return b.token
    } else {
        console.log(a)
        return undefined
    }

}
export class HttpService {
    private static  headerConfig = {
        authorization : `Bearer ${token()}`
    }
     private static url = "https://travel-agency-project-vxkm.onrender.com"
     static async getParents() :Promise<AxiosResponse<{data : parent_road_list[]}>> {
        return await axios.get(`${this.url}/parent`)
     }
     static async getParent(id:number):Promise<AxiosResponse<{data : parent_road_list[]}>> {
        return await axios.get(`${this.url}/${id}/parent`,{headers :  this.headerConfig})
     }
     static async insertParent(data:FormData) :Promise<AxiosResponse<{message : string}>> {
        return await axios.post(`${this.url}/admin/insert/parent`,data,{headers :  this.headerConfig})
     }
     static async updateParent(data:FormData) :Promise<AxiosResponse<{message : string}>> {
        return await axios.put(`${this.url}/admin/update/parent`,data,{headers :  this.headerConfig})
     }
     static async deleteParent(id: number)  :Promise<AxiosResponse<{message : string}>> {
        return await axios.delete(`${this.url}/admin/delete/${id}/parent`,{headers :  this.headerConfig})
     }
    //child
    static async getChilds(parent?:number):Promise<AxiosResponse<{data :child_road_list[]}>> {
        return await axios.get(`${this.url}/${parent}/childs`,{headers :  this.headerConfig})
     }
    static async getChild(id:number) :Promise<AxiosResponse<{data : child_road_list[]}>> {
        console.log(id)
        return await axios.get(`${this.url}/${id}/child`,{headers :  this.headerConfig})
     }
    static async insertChild(formdata:FormData):Promise<AxiosResponse<{message : string}>> {
        return await axios.post(`${this.url}/admin/insert/child`,formdata,{headers :  this.headerConfig})
     }
    static async updateChild(formdata:FormData):Promise<AxiosResponse<{message : string}>> {
        return await axios.put(`${this.url}/admin/update/child`,formdata,{headers :  this.headerConfig})
     }
    static async deleteChild(id:number):Promise<AxiosResponse<{message : string}>> {
        return await axios.delete(`${this.url}/admin/delete/${id}/child`,{headers :  this.headerConfig})
     }
    //User
    static async loginUser(formdata:FormData):Promise<AxiosResponse<{message : string,token : string}>> {
        return await axios.post(`${this.url}/login`,formdata,{headers :  this.headerConfig})
     }
    static async getUsers():Promise<AxiosResponse<{message : member_model}>> {
        return await axios.post(`${this.url}/users`,{headers :  this.headerConfig})
    }
    static async updateUserPass(formdata:FormData):Promise<AxiosResponse<{message : string}>> {
        return await axios.put(`${this.url}/password`,formdata,{headers :  this.headerConfig})
    }
    static async addNewAdmin(formdata:FormData):Promise<AxiosResponse<{message : string}>> {
        return await axios.post(`${this.url}/admin/new`,formdata,{headers :  this.headerConfig})
    }
    //Member
    static async getAllMember() :Promise<AxiosResponse<{data: member_model[]}>> {
        return await axios.get(`${this.url}/admin/all`,{headers :  this.headerConfig})
    }
    static async loginMember(formdata:FormData) :Promise<AxiosResponse<{message : string,token : string}>> {
        return await axios.post(`${this.url}/login/member`,formdata,{headers :  this.headerConfig})
    }
    static async SignUp(formdata:FormData) :Promise<AxiosResponse<{message : string}>> {
        return await axios.post(`${this.url}/signup`,formdata,{headers :  this.headerConfig})
    }
    static async updateMemberPass(formdata:FormData) :Promise<AxiosResponse<{message : string}>> {
        return await axios.put(`${this.url}/password`,formdata,{headers :  this.headerConfig})
    }
    static async deleteMember(id:number) :Promise<AxiosResponse<{message : string}>> {
        return await axios.delete(`${this.url}/admin/member/${id}/delete`,{headers :  this.headerConfig})
    }
    //Contact
    static async getContacts() :Promise<AxiosResponse<{data : contact[]}>> {
        return await axios.get(`${this.url}/admin/contacts`,{headers :  this.headerConfig})
    }
    static async getContact(id:string)  :Promise<AxiosResponse<{data : contact[]}>> {
        return await axios.get(`${this.url}/admin/${id}/contact`)
    }
    static async addNewContact(formdata:FormData):Promise<AxiosResponse<{message : string}>> {
        return await axios.post(`${this.url}/contact`,formdata,{headers :  this.headerConfig})
    }
    //Commentary
    static async getCommentaries() :Promise<AxiosResponse<{data : commentary_model[]}>> {
        return await axios.get(`${this.url}/admin/commentaries`,{headers :  this.headerConfig})
    }
    static async getCommentary(id:string):Promise<AxiosResponse<{data : commentary_model[]}>> {
        return await axios.get(`${this.url}/admin/${id}/commentary`,{headers :  this.headerConfig})
    }
    static async addCommentart(formdata:FormData):Promise<AxiosResponse<{message : string}>> {
        return await axios.post(`${this.url}/commentary`,formdata,{headers :  this.headerConfig})
    }
    //like 
    static async like(formdata:FormData) :Promise<AxiosResponse<{message : string}>> {
        return await axios.post(`${this.url}/like`,formdata,{headers :  this.headerConfig})
    }
}

