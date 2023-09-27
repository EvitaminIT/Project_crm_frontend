"use client"
import index from "@/material_component/client_component"
import Image from "next/image"
import btnperson from "../../../Images/person_check.svg"
import plus from "../../../Images/plus.svg"

export default function page() {
  return (
    <>
      <div className="h-80 p-[30px]">
        <div className="grid grid-cols-2 gap-2">
        <div className="flex">
        <index.Typography className="text-[#67B037] font-poppins">User</index.Typography>
        <div className="flex">
        <index.Typography className="text-[#67B037] font-poppins">Home <index.ArrowForwardIosIcon className="text-xs" /></index.Typography>
        <index.Typography className="text-[#979BA1]">user</index.Typography>
        </div>   
      </div>
      

       <div className="flex justify-end">
      <index.Button className="bg-[#67B037] p-0 flex items-center justify-center mr-[10px]"> <Image className="max-w-[60%]" src={btnperson}/></index.Button>
      <index.Button className="bg-[#67B037] p-[2px] flex items-center justify-center"> <Image className="max-w-[60%]" src={plus}/></index.Button>
      </div>
      </div>
      {/* cards */}

      <div className="grid grid-cols-3 gap-2">
        <div className="">
      <index.Card className="">
      <div  className="grid grid-cols-3 gap-2">     
      <index.Chip className="bg-[#67B037] capitalize ..."  value="Devloper"/>
      </div>
      <index.CardBody className="text-center">
        <index.Typography variant="h4" color="blue-gray" className="mb-2">
          Natalie Paisley
        </index.Typography>
        <index.Typography color="blue-gray" className="font-medium" textGradient>
          CEO / Co-Founder
        </index.Typography>
      </index.CardBody>
      <index.CardFooter className="flex justify-center gap-7 pt-2">
        <index.Tooltip content="Like">
          <index.Typography
            as="a"
            href="#facebook"
            variant="lead"
            color="blue"
            textGradient
          >
            <i className="fab fa-facebook" />
          </index.Typography>
        </index.Tooltip>
        <index.Tooltip content="Follow">
          <index.Typography
            as="a"
            href="#twitter"
            variant="lead"
            color="light-blue"
            textGradient
          >
            <i className="fab fa-twitter" />
          </index.Typography>
        </index.Tooltip>
        <index.Tooltip content="Follow">
          <index.Typography
            as="a"
            href="#instagram"
            variant="lead"
            color="purple"
            textGradient
          >
            <i className="fab fa-instagram" />
          </index.Typography>
        </index.Tooltip>
      </index.CardFooter>
    </index.Card>
    </div>
      </div>

      </div>
    </>
  )
}
