import index from "@/material_component/client_component"
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


export default function Deshbordhead() {

    const [selectedMonth, setSelectedMonth] = useState(null);

    const handleChange = (date) => {
      setSelectedMonth(date);
    };

  return (
    <>
    <br/>
    <div className="grid grid-cols-6 gap-2">
    <index.Typography className="text-[#67B037] font-poppins">Monthly Attendance</index.Typography>
    <div></div>
    <div className="w-50">
      <index.Input label="Employee Name" />
    </div>
    <div className="w-50">
      <index.Select
        label="Select Version"
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
    <DatePicker
      className="border-solid border-2 border-[#BABABA] rounded-md"
      selected={selectedMonth}
      onChange={handleChange}
      dateFormat="MMMM yyyy"
      showMonthYearPicker
    />
    </div>
    </>
  )
}
