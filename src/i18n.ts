import { createI18n } from 'vue-i18n';
import enUS from './locales/en-US.json';
import ptBR from './locales/pt-BR.json';

const i18n = createI18n({
  legacy: false, // Use o modo Composition API
  locale: 'pt-BR', // Idioma padrão
  fallbackLocale: 'en-US', // Idioma de fallback
  messages: {
    'en-US': enUS,
    'pt-BR': ptBR,
  },
});

export default i18n;
