export default {
  appName: 'My Adonis API',
  appUrl: 'http://localhost:3333',
  environment: process.env.NODE_ENV || 'development',
  logLevel: 'info',
  timezone: 'UTC',
  locale: 'en',
  key: process.env.APP_KEY,
  http: {
    cookie: {
      name: 'adonis-session',
      options: {
        httpOnly: true,
        sameSite: true,
        secure: false,
      },
    },
  },
  session: {
    driver: 'cookie',
  },
  csrf: {
    enabled: true,
  },
}