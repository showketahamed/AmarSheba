import * as LucideIcons from 'lucide-react';
import { useLocale } from '../context/LocaleContext.jsx';
import { Link, useNavigate } from 'react-router-dom';
import { getServiceContent } from '../utils/adminStorage.js';

export default function ServiceCard({ service }) {
  const { locale, t, translations } = useLocale();
  const navigate = useNavigate();

  const localizedTitle = locale === 'bn' ? service.title_bn : service.title_en;
  const localizedDescription = locale === 'bn' ? service.description_bn : service.description_en;
  const details = getServiceContent(service.id, translations) || {
    title: localizedTitle || service.title,
    description: localizedDescription || service.description,
  };

  if (!details) {
    return null;
  }

  const Icon = LucideIcons[service.icon] || LucideIcons.Briefcase;
  const route = service.detailRoute || `/services/${service.id}`;
  const highlightClass = service.highlight
    ? 'border-red-200 ring-1 ring-red-100 hover:border-red-500 dark:border-red-500/30 dark:ring-red-500/10'
    : 'border-slate-200 hover:border-sheba-400 dark:border-slate-800';
  const iconClass = service.highlight
    ? 'bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-100'
    : 'bg-sheba-50 text-sheba-700 dark:bg-sheba-500/15 dark:text-sheba-100';

  const handleCardClick = (event) => {
    if (event.defaultPrevented) return;
    navigate(route);
  };

  return (
    <Link
      to={route}
      onClick={handleCardClick}
      className={`focus-ring relative z-10 isolate pointer-events-auto group flex h-full min-h-[270px] cursor-pointer flex-col rounded-md border bg-white p-5 shadow-sm transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-lg dark:bg-slate-900 ${highlightClass}`}
      aria-label={`${t('common.learnMore')}: ${details.title}`}
    >
      <div className={`h-2 w-16 rounded-full transition-all duration-200 group-hover:w-full ${service.accent}`} />
      <div className="mt-5 flex items-center gap-3">
        <span className={`grid h-11 w-11 place-items-center rounded-md ${iconClass}`}>
          <Icon className="h-5 w-5" />
        </span>
        <p className="text-sm font-semibold uppercase text-slate-500 dark:text-slate-400">{t('servicesPage.category')}</p>
      </div>
      <h2 className="mt-2 text-xl font-bold text-slate-950 dark:text-white">{details.title}</h2>
      <p className="mt-3 min-h-20 text-sm leading-6 text-slate-600 dark:text-slate-300">
        {details.description}
      </p>
      <span className="mt-auto inline-flex items-center gap-2 rounded-md pt-5 text-sm font-semibold text-sheba-700 transition dark:text-sheba-100">
        {t('common.learnMore')}
        <LucideIcons.ArrowRight className="h-4 w-4" />
      </span>
    </Link>
  );
}



