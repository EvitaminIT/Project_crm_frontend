import React, { useState } from 'react';
import index from '@/material_component/client_component';
import { task_data,displayWeeks,get_date_between,removeYearFromDate,convertDateFormat,test_task, get_date_from_string2,get_date_from_string } from './SSRcomponent';
import { PopoverWithDescription } from './popover';
import Day from './day';

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const dayNames = [
  "yesterday",
  "today",
  "tomorrow",
];

const DatePickerComponent = () => {
  const [count, setCount] = useState(1);
  const [openPopover, setOpenPopover] = React.useState(false);
 

  
  const triggers = {
    onMouseEnter: () => setOpenPopover(true),
    onMouseLeave: () => setOpenPopover(false),
  };
  function getMonthNumber(monthName) {

    const index = monthNames.findIndex(
      (name) => name.toLowerCase() === monthName.toLowerCase()
    );
  
    if (index !== -1) {
      return index + 1; 
    } else {
      return null; 
    }
  }


  const handleDayIncrement = () => {
    setCurrentDayIndex((prevIndex) => (prevIndex + 1) % dayNames.length);
  };

  const handleDayDecrement = () => {
    setCurrentDayIndex((prevIndex) =>
      prevIndex === 0 ? dayNames.length - 1 : prevIndex - 1
    );
  };
  

  const handleIncrement = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % monthNames.length);
  };

  const handleDecrement = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? monthNames.length - 1 : prevIndex - 1
    );
  };
    
  
  const [selectedMonth_year, setSelectedMonth_Year] = useState();
  const [activeTab, setActiveTab] = React.useState("month");
  const yearList = [];
  const startYear = 2001;


  const [selectyear, setSelectYear] = useState();


  const getvalue =(e)=>{   
    setSelectedMonth_Year({ ...selectedMonth_year, [e.target.name]: e.target.value })
  }

  const getyearvalue = e =>{
     setSelectYear(e.target.value)
  }

  const currDate = new Date();
  const currYear = currDate.getFullYear();
  const currMonth = currDate.getMonth() + 1;

  const [currentDayIndex, setCurrentDayIndex] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(currMonth-1);
  let selcted_month = monthNames[currentIndex]
  let selcted_day=dayNames[currentDayIndex]

  let selectedYear =  currYear;
  let selectedMonth = getMonthNumber(selcted_month)

  for (let year = currYear; year >= startYear; year--) {
    yearList.push(year);
  }
  

  function getMonthName(year, month) {
    const selectedDate = new Date(year, month - 1, 1);
    return selectedDate.toLocaleString('default', { month: 'long' });
  }

  // function getDayName(year, month, day) {
  //   const selectedDate = new Date(year, month - 1, day);
  //   return selectedDate.toLocaleDateString('en-US', { weekday: 'long' });
  // }

  function getDayCount(year, month) {
    return 32 - new Date(year, month - 1, 32).getDate();
  }
  

  function getDaysArray(customYear, customMonth) {
    let emptyFieldsCount = 0;
    let emptyFields = [];
    let days = [];
  
    // Calculate the first day of the custom month and year
    const firstDayOfWeek = new Date(customYear, customMonth - 1, 1).getDay();
  
    switch (firstDayOfWeek) {
      case 2: // Tuesday
        emptyFieldsCount = 1;
        break;
      case 3: // Wednesday
        emptyFieldsCount = 2;
        break;
      case 4: // Thursday
        emptyFieldsCount = 3;
        break;
      case 5: // Friday
        emptyFieldsCount = 4;
        break;
      case 6: // Saturday
        emptyFieldsCount = 5;
        break;
      case 0: // Sunday
        emptyFieldsCount = 6;
        break;
    }
  
    emptyFields = Array(emptyFieldsCount).fill('');
    const selectedMonthDays = new Date(customYear, customMonth, 0).getDate(); // Number of days in the custom month
    days = Array.from({ length: selectedMonthDays }, (_, i) => i + 1); // Create an array of days from 1 to selectedMonthDays
  
    return emptyFields.concat(days);
  }


  console.log(getDaysArray(2023,9),"test")

  function renderDOM(year, month) {
    // Your rendering logic here
  }

  function goToNextMonth() {
    selectedMonth++;
    if (selectedMonth === 13) {
      selectedMonth = 0;
      selectedYear++;
    }
    selectedMonthDays = getDayCount(selectedYear, selectedMonth);
    selectedMonthName = getMonthName(selectedYear, selectedMonth);

    renderDOM(selectedYear, selectedMonth);
  }

  function goToCurrDate() {
    selectedYear = currYear;
    selectedMonth = currMonth;

    selectedMonthDays = getDayCount(selectedYear, selectedMonth);
    selectedMonthName = getMonthName(selectedYear, selectedMonth);
    // console.log(selectedMonthName,"tst anme")
    
    renderDOM(selectedYear, selectedMonth);
  }


  function getDayName(dateString) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
    // Create a Date object from the dateString
    const date = new Date(dateString);
  
    // Use getDay() to get the day of the week (0 for Sunday, 1 for Monday, and so on)
    const dayOfWeekIndex = date.getDay();
  
    // Use the index to retrieve the corresponding day name from the array
    const dayName = daysOfWeek[dayOfWeekIndex];
  
    return dayName;
  }

