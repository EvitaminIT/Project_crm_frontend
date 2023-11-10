import index from "@/material_component/client_component"
import { card_elements } from "./SSRcomponent"

export default function Total() {
  return (
    <>
    <div className="grid grid-cols-6 gap-5">
    { card_elements.map((element)=>{
      return(
      <>     
      <index.CardHeader floated={false} className={element.color? "text-center border-solid border-2 border-[#BABABA] bg-[#FFE5E5] h-fit col-span-2 ..." : "col-span-1 ... h-fit text-center border-solid border-2 border-[#BABABA]"}>
        <div className="flex justify-center p-[18px]">
      <index.Card className={element.color ? "w-fit h-fit p-[10px] bg-[#B03737] text-[#FFFFFF]":"w-fit h-fit p-[10px] bg-[#67B037] text-[#FFFFFF]"}>
      {element.icon}
      </index.Card>
      </div>
      <index.Typography className="text-base ... font-poppins">{element.title}</index.Typography>
      <index.Typography className="text-[#67B037] font-poppins font-semibold">{element.Count}</index.Typography>
      </index.CardHeader>
      </>
      )
    })}
    </div>
    </>
  )
}
