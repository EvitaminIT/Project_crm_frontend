"use client"
import index from "@/material_component/client_component"
import uploadicon from "../../../Images/upload.png"
import donicon from "../../../Images/donload.svg"
import Image from "next/image"
import { TABLE_HEAD,TABLE_ROWS } from "./SSRcomponent"
import edit_icon from "../../../Images/edit.png"
import delete_icon from "../../../Images/delete.png"
import React from "react"

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
  return (
    <div className="p-[29px] pt-[3px] overflow-auto">
      <index.Typography className="text-[#67B037] font-poppins">invoice</index.Typography>
       <div className="grid grid-cols-2 gap-2 mb-[5px]">
        <div className="flex">
        <div className="flex">
        <index.Typography className="text-[#67B037] font-poppins">Home <index.ArrowForwardIosIcon className="text-xs" /></index.Typography>
        <index.Typography className="text-[#979BA1]">invoice</index.Typography>
        </div>   
      </div>
       <div className="flex justify-end">
      <index.Button className="bg-[#67B037] p-[2px] flex items-center justify-center mr-[10px]"> <Image className="max-w-[60%]" src={uploadicon}/></index.Button>
      <index.Button className="bg-[#67B037] p-[2px] flex items-center justify-center mr-[10px]"> <Image className="max-w-[60%]" src={donicon}/></index.Button>
      <index.Button className="bg-[#67B037] p-0 flex items-center justify-center"><index.AddIcon/></index.Button>
      </div>
      </div>
      <div className='grid grid-cols-2 gap-4'>
        <div>

        </div>
        <div>
      <div className="relative text-gray-600 w-6/12 float-right mr-[5px]">
      <index.Input
        type="search"
        name="search"
        placeholder="Search..."
        className="bg-white h-[2.1rem] px-5 pr-10 rounded-full text-sm focus:outline-none !border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
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

    <div className="mt-[2px]">
    <index.Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 p-4"
              >
                <index.Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70 text-[#67B037] font-poppins text-base font-medium"
                >
                  {head}
                </index.Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ invoice_no, Name, issue_date,due_date, Amount,Status }) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={invoice_no}>
                <td className={classes}>
                 <index.Chip className="text-center bg-[#67B037]" value={invoice_no} />
                </td>
                <td className={classes}>
                  <index.Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {Name}
                  </index.Typography>
                </td>
                <td className={classes}>
                  <index.Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {issue_date}
                  </index.Typography>
                </td>
                <td className={classes}>
                  <index.Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    {due_date}
                  </index.Typography>
                </td>
                <td className={classes}>
                  <index.Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium flex items-center"
                  >
                    <index.CurrencyRupeeIcon className="text-base ..."/><span>{Amount}</span>  </index.Typography>
                </td>
                <td className={classes}> 
                  <index.Chip className={Status==="Unpaid" ? "text-center bg-[#E55B5B] capitalize ...":"text-center bg-[#67B037] capitalize ..."} value={Status} />
                </td>
                <td>
                <div className="grid grid-cols-3 gap-2 ">
                <index.Button className="bg-[#67B037] p-1 "><index.RemoveRedEyeOutlinedIcon className="text-lg ..."/></index.Button>
                <index.Button className="flex justify-center items-center bg-[#46A5C6] p-1"> <Image className="w-4" src={edit_icon} /> </index.Button>
                <index.Button className="flex justify-center items-center bg-[#E55B5B] p-1"> <Image className="w-4" src={delete_icon} /> </index.Button>
                </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </index.Card>
    </div>
    <div className="px-[25px]">
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
  )
}