// console.log(typeof(getDayName('2023-9-1')),"ttttt")
// console.log(selectedYear)
  let short_month=""
  if(selcted_month==="January"){
    short_month="Jan"
  } else if(selcted_month==="February"){
    short_month="Feb"
  } else if(selcted_month==="March"){
    short_month="Mar"
  } else if(selcted_month==="April"){
    short_month="Apr"
  } else if(selcted_month==="May"){
    short_month="May"
  } else if(selcted_month==="June"){
    short_month="Jub"
  } else if(selcted_month==="July"){
    short_month="Jul"
  } else if(selcted_month==="August"){
    short_month="Aug"
  } else if(selcted_month==="September"){
    short_month="Sep"
  } else if(selcted_month==="October"){
    short_month="Oct"
  } else if(selcted_month==="November"){
    short_month="Nov"
  } else if(selcted_month==="December"){
    short_month="Dec"
  }


  const chk_badgis=(custom_date)=>{ 
 
  // const date1 = new Date(date);
  // console.log(date1);

  const date = new Date(custom_date);

  const dateString = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

for (const data of task_data) {
  // console.log(data);
  const tasksWithStartingDate = task_data.filter((task) => task.task_starting_date === dateString);

// Calculate the number of tasks with task_starting_date "2023-10-07"
const numberOfTasks = tasksWithStartingDate.length;

// console.log(`Number of tasks with task_starting_date "2023-10-07" is: ${numberOfTasks}`);
return numberOfTasks;
}
  }


  // console.log(displayWeeks(),"wekkkk")
  
  const handleIncrement_of_week = () => {
    if (count < (displayWeeks()).length) {
      setCount(count + 1);
    }
  };

  const handleDecrement_of_week = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const selcted_week=displayWeeks()[count-1] 
  // console.log(currDate,"current date")

