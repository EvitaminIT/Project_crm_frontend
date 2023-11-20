import { useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


function YourComponent() {
  const [selectedMonth, setSelectedMonth] = useState(null);
  const datePickerRef = useRef(null);

  const handleChange = (date) => {
    setSelectedMonth(date);
    // Additional logic to handle the selected date
  };

  const handleOpenDatePicker = () => {
    if (datePickerRef.current) {
      datePickerRef.current.setOpen(true);
    }
  };

  return (
    <div>
      <button
        className="bg-[#F3F3F3] text-black"
        onClick={handleOpenDatePicker}
      >
        Open DatePicker
      </button>

      <DatePicker
        className="border-solid border-2 border-[#BABABA] rounded-md hidden"
        selected={selectedMonth}
        onChange={handleChange}
        dateFormat="MMMM yyyy"
        showMonthYearPicker
        ref={datePickerRef}
      />
    </div>
  );
}

export default YourComponent;
