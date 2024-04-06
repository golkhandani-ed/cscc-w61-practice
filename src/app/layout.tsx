import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Restaurant Menu",
  description: "Restaurant Menu description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <div className="container">
          {children}
        </div>
        <section className="footer">
          <p>@2024 Copy Right CSCC Project</p>
        </section>
      </body>
    </html>
  );
}
