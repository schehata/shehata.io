import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
export { reportWebVitals } from 'next-axiom';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      {/* <Head>
          <link href="https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;700&display=optional" rel="stylesheet" />
        </Head> */}
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
