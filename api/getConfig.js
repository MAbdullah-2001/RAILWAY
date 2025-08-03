export default async function handler(req, res) {
  res.status(200).json({
    API_BASE_URL: process.env.API_BASE_URL,
    FB_SEP_KEY: process.env.FB_SEP_KEY,
    FB_SEC_KEY: process.env.FB_SEC_KEY,
    FB_SOCKET_KEY: process.env.FB_SOCKET_KEY,
    FB_SOCKET_VAL: process.env.FB_SOCKET_VAL,
    socketUrl: process.env.SOCKET_URL
  });
}
