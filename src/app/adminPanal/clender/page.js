"use client"
import index from "@/material_component/client_component"
import DatePickerComponent from "./calander"


export default function page() {
  return (
    <div className='p-[29px] pt-[3px] overflow-auto'>
      <index.Typography className="text-[#67B037] font-poppins">Calender</index.Typography>
      <div className="grid grid-cols-2 gap-2 mb-[5px]">
        <div className="flex">
        <div className="flex">
        <index.Typography className="text-[#67B037] font-poppins">Home <index.ArrowForwardIosIcon className="text-xs" /></index.Typography>
        <index.Typography className="text-[#979BA1]">Calender</index.Typography>
        </div>   
      </div>
       <div className="flex justify-end">
      <index.Button className="bg-[#67B037] p-0 flex items-center justify-center"><index.AddIcon/></index.Button>
      </div>
      </div>
      <div className="grid grid-cols-3 gap-4 overflow-auto h-[68vh]">
        <div className="col-span-2 ">
        <DatePickerComponent />
        </div>
      </div>
    </div>
  )
}
