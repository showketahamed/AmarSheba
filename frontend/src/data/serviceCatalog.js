const createFaq = (qEn, aEn, qBn, aBn) => ({
  en: { q: qEn, a: aEn },
  bn: { q: qBn, a: aBn },
});

export const serviceCatalog = [
  {
    id: 'identity',
    aliases: ['identity'],
    icon: 'IdCard',
    accent: 'bg-sheba-600',
    titleEn: 'Identity',
    titleBn: 'পরিচয় সেবা',
    descriptionEn: 'NID, birth certificate, smart card, and identity record support in one place.',
    descriptionBn: 'এনআইডি, জন্ম নিবন্ধন, স্মার্ট কার্ড এবং পরিচয় রেকর্ড সহায়তা এক জায়গায়।',
    keywordsEn: ['nid', 'national id', 'birth certificate', 'smart card', 'identity'],
    keywordsBn: ['এনআইডি', 'জাতীয় পরিচয়পত্র', 'জন্ম নিবন্ধন', 'স্মার্ট কার্ড', 'পরিচয়'],
    detailRoute: '/services/identity',
    officialLink: 'https://services.nidw.gov.bd/',
    onlineApplyLink: '#',
    related: ['passport', 'tax', 'education'],
    overviewEn:
      'Identity services cover National ID registration and correction, birth certificate coordination, smart card collection, and core personal-record verification for other government services.',
    overviewBn:
      'পরিচয় সেবার মধ্যে জাতীয় পরিচয়পত্র নিবন্ধন ও সংশোধন, জন্ম নিবন্ধন সহায়তা, স্মার্ট কার্ড সংগ্রহ এবং অন্যান্য সরকারি সেবার জন্য ব্যক্তিগত তথ্য যাচাই অন্তর্ভুক্ত।',
    eligibilityEn:
      'Bangladeshi citizens, new adult applicants, parents acting for children, or residents updating identity records through the responsible authority.',
    eligibilityBn:
      'বাংলাদেশি নাগরিক, নতুন প্রাপ্তবয়স্ক আবেদনকারী, সন্তানের পক্ষে অভিভাবক, অথবা পরিচয় তথ্য হালনাগাদকারী বাসিন্দারা এই সেবার জন্য যোগ্য।',
    requiredDocumentsEn: ['Existing NID or birth certificate', 'Proof of address', 'Supporting correction evidence', 'Photograph and mobile number'],
    requiredDocumentsBn: ['বিদ্যমান এনআইডি বা জন্ম নিবন্ধন', 'ঠিকানার প্রমাণ', 'সংশোধনের সহায়ক কাগজপত্র', 'ছবি ও মোবাইল নম্বর'],
    applicationProcessEn: [
      'Choose whether you need new registration, correction, reissue, or smart card collection.',
      'Check the official election or civil registration instructions for the latest form and schedule.',
      'Prepare matching identity documents and supporting records before submission.',
      'Submit online or at the service center, pay any official fee, and keep the tracking reference.',
      'Complete verification or biometric steps when requested and collect the updated document.',
    ],
    applicationProcessBn: [
      'নতুন নিবন্ধন, সংশোধন, পুনরায় ইস্যু বা স্মার্ট কার্ড সংগ্রহের ধরন নির্ধারণ করুন।',
      'সর্বশেষ ফরম ও সময়সূচির জন্য অফিসিয়াল নির্বাচন কমিশন বা নিবন্ধন নির্দেশনা দেখুন।',
      'জমা দেওয়ার আগে মিল থাকা পরিচয়পত্র ও সহায়ক নথি প্রস্তুত করুন।',
      'অনলাইনে বা সেবা কেন্দ্রে আবেদন জমা দিন, সরকারি ফি পরিশোধ করুন এবং ট্র্যাকিং নম্বর রাখুন।',
      'প্রয়োজনে যাচাই বা বায়োমেট্রিক সম্পন্ন করে হালনাগাদ নথি সংগ্রহ করুন।',
    ],
    feesEn: 'New registration is usually free. Correction, duplicate card, or urgent processing may require official fees.',
    feesBn: 'নতুন নিবন্ধন সাধারণত বিনামূল্যে। সংশোধন, ডুপ্লিকেট কার্ড বা জরুরি প্রক্রিয়ায় সরকারি ফি লাগতে পারে।',
    processingTimeEn: 'From same day for basic queries to several working days for correction or reissue cases.',
    processingTimeBn: 'সাধারণ তথ্যের জন্য একই দিন থেকে সংশোধন বা পুনরায় ইস্যুর ক্ষেত্রে কয়েক কর্মদিবস পর্যন্ত লাগতে পারে।',
    faqs: [
      createFaq(
        'Can I use a birth certificate before getting an NID?',
        'Yes. A birth certificate is often used for first-time identity services before an NID is issued.',
        'এনআইডি পাওয়ার আগে কি জন্ম নিবন্ধন ব্যবহার করা যাবে?',
        'হ্যাঁ। প্রথমবার পরিচয় সেবায় এনআইডি ইস্যুর আগে জন্ম নিবন্ধন প্রায়ই ব্যবহার করা হয়।',
      ),
      createFaq(
        'What if my smart card is not ready?',
        'Track the status first, then contact the local service center with your slip and identity details.',
        'স্মার্ট কার্ড প্রস্তুত না হলে কী করব?',
        'প্রথমে স্ট্যাটাস দেখুন, তারপর স্লিপ ও পরিচয় তথ্যসহ স্থানীয় সেবা কেন্দ্রে যোগাযোগ করুন।',
      ),
    ],
  },
  {
    id: 'passport',
    aliases: ['passport', 'passport-immigration'],
    icon: 'Passport',
    accent: 'bg-river',
    titleEn: 'Passport & Immigration',
    titleBn: 'পাসপোর্ট ও ইমিগ্রেশন',
    descriptionEn: 'e-Passport, renewal, immigration clearance, and overseas travel document guidance.',
    descriptionBn: 'ই-পাসপোর্ট, নবায়ন, ইমিগ্রেশন ক্লিয়ারেন্স ও বিদেশ ভ্রমণ নথি সহায়তা।',
    keywordsEn: ['passport', 'immigration', 'visa', 'e-passport', 'renew passport'],
    keywordsBn: ['পাসপোর্ট', 'ইমিগ্রেশন', 'ভিসা', 'ই-পাসপোর্ট', 'পাসপোর্ট নবায়ন'],
    detailRoute: '/services/passport',
    officialLink: 'https://www.epassport.gov.bd/',
    onlineApplyLink: 'https://www.epassport.gov.bd/online-application',
    related: ['identity', 'probashi', 'police'],
    overviewEn:
      'Passport and immigration services help citizens apply for new passports, renew old ones, update data, schedule biometric appointments, and prepare for international travel compliance.',
    overviewBn:
      'পাসপোর্ট ও ইমিগ্রেশন সেবা নাগরিকদের নতুন পাসপোর্ট, নবায়ন, তথ্য সংশোধন, বায়োমেট্রিক অ্যাপয়েন্টমেন্ট এবং আন্তর্জাতিক ভ্রমণের প্রস্তুতিতে সহায়তা করে।',
    eligibilityEn:
      'Bangladeshi citizens with valid identity documents and correct personal information for passport issuance, renewal, or immigration support.',
    eligibilityBn:
      'বৈধ পরিচয়পত্র ও সঠিক ব্যক্তিগত তথ্য থাকা বাংলাদেশি নাগরিকরা পাসপোর্ট ইস্যু, নবায়ন বা ইমিগ্রেশন সহায়তার জন্য যোগ্য।',
    requiredDocumentsEn: ['NID or birth certificate', 'Previous passport if available', 'Online application summary', 'Fee receipt and appointment slip'],
    requiredDocumentsBn: ['এনআইডি বা জন্ম নিবন্ধন', 'থাকলে আগের পাসপোর্ট', 'অনলাইন আবেদন সারসংক্ষেপ', 'ফি রসিদ ও অ্যাপয়েন্টমেন্ট স্লিপ'],
    applicationProcessEn: [
      'Create or sign in to the official e-passport account.',
      'Fill the application carefully and select the passport office and delivery speed.',
      'Pay the approved fee and book an appointment for biometric enrolment.',
      'Attend the passport office with originals and printed application summary.',
      'Track the delivery status online until collection or dispatch is confirmed.',
    ],
    applicationProcessBn: [
      'অফিসিয়াল ই-পাসপোর্ট অ্যাকাউন্ট খুলুন বা লগইন করুন।',
      'আবেদন ফরম সতর্কভাবে পূরণ করে পাসপোর্ট অফিস ও ডেলিভারি ধরন নির্বাচন করুন।',
      'অনুমোদিত ফি পরিশোধ করে বায়োমেট্রিক অ্যাপয়েন্টমেন্ট বুক করুন।',
      'মূল কাগজপত্র ও প্রিন্ট করা আবেদন সারাংশসহ পাসপোর্ট অফিসে উপস্থিত হন।',
      'সংগ্রহ বা প্রেরণ নিশ্চিত না হওয়া পর্যন্ত অনলাইনে ডেলিভারি স্ট্যাটাস ট্র্যাক করুন।',
    ],
    feesEn: 'Fees vary by booklet type, page count, validity, and regular/express delivery.',
    feesBn: 'বুকলেট ধরন, পৃষ্ঠা সংখ্যা, মেয়াদ এবং রেগুলার/এক্সপ্রেস ডেলিভারি অনুযায়ী ফি ভিন্ন হয়।',
    processingTimeEn: 'Usually from a few working days to several weeks depending on delivery type and verification.',
    processingTimeBn: 'ডেলিভারি ধরন ও যাচাই অনুযায়ী কয়েক কর্মদিবস থেকে কয়েক সপ্তাহ পর্যন্ত লাগতে পারে।',
    faqs: [
      createFaq(
        'Do I need police verification for every passport?',
        'Verification depends on the applicant profile and current passport authority rules.',
        'প্রতিটি পাসপোর্টের জন্য কি পুলিশ ভেরিফিকেশন লাগে?',
        'আবেদনকারীর ধরন ও বর্তমান পাসপোর্ট অধিদপ্তরের নিয়ম অনুযায়ী ভেরিফিকেশন লাগতে পারে।',
      ),
      createFaq(
        'Can I renew before expiry?',
        'Yes. Many applicants renew before expiry to avoid travel disruption.',
        'মেয়াদ শেষ হওয়ার আগে কি নবায়ন করা যায়?',
        'হ্যাঁ। ভ্রমণে সমস্যা এড়াতে অনেক আবেদনকারী আগেই নবায়ন করেন।',
      ),
    ],
  },
  {
    id: 'driving-license',
    aliases: ['driving-license', 'driving-license-vehicle', 'vehicle'],
    icon: 'CarFront',
    accent: 'bg-harvest',
    titleEn: 'Driving License & Vehicle',
    titleBn: 'ড্রাইভিং লাইসেন্স ও যানবাহন',
    descriptionEn: 'Learner permit, driving license, registration, fitness, and vehicle ownership support.',
    descriptionBn: 'লার্নার পারমিট, ড্রাইভিং লাইসেন্স, রেজিস্ট্রেশন, ফিটনেস ও যানবাহন মালিকানা সহায়তা।',
    keywordsEn: ['driving license', 'vehicle', 'registration', 'fitness', 'brta', 'learner'],
    keywordsBn: ['ড্রাইভিং লাইসেন্স', 'যানবাহন', 'রেজিস্ট্রেশন', 'ফিটনেস', 'বিআরটিএ', 'লার্নার'],
    detailRoute: '/services/driving-license',
    officialLink: 'https://bsp.brta.gov.bd/',
    onlineApplyLink: 'https://bsp.brta.gov.bd/login',
    related: ['identity', 'police', 'tax'],
    overviewEn:
      'Driving license and vehicle services support learner permits, tests, smart card licenses, registration, fitness certificates, tax token, and related BRTA workflows.',
    overviewBn:
      'ড্রাইভিং লাইসেন্স ও যানবাহন সেবায় লার্নার পারমিট, টেস্ট, স্মার্ট কার্ড লাইসেন্স, রেজিস্ট্রেশন, ফিটনেস সার্টিফিকেট, ট্যাক্স টোকেনসহ বিআরটিএর বিভিন্ন কাজ অন্তর্ভুক্ত।',
    eligibilityEn:
      'Applicants who meet age, medical, training, and document requirements for the selected driving or vehicle service.',
    eligibilityBn:
      'নির্বাচিত ড্রাইভিং বা যানবাহন সেবার জন্য বয়স, মেডিকেল, প্রশিক্ষণ ও নথির শর্ত পূরণকারী আবেদনকারীরা যোগ্য।',
    requiredDocumentsEn: ['NID', 'Learner permit or previous license', 'Medical certificate', 'Vehicle ownership documents where relevant'],
    requiredDocumentsBn: ['এনআইডি', 'লার্নার পারমিট বা আগের লাইসেন্স', 'মেডিকেল সার্টিফিকেট', 'প্রয়োজনে যানবাহনের মালিকানা নথি'],
    applicationProcessEn: [
      'Select the required BRTA service such as learner, license, registration, fitness, or transfer.',
      'Prepare the application form and supporting documents including medical or vehicle papers.',
      'Book the test or service slot if the portal requires an appointment.',
      'Pay the official fee and attend the office, test center, or inspection point.',
      'Track the smart card, certificate, or registration update until delivery.',
    ],
    applicationProcessBn: [
      'লার্নার, লাইসেন্স, রেজিস্ট্রেশন, ফিটনেস বা ট্রান্সফারের মতো প্রয়োজনীয় বিআরটিএ সেবা নির্বাচন করুন।',
      'মেডিকেল বা যানবাহনের কাগজসহ আবেদন ফরম ও সহায়ক নথি প্রস্তুত করুন।',
      'পোর্টালে অ্যাপয়েন্টমেন্ট প্রয়োজন হলে টেস্ট বা সেবার স্লট বুক করুন।',
      'সরকারি ফি পরিশোধ করে অফিস, টেস্ট সেন্টার বা পরিদর্শন স্থানে উপস্থিত হন।',
      'স্মার্ট কার্ড, সার্টিফিকেট বা রেজিস্ট্রেশন আপডেট ডেলিভারি হওয়া পর্যন্ত ট্র্যাক করুন।',
    ],
    feesEn: 'Fees depend on service type, class, smart card issue, registration, and inspection needs.',
    feesBn: 'সেবার ধরন, লাইসেন্স ক্লাস, স্মার্ট কার্ড, রেজিস্ট্রেশন ও পরিদর্শনের ওপর ফি নির্ভর করে।',
    processingTimeEn: 'From same-day token services to several weeks for test, card, or registration completion.',
    processingTimeBn: 'একই দিনের টোকেন সেবা থেকে টেস্ট, কার্ড বা রেজিস্ট্রেশন সম্পন্ন হতে কয়েক সপ্তাহ পর্যন্ত লাগতে পারে।',
    faqs: [
      createFaq(
        'Can I renew an expired license?',
        'Yes, but extra penalties or revalidation steps may apply depending on the expiry period.',
        'মেয়াদোত্তীর্ণ লাইসেন্স কি নবায়ন করা যায়?',
        'হ্যাঁ, তবে মেয়াদোত্তীর্ণ সময়ের ওপর ভিত্তি করে অতিরিক্ত জরিমানা বা পুনরায় যাচাই লাগতে পারে।',
      ),
      createFaq(
        'Is vehicle fitness checked online?',
        'Applications may start online, but the vehicle inspection itself usually requires in-person review.',
        'যানবাহনের ফিটনেস কি পুরোপুরি অনলাইনে হয়?',
        'আবেদন অনলাইনে শুরু হতে পারে, তবে ফিটনেস পরিদর্শনের জন্য সাধারণত সরাসরি উপস্থিত হতে হয়।',
      ),
    ],
  },
  {
    id: 'land',
    aliases: ['land', 'land-services'],
    icon: 'Landmark',
    accent: 'bg-sheba-700',
    titleEn: 'Land Services',
    titleBn: 'ভূমি সেবা',
    descriptionEn: 'Mutation, khatian, land tax, mouza maps, and ownership record support.',
    descriptionBn: 'নামজারি, খতিয়ান, ভূমি কর, মৌজা ম্যাপ ও মালিকানা রেকর্ড সহায়তা।',
    keywordsEn: ['land', 'mutation', 'khatian', 'land tax', 'mouza', 'deed'],
    keywordsBn: ['ভূমি', 'নামজারি', 'খতিয়ান', 'ভূমি কর', 'মৌজা', 'দলিল'],
    detailRoute: '/services/land',
    officialLink: 'https://land.gov.bd/',
    onlineApplyLink: 'https://mutation.land.gov.bd/',
    related: ['court', 'tax', 'identity'],
    overviewEn:
      'Land services help with mutation, certified records, tax status, ownership verification, and local land office processes for property transactions or inheritance.',
    overviewBn:
      'ভূমি সেবা সম্পত্তি ক্রয়, উত্তরাধিকার বা রেকর্ড হালনাগাদের জন্য নামজারি, সনদপ্রাপ্ত রেকর্ড, কর অবস্থা ও মালিকানা যাচাইয়ে সহায়তা করে।',
    eligibilityEn:
      'Owners, buyers, heirs, or authorized representatives with valid land records and supporting ownership evidence.',
    eligibilityBn:
      'বৈধ ভূমি রেকর্ড ও মালিকানার প্রমাণসহ মালিক, ক্রেতা, উত্তরাধিকারী বা অনুমোদিত প্রতিনিধিরা এই সেবার জন্য যোগ্য।',
    requiredDocumentsEn: ['Registered deed or transfer record', 'Khatian and mouza details', 'Land tax receipt', 'Applicant NID'],
    requiredDocumentsBn: ['রেজিস্টার্ড দলিল বা হস্তান্তর নথি', 'খতিয়ান ও মৌজা তথ্য', 'ভূমি কর রসিদ', 'আবেদনকারীর এনআইডি'],
    applicationProcessEn: [
      'Identify whether you need mutation, record copy, tax update, or a map-related service.',
      'Collect ownership records, khatian details, deed copies, and tax receipts.',
      'Apply through the official portal or the relevant land office as instructed.',
      'Complete verification, field inquiry, or hearing steps if requested by the office.',
      'Download or collect the updated record once the service is approved.',
    ],
    applicationProcessBn: [
      'নামজারি, রেকর্ড কপি, কর আপডেট বা ম্যাপ-সংক্রান্ত কোন সেবা দরকার তা নির্ধারণ করুন।',
      'মালিকানা রেকর্ড, খতিয়ান, দলিল ও কর রসিদ সংগ্রহ করুন।',
      'নির্দেশনা অনুযায়ী অফিসিয়াল পোর্টাল বা সংশ্লিষ্ট ভূমি অফিসে আবেদন করুন।',
      'অফিস চাইলে যাচাই, মাঠ অনুসন্ধান বা শুনানির ধাপ সম্পন্ন করুন।',
      'সেবা অনুমোদিত হলে হালনাগাদ রেকর্ড ডাউনলোড বা সংগ্রহ করুন।',
    ],
    feesEn: 'Fees vary by mutation, certified copy, land tax, and record service type.',
    feesBn: 'নামজারি, সনদপ্রাপ্ত কপি, ভূমি কর ও রেকর্ড সেবার ধরন অনুযায়ী ফি ভিন্ন হয়।',
    processingTimeEn: 'Can range from a few days to several weeks based on verification and local office workload.',
    processingTimeBn: 'যাচাই ও স্থানীয় অফিসের কাজের চাপ অনুযায়ী কয়েক দিন থেকে কয়েক সপ্তাহ পর্যন্ত লাগতে পারে।',
    faqs: [
      createFaq(
        'Do heirs need separate proof?',
        'Yes. Inheritance-based services often require succession or family relationship evidence.',
        'উত্তরাধিকারীদের কি আলাদা প্রমাণ লাগে?',
        'হ্যাঁ। উত্তরাধিকারভিত্তিক সেবায় প্রায়ই ওয়ারিশ বা পারিবারিক সম্পর্কের প্রমাণ লাগে।',
      ),
      createFaq(
        'Can I pay land tax online?',
        'In many cases yes, if the local system supports online land development tax payment.',
        'ভূমি কর কি অনলাইনে দেওয়া যায়?',
        'অনেক ক্ষেত্রে হ্যাঁ, যদি স্থানীয় সিস্টেম অনলাইন ভূমি উন্নয়ন কর সাপোর্ট করে।',
      ),
    ],
  },
  {
    id: 'court',
    aliases: ['court', 'court-legal', 'legal'],
    icon: 'Scale',
    accent: 'bg-slate-700',
    titleEn: 'Court & Legal',
    titleBn: 'আদালত ও আইন',
    descriptionEn: 'Case information, legal aid, certified copies, and court process guidance.',
    descriptionBn: 'মামলার তথ্য, আইনগত সহায়তা, সনদপ্রাপ্ত কপি ও আদালত প্রক্রিয়া নির্দেশনা।',
    keywordsEn: ['court', 'legal', 'case', 'certified copy', 'hearing', 'law'],
    keywordsBn: ['আদালত', 'আইন', 'মামলা', 'সনদপ্রাপ্ত কপি', 'শুনানি', 'কোর্ট'],
    detailRoute: '/services/court',
    officialLink: 'https://www.judiciary.gov.bd/',
    onlineApplyLink: '#',
    related: ['land', 'police', 'consumer-rights'],
    overviewEn:
      'Court and legal services guide people through case information, cause list checks, certified copy requests, legal-aid direction, and basic court document preparation.',
    overviewBn:
      'আদালত ও আইন সেবা মামলার তথ্য, কজলিস্ট দেখা, সনদপ্রাপ্ত কপি চাওয়া, আইনগত সহায়তার দিকনির্দেশনা এবং মৌলিক আদালত নথি প্রস্তুতিতে সহায়তা করে।',
    eligibilityEn:
      'Case parties, advocates, authorized representatives, or citizens seeking formal legal support and court-related information.',
    eligibilityBn:
      'মামলার পক্ষ, আইনজীবী, অনুমোদিত প্রতিনিধি বা আদালত-সংক্রান্ত তথ্য ও আইনগত সহায়তা প্রয়োজন এমন নাগরিকরা এই সেবার জন্য যোগ্য।',
    requiredDocumentsEn: ['Case number or reference', 'Applicant identity', 'Relevant petitions or order copy', 'Authorization if someone else is applying'],
    requiredDocumentsBn: ['মামলা নম্বর বা রেফারেন্স', 'আবেদনকারীর পরিচয়পত্র', 'প্রাসঙ্গিক পিটিশন বা আদেশের কপি', 'অন্য কেউ আবেদন করলে অনুমতিপত্র'],
    applicationProcessEn: [
      'Identify whether you need case information, legal aid, hearing status, or document copies.',
      'Collect the case reference, party information, and any prior court order.',
      'Contact the relevant court office, legal aid desk, or authorized portal if available.',
      'Submit the request, pay the required copy or filing fees, and keep the receipt.',
      'Follow the court schedule for hearing, collection, or additional verification.',
    ],
    applicationProcessBn: [
      'মামলার তথ্য, আইনগত সহায়তা, শুনানির অবস্থা নাকি নথির কপি দরকার তা নির্ধারণ করুন।',
      'মামলার রেফারেন্স, পক্ষের তথ্য ও আগের আদালতের আদেশ সংগ্রহ করুন।',
      'প্রয়োজনে সংশ্লিষ্ট আদালত অফিস, লিগ্যাল এইড ডেস্ক বা অনুমোদিত পোর্টালে যোগাযোগ করুন।',
      'অনুরোধ জমা দিন, প্রয়োজনীয় কপি বা ফাইলিং ফি পরিশোধ করুন এবং রসিদ রাখুন।',
      'শুনানি, সংগ্রহ বা অতিরিক্ত যাচাইয়ের জন্য আদালতের সময়সূচি অনুসরণ করুন।',
    ],
    feesEn: 'Court copy, filing, or legal-aid related costs depend on the service and the court schedule.',
    feesBn: 'আদালতের কপি, ফাইলিং বা আইনগত সহায়তা-সংক্রান্ত খরচ সেবার ধরন ও আদালতের নিয়ম অনুযায়ী নির্ভর করে।',
    processingTimeEn: 'Cause list checks may be immediate, while certified copies or hearings depend on court workload.',
    processingTimeBn: 'কজলিস্ট দ্রুত দেখা যায়, তবে সনদপ্রাপ্ত কপি বা শুনানির সময় আদালতের কাজের ওপর নির্ভর করে।',
    faqs: [
      createFaq(
        'Can I get case updates online?',
        'Some courts publish cause lists or basic status online, but detailed support may still require direct contact.',
        'মামলার আপডেট কি অনলাইনে পাওয়া যায়?',
        'কিছু আদালত কজলিস্ট বা প্রাথমিক অবস্থা অনলাইনে দেয়, তবে বিস্তারিত সহায়তার জন্য সরাসরি যোগাযোগ লাগতে পারে।',
      ),
      createFaq(
        'Is legal aid free?',
        'Eligible low-income or vulnerable applicants may receive free or subsidized legal aid through official channels.',
        'লিগ্যাল এইড কি বিনামূল্যে?',
        'যোগ্য স্বল্প আয়ের বা ঝুঁকিপূর্ণ আবেদনকারীরা সরকারি চ্যানেলে বিনামূল্যে বা স্বল্পখরচে লিগ্যাল এইড পেতে পারেন।',
      ),
    ],
  },
  {
    id: 'police',
    aliases: ['police', 'police-services'],
    icon: 'Shield',
    accent: 'bg-clay',
    titleEn: 'Police Services',
    titleBn: 'পুলিশ সেবা',
    descriptionEn: 'GD, police clearance, complaints, verification, and safety support services.',
    descriptionBn: 'জিডি, পুলিশ ক্লিয়ারেন্স, অভিযোগ, যাচাই ও নিরাপত্তা সহায়তা সেবা।',
    keywordsEn: ['police', 'gd', 'clearance', 'complaint', 'verification'],
    keywordsBn: ['পুলিশ', 'জিডি', 'ক্লিয়ারেন্স', 'অভিযোগ', 'যাচাই'],
    detailRoute: '/services/police',
    officialLink: 'https://www.police.gov.bd/',
    onlineApplyLink: 'https://pcc.police.gov.bd/',
    related: ['court', 'passport', 'identity'],
    overviewEn:
      'Police services cover general diary reporting, police clearance certificates, complaint direction, local verification support, and public safety contact points.',
    overviewBn:
      'পুলিশ সেবার মধ্যে জিডি করা, পুলিশ ক্লিয়ারেন্স সনদ, অভিযোগের দিকনির্দেশনা, স্থানীয় যাচাই সহায়তা এবং জননিরাপত্তা যোগাযোগ অন্তর্ভুক্ত।',
    eligibilityEn:
      'Citizens, residents, applicants for travel or work, and anyone needing lawful police verification or safety-related documentation.',
    eligibilityBn:
      'নাগরিক, বাসিন্দা, ভ্রমণ বা চাকরির আবেদনকারী এবং আইনসম্মত পুলিশ যাচাই বা নিরাপত্তা-সংক্রান্ত নথি প্রয়োজন এমন সবাই এই সেবার জন্য যোগ্য।',
    requiredDocumentsEn: ['NID or passport', 'Address proof', 'Photo', 'Application or incident details', 'Supporting evidence if available'],
    requiredDocumentsBn: ['এনআইডি বা পাসপোর্ট', 'ঠিকানার প্রমাণ', 'ছবি', 'আবেদন বা ঘটনার বিস্তারিত', 'থাকলে সহায়ক প্রমাণ'],
    applicationProcessEn: [
      'Select whether you need a GD, police clearance, complaint support, or verification help.',
      'Prepare the identity documents and written incident or application details.',
      'Use the official police portal if available or contact the relevant police station.',
      'Submit the request and complete fee payment where required.',
      'Follow up with the station or tracking system until the document or support is completed.',
    ],
    applicationProcessBn: [
      'জিডি, পুলিশ ক্লিয়ারেন্স, অভিযোগ সহায়তা নাকি যাচাই দরকার তা নির্বাচন করুন।',
      'পরিচয়পত্র ও লিখিত ঘটনা বা আবেদন সংক্রান্ত তথ্য প্রস্তুত করুন।',
      'সম্ভব হলে অফিসিয়াল পুলিশ পোর্টাল ব্যবহার করুন, না হলে সংশ্লিষ্ট থানায় যোগাযোগ করুন।',
      'অনুরোধ জমা দিন এবং প্রয়োজন হলে ফি পরিশোধ করুন।',
      'ডকুমেন্ট বা সহায়তা সম্পন্ন না হওয়া পর্যন্ত থানা বা ট্র্যাকিং সিস্টেমে অনুসরণ করুন।',
    ],
    feesEn: 'Emergency help is free. Clearance and some document-related services may have official fees.',
    feesBn: 'জরুরি সহায়তা বিনামূল্যে। ক্লিয়ারেন্স ও কিছু ডকুমেন্ট-সংক্রান্ত সেবায় সরকারি ফি লাগতে পারে।',
    processingTimeEn: 'Immediate for urgent safety support; several working days for certificates or verification.',
    processingTimeBn: 'জরুরি নিরাপত্তা সহায়তা তাৎক্ষণিক; সনদ বা যাচাইয়ের জন্য কয়েক কর্মদিবস লাগতে পারে।',
    faqs: [
      createFaq(
        'Can I apply for police clearance online?',
        'Yes, in many cases the official portal supports online police clearance requests.',
        'পুলিশ ক্লিয়ারেন্স কি অনলাইনে আবেদন করা যায়?',
        'হ্যাঁ, অনেক ক্ষেত্রে অফিসিয়াল পোর্টাল অনলাইনে পুলিশ ক্লিয়ারেন্স আবেদন গ্রহণ করে।',
      ),
      createFaq(
        'When should I file a GD?',
        'You should file a GD for loss reports, non-cognizable incidents, or to create an official record.',
        'কখন জিডি করা উচিত?',
        'হারানো জিনিস, নন-কগনাইজেবল ঘটনা বা অফিসিয়াল রেকর্ড তৈরির জন্য জিডি করা উচিত।',
      ),
    ],
  },
  {
    id: 'tax',
    aliases: ['tax', 'tax-etin', 'etin'],
    icon: 'Receipt',
    accent: 'bg-emerald-700',
    titleEn: 'Tax & eTIN',
    titleBn: 'কর ও ই-টিআইএন',
    descriptionEn: 'eTIN, tax return, tax payment, certificates, and taxpayer account guidance.',
    descriptionBn: 'ই-টিআইএন, ট্যাক্স রিটার্ন, কর পরিশোধ, সনদ ও করদাতা অ্যাকাউন্ট সহায়তা।',
    keywordsEn: ['tax', 'etin', 'tin', 'return', 'nbr', 'tax certificate'],
    keywordsBn: ['কর', 'ই-টিআইএন', 'টিআইএন', 'রিটার্ন', 'এনবিআর', 'কর সনদ'],
    detailRoute: '/services/tax',
    officialLink: 'https://etaxnbr.gov.bd/',
    onlineApplyLink: 'https://secure.incometax.gov.bd/TINHome',
    related: ['identity', 'trade-license', 'land'],
    overviewEn:
      'Tax services help individuals and businesses open eTIN accounts, submit returns, pay tax, request certificates, and maintain compliant taxpayer records.',
    overviewBn:
      'কর সেবা ব্যক্তি ও ব্যবসাকে ই-টিআইএন খোলা, রিটার্ন জমা, কর পরিশোধ, সনদ চাওয়া এবং করদাতা রেকর্ড হালনাগাদে সহায়তা করে।',
    eligibilityEn:
      'Individuals or organizations who need tax identification, annual return submission, or official tax-related certificates.',
    eligibilityBn:
      'কর শনাক্তকরণ, বার্ষিক রিটার্ন জমা বা সরকারি কর-সংক্রান্ত সনদ প্রয়োজন এমন ব্যক্তি বা প্রতিষ্ঠান এই সেবার জন্য যোগ্য।',
    requiredDocumentsEn: ['NID or business identity papers', 'Mobile number and email', 'Income and expense records', 'Bank or salary details'],
    requiredDocumentsBn: ['এনআইডি বা ব্যবসার পরিচয়পত্র', 'মোবাইল নম্বর ও ইমেইল', 'আয়-ব্যয়ের হিসাব', 'ব্যাংক বা বেতন তথ্য'],
    applicationProcessEn: [
      'Register or sign in to the tax portal with your taxpayer identity.',
      'Select the needed task such as eTIN registration, return filing, payment, or certificate request.',
      'Prepare income, expense, and asset information before completing the form.',
      'Submit the tax form, pay if necessary, and save the acknowledgement or receipt.',
      'Download the certificate or revisit the portal for future updates and compliance.',
    ],
    applicationProcessBn: [
      'করদাতা পরিচয় দিয়ে ট্যাক্স পোর্টালে নিবন্ধন করুন বা লগইন করুন।',
      'ই-টিআইএন নিবন্ধন, রিটার্ন দাখিল, পেমেন্ট বা সনদ অনুরোধের মতো প্রয়োজনীয় কাজ নির্বাচন করুন।',
      'ফরম পূরণের আগে আয়, ব্যয় ও সম্পদের তথ্য প্রস্তুত করুন।',
      'কর ফরম জমা দিন, প্রয়োজন হলে পরিশোধ করুন এবং রসিদ বা অ্যাকনলেজমেন্ট সংরক্ষণ করুন।',
      'সনদ ডাউনলোড করুন বা ভবিষ্যৎ আপডেট ও কমপ্লায়েন্সের জন্য আবার পোর্টাল ব্যবহার করুন।',
    ],
    feesEn: 'Registration is normally free. Payable tax, surcharge, or penalties depend on legal requirements.',
    feesBn: 'নিবন্ধন সাধারণত বিনামূল্যে। প্রদেয় কর, সারচার্জ বা জরিমানা আইনি নিয়ম অনুযায়ী নির্ধারিত হয়।',
    processingTimeEn: 'eTIN creation may be immediate; return review and certificate processing can take longer.',
    processingTimeBn: 'ই-টিআইএন সঙ্গে সঙ্গে তৈরি হতে পারে; রিটার্ন যাচাই ও সনদ প্রক্রিয়ায় বেশি সময় লাগতে পারে।',
    faqs: [
      createFaq(
        'Can I file a return without eTIN?',
        'Most taxpayers need an active TIN before filing a return through the portal.',
        'ই-টিআইএন ছাড়া কি রিটার্ন দেওয়া যায়?',
        'সাধারণত পোর্টালে রিটার্ন দেওয়ার আগে সক্রিয় টিআইএন প্রয়োজন হয়।',
      ),
      createFaq(
        'Where do I get a tax certificate?',
        'Use the official tax account dashboard and download the available certificate option if eligible.',
        'কর সনদ কোথা থেকে পাব?',
        'যোগ্য হলে অফিসিয়াল ট্যাক্স অ্যাকাউন্ট ড্যাশবোর্ড থেকে সনদের অপশন ব্যবহার করুন।',
      ),
    ],
  },
  {
    id: 'trade-license',
    aliases: ['trade-license', 'trade-license-business', 'business'],
    icon: 'Store',
    accent: 'bg-cyan-700',
    titleEn: 'Trade License & Business',
    titleBn: 'ট্রেড লাইসেন্স ও ব্যবসা',
    descriptionEn: 'Trade license, business setup paperwork, renewals, and local authority approvals.',
    descriptionBn: 'ট্রেড লাইসেন্স, ব্যবসা শুরুর কাগজপত্র, নবায়ন ও স্থানীয় কর্তৃপক্ষের অনুমোদন।',
    keywordsEn: ['trade license', 'business', 'renewal', 'city corporation', 'municipality', 'shop'],
    keywordsBn: ['ট্রেড লাইসেন্স', 'ব্যবসা', 'নবায়ন', 'সিটি করপোরেশন', 'পৌরসভা', 'দোকান'],
    detailRoute: '/services/trade-license',
    officialLink: 'https://bangladesh.gov.bd/',
    onlineApplyLink: '#',
    related: ['tax', 'utility', 'consumer-rights'],
    overviewEn:
      'Trade license and business services support new license applications, renewals, local permit coordination, and core business identity paperwork.',
    overviewBn:
      'ট্রেড লাইসেন্স ও ব্যবসা সেবা নতুন লাইসেন্স, নবায়ন, স্থানীয় পারমিট এবং ব্যবসার পরিচয় সংক্রান্ত মৌলিক কাগজপত্রে সহায়তা করে।',
    eligibilityEn:
      'Business owners, entrepreneurs, or authorized representatives operating within the relevant local government jurisdiction.',
    eligibilityBn:
      'সংশ্লিষ্ট স্থানীয় সরকার এলাকার মধ্যে ব্যবসা পরিচালনাকারী মালিক, উদ্যোক্তা বা অনুমোদিত প্রতিনিধিরা এই সেবার জন্য যোগ্য।',
    requiredDocumentsEn: ['Applicant NID', 'Business address proof', 'Ownership or rent papers', 'Photograph', 'TIN if required'],
    requiredDocumentsBn: ['আবেদনকারীর এনআইডি', 'ব্যবসার ঠিকানার প্রমাণ', 'মালিকানা বা ভাড়ার কাগজ', 'ছবি', 'প্রয়োজনে টিআইএন'],
    applicationProcessEn: [
      'Confirm the business type and the local authority responsible for the trade license.',
      'Collect the address proof, ownership or rent papers, and identity documents.',
      'Fill the official form and attach any supporting business information.',
      'Pay the local authority fee and attend inspection or verification if required.',
      'Collect the license and remember the renewal period for future compliance.',
    ],
    applicationProcessBn: [
      'ব্যবসার ধরন ও ট্রেড লাইসেন্সের জন্য দায়িত্বশীল স্থানীয় কর্তৃপক্ষ নিশ্চিত করুন।',
      'ঠিকানার প্রমাণ, মালিকানা বা ভাড়ার কাগজ এবং পরিচয়পত্র সংগ্রহ করুন।',
      'অফিসিয়াল ফরম পূরণ করে প্রয়োজনীয় ব্যবসায়িক তথ্য সংযুক্ত করুন।',
      'স্থানীয় কর্তৃপক্ষের ফি পরিশোধ করুন এবং প্রয়োজনে পরিদর্শন বা যাচাই সম্পন্ন করুন।',
      'লাইসেন্স সংগ্রহ করুন এবং পরবর্তী কমপ্লায়েন্সের জন্য নবায়নের সময় মনে রাখুন।',
    ],
    feesEn: 'Fees vary by business category, signboard size, area, and local office rules.',
    feesBn: 'ব্যবসার ধরন, সাইনবোর্ডের আকার, এলাকা ও স্থানীয় অফিসের নিয়ম অনুযায়ী ফি ভিন্ন হয়।',
    processingTimeEn: 'Usually a few working days to a few weeks depending on local review and inspection.',
    processingTimeBn: 'স্থানীয় যাচাই ও পরিদর্শনের ওপর নির্ভর করে কয়েক কর্মদিবস থেকে কয়েক সপ্তাহ পর্যন্ত লাগতে পারে।',
    faqs: [
      createFaq(
        'Is trade license the same as TIN?',
        'No. Trade license and TIN are different requirements, though businesses often need both.',
        'ট্রেড লাইসেন্স আর টিআইএন কি একই?',
        'না। ট্রেড লাইসেন্স ও টিআইএন আলাদা বিষয়, যদিও ব্যবসার জন্য অনেক সময় দুটিই প্রয়োজন হয়।',
      ),
      createFaq(
        'Can home businesses apply?',
        'Yes, if the local authority allows that business type at the registered address.',
        'বাসা থেকে পরিচালিত ব্যবসা কি আবেদন করতে পারে?',
        'হ্যাঁ, যদি স্থানীয় কর্তৃপক্ষ নিবন্ধিত ঠিকানায় ওই ব্যবসা অনুমোদন করে।',
      ),
    ],
  },
  {
    id: 'health',
    aliases: ['health'],
    icon: 'HeartPulse',
    accent: 'bg-rose-700',
    titleEn: 'Health',
    titleBn: 'স্বাস্থ্য',
    descriptionEn: 'Hospital services, vaccination, patient support, and public health guidance.',
    descriptionBn: 'হাসপাতাল সেবা, টিকাদান, রোগী সহায়তা ও জনস্বাস্থ্য নির্দেশনা।',
    keywordsEn: ['health', 'hospital', 'vaccine', 'doctor', 'medical', 'patient'],
    keywordsBn: ['স্বাস্থ্য', 'হাসপাতাল', 'টিকা', 'ডাক্তার', 'মেডিকেল', 'রোগী'],
    detailRoute: '/services/health',
    officialLink: 'https://www.dghs.gov.bd/',
    onlineApplyLink: '#',
    related: ['identity', 'social-welfare', 'emergency-services'],
    overviewEn:
      'Health services guide citizens to public hospitals, vaccination programs, appointments, reports, referrals, and urgent health support channels.',
    overviewBn:
      'স্বাস্থ্য সেবা নাগরিকদের সরকারি হাসপাতাল, টিকাদান কর্মসূচি, অ্যাপয়েন্টমেন্ট, রিপোর্ট, রেফারেল ও জরুরি স্বাস্থ্য সহায়তার পথে নির্দেশনা দেয়।',
    eligibilityEn:
      'Patients, guardians, caregivers, or citizens seeking public health information and facility access.',
    eligibilityBn:
      'রোগী, অভিভাবক, সেবাদানকারী বা সরকারি স্বাস্থ্য তথ্য ও সেবাপ্রাপ্তি প্রয়োজন এমন নাগরিকরা যোগ্য।',
    requiredDocumentsEn: ['Patient identity', 'Previous prescription or report', 'Referral paper if relevant', 'Vaccination record where applicable'],
    requiredDocumentsBn: ['রোগীর পরিচয়পত্র', 'আগের প্রেসক্রিপশন বা রিপোর্ট', 'প্রয়োজনে রেফারেল কাগজ', 'প্রযোজ্য হলে টিকাদান রেকর্ড'],
    applicationProcessEn: [
      'Identify whether you need emergency care, appointment support, vaccination, or report guidance.',
      'Contact the appropriate facility or program and review any admission requirements.',
      'Prepare identity, prior medical reports, and referral notes if needed.',
      'Attend the hospital, clinic, or health center at the scheduled time.',
      'Collect prescriptions, reports, or follow-up instructions and keep them for future visits.',
    ],
    applicationProcessBn: [
      'জরুরি সেবা, অ্যাপয়েন্টমেন্ট, টিকাদান নাকি রিপোর্ট সহায়তা দরকার তা নির্ধারণ করুন।',
      'সংশ্লিষ্ট হাসপাতাল বা কর্মসূচির সাথে যোগাযোগ করুন এবং ভর্তি বা সেবার শর্ত জেনে নিন।',
      'প্রয়োজনে পরিচয়পত্র, আগের মেডিকেল রিপোর্ট ও রেফারেল প্রস্তুত করুন।',
      'নির্ধারিত সময়ে হাসপাতাল, ক্লিনিক বা স্বাস্থ্যকেন্দ্রে উপস্থিত হন।',
      'প্রেসক্রিপশন, রিপোর্ট বা ফলো-আপ নির্দেশনা সংগ্রহ করে ভবিষ্যতের জন্য সংরক্ষণ করুন।',
    ],
    feesEn: 'Public health support may be free or subsidized, while tests or facility services vary by provider.',
    feesBn: 'সরকারি স্বাস্থ্য সহায়তা বিনামূল্যে বা ভর্তুকিযুক্ত হতে পারে, তবে পরীক্ষা বা প্রতিষ্ঠানের ফি ভিন্ন হতে পারে।',
    processingTimeEn: 'Emergency support is immediate; appointments and reports depend on facility capacity.',
    processingTimeBn: 'জরুরি সহায়তা তাৎক্ষণিক; অ্যাপয়েন্টমেন্ট ও রিপোর্ট প্রতিষ্ঠানের সক্ষমতার ওপর নির্ভর করে।',
    faqs: [
      createFaq(
        'Can I get vaccine information online?',
        'Yes. Public health authorities often publish vaccination schedules and guidance online.',
        'টিকার তথ্য কি অনলাইনে পাওয়া যায়?',
        'হ্যাঁ। জনস্বাস্থ্য কর্তৃপক্ষ প্রায়ই টিকাদানের সময়সূচি ও নির্দেশনা অনলাইনে প্রকাশ করে।',
      ),
      createFaq(
        'Do all hospitals require referrals?',
        'No. Referral requirements vary by facility and treatment type.',
        'সব হাসপাতালে কি রেফারেল লাগে?',
        'না। রেফারেলের প্রয়োজন হাসপাতাল ও চিকিৎসার ধরন অনুযায়ী ভিন্ন হতে পারে।',
      ),
    ],
  },
  {
    id: 'education',
    aliases: ['education'],
    icon: 'GraduationCap',
    accent: 'bg-indigo-700',
    titleEn: 'Education',
    titleBn: 'শিক্ষা',
    descriptionEn: 'Admission, board results, certificates, scholarships, and student service support.',
    descriptionBn: 'ভর্তি, বোর্ড ফলাফল, সনদ, বৃত্তি ও শিক্ষার্থী সেবা সহায়তা।',
    keywordsEn: ['education', 'admission', 'result', 'certificate', 'scholarship', 'student'],
    keywordsBn: ['শিক্ষা', 'ভর্তি', 'ফলাফল', 'সনদ', 'বৃত্তি', 'শিক্ষার্থী'],
    detailRoute: '/services/education',
    officialLink: 'https://educationboard.gov.bd/',
    onlineApplyLink: '#',
    related: ['identity', 'jobs', 'social-welfare'],
    overviewEn:
      'Education services help students and guardians access admissions, board results, transcript support, scholarship information, and certificate correction guidance.',
    overviewBn:
      'শিক্ষা সেবা শিক্ষার্থী ও অভিভাবকদের ভর্তি, বোর্ড ফলাফল, ট্রান্সক্রিপ্ট, বৃত্তির তথ্য ও সনদ সংশোধন নির্দেশনায় সহায়তা করে।',
    eligibilityEn:
      'Students, guardians, educational institutions, or applicants meeting the criteria of the selected education service.',
    eligibilityBn:
      'নির্বাচিত শিক্ষা সেবার শর্ত পূরণকারী শিক্ষার্থী, অভিভাবক, শিক্ষাপ্রতিষ্ঠান বা আবেদনকারীরা যোগ্য।',
    requiredDocumentsEn: ['Student registration or roll information', 'Admit card or transcript', 'Birth certificate or NID', 'Payment receipt if required'],
    requiredDocumentsBn: ['শিক্ষার্থীর রেজিস্ট্রেশন বা রোল তথ্য', 'অ্যাডমিট কার্ড বা ট্রান্সক্রিপ্ট', 'জন্ম নিবন্ধন বা এনআইডি', 'প্রয়োজনে ফি রসিদ'],
    applicationProcessEn: [
      'Choose whether you need admission support, result access, scholarship information, or certificate service.',
      'Collect student registration details and all supporting academic records.',
      'Use the official board, university, or ministry website when online services are available.',
      'Submit the request, pay the official fee if required, and store your receipt.',
      'Download the result or collect the corrected certificate once processing is complete.',
    ],
    applicationProcessBn: [
      'ভর্তি, ফলাফল, বৃত্তির তথ্য নাকি সনদ সেবা দরকার তা নির্বাচন করুন।',
      'শিক্ষার্থীর রেজিস্ট্রেশন তথ্য ও সহায়ক একাডেমিক নথি সংগ্রহ করুন।',
      'অনলাইন সেবা থাকলে অফিসিয়াল বোর্ড, বিশ্ববিদ্যালয় বা মন্ত্রণালয়ের ওয়েবসাইট ব্যবহার করুন।',
      'অনুরোধ জমা দিন, প্রয়োজন হলে সরকারি ফি পরিশোধ করুন এবং রসিদ সংরক্ষণ করুন।',
      'প্রক্রিয়া শেষ হলে ফলাফল ডাউনলোড করুন বা সংশোধিত সনদ সংগ্রহ করুন।',
    ],
    feesEn: 'Result viewing is usually free; transcript, certificate, correction, or admission processing may require official fees.',
    feesBn: 'ফলাফল দেখা সাধারণত বিনামূল্যে; ট্রান্সক্রিপ্ট, সনদ, সংশোধন বা ভর্তি প্রক্রিয়ায় সরকারি ফি লাগতে পারে।',
    processingTimeEn: 'Online results may be instant, while certificate or correction services may take several working days.',
    processingTimeBn: 'অনলাইন ফলাফল তাৎক্ষণিক হতে পারে, কিন্তু সনদ বা সংশোধনের সেবা কয়েক কর্মদিবস লাগতে পারে।',
    faqs: [
      createFaq(
        'Can I correct my board certificate?',
        'Yes, board-specific correction procedures exist and usually require supporting evidence.',
        'বোর্ড সনদ কি সংশোধন করা যায়?',
        'হ্যাঁ, বোর্ডভিত্তিক সংশোধন পদ্ধতি আছে এবং সাধারণত সহায়ক প্রমাণ লাগে।',
      ),
      createFaq(
        'Where can I see board results?',
        'Use the official board or ministry result portal for the latest published results.',
        'বোর্ডের ফলাফল কোথায় দেখা যাবে?',
        'সর্বশেষ প্রকাশিত ফলের জন্য অফিসিয়াল বোর্ড বা মন্ত্রণালয়ের রেজাল্ট পোর্টাল ব্যবহার করুন।',
      ),
    ],
  },
  {
    id: 'jobs',
    aliases: ['jobs', 'government-jobs', 'job'],
    icon: 'Briefcase',
    accent: 'bg-violet-700',
    titleEn: 'Government Jobs',
    titleBn: 'সরকারি চাকরি',
    descriptionEn: 'Government recruitment, circulars, admit cards, exams, and application support.',
    descriptionBn: 'সরকারি নিয়োগ, সার্কুলার, অ্যাডমিট কার্ড, পরীক্ষা ও আবেদন সহায়তা।',
    keywordsEn: ['government jobs', 'job circular', 'admit card', 'exam', 'recruitment', 'bcs'],
    keywordsBn: ['সরকারি চাকরি', 'জব সার্কুলার', 'অ্যাডমিট কার্ড', 'পরীক্ষা', 'নিয়োগ', 'বিসিএস'],
    detailRoute: '/services/jobs',
    officialLink: 'https://bpsc.gov.bd/',
    onlineApplyLink: '#',
    related: ['education', 'identity', 'probashi'],
    overviewEn:
      'Government job services help applicants track circulars, complete online applications, prepare admit-card requirements, and understand the exam and result flow.',
    overviewBn:
      'সরকারি চাকরির সেবা আবেদনকারীদের সার্কুলার দেখা, অনলাইন আবেদন, অ্যাডমিট কার্ডের শর্ত এবং পরীক্ষা ও ফলাফলের ধারা বুঝতে সহায়তা করে।',
    eligibilityEn:
      'Applicants who meet age, citizenship, education, quota, and skill conditions mentioned in the official circular.',
    eligibilityBn:
      'অফিসিয়াল সার্কুলারে উল্লেখিত বয়স, নাগরিকত্ব, শিক্ষা, কোটা ও দক্ষতার শর্ত পূরণকারী আবেদনকারীরা যোগ্য।',
    requiredDocumentsEn: ['NID or birth certificate', 'Educational certificates', 'Photograph and signature', 'Experience certificate if required'],
    requiredDocumentsBn: ['এনআইডি বা জন্ম নিবন্ধন', 'শিক্ষাগত সনদ', 'ছবি ও স্বাক্ষর', 'প্রয়োজনে অভিজ্ঞতার সনদ'],
    applicationProcessEn: [
      'Read the circular carefully and confirm your eligibility before applying.',
      'Prepare the scanned photo, signature, and all academic or quota documents.',
      'Complete the online application within the deadline and save the applicant copy.',
      'Pay the official fee through the approved payment channel.',
      'Download the admit card, sit for the exam, and track result or viva updates officially.',
    ],
    applicationProcessBn: [
      'আবেদন করার আগে সার্কুলার ভালোভাবে পড়ে নিজের যোগ্যতা নিশ্চিত করুন।',
      'স্ক্যান করা ছবি, স্বাক্ষর এবং একাডেমিক বা কোটা সংক্রান্ত নথি প্রস্তুত করুন।',
      'সময়সীমার মধ্যে অনলাইন আবেদন সম্পন্ন করে আবেদনকারীর কপি সংরক্ষণ করুন।',
      'অনুমোদিত মাধ্যমে সরকারি ফি পরিশোধ করুন।',
      'অ্যাডমিট কার্ড ডাউনলোড করুন, পরীক্ষায় অংশ নিন এবং ফল বা ভাইভা আপডেট অফিসিয়ালি অনুসরণ করুন।',
    ],
    feesEn: 'Application fees depend on the recruiting authority and the circular rules.',
    feesBn: 'আবেদন ফি নিয়োগকারী কর্তৃপক্ষ ও সার্কুলারের নিয়ম অনুযায়ী নির্ধারিত হয়।',
    processingTimeEn: 'Follows the published schedule from application deadline to exam, result, and final recruitment.',
    processingTimeBn: 'আবেদন শেষ হওয়ার সময় থেকে পরীক্ষা, ফলাফল ও চূড়ান্ত নিয়োগ পর্যন্ত প্রকাশিত সময়সূচি অনুসরণ করে।',
    faqs: [
      createFaq(
        'Can I edit an application after submission?',
        'Usually no. Review carefully before final submission unless the portal specifically allows correction.',
        'আবেদন জমার পর কি সম্পাদনা করা যায়?',
        'সাধারণত না। পোর্টাল বিশেষভাবে সুযোগ না দিলে চূড়ান্ত জমার আগে ভালোভাবে যাচাই করুন।',
      ),
      createFaq(
        'Where do I get the admit card?',
        'Admit cards are usually published on the same official recruitment portal used for application.',
        'অ্যাডমিট কার্ড কোথা থেকে পাব?',
        'অ্যাডমিট কার্ড সাধারণত আবেদন করা একই অফিসিয়াল নিয়োগ পোর্টালেই প্রকাশ করা হয়।',
      ),
    ],
  },
  {
    id: 'probashi',
    aliases: ['probashi', 'probashi-services', 'migration'],
    icon: 'Plane',
    accent: 'bg-teal-700',
    titleEn: 'Probashi Services',
    titleBn: 'প্রবাসী সেবা',
    descriptionEn: 'Migration support, overseas worker registration, welfare, and expatriate assistance.',
    descriptionBn: 'অভিবাসন সহায়তা, বিদেশগামী কর্মী নিবন্ধন, কল্যাণ ও প্রবাসী সহায়তা।',
    keywordsEn: ['probashi', 'migrant', 'overseas', 'expatriate', 'bmew', 'bmet'],
    keywordsBn: ['প্রবাসী', 'অভিবাসন', 'বিদেশগামী', 'ওভারসিজ', 'বিএমইটি', 'কল্যাণ'],
    detailRoute: '/services/probashi',
    officialLink: 'https://probashi.gov.bd/',
    onlineApplyLink: '#',
    related: ['passport', 'jobs', 'identity'],
    overviewEn:
      'Probashi services support overseas job seekers and expatriates with migration readiness, registration, welfare, training, and document-related assistance.',
    overviewBn:
      'প্রবাসী সেবা বিদেশগামী চাকরিপ্রার্থী ও প্রবাসীদের অভিবাসন প্রস্তুতি, নিবন্ধন, কল্যাণ, প্রশিক্ষণ ও নথি সহায়তায় সাহায্য করে।',
    eligibilityEn:
      'Bangladeshi migrants, overseas job applicants, expatriates, or their family members who need official migration or welfare support.',
    eligibilityBn:
      'সরকারি অভিবাসন বা কল্যাণ সহায়তা প্রয়োজন এমন বাংলাদেশি অভিবাসী, বিদেশগামী চাকরিপ্রার্থী, প্রবাসী বা তাদের পরিবারের সদস্যরা যোগ্য।',
    requiredDocumentsEn: ['Passport or NID', 'Visa or employment contract if available', 'Training certificate when required', 'Emergency contact details'],
    requiredDocumentsBn: ['পাসপোর্ট বা এনআইডি', 'থাকলে ভিসা বা চাকরির চুক্তি', 'প্রয়োজনে প্রশিক্ষণ সনদ', 'জরুরি যোগাযোগের তথ্য'],
    applicationProcessEn: [
      'Identify whether you need registration, welfare support, migration training, or complaint help.',
      'Prepare passport, job offer, visa papers, and related identity documents.',
      'Use the official migration or probashi support channel for your request.',
      'Attend briefing, training, or verification as required by the authority.',
      'Keep all travel and welfare records available for follow-up and support.',
    ],
    applicationProcessBn: [
      'নিবন্ধন, কল্যাণ সহায়তা, অভিবাসন প্রশিক্ষণ নাকি অভিযোগ সহায়তা দরকার তা নির্ধারণ করুন।',
      'পাসপোর্ট, চাকরির অফার, ভিসা নথি ও সম্পর্কিত পরিচয়পত্র প্রস্তুত করুন।',
      'অনুরোধের জন্য অফিসিয়াল অভিবাসন বা প্রবাসী সহায়তা চ্যানেল ব্যবহার করুন।',
      'কর্তৃপক্ষ চাইলে ব্রিফিং, প্রশিক্ষণ বা যাচাইয়ে অংশ নিন।',
      'ফলো-আপ ও সহায়তার জন্য সব ভ্রমণ ও কল্যাণ নথি সংরক্ষণ করুন।',
    ],
    feesEn: 'Registration, training, or welfare-related fees depend on the program and official schedule.',
    feesBn: 'নিবন্ধন, প্রশিক্ষণ বা কল্যাণ-সংক্রান্ত ফি কর্মসূচি ও সরকারি সময়সূচির ওপর নির্ভর করে।',
    processingTimeEn: 'Some registrations are quick, while training, verification, and support cases may take longer.',
    processingTimeBn: 'কিছু নিবন্ধন দ্রুত হয়, তবে প্রশিক্ষণ, যাচাই ও সহায়তা-সংক্রান্ত কাজে বেশি সময় লাগতে পারে।',
    faqs: [
      createFaq(
        'Do I need BMET registration before travel?',
        'For many overseas employment channels, registration or official clearance is an important requirement.',
        'বিদেশ যাওয়ার আগে কি বিএমইটি নিবন্ধন লাগে?',
        'অনেক বিদেশগামী কর্মসংস্থান প্রক্রিয়ায় নিবন্ধন বা সরকারি ক্লিয়ারেন্স গুরুত্বপূর্ণ শর্ত।',
      ),
      createFaq(
        'Can family members seek welfare help?',
        'Yes. Families may contact the official welfare channels in many support cases.',
        'পরিবারের সদস্যরা কি কল্যাণ সহায়তা চাইতে পারে?',
        'হ্যাঁ। অনেক ক্ষেত্রে পরিবারের সদস্যরাও অফিসিয়াল কল্যাণ চ্যানেলে যোগাযোগ করতে পারেন।',
      ),
    ],
  },
  {
    id: 'utility',
    aliases: ['utility', 'utility-bills', 'bills'],
    icon: 'Lightbulb',
    accent: 'bg-yellow-600',
    titleEn: 'Utility Bills',
    titleBn: 'ইউটিলিটি বিল',
    descriptionEn: 'Electricity, gas, water, bill payment, new connection, and complaint support.',
    descriptionBn: 'বিদ্যুৎ, গ্যাস, পানি, বিল পরিশোধ, নতুন সংযোগ ও অভিযোগ সহায়তা।',
    keywordsEn: ['utility', 'bill', 'electricity', 'gas', 'water', 'meter', 'connection'],
    keywordsBn: ['ইউটিলিটি', 'বিল', 'বিদ্যুৎ', 'গ্যাস', 'পানি', 'মিটার', 'সংযোগ'],
    detailRoute: '/services/utility',
    officialLink: 'https://bangladesh.gov.bd/',
    onlineApplyLink: '#',
    related: ['trade-license', 'land', 'consumer-rights'],
    overviewEn:
      'Utility bill services cover bill payment, new meter or connection requests, reconnection support, complaint submission, and provider contact guidance.',
    overviewBn:
      'ইউটিলিটি বিল সেবায় বিল পরিশোধ, নতুন মিটার বা সংযোগ, পুনঃসংযোগ, অভিযোগ এবং সেবাদাতা প্রতিষ্ঠানের যোগাযোগ নির্দেশনা অন্তর্ভুক্ত।',
    eligibilityEn:
      'Households, tenants, owners, and businesses within the service area of the relevant provider.',
    eligibilityBn:
      'সংশ্লিষ্ট সেবাদাতা প্রতিষ্ঠানের সেবা এলাকায় থাকা পরিবার, ভাড়াটিয়া, মালিক ও ব্যবসাপ্রতিষ্ঠান এই সেবার জন্য যোগ্য।',
    requiredDocumentsEn: ['NID', 'Address proof', 'Ownership or rental document', 'Previous bill if available', 'Mobile number'],
    requiredDocumentsBn: ['এনআইডি', 'ঠিকানার প্রমাণ', 'মালিকানা বা ভাড়ার কাগজ', 'থাকলে আগের বিল', 'মোবাইল নম্বর'],
    applicationProcessEn: [
      'Identify whether you need bill payment, new connection, meter support, or complaint service.',
      'Collect your customer number, address documents, and prior bills if available.',
      'Use the provider portal, payment channel, or office process as instructed.',
      'Submit the complaint or application and store the receipt or ticket number.',
      'Follow up until the provider confirms payment, installation, or issue resolution.',
    ],
    applicationProcessBn: [
      'বিল পরিশোধ, নতুন সংযোগ, মিটার সহায়তা নাকি অভিযোগ সেবা দরকার তা নির্ধারণ করুন।',
      'কাস্টমার নম্বর, ঠিকানার কাগজ এবং থাকলে আগের বিল সংগ্রহ করুন।',
      'নির্দেশনা অনুযায়ী সেবাদাতা পোর্টাল, পেমেন্ট চ্যানেল বা অফিস প্রক্রিয়া ব্যবহার করুন।',
      'অভিযোগ বা আবেদন জমা দিয়ে রসিদ বা টিকিট নম্বর সংরক্ষণ করুন।',
      'পেমেন্ট, ইনস্টলেশন বা সমস্যা সমাধান নিশ্চিত না হওয়া পর্যন্ত অনুসরণ করুন।',
    ],
    feesEn: 'Bill amounts, deposits, connection charges, and meter fees depend on the provider and tariff.',
    feesBn: 'বিলের পরিমাণ, ডিপোজিট, সংযোগ চার্জ ও মিটার ফি সেবাদাতা ও ট্যারিফ অনুযায়ী নির্ধারিত হয়।',
    processingTimeEn: 'Payments may be immediate; new connections and technical complaints can take days or weeks.',
    processingTimeBn: 'পেমেন্ট তাৎক্ষণিক হতে পারে; নতুন সংযোগ ও কারিগরি অভিযোগে কয়েক দিন বা সপ্তাহ লাগতে পারে।',
    faqs: [
      createFaq(
        'Can I pay utility bills online?',
        'Yes, many providers support online or mobile-based bill payment channels.',
        'ইউটিলিটি বিল কি অনলাইনে দেওয়া যায়?',
        'হ্যাঁ, অনেক সেবাদাতা অনলাইন বা মোবাইলভিত্তিক বিল পরিশোধ সাপোর্ট করে।',
      ),
      createFaq(
        'How do I report a faulty meter?',
        'Use the provider complaint channel and keep the complaint number for follow-up.',
        'ত্রুটিপূর্ণ মিটার কীভাবে জানাব?',
        'সেবাদাতার অভিযোগ চ্যানেল ব্যবহার করুন এবং ফলো-আপের জন্য অভিযোগ নম্বর সংরক্ষণ করুন।',
      ),
    ],
  },
  {
    id: 'social-welfare',
    aliases: ['social-welfare'],
    icon: 'HandHeart',
    accent: 'bg-pink-700',
    titleEn: 'Social Welfare',
    titleBn: 'সামাজিক কল্যাণ',
    descriptionEn: 'Allowances, disability support, senior citizen support, and welfare program guidance.',
    descriptionBn: 'ভাতা, প্রতিবন্ধী সহায়তা, প্রবীণ সহায়তা ও কল্যাণ কর্মসূচির নির্দেশনা।',
    keywordsEn: ['social welfare', 'allowance', 'disability', 'elderly', 'grant', 'benefit'],
    keywordsBn: ['সামাজিক কল্যাণ', 'ভাতা', 'প্রতিবন্ধী', 'প্রবীণ', 'অনুদান', 'সুবিধা'],
    detailRoute: '/services/social-welfare',
    officialLink: 'https://dss.gov.bd/',
    onlineApplyLink: '#',
    related: ['health', 'identity', 'education'],
    overviewEn:
      'Social welfare services guide eligible citizens through allowance programs, disability support, senior citizen benefits, social safety-net registration, and welfare payments.',
    overviewBn:
      'সামাজিক কল্যাণ সেবা যোগ্য নাগরিকদের ভাতা, প্রতিবন্ধী সহায়তা, প্রবীণ সুবিধা, সামাজিক নিরাপত্তা কর্মসূচি ও কল্যাণ পেমেন্টে সহায়তা করে।',
    eligibilityEn:
      'Eligible elderly people, persons with disabilities, widows, vulnerable households, or other approved beneficiaries under welfare programs.',
    eligibilityBn:
      'ভাতা বা কল্যাণ কর্মসূচির অধীনে যোগ্য প্রবীণ, প্রতিবন্ধী ব্যক্তি, বিধবা, ঝুঁকিপূর্ণ পরিবার বা অন্যান্য অনুমোদিত উপকারভোগীরা যোগ্য।',
    requiredDocumentsEn: ['NID or birth certificate', 'Recent photo', 'Bank or mobile account details', 'Program-specific verification papers'],
    requiredDocumentsBn: ['এনআইডি বা জন্ম নিবন্ধন', 'সাম্প্রতিক ছবি', 'ব্যাংক বা মোবাইল অ্যাকাউন্টের তথ্য', 'কর্মসূচিভিত্তিক যাচাই নথি'],
    applicationProcessEn: [
      'Identify the welfare program that matches your condition or household status.',
      'Collect the required identity and verification papers for the selected benefit.',
      'Apply through the local social service office or approved registration channel.',
      'Complete local verification and beneficiary selection steps.',
      'Track payment or status updates through the responsible authority.',
    ],
    applicationProcessBn: [
      'আপনার অবস্থা বা পরিবারের জন্য উপযুক্ত কল্যাণ কর্মসূচি নির্ধারণ করুন।',
      'নির্বাচিত সুবিধার জন্য প্রয়োজনীয় পরিচয় ও যাচাই নথি সংগ্রহ করুন।',
      'স্থানীয় সমাজসেবা অফিস বা অনুমোদিত নিবন্ধন চ্যানেলে আবেদন করুন।',
      'স্থানীয় যাচাই ও উপকারভোগী নির্বাচনের ধাপ সম্পন্ন করুন।',
      'দায়িত্বপ্রাপ্ত কর্তৃপক্ষের মাধ্যমে পেমেন্ট বা স্ট্যাটাস আপডেট অনুসরণ করুন।',
    ],
    feesEn: 'Official welfare applications should not require unofficial fees. Program benefits follow government rules.',
    feesBn: 'সরকারি কল্যাণ আবেদন করতে অনানুষ্ঠানিক ফি লাগার কথা নয়। সুবিধার পরিমাণ সরকারি নিয়ম অনুযায়ী নির্ধারিত হয়।',
    processingTimeEn: 'Selection and payment cycles depend on local verification and program scheduling.',
    processingTimeBn: 'স্থানীয় যাচাই ও কর্মসূচির সময়সূচি অনুযায়ী নির্বাচন ও পেমেন্ট চক্র নির্ভর করে।',
    faqs: [
      createFaq(
        'Can one person receive multiple allowances?',
        'That depends on program rules. Some benefits can overlap, while others are restricted.',
        'একজন কি একাধিক ভাতা পেতে পারে?',
        'এটি কর্মসূচির নিয়মের ওপর নির্ভর করে। কিছু সুবিধা একসাথে পাওয়া যায়, কিছু ক্ষেত্রে সীমাবদ্ধতা থাকে।',
      ),
      createFaq(
        'How is beneficiary selection done?',
        'Selection usually involves document review and local verification by the relevant authority.',
        'উপকারভোগী নির্বাচন কীভাবে হয়?',
        'সাধারণত নথি যাচাই ও স্থানীয় কর্তৃপক্ষের ভেরিফিকেশনের মাধ্যমে নির্বাচন করা হয়।',
      ),
    ],
  },
  {
    id: 'agriculture',
    aliases: ['agriculture'],
    icon: 'Sprout',
    accent: 'bg-lime-700',
    titleEn: 'Agriculture',
    titleBn: 'কৃষি',
    descriptionEn: 'Farmer support, crop advisory, subsidies, agricultural cards, and extension services.',
    descriptionBn: 'কৃষক সহায়তা, ফসল পরামর্শ, ভর্তুকি, কৃষি কার্ড ও সম্প্রসারণ সেবা।',
    keywordsEn: ['agriculture', 'farmer', 'crop', 'seed', 'fertilizer', 'subsidy', 'krishi'],
    keywordsBn: ['কৃষি', 'কৃষক', 'ফসল', 'বীজ', 'সার', 'ভর্তুকি', 'কৃষি কার্ড'],
    detailRoute: '/services/agriculture',
    officialLink: 'https://dae.gov.bd/',
    onlineApplyLink: '#',
    related: ['social-welfare', 'consumer-rights', 'utility'],
    overviewEn:
      'Agriculture services guide farmers through crop support, subsidy programs, agricultural cards, extension office help, irrigation coordination, and seasonal advisories.',
    overviewBn:
      'কৃষি সেবা কৃষকদের ফসল সহায়তা, ভর্তুকি, কৃষি কার্ড, সম্প্রসারণ অফিস, সেচ সমন্বয় ও মৌসুমি পরামর্শে দিকনির্দেশনা দেয়।',
    eligibilityEn:
      'Farmers, farm households, agricultural entrepreneurs, or cooperatives seeking official agricultural support or extension services.',
    eligibilityBn:
      'সরকারি কৃষি সহায়তা বা সম্প্রসারণ সেবা প্রয়োজন এমন কৃষক, কৃষিপরিবার, কৃষি উদ্যোক্তা বা সমবায়গুলো এই সেবার জন্য যোগ্য।',
    requiredDocumentsEn: ['NID', 'Farmer or land information', 'Mobile number', 'Agricultural program documents if applicable'],
    requiredDocumentsBn: ['এনআইডি', 'কৃষক বা জমির তথ্য', 'মোবাইল নম্বর', 'প্রযোজ্য হলে কৃষি কর্মসূচির নথি'],
    applicationProcessEn: [
      'Identify whether you need advisory support, subsidy help, seed or fertilizer direction, or registration.',
      'Collect your farmer identity, land or production details, and contact information.',
      'Contact the upazila agriculture office or the relevant agricultural support channel.',
      'Submit the request and join field verification or training if required.',
      'Follow the official update for support approval, distribution, or advisory follow-up.',
    ],
    applicationProcessBn: [
      'পরামর্শ, ভর্তুকি, বীজ/সার সহায়তা বা নিবন্ধন—কোন সেবা দরকার তা নির্ধারণ করুন।',
      'কৃষক পরিচয়, জমি বা উৎপাদন তথ্য এবং যোগাযোগের বিবরণ সংগ্রহ করুন।',
      'উপজেলা কৃষি অফিস বা সংশ্লিষ্ট কৃষি সহায়তা চ্যানেলে যোগাযোগ করুন।',
      'অনুরোধ জমা দিন এবং প্রয়োজন হলে মাঠ যাচাই বা প্রশিক্ষণে অংশ নিন।',
      'সহায়তা অনুমোদন, বিতরণ বা পরবর্তী পরামর্শের জন্য অফিসিয়াল আপডেট অনুসরণ করুন।',
    ],
    feesEn: 'Most advisory services are free. Some inputs or registrations may follow official program fees or deposits.',
    feesBn: 'বেশিরভাগ পরামর্শ সেবা বিনামূল্যে। কিছু ইনপুট বা নিবন্ধনে সরকারি কর্মসূচি অনুযায়ী ফি বা ডিপোজিট থাকতে পারে।',
    processingTimeEn: 'Advisory help may be immediate, while subsidy or program approval takes longer.',
    processingTimeBn: 'পরামর্শ দ্রুত পাওয়া যেতে পারে, তবে ভর্তুকি বা কর্মসূচি অনুমোদনে বেশি সময় লাগে।',
    faqs: [
      createFaq(
        'Can I get fertilizer support through the office?',
        'Depending on the season and program, local agriculture offices may guide you on approved support channels.',
        'অফিসের মাধ্যমে কি সারের সহায়তা পাওয়া যায়?',
        'মৌসুম ও কর্মসূচি অনুযায়ী স্থানীয় কৃষি অফিস অনুমোদিত সহায়তা চ্যানেল সম্পর্কে দিকনির্দেশনা দিতে পারে।',
      ),
      createFaq(
        'Do I need land ownership for all programs?',
        'Not always. Some programs accept sharecroppers or farm workers with local verification.',
        'সব কর্মসূচির জন্য কি জমির মালিকানা লাগে?',
        'সবসময় নয়। কিছু কর্মসূচিতে স্থানীয় যাচাই সাপেক্ষে বর্গাচাষি বা কৃষিশ্রমিকরাও অন্তর্ভুক্ত হতে পারে।',
      ),
    ],
  },
  {
    id: 'consumer-rights',
    aliases: ['consumer-rights', 'consumer-rights-services', 'consumer'],
    icon: 'BadgeAlert',
    accent: 'bg-orange-700',
    titleEn: 'Consumer Rights',
    titleBn: 'ভোক্তা অধিকার',
    descriptionEn: 'Consumer complaints, market issues, service fraud, and rights protection guidance.',
    descriptionBn: 'ভোক্তা অভিযোগ, বাজার সমস্যা, সেবায় প্রতারণা ও অধিকার সুরক্ষা নির্দেশনা।',
    keywordsEn: ['consumer rights', 'complaint', 'fraud', 'overcharge', 'product issue', 'market'],
    keywordsBn: ['ভোক্তা অধিকার', 'অভিযোগ', 'প্রতারণা', 'অতিরিক্ত দাম', 'পণ্যের সমস্যা', 'বাজার'],
    detailRoute: '/services/consumer-rights',
    officialLink: 'https://dncrp.gov.bd/',
    onlineApplyLink: '#',
    related: ['trade-license', 'court', 'utility'],
    overviewEn:
      'Consumer rights services help people report fraud, misleading products, unfair pricing, poor service delivery, and other issues affecting lawful consumer protection.',
    overviewBn:
      'ভোক্তা অধিকার সেবা মানুষকে প্রতারণা, বিভ্রান্তিকর পণ্য, অতিরিক্ত মূল্য, খারাপ সেবা বা আইনসঙ্গত ভোক্তা সুরক্ষার অন্যান্য সমস্যায় অভিযোগ করতে সহায়তা করে।',
    eligibilityEn:
      'Consumers, households, or service users who experienced unfair trade, false claims, defective products, or overcharging.',
    eligibilityBn:
      'অসৎ ব্যবসা, মিথ্যা দাবি, ত্রুটিপূর্ণ পণ্য বা অতিরিক্ত দাম ভোগ করা ভোক্তা, পরিবার বা সেবা ব্যবহারকারীরা এই সেবার জন্য যোগ্য।',
    requiredDocumentsEn: ['Purchase receipt if available', 'Seller or service provider details', 'Photos or proof of the problem', 'Applicant contact details'],
    requiredDocumentsBn: ['থাকলে ক্রয়ের রসিদ', 'বিক্রেতা বা সেবাদাতার তথ্য', 'সমস্যার ছবি বা প্রমাণ', 'আবেদনকারীর যোগাযোগের তথ্য'],
    applicationProcessEn: [
      'Document the issue clearly with receipts, photos, dates, and provider details.',
      'Decide whether the problem is product-related, pricing-related, or service-related.',
      'Submit the complaint through the relevant consumer protection channel or office.',
      'Respond to any follow-up verification requests from the authority.',
      'Track the complaint reference for mediation, inspection, or enforcement updates.',
    ],
    applicationProcessBn: [
      'রসিদ, ছবি, তারিখ ও সেবাদাতার তথ্যসহ সমস্যাটি পরিষ্কারভাবে নথিভুক্ত করুন।',
      'সমস্যাটি পণ্য, মূল্য নাকি সেবা-সংক্রান্ত তা নির্ধারণ করুন।',
      'সংশ্লিষ্ট ভোক্তা সুরক্ষা অফিস বা চ্যানেলে অভিযোগ জমা দিন।',
      'কর্তৃপক্ষ চাইলে পরবর্তী যাচাই বা অনুসন্ধানের তথ্য দিন।',
      'মধ্যস্থতা, পরিদর্শন বা ব্যবস্থার আপডেটের জন্য অভিযোগ নম্বর ট্র্যাক করুন।',
    ],
    feesEn: 'Complaint submission is generally free through official consumer protection channels.',
    feesBn: 'অফিসিয়াল ভোক্তা সুরক্ষা চ্যানেলে অভিযোগ জমা সাধারণত বিনামূল্যে।',
    processingTimeEn: 'Response times vary by complaint complexity, evidence, and the authority’s investigation process.',
    processingTimeBn: 'অভিযোগের জটিলতা, প্রমাণ এবং তদন্ত প্রক্রিয়ার ওপর সাড়া দেওয়ার সময় নির্ভর করে।',
    faqs: [
      createFaq(
        'Can I complain without a receipt?',
        'Yes, but having a receipt or other evidence usually makes the case stronger.',
        'রসিদ ছাড়া কি অভিযোগ করা যাবে?',
        'হ্যাঁ, তবে রসিদ বা অন্য প্রমাণ থাকলে অভিযোগ আরও শক্তিশালী হয়।',
      ),
      createFaq(
        'Can service fraud also go to police?',
        'Serious fraud may require police or legal follow-up in addition to consumer-rights reporting.',
        'সেবায় প্রতারণা কি পুলিশের কাছেও যেতে পারে?',
        'গুরুতর প্রতারণার ক্ষেত্রে ভোক্তা অধিকার অভিযোগের পাশাপাশি পুলিশ বা আইনি পদক্ষেপ লাগতে পারে।',
      ),
    ],
  },
  {
    id: 'emergency-services',
    aliases: ['emergency', 'emergency-services'],
    icon: 'Siren',
    accent: 'bg-red-600',
    titleEn: 'Emergency Services',
    titleBn: 'জরুরি সেবা',
    descriptionEn: 'Ambulance, police, fire, blood, hospital, and urgent help contacts in one directory.',
    descriptionBn: 'অ্যাম্বুলেন্স, পুলিশ, ফায়ার, রক্ত, হাসপাতাল ও জরুরি সহায়তার যোগাযোগ এক ডিরেক্টরিতে।',
    keywordsEn: ['emergency', '999', 'ambulance', 'fire', 'urgent', 'hospital', 'blood'],
    keywordsBn: ['জরুরি', '৯৯৯', 'অ্যাম্বুলেন্স', 'ফায়ার', 'হাসপাতাল', 'রক্ত', 'উদ্ধার'],
    detailRoute: '/services/emergency',
    officialLink: '#',
    onlineApplyLink: '#',
    related: ['health', 'police', 'utility'],
    highlight: true,
    overviewEn:
      'Emergency services provide a fast directory for ambulance, police, fire service, blood donors, hospitals, and other urgent contact points when immediate help is needed.',
    overviewBn:
      'জরুরি সেবা দ্রুত অ্যাম্বুলেন্স, পুলিশ, ফায়ার সার্ভিস, রক্তদাতা, হাসপাতাল ও অন্যান্য তাৎক্ষণিক সহায়তার যোগাযোগ নির্দেশিকা দেয়।',
    eligibilityEn:
      'Anyone in urgent need of emergency contacts, rapid support, or nearby safety and rescue information.',
    eligibilityBn:
      'যেকোনো ব্যক্তি যিনি জরুরি যোগাযোগ, দ্রুত সহায়তা বা নিকটস্থ নিরাপত্তা ও উদ্ধার তথ্য প্রয়োজন করেন তিনি এই সেবার জন্য যোগ্য।',
    requiredDocumentsEn: ['Mobile phone for calling or messaging', 'Current location details if available', 'Basic information about the emergency'],
    requiredDocumentsBn: ['কল বা মেসেজের জন্য মোবাইল ফোন', 'সম্ভব হলে বর্তমান অবস্থানের তথ্য', 'জরুরি ঘটনার প্রাথমিক বিবরণ'],
    applicationProcessEn: [
      'Open the emergency directory and search for the most relevant emergency category.',
      'Use the quick call, WhatsApp, or location-assisted options when available.',
      'Share accurate location and emergency details with the responder.',
      'Keep alternative contacts ready in case the first number is busy or unavailable.',
      'Follow official instructions until help arrives.',
    ],
    applicationProcessBn: [
      'জরুরি ডিরেক্টরি খুলে প্রয়োজনীয় জরুরি ক্যাটাগরি খুঁজুন।',
      'যেখানে সম্ভব দ্রুত কল, হোয়াটসঅ্যাপ বা লোকেশনভিত্তিক অপশন ব্যবহার করুন।',
      'উদ্ধারকারী সংস্থাকে সঠিক অবস্থান ও ঘটনার বিবরণ দিন।',
      'প্রথম নম্বর ব্যস্ত বা অপ্রাপ্য হলে বিকল্প যোগাযোগ প্রস্তুত রাখুন।',
      'সহায়তা পৌঁছানো পর্যন্ত অফিসিয়াল নির্দেশনা অনুসরণ করুন।',
    ],
    feesEn: 'Emergency contact access is free; service costs depend on the responding provider if any apply.',
    feesBn: 'জরুরি যোগাযোগ ব্যবহার বিনামূল্যে; প্রয়োজনে সাড়া দেওয়া সংস্থার নিজস্ব খরচ থাকতে পারে।',
    processingTimeEn: 'Immediate access to emergency contacts; response time depends on the local provider and location.',
    processingTimeBn: 'জরুরি যোগাযোগ তাৎক্ষণিক পাওয়া যায়; সাড়া দেওয়ার সময় স্থানীয় সেবা ও অবস্থানের ওপর নির্ভর করে।',
    faqs: [
      createFaq(
        'Does AmarSheba replace 999?',
        'No. AmarSheba only helps you find contacts faster. Use official emergency numbers immediately when needed.',
        'আমারসেবা কি ৯৯৯-এর বিকল্প?',
        'না। আমারসেবা শুধু দ্রুত যোগাযোগ খুঁজতে সাহায্য করে। প্রয়োজন হলে অফিসিয়াল জরুরি নম্বর সঙ্গে সঙ্গে ব্যবহার করুন।',
      ),
      createFaq(
        'Can I search by service type?',
        'Yes. The emergency directory supports search by ambulance, police, fire, hospital, and other urgent terms.',
        'সেবার ধরন দিয়ে কি খোঁজা যায়?',
        'হ্যাঁ। জরুরি ডিরেক্টরিতে অ্যাম্বুলেন্স, পুলিশ, ফায়ার, হাসপাতালসহ বিভিন্ন কীওয়ার্ড দিয়ে খোঁজা যায়।',
      ),
    ],
  },
];

