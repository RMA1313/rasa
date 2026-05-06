export type RasaLocale = 'fa' | 'en'

export const rasaContent = {
  fa: {
    dir: 'rtl',
    nav: ['محصول', 'قابلیت‌ها', 'امنیت', 'استقرار', 'قیمت', 'منابع'],
    start: 'شروع جلسه',
    badge: 'ساخته‌شده برای سازمان‌ها',
    headline: ['زیرساخت حرفه‌ای', 'جلسات آنلاین'],
    lead: 'رسا بستری امن، پایدار و قابل استقرار برای تماس تصویری، همکاری آنلاین و مدیریت جلسات سازمانی است؛ با کیفیت بالا، کنترل کامل روی داده‌ها و امکان میزبانی اختصاصی در زیرساخت شما.',
    primary: 'شروع جلسه امن',
    secondary: 'استقرار سازمانی',
    trust: ['کیفیت بالا', 'امنیت سراسری', 'تاخیر پایین', 'میزبانی اختصاصی'],
    trustTitle: 'چرا سازمان‌ها رسا را انتخاب می‌کنند؟',
    cards: [
      {
        title: 'امنیت و کنترل',
        text: 'رمزگذاری سراسری، کنترل دسترسی‌ها و مالکیت کامل اطلاعات شما',
      },
      {
        title: 'کیفیت و پایداری',
        text: 'اتصال پایدار، تاخیر پایین و کیفیت صدا و تصویر در سطح سازمانی',
      },
      {
        title: 'استقرار اختصاصی',
        text: 'نصب در زیرساخت شما با Docker، Kubernetes و یا ماشین مجازی',
      },
    ],
    capabilitiesEyebrow: 'قابلیت‌ها',
    capabilitiesTitle: 'همه چیز برای ارتباطات سازمانی',
    capabilitiesText:
      'از تماس تصویری و اشتراک‌گذاری تا مدیریت کاربران و استقرار سازمانی، همه در یک پلتفرم یکپارچه.',
    capabilities: [
      'تماس تصویری و صوتی',
      'اشتراک صفحه',
      'گفت‌وگوی متنی',
      'ضبط جلسه',
      'رونویسی و خلاصه‌سازی',
      'مدیریت کاربران',
      'ورود سازمانی (SSO)',
      'اجرا در مرورگر',
    ],
    infraTitle: 'زیرساخت شما، کنترل شما',
    infraText:
      'رسا به شما امکان می‌دهد پلتفرم ارتباطی خود را در هر محیطی که ترجیح می‌دهید اجرا کنید و کنترل کامل روی داده‌ها، امنیت و دسترسی‌ها داشته باشید.',
    infraBullets: [
      'پشتیبانی از Docker و Kubernetes',
      'قابلیت نصب در On-Premise یا Cloud خصوصی',
      'کنترل کامل روی داده‌ها و سیاست‌های امنیتی',
      'مناسب سازمان‌ها و ارائه‌دهندگان خدمات',
    ],
    ctaReady: 'آماده شروع هستید؟',
    ctaTitle: ['جلسات آنلاین سازمان خود را', 'امن، پایدار و حرفه‌ای کنید.'],
    request: 'درخواست استقرار',
    footerLead: 'پلتفرم ارتباطات آنلاین سازمانی امن، سریع و قابل استقرار.',
    footerColumns: [
      ['محصول', 'قابلیت‌ها', 'امنیت', 'همکاری', 'به‌روزرسانی‌ها'],
      ['استقرار', 'راهنمای استقرار', 'Docker', 'Kubernetes', 'نیازمندی‌ها'],
      ['منابع', 'مستندات', 'وبلاگ', 'سوالات متداول', 'وضعیت سرویس'],
      ['شرکت', 'درباره ما', 'تماس با ما', 'حریم خصوصی', 'شرایط استفاده'],
    ],
    country: 'ایران',
  },
  en: {
    dir: 'ltr',
    nav: [
      'Product',
      'Capabilities',
      'Security',
      'Deployment',
      'Pricing',
      'Resources',
    ],
    start: 'Start meeting',
    badge: 'Built for organizations',
    headline: ['Professional infrastructure', 'for online meetings'],
    lead: 'Rasa is a secure, stable and deployable platform for video calls, online collaboration and enterprise meeting management, with high quality, full data control and dedicated hosting in your infrastructure.',
    primary: 'Start secure meeting',
    secondary: 'Enterprise deployment',
    trust: [
      'High quality',
      'End-to-end security',
      'Low latency',
      'Dedicated hosting',
    ],
    trustTitle: 'Why organizations choose Rasa',
    cards: [
      {
        title: 'Security and control',
        text: 'Encryption, access controls and full ownership of your data.',
      },
      {
        title: 'Quality and stability',
        text: 'Reliable connectivity, low latency and enterprise-grade audio and video.',
      },
      {
        title: 'Dedicated deployment',
        text: 'Run inside your stack with Docker, Kubernetes or virtual machines.',
      },
    ],
    capabilitiesEyebrow: 'Capabilities',
    capabilitiesTitle: 'Everything for enterprise communication',
    capabilitiesText:
      'Video calls, sharing, user management and enterprise deployment in one integrated platform.',
    capabilities: [
      'Video and audio calls',
      'Screen sharing',
      'Text chat',
      'Meeting recording',
      'Transcription and summaries',
      'User management',
      'Enterprise SSO',
      'Browser based',
    ],
    infraTitle: 'Your infrastructure, your control',
    infraText:
      'Rasa lets you run your communication platform wherever you prefer, with full control over data, security and access.',
    infraBullets: [
      'Docker and Kubernetes support',
      'On-Premise or private Cloud deployment',
      'Full control over data and security policies',
      'Built for organizations and service providers',
    ],
    ctaReady: 'Ready to start?',
    ctaTitle: [
      'Make your organization meetings',
      'secure, stable and professional.',
    ],
    request: 'Request deployment',
    footerLead:
      'Secure, fast and deployable enterprise communication platform.',
    footerColumns: [
      ['Product', 'Capabilities', 'Security', 'Collaboration', 'Updates'],
      [
        'Deployment',
        'Deployment guide',
        'Docker',
        'Kubernetes',
        'Requirements',
      ],
      ['Resources', 'Docs', 'Blog', 'FAQ', 'Service status'],
      ['Company', 'About us', 'Contact', 'Privacy', 'Terms'],
    ],
    country: 'Iran',
  },
} as const
