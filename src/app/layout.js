import { Inter } from "next/font/google";
import "semantic-ui-css/semantic.min.css";
import "@/scss/global.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AuthProvider, CartProvider } from "@/contexts";

export const metadata = {
  title: "Gaming",
  description: "Gaming favorites the best price",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body suppressHydrationWarning={true}>
        <AuthProvider>
          <CartProvider>{children}</CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
