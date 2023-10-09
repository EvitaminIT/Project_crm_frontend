import index from "@/material_component/client_component";
import { usePathname } from 'next/navigation';


const links = [
    {
        title: "Dashboard",
        icon:  <index.CottageOutlinedIcon className="h-10 w-10 p-[9px] group-hover:bg-[#67b037] group-hover:text-white rounded-[8px] group-focus:bg-[#67b037] group-focus:text-white " />,
        navigate: '/adminPanal/deshbord',
    },
    {
        title: "User",
        icon: <index.PermIdentityIcon className="h-10 w-10 p-[9px] group-hover:bg-[#67b037] group-hover:text-white rounded-[8px] group-focus:bg-[#67b037] group-focus:text-white" />,
        navigate: '/adminPanal/user',
    },
    {
      title: "Attendance",
      icon: <index.InventorySharpIcon className="h-10 w-10 p-[9px] group-hover:bg-[#67b037] group-hover:text-white rounded-[8px] group-focus:bg-[#67b037] group-focus:text-white" />,
      navigate: '/adminPanal/attendance',
  },
    {
        title: "Client",
        icon: <index.BusinessCenterOutlinedIcon className="h-10 w-10 p-[9px] group-hover:bg-[#67b037] group-hover:text-white rounded-[8px] group-focus:bg-[#67b037] group-focus:text-white" />,
        navigate: '/adminPanal/client',
    },
  {
      title: "Project",
      icon: <index.Inventory2OutlinedIcon className="h-10 w-10 p-[9px] group-hover:bg-[#67b037] group-hover:text-white rounded-[8px] group-focus:bg-[#67b037] group-focus:text-white" />,
      navigate: '/adminPanal/project',
  },
  {
    title: "Tasks",
    icon: <index.FormatListBulletedIcon className="h-10 w-10 p-[9px] group-hover:bg-[#67b037] group-hover:text-white rounded-[8px] group-focus:bg-[#67b037] group-focus:text-white" />,
    navigate: '/adminPanal/task',
  },
  {
    title: "Timesheet",
    icon: <index.AccessTimeIcon className="h-10 w-10 p-[9px] group-hover:bg-[#67b037] group-hover:text-white rounded-[8px] group-focus:bg-[#67b037] group-focus:text-white" />,
    navigate: '/adminPanal/timesheet',
  },
  {
    title: "Tracker",
    icon: <index.ExploreOutlinedIcon className="h-10 w-10 p-[9px] group-hover:bg-[#67b037] group-hover:text-white rounded-[8px] group-focus:bg-[#67b037] group-focus:text-white" />,
    navigate: '/adminPanal/tracker',
  },

  {
    title: "Invoices",
    icon: <index.EditCalendarOutlinedIcon className="h-10 w-10 p-[9px] group-hover:bg-[#67b037] group-hover:text-white rounded-[8px] group-focus:bg-[#67b037] group-focus:text-white" />,
    navigate: '/adminPanal/invoice',
  },
  {
    title: "Contracts",
    icon:  <index.TextSnippetOutlinedIcon className="h-10 w-10 p-[9px] group-hover:bg-[#67b037] group-hover:text-white rounded-[8px] group-focus:bg-[#67b037] group-focus:text-white" />,
    navigate: '/adminPanal/contract',
},
{
    title: "Calendar",
    icon: <index.CalendarTodayIcon className="h-10 w-10 p-[9px] group-hover:bg-[#67b037] group-hover:text-white rounded-[8px] group-focus:bg-[#67b037] group-focus:text-white" />,
    // navigate: '/doctor/self/appointment',
},
{
    title: "Notes",
    icon: <index.ImportContactsIcon className="h-10 w-10 p-[9px] group-hover:bg-[#67b037] group-hover:text-white rounded-[8px] group-focus:bg-[#67b037] group-focus:text-white" />,
    // navigate: '/doctor/self/patient/list',
},
{
  title: "Messenger",
  icon: <index.TelegramIcon className="h-10 w-10 p-[9px] group-hover:bg-[#67b037] group-hover:text-white rounded-[8px] group-focus:bg-[#67b037] group-focus:text-white" />,
  // navigate: '/doctor/self/patient/list',
},
{
title: "Project Report",
icon: <index.TrendingUpIcon className="h-10 w-10 p-[9px] group-hover:bg-[#67b037] group-hover:text-white rounded-[8px] group-focus:bg-[#67b037] group-focus:text-white" />,
// navigate: '/doctor/self/patient/list',
},
{
title: "Meeting",
icon: <index.VideocamOutlinedIcon className="h-10 w-10 p-[9px] group-hover:bg-[#67b037] group-hover:text-white rounded-[8px] group-focus:bg-[#67b037] group-focus:text-white" />,
// navigate: '/doctor/self/patient/list',
},
{
title: "Setting",
icon: <index.SettingsOutlinedIcon className="h-10 w-10 p-[9px] group-hover:bg-[#67b037] group-hover:text-white rounded-[8px] group-focus:bg-[#67b037] group-focus:text-white" />,
// navigate: '/doctor/self/patient/list',
},
{
title: "Log Out",
icon: <index.LogoutOutlinedIcon className="h-10 w-10 p-[9px] group-hover:bg-[#67b037] group-hover:text-white rounded-[8px] group-focus:bg-[#67b037] group-focus:text-white" />,
// navigate: '/doctor/self/patient/list',
},

]



export default links;