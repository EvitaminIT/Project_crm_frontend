import React from "react";
import index from "@/material_component/client_component"; 
import Image from "next/image";
import default_img from '../../../Images/defult.jpg'
import TagInput from "./input_tag";
import Customupladbtn from "./Customupladbtn";
import { file_upload_filed } from "./SSRcomponent";
import fil_img from "../../../Images/file_img.svg"
import File_btn_badge from "./file_btn_badge";

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
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);
  const [isChecked, setChecked] = React.useState(false);
  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

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



  const handleChange = () => {
    setChecked(!isChecked); // Toggle the state
  };

 
  return (
    <>
      <index.IconButton onClick={handleOpen} className='bg-[#46A5C6]'> <index.EditCalendarOutlinedIcon/> </index.IconButton>
      <index.Dialog
        open={open}
        size="xl"
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
         <index.DialogHeader className="pb-0">
        
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
 
        <div className="justify-center flex">
          <div className="relative">
        {/* Default image */}
        <Image
          src={image || default_img } // Use your default image path
          alt="Default"
          width={500} // Set the width of the image
          height={500} // Set the height of the image
          className="border-solid border-2 border-[#67B037] w-36 h-auto rounded-full cursor-pointer"
        />

        {/* Upload option on hover */}
        <label className="rounded-full w-36 absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
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
        <div className="gap-4 px-16 flex justify-end mb-4">
        <index.Switch color="red" checked={isChecked} onChange={handleChange} />
        <p>Edit is {isChecked ? "on" : "off"}</p>
        </div>

        <index.DialogBody className="mx-12 overflow-auto h-[61vh] scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-gray-200 scrollbar-thumb-rounded-lg scrollbar-w-lg">
         <div className="grid grid-cols-2 gap-4 ">
          {/* Personal Details */}
          <index.Card className="p-6 shadow-md border-solid border-2 border-[#BABABA]">
          <div className="py-6 mb-6 border-b-2 border-[#F4F4F4]">
            <index.Typography className="font-poppins text-[#67B037]">Personal Details</index.Typography>
          </div>
          <div className="grid grid-cols-2 gap-2">
      <div className="mb-6">
      <index.Typography>First Name</index.Typography>
      <index.Input
        type="text"
        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
        disabled={isChecked ? false : true}
        labelProps={{
          className: "before:content-none after:content-none",
        }}
        containerProps={{
          className: "min-w-0",
        }}
      />
      </div>
      <div className="mb-6">
      <index.Typography>Last Name</index.Typography>
      <index.Input
        type="text"
        disabled={isChecked ? false : true}
        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
        containerProps={{
          className: "min-w-0",
        }}
      />
      </div>
      <div className="mb-6">
      <index.Typography>Phone</index.Typography>
      <index.Input
        type="number"
        disabled={isChecked ? false : true}
        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
        containerProps={{
          className: "min-w-0",
        }}
      />
      </div>
      <div className="mb-6">
      <index.Typography>DOB</index.Typography>
      <index.Input
        disabled={isChecked ? false : true}
        type="date"
        value="2023-01-01"
        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
        containerProps={{
          className: "min-w-0",
        }}
      />
      </div>
      <div className="mb-6">
      <index.Typography>Address</index.Typography>
      <index.Input
        type="text"
        disabled={isChecked ? false : true}
        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
        containerProps={{
          className: "min-w-0",
        }}
      />
      </div>
      <div className="mb-6">
      <index.Typography>Blood Group</index.Typography>
      <index.Input
        type="text"
        disabled={isChecked ? false : true}
        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
        containerProps={{
          className: "min-w-0",
        }}
      />
      </div>
      </div> 
       

        <div>
       <div>
        <index.Typography>Gender</index.Typography>
        </div>    
      <index.Card className="w-full max-w-[24rem] shadow-none">
      <index.List className="flex-row">
        <index.ListItem className="p-0">
          <label
            htmlFor="horizontal-list-react"
            className="flex w-full cursor-pointer items-center px-3 py-2"
          >
            <index.ListItemPrefix className="mr-3">
              <index.Radio
                disabled={isChecked ? false : true}
                name="horizontal-list"
                id="horizontal-list-react"
                ripple={false}
                value="Male"
                className="hover:before:opacity-0"
                containerProps={{
                  className: "p-0",
                }}
              />
            </index.ListItemPrefix>
            <index.Typography
              color="blue-gray"
              className="font-medium text-blue-gray-400"
            >
              Male
            </index.Typography>
          </label>
        </index.ListItem>
        <index.ListItem className="p-0">
          <label
            htmlFor="horizontal-list-vue"
            className="flex w-full cursor-pointer items-center px-3 py-2"
          >
            <index.ListItemPrefix className="mr-3">
              <index.Radio
                disabled={isChecked ? false : true}
                name="horizontal-list"
                id="horizontal-list-vue"
                ripple={false}
                value="Female"
                className="hover:before:opacity-0"
                containerProps={{
                  className: "p-0",
                }}
              />
            </index.ListItemPrefix>
            <index.Typography
              color="blue-gray"
              className="font-medium text-blue-gray-400"
            >
              Female
            </index.Typography>
          </label>
        </index.ListItem>
        <index.ListItem className="p-0">
          <label
            htmlFor="horizontal-list-vue"
            className="flex w-full cursor-pointer items-center px-3 py-2"
          >
            <index.ListItemPrefix className="mr-3">
              <index.Radio
                disabled={isChecked ? false : true}
                name="horizontal-list"
                id="horizontal-list-vue"
                ripple={false}
                value="Trans"
                className="hover:before:opacity-0"
                containerProps={{
                  className: "p-0",
                }}
              />
            </index.ListItemPrefix>
            <index.Typography
              color="blue-gray"
              className="font-medium text-blue-gray-400"
            >
              Trans
            </index.Typography>
          </label>
        </index.ListItem>
      </index.List>
    </index.Card>
        </div>
      

      
          </index.Card>
           
           {/* Company Details */}
          <index.Card className="p-6 shadow-md border-solid border-2 border-[#BABABA]">
          <div className="py-6 mb-6 border-b-2 border-[#F4F4F4]">
            <index.Typography className="font-poppins text-[#67B037]">Company Details</index.Typography>
          </div>
          <div className="grid grid-cols-2 gap-4">
      <div className="mb-6">
      <index.Typography>Employee ID</index.Typography>
      <index.Input
        type="text"
        disabled={isChecked ? false : true}
        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
        placeholder="Employee ID"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
        containerProps={{
          className: "min-w-0",
        }}
      />
      </div>
      <div className="mb-6">
      <index.Typography>Branch</index.Typography>
      <index.Input
        disabled={isChecked ? false : true}
        type="text"
        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
        placeholder="Branch"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
        containerProps={{
          className: "min-w-0",
        }}
      />
      </div>
      <div className="mb-6">
      <index.Typography>Department</index.Typography>
      <index.Select className=""
         disabled={isChecked ? false : true}  >
        <index.Option>Material Tailwind HTML</index.Option>
        <index.Option>Material Tailwind React</index.Option>
        <index.Option>Material Tailwind Vue</index.Option>
        <index.Option>Material Tailwind Angular</index.Option>
        <index.Option>Material Tailwind Svelte</index.Option>
      </index.Select>
      </div>
      <div className="mb-6">
      <index.Typography>Designation</index.Typography>
      <index.Select className=""
         disabled={isChecked ? false : true} >
        <index.Option>Material Tailwind HTML</index.Option>
        <index.Option>Material Tailwind React</index.Option>
        <index.Option>Material Tailwind Vue</index.Option>
        <index.Option>Material Tailwind Angular</index.Option>
        <index.Option>Material Tailwind Svelte</index.Option>
      </index.Select>
      </div>
      
      <div className="mb-6">
      <index.Typography>Company DOJ</index.Typography>
      <index.Input
        type="date"
        disabled={isChecked ? false : true}
        value="2023-01-01"
        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
        containerProps={{
          className: "min-w-0",
        }}
      />
      </div>
   
      </div> 
       

      
          </index.Card>

          {/* Professional Details */}
          <index.Card className="p-6 shadow-md border-solid border-2 border-[#BABABA]">
          <div className="py-6 mb-6 border-b-2 border-[#F4F4F4]">
            <index.Typography className="font-poppins text-[#67B037]">Professional Details</index.Typography>
          </div>
          <div className="">
      <div className="mb-6">
      <index.Typography>Work Experience</index.Typography>
      <index.Input
        type="text"
        disabled={isChecked ? false : true}
        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
        containerProps={{
          className: "min-w-0",
        }}
      />
      </div>
      <index.Typography>Skills</index.Typography>
       <TagInput/>
      </div> 
          </index.Card>

          {/* Bank Account Details */}
          <index.Card className="p-6 shadow-md border-solid border-2 border-[#BABABA]">
          <div className="py-6 mb-6 border-b-2 border-[#F4F4F4]">
            <index.Typography className="font-poppins text-[#67B037]">Bank Account Details</index.Typography>
          </div>
          <div className="grid grid-cols-2 gap-4">
      <div className="mb-6 col-span-2">
      <index.Typography>Account Holder Name</index.Typography>
      <index.Input
        type="text"
        disabled={isChecked ? false : true}
        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
        containerProps={{
          className: "min-w-0",
        }}
      />
      </div>
      <div className="mb-6">
      <index.Typography>Account Number</index.Typography>
      <index.Input
        type="text"
        disabled={isChecked ? false : true}
        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
        containerProps={{
          className: "min-w-0",
        }}
      />
      </div>
      <div className="mb-6">
      <index.Typography>Bank Name</index.Typography>
      <index.Input
        type="text"
        disabled={isChecked ? false : true}
        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
        containerProps={{
          className: "min-w-0",
        }}
      />
      </div>
      <div className="mb-6">
      <index.Typography>IFSC</index.Typography>
      <index.Input
        type="text"
        disabled={isChecked ? false : true}
        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
        containerProps={{
          className: "min-w-0",
        }}
      />
      </div>
      <div className="mb-6">
      <index.Typography>Branch Location</index.Typography>
      <index.Input
        type="text"
        disabled={isChecked ? false : true}
        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
        containerProps={{
          className: "min-w-0",
        }}
      />
      </div>
      </div> 
             
          </index.Card>

         <index.Card className="p-6 shadow-md border-solid border-2 border-[#BABABA] col-span-2">
         <div className="py-6 mb-6 border-b-2 border-[#F4F4F4]">
            <index.Typography className="font-poppins text-[#67B037]">Documents</index.Typography>
          </div>
          <div className="grid grid-cols-3 gap-4">  
          {file_upload_filed.map((filed)=>{
            return(
              <>
          <div className={`py-2 ${isChecked?"":"hidden"}`}>
          <index.Typography className="font-semibold">{filed.file_title}</index.Typography>
          <Customupladbtn/>
          </div>
              </>
            )
          })}
           
          {file_upload_filed.map((filed)=>{
            return(
              <>   
     <div className={`${isChecked?"hidden":""}`}>
      <index.Card className="mx-24 border-2 border-[#BABABA] h-full bg-[#E0E0E0]">
      <File_btn_badge file_title={filed.file_title}/>
      </index.Card>
     </div>
              </>
            )
          })}
          </div>


         </index.Card>
         
         </div>
        
        </index.DialogBody>
        <index.DialogFooter className="w-full px-[63px]">
         <index.Button className={`bg-[#67B037] ${isChecked?"":"invisible"}`}>Save</index.Button>
        </index.DialogFooter>
      </index.Dialog>
    </>
  );
}