import index from "@/material_component/client_component";
import PopoverWithDescription from "./popover";
import { monthNameToNumber,get_month_from_date } from "./SSRcomponent";

export default function Day({
 task,
 current_date,
 selcted_month,
 current_month,
}) {
 
     let tsk=task

     const options = { 
        // year: 'numeric', 
        // month: 'numeric', 
        // day: 'numeric', 
        year: 'numeric', month: '2-digit', day: '2-digit'
        // hour: '2-digit', 
        // minute: '2-digit', 
        // second: '2-digit', 
        // timeZoneName: 'short' 
      };
 
    let converted_date=current_date.toLocaleDateString('en-US', options).replace(/\//g, '-')
    console.log(monthNameToNumber(selcted_month))
      
  return (
    <div>
       <index.Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <tbody>
          {tsk.map(({ time, task_date, task_title,to,laguage,task_discription }) => {
            const isLast = index === tsk.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={time}>
                <td className={classes}>
                  <index.Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {time} 
                  </index.Typography>
                </td>
                <td className={classes}>
                  <PopoverWithDescription title={task_title} to={to} language={laguage} task_description={task_discription}/>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </index.Card>
    </div>
  )
}
