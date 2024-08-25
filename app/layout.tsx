import Toast from './components/Toast';
import Navbar from './components/Navbar';
import './globals.css';
import Providers from '@/utils/Providers';

export const metadata = {
  title: '버디',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/images/logo.png' />
      </head>
      <body className='text-sm'>
        <Providers>
          <Navbar />
          <Toast />
          <main className='w-full mx-auto pt-[3.75rem]'>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
