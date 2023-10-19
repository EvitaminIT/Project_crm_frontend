import index from "@/material_component/client_component"


export default function Speeddiler_taglist({ avt_list }) {
    const img_list=avt_list ? avt_list : []
    const left_img = img_list.length - 5
  return (
     <>
      <index.SpeedDial >
            <index.SpeedDialHandler className={left_img<=0 ? "hidden" :" "}> 
              <index.IconButton size="lg" className="rounded-full bg-[#67B037]">
                {/* <index.PlusIcon className="h-5 w-5 transition-transform group-hover:rotate-45" /> */}
                <index.Typography >+{left_img}</index.Typography>
              </index.IconButton>
            </index.SpeedDialHandler>
            <index.SpeedDialContent className="z-30">
              <index.SpeedDialAction>

            {img_list.slice(5).map((avt)=>{
                return <>
        <index.Avatar
        variant="circular"
        alt="user 5"
        className="border-2 border-white hover:z-10 focus:z-10"
        src={avt.src}
      />
     </>
            })}
  
              </index.SpeedDialAction>
            </index.SpeedDialContent>
          </index.SpeedDial>

     </>
  )
}
