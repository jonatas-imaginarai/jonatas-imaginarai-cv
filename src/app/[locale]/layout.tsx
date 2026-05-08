import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Plus_Jakarta_Sans as Sans, Geist_Mono as Mono } from "next/font/google";
import "@/styles/globals.css";

const sans = Sans({
  subsets: ["latin"],
  variable: "--font-satoshi",
  display: "swap",
});

const mono = Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${sans.variable} ${mono.variable}`}>
      <body className="antialiased tracking-tight">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
