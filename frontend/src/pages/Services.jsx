import { useEffect, useMemo, useState } from 'react';
import LoadingSpinner from '../components/LoadingSpinner.jsx';
import PageHeader from '../components/PageHeader.jsx';
import SearchBar from '../components/SearchBar.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import { useLocale } from '../context/LocaleContext.jsx';
import { usePageTitle } from '../hooks/usePageTitle.js';
import { filterServices } from '../utils/search.js';
import { fetchServices } from '../utils/servicesApi.js';

function RevealedCard({ children }) {
  return <div className="relative z-10 h-full pointer-events-auto">{children}</div>;
}
export default function Services() {
  const { t, translations } = useLocale();
  usePageTitle(t('servicesPage.title'));
  const [query, setQuery] = useState('');
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;

    async function loadServices() {
      setLoading(true);
      setError('');

      try {
        const data = await fetchServices();

        if (active) {
          setServices(data);
        }
      } catch (loadError) {
        if (active) {
          setError(loadError.message || 'Could not load services.');
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadServices();

    return () => {
      active = false;
    };
  }, []);

  const visibleServices = useMemo(() => filterServices(services, translations, query), [query, services, translations]);

  return (
    <>
      <PageHeader title={t('servicesPage.title')} intro={t('servicesPage.intro')} />
      <section className="container-shell pb-12">
        <div className="mx-auto mb-8 max-w-5xl overflow-hidden rounded-md border border-slate-200 bg-white shadow-soft dark:border-slate-800 dark:bg-slate-900">
          <img
            src="/images/amarsheba-services.png"
            alt="AmarSheba government services categories"
            className="max-h-[300px] w-full object-contain"
            loading="lazy"
          />
        </div>

        <div className="mb-6 max-w-2xl">
          <SearchBar value={query} onChange={setQuery} />
        </div>

        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <p className="rounded-md border border-red-200 bg-red-50 p-5 text-red-700 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-100">
            {error}
          </p>
        ) : visibleServices.length > 0 ? (
          <div className="grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visibleServices.map((service, index) => (
              <RevealedCard key={service.id} index={index}>
                <ServiceCard service={service} />
              </RevealedCard>
            ))}
          </div>
        ) : (
          <p className="rounded-md border border-slate-200 bg-white p-5 text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
            {t('common.noResults')}
          </p>
        )}
      </section>
    </>
  );
}


