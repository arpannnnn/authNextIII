'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import CustomNavbar from "../../components/navbar";
import { authOptions } from "./api/auth/[...nextauth]/route";
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
