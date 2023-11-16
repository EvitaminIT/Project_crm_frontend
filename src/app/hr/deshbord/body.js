import index from "@/material_component/client_component"
import { CChart } from '@coreui/react-chartjs';

const TABLE_HEAD = ["Name", "Role", "Experince", "Action"];

const TABLE_HEAD2 = ["Holidays", "Date"];
 
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
];

export default function Body() {
  return (
    <>
    <div className="grid grid-cols-6 gap-4">
    <div className="col-span-2">
    <index.CardHeader floated={false} className={"text-center border-solid border-2 border-[#BABABA] bg-[#F5FFEE] m-0 h-fit "}>
        <div className="flex justify-center p-[18px]">
      <index.Card className={"w-fit h-fit p-[10px] bg-[#67B037] text-[#FFFFFF]"}>
       <index.WorkspacePremiumOutlinedIcon className="text-[5vh]"/>
      </index.Card>
      </div>
      <index.Typography className="text-base ... font-poppins">Total Apprasial Application</index.Typography>
      <index.Typography className="text-[#67B037] lg:text-3xl font-poppins font-semibold">10</index.Typography>
      </index.CardHeader>
   
      <index.Card className="mt-4 border-2 border-[#BABABA]  p-[20px]">
<index.Typography>
Today’s Attendance
 </index.Typography>
 <CChart
  type="doughnut"
  radius="2"
  data={{
    labels: ['VueJs', 'ReactJs', 'AngularJs'],
    datasets: [
      {
        backgroundColor: ['#41B883', '#00D8FF', '#DD1B16'],
        data: [40, 20, 10],
      },
    ],
    hoverOffset: 4
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
        position:'bottom',
        labels: {
          usePointStyle: true,
          padding:40,
          generateLabels: function (chart) {
            const data = chart.data;
            if (data.labels.length && data.datasets.length) {
              return data.labels.map((label, index) => {
                const dataset = data.datasets[0];
                const value = dataset.data[index];
                const total = dataset.data.reduce((acc, current) => acc + current, 0);
                const percentage = ((value / total) * 100).toFixed(2) + '%';

                return {
                  text: `${label} - ${percentage}`,
                  fillStyle: dataset.backgroundColor[index],
                  hidden: isNaN(dataset.data[index]) || dataset.data[index] === 0,
                  index: index,
                };
              });
            }
            return [];
          },
          fontWeight: 'bold',
        }
      }
    },
  }}
  style={{fontWeight:700}}
/>
</index.Card>

      </div>
      <div className="col-span-4 ">
      <index.Card className="border-solid border-2 border-[#BABABA]">
        <div className="px-5 py-4">
        <index.Typography variant="h5" className="">New job Applications</index.Typography>
        <index.Typography className="text-sm">5 New job Applications</index.Typography>
        </div>
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <index.Typography
                  variant="big"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70 font-bold"
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
                  <div className="">
                     <index.IconButton className="mr-2 bg-[#67B037]" size="sm"> <index.RemoveRedEyeOutlinedIcon/> </index.IconButton>
                     <index.IconButton className="mr-2 bg-[#46A5C6]" size="sm"> <index.EditCalendarOutlinedIcon/> </index.IconButton>
                     <index.Button className="bg-[#E55B5B]" size="sm"> Reject </index.Button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </index.Card>
      <br/>
      <div className="grid grid-cols-2 gap-4">
      <index.Card className="border-solid border-2 border-[#BABABA]">
      <div className="px-5 py-4">
        <index.Typography variant="h5" className="">Upcomeing Holidays</index.Typography>
        <index.Typography className="text-sm">3 Upcomeing holidays in months</index.Typography>
        </div>
        <index.Card className="h-full w-full overflow-scroll scrollbar-hide">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD2.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 p-4"
              >
                <index.Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </index.Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ name, job }) => {
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
              </tr>
            );
          })}
        </tbody>
      </table>
    </index.Card>
      </index.Card>
      <index.Card className="border-solid border-2 border-[#BABABA]">
      <div className="px-5 py-4">
        <index.Typography variant="h5" className="">Employees Bond Review</index.Typography>
        <index.Typography className="text-sm">5 Employees bond to be review</index.Typography>
        </div>
        <index.Card className="h-full w-full overflow-scroll scrollbar-hide">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD2.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 p-4"
              >
                <index.Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </index.Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ name, job }) => {
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
              </tr>
            );
          })}
        </tbody>
      </table>
    </index.Card>
      </index.Card>
      </div>
      </div>
    </div>
    </>
  )
}
