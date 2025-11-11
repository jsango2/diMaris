import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../../components/layout';

export default function CookiePolicy() {
  const { locale } = useRouter();
  const isHR = locale === 'hr';

  const title = isHR ? 'Politika kolačića | Marikomerc' : 'Cookie Policy | Marikomerc';
  const desc = isHR
    ? 'Politika kolačića Marikomerc d.o.o. — koje kolačiće koristimo i kako njima upravljati.'
    : 'Marikomerc d.o.o. Cookie Policy — what cookies we use and how you can manage them.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name='description' content={desc} />
        <meta name='robots' content='index,follow' />
        <link rel='alternate' hrefLang='hr' href='/hr/politika-kolacica' />
        <link rel='alternate' hrefLang='en' href='/en/politika-kolacica' />
      </Head>

      <article className='legal'>
        <figure className='legal__hero'>
          <img
            src='https://cms.bluvia.hr/wp-content/uploads/2025/08/hero-legal-marikomerc.webp'
            alt={isHR ? 'Ilustracija kolačića' : 'Cookies illustration'}
            loading='lazy'
          />
        </figure>

        <header className='legal__header'>
          <h1 className='legal__title'>{isHR ? 'Politika kolačića' : 'Cookie Policy'}</h1>
          <p className='legal__subtitle'>
            {isHR ? 'Politika kolačića – Marikomerc d.o.o.' : 'Cookie Policy – Marikomerc d.o.o.'}
          </p>
          <p className='legal__intro'>
            {isHR ? (
              <>
                Ova politika kolačića objašnjava što su kolačići i kako ih koristimo na web stranici{' '}
                <strong>marikomerc.hr</strong>. Korištenjem naše stranice pristajete na upotrebu kolačića opisanu u ovoj
                politici.
              </>
            ) : (
              <>
                This Cookie Policy explains what cookies are and how we use them on <strong>marikomerc.hr</strong>. By
                using our website, you consent to the use of cookies as described in this policy.
              </>
            )}
          </p>
        </header>

        <div className='legal__content'>
          {isHR ? (
            <>
              <h2>Što su kolačići?</h2>
              <p>
                Kolačići su male tekstualne datoteke koje se pohranjuju na vaš uređaj kada posjetite web stranicu.
                Koriste se za pravilno funkcioniranje stranice, analizu prometa i poboljšanje korisničkog iskustva.
              </p>

              <h2>Koje kolačiće koristimo?</h2>
              <p>
                Na stranici koristimo <strong>samo Google Analytics kolačiće</strong> u svrhu praćenja statistike
                posjeta i poboljšanja sadržaja.
              </p>
              <p>Kolačići prikupljaju anonimne informacije kao što su:</p>
              <ul className='legal__list'>
                <li>broj posjeta</li>
                <li>trajanje posjeta</li>
                <li>pregledane stranice</li>
              </ul>

              <h2>Upravljanje kolačićima</h2>
              <p>
                Možete obrisati ili blokirati kolačiće u postavkama preglednika. Imajte na umu da blokiranje kolačića
                može utjecati na prikaz i funkcionalnost stranice.
              </p>

              <h2>Kontakt</h2>
              <p>
                Za pitanja o korištenju kolačića možete nas kontaktirati na{' '}
                <a href='mailto:info@marikomerc.hr'>info@marikomerc.hr</a>.
              </p>
            </>
          ) : (
            <>
              <h2>What are cookies?</h2>
              <p>
                Cookies are small text files stored on your device when you visit a website. They are used to ensure the
                site functions properly, analyze traffic, and improve the user experience.
              </p>

              <h2>Which cookies do we use?</h2>
              <p>
                We use <strong>Google Analytics cookies only</strong> to track visit statistics and improve content.
              </p>
              <p>These cookies collect anonymous information such as:</p>
              <ul className='legal__list'>
                <li>number of visits</li>
                <li>visit duration</li>
                <li>pages viewed</li>
              </ul>

              <h2>Managing cookies</h2>
              <p>
                You can delete or block cookies in your browser settings. Please note that blocking cookies may affect
                how the site is displayed and its functionality.
              </p>

              <h2>Contact</h2>
              <p>
                If you have questions about our use of cookies, contact us at{' '}
                <a href='mailto:info@marikomerc.hr'>info@marikomerc.hr</a>.
              </p>
            </>
          )}
        </div>
      </article>
    </Layout>
  );
}
