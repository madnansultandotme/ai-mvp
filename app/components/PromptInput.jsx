import { useState } from 'react';

export default function PromptInput() {
  const [prompt, setPrompt] = useState('');
  const [image, setImage] = useState(null);

  const handleGenerateImage = async () => {
    const response = await fetch('/api/generate-image', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt }),
    });
    const data = await response.json();
    setImage(data.imageUrl);
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Enter prompt"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="border p-2 w-full mb-4"
      />
      <button onClick={handleGenerateImage} className="bg-blue-500 text-white px-4 py-2">
        Generate Image
      </button>
      {image && <img src={image} alt="Generated from prompt" className="mt-4" />}
    </div>
  );
}
