import { Profile } from "@/types";

const PROFILE: Profile = {
  name: "Name of Developer", // string
  startAt: new Date(1999, 12, 31), // date
  descriptions:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam blandit lacus quam, sed sodales sapien malesuada vitae. In nec pellentesque sapien. Nunc viverra sapien id est placerat, quis ultrices eros vulputate. Mauris a rhoncus purus. Suspendisse quis laoreet massa. Aliquam laoreet maximus odio, et viverra dolor scelerisque vitae. Duis nisl mauris, porta et mollis vel, sollicitudin sed turpis. Sed nec placerat urna.",
  image: "https://pbs.twimg.com/profile_images/1103991968/____400x400.png", // url
  socials: [
    {
      name: "Email", // string
      url: "mailto:hong@gildong.com", // url
    },
    {
      name: "Blog",
      url: "https://honggildong.com",
    },
    {
      name: "Github",
      url: "https://github.com/honggildong",
    },
  ],
};

export default PROFILE;
