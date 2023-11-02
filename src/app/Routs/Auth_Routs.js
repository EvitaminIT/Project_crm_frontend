import { toast } from "react-toastify"

export const auth_routs =(router,lod,user)=>{
  if(lod==="fulfilled"){
    router.push('/adminPanal/deshbord')     
    // toast.success("Login sucess")
  }
}