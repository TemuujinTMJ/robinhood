import { Play } from "next/font/google";
import Providers from "@/context/Providers";

const play = Play({
  weight: ["400", "700"],
  subsets: ["latin"],
});

import "./globals.css";
import Auth from "./auth";

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
              <main>{children}</main>
            </Auth>
          </Providers>
        </div>
      </body>
    </html>
  );
}
