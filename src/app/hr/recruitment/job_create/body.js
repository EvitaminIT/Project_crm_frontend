import index from "@/material_component/client_component"
import ReactDatePicker from "react-datepicker"
// import Datepicker from "react-tailwindcss-datepicker"
import { useState } from "react";
import TagInput from "./input_tag";

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
      <div> 
      <div className="grid grid-cols-2 gap-4">
        <div>
         <index.Typography>Years Of Exp Required</index.Typography>
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
         <index.Typography>Education/Qualification</index.Typography>
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
        <br/>
        <div className="grid grid-cols-2 gap-4">
        <div>
         <index.Typography>Years Of Exp Required</index.Typography>
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
       
       <index.Card className="border-solid border-2 border-[#BABABA] rounded-lg mt-[6.5%]">
      <index.List className="p-0">
        <index.ListItem className="p-0">
          <label
            htmlFor="vertical-list-react"
            className="flex w-full cursor-pointer items-center px-3 py-[0.4rem]"
          >
            <index.ListItemPrefix className="mr-3">
              <index.Checkbox
                id="vertical-list-react"
                ripple={false}
                className="hover:before:opacity-0"
                containerProps={{
                  className: "p-0",
                }}
              />
            </index.ListItemPrefix>
            <index.Typography color="blue-gray" className="font-medium">
              Public
            </index.Typography>
          </label>
        </index.ListItem>
      </index.List>
    </index.Card>
       </div>
        </div>

         <div className="mt-[2.1%] grid grid-cols-2 gap-4">
          <div>
        <index.Typography>Skills set need</index.Typography>  
        <TagInput/>
        </div>
        <div>
        <index.Typography>Job Requirement</index.Typography>  
        <TagInput/>
        </div>
        </div>
        </div> 
       
      
     

    </div>
    </>
  )
}
