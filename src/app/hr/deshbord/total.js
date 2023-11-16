import index from "@/material_component/client_component"
import { card_elements } from "./SSRcomponent"

export default function Total() {
  return (
    <>
    <div className="grid grid-cols-6 gap-6">
    { card_elements.map((element)=>{
      return(
      <>     
      <index.CardHeader floated={false} className={element.color? "text-center border-solid border-2 border-[#BABABA] bg-[#FFE5E5] m-0 h-fit col-span-2 ..." : "m-0 col-span-1 ... h-fit text-center border-solid border-2 border-[#BABABA]"}>
        <div className="flex justify-center p-[18px]">
      <index.Card className={element.color ? "w-fit h-fit p-[10px] bg-[#E55B5B] text-[#FFFFFF]":"w-fit h-fit p-[10px] bg-[#67B037] text-[#FFFFFF]"}>
      {element.icon}
      </index.Card>
      </div>
      <index.Typography className="text-base ... font-poppins">{element.title}</index.Typography>
      <index.Typography className={element.color ? "text-[#E55B5B] lg:text-3xl font-poppins font-semibold":"text-[#67B037] lg:text-3xl font-poppins font-semibold"}>{element.Count}</index.Typography>
      </index.CardHeader>
      </>
      )
    })}
    </div>
    </>
  )
}
