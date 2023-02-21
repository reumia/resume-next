import { Profile } from "@/types";

const PROFILE: Profile = {
  name: "조현석",
  startAt: new Date(2013, 2, 1),
  descriptions:
    "Front-end 주력의 JavaScript 개발자입니다.<br/>Naver 서비스의 Markup을 통해 HTML/SCSS의 차별화된 전문성을 쌓았으며, Vue/React 등의 Modern View Framework의 경험과 Node.js Express를 이용한 API WAS 개발, Client 도구개발 등 JavaScript 생태계를 폭 넓게 경험했습니다.  JAVA, PHP 등의 일반적인 Back-end환경과의 협업과 Heroku, Firebase등을 이용한 REST, Serverless 환경 기반 개발 역량을 갖추었습니다.",
  image: "/profile-min.png",
  socials: [
    {
      name: "Email",
      url: "mailto:reumia@gmail.com",
    },
    {
      name: "Blog",
      url: "https://dev.zzoman.com",
    },
    {
      name: "Github",
      url: "https://github.com/reumia",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/hyunsuk-jo-87128310a/",
    },
  ],
};

export default PROFILE;
