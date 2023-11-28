import React from "react";
import index from "@/material_component/client_component"; 
import Image from "next/image";
import default_img from '../../../Images/defult.jpg'

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
  const [image, setImage] = React.useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
 
  return (
    <>
      <index.IconButton onClick={handleOpen} className='bg-[#46A5C6]'> <index.EditCalendarOutlinedIcon/> </index.IconButton>
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
          <div>

          <div className="justify-center flex">
      <div className="relative">
        {/* Default image */}
        <Image
          src={image || default_img } // Use your default image path
          alt="Default"
          width={500} // Set the width of the image
          height={500} // Set the height of the image
          className="w-40 h-auto rounded-md cursor-pointer"
        />

        {/* Upload option on hover */}
        <label className="rounded-md w-40 absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
          <span className="text-lg">Upload Image</span>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </label>
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