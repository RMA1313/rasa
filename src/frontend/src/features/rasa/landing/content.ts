export const rasaContent = {
  fa: {
    title: 'هر گفتگو، رسا',
    subtitle:
      'پلتفرم ارتباطات حرفه‌ای برای جلسات آنلاین، وبینار و همکاری تیمی؛ از یک جلسه ساده تا استقرار کامل در زیرساخت سازمان شما.',
    primary: 'شروع رایگان',
    secondary: 'تماس با فروش سازمانی',
    trust: ['بدون نیاز به کارت اعتباری', 'راه‌اندازی در چند دقیقه', 'نسخه رایگان برای همیشه'],
    scaleTitle: 'رسا برای هر مقیاس ارتباط',
    scaleItems: [
      { label: 'شخصی', caption: 'شروع ساده و سریع', icon: 'person' },
      { label: 'تیم کوچک', caption: 'همکاری روزمره', icon: 'team' },
      { label: 'وبینار و رویداد', caption: 'پخش زنده و کنترل', icon: 'broadcast' },
      { label: 'سازمان', caption: 'دسترسی و نظارت', icon: 'org' },
      { label: 'زیرساخت اختصاصی', caption: 'Self-hosted کامل', icon: 'infra' },
    ],
    productTitle: 'همه ابزارهای ارتباطی در یک پلتفرم',
    productItems: [
      { label: 'جلسات آنلاین', caption: 'ویدئو، صدا، اشتراک صفحه', icon: 'meeting' },
      { label: 'وبینار', caption: 'رویدادهای بزرگ و زنده', icon: 'broadcast' },
      { label: 'چت سازمانی', caption: 'گفت‌وگوی سریع و تیمی', icon: 'chat' },
      { label: 'ضبط و آرشیو', caption: 'آرشیو جست‌وجوپذیر', icon: 'archive' },
      { label: 'مدیریت کاربران', caption: 'نقش‌ها و کنترل دسترسی', icon: 'users' },
      { label: 'یکپارچگی SSO و API', caption: 'اتصال به زیرساخت شما', icon: 'api' },
    ],
    infraTitle: 'The backbone of modern communication',
    infraSubtitle:
      'زیرساختی امن، پایدار و مقیاس‌پذیر برای ارتباطات شما؛ از تیم‌های کوچک تا سازمان‌های بزرگ.',
    metrics: [
      { value: '+60,000', label: 'کاربر فعال' },
      { value: '99.9%', label: 'پایداری سرویس' },
      { value: '+10 میلیون', label: 'جلسه برگزار شده' },
      { value: '24/7', label: 'پشتیبانی سازمانی' },
    ],
    finalTitle: 'برای ارتباطی که قرار است بماند، رسا را انتخاب کنید.',
    finalText:
      'شروع کنید، رشد کنید، و زیرساخت ارتباطی‌تان را با یک تجربه‌ی premium و قابل‌اتکا بسازید.',
  },
} as const

export type RasaLocale = keyof typeof rasaContent
