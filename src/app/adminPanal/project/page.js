"use client"
import React from 'react'
import index from '@/material_component/client_component'
import Image from 'next/image'
import uploadicon from "../../../Images/upload.png"
import donicon from "../../../Images/donload.svg"
import project_component from './SSRcomponent'



export default function page() {
  const [activeTab, setActiveTab] = React.useState("all");
  const data = [
    {
      label: "All",
      value: "all",
      desc:<div className="grid grid-cols-3 gap-4 mt-6 overflow-auto ...">
      { project_component.map((card)=>{
        return(
          <>
           <div className="">
      <index.Card className="border-2 border-[#BABABA]">
        <div className='pt-[10px] px-[15px] pr-0'>
      <div className='grid grid-cols-10 gap-0 '>
         <div className='col-span-9'>
            <index.Typography className='font-poppins text-[#67B037] font-medium ...'>{card.title}</index.Typography>
            <div className=''>
            <index.Chip className='w-fit bg-[#67B037]' value={card.status} />
            </div>
         </div>
         <index.MoreVertIcon className='text-[#67B037] float-right'/>
      </div>
      <div className='flex mt-2'>
        <index.Typography className='font-poppins font-medium ... text-sm ... mr-[6px]'>Due Date</index.Typography>
        <index.Typography className='font-poppins font-semibold ... text-sm ...'>{card.due_date}</index.Typography>
      </div>
      </div>
      <index.CardBody className="p-0">
        <div className='px-[15px]'>
       <index.Typography className='py-[10px] font-poppins text-sm'>{card.discription}</index.Typography>
       <index.Typography className='font-poppins '>Members</index.Typography>

       <div className="flex items-center -space-x-4 py-[10px] mb-[10px]">
 
      {card.member.map((src_img)=>{
        return(
          <>
            <index.Avatar
        variant="circular"
        alt="user 1"
        className="border-2 border-[#67B037] hover:z-10 focus:z-10"
        src={src_img}
      />
          </>
        )
      })}
    </div>

       </div>
        
      </index.CardBody>
      <index.CardFooter className="grid grid-cols-3 gap-2 p-0">
        <div className="bg-[#67B037] rounded-tr-[45px] rounded-bl-lg">
          <div className="text-center p-[20px]">
          <index.Typography variant="h4" className="text-[#FFFFFF] font-poppins font-semibold">{card.task}</index.Typography>
          <index.Typography className="text-[#FFFFFF] font-poppins">Task</index.Typography>
          </div>
        </div>
        <div></div>
        <div className="flex items-end">
          <div className="text-center p-[15px] bg-[#4E4E4E] w-full rounded-tl-[45px] rounded-br-lg">
          <index.Typography variant="h4" className="text-[#FFFFFF] font-poppins font-semibold">{card.comments}</index.Typography>
          <index.Typography className="text-[#FFFFFF] font-poppins text-sm">comments</index.Typography>
          </div>
        </div>
      </index.CardFooter> 
    </index.Card>
    </div>
          </>
        )
      }) }
      </div>
      ,
    },
    {
      label: "On Going",
      value: "on going",
      desc:<div className="grid grid-cols-3 gap-4 mt-6 overflow-auto ...">
      { project_component.map((card)=>{
        return(
          <>
           <div className="">
      <index.Card className="border-2 border-[#BABABA]">
        <div className='pt-[10px] px-[15px] pr-0'>
      <div className='grid grid-cols-10 gap-0 '>
         <div className='col-span-9'>
            <index.Typography className='font-poppins text-[#67B037] font-medium ...'>{card.title}</index.Typography>
            <div className=''>
            <index.Chip className='w-fit bg-[#67B037]' value={card.status} />
            </div>
         </div>
         <index.MoreVertIcon className='text-[#67B037] float-right'/>
      </div>
      <div className='flex mt-2'>
        <index.Typography className='font-poppins font-medium ... text-sm ... mr-[6px]'>Due Date</index.Typography>
        <index.Typography className='font-poppins font-semibold ... text-sm ...'>{card.due_date}</index.Typography>
      </div>
      </div>
      <index.CardBody className="p-0">
        <div className='px-[15px]'>
       <index.Typography className='py-[10px] font-poppins text-sm'>{card.discription}</index.Typography>
       <index.Typography className='font-poppins '>Members</index.Typography>

       <div className="flex items-center -space-x-4 py-[10px] mb-[10px]">
 
      {card.member.map((src_img)=>{
        return(
          <>
            <index.Avatar
        variant="circular"
        alt="user 1"
        className="border-2 border-[#67B037] hover:z-10 focus:z-10"
        src={src_img}
      />
          </>
        )
      })}
    </div>

       </div>
        
      </index.CardBody>
      <index.CardFooter className="grid grid-cols-3 gap-2 p-0">
        <div className="bg-[#67B037] rounded-tr-[45px] rounded-bl-lg">
          <div className="text-center p-[20px]">
          <index.Typography variant="h4" className="text-[#FFFFFF] font-poppins font-semibold">{card.task}</index.Typography>
          <index.Typography className="text-[#FFFFFF] font-poppins">Task</index.Typography>
          </div>
        </div>
        <div></div>
        <div className="flex items-end">
          <div className="text-center p-[15px] bg-[#4E4E4E] w-full rounded-tl-[45px] rounded-br-lg">
          <index.Typography variant="h4" className="text-[#FFFFFF] font-poppins font-semibold">{card.comments}</index.Typography>
          <index.Typography className="text-[#FFFFFF] font-poppins text-sm">comments</index.Typography>
          </div>
        </div>
      </index.CardFooter> 
    </index.Card>
    </div>
          </>
        )
      }) }
      </div>,
    },
    {
      label: "Finished",
      value: "finished",
      desc: <div className="grid grid-cols-3 gap-4 mt-6 overflow-auto ...">
      { project_component.map((card)=>{
        return(
          <>
           <div className="">
      <index.Card className="border-2 border-[#BABABA]">
        <div className='pt-[10px] px-[15px] pr-0'>
      <div className='grid grid-cols-10 gap-0 '>
         <div className='col-span-9'>
            <index.Typography className='font-poppins text-[#67B037] font-medium ...'>{card.title}</index.Typography>
            <div className=''>
            <index.Chip className='w-fit bg-[#67B037]' value={card.status} />
            </div>
         </div>
         <index.MoreVertIcon className='text-[#67B037] float-right'/>
      </div>
      <div className='flex mt-2'>
        <index.Typography className='font-poppins font-medium ... text-sm ... mr-[6px]'>Due Date</index.Typography>
        <index.Typography className='font-poppins font-semibold ... text-sm ...'>{card.due_date}</index.Typography>
      </div>
      </div>
      <index.CardBody className="p-0">
        <div className='px-[15px]'>
       <index.Typography className='py-[10px] font-poppins text-sm'>{card.discription}</index.Typography>
       <index.Typography className='font-poppins '>Members</index.Typography>

       <div className="flex items-center -space-x-4 py-[10px] mb-[10px]">
 
      {card.member.map((src_img)=>{
        return(
          <>
            <index.Avatar
        variant="circular"
        alt="user 1"
        className="border-2 border-[#67B037] hover:z-10 focus:z-10"
        src={src_img}
      />
          </>
        )
      })}
    </div>

       </div>
        
      </index.CardBody>
      <index.CardFooter className="grid grid-cols-3 gap-2 p-0">
        <div className="bg-[#67B037] rounded-tr-[45px] rounded-bl-lg">
          <div className="text-center p-[20px]">
          <index.Typography variant="h4" className="text-[#FFFFFF] font-poppins font-semibold">{card.task}</index.Typography>
          <index.Typography className="text-[#FFFFFF] font-poppins">Task</index.Typography>
          </div>
        </div>
        <div></div>
        <div className="flex items-end">
          <div className="text-center p-[15px] bg-[#4E4E4E] w-full rounded-tl-[45px] rounded-br-lg">
          <index.Typography variant="h4" className="text-[#FFFFFF] font-poppins font-semibold">{card.comments}</index.Typography>
          <index.Typography className="text-[#FFFFFF] font-poppins text-sm">comments</index.Typography>
          </div>
        </div>
      </index.CardFooter> 
    </index.Card>
    </div>
          </>
        )
      }) }
      </div>,
    },
    {
      label: "Hold",
      value: "hold",
      desc:<div className="grid grid-cols-3 gap-4 mt-6 overflow-auto ...">
      { project_component.map((card)=>{
        return(
          <>
           <div className="">
      <index.Card className="border-2 border-[#BABABA]">
        <div className='pt-[10px] px-[15px] pr-0'>
      <div className='grid grid-cols-10 gap-0 '>
         <div className='col-span-9'>
            <index.Typography className='font-poppins text-[#67B037] font-medium ...'>{card.title}</index.Typography>
            <div className=''>
            <index.Chip className='w-fit bg-[#67B037]' value={card.status} />
            </div>
         </div>
         <index.MoreVertIcon className='text-[#67B037] float-right'/>
      </div>
      <div className='flex mt-2'>
        <index.Typography className='font-poppins font-medium ... text-sm ... mr-[6px]'>Due Date</index.Typography>
        <index.Typography className='font-poppins font-semibold ... text-sm ...'>{card.due_date}</index.Typography>
      </div>
      </div>
      <index.CardBody className="p-0">
        <div className='px-[15px]'>
       <index.Typography className='py-[10px] font-poppins text-sm'>{card.discription}</index.Typography>
       <index.Typography className='font-poppins '>Members</index.Typography>

       <div className="flex items-center -space-x-4 py-[10px] mb-[10px]">
 
      {card.member.map((src_img)=>{
        return(
          <>
            <index.Avatar
        variant="circular"
        alt="user 1"
        className="border-2 border-[#67B037] hover:z-10 focus:z-10"
        src={src_img}
      />
          </>
        )
      })}
    </div>

       </div>
        
      </index.CardBody>
      <index.CardFooter className="grid grid-cols-3 gap-2 p-0">
        <div className="bg-[#67B037] rounded-tr-[45px] rounded-bl-lg">
          <div className="text-center p-[20px]">
          <index.Typography variant="h4" className="text-[#FFFFFF] font-poppins font-semibold">{card.task}</index.Typography>
          <index.Typography className="text-[#FFFFFF] font-poppins">Task</index.Typography>
          </div>
        </div>
        <div></div>
        <div className="flex items-end">
          <div className="text-center p-[15px] bg-[#4E4E4E] w-full rounded-tl-[45px] rounded-br-lg">
          <index.Typography variant="h4" className="text-[#FFFFFF] font-poppins font-semibold">{card.comments}</index.Typography>
          <index.Typography className="text-[#FFFFFF] font-poppins text-sm">comments</index.Typography>
          </div>
        </div>
      </index.CardFooter> 
    </index.Card>
    </div>
          </>
        )
      }) }
      </div>,
    },
  ];

  return (
    <>
    <div className='h-[31.6rem] lg:h-[42.6rem] p-[29px] pt-[3px] mt-4 overflow-auto'>
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
      <index.Tabs value={activeTab}>
        <div className='grid grid-cols-2 gap-4 mt-4'>
          <div></div>
        <div className='bg-[#F3F3F3] rounded-md ... '>
      <index.TabsHeader
        className="bg-transparent"
        indicatorProps={{
          className:
            "bg-[#67B037] shadow-none !text-gray-900",
        }}
      >
        {data.map(({ label, value }) => (
          <index.Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={activeTab === value ? "text-white w-6/12" : "w-6/12"}
          >
            {label}
          </index.Tab>
        ))}
      </index.TabsHeader>
      </div>
      </div>
      <index.TabsBody>
        {data.map(({ value, desc }) => (
          <index.TabPanel className='h-[90%] overflow-auto ...' key={value} value={value}>
            {desc}
          </index.TabPanel>
        ))}
      </index.TabsBody>
    </index.Tabs>
      </div>
  
    </div>
    </>
  )
}
