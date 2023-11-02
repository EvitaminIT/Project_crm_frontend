import { NextResponse } from "next/server";
import { useSelector } from "react-redux";
import { tst } from "./app/Routs/Auth_Routs";

export function middleware(request) { 
  // console.log(lode,"work")
  // if(lode==="fulfilled"){
  // return NextResponse.redirect(new URL("/",request.url))
  // }
}

export const config={
    matcher:['/adminPanal/:path*']
}