-- AmarSheba data converted for PostgreSQL/Supabase.
-- Run after supabase_schema.sql.

INSERT INTO users (name, email, phone, password, role, is_verified)
VALUES
  (
    'AmarSheba Admin',
    'admin@amarsheba.com',
    '01700000000',
    '$2a$10$02lh1ZFkb7Sf2tGkhVH1sOY4.2vshHR5n8ayp3no4W1Wr4Us4lumu',
    'admin',
    1
  );

INSERT INTO services (
  title_en,
  title_bn,
  category,
  description_en,
  description_bn,
  required_documents,
  fee,
  processing_time
)
VALUES
  (
    'National ID Correction',
    'জাতীয় পরিচয়পত্র সংশোধন',
    'Identity',
    'Update name, date of birth, address, or other NID information through the Election Commission process.',
    'নির্বাচন কমিশনের প্রক্রিয়ার মাধ্যমে নাম, জন্মতারিখ, ঠিকানা বা অন্যান্য এনআইডি তথ্য সংশোধন করুন।',
    'NID copy, birth certificate, supporting proof for requested correction, applicant photo',
    'As per official schedule',
    '7 to 21 working days'
  ),
  (
    'e-Passport Application',
    'ই-পাসপোর্ট আবেদন',
    'Passport',
    'Apply for a new e-passport or renew an existing passport with appointment and fee guidance.',
    'নতুন ই-পাসপোর্টের জন্য আবেদন করুন অথবা অ্যাপয়েন্টমেন্ট ও ফি নির্দেশনাসহ বিদ্যমান পাসপোর্ট নবায়ন করুন।',
    'NID or birth certificate, previous passport if applicable, payment receipt, appointment slip',
    'Varies by delivery type',
    '7 to 30 working days'
  ),
  (
    'Driving License Application',
    'ড্রাইভিং লাইসেন্স আবেদন',
    'Driving License',
    'Complete learner permit, medical, test, and BRTA smart card steps for a driving license.',
    'ড্রাইভিং লাইসেন্সের জন্য লার্নার পারমিট, মেডিকেল, পরীক্ষা এবং বিআরটিএ স্মার্ট কার্ডের ধাপ সম্পন্ন করুন।',
    'NID, learner permit, medical certificate, training certificate, payment receipt',
    'As per BRTA fees',
    '15 to 45 working days'
  ),
  (
    'Land Mutation Service',
    'ভূমি নামজারি সেবা',
    'Land',
    'Apply for land mutation and ownership record updates with required deed and khatian documents.',
    'প্রয়োজনীয় দলিল ও খতিয়ান নথি দিয়ে ভূমি নামজারি ও মালিকানা রেকর্ড হালনাগাদের জন্য আবেদন করুন।',
    'Deed copy, khatian, tax receipt, applicant NID, authorization if applicable',
    'Depends on local office rules',
    '10 to 30 working days'
  ),
  (
    'Police Clearance Certificate',
    'পুলিশ ক্লিয়ারেন্স সনদ',
    'Police',
    'Request a police clearance certificate for travel, jobs, or visa processing.',
    'ভ্রমণ, চাকরি বা ভিসা প্রক্রিয়ার জন্য পুলিশ ক্লিয়ারেন্স সনদের আবেদন করুন।',
    'Passport copy, NID, address proof, photo, application form',
    'Official police clearance fee',
    '7 to 15 working days'
  ),
  (
    'Tax Identification Number',
    'কর শনাক্তকরণ নম্বর',
    'Tax',
    'Register for e-TIN and begin taxpayer profile setup through the NBR portal.',
    'এনবিআর পোর্টালের মাধ্যমে ই-টিআইএন নিবন্ধন করুন এবং করদাতা প্রোফাইল সেটআপ শুরু করুন।',
    'NID, mobile number, email, address details',
    'No registration fee',
    'Same day to 2 working days'
  );
