import { Koh_Santepheap, Inter } from "next/font/google";
import { hasLocale, Locale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { ThemeProvider } from "@/components/theme-provider";
import { getTranslations } from "next-intl/server";
import { Header } from "@/components/header";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/footer";

const hanuman = Koh_Santepheap({
  weight: ["400", "700", "900"],
  subsets: ["khmer"],
  display: "swap",
  variable: "--font-hanuman",
});

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-inter",
});

export async function generateMetadata(
  props: Omit<LayoutProps<"/[locale]">, "children">
) {
  const { locale } = await props.params;

  const t = await getTranslations({
    locale: locale as Locale,
    namespace: "LocaleLayout",
  });

  return {
    title: t("title"),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={cn(
          "flex min-h-screen flex-col bg-background text-foreground antialiased",
          hanuman.variable,
          inter.variable,
          locale === "km" ? "font-hanuman" : "font-inter"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider locale={locale}>
            <main className="min-h-screen bg-background">
              <Header />
              {children}
              <Footer />
            </main>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
