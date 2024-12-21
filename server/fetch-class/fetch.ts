import { LocationQueryValue } from "vue-router"
// const Store = PiniaStore()
import  axios, { Axios, AxiosHeaders, AxiosResponse } from "axios"
import { child_road_list, commentary_model, contact, fetch_clild_road,member_model, parent_road_list } from "~/all_model/model"
import { PiniaStore } from "~/stores/token"
export class HttpService {
    static url : string = `http://localhost:5000`
    //all get request
    static async get_all_parent_road() : Promise<AxiosResponse<{data :  parent_road_list[]}>> {
        return await axios.get(`${this.url}/get_all/parent_circuit`)
    }
    static async get_one_parent_road(identifiant : number):Promise<AxiosResponse<parent_road_list[]>> {
        return await axios.get(`${this.url}/public_get/parent_way/one_road/${identifiant}`)
    }
    static async get_one_child_road(name : string):Promise<AxiosResponse<child_road_list>> {
        return await axios.get(`${this.url}/public_get/one_road/${name}`)
    }
    static async get_all_child_road(id:string | LocationQueryValue[] | LocationQueryValue):Promise<AxiosResponse<fetch_clild_road>> {
        return await axios.get(`${this.url}/${id}/public/way`)
    }
    static async get_all_member(params : string): Promise<AxiosResponse<{message : string,data :  member_model[]}>> {
        return await axios.get(`${this.url}/get_admin_or_member/${params}`)
    }
    static async get_one_child(name : string | LocationQueryValue | LocationQueryValue[]):Promise<AxiosResponse<child_road_list>>{
        return await axios.get(`${this.url}/public_get/one_road/${name}`)
    }
    static async subscription(body : FormData):Promise<AxiosResponse<{message : string}>> {
        return await axios.post(`${this.url}/subscription_member`,body,{ headers: { 'Content-Type': 'multipart/form-data' }})
    }
    static async login_member( body: FormData ): Promise<AxiosResponse<{message : string, token : string}>> {
        return await axios.post(`${this.url}/login/login_member`, body )
    }
    static async  login_admin(body : FormData):Promise<AxiosResponse<{message : string, token : string}>> {
        return await axios.post(`${this.url}/login`,{ body})
    }
    static async delete_parent_road(id : string): Promise<AxiosResponse<{message : string}>> {
        return await axios.delete(`${this.url}/utilisateurs/:mail/user/deleter/${id}`)
    }

    static async get_all_favorite_road():Promise<AxiosResponse<{message : string,data : child_road_list[]}>> {
        return await axios.get(`${this.url}/get_all/favorite_road`)
    }
    static async add_new_contact(a : FormData):Promise<AxiosResponse<{message : string}>> {
        console.log("------------------------------------------------------------")
        a.forEach((er) => console.log(er))
        return await axios.post(`${this.url}/client_contact`,a)
    }
    // static async delete_member(member_mail: String): Promise<AxiosResponse<{message : string}>> {
    //     return await axios.delete(`${this.url}/utilisateurs/${Store.get_mail_and_type().type}/user/deleter/${member_mail}`)
    // }
    static async put_new_commnetary(body : FormData):Promise<AxiosResponse<{message : string}>> {
        return await axios.post(`${this.url}/add_new/commentary/by/member/${body.get("mail")}`,body)
    }
    static async add_new_admin(body : FormData): Promise<AxiosResponse<{message : string}>> {
        return $fetch(`${this.url}/add_new_admin/${body.get("user_mail")}/${body.get("new_admin")}/${body.get("nom_complet")}`)
    }
    static async get_all_commentary():Promise<AxiosResponse<{message : string, liste :commentary_model[]}>> {
        return await axios.get(`${this.url}/get_all_commentary`)
    }
    static async add_new_parent_road(formData : FormData):Promise<AxiosResponse<{message : string}>> {
        return await axios.post(`${this.url}/utilisateurs/add_avant_post/by_user`,formData)
    }
    static async update_parent_road(formData: FormData):Promise<AxiosResponse<{message : string}>> {
        return await axios.put(`${this.url}/utilisateurs/update_parent_road/by_user/${formData.get("identifiant")}`,formData)
    }
    static async update_child_road(formData : FormData):Promise<AxiosResponse<{message : string}>> {
        return await axios.put(`${this.url}/utilisateurs/update_child_way/by_user`)
    }
    static async add_new_child_road(formData :FormData):Promise<AxiosResponse<{message : string}>> {
        return await axios.post(`${this.url}/utilisateurs/add_unders/circuit/by_users`,formData)
    }
    static async delete_child_road(formData: string):Promise<AxiosResponse<{message : string}>> {
        return await axios.delete(`${this.url}/utilisateurs/delete_/value/of_one/${formData}`)
    }
    static async delete_other_admin(mail:string) {
        //mbola mila gestion d'etat ahafahana maka an le données users
        return await axios.delete(`${this.url}/utilisateurs/delete_admin/by_admin/:user_mail/:member_mail`)
    }
    static async update_pass(a:FormData):Promise<AxiosResponse<{message : string}>> {
        return await axios.put(`${this.url}/utilisateurs/update/password/member/${a.get("mail")}/${a.get("type")}`)
    }
    static async get_contact(name: string):Promise<AxiosResponse<{data : contact[]}>> {
        return await axios.get(`${this.url}/get_all_contact/${name}`)
    }
  }