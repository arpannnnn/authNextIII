'use client'
import { Inter } from "next/font/google";
import "./globals.css";

import CustomNavbar from "../../components/navbar";

import AuthProvider from "../../components/auth/AuthProvider";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <CustomNavbar />

          {children}
        </AuthProvider>

      </body>

    </html>
  );
}
