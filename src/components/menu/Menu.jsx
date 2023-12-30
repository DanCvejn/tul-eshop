import Link from "next/link"
import { CartMenuIcon } from "./CartMenuIcon"

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
    <nav className="container">
      <Link href="/" className="main-link">
        FootBase
      </Link>
      <ul className="flex justify-center space-x-4">
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
    </nav>
  )
}
