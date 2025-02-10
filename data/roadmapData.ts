export interface Subsection {
  id: string;
  title: string;
  subsections?: Subsection[];
}

export interface Section {
  id: string;
  title: string;
  subsections: Subsection[];
}

export const englishRoadmapData: Section[] = [
  {
    id: "0",
    title: "Guide to the Guide",
    subsections: [],
  },
  {
    id: "1",
    title: "What is Blockchain?",
    subsections: [],
  },
  {
    id: "2",
    title: "A detailed look at Bitcoin",
    subsections: [
      { id: "2.1", title: "Bitcoin History & Decentralization" },
      { id: "2.2", title: "Distributed Systems" },
      { id: "2.3", title: "More Hash related content" },
      { id: "2.4", title: "Digital Signatures and Asymmetric Cryptography" },
      { id: "2.5", title: "Proof of Work" },
    ],
  },
  {
    id: "3",
    title: "Ethereum",
    subsections: [
      {
        id: "3.1",
        title: "How Does Ethereum Work?",
        subsections: [
          { id: "3.1.1", title: "Consensus Mechanisms" },
          { id: "3.1.2", title: "Nodes, Validators and Mining" },
          { id: "3.1.3", title: "Ethereum Virtual Machine (EVM)" },
          { id: "3.1.4", title: "Gas Fees" },
          { id: "3.1.5", title: "Smart Contracts" },
          { id: "3.1.6", title: "Merkle Tree" },
        ],
      },
      { id: "3.2", title: "History of Ethereum" },
      { id: "3.3", title: "Difference Between Bitcoin and Ethereum" },
    ],
  },
  {
    id: "4",
    title: "Blockchain Ecosystem",
    subsections: [
      { id: "4.1", title: "Decentralized Applications (Dapps)" },
      { id: "4.2", title: "Wallets" },
      { id: "4.3", title: "Interacting with Web3" },
    ],
  },
  {
    id: "5",
    title: "Blockchain Application Areas and Concepts",
    subsections: [
      { id: "5.1", title: "DeFi" },
      { id: "5.2", title: "Stablecoins" },
      { id: "5.3", title: "Non-Fungible Token (NFT)" },
      { id: "5.4", title: "DAO (Decentralized Autonomous Organizations)" },
      { id: "5.5", title: "Other Blockchain Application Areas" },
      { id: "5.6", title: "Tokenomics" },
      { id: "5.7", title: "Oracle" },
    ],
  },
  {
    id: "6",
    title: "Advanced Blockchain Concepts",
    subsections: [],
  },
];

export const turkishRoadmapData: Section[] = [
  {
    id: "0",
    title: "Rehberin Rehberi",
    subsections: [],
  },
  {
    id: "1",
    title: "Blockchain nedir?",
    subsections: [],
  },
  {
    id: "2",
    title: "Bitcoin’e detaylı bir bakış",
    subsections: [
      { id: "2.1", title: "Bitcoin Tarihi & Merkeziyetsizlik" },
      { id: "2.2", title: "Dağıtılmış Sistemler" },
      { id: "2.3", title: "Hash ile alakalı daha fazla içerik" },
      { id: "2.4", title: "Dijital İmzalar ve Asimetrik Kriptografi" },
      { id: "2.5", title: "Proof of Work" },
    ],
  },
  {
    id: "3",
    title: "Ethereum",
    subsections: [
      {
        id: "3.1",
        title: "Ethereum Nasıl Çalışır?",
        subsections: [
          { id: "3.1.1", title: "Mutabakat Mekanizmaları" },
          { id: "3.1.2", title: "Düğümler, Validatörler ve Madencilik" },
          { id: "3.1.3", title: "Ethereum Sanal Makinesi (EVM)" },
          { id: "3.1.4", title: "Gas Ücretleri" },
          { id: "3.1.5", title: "Akıllı Sözleşmeler" },
          { id: "3.1.6", title: "Merkle Ağacı" },
        ],
      },
      { id: "3.2", title: "Ethereum Tarihi" },
      { id: "3.3", title: "Bitcoin ve Ethereum Farkı" },
    ],
  },
  {
    id: "4",
    title: "Blockchain Ekosistemi",
    subsections: [
      { id: "4.1", title: "Merkezîyetsiz Uygulamalar (Dapps)" },
      { id: "4.2", title: "Cüzdanlar" },
      { id: "4.3", title: "Web3 ile Etkileşime Girmek" },
    ],
  },
  {
    id: "5",
    title: "Blockchain Uygulama Alanları ve Konseptleri",
    subsections: [
      { id: "5.1", title: "DeFi" },
      { id: "5.2", title: "Dijital Dolar" },
      { id: "5.3", title: "Değiştirilemez Kripto Para (NFT)" },
      { id: "5.4", title: "Merkeziyetsiz Otonom Örgütler (DAO)" },
      { id: "5.5", title: "Diğer Blockchain Uygulama Alanları" },
      { id: "5.6", title: "Kripto Para Ekonomisi" },
      { id: "5.7", title: "Oracle" },
    ],
  },
  {
    id: "6",
    title: "İleri Seviye Blockchain Konseptleri",
    subsections: [],
  },
];
