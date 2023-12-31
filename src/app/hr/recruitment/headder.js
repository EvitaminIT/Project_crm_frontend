import index from "@/material_component/client_component"
import donicon from "../../../Images/donload.svg"
import uploadicon from "../../../Images/upload.png"
import Image from "next/image"

export default function Headder({
  top_name,
  breadCrums_first,
  breadCrums_second,
}) {
  return (
   <>
   <br/>
   <div className="grid grid-cols-3 gap-2">
    <div>
    <index.Typography  className="text-xl text-[#67B037] font-poppins">{top_name}</index.Typography>
       <div className="grid xl2:grid-cols-2 gap-2 mb-[5px]">
        <div className="flex">
        <div className="flex">
        <index.Typography className="text-[#67B037] font-poppins">{breadCrums_first}<index.ArrowForwardIosIcon className="!text-xs" /></index.Typography>
        <index.Typography className="text-[#979BA1]">{breadCrums_second}</index.Typography>
        </div>   
      </div>
      </div>
      </div>
    <div></div>  
    <div className="flex justify-end"> 
      <index.IconButton className="bg-[#67B037] mr-2"> <index.SearchIcon/> </index.IconButton>
      <index.IconButton className="bg-[#67B037] mr-2"><div className="flex justify-center"> <Image className="max-w-[87%]" alt='' src={uploadicon}/> </div> </index.IconButton>
      <index.IconButton className="bg-[#67B037]"><div className="flex justify-center"> <Image className="max-w-[87%]" alt='' src={donicon}/> </div> </index.IconButton>
    </div>
    </div>

   </>
  )
}
