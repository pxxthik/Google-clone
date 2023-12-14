import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Google Clone Next JS 13",
  description: "Google clone created by Next js 13",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative min-h-screen`}>
        {children}

        {/* footer */}

        <Footer />
      </body>
    </html>
  );
}
