import { Play } from "next/font/google";
import Providers from "@/context/Providers";

const play = Play({
  weight: ["400", "700"],
  subsets: ["latin"],
});

import "./globals.css";
import Auth from "./auth";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Robinhood Club</title>
      </head>
      <body className="bg-gray-900 text-white min-h-screen">
        <div className={play.className}>
          <Providers>
            <Auth>
              <div className="min-h-screen flex flex-col justify-between">
                <Navbar />
                <main className="pt-24">{children}</main>
                <Footer />
              </div>
            </Auth>
          </Providers>
        </div>
      </body>
    </html>
  );
}
