import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "SMV-Zimmer buchen · Privater Testbetrieb", description: "Buchungsanfragen und Belegungsplan für das SMV-Zimmer", icons: {icon:"/favicon.svg"}, robots: {index:false,follow:false}, referrer:"no-referrer" };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="de"><body>{children}</body></html>; }
