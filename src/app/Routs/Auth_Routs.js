import { toast } from "react-toastify"


export const auth_routs =(router,lod,user)=>{
  if(lod==="fulfilled"){
    router.push('/adminPanal/deshbord')     
    // toast.success("Login sucess")
  }
}


// export const verify_token_routs = (router,stat)=>{
//   if (stat!=200){
//     router.push('/') 
//   }
// }