// app/components/Navbar.js
"use client";
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-semibold text-blue-400 hover:text-blue-300">
          AI Logo
        </Link>
        
        {/* Links */}
        <div className="flex space-x-6">
          <Link href="/" className="hover:text-blue-300 transition-colors">Home</Link>
          <Link href="/about" className="hover:text-blue-300 transition-colors">About</Link>
          <Link href="/generate" className="hover:text-blue-300 transition-colors">Generate Image</Link>
        </div>

        {/* CTA Button */}
        <Link href="/generate" className="ml-6 bg-blue-500 px-4 py-2 rounded-md text-white hover:bg-blue-400 transition-all">
          Try Now
        </Link>
      </div>
    </nav>
  );
}
