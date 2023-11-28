import React from "react";
import index from "@/material_component/client_component"; 

export function DialogCustomAnimation({
    profile_image,
    Employe_name,
    Department,
    to_date,
    from_date,
    no_of_days,
    subject,
}) {
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);
 
  return (
    <>
      <index.IconButton onClick={handleOpen} className='bg-[#E5AA50]'> <index.VisibilityOutlinedIcon/> </index.IconButton>
      <index.Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <index.DialogHeader>
        <div className="w-full">
        <index.IconButton
            color="blue-gray"
            size="sm"
            variant="text"
            onClick={handleOpen}
            className="float-right"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </index.IconButton>
          </div>
        </index.DialogHeader>
        <index.DialogBody className="mx-12 ">
          <div className="text-center border-b-2 border-[#F4F4F4] pb-4">
            <div className="flex justify-center items-center">
          <index.Avatar
          size="xxl"
        variant="circular"
        alt="user 2"
        className="border-2 border-white hover:z-10 focus:z-10"
        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
      />
      <div>
        <index.Typography className="font-semibold font-poppins">Rohit Deshmukh</index.Typography>
        <index.Typography>Markiting Executive</index.Typography>
      </div>
      </div>
          </div>
          <br/>
          <div className="text-center border-b-2 border-[#F4F4F4]">
            <index.Typography className="text-red-600">Leave Application - 3 Days</index.Typography>
            <index.Typography>Application for family vacation</index.Typography>
            <div className="flex justify-center items-center py-6">
            <index.Typography className="px-1">Leave from</index.Typography>
            <index.Typography className="px-1 text-lg text-[#2F3642]">10 Nov 2023</index.Typography>
            <index.Typography className="px-1">To</index.Typography>
            <index.Typography className="px-1 text-lg text-[#2F3642]">10 Nov 2023</index.Typography>
            </div>
          </div>
        </index.DialogBody>
        <index.DialogFooter>
          <index.Button  variant="gradient" color="green">
            <span>Approve</span>
          </index.Button>
          <index.Button className="bg-[#E55B5B] mx-4">
            <span>Reject</span>
          </index.Button>
        </index.DialogFooter>
      </index.Dialog>
    </>
  );
}