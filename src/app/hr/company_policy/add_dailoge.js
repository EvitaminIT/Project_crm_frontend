import React from "react";
import index from "@/material_component/client_component"; 
import Image from "next/image";



export function AddDialog({

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

  const [selectedFile, setSelectedFile] = React.useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };
 
  return (
    <>
      <index.IconButton onClick={handleOpen} className="bg-[#67B037]"><index.AddIcon/></index.IconButton>
      <index.Dialog
        size="lg"
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
         <index.Typography className="text-center font-poppins font-semibold text-[#67B037] text-lg">Add Policy</index.Typography>
        <index.DialogBody className="mx-12 ">
        <index.Card className="grid grid-cols-2 gap-4 p-6 border-2 border-[#BABABA]">
            <index.Input label="Policy Name" variant="static" placeholder="Policy Name"/>
            <index.Input label="Policy details" variant="static" placeholder="Policy details"/>
            <div className="col-span-2">
             <index.Typography className="font-poppins text-base">Add Policy Doc</index.Typography>
            <div class="flex items-center justify-center w-full">
            <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                    </svg>
                    
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">{selectedFile ?  selectedFile.name:"Click to upload"}</span> {selectedFile ? "" :"or drag and drop" }</p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">pdf</p>

                </div>
                <input id="dropzone-file" type="file" class="hidden" onChange={handleFileChange}/>
            </label>
            </div> 
                {/* <div className="p-4 border-dashed border-2 border-gray-400">
      <label
        htmlFor="fileInput"
        className="cursor-pointer block text-center text-gray-600"
      >
        {selectedFile ? (
          <p>{selectedFile.name}</p>
        ) : (
          <p>Drag and drop your file here or click to select</p>
        )}
      </label>
      <input
        id="fileInput"
        type="file"
        className="hidden"
        onChange={handleFileChange}
      />
    </div> */}
            </div>
        </index.Card>
        </index.DialogBody>

        <index.DialogFooter className="justify-between">
     
        </index.DialogFooter>
      </index.Dialog>
    </>
  );
}