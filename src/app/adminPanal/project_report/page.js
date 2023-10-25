"use client"
import index from '@/material_component/client_component';
import { DefaultTable } from './table';

export default function page() {
  return (
    <>
     <div className='h-[31.6rem] p-[29px] pt-[3px]'>
     <index.Typography className="text-[#67B037] font-poppins font-medium">Project Report</index.Typography>
    <div className="grid grid-cols-2 gap-2 mb-[5px]">
        <div className="flex">
        <div className="flex">
        <index.Typography className="text-[#67B037] font-poppins">Home <index.ArrowForwardIosIcon className="text-xs" /></index.Typography>
        <index.Typography className="text-[#979BA1]">Project Report</index.Typography>
        </div>   
      </div>
       <div className="flex justify-end">
      <index.Button className="bg-[#67B037] p-[2px] flex items-center justify-center mr-[10px]"> <index.FilterAltOutlinedIcon/> </index.Button>
      </div>
      </div> 
      <div className='grid grid-cols-2 gap-4'>
        <div></div>
        <div className='mr-3'>
        <div className="relative text-gray-600 w-1/2 float-right">
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
      <div className='mt-4'>
      <DefaultTable />
      </div>
     </div>
    </>
  )
}
