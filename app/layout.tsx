import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";

import CommonLayout from "./_layout/CommonLayout";

const Noto_Sans = Noto_Sans_KR({
  weight: ["400", "700"],
  display: "swap",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Next JS v14 Boilerplate",
  description: "Generated by create next app",
  // metadataBase: new URL("https://"),
  openGraph: {
    title: "Next JS v14 Boilerplate",
    description: "Next JS v14 Boilerplate",
    // url: "https://", 이미지
    siteName: "Next JS v14 Boilerplate",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={Noto_Sans.className}>
        <CommonLayout>{children}</CommonLayout>
      </body>
    </html>
  );
}
