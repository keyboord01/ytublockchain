import { Metadata } from "next";
import {
  anton,
  circularWeb,
  general,
  robertMedium,
  robertRegular,
  zentry,
} from "../fonts";
import "./globals.css";
import { LanguageProvider } from "@/contexts/language-context";
import { Analytics } from "@vercel/analytics/react";

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
      className={`${circularWeb.variable} ${general.variable} ${robertMedium.variable} ${robertRegular.variable} ${zentry.variable} ${anton.variable}`}
    >
      <body className="font-general">
        <Analytics />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
