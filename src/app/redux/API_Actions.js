import Base_API_Service from "@/API/base_API";
import { API } from "@/API/APIs";


export const Login = async (data) => {
    // setHeadersWithAccessToken(token);
    return await Base_API_Service.post(API.Auth.login,data)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err.response
      });
  };


  export const Login2 = (state,actions) => {
     console.log(actions)
  };





