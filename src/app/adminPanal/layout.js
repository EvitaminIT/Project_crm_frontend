"use client"
import index from "@/material_component/client_component";
import { MultiLevelSidebar } from "../common/sidebar";
import Admin_hadder from "./admin_header";
import evimg from "../../Images/login1.svg"
import Image from "next/image";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { useRouter } from "next/navigation";
import Elements from "./admin_sidebar_element";

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
                        <MultiLevelSidebar elements={Elements}>
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


 