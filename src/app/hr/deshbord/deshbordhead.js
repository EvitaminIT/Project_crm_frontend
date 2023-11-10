import index from "@/material_component/client_component"

export default function Deshbordhead() {
  return (
    <>
    <div>
    <index.Typography className="text-[#67B037] font-poppins">Dashboard</index.Typography>
       <div className="grid grid-cols-2 gap-2 mb-[5px]">
        <div className="flex">
        <div className="flex">
        <index.Typography className="text-[#67B037] font-poppins">Home<index.ArrowForwardIosIcon className="text-xs" /></index.Typography>
        <index.Typography className="text-[#979BA1]">Dashboard</index.Typography>
        </div>   
      </div>
      </div>
    </div>
    </>
  )
}
