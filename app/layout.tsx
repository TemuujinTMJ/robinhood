import { Play } from "next/font/google";
import Providers from "@/boot/Providers";

const play = Play({
  weight: ["400", "700"],
  subsets: ["latin"],
});

import "./globals.css";
import { AuthProvider } from "@/context/AuthProvider";

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
      <body className="bg-gray-900 text-white min-h-screen">
        <div className={play.className}>
          <Providers>
          <AuthProvider>
            <main>{children}</main>
          </AuthProvider>
          </Providers>
        </div>
      </body>
    </html>
  );
}
