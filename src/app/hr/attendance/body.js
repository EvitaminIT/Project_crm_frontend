import React from 'react'
import index from '@/material_component/client_component'
import { getDaysArray,getDayName } from '../common'
import { top_data,table_data,table_data2 } from './SSRcomponent';


export default function Body({
  year,
  month
}) {
  const TABLE_HEAD = ["Name"];

  const TABLE_HEAD2=getDaysArray(year,month).filter(element => element !== '')

  const sumArray = TABLE_HEAD.concat(TABLE_HEAD2)
 
 

const TABLE_ROWS = [
  {
    name: "John Michael",
    job: "Manager",
    date: "23/04/18",
  },
  {
    name: "Alexa Liras",
    job: "Developer",
    date: "23/04/18",
  },
  {
    name: "Laurent Perrier",
    job: "Executive",
    date: "19/09/17",
  },
  {
    name: "Michael Levi",
    job: "Developer",
    date: "24/12/08",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
  },
];


  return (
    <>
    <div>
    <div className='grid grid-cols-4 gap-4'>
       <index.Card className='border-solid border-2 border-[#BABABA] text-center py-[20px]'>
         <index.Typography className='font-poppins'>Attendance</index.Typography>
         <div className='grid grid-cols-4 gap-4'>
            <div></div>
            <div className='text-[#67B037]'>
                <index.Typography variant='h1'>95</index.Typography>
                <index.Typography>Presents</index.Typography>
            </div>
            <div className='text-[#E55B5B]'>
                <index.Typography variant='h1'>0</index.Typography>
                <index.Typography>Absent</index.Typography>
            </div>
            <div></div>
         </div>
         </index.Card>

      {top_data.map((data)=>{
        return(
            <>
           <index.Card className='border-solid border-2 border-[#BABABA] text-center py-[20px]'>
         <index.Typography className='font-poppins'>{data.titles}</index.Typography>
         <div className=''>
            <div className='text-[#67B037]'>
                <index.Typography variant='h1'>{data.total}</index.Typography>
                <index.Typography>{data.titles}'s</index.Typography>
            </div>
         </div>
       </index.Card>            
            </>
        )
      })}
    </div>
    <br/>
    <div>
    <index.Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {sumArray.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 p-4 text-center"
              >
                <index.Typography
                  variant="small"
                  color="blue-gray"
                  className={getDayName(`${year}-${month}-${head}`)==="Sun" ? "font-normal leading-none opacity-70 !text-[#E55B5B] font-poppins text-lg text-2base": "font-normal leading-none opacity-70 !text-[#67B037] font-poppins text-lg text-2base"}
                >
                  {head}
                </index.Typography>
                {head!="Name" ?
                 <index.Typography className={getDayName(`${year}-${month}-${head}`)==="Sun"? "text-[#E55B5B]":""}>{getDayName(`${year}-${month}-${head}`)}</index.Typography>
                 :""  }
               
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table_data2.map(({ name,attendance }) => {
            const isLast = index === table_data.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={name}>
                <td className={classes}>
                  <index.Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {name}
                  </index.Typography>
                </td>
                
                {TABLE_HEAD2.map((table_date)=>{
                  return(
                    <td className={classes}>
                    <>
                    {attendance.map((attdate)=>{
                      if(`${year}-${month}-${table_date}`=== attdate.date){
                      return(
                        <>
                        {attdate.present? <index.Chip color="green" value="P"/>:<index.Chip color="red" value="A"/>}
                        </>
                      )
                      }
                    })}
                    </>
                    </td>
                  )
                })}



                {/* {TABLE_HEAD2.map((date)=>{
                  return(
                    <>
                {`${year}-${month}-${date}`=== Date ? 
                <td className={classes}>
                  <index.Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                  {date}
                  </index.Typography>
                </td>  
                : <td></td> }
                    </>
                  )
                })} */}

              </tr>
            );
          })}
        </tbody>
      </table>
    </index.Card>
    </div>
    </div>
    </>
  )
}


