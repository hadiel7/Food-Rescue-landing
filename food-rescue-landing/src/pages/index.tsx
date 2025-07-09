import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SectionInstitutions from '@/components/SectionInstitutions';
import SectionDonations from '@/components/SectionDonations';
import SectionVolunteers from '@/components/SectionVolunteers';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Food Rescue</title>
        <meta name="description" content="Combata o desperdício de alimentos com a Food Rescue" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main className="pt-20">
        <Hero />
        <SectionInstitutions />
        <SectionDonations />
        <SectionVolunteers />
      </main>
      <Footer />
    </>
  );
}
