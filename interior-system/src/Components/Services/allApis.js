import { BASEURL } from "./baseUrl";
import { commonAPI } from "./commonAPI";

// register API
export const registerAPI = async(body)=>{
    await commonAPI("POST",`${BASEURL}/register/`,body,"")
}

// login API
export const loginAPI = async(data)=>{
   return await commonAPI("POST",`${BASEURL}login/`,data,"")
}

// product list
export const productlistAPI = async(header)=>{
    return await commonAPI("GET",`${BASEURL}productlist/`,"",header)
 }

//  home category 
 export const diningroomlistAPI = async(id,header)=>{
    return await commonAPI("GET",`${BASEURL}homecategory/${id}`,{},header)
 }

 //  home category 
 export const officelistAPI = async(id,header)=>{
   return await commonAPI("GET",`${BASEURL}officecategory/${id}`,{},header)
}

 