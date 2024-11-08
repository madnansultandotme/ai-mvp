// app/page.js
import PromptInput from './components/PromptInput';
import Navbar from './components/Navbar';

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <main className="p-4">
        <h1 className="text-2xl font-bold mb-4">Welcome to the AI Image Generator</h1>
        <PromptInput />
      </main>
    </div>
  );
}
