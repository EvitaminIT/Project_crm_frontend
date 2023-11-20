import React from 'react'
import index from '@/material_component/client_component'
import { top_data } from './SSRcomponent'

export default function Body() {
  return (
    <>
    <div className='grid grid-cols-4 gap-4'>
       <index.Card className='border-solid border-2 border-[#BABABA] text-center py-[20px]'>
         <index.Typography className='font-poppins'>Attendance</index.Typography>
         <div className='grid grid-cols-4 gap-4'>
            <div></div>
            <div className='text-[#67B037]'>
                <index.Typography variant='h1'>95</index.Typography>
                <index.Typography>Presents</index.Typography>
            </div>
            <div className='text-[#E55B5B]'>
                <index.Typography variant='h1'>0</index.Typography>
                <index.Typography>Absent</index.Typography>
            </div>
            <div></div>
         </div>
         </index.Card>

      {top_data.map((data)=>{
        return(
            <>
           <index.Card className='border-solid border-2 border-[#BABABA] text-center py-[20px]'>
         <index.Typography className='font-poppins'>{data.titles}</index.Typography>
         <div className=''>
            <div className='text-[#67B037]'>
                <index.Typography variant='h1'>{data.total}</index.Typography>
                <index.Typography>{data.titles}'s</index.Typography>
            </div>
         </div>
       </index.Card>            
            </>
        )
      })}

    </div>
    </>
  )
}


