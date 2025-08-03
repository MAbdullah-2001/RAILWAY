export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        res.status(200).json({
            FB_SEP_KEY: process.env.FB_SEP_KEY,
            FB_SOCKET_KEY: process.env.FB_SOCKET_KEY,
            FB_SOCKET_VAL: process.env.FB_SOCKET_VAL,
            FB_SEC_KEY: process.env.FB_SEC_KEY,
            socketUrl: process.env.SOCKET_URL,
            fallbackSocketUrl: process.env.FALLBACK_SOCKET_URL,
            apiBase: process.env.API_BASE,
            apiKey: process.env.API_KEY
        });
    } catch (error) {
        res.status(500).json({ error: 'Failed to load configuration' });
    }
}
