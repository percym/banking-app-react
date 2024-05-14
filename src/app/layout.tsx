import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable:'--font-inter'});

const IbmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ["400","700"],
  variable:'--font-ibm-plex-serif'
});

export const metadata: Metadata = {
  title: "Next banking app ",
  description: "A sample banking app using nextjs",
  icons:{
    icon:'/icons/logo.svg'
  }
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${IbmPlexSerif.variable}`}>{children}</body>
    </html>
  );
}
