import { LocationQueryValue } from "vue-router"
import  axios, { Axios, AxiosResponse } from "axios"
import { LocalStorageService } from "./localStorage"
import { child_road_list, commentary_model, fetch_clild_road, fetch_model, member_model, parent_road_list } from "~/all_model/model"
export class HttpService {
    static url : string = `https://web.caponmada.com`
    //all get request
    static async get_all_parent_road() : Promise<AxiosResponse<parent_road_list>> {
        return await axios.get(`${this.url}/get_all/parent_circuit`)
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
    static async subscription(body : {nom_complet : LocationQueryValue | LocationQueryValue[], mail : LocationQueryValue | LocationQueryValue[], mot_de_passe : string}):Promise<AxiosResponse<{message : string}>> {
        return await axios.post(`${this.url}/subscription_member`,body)
    }
    static async login_member( body: { mail: string; mot_de_passe: string} ): Promise<AxiosResponse<{message : string, token : string}>> {
        return await axios.post(`${this.url}/login/login_member`, body )
    }
    static async  login_admin(body : {mail : string, mot_de_passe : string}):Promise<AxiosResponse<{message : string, token : string}>> {
        return axios.post(`${this.url}/login`,{ body})
    }
    static async delete_parent_road(id : string): Promise<AxiosResponse<{message : string}>> {
        let mail : string | null = LocalStorageService.getValueFormSessionStorage("id_for_member_or_admin")
        return await axios.delete(`${this.url}/utilisateurs/${mail}/user/deleter/${id}`)
    }

    static async get_all_favorite_road():Promise<AxiosResponse<{message : string,data : child_road_list[]}>> {
        return await axios.get(`${this.url}/get_all/favorite_road`)
    }
    static async delete_member(member_mail: String): Promise<AxiosResponse<{message : string}>> {
        return await axios.delete(`${this.url}/utilisateurs/${LocalStorageService.getValueFormSessionStorage("id_for_admin_or_member")}/user/deleter/${member_mail}`)
    }
    static async put_new_commnetary(string_commentary:string, mail : string):Promise<AxiosResponse<{message : string}>> {
        return await axios.post(`${this.url}/add_new/commentary/by/member/${mail}`,{
                mail : mail,
                string_commentary : string_commentary
            
        })
    }
    static async add_new_admin(user_mail:string,new_admin : string,nom_complet:string): Promise<AxiosResponse<{message : string}>> {
        return $fetch(`${this.url}/add_new_admin/${user_mail}/${new_admin}/${nom_complet}`)
    }
    static async get_all_commentary():Promise<AxiosResponse<{message : string, liste :commentary_model[]}>> {
        return await axios.get(`${this.url}/get_all_commentary`)
    }
  }