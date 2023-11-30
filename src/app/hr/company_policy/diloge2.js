import React from "react";
import index from "@/material_component/client_component"; 
import Image from "next/image";
import smpl from '../../../Images/sample.pdf'


export function DialogCustomAnimation({

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
      <index.Button onClick={handleOpen} className="bg-[#67B037] px-40 mt-4">View More</index.Button>
      <index.Dialog
        open={open}
        size="xl"
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
        <iframe src={smpl} className="w-full h-[600px]"/>
        </index.DialogBody>
        <index.DialogFooter className="justify-between">
     
        </index.DialogFooter>
      </index.Dialog>
    </>
  );
}