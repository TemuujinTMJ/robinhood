import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

import './globals.css'; 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Robinhood Club</title>
      </head>
      <body className="bg-[#1A2332] text-white">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}