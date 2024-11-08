export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { prompt } = req.body;
      // Call DALL-E API with the prompt, example using OpenAI API key
      const response = await fetch(`https://api.openai.com/v1/images`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });
      const data = await response.json();
      res.status(200).json({ imageUrl: data.data[0].url });
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  }
  