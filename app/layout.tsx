import { Metadata } from "next";
import {
  anton,
  circularWeb,
  general,
  robertMedium,
  robertRegular,
  zentry,
  clashGroteskRegular,
} from "../fonts";
import "./globals.css";
import { LanguageProvider } from "@/contexts/language-context";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "YTU Blockchain",
  description: "YTU Blockchain's landing page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${circularWeb.variable} ${general.variable} ${robertMedium.variable} ${robertRegular.variable} ${zentry.variable} ${anton.variable} ${clashGroteskRegular.variable} ${zentry.variable}`}
    >
      <body className="font-clash">
        <Analytics />
        <SpeedInsights />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
