import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Header from "@/components/Header";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "KRAXEL | Advanced DEX Analytics",
  description: "Real-time DEX analytics and trading insights powered by KRAXEL",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-background py-8">
          <div className="container mx-auto px-4 max-w-7xl">
            <Header />
            <main>{children}</main>
          </div>
        </div>
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
