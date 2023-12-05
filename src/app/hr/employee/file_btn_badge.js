import index from "@/material_component/client_component"
import fil_img from "../../../Images/file_img.png"
import Image from "next/image"

export default function File_btn_badge({
    file_title
}) {
  return (
    <>
       <div className="text-center h-full flex flex-col justify-between">
    <index.Badge
      content={<index.CheckIcon className="h-4 w-4 text-white" strokeWidth={2.5} />}
      className="bg-gradient-to-tr from-green-400 to-green-600 border-2 border-white shadow-lg shadow-black/20"
    >
    <div className="w-full flex justify-center">
      <Image src={fil_img}/>
    </div>
    </index.Badge>
    <index.Typography className="font-semibold ">{file_title}</index.Typography>
    <div className="">
    <div className="mb-2">
    <index.IconButton className="mr-2 bg-[#67B037]" size="sm"> <index.RemoveRedEyeOutlinedIcon/> </index.IconButton>
    <index.IconButton className="mr-2 bg-[#46A5C6]" size="sm"> <index.DownloadIcon/> </index.IconButton>
    </div>
    </div>
      </div>
    </>
  )
}
