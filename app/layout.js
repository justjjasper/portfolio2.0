import { Geist, Geist_Mono } from "next/font/google";
import Header from './components/Header/Header';
import './globals.css';

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
