export default async function handler(req, res) {
    const { path } = req.query;
    if (!path) {
        return res.status(400).json({ error: 'Path is required' });
    }

    try {
        const apiBase = process.env.API_BASE;
        const url = `${apiBase}${path}${req.url.includes('?') ? req.url.split('?')[1] : ''}`;
        const response = await fetch(url, {
            method: req.method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            return res.status(response.status).json({ error: response.statusText });
        }

        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Proxy request failed' });
    }
}
