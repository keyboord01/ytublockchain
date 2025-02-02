export interface Event {
  title: string;
  country: string;
  location: string;
  descriptionKey: string;
  link: string;
  awards?: string[];
}

export const eventData: Event[] = [
  {
    title: "NFTICKET",
    country: "Turkey",
    location: "Istanbul",
    descriptionKey: "nfticket",
    link: "https://github.com/KayaKerem/NFTicket",
    awards: ["first_place"],
  },
  {
    title: "DEAUTH",
    country: "Germany",
    location: "Berlin",
    descriptionKey: "deauth",
    link: "https://github.com/KayaKerem/deauth-ethberlin",
  },
  {
    title: "RE-FARM",
    country: "Turkey",
    location: "Istanbul",
    descriptionKey: "refarm",
    link: "https://github.com/KayaKerem/AkbankReFi",
  },
  {
    title: "TOKENSTALK",
    country: "France",
    location: "Paris",
    descriptionKey: "tokenstalk",
    link: "https://github.com/KayaKerem/tokenstalk-starknethh",
  },
  {
    title: "GREEDYSNAP",
    country: "Serbia",
    location: "Belgrade",
    descriptionKey: "greedysnap",
    link: "https://taikai.network/ethbelgrade/hackathons/hackathon-2023/projects/clikdhehk013vwy01osu6g47v/idea",
  },
  {
    title: "NEVO",
    country: "Netherlands",
    location: "Amsterdam",
    descriptionKey: "nevo",
    link: "https://github.com/atahanyild/NEVO",
  },
  {
    title: "COSMICPROOF",
    country: "Serbia",
    location: "Belgrade",
    descriptionKey: "cosmicproof",
    link: "https://dorahacks.io/buidl/14119",
  },
  {
    title: "MARKETMAKER",
    country: "Belgium",
    location: "Brussels",
    descriptionKey: "marketmaker",
    link: "https://ethglobal.com/showcase/orchave-qsyni",
  },
  {
    title: "ORCHAVE",
    country: "Belgium",
    location: "Brussels",
    descriptionKey: "orchave",
    link: "https://ethglobal.com/showcase/orchave-qsyni",
  },
  {
    title: "WISPER",
    country: "Belgium",
    location: "Brussels",
    descriptionKey: "wisper",
    link: "https://ethglobal.com/showcase/wisper-upaz9",
  },

  {
    title: "Avalanche Summit",
    country: "Spain",
    location: "Barcelona",
    descriptionKey: "avalanche_summit",
    link: "",
  },
  {
    title: "ETH Warsaw",
    country: "Poland",
    location: "Warsaw",
    descriptionKey: "eth_warsaw",
    link: "",
  },
  {
    title: "ETH Lisbon",
    country: "Portugal",
    location: "Lisbon",
    descriptionKey: "eth_lisbon",
    link: "",
  },
  {
    title: "EDCON",
    country: "Montenegro",
    location: "Montenegro",
    descriptionKey: "edcon",
    link: "",
  },
  {
    title: "ETH London",
    country: "United Kingdom",
    location: "London",
    descriptionKey: "eth_london",
    link: "",
  },
  {
    title: "Sui Basecamp",
    country: "France",
    location: "Paris",
    descriptionKey: "sui_basecamp",
    link: "",
  },
  {
    title: "TUM Blockchain",
    country: "Germany",
    location: "Munich",
    descriptionKey: "tum_blockchain",
    link: "",
  },
];
