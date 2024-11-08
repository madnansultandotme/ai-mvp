// app/layout.js
import './globals.css';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Add meta tags, title, etc., here if needed */}
      </head>
      <body>
        {/* Render the children components here */}
        {children}
      </body>
    </html>
  );
}
