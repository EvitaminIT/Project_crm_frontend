"use client"
import index from "@/material_component/client_component"
import { CChart } from '@coreui/react-chartjs';
import ssrData from "./SSRcomponent";



const card_elements=[
  {
    icon:<index.Inventory2OutlinedIcon className="text-[5vh]"/>,
    title:"Total Project",
    Count:10
  },
  {
    icon:<index.FormatListBulletedIcon className="text-[5vh]"/>,
    title:"Total Task",
    Count:10
  },
  {
    icon:<index.PestControlIcon className="text-[5vh]"/>,
    title:"Total Bug",
    Count:10,
    color:true
  },
  {
    icon:<index.GroupsIcon className="text-[5vh]"/>,
    title:"Total User",
    Count:10
  },
]

export default function page() {

  

  return (
    <>
    <div className="grid grid-cols-6 gap-2 rounded-none">
      <div className="grid grid-cols-4 gap-2 col-span-4 ... h-fit">
    { card_elements.map((element)=>{
      return(
      <>     
      <index.CardHeader floated={false} className={element.color? "text-center border-solid border-2 border-[#BABABA] bg-[#FFE5E5] h-fit col-span-1 ..." : "col-span-1 ... h-fit text-center border-solid border-2 border-[#BABABA]"}>
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
     <div className="col-span-4 ... m-[16px] h-full">
      <index.Card className="py-[20px] border-2 border-[#BABABA] h-full">
        <div className="mb-[10px]">
        <index.Typography className="font-poppins text-lg ... px-[20px]">Tasks</index.Typography>
        <index.Typography className="px-[20px] font-poppins">10 task completed out of 39</index.Typography>
        </div>

      { ssrData.task_data.map((data)=> { 
        return(
          <>
      <index.Card className="grid grid-cols-4 gap-0 px-[19px] py-[15px] border-t-2 border-[#BABABA] rounded-none">
        <div>
          <index.Typography className="font-poppins font-extralight text-[#2F3642]">Apps Design</index.Typography>
          <div className="flex">
            <div className="text-sm ... font-poppins"> Due Date: </div> <index.Typography className=" text-sm ... text-[#2F3642]">{data.due_date}</index.Typography>
          </div>
        </div>
        <div className="px-[30px]">
        <index.Typography className="font-poppins font-extralight text-[#2F3642]">Status</index.Typography>
        <index.Chip className="bg-[#67B037] text-center capitalize ..." value={data.status} />
        </div>
        <div className="">
        <index.Typography className="font-poppins font-extralight text-[#2F3642]">Project</index.Typography>
        <index.Typography className="font-poppins">{data.project}</index.Typography>
        </div>
        <div>
        <index.Typography className="font-poppins font-extralight text-[#2F3642]">Assigned to </index.Typography>
        <index.Chip className="bg-[#67B037] text-center capitalize ..." value={data.assigine} />
        </div>
      </index.Card>
      </>
        )
      })}
      </index.Card>

    </div>
    </div>
    <div className="col-span-2 ...">
<index.Card className="mt-4 border-2 border-[#BABABA]  p-[20px]">
  <index.Typography>
    Tasks Overview
  </index.Typography>
    <CChart
  type='line'
  height={4}
  enable-deprecation-messages={false}
  enable-rounded={true}
  data={{
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
      {
        label: '2020',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        pointBackgroundColor: 'rgba(255, 99, 132, 1)',
        pointBorderColor: '#fff',
        tooltipLabelColor: 'rgba(255, 99, 132, 1)',
        data: [28, 48, 40, 19, 96, 27, 100],
        fill: false,
        tension: 0.1,
      }
    ],
  }}  
  options={{
    events: [],
    Tooltip:{
      display:false
    },
    aspectRatio: 2,
    plugins: {
      legend: {
        display: false
      },
      label: {
        display: false
      },
    },
  }}
/>


</index.Card>
 
<index.Card className="mt-4 border-2 border-[#BABABA]  p-[20px]">
<index.Typography>
  Project Status
 </index.Typography>
 <CChart
  type="doughnut"
  height={10}
  data={{
    labels: ['VueJs', 'ReactJs', 'AngularJs'],
    datasets: [
      {
        backgroundColor: ['#41B883', '#00D8FF', '#DD1B16'],
        data: [40, 20, 10],
      },
    ],
  }}
  options={{
    events: [],
    aspectRatio: 1.5,
    plugins: {
      tooltip: {
        // position: 'top',
      },
      legend: {
        // display:false,
        labels: {
          usePointStyle: true
        }
      }
    },
  }}
/>
</index.Card>
    </div>
   
    </div>
   
    </>
  )
}
