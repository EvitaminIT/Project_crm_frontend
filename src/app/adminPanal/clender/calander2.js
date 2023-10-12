"use client"
import React, { useState } from 'react';
import index from '@/material_component/client_component';
// import ArrowButtons from './test';

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


export function ArrowButtons() {
  
  function getMonthNumber(monthName) {

  
    // Find the index of the month name in the array (case-insensitive)
    const index = monthNames.findIndex(
      (name) => name.toLowerCase() === monthName.toLowerCase()
    );
  
    // Return the month number (1-based) or null if not found
    if (index !== -1) {
      return index + 1; // Adding 1 to make it 1-based
    } else {
      return null; // Month name not found
    }
  }

  const [currentIndex, setCurrentIndex] = useState(0);
  DatePickerComponent(getMonthNumber(monthNames[currentIndex]))
  // Step 3: Create functions to handle the click events
  const handleIncrement = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % monthNames.length);
  };

  const handleDecrement = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? monthNames.length - 1 : prevIndex - 1
    );
  };
 
  

  // console.log(getMonthNumber(selcted_month))

  return (
    <div className="flex items-center space-x-4">
      {/* Step 4: Render the backward (left) arrow button */}
      <button
        className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center focus:outline-none"
        onClick={handleDecrement}
      >
        &lt;
      </button>

      {/* Display the current month */}
      <span className="text-xl">{monthNames[currentIndex]}</span>

      {/* Step 4: Render the forward (right) arrow button */}
      <button
        className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center focus:outline-none"
        onClick={handleIncrement}
      >
        &gt;
      </button>
    </div>
  );
}



const DatePickerComponent = (vel) => {
  // function getMonthNumber(monthName) {
  
  //   console.log(vel)
  //   // Find the index of the month name in the array (case-insensitive)
  //   const index = monthNames.findIndex(
  //     (name) => name.toLowerCase() === monthName.toLowerCase()
  //   );
  
  //   // Return the month number (1-based) or null if not found
  //   if (index !== -1) {
  //     return index + 1; // Adding 1 to make it 1-based
  //   } else {
  //     return null; // Month name not found
  //   }
  // }

  const [selectedMonth_year, setSelectedMonth_Year] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);
  // let selcted_month = monthNames[currentIndex]
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

  let selectedYear =  currYear;
  // let selectedMonth = typeof(vel)!=="object" ? getMonthNumber(vel): currMonth
  let selectedMonth = vel
  console.log(selectedMonth,"mon")
  if(vel==1){
  console.log(typeof(vel),"test month")
  }
  // let selectedMonthName = getMonthName(selectedYear, selectedMonth);
  // let selectedMonthDays = getDayCount(selectedYear, selectedMonth);
  
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

    const handleIncrement = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % monthNames.length);
    };
  
    const handleDecrement = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? monthNames.length - 1 : prevIndex - 1
      );
    };
    


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
console.log(getDaysArray(selectedYear,selectedMonth),"tst ary")

  return (
    <div className="w-auto relative bg-white p-4 rounded-lg">
      <ArrowButtons/>
       {/* <div className="flex items-center space-x-4">

      <button
        className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center focus:outline-none"
        onClick={handleDecrement}
      >    
        &lt;
      </button>

      <span className="text-xl">{selcted_month}</span>

      <button
        className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center focus:outline-none"
        onClick={handleIncrement}
      >
        &gt;
      </button>
    </div> */}
    
      <div className="grid grid-cols-7 gap-0.5 mt-2">
        {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((cellText, index) =>
        {
         return (
          <>
          <div key={index} className= { cellText==="SUN" ? "cell cell--unselectable text-center text-[#ff2020]" :"cell cell--unselectable text-center"}>
            {cellText}
          </div>
          </>
        )
        })}

        {getDaysArray(selectedYear,selectedMonth).map((cellText) => { 
          return(
            <>
          <div className='text-center'><index.Button className={`cell ${cellText === '' ? 'cell--unselectable invisible' : 'w-[65%] p-[12px] shadow-none rounded-full ... bg-transparent text-black focus:bg-[#67B037] active:bg-[#67B037] hover:bg-[#67B037] '} ${getDayName(`${selectedYear}-${selectedMonth}-${cellText}`)==="Sunday" ? "text-[#ff2020]":""}`}>
            {cellText}
          </index.Button></div>
          </>
        )
        })}

      </div>
0
    </div>
  );
};

export default DatePickerComponent;
