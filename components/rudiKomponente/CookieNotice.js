import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const LS_KEY = 'cookie_notice_dismissed';

export default function CookieNotice() {
  const { locale = 'hr' } = useRouter();
  const isHR = locale === 'hr';
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const dismissed = window.localStorage.getItem(LS_KEY) === '1';
    setOpen(!dismissed);
  }, []);

  function close() {
    try {
      window.localStorage.setItem(LS_KEY, '1');
    } catch {}
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div className='cookie-notice' role='region' aria-label={isHR ? 'Obavijest o kolačićima' : 'Cookie notice'}>
      <div className='cookie-notice__inner'>
        <p className='cookie-notice__text'>
          {isHR ? 'Ova web-stranica koristi kolačiće. ' : 'This website uses cookies. '}
          <Link href={locale === 'hr' ? '/politika-kolacica' : '/en/politika-kolacica'}>
            <a className='cookie-notice__link'>{isHR ? 'Saznajte više' : 'Learn more'}</a>
          </Link>
        </p>

        <button
          type='button'
          className='cookie-notice__close'
          onClick={close}
          aria-label={isHR ? 'Zatvori obavijest' : 'Dismiss notice'}
        >
          ×
        </button>
      </div>
    </div>
  );
}
