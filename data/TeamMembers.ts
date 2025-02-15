export interface TeamMember {
  roles: string[];
  id: number;
  name: string;
  image: string;
  description: string;
  github?: string;
  twitter?: string;
  linkedin?: string;
}

export const englishTeamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Keemo Soulaibi",
    roles: ["Supreme Leader"],
    image: "/img/team/kemo.png",
    description:
      "I, Keemo, have taken over, let's face it, I saved the site. I'm the cat with the plan, and now, I'm calling the shots. You're welcome for the leadership",
  },
  {
    id: 2,
    name: "Atahan Yildirim",
    roles: ["Developer", "President"],
    image: "/img/team/atahan.png",
    description:
      "He is from Ereğli not Konya. Just a chill developer. He likes to act like he's coding in his free time. You will probably see him with Ahmed.",
    github: "https://github.com/atahanyild",
    twitter: "https://twitter.com/atahanyild",
    linkedin: "https://linkedin.com/in/atahanyild",
  },
  {
    id: 3,
    name: "Ahmed Murshed",
    roles: ["Developer"],
    image: "/img/team/ahmed.png",
    description:
      "Have a small chat with him, he can convince you to do anything. Likes coding and talking to people. You will probably see him with Atahan.",
    github: "https://github.com/keyboord01",
    twitter: "https://twitter.com/keyyyy01",
    linkedin: "https://linkedin.com/in/ahmed-zm",
  },
  {
    id: 4,
    name: "Irem Koci",
    roles: ["Marketing", "Community"],
    image: "/img/team/irem.png",
    description:
      "Pinterest girl. She loves to organize stuff and plans, give her a community so she can influence or vlog them.",
    github: "https://github.com/irmkoci",
    twitter: "https://x.com/home",
    linkedin: "https://www.linkedin.com/in/irem-ko%C3%A7i-4757a0217/",
  },
  {
    id: 5,
    name: "Kerem Gegek",
    roles: ["Researcher", "Content writer"],
    image: "/img/team/kerem.png",
    description:
      "Fan of content writing and tennis. A Zonguldak boi with a passion for cryptography. Loves watching sitcoms in his free time.",
    github: "https://github.com/kerem6790",
    twitter: "https://x.com/kerem6790x",
    linkedin: "https://www.linkedin.com/in/kerem-gegek-48336a244/",
  },
  {
    id: 6,
    name: "Miray Salar",
    roles: ["Designer"],
    image: "/img/team/miray.png",
    description:
      "Chill girl. Loves colors, shapes or anything that has to do with art. The only animal she loves is Kemo. Not a morning person.",
    twitter: "https://x.com/mirayssalar",
    linkedin: "https://www.linkedin.com/in/miray-salar-b94290290/",
  },
  {
    id: 7,
    name: "Zeynep Sude Kacar",
    roles: ["Marketing", "Content writer"],
    image: "/img/team/zeynep.png",
    description:
      "Marketing & writer girl; she reads Bitcoin’s whitepaper in her free time, is a big cinema lover, and dreams of reading crypto news on her yacht. Can't eat gluten.",
    twitter: "https://x.com/zese_kacar?s=21 ",
    linkedin:
      "https://www.linkedin.com/in/zeynep-sude-kacar-9a6b13255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  {
    id: 8,
    name: "Bora",
    roles: ["Developer"],
    image: "/img/team/bora.png",
    description:
      "We don’t know who he is. I think he is going to an exchange program.",
    github: "https://github.com/borailci",
    twitter: "https://twitter.com/kuwiraW",
    linkedin: "https://linkedin.com/in/bora-ilci",
  },
  {
    id: 9,
    name: "Sena Eser",
    roles: ["Developer"],
    image: "/img/team/sena.png",
    description:
      "Crafting engaging content that makes blockchain technology accessible and exciting.",
    github: "https://github.com/Senaseser",
    twitter: "https://twitter.com/senaeser02",
    linkedin: "https://www.linkedin.com/in/sena-eser1",
  },
  {
    id: 10,
    name: "Kutay Sari",
    roles: ["Developer"],
    image: "/img/team/kutay.png",
    description:
      "Crafting engaging content that makes blockchain technology accessible and exciting.",
    github: "https://github.com/KkutaySarii",
    twitter: "https://x.com/0xkutaysari",
    linkedin: "https://www.linkedin.com/in/kutay-sarii",
  },
  {
    id: 11,
    name: "Beyzanur Yildirim",
    roles: ["Marketing", "Community"],
    image: "/img/team/beyza.png",
    description: "Social media girl with a passion for storytelling.",
    twitter: "https://x.com/bbeyzanryldrm?s=21",
    linkedin: "http://linkedin.com/in/beyzanuryildirim",
  },
  {
    id: 12,
    name: "Yusuf Emir",
    roles: ["Organization", "Community"],
    image: "/img/team/yusuf.png",
    description:
      "The weirdest laugh we have ever heard—just sit and listen to his stories (including those from NY). He’s nailed some big crypto events. Just give him a call.",
    github: "https://github.com/yusufemiraltinkaynak",
    linkedin: "https://tr.linkedin.com/in/yeabest",
  },
  {
    id: 13,
    name: "Ecem Sarikaya",
    roles: ["Marketing", "Community"],
    image: "/img/team/ecem.png",
    description:
      "Gym girl, the healthiest person in this club. Just vibing around Davutpaşa. DM her for fitness advice or partnerships.",
  },
  {
    id: 14,
    name: "Alperen",
    roles: ["Marketing", "Community"],
    image: "/img/team/alperen.png",
    description:
      "Gym enthusiast with a passion for crypto. DM him for collaborations or fitness tips.",
    github: "https://github.com/alperen2306",
    twitter: "https://twitter.com/alpakgeyik?s=21",
    linkedin: "https://github.com/alperen2306",
  },
  {
    id: 15,
    name: "Leyla Gur",
    roles: ["Marketing", "Community"],
    image: "/img/team/leyla.png",
    description:
      "Creative and driven. Loves a good challenge and innovative marketing strategies.",
    github: "https://github.com/leylagur",
    twitter: "https://twitter.com/leylagur00",
    linkedin: "https://www.linkedin.com/in/leyla-gür-1a9753326/",
  },
  {
    id: 16,
    name: "Serra Vardar",
    roles: ["Marketing", "Community"],
    image: "/img/team/serra.png",
    description:
      "Passionate about community building and innovative marketing. Always up for new challenges.",
    twitter: "https://twitter.com/dserravardar?s=21",
    linkedin: "https://www.linkedin.com/in/serra-vardar-579426332",
  },
  {
    id: 17,
    name: "Caglar",
    roles: ["Designer"],
    image: "/img/team/caglar.png",
    description: "Creative designer with a knack for visual storytelling.",
    twitter: "https://twitter.com/0xcagavci?s=11",
  },
];

