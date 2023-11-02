"use client"
import index from "@/material_component/client_component"
import uploadicon from "../../../Images/upload.png"
import donicon from "../../../Images/donload.svg"
import Image from "next/image"
import { TABLE_HEAD,TABLE_ROWS } from "./SSRcomponent"
import React from "react"


export default function Page() {
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

  const yearList = [];
  const startYear = 2001;
  const currDate = new Date();
  const currYear = currDate.getFullYear();
  for (let year = currYear; year >= startYear; year--) {
    yearList.push(year);
  }
  return (
    <>
    <div className="p-[29px] pt-[3px]">
        <index.Typography className="text-[#67B037] font-poppins">Client</index.Typography>
        <div className="grid grid-cols-2 gap-2 mb-[5px]">
        <div className="flex">
        <div className="flex">
        <index.Typography className="text-[#67B037] font-poppins">Home <index.ArrowForwardIosIcon className="text-xs" /></index.Typography>
        <index.Typography className="text-[#979BA1]">client</index.Typography>
        </div>   
      </div>
       <div className="flex justify-end">
      <index.Button className="bg-[#67B037] p-[2px] flex items-center justify-center mr-[10px]"> <Image className="max-w-[60%]" src={uploadicon}/></index.Button>
      <index.Button className="bg-[#67B037] p-[2px] flex items-center justify-center mr-[10px]"> <Image className="max-w-[60%]" src={donicon}/></index.Button>
      <index.Button className="bg-[#67B037] p-0 flex items-center justify-center"><index.AddIcon/></index.Button>
      </div>
      </div>
      
      <div>
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
      </div>

    <div className="mt-4">
    <index.Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => {

              return <th
                key={head}
                id={head}
                className={head==="Progress" ? "w-[10%] border-b border-blue-gray-100 p-4":"border-b border-blue-gray-100 p-4"}
              >
                <index.Typography
                  variant="small"
                  color="blue-gray"
                  className={Array.isArray(head) ? "grid grid-cols-4 gap-4 font-poppins text-[#67B037] leading-none opacity-70":"font-poppins text-[#67B037] leading-none opacity-70 "}
                >
    
             {Array.isArray(head) ? (head.map((arr_map)=>{
               return(
                <>
                <span className="text-center"> {arr_map} </span> 
                </>
               )
             })): head}
              
                </index.Typography>
              </th>
})}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ project_name, progress, progress_barvalue,progress_barcolor }) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={project_name}>
                <td className={classes}>
                  <index.Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {project_name}
                  </index.Typography>
                </td>
                <td className={classes}>
                  <index.Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {progress}
                  </index.Typography>
                </td>
                <td className={classes}>
                    <index.Progress value={progress_barvalue} color={progress_barcolor} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </index.Card>
    </div>
    <div className="mt-4">
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
    </div>
    </>
  )
}
