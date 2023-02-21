import TRANSLATIONS from "@/data/translation";
import { TranslationKeys } from "@/types";

interface Props {
  string: TranslationKeys;
}

const LocaleString = ({ string }: Props) => {
  const LOCALE = (() => {
    const lang =
      typeof window !== "undefined" ? window.navigator.language : undefined;
    switch (lang) {
      case "ko":
      case "ko-kr":
      case "ko-KR":
        return "ko";
      default:
        return "en";
    }
  })();

  const translation = TRANSLATIONS[LOCALE][string];

  if (!translation) {
    throw new Error(`${string} : 정의되지 않은 Locale 텍스트입니다.`);
  }

  return <span>{translation}</span>;
};

export default LocaleString;
