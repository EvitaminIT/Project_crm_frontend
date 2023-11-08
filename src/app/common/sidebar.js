"use client"
import React from "react"; 
import index from "@/material_component/client_component";
import Elements from "../adminPanal/admin_sidebar_element";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { logout } from "../redux/slices/LogoutSlice";
import { useDispatch } from "react-redux";
import { verify_token_api } from "../redux/slices/verifySlice";
import { hasCookie,deleteCookie,getCookie } from 'cookies-next';


export function MultiLevelSidebar({ children }) {
   const pathname = usePathname();
   const dispatch = useDispatch();

  const very_token =()=>{
   if(hasCookie('token')){
    const token={"token":getCookie('token')}
    dispatch(verify_token_api(token))  
    }
  }

   const logot=()=>{
   deleteCookie('token')
   dispatch(logout)
   very_token()
   }
  return (
    <>
    <index.Card className="h-[calc(103vh-2rem)] w-full max-w-[20rem] shadow-green-900 bg-[#f4f4f4] rounded-none">
      <div className="mb-2 p-4 justify-center flex">
          { children }
      </div>
     <div className="scrollbar-hide overflow-auto hover:overflow-scroll">
     { Elements.map((ele)=>{ 
      return (
        <>  
      <Link onClick={String(ele.navigate)==="/"? logot : very_token} href={String(ele.navigate)}>   
      <index.List>
        <index.ListItem className="hover:bg-[#2f3642] p-0 hover:text-white group focus:text-white group focus:bg-[#2f3642]">
          <index.ListItemPrefix >
            {ele.icon}
          </index.ListItemPrefix>
          {ele.title}
        </index.ListItem>
      </index.List>
      </Link>
      </>
      )
    })}
    </div>
    </index.Card>
    </>
  );
}