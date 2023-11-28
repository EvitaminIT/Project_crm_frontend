import index from "@/material_component/client_component";
import { TABLE_HEAD,TABLE_ROWS } from "./SSRcomponent"; 
import delete_icon from "../../../Images/delete.png"
import Image from "next/image"; 
import React from "react";
import { DialogCustomAnimation } from "./diloge";


export function Table() {
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
                  className="font-poppins leading-none opacity-70 text-[#67B037] font-semibold"
                >
                  {head}
                </index.Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ name, emp_id,Dep,Designation,DOJ,Email }) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={emp_id}>
                <td className={classes}>
                    <div>
                 <index.Chip className="bg-[#67B037] w-fit" value={emp_id} />
                    </div>
                </td>
                <td className={classes}>
                  <index.Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {name}
                  </index.Typography>
                </td>
                <td className={classes}>
                  <index.Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {Email}
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
                    {Dep}
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
                    {Designation}
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
                    {DOJ}
                  </index.Typography>
                </td>
                <td className={`${classes} space-x-4`}>
                 <DialogCustomAnimation/>
                 <index.IconButton className="bg-[#E55B5B]">
                 <Image className="w-4" alt='' src={delete_icon} />
                 </index.IconButton>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table> 
    </index.Card>
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
  );
}