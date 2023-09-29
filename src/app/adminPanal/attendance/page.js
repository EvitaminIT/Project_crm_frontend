"use client"
import React from 'react'
import index from '@/material_component/client_component'
import Image from 'next/image'
import donicon from "../../../Images/donload.svg"
import messageicon from "../../../Images/message.svg"
import DatePickerComponent from './calander'
import Attendance_overview from './SSRcomponenet'


export default function page() {
  return (
    <>
    <div className='h-[32.6rem] p-[29px] pt-[3px]'>
    <index.Typography className="text-[#67B037] font-poppins">Attendance</index.Typography>
    <div className="grid grid-cols-2 gap-2 mb-[5px]">
        <div className="flex">
        <div className="flex">
        <index.Typography className="text-[#67B037] font-poppins">Home <index.ArrowForwardIosIcon className="text-xs" /></index.Typography>
        <index.Typography className="text-[#979BA1]">Attendance</index.Typography>
        </div>   
      </div>
      

       <div className="flex justify-end">
      <index.Button className="bg-[#67B037] p-0 flex items-center justify-center mr-[10px]"><index.AddIcon/></index.Button>
      <index.Button className="bg-[#67B037] p-[2px] flex items-center justify-center mr-[10px]"> <Image className="max-w-[60%]" src={donicon}/></index.Button>
      <index.Button className="bg-[#E55B5B] p-[2px] flex items-center justify-center"> <Image className="max-w-[60%]" src={messageicon}/></index.Button>
      </div>
      </div>
     
    {/* calendar */}

    <div className='grid grid-cols-2 gap-4'>
        {/* calendar */}
          <index.Card className='border-2 border-[#BABABA] col-span-1 ...'>
        <DatePickerComponent/>
        </index.Card>
        <index.Card className='border-2 border-[#BABABA] p-3'>
          <div className='text-center flex grid grid-cols-11 gap-0'>           
            <index.Typography className='col-span-10 ... text-center ml-[30px]' variant='h5'> Current Month Attendance Overview </index.Typography>
           <index.MoreVertIcon className='ml-[15px]'/>
           </div>
           
          {Attendance_overview.map((overviws)=>{
            return(
              <>
           <div>
            <div className='grid grid-cols-2 gap-0 px-[10px] pb-0 py-[15px]'>
           <index.Typography className='font-poppins'>{overviws.title}</index.Typography>
           <div>
           <index.Chip className={`w-fit float-right ${overviws.colour}`}value={overviws.total}/>
           </div>
           </div>
           </div>
           
           </>
            )
          })}
        </index.Card>
    </div>


    </div>
    </>
  )
}
