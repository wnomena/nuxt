import type { AxiosError, AxiosResponse } from "axios"
import { Month, parent_road_list } from "./model"
export function navigate(url:string,query: {name?: string,id?:number|string,mail?:string,parent?: string}) {
        return navigateTo({path : url,query : query})
    }

export function change(e:Event) {
    const v = e.target as HTMLFormElement
    console.log(v.textContent?.length)
}
export function persist_form_error_for_parent(data:FormData):parent_road_list {
     return {
        name : data.get("name") as string,
        description : data.get("desc") as string,
        price : parseInt(data.get("price") as string),
        difficulty : data.get("difficulty") as string,
        period : `${data.get("period_B")} ${data.get("period_E")}`,
        confort : data.get("confort") as string,
        id : 0,
        presentation_image : ""
    }
}
export function add_or_udate(type : string):Boolean | undefined {
    if(type.split(" ")[0] == "Add") {
        return false
    }
    else return true
}
export function period_function(i : string):string {
    let table:string[] = []
    console.log(i);
    
    const a = i.split(" ")
    for(let i of a) {
        table.push(Month(parseInt(i)))
    }
    return `${table[0]} - ${table[1]}`
}
export function forceInt(string:string | undefined) {
    try {
        return parseInt(string as string)
    } catch (error) {
        throw Error("Exited")
    }
}
export function undefinedForceInt(a:string):number|undefined {
    try {
        return parseInt(a.toString())
    } catch (error) {
        return undefined
    }
}
export function redirect401(res:AxiosError) {
    if(res.status == 401 || res.status == 403) navigate("/internal-footer/connexion",{})
}