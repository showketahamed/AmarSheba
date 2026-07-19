import { serviceCatalog } from '../data/serviceCatalog.js';
import { ADMIN_STORAGE_KEYS, readJson } from './adminStorage.js';

const serviceKeywords = Object.fromEntries(
  serviceCatalog.map((service) => [
    service.id,
    [...service.keywordsEn, ...service.keywordsBn, service.titleEn, service.titleBn].map((keyword) => keyword.toLowerCase()),
  ]),
);

const intentKeywords = {
  documents: ['document', 'documents', 'paper', 'papers', 'required', 'কাগজ', 'ডকুমেন্ট', 'লাগবে', 'প্রয়োজন'],
  fees: ['fee', 'fees', 'cost', 'payment', 'charge', 'ফি', 'খরচ', 'টাকা', 'পেমেন্ট'],
  timeline: ['time', 'timeline', 'long', 'days', 'deadline', 'সময়', 'সময়', 'কতদিন', 'সময়সীমা'],
  eligibility: ['eligible', 'eligibility', 'who can', 'যোগ্য', 'যোগ্যতা', 'কারা'],
  steps: ['step', 'steps', 'how', 'apply', 'guide', 'process', 'ধাপ', 'কিভাবে', 'আবেদন', 'প্রক্রিয়া'],
  checklist: ['checklist', 'prepare', 'ready', 'চেকলিস্ট', 'প্রস্তুতি'],
  officialLink: ['official', 'link', 'portal', 'website', 'অফিসিয়াল', 'লিংক', 'পোর্টাল', 'ওয়েবসাইট'],
};

function normalize(value) {
  return value.toLowerCase().trim();
}

function findServiceId(message) {
  const normalized = normalize(message);

  return Object.entries(serviceKeywords).find(([, keywords]) =>
    keywords.some((keyword) => normalized.includes(keyword)),
  )?.[0];
}

function findIntent(message) {
  const normalized = normalize(message);

  return Object.entries(intentKeywords).find(([, keywords]) =>
    keywords.some((keyword) => normalized.includes(keyword)),
  )?.[0] || 'overview';
}

function formatList(items) {
  return items.map((item) => `- ${item}`).join('\n');
}

export function generateAssistantReply(message, translations, services, locale) {
  const customReply = readJson(ADMIN_STORAGE_KEYS.customReplies, []).find((item) => {
    const keyword = normalize(item.keyword || '');
    return keyword && normalize(message).includes(keyword);
  });

  if (customReply?.reply) {
    return customReply.reply;
  }

  const serviceId = findServiceId(message);

  if (!serviceId) {
    const sampleServices = services
      .slice(0, 6)
      .map((service) => translations.services[service.id]?.title)
      .filter(Boolean)
      .join(', ');

    return translations.assistant.fallback.replace('{services}', sampleServices);
  }

  const service = services.find((item) => item.id === serviceId);
  const details = translations.services[serviceId];
  const intent = findIntent(message);
  const labels = translations.serviceDetails;
  const officialLine = `${labels.officialLink}: ${service.officialLink}`;

  const responseMap = {
    overview: `${details.title}\n\n${details.overview}\n\n${officialLine}`,
    documents: `${details.title} - ${labels.requiredDocuments}\n${formatList(details.requiredDocuments)}\n\n${translations.assistant.verifyOfficial}`,
    fees: `${details.title} - ${labels.fees}\n${details.fees}\n\n${translations.assistant.verifyOfficial}`,
    timeline: `${details.title} - ${labels.timeline}\n${details.timeline}\n\n${translations.assistant.verifyOfficial}`,
    eligibility: `${details.title} - ${labels.eligibility}\n${details.eligibility}`,
    steps: `${details.title} - ${labels.steps}\n${formatList(details.steps)}`,
    checklist: `${details.title} - ${labels.checklist}\n${formatList(details.checklist)}`,
    officialLink: `${details.title}\n${officialLine}`,
  };

  const related = service.related
    .map((relatedId) => translations.services[relatedId]?.title)
    .filter(Boolean)
    .join(', ');
  const relatedLabel = locale === 'bn' ? 'সম্পর্কিত সেবা' : 'Related services';

  return `${responseMap[intent]}\n\n${relatedLabel}: ${related}`;
}
