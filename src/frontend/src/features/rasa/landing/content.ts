export type RasaLocale = 'fa' | 'en'

export type RasaFeatureGroup = {
  title: string
  items: Array<{
    title: string
    description: string
  }>
}

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
    trustSubtitle:
      'پلتفرمی امن، پایدار و قابل استقرار روی زیرساخت اختصاصی برای جلسات، همکاری و ارتباطات سازمانی.',
    trustCards: [
      {
        title: 'پایداری حتی روی اینترنت ناپایدار',
        text: 'رسا با بهینه‌سازی هوشمند کیفیت تماس، تأخیر پایین و مصرف بهینه پهنای باند، تجربه‌ای پایدار حتی روی شبکه‌های ضعیف فراهم می‌کند.',
        bullets: [
          'Adaptive Quality',
          'مصرف بهینه پهنای باند',
          'کاهش قطعی تماس',
          'Low Latency',
        ],
      },
      {
        title: 'امنیت سازمانی واقعی',
        text: 'تمام ارتباطات، داده‌ها و جلسات تحت کنترل زیرساخت سازمان شما باقی می‌مانند؛ بدون وابستگی به سرویس‌های خارجی.',
        bullets: [
          'رمزنگاری ارتباطات',
          'کنترل دسترسی',
          'SSO و LDAP',
          'مالکیت کامل داده‌ها',
        ],
      },
      {
        title: 'استقرار روی زیرساخت اختصاصی',
        text: 'رسا روی Docker، Kubernetes یا ماشین‌های مجازی سازمان شما قابل استقرار است و به‌راحتی با زیرساخت موجود یکپارچه می‌شود.',
        bullets: [
          'Docker Ready',
          'Kubernetes Support',
          'Self-hosted',
          'Multi-region Ready',
        ],
      },
      {
        title: 'ورود به جلسه حتی بدون اینترنت',
        text: 'کاربران می‌توانند تنها با تماس تلفنی وارد جلسات شوند؛ مناسب برای جلسات رسمی، شرایط اضطراری و اینترنت ناپایدار.',
        bullets: [
          'Dial-in Support',
          'تلفن ثابت و موبایل',
          'بدون نیاز به اینترنت',
          'مناسب جلسات سازمانی',
        ],
      },
    ],
    capabilitiesEyebrow: 'قابلیت‌ها',
    capabilitiesTitle: 'همه‌چیز برای ارتباطات سازمانی',
    capabilitiesText:
      'از تماس تصویری و اشتراک صفحه تا مدیریت کاربران، امنیت و استقرار سازمانی؛ همه در یک پلتفرم یکپارچه.',
    capabilityGroups: [
      {
        title: 'ارتباطات',
        items: [
          { title: 'تماس تصویری و صوتی HD', description: 'جلسات پایدار با کیفیت بالا' },
          { title: 'اشتراک صفحه', description: 'ارائه و همکاری همزمان' },
          { title: 'چت داخل جلسه', description: 'گفت‌وگوی سریع و تیمی' },
          { title: 'ضبط جلسات', description: 'ثبت کامل جلسات سازمانی' },
          { title: 'رونویسی زنده', description: 'تبدیل گفتار به متن' },
          { title: 'خلاصه‌سازی جلسه', description: 'مرور سریع تصمیم‌ها و گفتگوها' },
        ],
      },
      {
        title: 'سازمانی',
        items: [
          { title: 'مدیریت کاربران', description: 'کنترل کاربران و دسترسی‌ها' },
          { title: 'نقش‌ها و مجوزها', description: 'مدیریت دقیق سطح دسترسی' },
          { title: 'داشبورد مدیریتی', description: 'نظارت و مدیریت متمرکز' },
          { title: 'گزارش و لاگ جلسات', description: 'رهگیری کامل فعالیت‌ها' },
          { title: 'برند اختصاصی', description: 'White-label و شخصی‌سازی' },
          { title: 'API و SDK', description: 'یکپارچه‌سازی با سرویس‌های داخلی' },
        ],
      },
      {
        title: 'امنیت',
        items: [
          { title: 'رمزنگاری ارتباطات', description: 'حفاظت از داده‌ها و تماس‌ها' },
          { title: 'احراز هویت سازمانی', description: 'پشتیبانی از SSO و LDAP' },
          { title: 'کنترل کامل داده‌ها', description: 'بدون وابستگی خارجی' },
          { title: 'استقرار داخلی', description: 'مناسب شبکه‌های خصوصی' },
          { title: 'سیاست‌های امنیتی', description: 'هماهنگ با نیاز سازمان' },
          { title: 'دسترسی امن', description: 'کنترل و محدودسازی کاربران' },
        ],
      },
      {
        title: 'زیرساخت',
        items: [
          { title: 'Docker و Kubernetes', description: 'استقرار مدرن و مقیاس‌پذیر' },
          { title: 'Multi-region', description: 'پشتیبانی از چند منطقه' },
          { title: 'مقیاس‌پذیری افقی', description: 'مناسب جلسات پرتعداد' },
          { title: 'زیرساخت کم‌تأخیر', description: 'تجربه روان و سریع' },
          { title: 'پشتیبانی جلسات بزرگ', description: 'مناسب سازمان‌ها و رویدادها' },
          { title: 'مانیتورینگ و لاگ', description: 'پایش زیرساخت و سرویس‌ها' },
        ],
      },
    ] satisfies RasaFeatureGroup[],
    trustTitle2: 'ساخته‌شده برای زیرساخت‌های سازمانی',
    trustText2:
      'رسا برای سازمان‌هایی طراحی شده که به امنیت، پایداری، کنترل داده‌ها و استقلال زیرساخت اهمیت می‌دهند.',
    trustBadges: [
      'Self-hosted',
      'Enterprise Ready',
      'Docker & Kubernetes',
      'Low Latency',
      'SSO / LDAP',
      'End-to-End Encryption',
      'API & SDK',
      'Multi-region',
      'High Availability',
      'White-label',
    ],
    ctaReady: 'آماده راه‌اندازی ارتباطات سازمانی خود هستید؟',
    ctaText:
      'رسا را روی زیرساخت اختصاصی خود مستقر کنید و تجربه‌ای امن، پایدار و حرفه‌ای برای جلسات آنلاین سازمانتان بسازید.',
    primaryCta: 'شروع جلسه امن',
    secondaryCta: 'درخواست استقرار سازمانی',
    tertiaryCta: 'مشاهده مستندات',
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
    nav: ['Product', 'Features', 'Security', 'Deployment', 'Pricing', 'Resources'],
    start: 'Start meeting',
    badge: 'Built for organizations',
    headline: ['Professional infrastructure', 'for online meetings'],
    lead: 'Rasa is a secure, stable and deployable platform for video calls, online collaboration and enterprise meeting management, with high quality, full data control and dedicated hosting in your infrastructure.',
    primary: 'Start secure meeting',
    secondary: 'Enterprise deployment',
    trust: ['High quality', 'End-to-end security', 'Low latency', 'Dedicated hosting'],
    trustTitle: 'Why organizations choose Rasa',
    trustSubtitle:
      'A secure, reliable, self-hosted platform for meetings, collaboration, and enterprise communication.',
    trustCards: [
      {
        title: 'Stable even on unreliable networks',
        text: 'Rasa optimizes call quality, latency, and bandwidth usage to deliver a stable meeting experience even on weak or unstable networks.',
        bullets: ['Adaptive Quality', 'Bandwidth efficient', 'Reduced call drops', 'Low Latency'],
      },
      {
        title: 'Real enterprise security',
        text: 'Your meetings, communications, and data remain under your organization’s infrastructure and control, without external service dependency.',
        bullets: ['Encrypted communications', 'Access control', 'SSO and LDAP', 'Full data ownership'],
      },
      {
        title: 'Deploy on your own infrastructure',
        text: 'Rasa can be deployed on Docker, Kubernetes, or virtual machines and integrates cleanly with your existing infrastructure.',
        bullets: ['Docker Ready', 'Kubernetes Support', 'Self-hosted', 'Multi-region Ready'],
      },
      {
        title: 'Join meetings even without internet',
        text: 'Users can join meetings by phone call, making it ideal for formal sessions, emergencies, and unstable network conditions.',
        bullets: ['Dial-in Support', 'Landline and mobile', 'No internet required', 'Enterprise meetings ready'],
      },
    ],
    capabilitiesEyebrow: 'Features',
    capabilitiesTitle: 'Everything for enterprise communication',
    capabilitiesText:
      'From video meetings and screen sharing to user management, security, and enterprise deployment — all in one integrated platform.',
    capabilityGroups: [
      {
        title: 'Communication',
        items: [
          { title: 'HD video and audio', description: 'Reliable meetings with high quality' },
          { title: 'Screen sharing', description: 'Present and collaborate in real time' },
          { title: 'In-meeting chat', description: 'Fast team conversations' },
          { title: 'Meeting recording', description: 'Capture enterprise sessions' },
          { title: 'Live transcription', description: 'Convert speech to text' },
          { title: 'Meeting summaries', description: 'Quickly review decisions and discussions' },
        ],
      },
      {
        title: 'Enterprise',
        items: [
          { title: 'User management', description: 'Control users and access' },
          { title: 'Roles and permissions', description: 'Fine-grained access management' },
          { title: 'Admin dashboard', description: 'Centralized monitoring and control' },
          { title: 'Meeting logs and reports', description: 'Track activity across sessions' },
          { title: 'Custom branding', description: 'White-label and personalization' },
          { title: 'API and SDK', description: 'Integrate with internal services' },
        ],
      },
      {
        title: 'Security',
        items: [
          { title: 'Encrypted communications', description: 'Protect calls and data' },
          { title: 'Enterprise authentication', description: 'SSO and LDAP support' },
          { title: 'Full data control', description: 'No external dependency' },
          { title: 'Internal deployment', description: 'Built for private networks' },
          { title: 'Security policies', description: 'Aligned with organizational needs' },
          { title: 'Secure access', description: 'Control and restrict users' },
        ],
      },
      {
        title: 'Infrastructure',
        items: [
          { title: 'Docker and Kubernetes', description: 'Modern scalable deployment' },
          { title: 'Multi-region', description: 'Support for multiple regions' },
          { title: 'Horizontal scaling', description: 'Built for high-volume meetings' },
          { title: 'Low-latency infrastructure', description: 'Smooth and fast experience' },
          { title: 'Large meeting support', description: 'Suitable for organizations and events' },
          { title: 'Monitoring and logs', description: 'Observe infrastructure and services' },
        ],
      },
    ] satisfies RasaFeatureGroup[],
    trustTitle2: 'Built for enterprise infrastructure',
    trustText2:
      'Rasa is designed for organizations that care about security, reliability, data control, and infrastructure independence.',
    trustBadges: [
      'Self-hosted',
      'Enterprise Ready',
      'Docker & Kubernetes',
      'Low Latency',
      'SSO / LDAP',
      'End-to-End Encryption',
      'API & SDK',
      'Multi-region',
      'High Availability',
      'White-label',
    ],
    ctaReady: 'Ready to launch enterprise communication?',
    ctaText:
      'Deploy Rasa on your own infrastructure and create a secure, reliable, professional meeting experience for your organization.',
    primaryCta: 'Start secure meeting',
    secondaryCta: 'Request enterprise deployment',
    tertiaryCta: 'View documentation',
    footerLead: 'Secure, fast and deployable enterprise communication platform.',
    footerColumns: [
      ['Product', 'Features', 'Security', 'Collaboration', 'Updates'],
      ['Deployment', 'Deployment guide', 'Docker', 'Kubernetes', 'Requirements'],
      ['Resources', 'Docs', 'Blog', 'FAQ', 'Service status'],
      ['Company', 'About us', 'Contact', 'Privacy', 'Terms'],
    ],
    country: 'Iran',
  },
} as const
