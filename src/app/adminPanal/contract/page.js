"use client"
import React from 'react'
import index from '@/material_component/client_component'
import { hedder_element,TABLE_HEAD,TABLE_ROWS } from './SSRcomponent'

export default function page() {
  return (
    <div className='p-[29px] pt-[3px] overflow-auto'>
        <index.Typography className="text-[#67B037] font-poppins">Contract</index.Typography>
      <div className="grid grid-cols-2 gap-2 mb-[5px]">
        <div className="flex">
        <div className="flex">
        <index.Typography className="text-[#67B037] font-poppins">Home <index.ArrowForwardIosIcon className="text-xs" /></index.Typography>
        <index.Typography className="text-[#979BA1]">client</index.Typography>
        </div>   
      </div>
       <div className="flex justify-end">
      <index.Button className="bg-[#67B037] p-0 flex items-center justify-center"><index.AddIcon/></index.Button>
      </div>
      </div>
      <div className='grid grid-cols-4 gap-4'>
  
      {hedder_element.map((Element)=>{
        return(
          <>
         <index.CardHeader floated={false} className="text-center border-solid border-2 border-[#BABABA] h-fit p-3 m-0">
        <div className="flex justify-center p-[18px]">
      <index.Card className="w-fit h-fit p-[10px] bg-[#67B037] text-[#FFFFFF]">
      <index.Inventory2OutlinedIcon className='text-4xl' />
      </index.Card>
      </div>
      <index.Typography className="text-sm font-poppins ">{Element.title}</index.Typography>
      <index.Typography className="text-[#67B037] font-poppins font-semibold flex justify-center items-center"> <index.CurrencyRupeeIcon className='text-lg' />{Element.Amount}</index.Typography>
      </index.CardHeader>
          </>
        )
      })}
      
      </div>


      <div className='grid grid-cols-2 gap-4 mt-4'>
        <div>

        </div>
        <div>
      <div className="relative text-gray-600 w-6/12 float-right mr-[6px]">
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

     <div>
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
          {TABLE_ROWS.map(({ contract,client,project,subject,value,type,start_date,end_date }) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={contract}>
                <td className={classes}>
                  <index.Chip className='bg-[#67B037] text-center text-[#FFFFFF]' value={contract} />  
                </td>
                <td className={classes}>
                  <index.Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {client}
                  </index.Typography>
                </td>
                <td className={classes}>
                  <index.Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {project}
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
                    {subject}
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
                    {value}
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
                    {type}
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
                    {start_date}
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
                    {end_date}
                  </index.Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </index.Card>
     </div>

    </div>
  )
}
