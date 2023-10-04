"use client"
import React from 'react'
import index from '@/material_component/client_component'
import Image from 'next/image'
import uploadicon from "../../../Images/upload.png"
import donicon from "../../../Images/donload.svg"
import project_component from './SSRcomponent'


export default function page() {
  return (
    <>
    <div className='h-[32.6rem] p-[29px] pt-[3px] mt-4 overflow-auto'>
    <div className="grid grid-cols-2 gap-2 mb-[5px]">
        <div className="flex">
        <div className="flex">
        <index.Typography className="text-[#67B037] font-poppins">Home <index.ArrowForwardIosIcon className="text-xs" /></index.Typography>
        <index.Typography className="text-[#979BA1]">client</index.Typography>
        </div>   
      </div>
       <div className="flex justify-end">
      <index.Button className="bg-[#67B037] p-[2px] flex items-center justify-center mr-[10px]"> <Image className="max-w-[60%]" src={uploadicon}/></index.Button>
      <index.Button className="bg-[#67B037] p-[2px] flex items-center justify-center mr-[10px]"> <Image className="max-w-[60%]" src={donicon}/></index.Button>
      <index.Button className="bg-[#67B037] p-0 flex items-center justify-center"><index.AddIcon/></index.Button>
      </div>
      </div>

      <div className="h-[90%] overflow-auto ...">
      <div className="grid grid-cols-3 gap-4 mt-6 overflow-auto ...">
    
      { project_component.map((card)=>{
        return(
          <>
           <div className="">
      <index.Card className="border-2 border-[#BABABA]">
        <div className='pt-[10px] px-[15px] pr-0'>
      <div className='grid grid-cols-10 gap-0 '>
         <div className='col-span-9'>
            <index.Typography className='font-poppins text-[#67B037] font-medium ...'>Webside Designing</index.Typography>
            <div className=''>
            <index.Chip className='w-fit bg-[#67B037]' value="Ongoing" />
            </div>
         </div>
         <index.MoreVertIcon className='text-[#67B037] float-right'/>
      </div>
      <div className='flex'>
        <index.Typography className='font-poppins font-medium ... text-sm ...'>Due Date</index.Typography>
        <index.Typography className='font-poppins font-medium ... text-sm ...'>27/08/2023</index.Typography>
      </div>
      </div>
      <index.CardBody className="text-center pt-0">
  
      </index.CardBody>
      <index.CardFooter className="grid grid-cols-3 gap-2 p-0">
        <div className="bg-[#67B037] rounded-tr-[45px] rounded-bl-lg">
          <div className="text-center p-[20px]">
          <index.Typography variant="h4" className="text-[#FFFFFF] font-poppins font-semibold">10</index.Typography>
          <index.Typography className="text-[#FFFFFF] font-poppins">Project</index.Typography>
          </div>
        </div>
        <div></div>
        <div className="flex items-end">
          <div className="text-center p-[15px] bg-[#4E4E4E] w-full rounded-tl-[45px] rounded-br-lg">
          <index.Typography variant="h4" className="text-[#FFFFFF] font-poppins font-semibold">10</index.Typography>
          <index.Typography className="text-[#FFFFFF] font-poppins">Task</index.Typography>
          </div>
        </div>
      </index.CardFooter>
    </index.Card>
    </div>
          </>
        )
      }) }
      </div>
      </div>



    </div>
    </>
  )
}
