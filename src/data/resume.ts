import { Resume } from "@/types";

const RESUME: Resume = {
  companies: [
    {
      name: "Lunit",
      roles: ["Front-end Team Leader", "Front-end Software Architect"],
    },
    {
      name: "NAVER",
      roles: ["Front-end Developer"],
    },
    {
      name: "PUBG Co.",
      roles: ["Front-end Developer"],
    },
    {
      name: "SK Techx",
      roles: ["Front-end Developer"],
    },
    {
      name: "NHN Technology Services",
      roles: ["Front-end Developer"],
    },
    {
      name: "Freeneo",
      roles: ["Front-end Developer", "Web Design"],
    },
  ],
  projects: [
    {
      name: "Smartstore React 전환 및 운영",
      company: "NAVER",
      skills: ["React", "Webpack", "Typescript", "ESLint", "Koa", "Node.js"],
    },
    {
      name: "Selective 서비스 오픈",
      company: "NAVER",
      skills: ["React", "Webpack", "ESLint", "JavaScript"],
    },
    {
      name: "Playerunknown's Battleground Lobby Store 개편",
      company: "PUBG Co.",
      skills: ["Angular", "Redux", "SCSS"],
    },
    {
      name: "Mobile용 사내 경제지표 도구 개발",
      company: "PUBG Co.",
      skills: ["React", "SCSS"],
    },
    {
      name: "통합 운송 서비스 어플리케이션 웹뷰 개발",
      company: "SK Techx",
      skills: ["React", "Redux", "Express", "Node.js", "Webpack", "SCSS"],
      descriptions: [
        "앱 연동테스트를 위한 Heroku Serveless 개발용 서버 구축 및 운용",
        "Node.js Web Server 도입으로 Back-end 개발과의 업무 의존성 제거",
      ],
    },
    {
      name: "카셰어링 서비스 어플리케이션 웹뷰, 웹서비스, 백오피스 개발",
      company: "SK Techx",
      skills: ["Handlebars", "React", "Redux", "D3", "SSR", "Webpack", "SCSS"],
      descriptions: [
        "NPM, Webpack Task으로 자동화, Bundling 환경 구축",
        "크로스 브라우징 환경 고려 Webpack 버전 차등 구축",
        "Webpack-dev-server 적용 Front-end 로컬 개발환경 개선",
        "ESLint, StyleLint 활용 코딩 컨벤션 자동화 구축",
        "D3 라이브러리 활용 차트 UI 구현",
        "앱내 웹뷰 페이지 React+Redux+SSR로 분산된 템플릿 리소스 일원화",
      ],
    },
    {
      name: "AD UI Tester 개발",
      company: "NHN Technology Services",
      skills: ["PhantomJS", "CasperJS", "Express"],
      descriptions: [
        "네이버 서비스 전반에 삽입될 광고 UI의 Markup 산출물 자동검수도구 개발",
        "PhantomJS로 Headless Client 환경에서의 UI 렌더링 결과 비교분석",
      ],
    },
    {
      name: "사내/사외 Sass 교육강사",
      company: "NHN Technology Services",
      descriptions: [
        "NTS 정기교육 및 신규입사자 Sass 교육",
        "협력사 In-comms 춘천지사 강의",
        "교육용 교재 및 예제 작성, 매 강의마다 피드백 반영 업데이트",
      ],
    },
    {
      name: "NAVER 프로필 '내 캐릭터 만들기' 기능 개발",
      company: "NHN Technology Services",
      skills: ["HTML", "SCSS", "Canvas"],
      descriptions: [
        "Cross-device 및 NAVER in-app 환경 UI 개발",
        "HTML5 Canvas API 관련 Cross-device UI 이슈 처리 경험",
      ],
    },
    {
      name: "LINEPLAY PC Web Diary 개발",
      company: "NHN Technology Services",
      skills: ["HTML", "SCSS", "jQuery"],
      descriptions: [
        "모바일 게임 LINEPLAY의 SNS 형태의 PC Web Diary 개발",
        "개발 후 운영인계를 위한 Bootstrap 형태의 모듈화된 UI 가이드 작성",
      ],
    },
    {
      name: "NAVER Grafolio UI 개편 및 운영",
      company: "NHN Technology Services",
      skills: ["HTML", "SCSS", "Gulp", "jQuery"],
      descriptions: [
        "아티스트 포트폴리오 플랫폼 Grafolio 서비스 UI 개편 및 운영",
        "Gulp 적용으로 Markup개발 리소스 빌드환경 구성",
      ],
    },
    {
      name: "NAVER 지식백과/네이버캐스트 운영 및 NAVER 컨텐츠 검수 도구 운영",
      company: "NHN Technology Services",
      skills: ["HTML", "CSS"],
      descriptions: [
        "NAVER 핵심 서비스의 강도 높은 Cross-browsing 운영 경험",
        "아티스트 포트폴리오 플랫폼 Grafolio 서비스 UI 개편 및 운영",
        "지식백과, 네이버캐스트, 매거진캐스트 등 컨텐츠 디자인 통일 및 UI 모듈화",
        "Gulp 적용으로 Markup개발 리소스 빌드환경 구성",
      ],
    },
    {
      name: "여행랜드사 웹솔루션 Backoffice UI 개편",
      company: "Freeneo",
      skills: ["PHP", "CSS", "jQuery"],
      url: "https://goo.gl/cKJz2F",
      descriptions: [
        "인쇄하여 송장으로 사용할 수 있는 구조의 동적인 Table UI 기획 및 개발",
        "Bootstrap UI Framework 활용한 브랜드 UI 가이드 작성",
      ],
    },
    {
      name: "Sheraton 인천 웹사이트 개발",
      company: "Freeneo",
      skills: ["PHP", "jQuery", "SCSS", "Web Accessibility"],
      descriptions: ["한국웹접근성평가원 KWACC 인증 마크 획득"],
    },
    {
      name: "HUONS 그룹 및 제품 웹사이트 개발",
      company: "Freeneo",
      skills: ["Wordpress", "PHP", "jQuery", "SCSS"],
    },
  ],
};

export default RESUME;
