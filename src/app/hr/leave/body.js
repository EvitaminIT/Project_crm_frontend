import React from 'react'
import index from '@/material_component/client_component';
import { DialogCustomAnimation } from './diloge';

export default function Body() {
    const TABLE_HEAD = ["Employee", "Department", "Date", "Status" , "Actions"];
 
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
    <index.Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 p-4"
              >
                <index.Typography
                  variant="small"
                  color="blue-gray"
                  className="font-poppins leading-none opacity-70 text-[#67B037] font-semibold"
                >
                  {head}
                </index.Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ name, job, date }) => {
            const isLast = index === TABLE_ROWS.length - 1;
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
                <td className={classes}>
                  <index.Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {job}
                  </index.Typography>
                </td>
                <td className={classes}>
                  <index.Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {date}
                  </index.Typography>
                </td>
                <td className={classes}>
                    <div>         
                <index.Chip className='w-fit' color="blue" value="blue" />
                    </div>
                </td>
                <td className={classes}>
                 <DialogCustomAnimation/>
                 <index.IconButton className='mx-2 bg-[#46A5C6]'>
                    <index.EditOutlinedIcon/>
                 </index.IconButton>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </index.Card>
    </div>
    </>
  )
}
