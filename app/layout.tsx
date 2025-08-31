import type { Metadata } from "next";
import { Inter,Space_Grotesk } from "next/font/google";
import "./globals.css";


const inter = Inter({
  subsets:['latin'],
  variable:'--font-inter',
  display:'swap'
})
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // regular, medium, bold
  variable: "--font-spacegrotesk",
  display:'swap'
});


export const metadata: Metadata = {
  title: "Aspensify – Smart Budgeting & Spending Insights",
  description:
    "Aspensify helps you take control of your money with AI-powered budgeting, spending insights, and financial planning for every life situation.",
  keywords: [
    "Aspensify",
    "budgeting app",
    "AI finance app",
    "smart spending",
    "money management",
    "personal finance",
    "track expenses",
    "financial planning",
    "budget tracker",
    "AI budgeting",
    "spending insights",
    "savings goals"
  ],
  authors: [{ name: "Aspensify" }],
  creator: "Aspensify",
  publisher: "Aspensify",

  viewport: {
    width: "device-width",
    initialScale: 1,
  },

  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],

  metadataBase: new URL("https://aspensify.com"),
  alternates: {
    canonical: "/",
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

  category: "finance",

  openGraph: {
    title: "Aspensify – Smart Budgeting & Spending Insights",
    description:
      "AI-powered budgeting and spending insights designed to help you track expenses, save smarter, and plan for your goals.",
    url: "https://aspensify.com",
    siteName: "Aspensify",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aspensify – Smart Budgeting App Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Aspensify – Smart Budgeting & Spending Insights",
    description:
      "Manage your money with ease. AI-powered budgeting and spending insights that help you save smarter.",
    images: ["https://aspensify.com/og-image.png"],
    creator: "@aspensify",
  },

  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Aspensify",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Aspensify",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web, iOS, Android",
  description:
    "Aspensify is a budgeting and finance app that provides AI-powered insights into your spending, saving, and financial planning.",
  url: "https://aspensify.com",
  creator: {
    "@type": "Organization",
    name: "Aspensify",
  },
  sameAs: [
    "https://twitter.com/aspensify",
    "https://www.linkedin.com/company/aspensify",
  ],
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    category: "FreeTrial",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
