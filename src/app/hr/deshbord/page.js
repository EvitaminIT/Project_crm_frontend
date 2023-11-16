"use client"
import Deshbordhead from "./deshbordhead"
import Total from "./total"
import Body from "./body"

export default function page() {
  return (
    <>
    <div className="p-[29px] pt-[3px] pb-0">
     <Deshbordhead/>
     <Total/>
     <br/>
     <Body/>
    </div>
    </>
  )
}
