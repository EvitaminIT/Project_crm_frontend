import index from "@/material_component/client_component";
import Image from "next/image";
import React from "react";
import { DialogCustomAnimation } from "./diloge2";
import { Policy } from "./SSRcomponent";
 
export default function Body() {
    
  return (
    <div className="grid grid-cols-3 gap-4">
    
    {Policy.map((data)=>{
      return(
        <>
     <index.Card className="border-2 border-[#BABABA] p-4">
      <div>
        <div className="flex justify-end">
          <index.IconButton className="bg-transparent shadow-none hover:shadow-none">
        <index.MoreVertIcon className='text-[#67B037] float-right'/>
          </index.IconButton>
        </div>
        <div className="flex justify-center">
            <Image className="h-[28vh]" src={data.img}/>
        </div>
        <div>
        <div className="text-center mt-4 h-[47%]">
          <index.Typography className="font-poppins font-semibold text-[#67B037] text-lg">{data.title}</index.Typography>
          <index.Typography className="font-poppins ">{data.short_tile}</index.Typography>
          {/* <index.Button className="bg-[#67B037] px-40 mt-4">View More</index.Button> */}
          <DialogCustomAnimation/>
        </div>
        </div>
      </div>
     </index.Card>
        </>
      )
    })}

    </div>
  );
}