export const all_task=[
  {
    dead_line:false,
    title:"Older console machines",
    date_and_time:"2023-09-10 12:00:00 to 2023-09-11 20:00:00"
  },
  {
    dead_line:false,
    title:"Older console machines",
    date_and_time:"2023-09-10 12:00:00 to 2023-09-11 20:00:00"
  },
]




export const task_data = [
    {
        task_name:"1",
        task_starting_date:"2023-10-07",
        task_last_date:"2023-10-07",
    },
    {
        task_name:"2",
        task_starting_date:"2023-10-09",
        task_last_date:"2023-10-09",
    },
    {
        task_name:"3",
        task_starting_date:"2023-10-07",
        task_last_date:"2023-10-07",
    },
    {
        task_name:"4",
        task_starting_date:"2023-01-07",
        task_last_date:"2023-09-07",
    },
    {
        task_name:"4",
        task_starting_date:"2023-01-01",
        task_last_date:"2023-09-07",
    },
]


export const test_task=[
  {
    task_date:"2023-10-16",
    time:"10:00 PM",
    task_title:"current Task1",
    task_discription:"@material-tailwind is an easy-to-use components library for Tailwind CSS and Material Design.",
    to:"sorabh",
    laguage:"Word press",
    assigned_by:"Prasang sir"
  },
  {
    task_date:"2023-10-17",
    time:"10:00 PM",
    task_title:"current Task 1",
    task_discription:"@material-tailwind is an easy-to-use components library for Tailwind CSS and Material Design.",
    to:"sorabh",
    laguage:"Word press",
    assigned_by:"Prasang sir"
  },
  {
    task_date:"2023-09-01",
    time:"10:00 PM",
    task_title:"Task1",
    task_discription:"@material-tailwind is an easy-to-use components library for Tailwind CSS and Material Design.",
    to:"sorabh",
    laguage:"Word press",
    assigned_by:"Prasang sir"
  },
  {
    task_date:"2023-10-15",
    time:"10:00 PM",
    task_title:"Task1",
    task_discription:"@material-tailwind is an easy-to-use components library for Tailwind CSS and Material Design.",
    to:"sorabh",
    laguage:"Word press",
    assigned_by:"Prasang sir"
  },
]


export const TABLE_HEAD = ["Name", "Job", "Employed"];
 


export const get_date_from_string=(str_date)=>{
    const dateString = str_date;
    const parts = dateString.split(' '); 
    const dayOfMonth = parseInt(parts[2], 10); 
    


    return dayOfMonth
}


 export const displayWeeks = () => {
    // const [currentDate, setCurrentDate] = useState(new Date());
    
    let currentDate = new Date();

    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    let weekStart = new Date(firstDayOfMonth);
    weekStart.setDate(weekStart.getDate() - weekStart.getDay()); 

    const weeks = [];

    while (weekStart <= lastDayOfMonth) {
      const weekEnd = new Date(weekStart);
      weekEnd.setDate(weekEnd.getDate() + 6);

      weeks.push(`${weekStart.toDateString()} - ${weekEnd.toDateString()}`);
      weekStart.setDate(weekStart.getDate() + 7);
    }
    
    const separatedDateRanges = weeks.map(dateRange => dateRange.split(' - '));

    return separatedDateRanges;
  };

  const updateWeek = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + (direction * 7));
    setCurrentDate(newDate);
  };

 
export const get_date_between=(sdate,edate)=>{

  const startDate = new Date(sdate);
  const endDate = new Date(edate);
  const datesInRange = [];
  
  for (let date = new Date(startDate); date <= endDate; date.setDate(date.getDate() + 1)) {
    datesInRange.push(new Date(date));
  }
  
  // Convert the dates to strings for display
  const dateStrings = datesInRange.map(date => date.toDateString());
  return dateStrings
}
//   const weeks = displayWeeks();



export const get_date_from_string2 = (str_date) => {
  const dateString = str_date;
  const parts = dateString.split(' '); // Split the string by spaces
  const dayOfMonth = parseInt(parts[2], 10); // Parse the day part as an integer

  // Ensure that the day is always two digits long
  const twoDigitDay = dayOfMonth.toString().padStart(2, '0');

  return twoDigitDay;
};



export function removeYearFromDate(dateString) {
  const parts = dateString.split(' '); // Split the string by spaces
  parts.pop(); // Remove the last part, which is the year
  const dateWithoutYear = parts.join(' '); // Join the remaining parts

  return dateWithoutYear;
}


export function convertDateFormat(inputDate) {
  const dateParts = inputDate.split(' ');
  const monthAbbreviation = dateParts[1];
  const day = dateParts[2];
  const year = dateParts[3];

  // Create a mapping of month abbreviations to month numbers
  const monthMap = {
    Jan: '01',
    Feb: '02',
    Mar: '03',
    Apr: '04',
    May: '05',
    Jun: '06',
    Jul: '07',
    Aug: '08',
    Sep: '09',
    Oct: '10',
    Nov: '11',
    Dec: '12',
  };

  // Get the month number using the mapping
  const month = monthMap[monthAbbreviation];

  // Assemble the new date format
  const newDateFormat = `${year}-${month}-${day}`;
  return newDateFormat;
}



export function monthNameToNumber(monthName) {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'
  ];

  // Ensure the input is in title case (e.g., "October" to "october")
  monthName = monthName.charAt(0).toUpperCase() + monthName.slice(1).toLowerCase();

  const monthNumber = months.indexOf(monthName) + 1;

  return monthNumber;
}


export const get_month_from_date = (datestring)=>{
  const date = new Date(datestring);
  
  const monthNumber = date.getMonth() + 1;
  
  return monthNumber
} 




// export function getMonthFromDate(dateString) {

//   const dateParts = dateString.split('-');


//   const date = new Date(parseInt(dateParts[2]), parseInt(dateParts[0]) - 1, parseInt(dateParts[1]));


//   const month = date.getMonth() + 1;

//   return month;
// }


export function getMonthFromDate(dateString) {
  // Create a Date object from the input date string
  const date = new Date(dateString);

  // Get the month (0-11), and add 1 to make it (1-12)
  const month = date.getMonth() + 1;

  return month;
}


export function getDateParts(dateString) {
  const parts = dateString.split('-');
  if (parts.length === 3) {
    const month = parseInt(parts[0], 10);
    const day = parseInt(parts[1], 10);
    const year = parseInt(parts[2], 10);

    return day;
  } else {
    // Handle an invalid date string
    return null;
  }
}




export function formatDate(inputDate) {
  const originalDate = new Date(inputDate);

  const year = originalDate.getUTCFullYear();
  const month = String(originalDate.getUTCMonth() + 1).padStart(2, '0');
  const day = String(originalDate.getUTCDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}


export function incrementDate(originalDate, daysToAdd) {
  const date = new Date(originalDate);
  date.setDate(date.getDate() + daysToAdd);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

export let tab_chk=""

export function chk_tab(title){
  tab_chk=title
}

