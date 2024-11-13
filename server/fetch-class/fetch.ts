import { LocationQueryValue } from "vue-router"
import { LocalStorageService } from "./localStorage"
import { child_road_list, commentary_model, fetch_clild_road, fetch_model, member_model } from "~/all_model/model"
export class HttpService {
    static url : string = `https://web.caponmada.com`
    //all get request
    static get_all_parent_road() : Promise<fetch_model> {
        return $fetch(`${this.url}/get_all/parent_circuit`)
    }
    static get_all_child_road(id:string | LocationQueryValue[] | LocationQueryValue):Promise<fetch_clild_road> {
        return $fetch(`${this.url}/${id}/public/way`)
    }
    static get_all_member(params : string): Promise<{data :  member_model[]}> {
        return $fetch(`${this.url}/get_admin_or_member/${params}`)
    }
    static get_one_child(name : string | LocationQueryValue | LocationQueryValue[]):Promise<{message : string, data : child_road_list}> {
        return $fetch(`${this.url}/public_get/one_road/${name}`)
    }
    static async subscription(body : {nom_complete : LocationQueryValue | LocationQueryValue[], mail : LocationQueryValue | LocationQueryValue[], mot_de_passe : string}): Promise<{message : string}> {
        return await $fetch(`${this.url}/subscription_member`,{
            method : "POST",
            body : body
        })
    }
    static login_member( body: { mail: string; mot_de_passe: string} ): Promise<{message : string, token : string}> {
        return $fetch(`${this.url}/login_member`,{
            method : "POST",
            body : body
        })
    }
    static login_admin(body : {mail : string, mot_de_passe : string}):Promise<{message : string, token : string}> {
        return $fetch(`${this.url}/login`,{
            method : "POST",
            body : body
        })
    }
    static delete_parent_road(id : string): Promise<{message : string}> {
        let mail : string | null = LocalStorageService.getValueFormSessionStorage("id_for_member_or_admin")
        return $fetch(`${this.url}/utilisateurs/${mail}/user/deleter/${id}`)
    }

    static get_all_favorite_road():Promise<{data : child_road_list[]}> {
        return $fetch(`${this.url}/get_all/favorite_road`)
    }
    static delete_member(member_mail: String): Promise<{message : string}> {
        return $fetch(`${this.url}/utilisateurs/${LocalStorageService.getValueFormSessionStorage("id_for_admin_or_member")}/user/deleter/${member_mail}`)
    }
    static put_new_commnetary(string_commentary:string, mail : string):Promise<{message : string}> {

        return $fetch(`${this.url}/add_new/commentary/by/member/${mail}`,{
            method : "POST",
            body : {
                mail : mail,
                string_commentary : string_commentary
            }
        })
    }
    static add_new_admin(user_mail:string,new_admin : string,nom_complet:string): Promise<{message : string}> {
        return $fetch(`${this.url}/add_new_admin/${user_mail}/${new_admin}/${nom_complet}`)
    }
    static get_all_commentary():Promise<{message : string, liste :commentary_model[]}> {
        return $fetch(`${this.url}/get_all_commentary`)
    }
  }