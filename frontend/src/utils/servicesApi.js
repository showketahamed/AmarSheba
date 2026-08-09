import { getServiceById as getLocalServiceById, services as localServices } from '../data/services.js';
import { getServiceContent } from './adminStorage.js';

const API_BASE_URL = 'http://localhost:5000/api';

const DEFAULT_ACCENTS = [
  'bg-sheba-600',
  'bg-river',
  'bg-harvest',
  'bg-sheba-700',
  'bg-slate-700',
  'bg-clay',
  'bg-emerald-700',
  'bg-cyan-700',
  'bg-indigo-700',
  'bg-rose-700',
  'bg-violet-700',
  'bg-yellow-600',
  'bg-pink-700',
  'bg-teal-700',
];

function splitDocuments(value) {
  if (Array.isArray(value)) {
    return value.filter(Boolean);
  }

  if (!value) {
    return [];
  }

  return value
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
}

function normalizeService(service, index = 0) {
  const localMeta = getLocalServiceById(service.slug || service.category || service.title_en);
  const officialLink = service.officialLink || service.official_link || service.governmentWebsiteLink || service.government_website_link;
  const onlineApplyLink = service.onlineApplyLink || service.online_apply_link || service.applyLink || service.apply_link;

  return {
    ...localMeta,
    ...service,
    id: localMeta?.id || service.slug,
    databaseId: service.id,
    slug: localMeta?.id || service.slug,
    accent: localMeta?.accent || DEFAULT_ACCENTS[index % DEFAULT_ACCENTS.length],
    officialLink: localMeta?.officialLink || officialLink || '#',
    onlineApplyLink: localMeta?.onlineApplyLink || onlineApplyLink || '#',
    detailRoute: localMeta?.detailRoute || `/services/${localMeta?.id || service.slug}`,
    icon: localMeta?.icon,
    related: localMeta?.related || service.related || [],
    title: service.title_en,
    description: service.description_en,
    required_documents_list: splitDocuments(service.required_documents_list || service.required_documents),
  };
}

function mergeServices(remoteServices) {
  const remoteMap = new Map(remoteServices.map((service) => [service.id, service]));
  const merged = localServices.map((service, index) => ({
    ...service,
    ...(remoteMap.get(service.id) || {}),
    accent: service.accent,
    icon: service.icon,
    detailRoute: service.detailRoute,
    officialLink: remoteMap.get(service.id)?.officialLink || remoteMap.get(service.id)?.official_link || service.officialLink,
    onlineApplyLink: remoteMap.get(service.id)?.onlineApplyLink || remoteMap.get(service.id)?.online_apply_link || service.onlineApplyLink,
    related: service.related,
    keywords_en: service.keywords_en,
    keywords_bn: service.keywords_bn,
  }));

  remoteServices.forEach((service, index) => {
    if (!merged.find((item) => item.id === service.id)) {
      merged.push({
        ...service,
        accent: service.accent || DEFAULT_ACCENTS[(localServices.length + index) % DEFAULT_ACCENTS.length],
        detailRoute: service.detailRoute || `/services/${service.id}`,
      });
    }
  });

  return merged;
}

function buildFallbackContent(service, locale, translations) {
  const localContent = getServiceContent(service.slug, translations);

  if (localContent) {
    return {
      ...localContent,
      title: locale === 'bn' ? service.title_bn : service.title_en,
      description: locale === 'bn' ? service.description_bn : service.description_en,
      requiredDocuments:
        localContent.requiredDocuments?.length
          ? localContent.requiredDocuments
          : service.required_documents_list,
      fees: service.fee || localContent.fees,
      timeline: service.processing_time || localContent.timeline,
    };
  }

  const isBangla = locale === 'bn';

  return {
    title: isBangla ? service.title_bn : service.title_en,
    description: isBangla ? service.description_bn : service.description_en,
    overview: isBangla ? service.description_bn : service.description_en,
    eligibility: isBangla ? fixMojibake('যোগ্যতা জানতে অফিসিয়াল নির্দেশনা দেখুন।') : 'Please review the official instructions for eligibility.',
    requiredDocuments: service.required_documents_list,
    fees: service.fee || (isBangla ? fixMojibake('অফিসিয়াল সূচি অনুযায়ী') : 'As per official schedule'),
    timeline: service.processing_time || (isBangla ? fixMojibake('অফিসিয়াল সময়সূচি অনুযায়ী') : 'As per official processing timeline'),
    steps: isBangla
      ? [
          'অফিসিয়াল নির্দেশনা দেখে সেবার ধরন নিশ্চিত করুন।',
          'প্রয়োজনীয় কাগজপত্র প্রস্তুত করুন।',
          'আবেদনপত্র সঠিকভাবে পূরণ করুন।',
          'প্রযোজ্য ফি জমা দিয়ে রসিদ সংরক্ষণ করুন।',
          'অফিসিয়াল ট্র্যাকিং নম্বর সংরক্ষণ করুন।',
        ]
      : [
          'Confirm the correct service type from the official instructions.',
          'Prepare the required documents.',
          'Complete the application carefully.',
          'Pay any applicable fee and save the receipt.',
          'Keep the official tracking number for follow-up.',
        ],
    faq: [
      {
        q: isBangla ? 'এই সেবার অফিসিয়াল লিংক কোথায়?' : 'Where is the official link for this service?',
        a: isBangla ? 'উপরে দেওয়া অফিসিয়াল লিংক ব্যবহার করুন।' : 'Use the official link shown above.',
      },
    ],
    checklist: service.required_documents_list.length
      ? service.required_documents_list
      : isBangla
        ? ['অফিসিয়াল তথ্য যাচাই করা হয়েছে', 'প্রয়োজনীয় কাগজপত্র প্রস্তুত']
        : ['Official information verified', 'Required documents prepared'],
  };
}

async function request(path) {
  const response = await fetch(createApiUrl(path));
  const payload = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(payload?.message || 'Request failed.');
  }

  return payload;
}

export async function fetchServices() {
  try {
    const data = await request('/services');
    return mergeServices(data.services.map(normalizeService));
  } catch {
    return localServices;
  }
}

export async function fetchServiceById(serviceId) {
  try {
    const data = await request(`/services/${serviceId}`);
    return {
      ...getLocalServiceById(serviceId),
      ...normalizeService(data.service),
    };
  } catch (error) {
    const localService = getLocalServiceById(serviceId);

    if (localService) {
      return localService;
    }

    throw error;
  }
}

export function getDisplayContent(service, locale, translations) {
  return buildFallbackContent(service, locale, translations);
}

