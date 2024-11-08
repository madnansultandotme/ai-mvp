"use client";
import { useState } from "react";

export default function PromptInput() {
  const [prompt, setPrompt] = useState("");

  const handleChange = (e) => {
    setPrompt(e.target.value);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-1/2 max-w-xl p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-center mb-4">Turn your thoughts into reality</h2>
        <textarea
          className="w-full p-6 border border-gray-300 rounded-md resize-none mb-8"
          rows="8"  // Increased rows for height
          placeholder="Type your thoughts here..."
          value={prompt}
          onChange={handleChange}
        />

        {prompt && (
          <button
            className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-400 transition-all"
            onClick={() => alert(`Generating image for prompt: ${prompt}`)}
          >
            Generate Image
          </button>
        )}
      </div>
    </div>
  );
}
