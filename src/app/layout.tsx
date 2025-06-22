import "./globals.css";
import AppShell from "@/components/AppShell";
import { Playfair_Display, Manrope, Poppins } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-serif",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-sans",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Reiki Healing - Transform Your Life",
  description:
    "Join our Reiki Healing webinar and start your journey towards transformation.",
  icons: {
    icon: [
      {
        url: "/reiki_logo.jpeg",
        type: "image/jpeg",
        sizes: "any",
        // The following property is not standard, but you can use a circular image file.
        // For a circular favicon, use a circular image or SVG.
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${playfair.variable} ${poppins.variable}`}
    >
      <body className="bg-gradient-to-br from-[#F8F3FF] to-[#EAE2F8] min-h-screen text-[#333333] font-sans">
        <AppShell />
      </body>
    </html>
  );
}
