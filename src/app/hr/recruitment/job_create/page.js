"use client"
import React from 'react'
import Headder from '../headder'
import Body from './body'


export default function page() {
  return (
    <>
    <div className='p-[29px] pt-[3px] pb-0'>
        <Headder top_name={"Recruitment"} breadCrums_first={"Recruitment"} breadCrums_second={"Create Job"}/>
        <br/>
        <Body/>
    </div>
    </>
  )
}
