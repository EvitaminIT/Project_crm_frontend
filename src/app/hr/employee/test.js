import React from 'react'
import index from '@/material_component/client_component'

export default function Test() {
  return (
    <div>
       {/* <index.Input id="upload-photo" type='file'/>
       <br/>
       <div  className='flex items-center gap-6 bg-[#F0F0F0] rounded-full'>
        <index.Button className='rounded-full bg-[#E0E0E0] text-[#777777]'>Choose File</index.Button>
        <div>
        <index.Typography>No File Chosen</index.Typography>
        </div>
       </div>
       <label for="upload-photo"><button> Browse... </button></label> */}
       {/* <input className='hidden' type="file" name="photo" id="upload-photo" /> */}
       <div class="container">
    <div class="fileUploadInput">
    <label>✨ Upload File</label>
    <input type="file" />
    <button>+</button></div>
</div>
    </div>
  )
}
