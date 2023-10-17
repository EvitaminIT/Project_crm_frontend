"use client"
import index from "@/material_component/client_component"
import DatePickerComponent from "./calander"
import { tab_chk,all_task } from "./SSRcomponent"


export default function page() {
 
  console.log(tab_chk,"tttttt")
  if(tab_chk==="month"){
    console.log("yes")
  }

  return (
    <div className='p-[29px] pt-[3px] pb-0 overflow-auto'>
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
          <index.Card className="border-2 border-[#BABABA] rounded-md overflow-auto scrollbar-hide">
            <div className="border-b-2 border-[#F4F4F4]">
            <index.Typography className="font-poppins p-4">Task</index.Typography>
            </div>
            <div>
              {all_task.map((tsk)=>{
                return(
                  <>
              <index.CardBody className="p-2">
                <div className="rounded-md grid grid-cols-4 gap-4 bg-[#F4F4F4] px-[10px] py-[7px]">                
                  <div className={tsk.dead_line ? "bg-[#FFD6D6] rounded-md flex items-center": "bg-[#FFFFFF] rounded-md flex items-center"}>
                  <index.SubjectIcon className={tsk.dead_line ? "text-5xl text-[#E55B5B]": "text-5xl text-[#67B037]"}/>
                </div>
                <div className="col-span-3">
                  <index.Typography className={tsk.dead_line ? "font-poppins text-[#E55B5B]": "font-poppins text-[#67B037]"}>{tsk.title}</index.Typography>
                  <index.Typography className="text-xs">{tsk.date_and_time}</index.Typography>
                </div>
                </div>
              </index.CardBody>
              </>
                )
              })}
            </div>
          </index.Card>
      </div>
    </div>
  )
}
