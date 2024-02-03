import "@/styles/globals.css";

import { Inter } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";
import SideSocialIcons from "./_components/SideSocialIcons";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Program with abu",
  description: "I speak fluent JavaScript",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <TRPCReactProvider>
          <div className="flex flex-row">
            <div>
              <SideSocialIcons />
            </div>
            <div>{children}</div>
          </div>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
