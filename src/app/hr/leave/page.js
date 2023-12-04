"use client"
import React,{ useRef,useState } from 'react'
import { getDayName,getDaysArray,getMonthName } from '../common';
import index from '@/material_component/client_component';
import 'react-datepicker/dist/react-datepicker.css';
import donicon from "../../../Images/donload.svg"
import uploadicon from "../../../Images/upload.png"
import Image from "next/image";
import DatePicker from 'react-datepicker';
import { top_data } from './SSRcomponent';
import Body from './body';
import Total_pannel from '@/app/common/total_pannel';

export default function Page() {
     
  const datePickerRef = useRef(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const currDate = selectedMonth ? new Date(selectedMonth) : new Date();
  const currYear = currDate.getFullYear();
  const currMonth = currDate.getMonth() + 1;

//   console.log(currMonth,currYear,"inPage")
 
  const handleChange = (date) => {
    setSelectedMonth(date);
  };

  const handleOpenDatePicker = () => {
    if (datePickerRef.current) {
      datePickerRef.current.setOpen(true);
    }
  };

  return (
    <>
    <div className="px-[30px] pt-[2%]">
    <div className="grid grid-cols-7 gap-2 xl:grid-cols-5">
    <index.Typography className="text-[#67B037] font-poppins">Monthly Attendance</index.Typography>
    <div className="col-span-2 xl:hidden"></div>
    <div className="w-50">
      <index.Input label="Employee Name" />
    </div>
    <div className="w-50">
      <index.Select
        label="Department"
        animate={{
          mount: { y: 0 },
          unmount: { y: 25 },
        }}
      >
        <index.Option>Material Tailwind HTML</index.Option>
        <index.Option>Material Tailwind React</index.Option>
        <index.Option>Material Tailwind Vue</index.Option>
        <index.Option>Material Tailwind Angular</index.Option>
        <index.Option>Material Tailwind Svelte</index.Option>
      </index.Select>
    </div>
   
    <div className="flex "> 
    <index.Button onClick={handleOpenDatePicker} className="bg-[#F3F3F3] text-black w-full">{getMonthName(currMonth)} | {currYear}</index.Button>
    <DatePicker
      className="border-solid border-2 border-[#BABABA] rounded-md hidden"
      selected={selectedMonth}
      onChange={handleChange}
      dateFormat="MMMM yyyy"
      showMonthYearPicker
      ref={datePickerRef}
    />
    </div>
    <div className="flex justify-end"> 
      <index.IconButton className="bg-[#67B037] mr-2"> <index.SearchIcon/> </index.IconButton>
      <index.IconButton className="bg-[#67B037] mr-2"><div className="flex justify-center"> <Image className="max-w-[87%]" alt='' src={uploadicon}/> </div> </index.IconButton>
      <index.IconButton className="bg-[#67B037]"><div className="flex justify-center"> <Image className="max-w-[87%]" alt='' src={donicon}/> </div> </index.IconButton>
    </div>
    </div> 
    <br/>
    <Total_pannel data_list={top_data}/>
    <br/>
    <Body/>
    </div>
    </>
  )
}
