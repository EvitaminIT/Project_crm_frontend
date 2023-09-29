"use client"
import index from "@/material_component/client_component"
import Image from "next/image"
import btnperson from "../../../Images/person_check.svg"
import cards from "./SSRcomponent"
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
    <>
      <div className="h-[31.6rem] p-[29px] pt-[3px]">
        <index.Typography className="text-[#67B037] font-poppins">User</index.Typography>
        <div className="grid grid-cols-2 gap-2 mb-[5px]">
        <div className="flex">
        <div className="flex">
        <index.Typography className="text-[#67B037] font-poppins">Home <index.ArrowForwardIosIcon className="text-xs" /></index.Typography>
        <index.Typography className="text-[#979BA1]">user</index.Typography>
        </div>   
      </div>
      

       <div className="flex justify-end">
      <index.Button className="bg-[#67B037] p-0 flex items-center justify-center mr-[10px]"> <Image className="max-w-[60%]" src={btnperson}/></index.Button>
      <index.Button className="bg-[#67B037] p-[2px] flex items-center justify-center"><index.AddIcon/> </index.Button>
      </div>
      </div>
      {/* cards */}
      
      <div className="h-[90%] overflow-auto ...">
      <div className="grid grid-cols-3 gap-4 mt-6 overflow-auto ...">
    
      { cards.map((card)=>{
        return(
          <>
           <div className="">
      <index.Card className="border-2 border-[#BABABA]">
      <div  className="grid grid-cols-3 gap-2 p-[13px]">   
      <div></div>
      <div className="text-center pt-4">
      <index.Avatar 
          withBorder={true}
          size="xl"
          variant="circular"
          alt="tania andrew"
          className="p-0.5 border-2 border-[#67B037]"
          src={card.img}
        />
      </div>
      <div>
      <index.Chip className="bg-[#67B037] capitalize ... text-center"  value="Devloper"/>
      </div>
      </div>
      <index.CardBody className="text-center pt-0">
        <index.Typography variant="h4" className="mb-2 text-[#67B037] m-0">
          {card.Name}
        </index.Typography>
        <index.Typography className="font-medium text-[#4E4E4E]" textGradient>
          {card.email}
        </index.Typography>
        <div className="flex justify-center">
        <index.Typography className="font-medium text-[#4E4E4E]" textGradient>
          Employee I.D.
        </index.Typography>
        <index.Typography className="font-medium text-[#4E4E4E] font-bold ml-[10px]" textGradient>
          {card.emp_id}
        </index.Typography>
        </div>
        <div className="flex justify-center">
        <index.Typography className="font-medium text-[#4E4E4E]" textGradient>
          Team Lead
        </index.Typography>
        <index.Typography className="font-medium text-[#4E4E4E] font-bold ml-[10px]" textGradient>
          {card.Team_Lead}
        </index.Typography>
        </div>
      </index.CardBody>
      <index.CardFooter className="grid grid-cols-3 gap-2 p-0">
        <div className="bg-[#67B037] rounded-tr-[45px] rounded-bl-lg">
          <div className="text-center p-[20px]">
          <index.Typography variant="h4" className="text-[#FFFFFF] font-poppins font-semibold">{card.no_of_project}</index.Typography>
          <index.Typography className="text-[#FFFFFF] font-poppins">Project</index.Typography>
          </div>
        </div>
        <div></div>
        <div className="flex items-end">
          <div className="text-center p-[15px] bg-[#4E4E4E] w-full rounded-tl-[45px] rounded-br-lg">
          <index.Typography variant="h4" className="text-[#FFFFFF] font-poppins font-semibold">{card.no_of_task}</index.Typography>
          <index.Typography className="text-[#FFFFFF] font-poppins">Task</index.Typography>
          </div>
        </div>
      </index.CardFooter>
    </index.Card>
    </div>
          </>
        )
      }) }
      </div>
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
