"use client"
import { ToastContainer,toast } from "react-toastify";

export default function tost() {
 
  const showtost=()=>{
    toast("wrok")
  }

  // const sessionData = { language: 'en', theme: 'light' };
  // sessionStorage.setItem('sessionSettings', JSON.stringify(sessionData));
  
  // // Retrieving session data
  // const storedSessionSettings = sessionStorage.getItem('sessionSettings');
  // const sessionSettings = storedSessionSettings ? JSON.parse(storedSessionSettings) : null;
  // console.log(sessionSettings);

  return (
    <div>
        {/* <ToastContainer/> */}
        <button onClick={showtost}>Tost</button>
    </div>
  )
}
