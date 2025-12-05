export default {
  enabled: true,
  origin: ['http://localhost:3000', 'https://your-allowed-origin.com'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  headers: ['Content-Type', 'Authorization'],
  exposeHeaders: [],
  maxAge: 90,
  credentials: true,
}