import TRANSLATIONS from "@/data/translation";
import { TranslationKeys } from "@/types";

interface Props {
  string: TranslationKeys;
}

const LocaleString = ({ string }: Props) => {
  const translation = TRANSLATIONS[string];

  if (!translation) {
    throw new Error(`${string} : 정의되지 않은 Locale 텍스트입니다.`);
  }

  return <span>{translation}</span>;
};

export default LocaleString;
