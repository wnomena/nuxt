import { LocationQueryValue } from "vue-router"
import  axios, { Axios, AxiosHeaders, AxiosResponse } from "axios"
import { child_road_list, commentary_model, contact, fetch_clild_road,member_model, parent_road_list } from "~/all_model/model"
export class HttpService {
     private static url = ""
     static async getParents() :Promise<AxiosResponse<{data : parent_road_list[]}>> {
        return await axios.get(`${this.url}/parent`)
     }
     static async getParent(id:number):Promise<AxiosResponse<{data : parent_road_list[]}>> {
        return await axios.get(`${this.url}/${id}/parent`)
     }
     static async insertParent(data:FormData) :Promise<AxiosResponse<{message : string}>> {
        return await axios.post(`${this.url}/admin/insert/parent`,data)
     }
     static async updateParent(data:FormData) :Promise<AxiosResponse<{message : string}>> {
        return await axios.put(`${this.url}/admin/update/parent`,data)
     }
     static async deleteParent(id: number)  :Promise<AxiosResponse<{message : string}>> {
        return await axios.delete(`${this.url}/admin/delete/${id}/parent`)
     }
    //child
    static async getChilds(parent:number):Promise<AxiosResponse<{data :child_road_list[]}>> {
        return await axios.get(`${this.url}/${parent}/child`)
     }
    static async getChild(id:number) :Promise<AxiosResponse<{data : child_road_list[]}>> {
        return await axios.get(`${this.url}/${id}/child`)
     }
    static async insertChild(formdata:FormData):Promise<AxiosResponse<{message : string}>> {
        return await axios.post(`${this.url}/admin/insert/child`,formdata)
     }
    static async updateChild(formdata:FormData):Promise<AxiosResponse<{message : string}>> {
        return await axios.put(`${this.url}/admin/update/child`,formdata)
     }
    static async deleteChild(id:number):Promise<AxiosResponse<{message : string}>> {
        return await axios.delete(`${this.url}/admin/delete/${id}/child`)
     }
    //User
    static async loginUser(formdata:FormData):Promise<AxiosResponse<{message : string,code : number}>> {
        return await axios.post(`${this.url}/login`,formdata)
     }
    static async getUsers():Promise<AxiosResponse<{message : member_model}>> {
        return await axios.post(`${this.url}/users`)
    }
    static async updateUserPass(formdata:FormData):Promise<AxiosResponse<{message : string}>> {
        return await axios.put(`${this.url}/password`,formdata)
    }
    static async addNewAdmin(formdata:FormData):Promise<AxiosResponse<{message : string}>> {
        return await axios.put(`${this.url}/admin/new`,formdata)
    }
    //Member
    static async getAllMember() :Promise<AxiosResponse<{data: member_model[]}>> {
        return await axios.get(`${this.url}/admin/all`)
    }
    static async loginMember(formdata:FormData) :Promise<AxiosResponse<{message : string,code : number}>> {
        return await axios.post(`${this.url}/login/member`,formdata)
    }
    static async SignUp(formdata:FormData) :Promise<AxiosResponse<{message : string}>> {
        return await axios.post(`${this.url}/signup`,formdata)
    }
    static async updateMemberPass(formdata:FormData) :Promise<AxiosResponse<{message : string}>> {
        return await axios.put(`${this.url}/password`,formdata)
    }
    static async deleteMember(id:number) :Promise<AxiosResponse<{message : string}>> {
        return await axios.delete(`${this.url}/admin/member/${id}/delete`)
    }
    //Contact
    static async getContacts() :Promise<AxiosResponse<{data : contact[]}>> {
        return await axios.get(`${this.url}/contacts`)
    }
    static async getContact(id:string)  :Promise<AxiosResponse<{data : contact[]}>> {
        return await axios.get(`${this.url}/${id}/contact`)
    }
    static async addNewContact(formdata:FormData):Promise<AxiosResponse<{message : string}>> {
        return await axios.post(`${this.url}/contact`,formdata)
    }
    //Commentary
    static async getCommentaries() :Promise<AxiosResponse<{data : commentary_model[]}>> {
        return await axios.get(`${this.url}/commentaries`)
    }
    static async getCommentary(id:string):Promise<AxiosResponse<{data : commentary_model[]}>> {
        return await axios.get(`${this.url}/${id}/commentary`)
    }
    static async addCommentart(formdata:FormData):Promise<AxiosResponse<{message : string}>> {
        return await axios.post(`${this.url}/commentary`,formdata)
    }
    //like 
    static async like(formdata:FormData) :Promise<AxiosResponse<{message : string}>> {
        return await axios.post(`${this.url}/like`,formdata)
    }
}

