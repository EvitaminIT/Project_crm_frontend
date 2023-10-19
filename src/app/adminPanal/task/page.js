"use client"
import index from "@/material_component/client_component"
import Image from "next/image"
import TABLE_ROWS from "./SSRcomponent";
import React from "react";

export default function page() {
  const [active, setActive] = React.useState(1);
 
  const getItemProps = (index) =>
    ({
      variant: active === index ? "filled " : "text",
      color: "black",
      onClick: () => setActive(index),
      className: active === index ? "bg-[#67B037] max-h-[25px] max-w-[25px]":"bg-[#DFDFDF] max-h-[25px] max-w-[25px]"
    });
 
  const next = () => {
    if (active === 5) return;
 
    setActive(active + 1);
  };
 
  const prev = () => {
    if (active === 1) return;
 
    setActive(active - 1);
  };

    const TABLE_HEAD = ["Task", "Project", "Milestone", "Due Date","Assigned To"];
  return (
    <>
    <div className="h-[31.6rem] p-[29px] pt-[3px]">
    <index.Typography className="text-[#67B037] font-poppins font-medium">Task</index.Typography>
    <div className="grid grid-cols-2 gap-2 mb-[5px]">
        <div className="flex">
        <div className="flex">
        <index.Typography className="text-[#67B037] font-poppins">Home <index.ArrowForwardIosIcon className="text-xs" /></index.Typography>
        <index.Typography className="text-[#979BA1]">Task</index.Typography>
        </div>   
      </div>
       <div className="flex justify-end">
      <index.Button className="bg-[#67B037] p-[2px] flex items-center justify-center mr-[10px]"> <index.FilterAltOutlinedIcon/> </index.Button>
      </div>
      </div> 

      <div className='grid grid-cols-2 gap-4'>
        <div>

        </div>
        <div>
      <div className="relative text-gray-600 w-6/12 float-right mr-[15px]">
      <index.Input
        type="search"
        name="search"
        placeholder="Search..."
        className="bg-white h-[2.1rem] px-5 pr-10 rounded-full text-sm focus:outline-none !border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 h-[33px]"
        labelProps={{
          className: "hidden",
        }}
        containerProps={{ className: "min-w-[100px]" }}
      />
      <button type="submit" className="absolute right-0 top-0">
        <div className="p-[8px] bg-[#67b037] rounded-full ... w-[121%] text-white flex justify-center">
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
      
      <div>
      <index.Card className="h-[23rem] lg:h-[36rem] overflow-auto">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="p-4">
                <index.Typography
                  variant="small"
                  className="font-normal leading-none opacity-70 text-[#67B037] font-poppins text-base font-medium"
                >
                  {head}
                </index.Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="">
          {TABLE_ROWS.map(({ task, project,milestone, due_date,assgineed_mem }) => (
            <tr key={task} className="even:bg-blue-gray-50/50">
              <td className="p-4">
                <index.Typography variant="small" color="blue-gray" className="font-normal">
                  {task}
                </index.Typography>
              </td>
              <td className="p-4">
                <index.Typography variant="small" color="blue-gray" className="font-normal">
                  {project}
                </index.Typography>
              </td>
              <td className="p-4">
                <index.Typography variant="small" color="blue-gray" className="font-normal">
                  {milestone}
                </index.Typography>
              </td>
              <td className="p-4">
                 {due_date}
              </td>
              <td>
              <div className="flex items-center">

     {assgineed_mem.map((img_src)=>{
        return(
            <>
           <index.Avatar
        variant="circular"
        alt="user 1"
        size="sm" 
        className="border-2 border-[#67B037] hover:z-10 focus:z-10"
        src={img_src}
      />
            </>
        )
     })}
    </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </index.Card>
      </div> 
      <div>
      <div className="flex items-center gap-4 float-right mt-[9px]">
      <index.Button
        variant="text"
        className="flex items-center p-0"
        onClick={prev}
        disabled={active === 1}
      >
        <index.NavigateBeforeSharpIcon strokeWidth={2} className="h-4 w-4" />
      </index.Button>
      <div className="flex items-center gap-2">
        <index.IconButton className="bg-[#DFDFDF]" {...getItemProps(1)}>1</index.IconButton>
        <index.IconButton className="bg-[#DFDFDF]" {...getItemProps(2)}>2</index.IconButton>
        <index.IconButton className="bg-[#DFDFDF]" {...getItemProps(3)}>3</index.IconButton>
        <index.IconButton className="bg-[#DFDFDF]" {...getItemProps(4)}>4</index.IconButton>
        <index.IconButton className="bg-[#DFDFDF]" {...getItemProps(5)}>5</index.IconButton>
      </div>
      <index.Button
        variant="text"
        className="flex items-center p-0"
        onClick={next}
        disabled={active === 5}
      >
        <index.NavigateNextSharpIcon strokeWidth={2} className="h-4 w-4" />
      </index.Button>
    </div>
    </div>
    </div>
    </>
  )
}
