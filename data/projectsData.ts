import { TranslationKeys } from "@/hooks/use-translation";

export interface Project {
  src: string;
  title: string;
  descriptionKey: keyof TranslationKeys["projectsData"]["descriptions"];
  projectUrl: string;
  date: string;
  awards: (keyof TranslationKeys["projectsData"]["awards"])[];
  location?: keyof TranslationKeys["projectsData"]["locations"];
}

const projectsData: Project[] = [
  {
    src: "/img/projects/cosmocProof.jpg",
    title: "CosmicProof",
    descriptionKey: "cosmicproof",
    projectUrl: "https://dorahacks.io/buidl/14119",
    date: "july_2024",
    awards: ["third_place_overall", "mina_track", "node101_track"],
    location: "lambdaClass_hackathon",
  },
  {
    src: "/img/projects/orchave.jpg",
    title: "Orchave",
    descriptionKey: "orchave",
    projectUrl: "https://ethglobal.com/showcase/orchave-qsyni",
    date: "july_2024",
    awards: ["first_place_filecoin", "pool_prize_avail"],
    location: "ethglobal_brussels",
  },
  {
    src: "/img/projects/nevo.jpg",
    title: "NEVO",
    descriptionKey: "nevo",
    projectUrl: "https://github.com/atahanyild/NEVO",
    date: "april_2024",
    awards: ["won_in_two_tracks", "multiple_prizes"],
    location: "ethdam_2023",
  },
  {
    src: "/img/projects/marketmaker.jpg",
    title: "MarketMaker",
    descriptionKey: "marketmaker",
    projectUrl: "https://ethglobal.com/showcase/orchave-qsyni",
    date: "july_2024",
    awards: ["first_place_pythnetwork", "pool_prize_worldcoin"],
    location: "ethglobal_brussels",
  },
  {
    src: "/img/projects/wisper.jpg",
    title: "Wisper",
    descriptionKey: "wisper",
    projectUrl: "https://ethglobal.com/showcase/wisper-upaz9",
    date: "july_2024",
    awards: ["multiple_grants"],
    location: "ethglobal_brussels",
  },
];

export default projectsData;
