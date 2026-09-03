import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://junseok.vercel.app"),
  title: "김준석 | AI-native Product Owner",
  description:
    "문제 정의부터 제품 출시와 운영 성과까지 연결하는 AI-native Product Owner 김준석입니다.",
  alternates: { canonical: "/", languages: { ko: "/", en: "/en" } },
  openGraph: {
    title: "김준석 | AI-native Product Owner",
    description: "문제 정의부터 제품 출시와 운영 성과까지 연결합니다.",
    url: "https://junseok.vercel.app",
    siteName: "Junseok Kim Portfolio",
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
    <html lang="ko" style={{ colorScheme: "light" }}>
      <head>
        <meta name="color-scheme" content="light" />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "wb1ucwj65s");`,
          }}
        />
      </head>
      <body className="bg-surface text-on-surface">
        {children}
      </body>
    </html>
  );
}
