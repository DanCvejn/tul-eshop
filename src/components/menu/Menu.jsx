import Link from "next/link"
import { CartMenuIcon } from "./CartMenuIcon"
import { MenuOpener } from "./MenuOpener"

const routes = [
  {
    path: "/",
    name: "Domů",
  },
  {
    path: "/produkty",
    name: "Produkty",
  },
  {
    path: "/kontakt",
    name: "Kontakt",
  },
]

export const Menu = () => {
  return (
    <nav className="container menu">
      <Link href="/" className="main-link">
        FootBase
      </Link>
      <ul>
        {routes.map((route) => (
          <li key={route.path}>
            <Link
              href={route.path}
            >
              {route.name}
            </Link>
          </li>
        ))}
        <li>
          <CartMenuIcon />
        </li>
      </ul>
      <MenuOpener />
    </nav>
  )
}
