export interface Project {
  src: string;
  title: string;
  description: string;
  projectUrl: string;
  date: string;
  awards: string[];
  location?: string;
}

const projectsData: Project[] = [
  {
    src: "/img/projects/cosmocProof.jpg",
    title: "CosmicProof",
    description:
      "We developed CosmicProof, which makes historical data on Cosmos provable using o1js. Presented at LambdaClass Hackathon in Belgrade, we took third place as Finalist and won first place in MinaProtocol and node101 tracks.",
    projectUrl: "https://dorahacks.io/buidl/14119",
    date: "July 2024",
    awards: ["3rd Place Overall", "1st Place Mina", "1st Place node101"],
    location: "LambdaClass Hackathon",
  },
  {
    src: "/img/projects/orchave.jpg",
    title: "Orchave",
    description:
      "Decentralized, instant data oracle that lets users customize APIs and become data providers. Won top honors at ETHGlobal Brussels with our solution integrating Filecoin and Avail technologies.",
    projectUrl: "https://ethglobal.com/showcase/orchave-qsyni",
    date: "July 2024",
    awards: ["1st Place Filecoin", "Pool Prize AvailProject"],
    location: "ETHGlobal Brussels",
  },
  {
    src: "/img/projects/nevo.jpg",
    title: "NEVO",
    description:
      "MaCi voting solution on NEAR Protocol developed for ETHDam 2023 in Amsterdam, recognized with awards in two separate tracks.",
    projectUrl: "https://github.com/atahanyild/NEVO",
    date: "April 2024",
    awards: ["Won in 2 Tracks", "Multiple Prizes"],
    location: "ETHDam 2023",
  },
  {
    src: "/img/projects/marketmaker.jpg",
    title: "MarketMaker",
    description:
      "Market-making solution that claimed top spot in PythNetwork track and won Worldcoin pool prize at ETHGlobal Brussels.",
    projectUrl: "https://ethglobal.com/showcase/orchave-qsyni",
    date: "July 2024",
    awards: ["1st Place PythNetwork", "Pool Prize Worldcoin"],
    location: "ETHGlobal Brussels",
  },
  {
    src: "/img/projects/wisper.jpg",
    title: "Wisper",
    description:
      "P2P chatting application enabling trustless chat rooms through private local blockchains, developed for ETHGlobal Brussels.",
    projectUrl: "https://ethglobal.com/showcase/wisper-upaz9",
    date: "July 2024",
    awards: ["Multiple Grants"],
    location: "ETHGlobal Brussels",
  },
];

export default projectsData;
