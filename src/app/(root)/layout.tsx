import SideBar from "@/components/SideBar";
import type { Metadata } from "next";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn ={firstName:'Percy', lastname:'Mugadza'};
  return (
  <main className="flex h-screen w-full font-inter">
    <SideBar user={loggedIn}  />
    {children}
  </main>
  );
}
