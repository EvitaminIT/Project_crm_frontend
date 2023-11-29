import index from "@/material_component/client_component";
import donicon from "../../../Images/donload.svg" 
import Image from "next/image";
import delete_icon from "../../../Images/delete.png"
import React from "react";

const TABLE_HEAD = ["Title", "Attachment", "Action"];
 
const TABLE_ROWS = [
  {
    name: "John Michael",
    job: "Manager",
    date: "23/04/18",
  },
  {
    name: "Alexa Liras",
    job: "Developer",
    date: "23/04/18",
  },
  {
    name: "Laurent Perrier",
    job: "Executive",
    date: "19/09/17",
  },
  {
    name: "Michael Levi",
    job: "Developer",
    date: "24/12/08",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
  },
];
 
export default function Body() {
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
                  className="font-normal leading-none opacity-70 text-[#67B037] font-semibold font-poppins"
                >
                  {head}
                </index.Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ name, job, date }) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={name}>
                <td className={classes}>
                  <index.Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {name}
                  </index.Typography>
                </td>
                <td className={`${classes} space-x-4`}>
                <index.IconButton className="bg-[#67B037]">
                 <index.VisibilityOutlinedIcon/>
                </index.IconButton> 
                <index.IconButton className="bg-[#67B037]">
                    <Image src={donicon} />
                </index.IconButton>
                </td>
                <td className={`${classes} space-x-4`}>
                <index.IconButton className="bg-[#46A5C6]">    
                <index.EditCalendarOutlinedIcon/>  
                </index.IconButton>    
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