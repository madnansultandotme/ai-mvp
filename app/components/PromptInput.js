"use client";
import { useState } from "react";

export default function PromptInput() {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  // Object to store prompts and their virtual associated images
  const promptsAndImages = {
    "boat with sunset view": "/images/sunsetBoat.jpg", // Replace with actual image URLs
    "baby boy sitting on car back": "/images/boySittingOnback.jpg",
    "a boy using virtaul reality": "/images/usingVirtualReality.jpg",
    "a girl surfing in ocean": "/images/girlSurfing.jpg",
  };

  const handleChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleGenerate = () => {
    // Check if the prompt matches any in the object and set the corresponding image
    if (promptsAndImages[prompt.toLowerCase()]) {
      setImageUrl(promptsAndImages[prompt.toLowerCase()]);
    } else {
      setImageUrl(""); // Clear image if prompt doesn't match
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-center mb-4">Turn your thoughts into reality</h2>
        <textarea
          className="w-full p-6 border border-gray-300 rounded-md resize-none mb-8"
          rows="8" // Increased rows for height
          placeholder="Type your thoughts here..."
          value={prompt}
          onChange={handleChange}
        />

        {prompt && (
          <button
            className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-400 transition-all"
            onClick={handleGenerate}
          >
            Generate Image
          </button>
        )}

        {/* Display the image if there is a matching one */}
        {imageUrl && (
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Reality Image:</h3>
            <img src={imageUrl} alt="Generated" className="w-full h-auto rounded-md shadow-lg" />
          </div>
        )}
      </div>
    </div>
  );
}
