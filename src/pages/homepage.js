import React from 'react'

const HomePage = () => {
  return (
    <main className='px-8 md:px-20 lg:px-40'>
    <section id='home' className='min-h-screen text-center mt-4 flex flex-col justify-center '>
      <img src='hands.png' alt='' className='mx-auto rounded-full w-56 md:w-96 mb-2' />
      <h1 className='text-3xl md:text-5xl font-medium text-teal-500'>Paula Poutanen</h1>
      <h3 className='text-xl md:text-2xl'>Puheterapeutti</h3>
      <p className='text-md py-5 text-gray-800 md:text-xl'>Tarjoan puheterapiapalveluita Pirkanmaan ja Kanta-Hämeen alueella koti-, päiväkoti- ja koulukäynteinä. Palvelu on suunnattu ensisijaisesti suomenkielisille lapsille, mutta ohjaus ja terapia onnistuvat myös englannin kielellä.</p>
    </section>
{/*
    <section id='service' className=''>
      <h1 className='text-xl font-medium'>Services I Offer</h1>
      <p className='mt-1 text-md'>Olen valmistunut Tampereen yliopistosta 2009. Olen toiminut puheterapeuttina Valkeakosken terveyskeskuksessa sekä Akaan terveyskeskuksessa ja sittemmin perhekeskuksessa.</p>

      <div className='mt-4 flex flex-col md:flex-row gap-8'>
        <div className='w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-1'>
          <img src='hands.png' className='w-48' alt='gambar' />
          <h2 className='text-xl'>Asiakkaaksi?</h2>
          <p className='text-gray-500'>Otan vastaan asiakkaita, joilla on maksusitoumus</p>
          <ul>
            <li>KELAsta</li>
            <li>Pirkanmaan sairaanhoitopiiriltä</li>
            <li>Omasta kotikunnasta</li>
            <li>Vakuutusyhtiöstä</li>
          </ul>
        </div>

        <div className='w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-1'>
          <img src='hands.png' className='w-48' alt='gambar' />
          <h2 className='text-xl'>Cloud & IT Solutions Architect</h2>
          <p className='text-gray-500'>I can help you solve a problem, build a product or grow existing project.</p>
          <p className='text-xl'>Tools I Use</p>
          <ul>
            <li>AWS, Azure, Digital Ocean</li>
            <li>Openstack</li>
            <li>Kubernetes & Docker</li>
          </ul>
        </div>

        <div className='w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-1'>
          <img src='hands.png' className='w-48' alt='gambar' />
          <h2 className='text-xl'>DevOps Architect</h2>
          <p className='text-gray-500'>I can help you solve a problem, build a product or grow existing project.</p>
          <p className='text-xl '>Tools I Use</p>
          <ul>
            <li>Gitlab</li>
            <li>Ansible</li>
            <li></li>
          </ul>
        </div>

      </div>
    </section>
  */}
    <section id='honor' className='mt-10 mb-10'>
    {/*
    <h1 className='text-xl font-medium'>Honors & Rewards</h1>
    <p className='mt-1 text-md'>Here are some of the honor and rewards I have.</p>
    */}
    <div className='flex rounded shadow-md flex-col md:flex-row px-2 py-4'>
      <div className='pl-4 mt-2 md:w-3/6'>
        <p className="font-bold">Otan vastaan asiakkaita, joilla on maksusitoumus</p>
        <ul className='list-disc pl-4'>
          <li>KELAsta</li>
          <li>Pirkanmaan sairaanhoitopiiriltä</li>
          <li>Omasta kotikunnasta</li>
          <li>Vakuutusyhtiöstä</li>
        </ul>
      </div>
      <div className='pl-4 mt-2 md:w-3/6'>
        <p className="font-bold">Erityisosaamistani on</p>
        <ul className='list-disc pl-4'>
          <li>kielellisten taitojen kuntoutus</li>
          <li>äännevirheiden kuntoutus</li>
          <li>epäselvän puheen kuntoutus</li>
          <li>vuorovaikutustaitojen kuntoutus</li>
          <li>puhetta tukevan ja korvaavan kommunikaation (aac) ohjaus, erityisesti kuvien käyttö</li>
          <li>kommunikaation tukena (GoTalkNow, kommunikaatiokansiot, toimintataulut)</li>
        </ul>
      </div>
      <div className='pl-4 mt-2 md:w-3/6'>
        <p className="font-bold">Viimeisimmät täydennyskoulutukset</p>
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