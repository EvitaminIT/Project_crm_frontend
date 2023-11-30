"use client"
import Headder from "../headder"
import { top_data } from "./SSRcomponent"
import Total_pannel from "@/app/common/total_pannel"
import Body from "./body"

export default function Page() {
  return (
    <div className="p-[29px] pt-[3px] pb-0">
        <Headder top_name={"Recruitment"} breadCrums_first={"Recruitment"} breadCrums_second={"Jobs"} />
        <Total_pannel data_list={top_data} />
        <br/>
        <Body/>
    </div>
  )
}
