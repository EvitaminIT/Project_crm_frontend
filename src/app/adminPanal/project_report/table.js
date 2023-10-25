import { TABLE_H,TABLE_R } from "./SSRcomponet"; 
import index from "@/material_component/client_component";
 
export function DefaultTable() {
  return (
    <index.Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_H.map((head) => (
              <th
                key={head}
                className={head==="Project Name" ? "border-b border-blue-gray-100 p-4" : head==="Project" ? "border-b border-blue-gray-100 p-4" : head==="Due Date" ? "border-b border-blue-gray-100 p-4" : head==="Project Member" ? "border-b border-blue-gray-100 p-4 lg:w-[18%]" : head === "Progress" ? "border-b border-blue-gray-100 p-4" : head === "Poject Status" ? "border-b border-blue-gray-100 p-4": "border-b border-blue-gray-100 p-4"}
              >
                <index.Typography
                  variant="small"
                  className="font-normal leading-none opacity-70 text-[#67B037] font-poppins"
                >
                  {head}
                </index.Typography>
              </th> 
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_R.map(({ project_name,project_date,due_date,project_member,project_status}) => {
            const isLast = index === TABLE_R.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={project_name}>
                <td className={classes}>
                  <index.Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {project_name}
                  </index.Typography>
                </td>
                <td className={classes}>
                  <index.Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {project_date}
                  </index.Typography>
                </td>
                <td className={classes}>
                  <index.Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {due_date}
                  </index.Typography>
                </td>
                <td className={classes}>
                <div className="flex items-center">
                {project_member.map((img_src)=>{
                  return(
                      <>
                      <index.Avatar
                  variant="circular"
                  alt="user 1"
                  size="sm" 
                  className="border-2 border-[#67B037] hover:z-10 focus:z-10"
                  src={img_src}
                />
                      </>
                  )
                })}
                </div>
                </td>
                <td className={classes}>
                <index.Progress value={50} color="green" />
                </td>
                <td className={classes}>
                  <div className="flex justify-center">
                  <index.Chip value={"Ongoing"} className="bg-[#67B037] text-center" />
                  </div>
                </td>
                <td className={`${classes} space-x-4`}>
                 <index.IconButton className="bg-[#67B037]">
                  <index.RemoveRedEyeOutlinedIcon/>
                 </index.IconButton>
                 <index.IconButton className="bg-[#46A5C6]">
                  <index.EditCalendarOutlinedIcon/>
                 </index.IconButton>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </index.Card>
  );
}