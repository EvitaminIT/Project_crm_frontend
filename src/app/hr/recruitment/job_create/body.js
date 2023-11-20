import index from "@/material_component/client_component"
import ReactDatePicker from "react-datepicker"
// import Datepicker from "react-tailwindcss-datepicker"
import { useState } from "react";


export default function Body() {
    const [value, setValue] = useState({
        startDate: new Date(),
        endDate: new Date().setMonth(11)
    });

    const handleValueChange = newValue => {
        console.log("newValue:", newValue);
        setValue(newValue);
    };
  return (
    <>
    <div className="grid grid-cols-2 gap-4">
      <div>
      <div>
      <index.Typography>Job Title</index.Typography>
      <index.Input
        type="text"
        placeholder="Enter Job Title"
        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
        containerProps={{
          className: "min-w-0",
        }}
      />
      </div>
      <br/>
      <div className="grid grid-cols-2 gap-4">
         <div>
         <index.Typography>Department</index.Typography>
         <index.Select className=""
          >
        <index.Option>Material Tailwind HTML</index.Option>
        <index.Option>Material Tailwind React</index.Option>
        <index.Option>Material Tailwind Vue</index.Option>
        <index.Option>Material Tailwind Angular</index.Option>
        <index.Option>Material Tailwind Svelte</index.Option>
      </index.Select>
         </div>
         <div>
         <index.Typography>Job Category</index.Typography>
         <index.Select className=""
          >
        <index.Option>Material Tailwind HTML</index.Option>
        <index.Option>Material Tailwind React</index.Option>
        <index.Option>Material Tailwind Vue</index.Option>
        <index.Option>Material Tailwind Angular</index.Option>
        <index.Option>Material Tailwind Svelte</index.Option>
      </index.Select>
         </div>
         <div>
         <index.Typography>No. of Positions.</index.Typography>
      <index.Input
        type="number"
        placeholder="Enter the No. of Positions."
        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
        containerProps={{
          className: "min-w-0",
        }}
      />
         </div>
         <div>
         <index.Typography>Start Date</index.Typography>
         <index.Input type="date"
           />
         </div>
       
         <div>
         <index.Typography>End Date</index.Typography>
         <index.Input type="date"
           />
         </div>
         <div>
         <index.Typography>Work Experience</index.Typography>
         <index.Select className=""
          >
        <index.Option>Material Tailwind HTML</index.Option>
        <index.Option>Material Tailwind React</index.Option>
        <index.Option>Material Tailwind Vue</index.Option>
        <index.Option>Material Tailwind Angular</index.Option>
        <index.Option>Material Tailwind Svelte</index.Option>
      </index.Select>
         </div>
      </div>
      <index.Typography>Skills</index.Typography>
      <index.Input/>
      <div>
        <br/>
      <index.Typography>Job Description</index.Typography>
        <index.Textarea  label="Enter Job Description"/>
      </div>
      </div>   
      <div className="grid grid-cols-2 gap-4">
      <index.Typography>Need to Ask ?</index.Typography>
      <index.Typography>Need to show Options ?</index.Typography>
      </div>
    </div>
    </>
  )
}
