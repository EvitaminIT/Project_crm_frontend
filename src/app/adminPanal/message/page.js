"use client"
import index from "@/material_component/client_component"
import React from "react";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
  import {
    Square3Stack3DIcon,
    UserCircleIcon,
    Cog6ToothIcon,
  } from "@heroicons/react/24/solid";


export default function page() {
    const [activeTab, setActiveTab] = React.useState("dashboard");

    const data = [
        {
          value: "dashboard",
          icon: index.AccessTimeIcon,
          desc: `It really matters and then like it really doesn't matter.
          What matters is the people who are sparked by it. And the people
          who are like offended by it, it doesn't matter.`,
        },
        {
          value: "profile",
          icon: index.GroupIcon,
          desc: `Because it's about motivating the doers. Because I'm here
          to follow my dreams and inspire other people to follow their dreams, too.`,
        },
      ];

  return (
    <>
     <div className='p-[29px] pt-[3px] pb-0'>
        <index.Typography className="text-[#67B037] font-poppins">Messenger</index.Typography>
       <div className="grid grid-cols-2 gap-2 mb-[5px]">
        <div className="flex">
        <div className="flex">
        <index.Typography className="text-[#67B037] font-poppins">Home <index.ArrowForwardIosIcon className="text-xs" /></index.Typography>
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
          <index.TabPanel className='h-[90%] overflow-auto ...' key={value} value={value}>
            {desc}
          </index.TabPanel>
        ))}
      </index.TabsBody>
    </index.Tabs>
      </div>
     </div>
            </div>
        </index.Card>
        
      </div>
      </div>
    </>
  )
};
