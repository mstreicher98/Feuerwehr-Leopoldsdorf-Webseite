import { NextResponse } from 'next/server'
 
export function middleware(request) {
  if (request.nextUrl.pathname === '/admin') {
    return NextResponse.redirect(new URL('/admin/dashboard', request.url))
  }
 
  if (request.nextUrl.pathname === '/auth') {
    return NextResponse.redirect(new URL('/auth/login', request.url))
  }
}