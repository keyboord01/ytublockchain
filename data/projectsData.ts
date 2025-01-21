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
      "Our Cosmic Proof project revolutionizes blockchain interoperability by implementing zero-knowledge proofs across multiple chains. This groundbreaking solution secured multiple victories at Lambda Hack Week, demonstrating its potential to reshape cross-chain communication...",
    projectUrl: "https://example.com/cosmic-proof",
    date: "March 2024",
    awards: ["1st Place Cosmos", "1st Place Mina", "3rd Overall"],
    location: "Lambda Hack Week",
  },
  {
    src: "/img/projects/orchave.jpg",
    title: "Orchave",
    description:
      "Orchave is a modular decentralized oracle solution that streamlines the process of verifying and delivering off-chain data to blockchains. It features a Provider App for users to easily become data providers, a lightweight Verifier Network that enables rapid data verification without relying on traditional consensus mechanisms, and a user-friendly dashboard for accessing the best archive endpoints. By integrating Filecoin for persistent storage, Avail for fast block ordering finality, and dynamic social reputation mechanisms, Orchave establishes a scalable, trustless, and efficient ecosystem for decentralized data access and monetization.",
    projectUrl: "https://example.com/orchave",
    date: "April 2024",
    awards: ["1st Place Filecoin Track", "Pool Prize AvailProject Track"],
    location: "ETHGlobal Brussels",
  },
  {
    src: "/img/projects/nevo.jpg",
    title: "NeVO",
    description:
      "NEVO seamlessly integrates Near Protocol's Cross-Chain Signatures with MACI's secure, zero-knowledge proof-powered voting system to deliver a smooth, private, and bribe-resistant voting experience. By leveraging these groundbreaking technologies, NEVO ensures that even users with minimal tech experience can participate confidently in elections, paving the way for MACI to be adopted in national elections while maintaining accessibility and security for all voters.",
    projectUrl: "https://example.com/nevo",
    date: "jan 2024",
    awards: ["Won in 2 Tracks", "Multiple Prizes"],
    location: "ETHGlobal Brussels",
  },
  {
    src: "/img/projects/cosmocProof.jpg",
    title: "CosmicProof",
    description:
      "Our Cosmic Proof project revolutionizes blockchain interoperability by implementing zero-knowledge proofs across multiple chains. This groundbreaking solution secured multiple victories at Lambda Hack Week, demonstrating its potential to reshape cross-chain communication...",
    projectUrl: "https://example.com/cosmic-proof",
    date: "March 2024",
    awards: ["1st Place Cosmos", "1st Place Mina", "3rd Overall"],
    location: "Lambda Hack Week",
  },
  {
    src: "/img/projects/orchave.jpg",
    title: "Orchave",
    description:
      "Orchave is a modular decentralized oracle solution that streamlines the process of verifying and delivering off-chain data to blockchains. It features a Provider App for users to easily become data providers, a lightweight Verifier Network that enables rapid data verification without relying on traditional consensus mechanisms, and a user-friendly dashboard for accessing the best archive endpoints. By integrating Filecoin for persistent storage, Avail for fast block ordering finality, and dynamic social reputation mechanisms, Orchave establishes a scalable, trustless, and efficient ecosystem for decentralized data access and monetization.",
    projectUrl: "https://example.com/orchave",
    date: "April 2024",
    awards: ["1st Place Filecoin Track", "Pool Prize AvailProject Track"],
    location: "ETHGlobal Brussels",
  },
  {
    src: "/img/projects/nevo.jpg",
    title: "NeVO",
    description:
      "NEVO seamlessly integrates Near Protocol's Cross-Chain Signatures with MACI's secure, zero-knowledge proof-powered voting system to deliver a smooth, private, and bribe-resistant voting experience. By leveraging these groundbreaking technologies, NEVO ensures that even users with minimal tech experience can participate confidently in elections, paving the way for MACI to be adopted in national elections while maintaining accessibility and security for all voters.",
    projectUrl: "https://example.com/nevo",
    date: "jan 2024",
    awards: ["Won in 2 Tracks", "Multiple Prizes"],
    location: "ETHGlobal Brussels",
  },
];

export default projectsData;
