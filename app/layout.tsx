import { Play } from "next/font/google";

const play = Play({
  weight: ["400", "700"], // Specify the font weights you need
  subsets: ["latin"], // Ensure the correct character subset is used
});

import "./globals.css";

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
          <main className="pt-24">{children}</main>
        </div>
      </body>
    </html>
  );
}
