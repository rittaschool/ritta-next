import { NextRequest, NextFetchEvent, NextResponse } from 'next/server';

// If user goes to / it redirects to /home
export function middleware(req: NextRequest, ev: NextFetchEvent) {
  const url = req.nextUrl.clone();

  if (!(url.pathname == '/')) {
    return NextResponse.next();
  }

  url.pathname = '/home';
  return NextResponse.redirect(url);
}
