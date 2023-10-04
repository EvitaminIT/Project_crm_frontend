import { Card, Typography } from "@material-tailwind/react";
import index from "@/material_component/client_component";

const TABLE_HEAD = ["Date", "Check in", "Check out", "Working Hrs.","Deviation Hrs","Late/Early Mark","Status","Shift Time"];
 
const TABLE_ROWS = [
  {
    date: "23/04/18",
    check_in: "00:00 Hrs",
    check_out: "00:00 Hrs",
    Working_hr:"00:01 Hrs",
    deviation_hr:"00:00 Hrs",
    Late_early:"00:00 Hrs",
    shift_time:"00:00 Hrs",
    status:"Present",
  },
  {
    date: "23/04/18",
    check_in: "00:00 Hrs",
    check_out: "00:00 Hrs",
    Working_hr:"00:01 Hrs",
    deviation_hr:"00:00 Hrs",
    Late_early:"00:00 Hrs",
    shift_time:"00:00 Hrs",
    status:"Present",
  },
  {
    date: "23/04/18",
    check_in: "00:00 Hrs",
    check_out: "00:00 Hrs",
    Working_hr:"00:01 Hrs",
    deviation_hr:"00:00 Hrs",
    Late_early:"00:00 Hrs",
    shift_time:"00:00 Hrs",
    status:"Present",
  },
  {
    date: "23/04/18",
    check_in: "00:00 Hrs",
    check_out: "00:00 Hrs",
    Working_hr:"00:01 Hrs",
    deviation_hr:"00:00 Hrs",
    Late_early:"00:00 Hrs",
    shift_time:"00:00 Hrs",
    status:"Present",
  },
  {
    date: "23/04/18",
    check_in: "00:00 Hrs",
    check_out: "00:00 Hrs",
    Working_hr:"00:01 Hrs",
    deviation_hr:"00:00 Hrs",
    Late_early:"00:00 Hrs",
    shift_time:"00:00 Hrs",
    status:"Present",
  },
  {
    date: "23/04/18",
    check_in: "00:00 Hrs",
    check_out: "00:00 Hrs",
    Working_hr:"00:01 Hrs",
    deviation_hr:"00:00 Hrs",
    Late_early:"00:00 Hrs",
    shift_time:"00:00 Hrs",
    status:"Present",
  },
  {
    date: "23/04/18",
    check_in: "00:00 Hrs",
    check_out: "00:00 Hrs",
    Working_hr:"00:01 Hrs",
    deviation_hr:"00:00 Hrs",
    Late_early:"00:00 Hrs",
    shift_time:"00:00 Hrs",
    status:"Present",
  },
];
 
export function DefaultTable() {
  return (
    <Card className="h-full w-full overflow-scroll h-80 ...">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 p-4"
              >
                <Typography
                  variant="paragraph"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70 text-[#67B037] font-poppins font-medium ..."
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="overflow-auto">
          {TABLE_ROWS.map(({ date, check_in, check_out,Working_hr,deviation_hr,Late_early,shift_time,status }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={date}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {date}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {check_in}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {check_out}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {Working_hr}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {deviation_hr}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {Late_early}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="white"
                    className="text-center rounded-md ... font-medium bg-[#67B037]" 
                  >
                    {status}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {shift_time}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}