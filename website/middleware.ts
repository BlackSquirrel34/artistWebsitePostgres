import { NextResponse, NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  // Get the protocol of the incoming request
  const protocol = req.headers.get('x-forwarded-proto') || req.nextUrl.protocol
  const host = req.headers.get('host')

  // Check if the protocol is HTTP and not running on localhost during production
  if (
    process.env.NODE_ENV === 'production' &&
    protocol !== 'https' &&
    !host?.includes('localhost')
  ) {
    const httpsUrl = new URL(req.nextUrl.href)
    httpsUrl.protocol = 'https'
    // Use the original host
    httpsUrl.host = host || httpsUrl.host

    // Redirect to the HTTPS version
    return NextResponse.redirect(httpsUrl, 308) // 308 Permanent Redirect is generally best practice
  }

  return NextResponse.next()
}
