import en from "@/locales/en.json";
import tr from "@/locales/tr.json";

export type TranslationKeys = typeof en;

const translations = { en, tr } as const satisfies Record<
  string,
  TranslationKeys
>;

export const useTranslation = (
  lang: keyof typeof translations
): TranslationKeys => {
  return translations[lang];
};

export type Languages = keyof typeof translations;
