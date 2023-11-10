import { NextResponse } from "next/server";
import { NextRequest } from 'next/server';
import { deleteCookie } from "cookies-next";


export async function middleware(request){ 
  const token=request.cookies.get("token") 
  const tokenErr=request.cookies.get("tokenErr")
 
  if(!token || !token.value || tokenErr){
    deleteCookie('token')
    // if (request.nextUrl.pathname.startsWith('/adminPanal')) {
    return NextResponse.redirect(new URL("/",request.url))
    // }
    // if (request.nextUrl.pathname.startsWith('/dashboard')) {

    // }
  } 
}


export const config={
    matcher:['/adminPanal/:path*']
}