export const turkishTeamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Keemo Soulaibi",
    roles: ["Üst Lider"],
    image: "/img/team/kemo.png",
    description:
      "Ben Keemo, kabul edelim, siteyi devraldım ve kurtardım. Ben planları olan bir kediyim ve şimdi onları gerçekleştiriyorum. Liderlik için rica ederim.",
  },
  {
    id: 2,
    name: "Atahan Yildirim",
    roles: ["Yazılımcı", "Başkan"],
    image: "/img/team/atahan.png",
    description:
      "Ereğli'den, Konya'dan değil. Sakin bir yazılımcı. boş zamanlarında kodluyor gibi yapmayı sever. Muhtemelen onu Ahmed ile birlikte görüceksiniz .",
    github: "https://github.com/atahanyild",
    twitter: "https://twitter.com/atahanyild",
    linkedin: "https://linkedin.com/in/atahanyild",
  },
  {
    id: 3,
    name: "Ahmed Murshed",
    roles: ["Yazılımcı"],
    image: "/img/team/ahmed.png",
    description:
      "Kendisiyle kısa bir sohbet edin, sizi her şeye ikna edebilir. Kodlamayı ve insanlarla konuşmayı seviyor. Muhtemelen onu Atahan ile birlikte görüceksiniz.",
    github: "https://github.com/keyboord01",
    twitter: "https://twitter.com/keyyyy01",
    linkedin: "https://linkedin.com/in/ahmed-zm",
  },
  {
    id: 4,
    name: "Irem Koci",
    roles: ["Pazarlama", "Topluluk"],
    image: "/img/team/irem.png",
    description:
      "Pinterest aşığı. Düzenlemeyi ve plan yapmayı seviyor, ona bir topluluk verin ki onları etkileyebilsin veya vlog çekebilsin.",
    github: "https://github.com/irmkoci",
    twitter: "https://x.com/home",
    linkedin: "https://www.linkedin.com/in/irem-ko%C3%A7i-4757a0217/",
  },
  {
    id: 5,
    name: "Kerem Gegek",
    roles: ["Araştırmacı", "İçerik Yazarı"],
    image: "/img/team/kerem.png",
    description:
      "İçerik yazmaya ve tenis oynamaya bayılıyor. Kriptografi tutkusu olan Zonguldaklı. Boş zamanlarında sitcom izlemeyi seviyor.",
    github: "https://github.com/kerem6790",
    twitter: "https://x.com/kerem6790x",
    linkedin: "https://www.linkedin.com/in/kerem-gegek-48336a244/",
  },
  {
    id: 6,
    name: "Miray Salar",
    roles: ["Tasarımcı"],
    image: "/img/team/miray.png",
    description:
      "Rahat bir kız. Renkleri, şekilleri ve sanata dair her şeyi seviyor. Sevdiği tek hayvan Kemo. Sabah insanı değil.",
    twitter: "https://x.com/mirayssalar",
    linkedin: "https://www.linkedin.com/in/miray-salar-b94290290/",
  },
  {
    id: 7,
    name: "Zeynep Sude Kacar",
    roles: ["Pazarlama", "İçerik Yazarı"],
    image: "/img/team/zeynep.png",
    description:
      "Pazarlama ve yazı işleriyle ilgilenir, boş zamanlarında Bitcoin'in tanıtım yazısını okur, sinemaya düşkündür ve yatında kripto haberleri okuduğunu hayal eder. Gluten tüketemez.",
    twitter: "https://x.com/zese_kacar?s=21 ",
    linkedin:
      "https://www.linkedin.com/in/zeynep-sude-kacar-9a6b13255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  {
    id: 8,
    name: "Bora",
    roles: ["Yazılımcı"],
    image: "/img/team/bora.png",
    description:
      "Kim olduğunu bilmiyoruz. Sanırım bir değişim programına gidecek.",
    github: "https://github.com/borailci",
    twitter: "https://twitter.com/kuwiraW",
    linkedin: "https://linkedin.com/in/bora-ilci",
  },
  {
    id: 9,
    name: "Sena Eser",
    roles: ["Yazılımcı"],
    image: "/img/team/sena.png",
    description:
      "Blockchain teknolojisini erişilebilir ve heyecan verici hale getiren etkileyici içerikler üretiyor.",
    github: "https://github.com/Senaseser",
    twitter: "https://twitter.com/senaeser02",
    linkedin: "https://www.linkedin.com/in/sena-eser1",
  },
  {
    id: 10,
    name: "Kutay Sari",
    roles: ["Yazılımcı"],
    image: "/img/team/kutay.png",
    description:
      "Blockchain teknolojisini erişilebilir ve heyecan verici hale getiren etkileyici içerikler üretiyor.",
    github: "https://github.com/KkutaySarii",
    twitter: "https://x.com/0xkutaysari",
    linkedin: "https://www.linkedin.com/in/kutay-sarii",
  },
  {
    id: 11,
    name: "Beyzanur Yildirim",
    roles: ["Pazarlama", "Topluluk"],
    image: "/img/team/beyza.png",
    description: "Hikaye anlatmaya tutkusu olan sosyal medya kızı.",
    twitter: "https://x.com/bbeyzanryldrm?s=21",
    linkedin: "http://linkedin.com/in/beyzanuryildirim",
  },
  {
    id: 12,
    name: "Yusuf Emir",
    roles: ["Organizasyon", "Topluluk"],
    image: "/img/team/yusuf.png",
    description:
      "Bugüne kadar duyduğumuz en garip kahkaha. Oturun ve onun hikayelerini dinleyin (NY hikayeleri de dahil). Büyük kripto etkinliklerine imza attı. Sadece onu bir arayın.",
    github: "https://github.com/yusufemiraltinkaynak",
    linkedin: "https://tr.linkedin.com/in/yeabest",
  },
  {
    id: 13,
    name: "Ecem Sarikaya",
    roles: ["Pazarlama", "Topluluk"],
    image: "/img/team/ecem.png",
    description:
      "Spor salonu tutkunu, bu kulübün en sağlıklısı. Davutpaşa’da takılıyor. Fitness tavsiyesi veya işbirlikleri için DM atın.",
  },
  {
    id: 14,
    name: "Alperen",
    roles: ["Pazarlama", "Topluluk"],
    image: "/img/team/alperen.png",
    description:
      "Kriptoya tutkusu olan spor salonu meraklısı. İşbirlikleri veya spor ipuçları için DM atın.",
    github: "https://github.com/alperen2306",
    twitter: "https://twitter.com/alpakgeyik?s=21",
    linkedin: "https://github.com/alperen2306",
  },
  {
    id: 15,
    name: "Leyla Gur",
    roles: ["Pazarlama", "Topluluk"],
    image: "/img/team/leyla.png",
    description:
      "Yaratıcı ve hırslı. İyi bir meydan okumayı ve yenilikçi pazarlama stratejilerini sever.",
    github: "https://github.com/leylagur",
    twitter: "https://twitter.com/leylagur00",
    linkedin: "https://www.linkedin.com/in/leyla-gür-1a9753326/",
  },
  {
    id: 16,
    name: "Serra Vardar",
    roles: ["Pazarlama", "Topluluk"],
    image: "/img/team/serra.png",
    description:
      "Topluluk oluşturma ve yenilikçi pazarlama konusunda tutkulu. Yeni meydan okumalar için her zaman hazır.",
    twitter: "https://twitter.com/dserravardar?s=21",
    linkedin: "https://www.linkedin.com/in/serra-vardar-579426332",
  },
  {
    id: 17,
    name: "Caglar",
    roles: ["Tasarımcı"],
    image: "/img/team/caglar.png",
    description: "Görsel hikaye anlatımında yetenekli, yaratıcı tasarımcı.",
    twitter: "https://twitter.com/0xcagavci?s=11",
  },
];
