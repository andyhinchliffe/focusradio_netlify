import SpaceMono from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Focus Radio",
  description: "24 Hour Boom Bap Focus Beats",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-9WX4Z085HD"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-9WX4Z085HD');
        </script>
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
