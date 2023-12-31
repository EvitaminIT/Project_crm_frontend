import index from "@/material_component/client_component";

const Elements = [
    {
        title: "Dashboard",
        icon:  <index.CottageOutlinedIcon className="!h-10 !w-10 p-[9px] group-hover:bg-[#67b037] group-hover:text-white rounded-[8px] group-focus:bg-[#67b037] group-focus:text-white " />,
        navigate: '/hr/deshbord',
    },
    {
        title: "Attendance",
        icon: <index.InventorySharpIcon className="!h-10 !w-10 p-[9px] group-hover:bg-[#67b037] group-hover:text-white rounded-[8px] group-focus:bg-[#67b037] group-focus:text-white" />,
        navigate: '/hr/attendance',
    },
    {
        title: "Leave",
        icon: <index.WavingHandIcon className="!h-10 !w-10 p-[9px] group-hover:bg-[#67b037] group-hover:text-white rounded-[8px] group-focus:bg-[#67b037] group-focus:text-white" />,
        navigate: '/hr/leave',
    },
    {
        title: "Employee",
        icon: <index.PersonOutlineOutlinedIcon className="!h-10 !w-10 p-[9px] group-hover:bg-[#67b037] group-hover:text-white rounded-[8px] group-focus:bg-[#67b037] group-focus:text-white" />,
        navigate: '/hr/employee',
    },
    {
        title: "Recruitment",
        icon: <index.PersonAddAltOutlinedIcon className="!h-10 !w-10 p-[9px] group-hover:bg-[#67b037] group-hover:text-white rounded-[8px] group-focus:bg-[#67b037] group-focus:text-white" />,
        navigate: '',
        sub_menu:[
            {
                title:"Jobs",
                navigate:"/hr/recruitment/job",
            },
            {
                title:"Job Create",
                navigate:"/hr/recruitment/job_create",
            },
            {
                title:"Job Application",
                navigate:"",
            },
            {
                title:"Job on-boarding",
                navigate:"",
            },
            {
                title:"Interview Schedule",
                navigate:"",
            },
        ]
    },
    {
        title: "Training",
        icon: <index.BoltOutlinedIcon className="!h-10 !w-10 p-[9px] group-hover:bg-[#67b037] group-hover:text-white rounded-[8px] group-focus:bg-[#67b037] group-focus:text-white" />,
        navigate: '/hr/',
    },
    {
        title: "Performence",
        icon: <index.TrendingUpIcon className="!h-10 !w-10 p-[9px] group-hover:bg-[#67b037] group-hover:text-white rounded-[8px] group-focus:bg-[#67b037] group-focus:text-white" />,
        navigate: '/hr/',
    },
    {
        title: "Document",
        icon: <index.TextSnippetOutlinedIcon className="!h-10 !w-10 p-[9px] group-hover:bg-[#67b037] group-hover:text-white rounded-[8px] group-focus:bg-[#67b037] group-focus:text-white" />,
        navigate: '/hr/',
    },
    {
        title: "Company Policy",
        icon: <index.ClassOutlinedIcon className="!h-10 !w-10 p-[9px] group-hover:bg-[#67b037] group-hover:text-white rounded-[8px] group-focus:bg-[#67b037] group-focus:text-white" />,
        navigate: '/hr/company_policy',
    },
    {
        title: "Notes",
        icon: <index.ImportContactsIcon className="!h-10 !w-10 p-[9px] group-hover:bg-[#67b037] group-hover:text-white rounded-[8px] group-focus:bg-[#67b037] group-focus:text-white" />,
        navigate: '/hr/',
    },
    {
        title: "Messenger",
        icon: <index.TelegramIcon className="!h-10 !w-10 p-[9px] group-hover:bg-[#67b037] group-hover:text-white rounded-[8px] group-focus:bg-[#67b037] group-focus:text-white" />,
        navigate: '/hr/',
    },
    {
        title: "Log Out",
        icon: <index.LogoutOutlinedIcon className="!h-10 !w-10 p-[9px] group-hover:bg-[#67b037] group-hover:text-white rounded-[8px] group-focus:bg-[#67b037] group-focus:text-white" />,
        navigate: '/',
    },
]



export default Elements