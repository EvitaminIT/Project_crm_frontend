import React from 'react';
import index from '@/material_component/client_component';
import { useRef } from 'react';

export default function Customupladbtn() {
  const datePickerRef = useRef(null);
  const [selectedFile, setSelectedFile] = React.useState(null);

  const handleOpenDatePicker = () => {
    if (datePickerRef.current) {
      datePickerRef.current.click(); 
    }
  };

  const get_file =(e)=>{
    const file = e.target.files[0]
    if (file) {
      setSelectedFile(file);
    } else {
      setSelectedFile(null);
    }
  }

  console.log(selectedFile,"wirkkr")

  return (
    <div>
      <div>
      <div className='flex items-center bg-[#F0F0F0] rounded-full w-fit'>
      <index.Button className='rounded-full bg-[#E0E0E0] text-[#777777]' onClick={handleOpenDatePicker}>
        Choose File
      </index.Button>
      <index.Typography className='px-6'>{selectedFile ?  selectedFile.name : "No File Chosen" }</index.Typography>
      </div>
      </div>
      <label className='hidden' htmlFor="upload-photo">Browse...</label>
      <input className='hidden' onChange={get_file} type="file" name="photo" id="upload-photo" ref={datePickerRef} />
    </div>
  );
}

