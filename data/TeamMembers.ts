export interface TeamMember {
  roles: string[];
  id: number;
  name: string;
  image: string;
  description: string;
  github?: string;
  twitter?: string;
  linkedin?: string;
  currentJob?: string;
  achievements?: string[];
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Keemo Soulaibi",
    roles: ["Supreme Leader"],
    image: "/img/team/kemo.png",
    description: "Leading YTUBlockchain's vision and strategy, Atahan ......",
    github: "https://github.com/keyboord01",
    twitter: "twitter.com/keyyyy01",
    linkedin: "linkedin.com/in/ahmed-zm",
    currentJob: "Supreme Leader at YTUBlockchain",
  },
  {
    id: 2,
    name: "Atahan Yildirim",
    roles: ["Developer", "President"],
    image: "/img/team/atahan.png",
    description:
      "He is from Ereğli not Konya. Just a chill developer. He likes to boss around in his free times. You will probably see him with Ahmed.",
    github: "https://github.com/keyboord01",
    twitter: "twitter.com/keyyyy01",
    linkedin: "linkedin.com/in/ahmed-zm",
  },
  {
    id: 3,
    name: "Ahmed Murshed",
    roles: ["Developer"],
    image: "/img/team/ahmed.png",
    description:
      "Have a small chat with him, he can convince you to do anything. Likes coding and mocking people. You will probably see him with Atahan.",
    github: "https://github.com/keyboord01",
    twitter: "twitter.com/keyyyy01",
    linkedin: "linkedin.com/in/ahmed-zm",
  },
  {
    id: 4,
    name: "Irem Koci",
    roles: ["Marketing", "Community"],
    image: "/img/team/irem.png",
    description:
      "Pinterest girl. She loves to organize stuff and plans , give her a community so she can influence or vlog them.",
    github: "https://github.com/keyboord01",
    twitter: "twitter.com/keyyyy01",
    linkedin: "linkedin.com/in/ahmed-zm",
  },
  {
    id: 5,
    name: "Kerem Gegek",
    roles: ["Researcher", "Content writer"],
    image: "/img/team/kerem.png",
    description:
      "Fan of content writing and Tennis. a Zonguldak boi with a passion for cryptography. Loves watching sitcoms in his free time.",
    github: "https://github.com/keyboord01",
    twitter: "twitter.com/keyyyy01",
    linkedin: "linkedin.com/in/ahmed-zm",
  },
  {
    id: 6,
    name: "Miray Salar",
    roles: ["Designer"],
    image: "/img/team/miray.png",
    description:
      "Chill Girl. Loves colors, shapes or anything that has to do with art. Only animal she loves is Kemo. Not a morning person.",
    github: "https://github.com/keyboord01",
    twitter: "twitter.com/keyyyy01",
    linkedin: "linkedin.com/in/ahmed-zm",
  },
  {
    id: 7,
    name: "Zeynep Sude Kacar",
    roles: ["Marketing", "Content writer"],
    image: "/img/team/zeynep.png",
    description:
      "Marketing & writer girl, she reads Bitcoin’s whitepaper in her free times, big cinema lover. Her future dream is to read crypto news in her yacht. Can’t eat gluten.",
    github: "https://github.com/keyboord01",
    twitter: "twitter.com/keyyyy01",
    linkedin: "linkedin.com/in/ahmed-zm",
  },
  {
    id: 8,
    name: "Bora",
    roles: ["Developer"],
    image: "/img/team/bora.png",
    description:
      "We don’t who he is. I think he is going to an exchange program",
    github: "https://github.com/keyboord01",
    twitter: "twitter.com/keyyyy01",
    linkedin: "linkedin.com/in/ahmed-zm",
  },
  {
    id: 9,
    name: "Sena Eser",
    roles: ["Developer"],
    image: "/img/team/sena.png",
    description:
      "Crafting engaging content that makes blockchain technology accessible and exciting.",
    github: "https://github.com/keyboord01",
    twitter: "twitter.com/keyyyy01",
    linkedin: "linkedin.com/in/ahmed-zm",
  },
  {
    id: 10,
    name: "Kutay Sari",
    roles: ["Developer"],
    image: "/img/team/kutay.png",
    description:
      "Crafting engaging content that makes blockchain technology accessible and exciting.",
    github: "https://github.com/keyboord01",
    twitter: "twitter.com/keyyyy01",
    linkedin: "linkedin.com/in/ahmed-zm",
  },
  {
    id: 11,
    name: "Beyzanur Yildirim",
    roles: ["Marketing", "Community"],
    image: "/img/team/beyza.png",
    description: "Social media girl with a passion for.",
    github: "https://github.com/keyboord01",
    twitter: "twitter.com/keyyyy01",
    linkedin: "linkedin.com/in/ahmed-zm",
  },
  {
    id: 12,
    name: "Yusuf Emir",
    roles: ["Organization", "Community"],
    image: "/img/team/yusuf.png",
    description:
      "The weirdest laugh we have ever heard, just sit and hear his stories also the ones in NY. Nailed some big crypto events. Just give him a call.",
    github: "https://github.com/keyboord01",
    twitter: "twitter.com/keyyyy01",
    linkedin: "linkedin.com/in/ahmed-zm",
  },
  {
    id: 13,
    name: "Ecem Sarikaya",
    roles: ["Marketing", "Community"],
    image: "/img/team/ecem.png",
    description:
      "Gym girl, the healthiest person in this club. Just vibing around Davutpaşa. Dm her for fitness advices or partnerships.",
    github: "https://github.com/keyboord01",
    twitter: "twitter.com/keyyyy01",
    linkedin: "linkedin.com/in/ahmed-zm",
  },
  {
    id: 14,
    name: "Alperan",
    roles: ["Marketing", "Community"],
    image: "/img/team/alperen.png",
    description:
      "Gym girl, the healthiest person in this club. Just vibing around Davutpaşa. Dm her for fitness advices or partnerships.",
    github: "https://github.com/alperen2306",
    twitter: "https://x.com/alpakgeyik?s=21",
    linkedin: "https://github.com/alperen2306",
  },
  {
    id: 15,
    name: "Leyla Gur",
    roles: ["Marketing", "Community"],
    image: "/img/team/leyla.png",
    description:
      "Gym girl, the healthiest person in this club. Just vibing around Davutpaşa. Dm her for fitness advices or partnerships.",
    github: "https://github.com/leylagur",
    twitter: "https://x.com/leylagur00",
    linkedin: "https://www.linkedin.com/in/leyla-gür-1a9753326/",
  },
  {
    id: 16,
    name: "Serra Vardir",
    roles: ["Marketing", "Community"],
    image: "/img/team/serra.png",
    description:
      "Gym girl, the healthiest person in this club. Just vibing around Davutpaşa. Dm her for fitness advices or partnerships.",
    twitter: "https://x.com/dserravardar?s=21",
    linkedin: "https://www.linkedin.com/in/serra-vardar-579426332",
  },
  {
    id: 17,
    name: "Caglar",
    roles: ["Designer"],
    image: "/img/team/caglar.png",
    description:
      "Gym girl, the healthiest person in this club. Just vibing around Davutpaşa. Dm her for fitness advices or partnerships.",
    twitter: "https://x.com/0xcagavci?s=11",
  },
];

export default teamMembers;
