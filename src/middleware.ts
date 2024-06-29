import { handle } from 'hono/vercel'
import { Hono, MiddlewareHandler } from 'hono'
import { NextRequest, NextResponse } from 'next/server'

const app = new Hono()

const authMiddleware: MiddlewareHandler = async (ctx, next) => {
  // cookieでloginTokenを持っているか
  const loginToken = ctx.req
    .header('cookie')
    ?.split(';')
    .find((c) => c.includes('loginToken'))
    ?.split('=')[1]

  if (!loginToken) {
    const req = ctx.req.raw as NextRequest
    const url = req.nextUrl
    url.pathname = '/login'
    return ctx.redirect(url.toString())
  } else {
    return next()
  }
}

app.use('/register', authMiddleware)
app.use('/events', authMiddleware)
app.use('/events/*', authMiddleware)

app.all('*', (ctx) => {
  const req = ctx.req.raw as NextRequest
  return NextResponse.next({
    request: req,
  })
})

export const middleware = handle(app)
