import SpaceMono from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from '@next/third-parties/google'
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
      <GoogleTagManager gtmId="G-9WX4Z085HD" />
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7586404911891787"
     crossOrigin="anonymous"></Script>
     <meta name="google-adsense-account" content="ca-pub-7586404911891787"></meta>
      
        
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
