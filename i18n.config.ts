export default defineI18nConfig(() => ({
  legacy: false,
  globalInjection: true,
  locale: 'en',
  messages: {
    en: {
      home: 'Home',
      about: 'About',
      youtube: 'Youtube',
      admin: 'Admin',
    },
    ko: {
      home: '홈',
      about: '어바웃',
      youtube: '유튜브',
      admin: '관리자',
    },
  },
}));
