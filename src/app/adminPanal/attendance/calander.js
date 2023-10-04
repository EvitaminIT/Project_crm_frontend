import React, { useState } from 'react';
import index from '@/material_component/client_component';

const DatePickerComponent = () => {
  const [selectedMonth_year, setSelectedMonth_Year] = useState();
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

  let selectedYear =  selectyear ?  parseInt(selectyear) : currYear;
  let selectedMonth = selectedMonth_year ? parseInt(selectedMonth_year.Month):currMonth;
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

  return (
    <div className="w-auto relative bg-white p-4 rounded-lg">
      {/* <div className="date-text">
        {getMonthText()}
      </div> */}
      <select className='mr-4 bg-transparent' data-te-select-init data-te-select-clear-button="true" name='Month' onChange={getvalue} value={selectedMonth}>
  <option value='1'>Janaury</option>
    <option value='2'>February</option>
    <option value='3'>March</option>
    <option value='4'>April</option>
    <option value='5'>May</option>
    <option value='6'>June</option>
    <option value='7'>July</option>
    <option value='8'>August</option>
    <option value='9'>September</option>
    <option value='10'>October</option>
    <option value='11'>November</option>
    <option value='12'>December</option>
</select>
<select name='get_year' className='bg-transparent' onChange={getyearvalue}>
  {yearList.map((years)=>{
    return(<>
     <option value={years}>{years}</option>
    </>)
  })}
  
</select>
<index.MoreVertIcon className='float-right text-[#67B037]' />

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

    </div>
  );
};

export default DatePickerComponent;
