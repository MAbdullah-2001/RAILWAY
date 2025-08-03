export default async function handler(req, res) {
  res.status(200).json({
    API_BASE_URL: process.env.API_BASE_URL || "https://api.pakraillive.com",
    FB_SEP_KEY: process.env.FB_SEP_KEY || "separator",
    FB_SEC_KEY: process.env.FB_SEC_KEY || "secret",
    FB_SOCKET_KEY: process.env.FB_SOCKET_KEY || "socket_key",
    FB_SOCKET_VAL: process.env.FB_SOCKET_VAL || "socket_value",
    socketUrl: process.env.SOCKET_URL || (req.headers['x-forwarded-proto'] === 'https' 
      ? "https://train-tracking.abmehar6666.workers.dev" 
      : "http://socket.pakraillive.com:3019")
  });
}
