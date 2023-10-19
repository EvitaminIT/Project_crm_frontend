import index from "@/material_component/client_component"; 

export function SpeedDial_add() {
    return (
      <>
          <index.SpeedDial>
            <index.SpeedDialHandler> 
              <index.IconButton size="lg" className="rounded-full">
                <index.PlusIcon className="h-5 w-5 transition-transform group-hover:rotate-45" />
              </index.IconButton>
            </index.SpeedDialHandler>
            <index.SpeedDialContent className="z-30">
              <index.SpeedDialAction>
                <div className="flex">
                <index.Input labelProps={{
          className: "before:content-none after:content-none",
        }} className="border-none" placeholder="add tag exp: @sagar" />
        <index.Button className="p-3 bg-[#67B037] rounded-r-full">Add</index.Button>
        </div>
              </index.SpeedDialAction>
            </index.SpeedDialContent>
          </index.SpeedDial>

        </>
    );
  }