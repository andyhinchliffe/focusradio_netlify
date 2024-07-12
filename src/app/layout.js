import { Roboto } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Focus Radio",
  description: "Explore top-quality Lo-Fi Boom Bap Beats on our platform. Perfect for studying, relaxing, and creative projects, our collection offers seamless streaming and downloads. Join our community for fresh, unique sounds from top producers.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
      <GoogleAnalytics gaId="G-0QVL7WDX38" />
    </html>
  );
}

