"use client"
import React from 'react'
import index from '@/material_component/client_component'
import Image from 'next/image'
import donicon from "../../../Images/donload.svg"
import messageicon from "../../../Images/message.svg"
import DatePickerComponent from './calander'
import Attendance_overview from './SSRcomponenet'
import { DefaultTable } from './attendance_table'

export default function page() {
  const yearList = [];
  const startYear = 2001;
  const currDate = new Date();
  const currYear = currDate.getFullYear();
  for (let year = currYear; year >= startYear; year--) {
    yearList.push(year);
  }
  return (
    <>
    <div className='h-[32.6rem] lg:h-[45.6rem] p-[29px] pt-[3px] overflow-auto'>
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
      <index.Button className="bg-[#67B037] p-[2px] flex items-center justify-center mr-[10px]"> <Image className="max-w-[60%]" alt='' src={donicon}/></index.Button>
      <index.Button className="bg-[#E55B5B] p-[2px] flex items-center justify-center"> <Image className="max-w-[60%]" alt='' src={messageicon}/></index.Button>
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
           <index.MoreVertIcon className='ml-[15px] text-[#67B037]'/>
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

    <div className='mt-4 grid grid-cols-2 gap-4'>
      <div className='flex items-center'>
        <index.Typography className='mr-2'>Show</index.Typography>
        <select className='bg-[#67B037] text-white rounded-l-lg ...' data-te-select-init data-te-select-clear-button="true" name='Month'>
  <option value='1'>Janaury</option>
    <option value='2'>February</option>
    <option value='3'>March</option>
    <option value='4'>April</option>
    <option value='5'>May</option>
    <option value='6'>June</option>
    <option value='7'>July</option>
    <option value='8'>August</option>
    <option value='9'>September</option>
    <option value='10'>October</option>
    <option value='11'>November</option>
    <option value='12'>December</option>
</select>
<select name='get_year' className='bg-[#67B037] text-white rounded-r-lg ...'>
  {yearList.map((years)=>{
    return(<>
     <option value={years}>{years}</option>
    </>)
  })} 
</select>
  <index.Typography>entries</index.Typography>
      </div>
      <div className='grid grid-cols-2 gap-4'>
        <div>

        </div>
      <div className="relative text-gray-600">
      <index.Input
        type="search"
        name="search"
        placeholder="Search..."
        className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none !border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
        labelProps={{
          className: "hidden",
        }}
        containerProps={{ className: "min-w-[100px]" }}
      />
      <button type="submit" className="absolute right-0 top-0">
        <div className="p-[12px] bg-[#67b037] rounded-full ... w-[121%] text-white flex justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 fill-current"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M14.293 13.293a1 1 0 01-1.414 1.414l-3.147-3.146a6 6 0 111.414-1.414l3.146 3.146zM6 10a4 4 0 100-8 4 4 0 000 8z"
          />
        </svg>
        </div>
      </button>
    </div>
      </div>
    </div>
    
    <div className='mt-[30px]'>
      <DefaultTable/>
    </div>
    </div>
    </>
  )
}
