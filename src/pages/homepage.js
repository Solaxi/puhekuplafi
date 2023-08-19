import React from 'react'

const HomePage = () => {
  return (
    <main className='bg-white/80 px-8 md:px-20 lg:px-40 pb-1'>
    <section id='home' className='min-h-screen text-center flex flex-col justify-center '>
      <img src='paula2.jpg' alt='' className='mb-5 mt-20 md:mt-5 mx-auto rounded-full w-72 md:w-96' />
      <h1 className='text-3xl md:text-5xl font-medium text-teal-500'>Paula Poutanen</h1>
      <h3 className='text-xl md:text-2xl'>Puheterapeutti</h3>
      <p className='text-md py-5 text-gray-800 md:text-xl'>Tarjoan puheterapiapalveluita Pirkanmaan ja Kanta-Hämeen alueella koti-, päiväkoti- ja koulukäynteinä. Palvelu on suunnattu ensisijaisesti suomenkielisille lapsille, mutta ohjaus ja terapia onnistuvat myös englannin kielellä.</p>
    </section>

    <section id='service' className=''>
      <div className='mt-4 flex flex-col md:flex-row gap-8'>
        <div className='bg-white w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-3'>
          <img src='puheterapia.jpg' className='w-72 rounded-md opacity-90' alt='' />
          <h2 className='text-xl'>Puheterapia</h2>
          <p className='text-gray-500'>Puheterapia on lääkinnällistä kuntoutusta, tavoitteena on ennaltaehkäistä, arvioida sekä kuntouttaa vuorovaikutuksen, puheen ja kielen kehitykseen liittyviä haasteita. </p>
        </div>

        <div className='bg-white w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-3'>
          <img src='puhekupla.jpg' className='w-72 rounded-md opacity-90' alt='' />
          <h2 className='text-xl'>Puhekupla</h2>
          <p className='text-gray-500'>Puhekupla perustettiin 2011, ja siitä lähtien olen toiminut yksityisenä puheterapeuttina työskennellen lähinnä lasten parissa.</p>
        </div>

        <div className='bg-white w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-3'>
          <img src='koulutus.jpg' className='w-72 rounded-md opacity-90' alt='' />
          <h2 className='text-xl'>Koulutus</h2>
          <p className='text-gray-500'>Olen valmistunut Tampereen yliopistosta 2009. Olen toiminut puheterapeuttina Valkeakosken terveyskeskuksessa sekä Akaan terveyskeskuksessa ja sittemmin perhekeskuksessa.</p>
        </div>

      </div>
    </section>

    <section id='honor' className='my-20'>
    <div className='bg-white flex rounded shadow-md flex-col md:flex-row px-2 py-4'>
      <div className='mt-4 pl-4 md:w-3/6'>
        <p className="font-bold my-2">Otan vastaan asiakkaita, joilla on maksusitoumus</p>
        <ul className='list-disc pl-4'>
          <li>KELAsta</li>
          <li>Pirkanmaan sairaanhoitopiiriltä</li>
          <li>Omasta kotikunnasta</li>
          <li>Vakuutusyhtiöstä</li>
        </ul>
      </div>
      <div className='mt-4 pl-4 md:w-3/6'>
        <p className="font-bold my-2">Erityisosaamistani on</p>
        <ul className='list-disc pl-4'>
          <li>kielellisten taitojen kuntoutus</li>
          <li>äännevirheiden kuntoutus</li>
          <li>epäselvän puheen kuntoutus</li>
          <li>vuorovaikutustaitojen kuntoutus</li>
          <li>puhetta tukevan ja korvaavan kommunikaation (aac) ohjaus, erityisesti kuvien käyttö</li>
          <li>kommunikaation tukena (GoTalkNow, kommunikaatiokansiot, toimintataulut)</li>
        </ul>
      </div>
      <div className='mt-4 pl-4 md:w-3/6'>
        <p className="font-bold my-2">Viimeisimmät täydennyskoulutukset</p>
        <ul className='list-disc px-4'>
          <li>It Takes Two To Talk® The Hanen Program® for Parents of Children with Language Delays</li>
          <li>Oral Placement Therapy, OPT 1 ja OPT 2</li>
          <li>Lapsen oikeus osallistua kuntoutumiseensa (LOOK-hanke)</li>
          <li>Lasten syömisen vaikeuksien arviointi ja kuntoutus</li>
          <li>Kipinää ja käytännön ideoita kuvakommunikointiin</li>
          <li>Autismin kirjon vaikeuden puheterapeutin näkökulmasta</li>
          <li>Lapsilähtöinen leikki välineenä puheterapeutin arjessa</li>
        </ul>
      </div>
    </div>
    </section>

    </main>
  )
}

export default HomePage