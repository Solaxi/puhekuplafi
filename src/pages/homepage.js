import React from 'react'

const HomePage = () => {

  const ServiceCard = ({title, desc, img}) => 
    <div className='bg-white w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-3 transition ease-in-out hover:scale-105 duration-300'>
      <img src={img} className='w-72 rounded-md opacity-90' alt='' />
      <h2 className='text-xl'>{title}</h2>
      <p className='text-gray-500'>{desc}</p>
    </div>

  const ListCard = ({title, list}) => 
    <div className='mt-4 pl-4 md:w-3/6'>
        <p className="font-bold my-2">{title}</p>
        <ul className='list-disc pl-4'>
          {list.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
    </div>

  return (
    <main className='bg-white/90 px-8 md:px-20 lg:px-40 pb-1 max-w-7xl m-auto shadow-lg'>
    <section id='home' className='min-h-screen text-center flex flex-col justify-center '>
      <img src='paula2.jpg' alt='' className='mb-5 mt-20 md:mt-5 mx-auto rounded-full w-72 md:w-96' />
      <h1 className='text-3xl md:text-5xl font-medium text-teal-500'>Paula Poutanen</h1>
      <h3 className='text-xl md:text-2xl'>Puheterapeutti</h3>
      <p className='text-md py-5 text-gray-800 md:text-xl'>Tarjoan puheterapiapalveluita Pirkanmaan ja Kanta-Hämeen alueella koti-, päiväkoti- ja koulukäynteinä. Palvelu on suunnattu ensisijaisesti suomenkielisille lapsille, mutta ohjaus ja terapia onnistuvat myös englannin kielellä.</p>
    </section>

    <section id='service' className=''>
      <div className='mt-4 flex flex-col md:flex-row gap-8'>
        <ServiceCard 
          title='Puheterapia'
          desc='Puheterapia on lääkinnällistä kuntoutusta, tavoitteena on ennaltaehkäistä, arvioida sekä kuntouttaa vuorovaikutuksen, puheen ja kielen kehitykseen liittyviä haasteita.'
          img='puheterapia.jpg'
        />

        <ServiceCard 
          title='Puhekupla'
          desc='Puhekupla perustettiin 2011, ja siitä lähtien olen toiminut yksityisenä puheterapeuttina työskennellen lähinnä lasten parissa.'
          img='puhekupla.jpg'
        />

        <ServiceCard 
          title='Koulutus'
          desc='Olen valmistunut Tampereen yliopistosta 2009. Olen toiminut puheterapeuttina Valkeakosken terveyskeskuksessa sekä Akaan terveyskeskuksessa ja sittemmin perhekeskuksessa.'
          img='koulutus.jpg'
        />
      </div>
    </section>

    <section id='lists' className='my-20'>
    <div className='bg-white flex rounded shadow-md flex-col md:flex-row px-2 py-4'>
      <ListCard title='Otan vastaan asiakkaita, joilla on maksusitoumus'
        list={[
          'KELAsta', 
          'Pirkanmaan sairaanhoitopiiriltä', 
          'omasta kotikunnasta', 
          'vakuutusyhtiöstä']}
      />
      <ListCard title='Erityisosaamistani on'
        list={[
          'kielellisten taitojen kuntoutus', 
          'äännevirheiden kuntoutus', 
          'epäselvän puheen kuntoutus', 
          'vuorovaikutustaitojen kuntoutus',
          'puhetta tukevan ja korvaavan kommunikaation (aac) ohjaus, erityisesti kuvien käyttö',
          'kommunikaation tukena (GoTalkNow, kommunikaatiokansiot, toimintataulut)']}
      />
      <ListCard title='Viimeisimmät täydennyskoulutukset'
        list={[
          'It Takes Two To Talk® The Hanen Program® for Parents of Children with Language Delays', 
          'Oral Placement Therapy, OPT 1 ja OPT 2', 
          'Lapsen oikeus osallistua kuntoutumiseensa (LOOK-hanke)', 
          'Lasten syömisen vaikeuksien arviointi ja kuntoutus',
          'Kipinää ja käytännön ideoita kuvakommunikointiin',
          'Autismin kirjon vaikeuden puheterapeutin näkökulmasta',
          'Lapsilähtöinen leikki välineenä puheterapeutin arjessa']}
      />
     </div>
    </section>

    </main>
  )
}

export default HomePage