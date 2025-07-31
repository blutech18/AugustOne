import './globals.css';
import type { Metadata } from 'next';
import { Sacramento, Poppins } from 'next/font/google';

const sacramento = Sacramento({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-sacramento'
});

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: 'Bibang Langga',
  description: 'A special interactive experience for the most amazing girlfriend',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sacramento.variable} ${poppins.variable} font-poppins bg-pink-50`}>
        {children}
      </body>
    </html>
  );
}