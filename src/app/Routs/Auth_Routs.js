import { deleteCookie } from "cookies-next";

function getAccountType(argument) {
    const typeMap = {
        "HR":"/hr/deshbord",
        "SUB_ADMIN":'/adminPanal/deshbord'
    };

    return typeMap[argument];
}



export const auth_routs =(router,lod,user)=>{
  if(lod==="fulfilled"){
    router.push(getAccountType(user))     
  }
}

export const chk_token =(router)=>{
    router.push("/")
    deleteCookie("tokenErr")
}


