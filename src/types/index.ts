export interface Social {
  name: string;
  url: string;
}

/**
 * The Profile object serves as data for the developer's basic information displayed in the header of the resume.
 * Profile 객체는 이력서의 헤더에 표시되는 개발자의 기본 정보를 위한 데이터로 활용됩니다.
 * */
export interface Profile {
  name: string; // name of developer
  startAt: Date; // start date of developer's career
  descriptions: string; // descriptions of developer
  image: string; // developer's profile image
  socials: Social[]; // developer's social medias
}

export interface Card {
  name?: string;
  company?: string;
  url?: string;
  roles?: string[];
  skills?: string[];
  descriptions?: string[];
}

/**
 * Experiences, Companies, Projects, and Personals are represented by the same Card UI, and data of the same structure can be input.
 * Experiences, Companies, Projects, Personals 는 동일한 Card UI로 표현되며, 동일한 구조의 데이터를 입력받을 수 있습니다.
 * */
export interface Resume {
  experiences: Card[];
  companies: Card[];
  projects: Card[];
  personals: Card[];
}

export type TranslationSupport = "en" | "ko";

type A = keyof Card;

export type TranslationKeys = keyof Card | keyof Resume;

export type Translations = Record<
  TranslationSupport,
  Record<TranslationKeys, string>
>;
