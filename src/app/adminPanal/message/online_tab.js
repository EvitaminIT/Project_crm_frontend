import index from "@/material_component/client_component"

export default function Online_tab(
 {
    name,
    status,
    msg,
    activity,
 }
) {

  return (
    <>
    <div className="mt-4">
    <index.Card className="border-2 border-[#BABABA] ">
     <div className="grid grid-cols-5 gap-3 p-4">
        <div>
        <index.Avatar src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80" alt="avatar" size="lg" className={status==="Online" ? "border-2 border-[#67B037] hover:z-10 focus:z-10": "border-2 border-[#E55B5B] hover:z-10 focus:z-10"}/>
        </div>
        <div className="col-span-3">
         <index.Typography className="font-poppins text-sm">{name}</index.Typography>
         <div className="flex items-center">
         <div className={status==="Online" ? "h-2 w-2 rounded-full bg-[#67B037] mr-1" : "h-2 w-2 rounded-full bg-[#E55B5B] mr-1"} />
         <index.Typography className="text-xs">{status}</index.Typography>
         </div>
         <div className="flex">
            <index.Typography className="text-sm font-semibold">You:</index.Typography>
            <index.Typography className="text-sm">{msg}</index.Typography>
         </div>
        
        </div>
        <div>
            <index.Typography className="text-xs">{activity}</index.Typography>
         </div>
     </div>
    </index.Card>
    </div>
    </>
  )
}
