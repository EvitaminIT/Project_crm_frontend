"use client"
import index from "@/material_component/client_component";
import { MultiLevelSidebar } from "../common/sidebar";
import Admin_hadder from "./admin_header";
import evimg from "../../Images/login1.svg"
import Image from "next/image";
import { getCookie,hasCookie } from "cookies-next";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from 'react-redux';
import { chk_token } from "../Routs/Auth_Routs";
import { useRouter } from "next/navigation";
import { verify_token_api } from "../redux/slices/verifySlice";

const Layout = ({children}) => {
    const router = useRouter()
    const dispatch = useDispatch();
    const status = useSelector((state) => state.verify_Reducer.status);
   
    // verify_token_routs(router,status)
    // console.log(status,"in layout")

    return (
        <>
            <index.Card className="pb-[6px] lg:p-0 rounded-none">
                <div className="grid grid-cols-5 gap-0 rounded-none">
                    <div className="... rounded-none">
                        <MultiLevelSidebar >
                        <Image className="max-w-[66%]" alt='' src={evimg}/> 
                        </MultiLevelSidebar>
                    </div>
                    <div className="col-span-4 ... rounded-none">
                     <div className="rounded-none border-b-4 border-[#F4F4F4]">
                        <Admin_hadder/>
                     </div>
                        {children}
                    </div>
                </div>
            </index.Card>
        </>
    )
}

export default Layout;


 {/* { loginType === "CLINIC" ? <SideBar /> : <StaffSideBar /> } */}