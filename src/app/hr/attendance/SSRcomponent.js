export const top_data=[
    {
        titles:"Early Leave",
        total:"95",
    },
    {
        titles:"Overtime",
        total:"06",
    },
    {
        titles:"Employee Late",
        total:"06",
    },
]

export const table_data=[
    {
        Date:"2023-11-22",
        name:"Rakesh Jain",
        present:true,

    },
]

export const table_data2=[
    {
        name:"Rakesh Jain",
        attendance:[
         {
          date:"2023-11-22",
          present:true,
         },
         {
            date:"2023-11-20",
            present:false,  
         },
        ]
    }
]



export function getDaysArray(customYear, customMonth) {
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




  export function getMonthName(monthNumber) {
    const date = new Date(2000, monthNumber - 1, 1); // Month is zero-based in JavaScript Date objects
    const monthName = date.toLocaleString('en-US', { month: 'short' });
    return monthName;
  }


  export function getDayName(dateString) {
    const daysOfWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat'];
  
    // Create a Date object from the dateString
    const date = new Date(dateString);
  
    // Use getDay() to get the day of the week (0 for Sunday, 1 for Monday, and so on)
    const dayOfWeekIndex = date.getDay();
  
    // Use the index to retrieve the corresponding day name from the array
    const dayName = daysOfWeek[dayOfWeekIndex];
  
    return dayName;
  }