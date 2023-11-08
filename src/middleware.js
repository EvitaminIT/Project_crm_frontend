import { NextResponse } from "next/server";
import { NextRequest } from 'next/server';
import { deleteCookie } from "cookies-next";


export async function middleware(request){ 
  const token=request.cookies.get("token") 
  const tokenErr=request.cookies.get("tokenErr")
 
  if(!token || !token.value || tokenErr){
    deleteCookie('token')
    return NextResponse.redirect(new URL("/",request.url))
  } 
}


export const config={
    matcher:['/adminPanal/:path*']
}