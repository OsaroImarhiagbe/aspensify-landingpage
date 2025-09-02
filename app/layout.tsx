import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-spacegrotesk",
  display: 'swap'
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "Aspensify – Smart Budgeting App That Adapts to Your Life",
    template: "%s | Aspensify"
  },
  description:
    "The only budgeting app that adapts to your life circumstances. Whether you're unemployed, expecting a baby, or managing couple finances, Aspensify provides personalized budget insights and eliminates money arguments with transparent financial breakdowns.",
  keywords: [
    "contextual budgeting app",
    "life-aware budgeting",
    "couple finance management",
    "adaptive budget tracker",
    "personal finance app",
    "smart money management",
    "financial planning life changes",
    "budget app for couples",
    "unemployment budgeting",
    "pregnancy financial planning",
    "AI budgeting insights",
    "spending tracker",
    "financial goal setting",
    "money management tool"
  ],
  authors: [{ name: "Emmanuel Imarhiagbe", url: "https://aspensify.com" }],
  creator: "Aspensify",
  publisher: "Aspensify",
  applicationName: "Aspensify",  
  metadataBase: new URL("https://aspensify.com"),
  alternates: {
    canonical: "/",
    languages: {
      'en-US': '/en-US',
      'en': '/en',
    },
  },
  
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  category: "finance",
  classification: "Business & Finance",
  
  openGraph: {
    title: "Aspensify – The Budgeting App That Adapts to Your Life",
    description:
      "Smart budgeting that understands your life circumstances. Get personalized insights for unemployment, pregnancy, relationships, and major life changes. Never argue about money again.",
    url: "https://aspensify.com",
    siteName: "Aspensify",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aspensify budgeting app interface showing contextual financial insights",
        type: "image/png",
      },
      {
        url: "/og-image-square.png",
        width: 1200,
        height: 1200,
        alt: "Aspensify logo and app preview",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
    countryName: "United States",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Aspensify – Budgeting That Adapts to Your Life",
    description:
      "The smart budgeting app for life's big moments. Unemployment, pregnancy, relationships – get personalized financial insights for every situation.",
    images: [
      {
        url: "https://aspensify.com/og-image.png",
        alt: "Aspensify app interface showing contextual budgeting features",
      }
    ],
    creator: "@aspensify",
    site: "@aspensify",
  },
  
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Aspensify",
    startupImage: [
      "/apple-touch-startup-image-768x1004.png",
      "/apple-touch-startup-image-1536x2008.png",
    ],
  },
  
  formatDetection: {
    telephone: false,
  },
  
  other: {
    "msapplication-TileColor": "#000000",
    "theme-color": "#000000",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": "https://aspensify.com/#software",
      name: "Aspensify",
      alternateName: "Aspensify Budget App",
      applicationCategory: "FinanceApplication",
      applicationSubCategory: "BudgetingApp",
      operatingSystem: ["Web", "iOS", "Android"],
      description:
        "Aspensify is an intelligent budgeting app that adapts to your life circumstances, providing personalized financial insights for unemployment, pregnancy, relationships, and major life changes.",
      url: "https://aspensify.com",
      downloadUrl: "https://aspensify.com/download",
      screenshot: "https://aspensify.com/app-screenshot.png",
      softwareVersion: "1.0",
      datePublished: "2024-01-01",
      dateModified: new Date().toISOString().split('T')[0],
      inLanguage: "en-US",
      copyrightHolder: {
        "@type": "Organization",
        "@id": "https://aspensify.com/#organization",
        name: "Aspensify",
      },
      creator: {
        "@type": "Organization",
        "@id": "https://aspensify.com/#organization",
      },
      publisher: {
        "@type": "Organization",
        "@id": "https://aspensify.com/#organization",
      },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        category: "FreeTrial",
        availability: "https://schema.org/InStock",
        validFrom: "2024-01-01",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        ratingCount: "1250",
        bestRating: "5",
        worstRating: "1",
      },
      featureList: [
        "Contextual budgeting based on life circumstances",
        "Couple finance management and splitting tools",
        "Unemployment and career transition budgeting",
        "Pregnancy and family planning financial insights",
        "AI-powered spending analysis",
        "Goal-based savings tracking",
        "Real-time expense monitoring"
      ],
    },
    {
      "@type": "Organization",
      "@id": "https://aspensify.com/#organization",
      name: "Aspensify",
      url: "https://aspensify.com",
      logo: {
        "@type": "ImageObject",
        url: "https://aspensify.com/logo.png",
        width: 300,
        height: 300,
      },
      foundingDate: "2024",
      sameAs: [
        "https://twitter.com/aspensify",
        "https://www.linkedin.com/company/aspensify",
        "https://www.facebook.com/aspensify",
        "https://www.instagram.com/aspensify",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "support@aspensify.com",
        availableLanguage: "English",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://aspensify.com/#website",
      url: "https://aspensify.com",
      name: "Aspensify",
      description: "Smart budgeting app that adapts to your life circumstances",
      publisher: {
        "@id": "https://aspensify.com/#organization",
      },
      inLanguage: "en-US",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://aspensify.com/search?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        {children}
        <Analytics/>
        <SpeedInsights/>
      </body>
    </html>
  );
}