const TABLE_ROWS = [
    {
      date: get_date_between(selcted_week[0],selcted_week[1])[0],
    },
    {
      date: get_date_between(selcted_week[0],selcted_week[1])[1],
    },
    {
      date: get_date_between(selcted_week[0],selcted_week[1])[2],
    },
    {
      date: get_date_between(selcted_week[0],selcted_week[1])[3],
    },
    {
      date: get_date_between(selcted_week[0],selcted_week[1])[4],
    },
    {
      date: get_date_between(selcted_week[0],selcted_week[1])[5],
    },
    {
      date: get_date_between(selcted_week[0],selcted_week[1])[6],
    },
  ];



  let display_title = short_month
  if(activeTab==="week"){
    display_title=`Week ${count}`
  }else if(activeTab=="day"){
     display_title=selcted_day
  }
 

  const data = [
    {
      label: "Month",
      value: "month",
      desc:  <div className="w-auto relative bg-white rounded-lg">
      <div className="grid grid-cols-7 gap-0 mt-2">
        {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((cellText, index) =>
        {
         return (
          <>
          <div key={index} className= { cellText==="SUN" ? "cell cell--unselectable text-center text-[#ff2020] border-solid border-2 border-[#F4F4F4]" :"cell cell--unselectable text-center border-solid border-2 border-[#F4F4F4]"}>
            {cellText}
          </div>
          </>
        )
        })}

        {getDaysArray(selectedYear,selectedMonth).map((cellText) => { 
          return(
            <>
              <div className='border-solid border-2 border-[#F4F4F4] flex justify-center'>
              <div className={`cell ${cellText === '' ? 'cell--unselectable invisible' : 'w-[65%] p-[6px] shadow-none bg-transparent'} ${getDayName(`${selectedYear}-${selectedMonth}-${cellText}`)==="Sunday" ? "text-[#ff2020] flex justify-center":"flex justify-center"}`}>
              {/* <index.Typography>Task</index.Typography> */}
              <index.Badge className={chk_badgis(`${selectedYear}-${selectedMonth}-${cellText}`) === 0 ? "cell--unselectable invisible":'min-w-[15px] min-h-[11px] text-[0.65rem] p-0'}
              color='green' 
              content={chk_badgis(`${selectedYear}-${selectedMonth}-${cellText}`)}>
                <div className='p-1'>
              {cellText}
              </div>
              </index.Badge>
          </div>
          </div>
          {/* <div className='text-center border-solid border-2 border-[#F4F4F4] ...'><index.Button className={`cell ${cellText === '' ? 'cell--unselectable invisible' : 'w-[65%] p-[12px] shadow-none rounded-full ... bg-transparent text-black focus:bg-[#67B037] active:bg-[#67B037] hover:bg-[#67B037] '} ${getDayName(`${selectedYear}-${selectedMonth}-${cellText}`)==="Sunday" ? "text-[#ff2020]":""}`}>
            {cellText}
          </index.Button></div> */}
          </>
        )
        })}

      </div>

    </div>,
    },
    {
      label: "Week",
      value: "week",
      desc:<div className='h-[52vh]'> 
         <index.Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <tbody>
          {TABLE_ROWS.map(({ date, tasks }) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={date}>
                <td className={`${classes} w-28`}>
                  <index.Typography variant="small" color="blue-gray" className="font-normal">
                    {removeYearFromDate(date)}
                  </index.Typography>
                </td>
                <td className={`${classes} bg-blue-gray-50/50`}>
                  <div className='grid grid-cols-6 gap-4'>
                 {test_task.map((task_dit)=>{                  
                   return(
                    <>
                  <PopoverWithDescription selected_date={convertDateFormat(date)} comparision_date={task_dit.task_date} title={task_dit.task_title} to={task_dit.to} language={task_dit.laguage} task_description={task_dit.task_discription}/>
                  </>
                   )
                  })}               
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </index.Card>
      </div>, 
    },
    {
      label: "Day",
      value: "day",
      desc:<Day task={test_task} current_date={currDate} current_month={currMonth} selcted_month={selcted_month}/>,
    },
  ]
  
  return (
    <div className="border-2 border-[#BABABA] rounded-lg h-full">
      <div className='grid grid-cols-2 gap-4 p-4 pb-1'>
        <index.Typography>Calender</index.Typography>
        <div className="relative text-gray-600">
      <index.Input
        type="search"
        name="search"
        placeholder="Search..."
        className="bg-white h-[2.1rem] px-5 pr-10 text-sm border-2 border-[#BABABA] focus:outline-none !border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 h-[33px]"
        labelProps={{
          className: "hidden",
        }}
        containerProps={{ className: "" }}
      />
      <button type="submit" className="absolute right-0 top-0">
        <div className="p-[8px] text-[#67b037] flex justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 fill-current"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M14.293 13.293a1 1 0 01-1.414 1.414l-3.147-3.146a6 6 0 111.414-1.414l3.146 3.146zM6 10a4 4 0 100-8 4 4 0 000 8z"
          />
        </svg>
        </div>
      </button>
    </div>
      </div>
    <index.Tabs value={activeTab}>
     <div className='grid grid-cols-3 gap-0'>
      <div className='flex items-center px-[16px]'>
     <button onClick={activeTab =="week"? handleDecrement_of_week: activeTab =="day" ? handleDayDecrement:handleDecrement}> <index.ArrowBackIosIcon className='text-lg' /> </button>
      <index.Typography className='text-[#67b037]'>{display_title}</index.Typography>
      <button onClick={activeTab=="week" ? handleIncrement_of_week : activeTab =="day" ? handleDayIncrement :handleIncrement}><index.ArrowForwardIosIcon className='text-lg' /></button>
      </div> 
      <index.Typography className='text-[#67b037] flex items-center'>{selcted_month} {selectedYear}</index.Typography>
      <div className='flex justify-center'>
        <div className='bg-[#67b037] w-fit rounded-md ... '>
      <index.TabsHeader
        className="bg-[#85CA57]"
        indicatorProps={{
          className:
            "bg-[#67B037] shadow-none !text-gray-900",
        }}
      >
        {data.map(({ label, value }) => (
          <index.Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className="text-white"
            disabled={value==="day" && selcted_month!==monthNames[currMonth-1]?"true":""}
          >
            {label}
          </index.Tab>
        ))}
      </index.TabsHeader>
      </div> 
      </div>
      <div className='col-span-3'>
      <index.TabsBody>
        {data.map(({ value, desc }) => (
          <index.TabPanel className='h-[90%] p-0 overflow-auto ...' key={value} value={value}>
            {desc}
          </index.TabPanel>
        ))}
      </index.TabsBody>
      </div>
     </div>
      
    </index.Tabs>
  
    </div>
  );
};

export default DatePickerComponent;
