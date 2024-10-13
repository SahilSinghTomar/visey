import type { Metadata } from 'next';
import './globals.css';
import BreakpointIndicator from '@/components/breakpoint-indicator';
import Navbar from '@/components/navigation/navbar';
import BottomBar from '@/components/navigation/bottom-bar';
import Sidebar from '@/components/navigation/sidebar';

export const metadata: Metadata = {
  title: 'Visey',
  description: 'promote your startup and small business and grow more with visey',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-inter antialiased text-base-black`}
      >
        <BreakpointIndicator />
        <div className="flex flex-col min-h-screen w-full pb-24 md:pb-0">
          <Navbar />
          <main className='flex-grow'>
            <Sidebar  />
            <div className='p-4 md:p-6 md:ml-52'>
              <div className='max-w-screen-2xl mx-auto'>
                {children}
              </div>
            </div>
          </main>
          <BottomBar />
        </div>
      </body>
    </html>
  );
}
