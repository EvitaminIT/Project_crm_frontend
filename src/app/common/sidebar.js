"use client"
import React from "react"; 
import index from "@/material_component/client_component";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { logout } from "../redux/slices/LogoutSlice";
import { useDispatch } from "react-redux";
import { verify_token_api } from "../redux/slices/verifySlice";
import { hasCookie,deleteCookie,getCookie } from 'cookies-next';


export function MultiLevelSidebar({ children,elements }) {
   const pathname = usePathname();
   const dispatch = useDispatch();
   const [open, setOpen] = React.useState(0);
 
   console.log(pathname,"pname")

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

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
     { elements.map((ele)=>{ 
   
       return (
         <>  
      {ele.sub_menu ? 
      
      <index.List>
      <index.Accordion
        open={open === 1}
        icon={
          <index.ChevronDownIcon
            strokeWidth={2.5}
            className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""} ${pathname.includes("recruitment") ? "text-white mr-4":"mr-4"}`}
          />
        }
      >
        <index.ListItem className={pathname.includes("recruitment") ? "hover:text-[#67B037] p-0 !text-white group !bg-[#2f3642]" : "hover:text-[#67B037] group p-0"} selected={open === 1}>
          <index.AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-0">
            <index.ListItemPrefix>
            <div className={pathname.includes("recruitment") ? "bg-[#67b037] text-white rounded-[8px] ":""}>
              {ele.icon}
            </div>
            </index.ListItemPrefix>
            <index.Typography color={pathname.includes("recruitment") ? "white": " "} className="mr-auto font-normal">
              {ele.title}
            </index.Typography>
          </index.AccordionHeader>
        </index.ListItem>
        <index.AccordionBody className="py-1">
          <index.List className="p-0">        
          {ele.sub_menu.map((sub)=>{
            return(
              <>
              <Link onClick={String(ele.navigate)==="/"? logot : very_token}  href={String(sub.navigate)}>
              <index.ListItem className={pathname===String(sub.navigate) ? "!text-[#67B037]":""}>
              <index.ListItemPrefix className="mr-[2.5rem]">
              </index.ListItemPrefix>
              {sub.title}
              </index.ListItem>
              </Link>
              {/* {pathname}{" "}{sub.navigate} */}
              </>
            )
          })}
          </index.List>
        </index.AccordionBody>

      </index.Accordion>
    </index.List>

       :

      <Link onClick={String(ele.navigate)==="/"? logot : very_token} href={String(ele.navigate)}>   
      <index.List>
        <index.ListItem className={pathname===ele.navigate ? "hover:text-[#67B037] p-0 !text-white group !bg-[#2f3642]" : "hover:text-[#67B037] group p-0"}>
          <index.ListItemPrefix >
            <div className={pathname===ele.navigate ? "bg-[#67b037] rounded-[8px]":""}>
            {ele.icon}
            </div>
          </index.ListItemPrefix>
          {ele.title}
        </index.ListItem>
      </index.List>
      </Link>
      }  
      {/* { ele.sub_menu ? "yes":"" } */}
      </>
      )
    })}
    </div>
    </index.Card>
    </>
  );
}