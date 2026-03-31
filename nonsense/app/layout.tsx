import type { Metadata } from "next";
import localFont from "next/font/local"
import { Rubik, Rubik_Bubbles } from "next/font/google";
import "./globals.css";


const fragmentMono = localFont({
  src:"../fonts/FragmentMono-Regular.otf",
  variable:"--font-fragment-mono"
})
const rubik = Rubik({
  variable:"--font-rubik",
  subsets:["latin"],
  weight:["400","500","600","700","800","900"]
})

const rubikBubbles = Rubik_Bubbles({
  variable:"--font-rubik-bubble",
  subsets:["latin"],
  weight:["400"]
})



export const metadata: Metadata = {
  title: "Nonsense",
  description: "Nonsense",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${rubik.variable} ${rubikBubbles.variable} ${fragmentMono.variable}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-black p-[30px]">{children}</body>
    </html>
  );
}
