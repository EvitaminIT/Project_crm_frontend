import React from "react";
import index from "@/material_component/client_component"; 
import Image from "next/image";
import default_img from '../../../Images/defult.jpg'
import comany_img  from '../../../Images/login1.svg'

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
        <div className="text-center">
          <index.Typography>{activeStep === 0 ? "Personal Details": activeStep === 1 ? "Company Detail" : activeStep === 2 ? "Bank Account Detail" : ""}</index.Typography>
        </div>
         <div className="w-full py-4 px-8">
      <index.Stepper
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
      >
        <index.Step onClick={() => setActiveStep(0)}>
          <index.HomeIcon className="h-5 w-5" />
        </index.Step>
        <index.Step onClick={() => setActiveStep(1)}>
          <index.UserIcon className="h-5 w-5" />
        </index.Step>
        <index.Step onClick={() => setActiveStep(2)}>
          <index.CogIcon className="h-5 w-5" />
        </index.Step>
      </index.Stepper>
     
    </div>
       
        <index.DialogBody className="mx-12 ">
          {/* Personl Details */}

          <div className={activeStep === 0 ? "":"hidden"}>

          <div className="justify-center flex">
          <div className="relative">
        {/* Default image */}
        <Image
          src={image || default_img } // Use your default image path
          alt="Default"
          width={500} // Set the width of the image
          height={500} // Set the height of the image
          className="w-36 h-auto rounded-md cursor-pointer"
        />

        {/* Upload option on hover */}
        <label className="rounded-md w-36 absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
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
    <br/>
    <div className="grid grid-cols-2 gap-4">
      <div className="mb-6">
      {/* <index.Typography>First Name</index.Typography> */}
      <index.Input
        type="text"
        variant="static"
        placeholder="Rohit"
        label="First Name"
        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
      />
      </div>
      <div className="mb-6">
      {/* <index.Typography>Last Name</index.Typography> */}
      <index.Input
        type="text"
        variant="static"
        placeholder="Deshmukh"
        label="Last Name"
        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
      />
      </div>
      <div className="mb-6">
      {/* <index.Typography>Last Name</index.Typography> */}
      <index.Input
        type="number"
        variant="static"
        placeholder="1234567890"
        label="Phone"
        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
      />
      </div>
      <div className="mb-6">
      {/* <index.Typography>Last Name</index.Typography> */}
      <index.Input
        type="date"
        variant="static"
        label="DOB"
        value="2023-01-01"
        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
      />
      </div>
      </div> 
      <div className="mb-6">
      {/* <index.Typography>Last Name</index.Typography> */}
      <index.Input
        type="text"
        variant="static"
        placeholder="xyz indore MP"
        label="Address"
        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
      />
      </div>
      <div>
        <index.Typography>Gender</index.Typography>
        <div>
        <index.Card className="w-full max-w-[24rem] shadow-none">
      <index.List className="flex-row">
        <index.ListItem className="p-0">
          <label
            htmlFor="horizontal-list-react"
            className="flex w-full cursor-pointer items-center px-3 py-2"
          >
            <index.ListItemPrefix className="mr-3">
              <index.Radio
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
      </index.List>
    </index.Card>
        </div>
      </div>
          </div>
         
          {/* Company Details */}

          <div className={activeStep === 1 ? "":"hidden"}>
            <div className="flex justify-center">
              <Image src={comany_img} />
            </div>
            <br/>
             <div>
              <div className="mb-6">
             <index.Input
             type="text"
             variant="static"
             placeholder="#EMP00001"
             label="Employee ID"
             className="!border-t-blue-gray-200 focus:!border-t-gray-900"
      />
             </div>
             <br/>
             <div className="grid grid-cols-2 gap-4">
              <div className="mb-6">
             <index.Select variant="static" label="Branch">
                 <index.Option>Material Tailwind HTML</index.Option>
                 <index.Option>Material Tailwind React</index.Option>
                 <index.Option>Material Tailwind Vue</index.Option>
                 <index.Option>Material Tailwind Angular</index.Option>
                 <index.Option>Material Tailwind Svelte</index.Option>
            </index.Select>
              </div>
              <div className="mb-6">
              <index.Select variant="static" label="Deparment">
                 <index.Option>Material Tailwind HTML</index.Option>
                 <index.Option>Material Tailwind React</index.Option>
                 <index.Option>Material Tailwind Vue</index.Option>
                 <index.Option>Material Tailwind Angular</index.Option>
                 <index.Option>Material Tailwind Svelte</index.Option>
            </index.Select>
              </div>
              <div className="mb-6">
              <index.Select variant="static" label="Designation">
                 <index.Option>Material Tailwind HTML</index.Option>
                 <index.Option>Material Tailwind React</index.Option>
                 <index.Option>Material Tailwind Vue</index.Option>
                 <index.Option>Material Tailwind Angular</index.Option>
                 <index.Option>Material Tailwind Svelte</index.Option>
            </index.Select>
              </div>
              <div>
              <index.Input
        type="date"
        variant="static"
        label="Company Date Of Joining"
        value="2023-01-01"
        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
      />
              </div>
             </div>
             </div>
          </div>
              
           {/* Bank Details */}

           <div className={activeStep === 2 ? "":"hidden"}>
             <div className="grid grid-cols-2 gap-4">
             <div className="mb-6">
             <index.Input
             type="text"
             variant="static"
             placeholder="Rohit Deshmukh"
             label="Account Holder Name"
             className="!border-t-blue-gray-200 focus:!border-t-gray-900"
      />
             </div>
             <div className="mb-6">
             <index.Input
             type="text"
             variant="static"
             placeholder="0000000000154654"
             label="Account Number"
             className="!border-t-blue-gray-200 focus:!border-t-gray-900"
      />
             </div>
             <div className="mb-6">
             <index.Input
             type="text"
             variant="static"
             placeholder="SBI"
             label="Bank Name"
             className="!border-t-blue-gray-200 focus:!border-t-gray-900"
      />
             </div>
             <div className="mb-6">
             <index.Input
             type="text"
             variant="static"
             placeholder="SBI1234"
             label="IFC Code"
             className="!border-t-blue-gray-200 focus:!border-t-gray-900"
      />
             </div>
             <div className="mb-6">
             <index.Input
             type="text"
             variant="static"
             placeholder="Mhow"
             label="Branch Location"
             className="!border-t-blue-gray-200 focus:!border-t-gray-900"
      />
             </div>
             <div className="mb-6">
             <index.Input
             type="text"
             variant="static"
             placeholder="467879"
             label="Tax Payer Id"
             className="!border-t-blue-gray-200 focus:!border-t-gray-900"
      />
             </div>
             </div>
           </div>
            
        </index.DialogBody>
        <index.DialogFooter className="justify-between">
        <index.Button onClick={handlePrev} disabled={isFirstStep}>
          Prev
        </index.Button>
        <index.Button onClick={handleNext} disabled={isLastStep}>
          Next
        </index.Button>

        </index.DialogFooter>
      </index.Dialog>
    </>
  );
}