import { geistMono, geistSans } from "@/modules/config/fonts";
import { routing } from "@/modules/translations/i18n/routing";
import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { ReactNode } from "react";
import { Toaster } from "sonner";
import { Providers } from "@/modules/common/components/Providers";
import "../../styles/global.css";

export const metadata: Metadata = {
  title: "Cryptolab",
  description: "Cryptolab Academy",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const locale = (await params).locale;

  if (!routing.locales.includes(locale as "en" | "es")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark text-foreground bg-gradient-to-b from-background to-background/95`}
      >
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <Toaster richColors />
            {children}
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
