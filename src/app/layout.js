import { Menu } from "@/components/menu/Menu";
import "../assets/styles/style.scss";
import { CartProvider } from "@/providers/CartProvider";

export const metadata = {
  title: "FootBase | TUL Eshop",
  description: "TUL Eshop",
}

export default function RootLayout({ children }) {
  return (
    <html lang="cs">
      <body>
          <CartProvider>
            <Menu />
            <div className="container">
              {children}
            </div>
          </CartProvider>
      </body>
    </html>
  )
}
