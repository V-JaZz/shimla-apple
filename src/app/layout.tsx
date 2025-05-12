import "./globals.css";
import "@mantine/core/styles.css";
import type { Metadata } from "next";
import { CartProvider } from "@/context/CartContext";
import { MantineProvider } from "@mantine/core";
import { interFont } from "@/config/fonts";
import theme from "@/config/theme";

export const metadata: Metadata = {
  title: "Shimla Apple - Fresh Apples from the Heart of Shimla",
  description:
    "Experience the authentic taste of premium Shimla apples, handpicked from our family-owned orchards and delivered fresh to your doorstep.",
  icons: {
    icon: "/apple-icon.svg",
    shortcut: "/apple-icon.svg",
    apple: "/apple-icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={interFont.className}>
        <MantineProvider
          theme={theme}
          defaultColorScheme="light"
          forceColorScheme="light"
        >
          <CartProvider>
            <main>{children}</main>
          </CartProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
