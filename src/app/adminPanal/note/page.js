"use client"
import React from 'react'
import index from '@/material_component/client_component'
import { data,all_task } from './SSRcompnent'
import { SpeedDial_add } from './add_speeddiler'
import Taglist from './taglist'

export default function page() {
  return (
    <div className='p-[29px] pt-[3px] pb-0'>
        <index.Typography className="text-[#67B037] font-poppins">Notes</index.Typography>
       <div className="grid grid-cols-2 gap-2 mb-[5px]">
        <div className="flex">
        <div className="flex">
        <index.Typography className="text-[#67B037] font-poppins">Home <index.ArrowForwardIosIcon className="text-xs" /></index.Typography>
        <index.Typography className="text-[#979BA1]">Notes</index.Typography>
        </div>   
      </div>
       <div>
      </div>
      </div>
     <div>
        {/* <index.Typography className='font-poppins'>Notes</index.Typography> */}
     </div>
     <div className='grid grid-cols-2 gap-4 lg:h-[78vh]'>
      <div className='lg:h-[97%] overflow-auto scrollbar-hide'>
        <div className='grid grid-cols-2 gap-4 '>
           
          {data.map((taskdata)=>{
            return(<>
            <index.Card className={taskdata.urgency_type ==="Low" ?  'border-2 border-[#BABABA]': taskdata.urgency_type==="Medium" ? 'border-2 border-[#BABABA] bg-[#EEFBFF]' :'border-2 border-[#BABABA] bg-[#FFF2F2]'}>
              <div className='flex justify-between p-4 border-b-2 border-[#F4F4F4]'>
                <index.Typography className={taskdata.urgency_type ==="Low" ? 'font-poppins text-[#67B037]': taskdata.urgency_type==="Medium" ? "font-poppins text-[#46A5C6]":"font-poppins text-[#E55B5B]"}>{taskdata.title}</index.Typography>
                <index.MoreVertIcon className={taskdata.urgency_type ==="Low" ? 'text-[#67B037]': taskdata.urgency_type==="Medium" ? "text-[#46A5C6]":"text-[#E55B5B]"}/>
              </div>
              <div className='p-4'>
              <index.Typography className='font-poppins'>
               {taskdata.discription}
              </index.Typography>
              <br/>
              <index.Typography className='font-poppins'>
              {taskdata.sub_discription}
              </index.Typography>
              <div className='flex justify-between'>
              <Taglist avtar_list={taskdata.tags}/>
              <SpeedDial_add/>
              </div>
              </div>
            </index.Card>

            </>)
          })}
           
        </div>
        </div>
        <index.Card className='border-2 border-[#BABABA] lg:h-[76vh]'>
        <div className="border-b-2 border-[#F4F4F4] p-4 flex justify-between">
            <index.Typography className="font-poppins text-[#E55B5B]">Reminder</index.Typography>
            <index.MoreVertIcon className='text-[#E55B5B]' />
        </div>
          <div className='h-full overflow-auto scrollbar-hide'>
              {all_task.map((tsk)=>{
                return(
                  <>
              <index.CardBody className="p-2">
                <div className="rounded-md grid grid-cols-4 gap-4 lg:grid-cols-10  bg-[#F4F4F4] px-[10px] py-[7px]">                
                  <div className={tsk.dead_line ? "bg-[#FFD6D6] rounded-md flex items-center justify-center": "bg-[#FFFFFF] rounded-md flex items-center justify-center"}>
                  <index.SubjectIcon className={tsk.dead_line ? "text-5xl text-[#E55B5B] lg:text-10xl": "text-5xl text-[#67B037] lg:text-10xl"}/>
                </div>
                <div className="col-span-3 lg:col-span-9">
                  <index.Typography className={tsk.dead_line ? "font-poppins text-[#E55B5B]": "font-poppins text-[#67B037]"}>{tsk.title}</index.Typography>
                  <index.Typography className="text-xs ">{tsk.date_and_time}</index.Typography>
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
};
