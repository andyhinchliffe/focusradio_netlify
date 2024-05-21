import SpaceMono from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Background Music",
  description: "Background Music",
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
