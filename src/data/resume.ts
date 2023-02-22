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
      name: "AI 플랫폼 조직내 기능조직 FE팀 리딩",
      company: "Lunit",
      descriptions: [
        "서로 다른 영상의학을 대상으로하는 AI 모델의 개발을 위한 다수의 서비스 개발/운영/설계",
        "다수 서비스의 일관되고 정기적인 배포 프로세스 및 브랜치 관리 전략 수립/운영",
        "신규 기능의 서비스 적용을 위한 사전 검토 및 프로토타이핑",
        "신규 기능의 서비스 영향도 검토 및 적용 방향성 설계",
        "팀원의 기술적 성장과 협업을 위한 코드리뷰, 페어프로그래밍, 설계 지원, 스터디 운영",
        "정기적인 팀 미팅을 통해 팀 주도 도전적 과제 및 서비스의 개선을 위한 의견 취합 및 로드맵 작성",
      ],
    },
    {
      name: "어노테이션 프로젝트 관리 도구 개편/운영",
      company: "Lunit",
      skills: [
        "React",
        "Typescript",
        "Recoil",
        "ESLint",
        "Material UI",
        "Vercel",
        "Github Actions",
      ],
      descriptions: [
        "어노테이션 프로젝트에 필요한 여러 데이터를 생성/수정/운영하는 백오피스 도구 개편/운영",
        "데이터의 생성/수정, 필터링에 사용되는 복잡한 Form UI의 보편적인 디자인 구축 및 일원화",
        "디자이너가 없는 사내 서비스의 UI/UX 개편 주도",
      ],
    },
    {
      name: "AI 어노테이션 도구 운영성 개편/운영",
      company: "Lunit",
      skills: [
        "React",
        "Typescript",
        "Recoil",
        "ESLint",
        "Material UI",
        "Vercel",
        "Github Actions",
      ],
      descriptions: [
        "방사선 이미지에 병변을 표시하여 빅데이터 기반 AI모델을 수집하는 어노테이션 도구 개발/개편/운영",
        "특정 AI 모델 개발을 위해 일회성으로 요청/개발/폐기되던 어노테이션 도구를 지속적으로 운영하고 신규 기능을 추가할 수 있는 도구로 개편",
        "하나의 페이지를 렌더링하기 위해 다수의 API에 의존하는 어플리케이션 구조를 구독형 비동기 상태관리 도구 Recoil을 적용하여 서비스의 운영성을 대폭 개선",
        "React의 신규기능 Suspense와 ErrorBoundary를 적용하여 고질적으로 발생하던 비동기 로직의 상태 및 에러 관리 개선",
        "서비스의 운영 난이도를 낮추기 위해 쉽게 이해하고 납득할 수 있도록 기존 API 설계의 개편 제안 및 주도",
        "디자이너가 없는 사내 서비스의 UI/UX 개편 주도",
      ],
    },
    {
      name: "글로벌 스마트스토어 설계/개발",
      company: "NAVER",
      skills: ["Next.js", "Typescript", "ESLint", "SSR", "GraphQL"],
      descriptions: [
        "브랜드스토어 전시관리툴의 제안/설계/개발 경험을 바탕으로 동일한 기능을 포함한 일본향 글로벌 스마트스토어 개발 참여",
        "신규 기술 Next.js 적용을 위한 사전 검토/설계/개발 주도",
        "MSA로 운영되는 사내 API의 유연한 활용을 위한 GraphQL 적용 검토/개발 참여",
      ],
    },
    {
      name: "브랜드스토어 개발/운영 및 전시관리툴 설계/개발",
      company: "NAVER",
      skills: [
        "React",
        "Webpack",
        "Typescript",
        "Redux",
        "ESLint",
        "SSR",
        "Koa",
        "Node.js",
      ],
      descriptions: [
        "특정 기업을 위한 고도화된 커스터마이징 제공 목적의 브랜드스토어 신규 개발/운영",
        "WYSIWYG 전시관리툴에 대한 UI 프로토타입 설계 및 제안으로 신규 프로젝트 기획 주도",
      ],
    },
    {
      name: "스마트스토어 React 전환 및 운영",
      company: "NAVER",
      skills: [
        "React",
        "Webpack",
        "Typescript",
        "Redux",
        "ESLint",
        "SSR",
        "Koa",
        "Node.js",
      ],
      descriptions: [
        "Java 기반 템플리팅 도구 FreeMarker로 개발/운영되던 레거시 스마트스토어의 React 전환 프로젝트 참여",
        "server-side-rendering 지원을 위한 Node.js 서버 개발 및 운영",
        "PM2를 활용한 Node.js 어플리케이션의 운영/배포구성/모니터링 경험",
      ],
    },
    {
      name: "Selective 서비스 오픈",
      company: "NAVER",
      skills: ["React", "Webpack", "Typescript", "Redux", "ESLint"],
      descriptions: [
        "네이버 쇼핑 라이브 전신인 Selective 서비스 개발/오픈 지원",
        "FE 개발자가 없는 타 팀의 프로젝트 FE 리드로 지원, 프로젝트 설계 및 운영가이드 구축 주도",
        "Mobile/PC 멀티플랫폼 대응 HTML5 Video Player 개발",
        "React 기반 CSR 반응형 웹 어플리케이션",
      ],
    },
    {
      name: "네이버 쇼핑 리뷰작성 도구 운영/개편",
      company: "NAVER",
      skills: ["React", "Webpack", "TypeScript", "Redux", "ESLint"],
      descriptions: [
        "네이버 쇼핑 리뷰작성 도구 운영 및 개편",
        "Mobile/PC 멀티플랫폼 대응 드래그&드롭 UI 개발",
      ],
    },
    {
      name: "게임 로비 및 스토어 운영/개편",
      company: "PUBG Co.",
      skills: ["Angular", "Redux", "SCSS"],
      descriptions: [
        "언리얼 인앱 브라우저에 Angular.js로 개발된 게임 로비 어플리케이션 운영",
        "Angular.js로 개발된 기존 어플리케이션을 Angular4로 개편",
        "상점 메뉴 디자인 개편 및 신규 배틀패스 메뉴 개발",
      ],
    },
    {
      name: "모바일 수익 지표 시각화 도구 개발",
      company: "PUBG Co.",
      skills: ["React", "SCSS"],
      descriptions: [
        "Tableau로 제공되던 수익 지표 대신 모바일로 쉽게 확인할 수 이는 실시간성 모바일 시각화 도구에 대한 개발 필요",
      ],
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
