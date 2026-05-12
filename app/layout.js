import { ScrollToTop } from "./components/ScrollToTop";
import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Palaiche - Multipurpose Business Agency Html Tailwind CSS Template",
  description:
    "Responsive Multipurpose Business Agency Html Tailwind CSS Template",
  keywords: [
    "Digital Agency",
    "Business",
    "Agency",
    "Modern",
    "Tailwind CSS",
    "multipurpose",
    "clean",
    "HTML Template",
    "Responsive Design",
  ],
  authors: [{ name: "mktemplatewizard", url: "https://mkmonir.vercel.app" }],
  creator: "mktemplatewizard",
  publisher: "mktemplatewizard",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://palaiche-template.vercel.app/"), // Replace with your actual domain
  openGraph: {
    title: "Palaiche - Multipurpose Business Agency Html Tailwind CSS Template",
    description:
      "Responsive multipurpose business agency HTML template built with Tailwind CSS.",
    url: "https://palaiche-template.vercel.app//",
    siteName: "Palaiche",
    images: [
      {
        url: "/assets/images/logo.png", // Ensure this path is correct in your public folder
        width: 1200,
        height: 630,
        alt: "Palaiche Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Palaiche - Multipurpose Business Agency Html Tailwind CSS Template",
    description:
      "Responsive multipurpose business agency HTML template built with Tailwind CSS.",
    images: ["/assets/images/logo.png"],
    creator: "@mktemplatewizard", // Optional: Add actual twitter handle if available
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/assets/images/favicon.ico",
    shortcut: "/assets/images/favicon.ico",
  },
  other: {
    "theme-color": "#33b6ff",
    version: "1.0",
    email: "khanmonir1335@gmail.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={montserrat.className}>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
