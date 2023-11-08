"use client"
import index from "@/material_component/client_component";
import { MultiLevelSidebar } from "./sidebar";
import Admin_hadder from "../adminPanal/admin_header";
import evimg from "../../Images/login1.svg"
import Image from "next/image";

const Layout = ({children}) => {

    // const loginType = useSelector((state) => state.login.type);

    return (
        <>
            <index.Card className="">
                <index.Card className="grid grid-cols-4 gap-0">
                    <index.Card className="...">
                        {/* <MultiLevelSidebar/> */}
                        <MultiLevelSidebar>
                        <Image className="max-w-[66%]" alt="" src={evimg}/> 
                        </MultiLevelSidebar>
                    </index.Card>
                    <index.Card className="col-span-3 ...">
                     <index.Card>
                        <Admin_hadder/>
                     </index.Card>
                        {children}
                    </index.Card>
                </index.Card>
            </index.Card>
        </>
    )
}

export default Layout;


 {/* { loginType === "CLINIC" ? <SideBar /> : <StaffSideBar /> } */}