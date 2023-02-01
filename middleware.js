const { NextRequest, NextResponse } = require('next/server');

exports.config = {
  matcher: ['/', '/index'],
};

exports.middleware = function (req) {
  const basicAuth = req.headers.get('authorization');
  const url = req.nextUrl;

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1];
    const [user, pwd] = atob(authValue).split(':');

    if (user === process.env.USERNAME && pwd === process.env.PASSWORD) {
      return NextResponse.next();
    }
  }
  url.pathname = '/api/auth';

  return NextResponse.rewrite(url);
};
