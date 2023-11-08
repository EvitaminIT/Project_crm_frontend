import { deleteCookie } from "cookies-next";


export const auth_routs =(router,lod,user)=>{
  if(lod==="fulfilled"){
    router.push('/adminPanal/deshbord')     
  }
}

export const chk_token =(router)=>{
    router.push("/")
    deleteCookie("tokenErr")
}


