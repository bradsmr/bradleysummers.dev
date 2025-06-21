import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Bradley Summers - Software Developer',
  description:
    'Experienced Software Developer with expertise in automation, cloud services, and IT support. Passionate about creating efficient solutions.',
  keywords: [
    'Bradley Summers',
    'Software Developer',
    'Web Developer',
    'Clean Code',
    'Simple Design',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'User Experience',
    'Problem Solving',
    'Effective Solutions',
    'Web Development',
    'Frontend Development',
    'Backend Development',
  ],
  authors: [{ name: 'Bradley Summers' }],
  creator: 'Bradley Summers',
  openGraph: {
    title: 'Bradley Summers - Developer Portfolio',
    description: 'Explore my projects and professional journey in software development.',
    url: 'https://bradleysummers.dev',
    siteName: 'Bradley Summers - Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bradley Summers - Developer Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bradley Summers - Developer',
    description: 'Passionate developer creating simple and effective solutions. Explore my projects and development approach.',
    creator: '@yourusername',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
