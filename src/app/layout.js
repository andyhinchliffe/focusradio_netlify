import SpaceMono from "next/font/google";
import "./globals.css";
// import { GoogleTagManager } from '@next/third-parties/google'
import Script from 'next/script'

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Focus Radio",
  description: "24 Hour Boom Bap Focus Beats",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      
      
        
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
        />
      </head>
      <body style={{ fontFamily: "Bebas Neue, sans-serif" }}>
      
        {children}
      </body>
    </html>
  );
}
