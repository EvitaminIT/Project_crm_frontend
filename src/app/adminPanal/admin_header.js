import index from "@/material_component/client_component"
import { Typography } from "@material-tailwind/react";
import React from "react"; 
import avtar from "./avatr.jpg"

export function Admin_hadder() {
    const [openMenu, setOpenMenu] = React.useState(false);
    const menuItems = [
        {
          title: "@material-tailwind/html",
          description:
            "Learn how to use @material-tailwind/html, packed with rich components and widgets.",
        },
        {
          title: "@material-tailwind/react",
          description:
            "Learn how to use @material-tailwind/react, packed with rich components for React.",
        },
        {
          title: "Material Tailwind PRO",
          description:
            "A complete set of UI Elements for building faster websites in less time.",
        },
      ];

  return (
    <>
    <div className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 p-[30px] pb-[2%] text-center md:justify-between">
         <index.Menu open={openMenu} handler={setOpenMenu} allowHover>
      <index.MenuHandler>
        <index.Button
          variant="text"
          className="flex items-center gap-3 px-[28px] py-[2px] text-base font-normal capitalize tracking-normal border-solid border-2 border-black-600 ... w-[30%] flex justify-center"
        >
           <index.Avatar src={avtar.src} alt="avatar" />
            <div>
           <index.Typography variant="h6" className="text-[#67b037]">
              Rakesh Jain
           </index.Typography>
           <index.Typography className="float-left text-[#bcbec2]">
            E-Vitamin
           </index.Typography>
           </div>
          <index.ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3.5 w-3.5 transition-transform ${
              openMenu ? "rotate-180" : ""
            }`}
          />
        </index.Button>
      </index.MenuHandler>
      <index.MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
        <index.Card
          color="gray"
          shadow={false}
          variant="gradient"
          className="col-span-3 grid h-full w-full place-items-center rounded-md"
        >
          <index.RocketLaunchIcon strokeWidth={1} className="h-28 w-28" />
        </index.Card>
        <ul className="col-span-4 flex w-full flex-col gap-1">
          {menuItems.map(({ title, description }) => (
            <a href="#" key={title}>
              <index.MenuItem>
                <index.Typography variant="h6" color="blue-gray" className="mb-1">
                  {title}
                </index.Typography>
                <index.Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  {description}
                </index.Typography>
              </index.MenuItem>
            </a>
          ))}
        </ul>
      </index.MenuList>
    </index.Menu>

{/* search box */}
<div className="flex items-center">
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
    <index.NotificationsNoneOutlinedIcon className="p-[7px] text-4xl bg-[#67b037] text-white rounded-md ... ml-[12px]" />
    <index.MailOutlinedIcon className="p-[7px] text-4xl bg-[#67b037] text-white rounded-md ... ml-[8px]" />
    </div>
    </div>
    
    </>
  );
}

export default Admin_hadder;