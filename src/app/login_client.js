"use client"
import Image from "next/image";
import login_first from "../Images/login1.svg"
import login_second from "../Images/login2.svg"
import index from "../material_component/client_component";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { auth_routs } from "./Routs/Auth_Routs";
import { useEffect } from "react";
import { hasCookie,deleteCookie,getCookie } from 'cookies-next';
import { usePathname } from "next/navigation";
import { postApiData } from "./redux/slices/AuthSlice";


  export default function SimpleRegistrationForm() {
    const path = usePathname()
    const dispatch = useDispatch();
    const [authDetails, setAuthDetails] = React.useState()
    const router = useRouter()
    const onChange = (e) => {
    setAuthDetails({ ...authDetails, [e.target.name]: e.target.value })
    }
    const chk_cookie=hasCookie('token')
    const data = useSelector((state) => state.myReducer.data);
    const loading = useSelector((state) => state.myReducer.loading);
    const error = useSelector((state) => state.myReducer.error);
    const userType = useSelector((state) => state.myReducer.user_type);

    // console.log((userType),"in login")
    chk_cookie ? auth_routs(router,loading,userType):""
    
    deleteCookie('tokenErr')

    const loginDispatch =()=>{
        dispatch(postApiData(authDetails))
    }
    
    // path == "/" ?  hasCookie("token")? deleteCookie("token"):"" :""

    return (
  
      <div className="grid grid-cols-12 bg-[#2f3642]">
     <div className="col-span-7 flex justify-center min-h-screen flex-col items-center justify-between p-24">
      <index.Card color="transparent" shadow={false}>
        <index.Typography variant="h4" className="text-[#67b037] text-center text-5xl font-semibold ..." >
        Welcome Back
        </index.Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <div>
            <index.Typography
                    variant="small"
                    color="white"
                    className="mb-4 font-semibold ..."
                    labelProps={{
                      className: "hidden",
                    }}
                  >
                    Email ID
                  </index.Typography>
            <index.Input onChange={onChange} name='email' className="!border !border-gray-300 ml-0 bg-[#3b4453] border-gray-300 rounded-lg m-2 focus:ring-2 ring-green-300 focus:shadow-[0_-1px_10px_rgba(103,176,55,1)] focus:border-none" size="lg" 
             labelProps={{
              className: "before:content-none after:content-none",
            }}
            containerProps={{
              className: "",
            }}/>
            </div>
            <div>
            <index.Typography
                    variant="small"
                    color="white"
                    className="mb-4 font-semibold ..."
                    labelProps={{
                      className: "hidden",
                    }}
                  >
                    Password
                  </index.Typography>
            <index.Input onChange={onChange} name='password' className="!border !border-gray-300 ml-0 bg-[#3b4453] border-gray-300 rounded-lg m-2 focus:ring-2 ring-green-300 focus:shadow-[0_-1px_10px_rgba(103,176,55,1)] focus:border-none" type="password" size="lg" 
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              containerProps={{
                className: "",
              }}/>
            </div>
          </div>
          <index.Checkbox
            label={
              <index.Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal text-white"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900 text-[#67b037]"
                >
                  &nbsp;Terms and Conditions
                </a>
              </index.Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <index.Button onClick={loginDispatch} className="mt-6 bg-[#67b037] flex justify-center" fullWidth>
            {loading == "pending" ? <index.Spinner color="green" /> : "Login" }
          </index.Button>
          <index.Typography color="gray" className="mt-4 text-center font-normal text-white">
            Already have an account?{" "}
            <a href="#" className="font-medium text-[#67b037]">
              Sign In
            </a>
          </index.Typography>
        </form>
      </index.Card>
      </div>
      <div className="col-span-5">
        <div className="bg-[#ffffff] p-[30px] h-full">
        <Image className="max-w-[40%] float-right" alt="" src={login_first} />
        <Image className="mt-8 max-w-[94%] lg:max-w-[80%] float-right" alt="" src={login_second}/>
        </div>
      </div>
      </div>
    );
  }

  