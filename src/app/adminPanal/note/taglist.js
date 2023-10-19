import index from "@/material_component/client_component"
import Speeddiler_taglist from "./speeddiler_taglist"
import { useEffect } from "react"

export default function Taglist({
  avtar_list,
})
{

    let avr_list= avtar_list ? avtar_list : []
  return (
    <>
     <div className="flex items-center -space-x-4">
     {avr_list.slice(0, 5).map((link) => {
  return (
    <index.Avatar
      key={index}
      variant="circular"
    //   alt={`user ${index + 1}`}
      className="border-2 border-white hover:z-10 focus:z-10"
      src={link.src}
    />
  );
})}
      <Speeddiler_taglist avt_list={avtar_list}/>
    </div>
    </>
  )
}
