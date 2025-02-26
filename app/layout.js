"use client";

import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TopNav from "/components/TopNav";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SessionProvider>
          <body>
            <TopNav/>
            <Toaster />
            {children}
          </body>
      </SessionProvider>
    </html>
  );
}
