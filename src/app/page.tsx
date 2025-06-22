import "./globals.css";
import AppShell from "./components/AppShell";
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
  keywords: [
    "Reiki Healing",
    "Reiki Webinar",
    "Spiritual Healing",
    "Energy Healing",
    "Holistic Wellness",
    "Reiki Course",
    "Healing Workshop",
    "Register Reiki",
    "Reiki Certificate",
  ],
  icons: {
    icon: [
      {
        url: "/reiki_logo.jpeg",
        type: "image/jpeg",
        sizes: "any",
      },
    ],
  },
  openGraph: {
    title: "Reiki Healing - Transform Your Life",
    description:
      "Join our Reiki Healing webinar and start your journey towards transformation.",
    url: "https://www.reikihealing.com/",
    siteName: "Reiki Healing",
    images: [
      {
        url: "/reiki_logo.jpeg",
        width: 800,
        height: 600,
        alt: "Reiki Healing Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reiki Healing - Transform Your Life",
    description:
      "Join our Reiki Healing webinar and start your journey towards transformation.",
    images: ["/reiki_logo.jpeg"],
    creator: "@yourtwitterhandle",
  },
  alternates: {
    canonical: "https://www.reikihealing.com/",
  },
  metadataBase: new URL("https://www.reikihealing.com"),
};

export default function HomePage() {
  return <AppShell />;
}
