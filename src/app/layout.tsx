import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/header';
import Footer from '@/components/footer';
<<<<<<< HEAD
import { ThemeProvider } from '@/components/theme-provider';
import BackgroundWrapper from '@/components/canvas/BackgroundWrapper';

export const metadata: Metadata = {
  title: 'Sanchit Pandey | Software Engineer',
  description: 'Portfolio of Sanchit Pandey, Software Engineer (Backend & AI)',
=======

export const metadata: Metadata = {
  title: 'Code Canvas | Sanchit Pandey Portfolio',
  description: 'A portfolio of a software engineer, showcasing projects, skills, and experience.',
>>>>>>> e8c70d90289f57a10c6a5cdf5c181af3f735b960
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<<<<<<< HEAD
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased relative">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <BackgroundWrapper />
          <div className="relative z-10 flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
=======
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster />
>>>>>>> e8c70d90289f57a10c6a5cdf5c181af3f735b960
      </body>
    </html>
  );
}
