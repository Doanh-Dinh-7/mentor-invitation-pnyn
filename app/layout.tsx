import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thư mời mentor | Lập trình Python",
  description: "Created by Doanh Dinh",
  generator: "techtonic.club",
  icons: "/logo.jpg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
@font-face {
  font-family: 'MyFont';
  src: url('/Roboto-Regular.ttf') format('truetype');
}

html {
  font-family: 'MyFont', sans-serif;
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}
