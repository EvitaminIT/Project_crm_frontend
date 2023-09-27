"use client"
import index from "@/material_component/client_component";
import { MultiLevelSidebar } from "../common/sidebar";
import Admin_hadder from "./admin_hadder";
import evimg from "../../Images/login1.svg"
import Image from "next/image";

const Layout = ({children}) => {

    // const loginType = useSelector((state) => state.login.type);

    return (
        <>
            <index.Card className="pb-[6px] rounded-none">
                <div className="grid grid-cols-4 gap-0 rounded-none">
                    <div className="... rounded-none">
                        <MultiLevelSidebar>
                        <Image className="max-w-[66%]" src={evimg}/> 
                        </MultiLevelSidebar>
                    </div>
                    <div className="col-span-3 ... rounded-none">
                     <index.Card className="rounded-none">
                        <Admin_hadder/>
                     </index.Card>
                        {children}
                    </div>
                </div>
            </index.Card>
        </>
    )
}

export default Layout;


 {/* { loginType === "CLINIC" ? <SideBar /> : <StaffSideBar /> } */}