"use client"
import index from '@/material_component/client_component'
import React from 'react'
import donicon from "../../../Images/donload.svg"
import Image from 'next/image'
import client_data from './SSRcomponent'
import uploadicon from "../../../Images/upload.png"


export default function page() {
  return (
    <>
    <div className='h-[32.6rem] lg:h-[50.6rem] p-[29px] pt-[3px] overflow-auto'>
    <index.Typography className="text-[#67B037] font-poppins">Client</index.Typography>
    <div className="grid grid-cols-2 gap-2 mb-[5px]">
        <div className="flex">
        <div className="flex">
        <index.Typography className="text-[#67B037] font-poppins">Home <index.ArrowForwardIosIcon className="text-xs" /></index.Typography>
        <index.Typography className="text-[#979BA1]">client</index.Typography>
        </div>   
      </div>
       <div className="flex justify-end">
      <index.Button className="bg-[#67B037] p-[2px] flex items-center justify-center mr-[10px]"> <Image className="max-w-[60%]" alt='' src={uploadicon}/></index.Button>
      <index.Button className="bg-[#67B037] p-[2px] flex items-center justify-center mr-[10px]"> <Image className="max-w-[60%]" alt='' src={donicon}/></index.Button>
      <index.Button className="bg-[#67B037] p-0 flex items-center justify-center"><index.AddIcon/></index.Button>
      </div>
      </div>

      <div className='grid grid-cols-3 gap-6 mt-[30px]'>
 
       {client_data.map((data)=>{
        return(
            <>
        <index.Card className='border-2 border-[#BABABA]'>
        <div className='p-[6px]'>
        <div className='grid grid-cols-1 gap-0'>
         <div className='flex justify-end'>
        <index.MoreVertIcon className='text-[#67B037] float-right'/>
        </div>
        </div>
         <div className='grid grid-cols-3 gap-4'>
            <div></div>
            <Image alt='' src={data.Image}/>
            <div></div>
         </div>
         <div className='text-center'>
            <index.Typography variant='h4' className='text-[#67B037]'>{data.title}</index.Typography>
         </div>
         <div className='text-center mb-[25px]'>
            <index.Typography className='text-[#4E4E4E]'>{data.email}</index.Typography>
         </div>
        </div>
        </index.Card>
        </>
        )
       })}
      </div>
    </div>  
    </>
  )
}
