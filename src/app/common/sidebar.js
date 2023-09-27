"use client"
import React from "react"; 
import index from "@/material_component/client_component";
import links from "../adminPanal/admin_sidebar_element";
import Link from "next/link";
import Image from "next/image";
import evimg from "../../Images/login1.svg"

export function MultiLevelSidebar({ children }) {
  

  return (
    <>
    <index.Card className="h-[calc(103vh-2rem)] w-full max-w-[20rem] p-4 shadow-green-900 bg-[#f4f4f4] rounded-none">
      <div className="mb-2 p-4 justify-center flex">
          { children }
      </div>
     <div className="scrollbar-hide overflow-auto hover:overflow-scroll">
     { links.map((link)=>{ 
      return (
        <>  
      <Link href={String(link.navigate)}>   
      <index.List>
        <index.ListItem className="hover:bg-[#2f3642] p-0 hover:text-white group">
          <index.ListItemPrefix>
            {link.icon}
          </index.ListItemPrefix>
          {link.title}
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