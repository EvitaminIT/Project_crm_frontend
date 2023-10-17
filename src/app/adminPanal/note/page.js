"use client"
import React from 'react'
import index from '@/material_component/client_component'

export default function page() {
  return (
    <div className='p-[29px] pt-[3px] pb-0 overflow-auto'>
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
        <index.Typography className='font-poppins'>Notes</index.Typography>
     </div>
     <div className='grid grid-cols-2 gap-4'>
        <div className='grid grid-cols-2 gap-4'>
            <div>
              
            </div>
        </div>
     </div>
    </div>
  )
}
