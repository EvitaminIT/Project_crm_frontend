import React from 'react'
import index from '@/material_component/client_component'

export default function Total_pannel({
    data_list
}) {
  return (
    <div>
        <div className='grid grid-cols-4 gap-4'>
    {data_list.map((data)=>{
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
    </div>
  )
}
