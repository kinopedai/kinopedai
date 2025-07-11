import './globals.css';
import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import Header from '@/components/Header';
import { Providers } from './providers';

const notoSansJP = Noto_Sans_JP({ 
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-noto-sans-jp',
});

export const metadata: Metadata = {
  title: 'Myきのこ図鑑 - きのこ識別アプリ',
  description: 'AI搭載のきのこ識別アプリ。写真をアップロードしてきのこの種類を特定し、マイ図鑑に保存できます。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={`${notoSansJP.variable} font-sans min-h-screen bg-gradient-to-b from-green-50 to-amber-50 dark:from-gray-900 dark:to-gray-800`}>
        <Providers>
          <Header />
          <main className="container mx-auto px-4 py-6 min-h-[calc(100vh-4rem)]">
            {children}
          </main>
          <footer className="border-t bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm py-6">
            <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
              <p className="mb-2">© 2025 Myきのこ図鑑</p>
              <p className="text-red-500 font-medium">※注意: AIの判定は参考程度に留め、食用判断は必ず専門家に相談してください。</p>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}