function buildChecklist(entry, locale) {
  const documents = locale === 'bn' ? entry.requiredDocumentsBn : entry.requiredDocumentsEn;
  const generic = locale === 'bn'
    ? ['অফিসিয়াল নির্দেশনা যাচাই করা হয়েছে', 'ফি বা রসিদ সংরক্ষণ করা হয়েছে']
    : ['Official instructions verified', 'Fee receipt or tracking details saved'];

  return [...documents.slice(0, 4), ...generic].slice(0, 6);
}

export function buildServiceTranslations(locale) {
  const isBangla = locale === 'bn';

  return Object.fromEntries(
    serviceCatalog.map((entry) => [
      entry.id,
      {
        title: isBangla ? entry.titleBn : entry.titleEn,
        description: isBangla ? entry.descriptionBn : entry.descriptionEn,
        overview: isBangla ? entry.overviewBn : entry.overviewEn,
        eligibility: isBangla ? entry.eligibilityBn : entry.eligibilityEn,
        requiredDocuments: isBangla ? entry.requiredDocumentsBn : entry.requiredDocumentsEn,
        fees: isBangla ? entry.feesBn : entry.feesEn,
        timeline: isBangla ? entry.processingTimeBn : entry.processingTimeEn,
        steps: isBangla ? entry.applicationProcessBn : entry.applicationProcessEn,
        faq: entry.faqs.map((item) => (isBangla ? item.bn : item.en)),
        checklist: buildChecklist(entry, locale),
        keywords: isBangla ? entry.keywordsBn : entry.keywordsEn,
        onlineApplyLink: entry.onlineApplyLink,
        governmentWebsiteLink: entry.officialLink,
      },
    ]),
  );
}

export const services = serviceCatalog.map((entry) => ({
  id: entry.id,
  slug: entry.id,
  accent: entry.accent,
  icon: entry.icon,
  related: entry.related,
  officialLink: entry.officialLink,
  onlineApplyLink: entry.onlineApplyLink,
  detailRoute: entry.detailRoute,
  title_en: entry.titleEn,
  title_bn: entry.titleBn,
  description_en: entry.descriptionEn,
  description_bn: entry.descriptionBn,
  keywords_en: entry.keywordsEn,
  keywords_bn: entry.keywordsBn,
  category: entry.titleEn,
  highlight: Boolean(entry.highlight),
}));

function normalizeIdentifier(value = '') {
  return value
    .toString()
    .trim()
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function getServiceById(identifier) {
  const normalized = normalizeIdentifier(identifier);

  return services.find((service) => {
    const source = serviceCatalog.find((entry) => entry.id === service.id);
    return service.id === normalized || source?.aliases?.some((alias) => normalizeIdentifier(alias) === normalized);
  });
}

export function getServiceRoute(serviceId) {
  return getServiceById(serviceId)?.detailRoute || `/services/${serviceId}`;
}

export const SERVICE_CATEGORY_COUNT = services.length;
