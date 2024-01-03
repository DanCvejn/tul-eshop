
const page = () => {
  return (
    <div className="container min-h-[55%]">
      <h1 className="text-4xl mt-8">Kontakt</h1>
      <div className="grid grid-cols-2">
        <div className="w-full">
          <p className="text-xl mt-2">
            Email:
            <a href="mailto:dan@dcreative.cz" className="text-black text-base">dan@dcreative.cz</a>
          </p>
          <p className="text-xl mt-2">
            Telefon:
            <a href="tel:+420 777 777 777" className="text-black text-base">+420 777 777 777</a>
          </p>
          <p className='text-xl mt-2'>
            Adresa:
            <a href="https://maps.app.goo.gl/bQZYMVXWX2y72uwK8" target="_blank" rel="noopener noreferrer" className="text-black text-base">
              Voroněžská 1329/13, 460 01 Liberec-Staré Město
            </a>
          </p>
        </div>
        <div className="w-full">
          <iframe className="w-full h-[300px] rounded-xl border-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1004.538817600668!2d15.059248820657041!3d50.772428224664544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470936a17ec8f773%3A0x65ff9128a7b20901!2sTechnick%C3%A1%20univerzita%20v%20Liberci%20-%20Budova%20H%20-%20Ekonomick%C3%A1%20fakulta!5e0!3m2!1scs!2scz!4v1704290801952!5m2!1scs!2scz" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  )
}

export default page