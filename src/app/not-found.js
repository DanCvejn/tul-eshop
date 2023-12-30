import Link from "next/link"

const Custom404 = () => {
  return (
    <div className="error-page">
      <h2 className="error-type">Chyba 404</h2>
      <p className="text">Tato stránka nebyla nalezena</p>
      <Link href="/">Zpět domů</Link>
    </div>
  )
}

export default Custom404