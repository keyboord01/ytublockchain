import { Metadata } from "next";
import {
  circularWeb,
  general,
  robertMedium,
  robertRegular,
  zentry,
} from "../fonts";
import "./globals.css";

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
      className={`${circularWeb.variable} ${general.variable} ${robertMedium.variable} ${robertRegular.variable} ${zentry.variable}`}
    >
      <body className="font-general">{children}</body>
    </html>
  );
}
