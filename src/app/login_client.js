"use client"
import Image from "next/image";
import login_first from "../Images/login1.svg"
import login_second from "../Images/login2.svg"
import index from "../material_component/client_component";
import { HeightRounded } from "@mui/icons-material";
   

  export default function SimpleRegistrationForm() {
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
                  >
                    Email ID
                  </index.Typography>
            <index.Input className="ml-0 bg-[#3b4453] shadow-sm border-gray-300 rounded-lg m-2 focus:ring-2 ring-green-300 focus:shadow-[0_-1px_10px_rgba(103,176,55,1)] " size="lg" 
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
                  >
                    Password
                  </index.Typography>
            <index.Input className="ml-0 bg-[#3b4453] shadow-sm border-gray-300 rounded-lg m-2 focus:ring-2 ring-green-300 focus:shadow-[0_-1px_10px_rgba(103,176,55,1)] " type="password" size="lg" 
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
          <index.Button className="mt-6 bg-[#67b037]" fullWidth>
            Login
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
        <Image className="max-w-[40%] float-right" src={login_first} />
        <Image className="mt-8 max-w-[94%] float-right" src={login_second}/>
        </div>
      </div>
      </div>
    );
  }

  