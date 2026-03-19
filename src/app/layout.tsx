import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import SmoothScroll from "@/components/ui/SmoothScroll";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DFC Group | Agencia de Comunicación Estratégica y Marketing en Cali",
  description: "Soluciones integrales en comunicación, marketing, branding y relaciones públicas. Ideas que conectan, resultados que brillan. Cali, Colombia.",
  openGraph: {
    title: "DFC Group | Agencia de Comunicación Estratégica",
    description: "Ideas que conectan, resultados que brillan.",
    url: "https://www.dfcgroup.com.co",
    siteName: "DFC Group",
    images: [
      {
        url: "/logofondonegro.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${plusJakartaSans.variable} ${dmSans.variable} font-body antialiased transition-colors duration-300`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
