'use client';

import { Suspense, lazy } from 'react';

// Lazy-loaded sections
const Hero = lazy(() => import('@/screens/hero'));
const CoreFeatures = lazy(() => import('@/screens/features'));
const Walkthrough = lazy(() => import('@/screens/walk'));
const CTASection = lazy(() => import('@/screens/cta'));
const FAQSection = lazy(() => import('@/screens/faq'));
const Footer = lazy(() => import('@/screens/footer'));

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
        <Hero />
      </Suspense>

      <Suspense fallback={<div className="flex items-center justify-center py-10">Loading features...</div>}>
        <CoreFeatures />
      </Suspense>

      <Suspense fallback={<div className="flex items-center justify-center py-10">Loading walkthrough...</div>}>
        <Walkthrough />
      </Suspense>

      <Suspense fallback={null}>
        <CTASection />
      </Suspense>

      <Suspense fallback={null}>
        <FAQSection />
      </Suspense>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </main>
  );
}
