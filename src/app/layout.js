import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Zach Gallman SWE Portfolio",
  description: "A personal portfolio using Next.Js, React, and TailwindCSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <script
        src="https://kit.fontawesome.com/f38f31d1bf.js"
        crossorigin="anonymous"
      ></script>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
