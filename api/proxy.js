// api/proxy/[...path].js
export default async function handler(req, res) {
  const { path } = req.query;
  const url = `${process.env.API_BASE_URL}/${path.join('/')}`;
  try {
    const response = await fetch(url, {
      method: req.method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        ...req.headers
      },
      body: req.method !== 'GET' ? JSON.stringify(req.body) : undefined
    });
    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ error: 'Proxy request failed' });
  }
}
