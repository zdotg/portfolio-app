import { useEffect } from "react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Zach Gallman SWE Portfolio",
  description: "A personal portfolio using Next.Js, React, and TailwindCSS",
};

export default function RootLayout({ children }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://kit.fontawesome.com/f38f31d1bf.js";
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
