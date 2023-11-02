"use client"
import index from "@/material_component/client_component"
import React from "react";
import { recent,resent_messages } from "./SSRcomponent ";
import Online_tab from "./online_tab";
import Test from "./test";
import { TwitterChatboxTextarea } from "./input";

export default function Page() {
    const [activeTab, setActiveTab] = React.useState("dashboard");

    function handleScroll(e) {
      const container = e.target;
      const delta = e.deltaY || e.deltaX;
    
      container.scrollLeft += delta;
    
      // Prevent the default behavior to stop the page from scrolling vertically
      e.preventDefault();
    }

    const data = [
        {
          value: "dashboard",
          icon: index.AccessTimeIcon,
          desc:<div>
          <index.Typography className="font-poppins">Favorites</index.Typography>
         <div onWheel={(e) => handleScroll(e)} className=" overflow-x-auto scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-gray-200 scrollbar-thumb-rounded-lg scrollbar-w-lg">
  <div className="flex space-x-2 py-[6px]">
    {recent.map((img_src) => 
    { return(
      <div key={index} className="flex-shrink-0">
        <index.Avatar
          variant="circular"
          alt={`user ${index + 1}`}
          size="lg"
          className="border-2 border-[#67B037] hover:z-10 focus:z-10"
          src={img_src.src}
        />
      </div>
    )
    })}
  </div>
</div>
         <div className="lg:h-[40.8vh] scrollbar-hide overflow-auto ...">
         {resent_messages.map((msg_ele)=>{
          return(
            <>
          <Online_tab name={msg_ele.name} status={msg_ele.status} msg={msg_ele.last_msg} activity={msg_ele.active}/>
            </>
          )
         })}
         </div>
         </div>,
        },
        {
          value: "profile",
          icon: index.GroupIcon,
          desc: <div>
            <index.Typography className="font-poppins">Group</index.Typography>
            <div className="lg:h-[49.7vh] scrollbar-hide overflow-auto ...">
         {resent_messages.map((msg_ele)=>{
          return(
            <>
          <Online_tab name={msg_ele.name} status={msg_ele.status} msg={msg_ele.last_msg} activity={msg_ele.active}/>
            </>
          )
         })}
         </div>
          </div>,
        },
      ];

  return (
    <>
     <div className='p-[29px] pt-[3px] pb-0'>
        <index.Typography className="text-[#67B037] font-poppins">Messenger</index.Typography>
       <div className="grid grid-cols-2 gap-2 mb-[5px]">
        <div className="flex">
        <div className="flex">
        <index.Typography className="text-[#67B037] font-poppins">Home<index.ArrowForwardIosIcon className="text-xs" /></index.Typography>
        <index.Typography className="text-[#979BA1]">Messenger</index.Typography>
        </div>   
      </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <index.Card className="border-2 border-[#BABABA]">
            <div className="p-8">
            <div className="relative text-gray-600">
      <index.Input
        type="search"
        name="search"
        placeholder="Search..."
        className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none !border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
        labelProps={{
          className: "hidden",
        }}
        containerProps={{ className: "min-w-[100px]" }}
      />
      <button type="submit" className="absolute right-0 top-0">
        <div className="p-[12px] bg-[#67b037] rounded-full ... w-[121%] text-white flex justify-center">
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
     <div className="mt-4">
     <div>
      <index.Tabs value={activeTab}>
        <div className='bg-[#F3F3F3] rounded-full ... '>
      <index.TabsHeader
        className="bg-transparent"
        indicatorProps={{
          className:
            "bg-[#67B037] shadow-none !text-gray-900 rounded-full",
        }}
      >
        {data.map(({ value,icon }) => (
          <index.Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={activeTab === value ? "text-white w-6/12" : "w-6/12"}
          >
            {React.createElement(icon, { className: "text-3xl" })}
          </index.Tab>
        ))}
      </index.TabsHeader>
      </div>
      <index.TabsBody>
        {data.map(({ value, desc }) => (
          <index.TabPanel className='h-[90%]' key={value} value={value}>
            {desc}
          </index.TabPanel>
        ))}
      </index.TabsBody>
    </index.Tabs>
      </div>
     </div>
            </div>
        </index.Card>
        <div className="col-span-2">
          <index.Card className="border-2 border-[#BABABA] h-full">
             <div className="p-6 flex items-center justify-between border-b-4 border-[#F4F4F4]">
              <div className="flex items-center">  
              <index.Avatar
        variant="circular"
        alt="user 3"
        size="xl"
        className="border-2 border-white hover:z-10 focus:z-10"
        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
      />
      <div className="px-[10px]">   
        <index.Typography>Raj Kumar</index.Typography>
        <div className="flex items-center">
        <div className="h-2 w-2 rounded-full bg-[#67B037] mr-1"/>
        <index.Typography className="text-xs">Online</index.Typography>
        </div>
      </div>
      </div>
      <div>
            <index.Typography className="text-xs">3 Min ago</index.Typography>
         </div>
             </div>
             <div className="p-6 h-3/4">
            work
          </div>
          <div className="mt-1">
            <TwitterChatboxTextarea/>
          </div>
          {/* <div className="grid grid-cols-10">
            <div className="flex justify-center items-center">
              <index.LocalHospitalOutlinedIcon className="text-4xl"/>
            </div>
            <div className="col-span-8"> 
          <index.Textarea
        type="text"
        placeholder="Type Somthing....."
        className="!border border-none bg-white text-gray-900 ring-4 ring-transparent placeholder:text-gray-500"
        labelProps={{
          className: "hidden",
        }}
        containerProps={{ className: "min-w-[100px]" }}
      />
      </div>
      <div>
        <index.Button className="bg-[#67B037] float-right">
        <index.SendOutlinedIcon/>
        </index.Button>
      </div>
          </div> */}
          </index.Card>
        </div>
      </div>
      </div>
      {/* <Test/> */}
    </>
  )
};
