import Toast from './components/Toast';
import Navbar from './components/Navbar';
import './globals.css';
import Providers from '@/utils/Providers';

export const metadata = {
  title: '버디',
  description:
    '저렴한 OTT 이용 환경 제공을 위해 계정 공유를 통한 구독료 절감을 돕는 멀티 OTT 플랫폼 공동 구독 서비스',
  keywords: ['test'],
  openGraph: {
    title: 'BUDDY, 테스트2',
    description: '테스트 내용',
    url: 'https://buddy-client.vercel.app/',
    siteName: 'BUDDY123',
    images: [
      {
        url: 'https://buddy-client.vercel.app/images/logo.png',
        width: 800,
        height: 600,
        alt: 'BUDDY 로고',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
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
        <meta
          name='google-site-verification'
          content='h8iOeAwOcF2wI8UZ2HQV2IX5r7do7HeeBYOwUEmcmdM'
        />
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
