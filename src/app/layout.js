import SpaceMono from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Focus Radio",
  description: "24 Hour Boom Bap Focus Beats",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <GoogleTagManager gtmId="G-9WX4Z085HD" />
      
        
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
