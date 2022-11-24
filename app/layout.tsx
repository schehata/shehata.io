import './globals.css';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import CustomHeader from '../components/CustomHeader';
import CustomFooter from '../components/CustomFooter';
import Head from 'next/head';

export default function RootLayout({children,} : {children: React.ReactNode}) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;700&display=optional" rel="stylesheet" />
        </Head>
        <CustomHeader />
        {children}
        <CustomFooter />
      </body>
    </html>
  );
}
