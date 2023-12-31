import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className="container">
      <Link href="/" className="main-link w-fit">
        FootBase
      </Link>
      <div className="grid grid-cols-1 gap-6 md:gap-0 md:grid-cols-3 w-full text-white mt-6">
        <div className="w-full">
          <h3 className="text-3xl">Odkazy</h3>
          <ul className="flex flex-col list-none mt-1">
            <li>
              <Link href="/" className="text-white font-normal block">Domů</Link>
            </li>
            <li>
              <Link href="/produkty" className="text-white font-normal block">Produkty</Link>
            </li>
            <li>
              <Link href="/kontakt" className="text-white font-normal block">Kontakt</Link>
            </li>
          </ul>
        </div>
        <div className="w-full">
          <h3 className="text-3xl">Kontakt</h3>
          <p className="text-xl mt-2">
            Email:
            <a href="mailto:dan@dcreative.cz" className="text-white text-base block">dan@dcreative.cz</a>
          </p>
          <p className="text-xl mt-2">
            Telefon:
            <a href="tel:+420 777 777 777" className="text-white text-base block">+420 777 777 777</a>
          </p>
          <p className='text-xl mt-2'>
            Adresa:
            <a href="https://maps.app.goo.gl/bQZYMVXWX2y72uwK8" target="_blank" rel="noopener noreferrer" className="text-white text-base block">
              Voroněžská 1329/13, 460 01 Liberec-Staré Město
            </a>
          </p>
        </div>
        <div className="w-full">
          <iframe className="w-full h-[300px] rounded-xl border-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1004.538817600668!2d15.059248820657041!3d50.772428224664544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470936a17ec8f773%3A0x65ff9128a7b20901!2sTechnick%C3%A1%20univerzita%20v%20Liberci%20-%20Budova%20H%20-%20Ekonomick%C3%A1%20fakulta!5e0!3m2!1scs!2scz!4v1704290801952!5m2!1scs!2scz" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between mt-4 text-base">
        <p className='text-white'>Copyright {new Date().getFullYear()}</p>
        <p className='text-white flex gap-1'>
          Tento web vznikl jako projekt na předmět PI. Více
          <a href="https://github.com/DanCvejn/tul-eshop" target="_blank" rel="noopener norefferer" className='text-white'>zde.</a>
        </p>
      </div>
    </footer>
  )
}
