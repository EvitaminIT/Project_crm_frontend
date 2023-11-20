import index from "@/material_component/client_component"
import uploadicon from "../../../../Images/upload.png"
import donicon from "../../../../Images/donload.svg"
import Image from "next/image"

export default function Headder() {
  return (
    <>
    <div className="">
    <index.Typography className="text-[#67B037] font-poppins">Recruitment</index.Typography>
    <div className="grid grid-cols-2 gap-2 mb-[5px]">
        <div className="flex">
        <div className="flex">
        <index.Typography className="text-[#67B037] font-poppins">Recruitment<index.ArrowForwardIosIcon className="text-xs" /></index.Typography>
        <index.Typography className="text-[#979BA1]">Create Job</index.Typography>
        </div>   
      </div>
       <div className="flex justify-end">
      <index.Button className="bg-[#67B037] p-[2px] flex items-center justify-center mr-[10px]"> <Image className="max-w-[60%]" alt='' src={uploadicon}/></index.Button>
      <index.Button className="bg-[#67B037] p-[2px] flex items-center justify-center mr-[10px]"> <Image className="max-w-[60%]" alt='' src={donicon}/></index.Button>
      <index.Button className="bg-[#67B037] p-0 flex items-center justify-center"><index.AddIcon/></index.Button>
      </div>
      </div>
    </div>
    </>
  )
}
