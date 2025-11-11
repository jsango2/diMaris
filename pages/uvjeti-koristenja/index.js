import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../../components/layout';

export default function TermsOfUse() {
  const { locale } = useRouter();
  const isHR = locale === 'hr';

  const title = isHR ? 'Uvjeti korištenja | Marikomerc' : 'Terms of Use | Marikomerc';
  const desc = isHR
    ? 'Uvjeti korištenja Marikomerc d.o.o. — pravila korištenja web stranice marikomerc.hr.'
    : 'Marikomerc d.o.o. Terms of Use — rules for using the marikomerc.hr website.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name='description' content={desc} />
        <meta name='robots' content='index,follow' />
        <link rel='alternate' hrefLang='hr' href='/hr/uvjeti-koristenja' />
        <link rel='alternate' hrefLang='en' href='/en/uvjeti-koristenja' />
      </Head>

      <article className='legal'>
        <figure className='legal__hero'>
          <img
            src='https://cms.bluvia.hr/wp-content/uploads/2025/08/hero-legal-marikomerc.webp'
            alt={isHR ? 'Ilustracija uvjeta korištenja' : 'Illustration of terms and conditions'}
            loading='lazy'
          />
        </figure>

        <header className='legal__header'>
          <h1 className='legal__title'>{isHR ? 'Uvjeti korištenja' : 'Terms of Use'}</h1>
          <p className='legal__subtitle'>
            {isHR ? 'Uvjeti korištenja – Marikomerc d.o.o.' : 'Terms of Use – Marikomerc d.o.o.'}
          </p>
          <p className='legal__intro'>
            {isHR ? (
              <>
                Korištenjem web stranice <strong>marikomerc.hr</strong> prihvaćate sljedeće uvjete.
              </>
            ) : (
              <>
                By using the <strong>marikomerc.hr</strong> website, you agree to the following terms.
              </>
            )}
          </p>
        </header>

        <div className='legal__content'>
          {isHR ? (
            <>
              <h2>1. Opće odredbe</h2>
              <p>
                Web stranica služi za informiranje o djelatnostima i uslugama Marikomerc d.o.o. Zadržavamo pravo izmjene
                sadržaja i ovih uvjeta u bilo kojem trenutku bez prethodne najave.
              </p>

              <h2>2. Intelektualno vlasništvo</h2>
              <p>
                Sav sadržaj na web stranici (tekstovi, fotografije, logotipi, dokumenti) vlasništvo je Marikomerc d.o.o.
                ili se koristi uz odobrenje trećih strana. Zabranjeno je neovlašteno kopiranje, distribucija ili
                korištenje sadržaja.
              </p>

              <h2>3. Ograničenje odgovornosti</h2>
              <p>
                Marikomerc d.o.o. ne odgovara za eventualne pogreške ili netočnosti u sadržaju, niti za štetu nastalu
                korištenjem stranice ili vanjskih poveznica.
              </p>

              <h2>4. Vanjske poveznice</h2>
              <p>
                Web stranica može sadržavati linkove na druge stranice. Marikomerc d.o.o. ne odgovara za sadržaj ili
                politiku privatnosti tih stranica.
              </p>

              <h2>5. Izmjene uvjeta</h2>
              <p>
                Zadržavamo pravo izmjene Uvjeta korištenja. Sve promjene bit će objavljene na ovoj stranici i stupaju na
                snagu danom objave.
              </p>

              <h2>6. Kontakt</h2>
              <p>
                Za sva pitanja vezana uz uvjete korištenja kontaktirajte nas na{' '}
                <a href='mailto:info@marikomerc.hr'>info@marikomerc.hr</a>.
              </p>
            </>
          ) : (
            <>
              <h2>1. General provisions</h2>
              <p>
                The website is intended to provide information about the activities and services of Marikomerc d.o.o. We
                reserve the right to modify the content and these terms at any time without prior notice.
              </p>

              <h2>2. Intellectual property</h2>
              <p>
                All content on the website (texts, photos, logos, documents) is owned by Marikomerc d.o.o. or used with
                permission from third parties. Unauthorized copying, distribution or use of the content is prohibited.
              </p>

              <h2>3. Limitation of liability</h2>
              <p>
                Marikomerc d.o.o. is not liable for any errors or inaccuracies in the content, nor for any damage
                arising from the use of the website or external links.
              </p>

              <h2>4. External links</h2>
              <p>
                The website may contain links to other websites. Marikomerc d.o.o. is not responsible for the content or
                privacy policies of those websites.
              </p>

              <h2>5. Changes to the Terms</h2>
              <p>
                We reserve the right to amend these Terms of Use. All changes will be published on this page and take
                effect on the date of publication.
              </p>

              <h2>6. Contact</h2>
              <p>
                For any questions regarding the Terms of Use, contact us at{' '}
                <a href='mailto:info@marikomerc.hr'>info@marikomerc.hr</a>.
              </p>
            </>
          )}
        </div>
      </article>
    </Layout>
  );
}
