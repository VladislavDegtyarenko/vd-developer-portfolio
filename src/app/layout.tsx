// Analytics
import { Analytics } from "@vercel/analytics/react";

// Fonts
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  preload: true,
});

import GlobalStyle from "./GlobalStyle";
import PageWrapper from "@/components/PageWrapper";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackToTopBtn from "@/components/BackToTopBtn";
import Providers from "./Providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <Providers>
          <GlobalStyle />
          <PageWrapper>
            <Header />

            {children}

            <Footer />

            <BackToTopBtn />
          </PageWrapper>
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
