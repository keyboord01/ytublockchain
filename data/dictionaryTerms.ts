export interface DictionaryEntry {
  term: string;
  definition: string;
  extraResource?: string[] | string;
}

const dictionaryTerms: DictionaryEntry[] = [
  {
    term: "%51 Attack",
    definition:
      "Bir blok zinciri ağının madencilik gücünün %51’inden fazlasının tek bir kişi veya grup tarafından kontrol edilmesiyle gerçekleşen bir saldırı türüdür. Bu tür saldırılar, kötü niyetli aktörlerin blok zincirindeki işlemleri değiştirmesine ve hatta çift harcama (double spending) yapmasına neden olabilir. Bitcoin ve diğer PoW (Proof-of-Work) tabanlı zincirler için büyük bir güvenlik riski oluşturur.",
    extraResource: "https://en.wikipedia.org/wiki/Double-spending#51%_attack",
  },
  {
    term: "AAVE (ETHLend)",
    definition:
      "AAVE, merkeziyetsiz finans (DeFi) ekosisteminde kullanıcıların kripto varlıklarını borç alıp verebileceği bir likidite protokolüdür. Ethereum tabanlı bir DeFi platformu olan AAVE, kullanıcıların teminat göstererek kredi almasına ve faiz kazanmasına olanak tanır. Borç verme ve alma işlemlerini akıllı sözleşmeler üzerinden yapar.",
    extraResource: "https://aave.com/",
  },
  {
    term: "ABI",
    definition:
      "Bir akıllı sözleşmenin dış dünyayla nasıl etkileşime girdiğini tanımlayan standart bir arayüzdür.",
    extraResource: "https://ethereum.org/en/developers/docs/transactions/",
  },
  {
    term: "Account Abstraction",
    definition:
      "Ethereum'da hesap yönetimini basitleştirmek ve kullanıcı deneyimini iyileştirmek için geliştirilen bir sistemdir. Account Abstraction, özel anahtar yönetimini optimize ederek akıllı sözleşme tabanlı cüzdanların daha esnek ve güvenli hale gelmesini sağlar.",
    extraResource:
      "https://coinmarketcap.com/academy/article/vitalik-buterin:-account-abstraction-a-%22pretty-big-deal%22-to-drive-web3-adoption",
  },
  {
    term: "Accounts",
    definition:
      "Blok zincirinde işlem yapabilen ve varlıkları tutabilen adreslerdir.",
    extraResource: "https://en.wikipedia.org/wiki/Cryptocurrency_wallet",
  },
  {
    term: "ADDRESS",
    definition:
      "Blok zincirinde bir kullanıcının veya akıllı sözleşmenin tanımlanmasını sağlayan benzersiz kimlik numarasıdır.",
    extraResource:
      "https://en.wikipedia.org/wiki/Bitcoin_protocol#Bitcoin_addresses",
  },
  {
    term: "Aggregator",
    definition:
      "Birden fazla merkeziyetsiz finans (DeFi) protokolünden fiyat, likidite ve işlem fırsatlarını toplayarak kullanıcıya en iyi oranları sunan sistemlerdir.",
    extraResource:
      "https://coinmarketcap.com/academy/tr/glossary/defi-aggregator",
  },
  {
    term: "Airdrop",
    definition:
      "Yeni bir kripto projesinin, tanıtım veya ödüllendirme amacıyla belirli cüzdanlara ücretsiz token dağıtmasıdır.",
    extraResource: "https://en.wikipedia.org/wiki/Airdrop_(cryptocurrency)",
  },
  {
    term: "Alchemy",
    definition:
      "Blok zinciri geliştiricileri için altyapı sağlayan, node erişimi, API'ler ve analiz araçları sunan bir platformdur. Ethereum, Polygon ve Solana gibi blok zincirleri için geliştiricilerin daha kolay uygulama oluşturmasına yardımcı olur.",
    extraResource: "https://www.alchemy.com/",
  },
  {
    term: "Algorand",
    definition:
      "Hızlı ve düşük maliyetli işlemleri destekleyen Proof-of-Stake (PoS) konsensüs mekanizmasına sahip bir blok zinciri platformudur. Algorand, düşük enerji tüketimi ve yüksek işlem kapasitesiyle merkeziyetsiz uygulamaları (DApps) desteklemek için geliştirilmiştir.",
    extraResource: "https://algorandtechnologies.com/",
  },
  {
    term: "Algorithm",
    definition:
      "Bir problemi çözmek veya belirli bir işlemi gerçekleştirmek için oluşturulan adım adım işlem dizisidir. Blok zincirinde madencilik, işlem doğrulama ve akıllı sözleşmeler gibi süreçler kriptografik algoritmalar kullanılarak çalışır.",
    extraResource: "https://en.wikipedia.org/wiki/Algorithm",
  },
  {
    term: "Algorithmic Stablecoins",
    definition:
      "Arz ve talebe bağlı olarak algoritmalar tarafından fiyatı sabit tutulan stablecoin türüdür. DAI ve UST gibi algoritmik stablecoin’ler, geleneksel stablecoin’lerin aksine merkezi bir rezerv olmadan çalışır.",
    extraResource:
      "https://www.coindesk.com/learn/algorithmic-stablecoins-what-they-are-and-how-they-can-go-terribly-wrong",
  },
  {
    term: "Alpha",
    definition:
      "Bir yatırımın veya projenin gelecekte değer kazanabileceğine dair erken bilgiye sahip olma durumu. Kripto dünyasında yeni ve büyük potansiyel taşıyan projelere erken yatırım yapmak için kullanılır.",
    extraResource: [
      "https://www.investopedia.com/terms/a/alpha.asp#:~:text=Alpha%20refers%20to%20excess%20returns,intended %20to%20eliminate%20unsystematic%20risk.",
      "https://en.wikipedia.org/wiki/Alpha_(finance)",
    ],
  },
  {
    term: "Altcoin",
    definition:
      "Bitcoin dışındaki tüm kripto para birimlerini tanımlayan genel terimdir.",
    extraResource: "https://en.wikipedia.org/wiki/Cryptocurrency#Altcoins",
  },
  {
    term: "Altseason",
    definition:
      "Altcoin’lerin Bitcoin’e kıyasla daha iyi performans gösterdiği piyasa döngüsüdür.",
    extraResource: "https://en.wikipedia.org/wiki/Cryptocurrency",
  },
  {
    term: "AML (Anti Money Laundering)",
    definition:
      "Kripto para ve geleneksel finans dünyasında kara para aklamayı ve yasa dışı finansal faaliyetleri engellemek için oluşturulan düzenleyici çerçeve ve prosedürlerdir. AML kuralları, kripto borsalarının ve finansal hizmet sağlayıcılarının kimlik doğrulama (KYC) yapmasını ve şüpheli işlemleri raporlamasını gerektirir.",
    extraResource:
      "https://en.wikipedia.org/wiki/Anti%E2%80%93money_laundering",
  },
  {
    term: "API",
    definition:
      "Bir yazılımın, başka bir yazılım veya hizmetle etkileşime girmesine olanak tanıyan arayüzdür. Blok zinciri API’leri, dApp’lerin ağlarla iletişim kurmasını sağlar. Örneğin, CoinGecko API’si kripto fiyatlarını sağlar.",
    extraResource: "https://en.wikipedia.org/wiki/API",
  },
  {
    term: "App-specific Rollups",
    definition:
      "Belirli bir uygulama için optimize edilmiş Layer-2 ölçekleme çözümleridir. Ethereum gibi ağlarda yüksek işlem ücretlerini azaltmak ve hızlandırmak için geliştirilmiş çözümler arasında yer alır.",
    extraResource:
      "https://docs.arbitrum.io/how-arbitrum-works/optimistic-rollup",
  },
  {
    term: "APR - Annual Percentage Rate",
    definition:
      "Bileşik faiz (compound interest) hesaplaması yapılmadan, yatırım veya kredi faiz oranının yıllık bazda ifade edilen değeridir. DeFi platformlarında staking veya borç verme faiz oranlarını gösterir.",
    extraResource:
      "https://coinmarketcap.com/academy/tr/glossary/annual-percentage-rate-apr",
  },
  {
    term: "APY - Annual Percentage Yield",
    definition:
      "Bileşik faiz etkisi de dahil olmak üzere, yatırımların veya kredilerin yıllık bazda getirisini gösteren yüzdelik orandır. DeFi platformlarında staking ve yield farming kazançlarını hesaplamak için kullanılır.",
    extraResource: "https://en.wikipedia.org/wiki/Compound_interest",
  },
  {
    term: "Arbitrage",
    definition:
      "Farklı borsalar veya piyasalar arasındaki fiyat farklarından yararlanarak kazanç elde etme işlemidir.",
    extraResource: "https://en.wikipedia.org/wiki/Arbitrage",
  },
  {
    term: "Arbitration",
    definition:
      "Blok zincirinde taraflar arasında anlaşmazlıkları çözmek için merkezi veya merkeziyetsiz sistemlerin kullandığı mekanizma.",
    extraResource: "https://en.wikipedia.org/wiki/Arbitration",
  },
  {
    term: "Arbitrum",
    definition:
      "Ethereum’un ölçeklenmesini sağlamak için geliştirilen Optimistic Rollup teknolojisini kullanan Layer-2 çözümüdür.",
    extraResource: "https://arbitrum.io/",
  },
  {
    term: "ASIC",
    definition:
      "Kripto madenciliği için özel olarak tasarlanmış yüksek verimli donanımlardır.",
    extraResource:
      "https://en.wikipedia.org/wiki/Application-specific_integrated_circuit",
  },
  {
    term: "Asset",
    definition:
      "Blok zinciri üzerinde saklanabilen dijital veya tokenize edilmiş fiziksel varlıkları ifade eder.",
    extraResource:
      "https://finance.ec.europa.eu/digital-finance/crypto-assets_en",
  },
  {
    term: "Asymmetric Cryptography",
    definition:
      "Genel ve özel anahtar çiftleri kullanarak güvenli veri şifreleme ve doğrulama sağlayan kriptografi türüdür.",
    extraResource: "https://en.wikipedia.org/wiki/Public-key_cryptography",
  },
  {
    term: "ATH",
    definition:
      "Bir kripto paranın tarihi boyunca ulaştığı en yüksek fiyat seviyesidir.",
    extraResource:
      " https://www.babypips.com/crypto/glossary/all-time-high- ath#:~:text=ATH%20is%20an%20acronym%20for,of%20interest%20to%20the%20market.",
  },
  {
    term: "Atomic",
    definition:
      "Blok zincirinde işlemlerin tamamının başarılı olması veya tamamen başarısız olması gerektiği prensibidir. Eğer bir atomik işlem başarısız olursa, tüm işlem iptal edilir ve zincire yazılmaz.",
    extraResource: "https://en.wikipedia.org/wiki/Cryptocurrency#Atomic_swaps",
  },
  {
    term: "Atomic Swap",
    definition:
      "Farklı blok zincirleri arasında güvenilir bir aracı olmadan doğrudan kripto para değişimi yapma işlemidir.",
    extraResource: "https://en.wikipedia.org/wiki/Cryptocurrency#Atomic_swaps",
  },
  {
    term: "Attestation Services",
    definition:
      "Blok zinciri üzerindeki kimlik doğrulama, belge onaylama ve veri güvenliği hizmetleri sunan sistemlerdir. Chainlink Proof-of-Reserve gibi hizmetler, rezervlerin merkeziyetsiz şekilde doğrulanmasını sağlar.",
    extraResource: "https://en.wikipedia.org/wiki/Digital_identity",
  },
  {
    term: "Automated Market Makers (AMM)",
    definition:
      "Merkeziyetsiz borsalarda piyasa yapıcılık (market making) işlemlerini otomatikleştiren sistemlerdir.",
    extraResource:
      "https://docs.uniswap.org/contracts/v2/concepts/protocol-overview/glossary#:~:text=Automated%20market%20maker%E2%80%8B,an%20automated%20market%20making%20formula.",
  },
  {
    term: "AUTONOMOUS",
    definition:
      "Blok zinciri sistemlerinde insan müdahalesine ihtiyaç duymadan çalışan mekanizmalardır. Akıllı sözleşmeler, belirlenen koşullar gerçekleştiğinde otonom olarak işlem yapabilir.",
    extraResource: "https://ethereum.org/en/dao/",
  },
  {
    term: "Avalanche",
    definition:
      "Ethereum’un rakibi olarak geliştirilen, hızlı işlem kapasitesi ve düşük maliyetleriyle dikkat çeken Layer-1 blok zinciri ağıdır. Avalanche ağı, merkeziyetsiz uygulamalar (DApps) için optimize edilmiştir ve Subnet teknolojisini destekler.",
    extraResource: "https://www.avax.network/",
  },
  {
    term: "Axie Infinity (AXS)",
    definition:
      "Axie Infinity, blok zinciri tabanlı bir oyna-kazan (Play-to-Earn) oyunudur. Ethereum üzerinde çalışan Axie Infinity, oyuncuların NFT tabanlı yaratıkları (Axie'ler) toplayarak savaşmasına ve görevler tamamlayarak AXS ve SLP token kazanmasına olanak tanır. Oyun, Play-to-Earn ekonomisini popüler hale getiren projelerden biri olmuştur.",
    extraResource: "https://axieinfinity.com/",
  },
  {
    term: "Base Layer",
    definition:
      "Blok zincirinde, tüm işlemlerin ve akıllı sözleşmelerin gerçekleştiği ana ağ veya Layer-1 olarak adlandırılan temel protokol katmanıdır. Bitcoin, Ethereum ve Avalanche gibi Layer-1 blok zincirleri, kendi güvenlik ve işlem onay mekanizmalarına sahiptir. Layer-2 çözümleri, Base Layer üzerine inşa edilir.",
    extraResource: "https://ethereum.org/en/developers/docs/networking-layer/",
  },
  {
    term: "Based Rollups",
    definition:
      "Layer-2 blok zincirlerinde, ana Layer-1 zincirine doğrudan bağlı olan ölçeklendirme çözümleridir. Genelde Sequencer zincir üzerinde olur, Taiko en popüler based rollup örneklerindendir.",
    extraResource: "https://unchainedcrypto.com/based-rollups/",
  },
  {
    term: "Batching Transactions",
    definition:
      "Birden fazla blok zinciri işlemini tek bir işlemde birleştirerek işlem ücretlerini düşüren ve verimliliği artıran teknik.",
    extraResource: "https://en.wikipedia.org/wiki/Scalability",
  },
  {
    term: "Bear (Markets)",
    definition:
      "Kripto para veya geleneksel finans piyasalarında uzun süreli fiyat düşüşlerinin yaşandığı dönemdir.",
    extraResource: "https://en.wikipedia.org/wiki/Market_trend#Bear_market",
  },
  {
    term: "Bearish",
    definition:
      "Bir varlığın fiyatının düşeceğine dair olumsuz piyasa beklentisini ifade eder.",
    extraResource: "https://en.wikipedia.org/wiki/Market_trend#Bear_market",
  },
  {
    term: "BFT (Byzantine Fault Tolerance)",
    definition:
      "Blok zinciri ağının, bazı node’lar kötü niyetli veya arızalı olsa bile doğru kararlar alabilmesini sağlayan mekanizmadır.",
    extraResource: "https://en.wikipedia.org/wiki/Byzantine_fault",
  },
  {
    term: "Bid-Ask",
    definition:
      "Bir varlığın en yüksek alış (bid) ve en düşük satış (ask) fiyatı arasındaki farktır. Düşük spread likiditenin yüksek olduğunu, geniş spread ise düşük likidite ve dalgalanma riskini gösterir.",
    extraResource: "https://en.wikipedia.org/wiki/Bid%E2%80%93ask_spread",
  },
  {
    term: "Binance",
    definition:
      "2017 yılında Changpeng Zhao tarafından kurulan, dünyanın en büyük merkezi kripto para borsasıdır.",
    extraResource: "https://www.binance.com/en-TR",
  },
  {
    term: "Binius Proof System",
    definition:
      "Sıfır bilgi ispatlarını (Zero-Knowledge Proofs) daha hızlı ve verimli hale getiren modern bir kriptografik sistemdir.",
    extraResource: "https://en.wikipedia.org/wiki/Zero-knowledge_proof",
  },
  {
    term: "BIP (Bitcoin Improvement Proposal - Bitcoin Geliştirme Önerisi)",
    definition:
      "Bitcoin ağına yeni gelecek güncellemelerin içeriğini belirten önerilerdir.",
    extraResource: "https://github.com/bitcoin/bips",
  },
  {
    term: "Bitcoin Address",
    definition:
      "Bitcoin adresi, Bitcoin ağı üzerinde BTC göndermek ve almak için kullanılan benzersiz bir kimlik numarasıdır.",
    extraResource:
      "https://bitcoin.org/en/vocabulary#:~:text=A%20Bitcoin%20address%20is%20similar,used%20for%20a%20single%20transaction.",
  },
  {
    term: "Bitcoin Cash",
    definition:
      "Bitcoin’in 2017 yılında gerçekleşen bir hard fork (çatallanma) sonucu oluşturulan bir versiyonudur. Bitcoin Cash, işlem ücretlerini düşürmek ve blok boyutunu artırarak ölçeklenebilirliği geliştirmek için ortaya çıkmıştır.",
    extraResource: "https://bitcoincash.org/",
  },
  {
    term: "Bitcoin Core",
    definition:
      "Bitcoin ağının resmi yazılım istemcisi olup, tam node’lar (full node) çalıştırmak için kullanılır. Bitcoin Core, madencilik, cüzdan yönetimi ve işlem doğrulama hizmetlerini sağlar.",
    extraResource: "https://bitcoincore.org/",
  },
  {
    term: "Bitcoin Script",
    definition:
      "Bitcoin’de işlem doğrulama ve akıllı sözleşme benzeri işlemler yapmak için kullanılan basit bir programlama dilidir. MultiSig işlemler gibi gelişmiş işlem türlerini destekler.",
    extraResource: "https://en.wikipedia.org/wiki/Script_(Bitcoin)",
  },
  {
    term: "BitVM",
    definition:
      "Bitcoin üzerinde akıllı sözleşmeleri çalıştırmayı sağlayan deneysel bir sanal makinedir. Ethereum’un akıllı sözleşme sistemine benzer bir yapı sunarak Bitcoin’in işlevselliğini genişletmeyi amaçlar.",
    extraResource: "https://bitvm.org/",
  },
  {
    term: "Block",
    definition:
      "Blok zincirinde işlem verilerini içeren, kriptografik olarak birbirine bağlı veri yapılarıdır. Örneğin Bitcoin ağı, yaklaşık 10 dakikada bir yeni blok üretir.",
    extraResource: "https://en.wikipedia.org/wiki/Block_(chain_structure)",
  },
  {
    term: "Block Explorer",
    definition:
      "Block Explorer, bir blok zincirinin işlem geçmişini, adresleri, blokları ve ağ istatistiklerini görüntülemeye olanak tanıyan çevrimiçi araçtır. Blok gezginleri, kullanıcıların belirli bir blok, işlem veya cüzdan adresini sorgulayarak zincir üzerindeki hareketleri takip etmelerine olanak tanır.",
    extraResource: "https://etherscan.io/",
  },
  {
    term: "Block Height",
    definition:
      "Block Height (Blok Yüksekliği), bir blok zincirinde belirli bir bloğun kaçıncı sırada yer aldığını gösteren sayısal değerdir. Blok zincirindeki her yeni blok, bir önceki bloğa bağlanarak zinciri oluşturur.",
    extraResource: "https://en.wikipedia.org/wiki/Blockchain",
  },
  {
    term: "Block Production",
    definition:
      "Block Production (Blok Üretimi), blok zincirinde yeni blokların oluşturulması sürecidir. Bu işlem, madenciler (Proof-of-Work - PoW) veya doğrulayıcılar (Proof-of-Stake - PoS) tarafından gerçekleştirilir. Blok üretimi, zincirin devamlılığını ve işlemlerin doğrulanmasını sağlayan temel mekanizmadır. Yeni bloklar, ağdaki işlemleri içerir ve önceki bloklara bağlı olarak zincire eklenir.",
    extraResource:
      "https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/",
  },
  {
    term: "Block Reward",
    definition:
      "Madencilerin yeni bir blok madenciliğini başarıyla gerçekleştirdiğinde kazandığı Bitcoin miktarıdır.",
    extraResource: "https://www.bitcoinblockhalf.com/#google_vignette",
  },
  {
    term: "Block Size Limit",
    definition:
      "Block Size Limit (Blok Boyutu Limiti), bir blok zincirindeki bir bloğun içine dahil edilebilecek maksimum veri boyutunu belirleyen kısıtlamadır. Blok zincirinde her blok, içinde belirli sayıda işlemi barındırır. Ancak, bir bloğa dahil edilebilecek işlem verisi miktarı blok boyutu limiti tarafından belirlenir.",
    extraResource:
      "https://tr.bitdegree.org/crypto/ogren/kripto-terimleri/block-size-nedir",
  },
  {
    term: "Block Synchronization",
    definition:
      "Block Synchronization (Blok Senkronizasyonu), blok zinciri node’ların en güncel blokları alarak, ağı güncel ve tutarlı tutmasını sağlayan süreçtir. Blok zinciri ağlarında her node, ağın güncel durumunu bilmek ve işlemleri doğrulamak için sürekli olarak zincir ile senkronize olmalıdır. Eğer bir node senkronize değilse, eski verilerle işlem yapamaz ve zincirden kopuk kalır.",
    extraResource: "https://en.wikipedia.org/wiki/Blockchain",
  },
  {
    term: "Blockchain",
    definition:
      "Blockchain (Blok Zinciri), merkeziyetsiz, değiştirilemez ve güvenli bir şekilde veri kaydı tutan dağıtılmış bir defter teknolojisidir. Blok zinciri, dijital işlemleri bloklar halinde kaydeden ve her yeni bloğun önceki bloğa kriptografik olarak bağlı olduğu bir veri yapısıdır. Bu yapı sayesinde, ağdaki işlemler güvenli, şeffaf ve geri döndürülemez hale gelir.",
    extraResource: "https://en.wikipedia.org/wiki/Blockchain",
  },
  {
    term: "BNB",
    definition:
      "Binance borsasının yerel token’ıdır ve Binance Smart Chain (BSC) ekosisteminde kullanılır. BNB, işlem ücretlerini ödemek, staking yapmak ve DeFi uygulamalarında kullanılmak için geliştirilmiştir.",
    extraResource: "https://tr.wikipedia.org/wiki/BNB",
  },
  {
    term: "Bonding Curves",
    definition:
      "Blok zincirinde token fiyatlarının arz ve talebe göre otomatik olarak belirlenmesini sağlayan matematiksel modellerdir. Merkeziyetsiz borsalar (DEX) ve otomatik piyasa yapıcılar (AMM) için kullanılır. Uniswap ve Balancer gibi platformlar, bonding curve modeliyle token fiyatlarını belirler.",
    extraResource:
      "https://medium.com/coinmonks/bonding-curves-and-bonding-curve-accessories-ec38100280cf",
  },
  {
    term: "Bored Ape Yacht Club (BAYC)",
    definition:
      "Ethereum blok zincirinde oluşturulmuş, dünyanın en popüler NFT koleksiyonlarından biridir.",
    extraResource: "https://boredapeyachtclub.com/",
  },
  {
    term: "BRC-20 Tokens",
    definition:
      "Bitcoin ağı üzerinde fungible token’lar (değiştirilebilir token’lar) oluşturmayı sağlayan deneysel bir standarttır.",
    extraResource: "https://coinmarketcap.com/view/brc-20/",
  },
  {
    term: "Bridge",
    definition:
      "Farklı blok zincirleri arasında varlık transferi yapmayı sağlayan mekanizmalardır.",
    extraResource: "https://ethereum.org/en/developers/docs/bridges/",
  },
  {
    term: "BTC",
    definition: "Bitcoin, dünyanın ilk merkeziyetsiz dijital para birimidir.",
    extraResource: "https://bitcoin.org/tr/",
  },
  {
    term: "Bull (Markets)",
    definition:
      "Bull Market (Boğa Piyasası), fiyatların uzun bir süre boyunca yükseldiği ve yatırımcıların piyasaya olan güveninin arttığı dönemdir. Boğa piyasası, artan talep, olumlu piyasa duyarlılığı ve geniş yatırımcı ilgisi ile karakterize edilir. Kripto para piyasasında, Bitcoin ve altcoinlerin büyük yükselişler yaşadığı dönemler boğa piyasası olarak adlandırılır.",
    extraResource: "https://en.wikipedia.org/wiki/Market_trend#Bull_market",
  },
  {
    term: "Bull Run",
    definition:
      " Bull Run (Boğa Koşusu), finans ve kripto piyasalarında fiyatların hızla ve sürekli bir şekilde yükseldiği uzun süreli artış trendidir. Boğa koşusu, yatırımcıların piyasaya olan güveninin yüksek olduğu ve alım baskısının satış baskısından fazla olduğu dönemdir. Genellikle büyük yatırımcıların (kurumsallar) ve perakende yatırımcıların piyasalara akın ettiği, medyanın ilgi gösterdiği dönemlerde gerçekleşir.",
    extraResource: "https://en.wikipedia.org/wiki/Cryptocurrency",
  },
  {
    term: "Bulletproofs",
    definition:
      "Bulletproofs, sıfır bilgi ispatı (Zero-Knowledge Proof - ZKP) sisteminde, işlemlerin geçerliliğini doğrularken boyutlarını küçültmek ve işlem maliyetlerini düşürmek için kullanılan bir kriptografik protokoldür. Bulletproofs, özel ve gizli işlemleri daha verimli hale getiren ve özellikle gizlilik odaklı blok zincirlerinde kullanılan bir teknolojidir. Monero (XMR) gibi gizlilik odaklı kripto paralar tarafından kullanılır.",
    extraResource:
      "https://en.wikipedia.org/wiki/Non-interactive_zero-knowledge_proof",
  },
  {
    term: "Bullish",
    definition:
      "Bullish, bir yatırımcının veya piyasanın belirli bir varlık veya genel piyasa hakkında iyimser olduğu ve fiyatların yükseleceğini düşündüğü durumu ifade eder. Bullish terimi, genellikle yatırımcı duyarlılığının (market sentiment) pozitif olduğu ve alım baskısının yüksek olduğu piyasa koşullarında kullanılır. Kripto piyasasında 'bullish' bir beklenti, fiyatların yükseleceğine dair güvenin artması anlamına gelir.",
    extraResource: "https://en.wikipedia.org/wiki/Market_trend",
  },
  {
    term: "Burn",
    definition:
      "Burn (Yakma), belirli bir miktarda kripto paranın dolaşımdan kalıcı olarak çıkarılması ve tekrar kullanılamaz hale getirilmesi işlemidir. Kripto para projeleri, arzı azaltmak ve token değerini artırmak için token yakma (burn) mekanizmasını kullanır. Bu işlem, genellikle bir 'yakma adresine' (burn address) gönderilerek gerçekleştirilir. Bu adresteki token’lar bir daha harcanamaz ve dolaşımdan çıkarılmış olur.",
    extraResource:
      "https://en.wikipedia.org/wiki/Cryptocurrency#Impacts_and_analysis",
  },
  {
    term: "Byzantine Fault Tolerance",
    definition:
      "Byzantine Fault Tolerance (BFT), dağıtılmış bir ağdaki bazı node’lar kötü niyetli veya hatalı olsa bile, sistemin doğru ve güvenilir bir şekilde çalışmasını sağlayan bir mekanizmadır. BFT, blok zinciri sistemlerinde kötü niyetli aktörlerin veya teknik arızaların ağı manipüle etmesini önlemek için kullanılan bir güvenlik mekanizmasıdır. Bitcoin, Ethereum ve diğer blok zincirleri, Bizans Hata Toleransı çözümleri kullanarak merkeziyetsiz ağlarını korur.",
    extraResource: "https://en.wikipedia.org/wiki/Byzantine_fault",
  },
  {
    term: "Cardano (ADA)",
    definition:
      "Cardano, merkeziyetsiz uygulamalar (DApps) ve akıllı sözleşmeler için tasarlanmış, bilimsel araştırmalar ve akademik incelemelerle geliştirilen bir üçüncü nesil blok zinciri platformudur. ADA, Cardano ağının yerel kripto para birimidir ve işlem ücretlerini ödemek, staking yapmak ve yönetişim süreçlerine katılmak için kullanılır.",
    extraResource: "https://cardano.org/",
  },
  {
    term: "Casper",
    definition:
      "Casper, Ethereum'un Proof-of-Work (PoW) madencilik sisteminden Proof-of-Stake (PoS) modeline geçişini sağlayan konsensüs protokolüdür.",
    extraResource: "https://en.wikipedia.org/wiki/Ethereum#Ethereum_2.0",
  },
  {
    term: "Celestia",
    definition:
      "Celestia, blok zinciri ağlarının veri kullanılabilirliğini artıran, modüler bir yapıya sahip Layer-1 blok zinciri çözümüdür. Celestia, geleneksel monolitik blok zincirlerinden farklı olarak, modüler bir yapı kullanarak ölçeklenebilirliği artırmayı hedefler. Layer-2 çözümleri ve yeni blok zincirleri, Celestia’nın veri kullanılabilirlik hizmetlerini kullanarak daha güvenli ve ölçeklenebilir hale gelebilir.",
    extraResource: "https://celestia.org/",
  },
  {
    term: "Censorship Resistance",
    definition:
      "Censorship Resistance (Sansüre Karşı Direnç), bir sistemin veya ağın, herhangi bir merkezi otoritenin müdahalesi olmadan işlemleri ve bilgileri özgürce barındırma ve iletme yeteneğidir. Blok zinciri teknolojisinin temel özelliklerinden biri olan sansüre karşı direnç, hükümetler, finansal kurumlar veya şirketler gibi merkezi otoritelerin işlemleri engelleyememesi veya değiştirememesi anlamına gelir.",
    extraResource:
      "https://academy.binance.com/en/glossary/censorship-resistance",
  },
  {
    term: "Central Bank Digital Currency (CBDC)",
    definition:
      "Central Bank Digital Currency (CBDC), merkezi bir otorite (merkez bankası) tarafından çıkarılan ve yönetilen dijital para birimidir. CBDC’ler, fiziksel itibari paranın (örneğin, dolar, euro, TL) dijital versiyonlarıdır ve doğrudan bir merkez bankası tarafından kontrol edilir. Kripto paralardan farklı olarak, merkeziyetsiz değil, devlet kontrolündedir.",
    extraResource:
      "https://en.wikipedia.org/wiki/Central_bank_digital_currency",
  },
  {
    term: "Centralised",
    definition:
      "Bir sistemin veya ağın tek bir otorite tarafından kontrol edilmesi durumudur.",
    extraResource: "https://en.wikipedia.org/wiki/Centralisation",
  },
  {
    term: "Centralized Exchange (CEX)",
    definition:
      "CEX (Merkezi Borsa), merkezi bir otorite tarafından kontrol edilen ve kullanıcıların kripto para alım-satımı yapmasını sağlayan ticaret platformudur. Merkezi borsalar (CEX), geleneksel finansal piyasalara benzer şekilde çalışır ve kullanıcıların kripto para ticareti yapmalarını sağlar. Ancak, merkeziyetsiz borsaların (DEX) aksine, CEX'ler kullanıcı fonlarını kendi platformlarında tutar ve KYC (Kimlik Doğrulama) prosedürleri uygular.",
    extraResource: "https://en.wikipedia.org/wiki/Cryptocurrency_exchange",
  },
  {
    term: "Centralized Finance (CeFi)",
    definition:
      "CeFi (Merkezi Finans), merkezi kurumlar veya şirketler tarafından yönetilen, kripto para ticareti, borç verme, staking ve diğer finansal hizmetleri sunan sistemlerdir. CeFi, geleneksel bankacılık sistemine benzer şekilde merkezi bir otorite tarafından kontrol edilir ve kullanıcıların varlıklarını bir platformda saklamasını gerektirir. Merkezi finans platformları, kripto para ticareti, faiz kazanma, borç verme ve türev işlemler gibi hizmetler sunar.",
    extraResource: "https://www.coinbase.com/learn/crypto-basics/what-is-cefi",
  },
  {
    term: "Centralized Network",
    definition:
      "Tüm işlemlerin ve verilerin tek bir merkezi sunucu tarafından yönetildiği ağ modelidir.",
    extraResource: "https://en.wikipedia.org/wiki/Centralized_computing",
  },
  {
    term: "Chain Abstraction",
    definition:
      "Blok zincirleri arasındaki teknik farklılıkları kullanıcıya hissettirmeden etkileşim kurmayı sağlayan bir yaklaşımdır.",
    extraResource:
      "https://en.wikipedia.org/wiki/Blockchain#Blockchain_interoperability",
  },
  {
    term: "Chain Reorganization",
    definition:
      "Blok zincirinde önceki blokların geçersiz kılınarak yerine yeni bir blok dizisinin eklenmesi sürecidir.",
    extraResource: "https://en.wikipedia.org/wiki/Fork_(blockchain)",
  },
  {
    term: "Chain Synchronization",
    definition:
      "Chain Synchronization (Zincir Senkronizasyonu), blok zinciri node’ların en güncel blokları indirerek ağı senkronize tutmasını sağlayan süreçtir. Blok zinciri ağında her node, ağın güncel durumunu bilmek ve işlemleri doğrulamak için zincir ile senkronize olmak zorundadır. Eğer bir node senkronize değilse, eski verilerle işlem yapamaz ve ağdan kopuk hale gelir.",
    extraResource: "https://en.wikipedia.org/wiki/Blockchain",
  },
  {
    term: "ChainLink (LINK)",
    definition:
      "Chainlink, blok zincirleri ile gerçek dünya verileri arasında güvenli ve merkeziyetsiz bir bağlantı sağlayan bir oracle ağıdır. LINK ise Chainlink ekosisteminin yerel tokenidir. Chainlink, blok zincirlerinin dış dünyadaki verilere güvenli bir şekilde erişmesini sağlayan merkeziyetsiz bir oracle çözümüdür. Akıllı sözleşmeler, doğru ve güvenilir verilere ulaşmadan gerçek dünya ile entegre olamaz. Chainlink, hava durumu, fiyat verileri, spor sonuçları, rastgelelik hizmetleri ve API bağlantıları gibi birçok veri türünü blok zincirlerine aktarır.",
    extraResource: "https://chain.link/",
  },
  {
    term: "Ciphertext",
    definition:
      "Ciphertext, şifreleme algoritmaları (kriptografi) kullanılarak düz metinden (plaintext) dönüştürülen ve yalnızca yetkili taraflarca çözülebilen şifrelenmiş metindir. Ciphertext, veri güvenliğini sağlamak ve bilgilerin yetkisiz kişiler tarafından okunmasını önlemek için kullanılan bir şifreleme tekniğidir. Kriptografik algoritmalar, düz metni şifreleyerek okunamaz hale getirir ve sadece doğru anahtarla (decryption key) çözülebilir.",
    extraResource: "https://en.wikipedia.org/wiki/Ciphertext",
  },
  {
    term: "Circuit",
    definition:
      "Kriptografik hesaplamalarda, sıfır bilgi ispatlarında kullanılan matematiksel yapı veya model. Blok zinciri tabanlı gizlilik çözümlerinde önemli bir rol oynar.",
    extraResource: "https://en.wikipedia.org/wiki/Zero-knowledge_proof",
  },
  {
    term: "Client",
    definition:
      "Blok zincirine bağlanarak işlemleri doğrulayan, blokları indiren veya işlemleri gerçekleştiren bir yazılım veya cihazdır.",
    extraResource: "https://ethereum.org/en/developers/docs/nodes-and-clients/",
  },
  {
    term: "Cloud Mining",
    definition:
      "Cloud Mining (Bulut Madenciliği), kullanıcıların fiziksel madencilik ekipmanı satın almadan, uzaktan kiraladıkları madencilik gücü (hash rate) ile kripto para madenciliği yapmalarına olanak tanıyan bir hizmettir. Cloud mining, geleneksel madencilik ekipmanlarını satın almak ve çalıştırmak yerine, üçüncü taraf bir sağlayıcıdan madencilik hizmeti kiralamayı sağlar. Bu sistemde, kullanıcılar madencilik donanımı ve elektrik maliyetleriyle uğraşmadan madencilik gelirlerine ortak olur.",
    extraResource: "https://en.wikipedia.org/wiki/Cloud_mining",
  },
  {
    term: "Coin",
    definition:
      "Kendi bağımsız blok zinciri üzerinde çalışan dijital varlıktır.",
    extraResource: "https://en.wikipedia.org/wiki/Cryptocurrency",
  },
  {
    term: "Coinbase (concept)",
    definition:
      "Coinbase (konsept olarak), blok zincirinde madencilerin yeni blok oluşturduklarında aldıkları ödülü içeren özel bir işlemdir.",
    extraResource: "https://en.wikipedia.org/wiki/Coinbase",
  },
  {
    term: "Cold Storage",
    definition:
      "Cold Storage, özel anahtarların internete bağlı olmayan bir ortamda saklanmasını ifade eder ve kripto para varlıklarının güvenliğini artırmak için kullanılır.",
    extraResource: "https://www.investopedia.com/terms/c/cold-storage.asp",
  },
  {
    term: "Cold Wallet",
    definition:
      "Cold Wallet, internet bağlantısı olmayan, çevrimdışı ortamda saklanan kripto cüzdan türüdür.",
    extraResource:
      "https://www.ledger.com/academy/topics/security/what-is-a-cold-wallet",
  },
  {
    term: "Collateralized Debt Positions (CDP)",
    definition:
      "CDP, bir kullanıcının belirli bir kripto varlığı teminat olarak kilitleyerek, karşılığında bir stablecoin veya başka bir varlık ödünç almasına olanak tanıyan bir DeFi mekanizmasıdır.",
    extraResource: "https://en.wikipedia.org/wiki/Decentralized_finance",
  },
  {
    term: "Collectible Token",
    definition:
      "Collectible Token, benzersiz ve değiştirilemez bir dijital varlık olan NFT'leri (Non-Fungible Token) ifade eder.",
    extraResource: "https://en.wikipedia.org/wiki/Non-fungible_token",
  },
  {
    term: "Collision",
    definition:
      "Collision, iki farklı veri girdisinin aynı hash çıktısını üretmesi durumudur. Kriptografik hash fonksiyonlarının güvenliği, çakışmaların (collision) olmamasına dayanır. SHA-256 ve Keccak gibi güvenli hash algoritmaları, çakışma olasılığını en aza indirmek için tasarlanmıştır.",
    extraResource: "https://en.wikipedia.org/wiki/Collision_attack",
  },
  {
    term: "Colored Coins",
    definition:
      "Colored Coins (Renkli Paralar), Bitcoin blokzinciri üzerinde belirli varlıkları veya dijital varlıkları temsil etmek için kullanılan bir tekniktir. Temel olarak, Bitcoin’in küçük bir kısmına (örneğin, 0.0001 BTC) ek bir anlam yüklenerek parça, gayrimenkul, hisse senedi, sanat eseri, tahvil veya başka bir varlığı temsil edecek şekilde programlanır.",
    extraResource: "https://blokzin.github.io/renkli-paralar/",
  },
  {
    term: "Commitment Schemes",
    definition:
      "Commitment scheme (taahhüt şeması), bir tarafın belirli bir değeri daha sonra açıklamak üzere şifreleyerek veya gizleyerek bir başka tarafa taahhütte bulunmasını sağlayan kriptografik bir protokoldür.",
    extraResource: "https://www.youtube.com/watch?v=4w_b8Msxy14",
  },
  {
    term: "Compile",
    definition:
      "Blockchain’de compile (derleme), akıllı kontratların veya diğer blockchain tabanlı kodların makine tarafından çalıştırılabilir hale getirilmesi sürecini ifade eder. Akıllı kontratlar genellikle yüksek seviyeli programlama dillerinde yazılır (örneğin, Solidity) ve blockchain üzerinde çalıştırılmadan önce derlenerek bytecode formatına dönüştürülür.",
    extraResource: "https://ethereum.org/en/developers/docs/solidity/",
  },
  {
    term: "Composable DeFi",
    definition:
      "Composable DeFi (Bileşebilir Merkeziyetsiz Finans), farklı DeFi protokollerinin ve uygulamalarının birlikte çalışabilir (interoperable) ve modüler bir şekilde kullanılabilmesini ifade eder.",
    extraResource:
      "https://tr.bitdegree.org/crypto/ogren/kripto-terimleri/composable-defi-nedir",
  },
  {
    term: "Compound (COMP)",
    definition:
      "Compound (COMP), merkeziyetsiz finans (DeFi) ekosisteminde borç verme(lending) ve borç alma(borrowing) işlemlerini sağlayan bir blockchain protokolüdür. Ethereum üzerine inşa edilmiştir ve kullanıcıların kripto varlıklarını faiz kazancı elde etmek için yatırmasına veya teminat göstererek borç almasına olanak tanır.",
    extraResource: "https://www.kraken.com/learn/what-is-compound-comp",
  },
  {
    term: "Compound Interest",
    definition:
      "Bileşik faiz, bir yatırımın yatırım dönemi boyunca kazandığı faiziyle birlikte yeniden yatırıma tabi tutulması sonucu elde edilen getiriyi gösteren faizdir. Diğer bir deyişle faizin de faiz kazanmasıdır.",
  },
  {
    term: "Compute",
    definition:
      "Compute, blockchain bağlamında, bir blockchain ağı veya akıllı kontrat tarafından gerçekleştirilen hesaplama işlemlerini ifade eder. Blockchain üzerindeki akıllı kontratlar ve merkeziyetsiz uygulamalar (dApps), belirli işlemleri gerçekleştirmek için hesaplama gücüne ihtiyaç duyar. Bu hesaplama süreci 'compute' olarak adlandırılır.",
  },
  {
    term: "Confidential Transactions",
    definition:
      "Confidential Transactions (CT), blockchain üzerinde işlem miktarlarını gizleyen bir gizlilik teknolojisidir. Yani, işlemin göndereni, alıcısı ve işlem miktarı şifrelenerek gizlenir, ancak yine de ağ doğrulayıcıları işlemin geçerli olup olmadığını kontrol edebilir.",
  },
  {
    term: "Confirmations",
    definition:
      "Confirmation, blockchain ağlarında bir işlemin doğrulanması ve kalıcı hale gelmesi sürecini ifade eder. Bir işlem, ağdaki doğrulayıcılar tarafından işlendiğinde, işlem genellikle birkaç blokta onaylanır ve bu işlem geri alınamaz hale gelir. 'Confirmation', bu işlemin ağ tarafından başarıyla kabul edilip işlemin geçerli olduğunun güvence altına alınması anlamına gelir.",
  },
  {
    term: "Consensus",
    definition:
      "Consensus (Konsensüs), blockchain ağlarında, ağdaki tüm katılımcıların üzerinde mutabık kaldığı ve kabul ettiği ortak bir görüş veya karar mekanizmasıdır. Bir blockchain ağı, tüm katılımcıların doğrulamalarını uyumlu bir şekilde yapabilmesi için bir konsensüs algoritmasına ihtiyaç duyar. Bu algoritmalar, ağdaki tüm doğrulayıcıların aynı işlemleri kabul etmelerini ve aynı blok zincirine eklemelerini sağlar.",
    extraResource:
      "https://ethereum.org/en/developers/docs/consensus-mechanisms/",
  },
  {
    term: "Consensus Algorithms",
    definition:
      "Konsensüs algoritmaları, blockchain ağlarında tüm katılımcıların (node’lar, madenciler, doğrulayıcılar) aynı blok zincirini kabul etmelerini ve aynı işlemleri onaylamalarını sağlamak için kullanılan matematiksel ve kriptografik mekanizmalardır. Bu algoritmalar, ağın merkeziyetsiz yapısında doğrulama işlemleri ve güvenliği sağlamak için kritik öneme sahiptir. Konsensüs algoritmaları, blockchain ağındaki tüm katılımcıların aynı işlemleri ve verileri kabul etmelerini, aynı geçmişi tutmalarını sağlar ve ağdaki çift harcama (double-spending) gibi kötü niyetli saldırılara karşı korur.",
    extraResource: "https://en.wikipedia.org/wiki/Consensus_algorithm",
  },
  {
    term: "Consensus Layers",
    definition:
      "Consensus layers (Konsensüs katmanları), blockchain ağlarında işlem doğrulama ve güvenlik sağlama işlevini gerçekleştiren katmanlardır. Bu katmanlar, ağdaki tüm katılımcıların (node'lar, madenciler, doğrulayıcılar) aynı veri üzerinde mutabık kalmalarını sağlamak için kullanılan mekanizmalardır. Konsensüs katmanları, genellikle blockchain'in ağ güvenliği, işlem doğrulama ve zincir uyumluluğu gibi kritik görevleri üstlenir. Blockchain ağlarında farklı konsensüs algoritmalarının kullanıldığı katmanlar, ağın merkeziyetsizliği, güvenliği, işlem hızı ve verimliliği üzerinde büyük etkiler yapar. Bu katmanlar, ağın nasıl çalıştığını ve işlemlerin nasıl onaylandığını belirler.",
  },
  {
    term: "Contract",
    definition:
      "Blockchain'deki contract (kontrat) terimi, genellikle smart contract (akıllı kontrat) ile ilişkilidir. Akıllı kontrat, blockchain üzerinde çalışan, kendiliğinden yürütülen ve belirli şartların yerine getirilmesiyle otomatik olarak devreye giren dijital bir sözleşmedir.",
  },
  {
    term: "Cosmos",
    definition:
      "Cosmos, merkeziyetsiz uygulamaların (dApps) geliştirilmesi ve blockchain'lerin birbirleriyle iletişim kurabilmesi amacıyla tasarlanmış bir blockchain ekosistemidir. Cosmos, çoklu blockchain'lerin birbirleriyle etkileşime girmesini sağlayan bir ağ yapısına odaklanır.",
    extraResource:
      "https://crypto.com/tr/university/cosmos-atom-what-it-is-and-how-it-works",
  },
  {
    term: "CPU",
    definition:
      "CPU (Central Processing Unit - Merkezi İşlem Birimi), bir bilgisayarın veya sunucunun işlem gücünü sağlayan temel donanım bileşenidir. Blockchain teknolojisinde CPU, işlem verilerini işlemek ve blok zinciri ağındaki görevleri yerine getirmek için kullanılan donanım parçasıdır. Blockchain ağlarında, özellikle madencilik (mining) veya doğrulama (validation) işlemlerini gerçekleştiren bilgisayarlar için CPU, önemli bir rol oynar. ",
  },
  {
    term: "Cross Chain Swaps",
    definition:
      "Cross-Chain Swaps (çapraz zincir takasları), farklı blockchain'ler arasında token veya kripto para birimlerinin takasını gerçekleştiren işlemlerdir. Bu tür takaslar, bir blockchain ağında bulunan varlıkların (örneğin bir token veya kripto para) başka bir blockchain ağına güvenli bir şekilde, doğrudan ve aracısız olarak transfer edilmesini sağlar. ",
  },
  {
    term: "Cross Chain Atomic Swaps",
    definition:
      "Atomik terimi, işlemin tamamen ya da hiç yapılmaması anlamına gelir. Yani, bir tarafın işlem yapmaması durumunda, tüm işlem geri alınır ve kimse zarar görmez. Bu mekanizma, her iki tarafın da birbirine güvenmeden işlemi tamamlamasını sağlar.",
  },
  {
    term: "Cross Layer Messaging",
    definition:
      "Cross-layer messaging (katmanlar arası mesajlaşma), farklı katmanlardaki blockchain'ler veya protokoller arasında veri ve bilgi alışverişi sağlayan bir kavramdır. Bu, bir blockchain ağındaki bir katmandan (örneğin, işlem katmanı veya veri katmanı) diğer bir katmana veya başka bir blockchain ağının katmanına mesajların güvenli bir şekilde iletilmesini ifade eder.",
  },
  {
    term: "Crowdfunding",
    definition:
      "Crowdfunding (topluluk finansmanı), projelerin veya girişimlerin finansmanını sağlamak amacıyla birden fazla bireyin küçük miktarlarda para yatırarak bir hedefe ulaşmayı sağlamalarıdır. Blockchain teknolojisinde ise, crowdfunding süreçleri, merkeziyetsiz ve şeffaf bir ortamda topluluklardan yatırım almak için kullanılan yeni bir yöntemdir. Bu sayede projeler, geleneksel finansman yöntemlerine kıyasla daha geniş bir kitleye ulaşabilir ve yatırımcılar daha güvenli bir şekilde yatırım yapabilirler.",
    extraResource: "https://startuphukuku.com/crowdfunding-nedir/",
  },
  {
    term: "Crowdsale",
    definition:
      "Crowdsale, blockchain tabanlı projelerin topluluklardan fon toplamak için kullandığı bir yöntemdir. Genellikle bir blockchain projesinin, token'larını veya coin'lerini belirli bir fiyatla halka sunarak finansman sağlamayı amaçladığı bir süreçtir. Crowdsale, geleneksel anlamda bir tür crowdfunding (topluluk finansmanı) olabilir, ancak blockchain tabanlı sistemde bu işlem genellikle kripto para birimleri üzerinden yapılır.",
    extraResource: "https://www.koinfinans.com/crowdsale-nedir/",
  },
  {
    term: "Crypto",
    definition:
      "Crypto (Kripto), kripto para birimleri veya kripto teknolojileri anlamında kullanılır ve genellikle blockchain teknolojisine dayalı dijital varlıkları ifade eder. Kripto, matematiksel şifreleme yöntemleri kullanarak verilerin güvenli bir şekilde saklanmasını, doğrulanmasını ve aktarılmasını sağlar. Kripto para birimleri, merkeziyetsiz bir yapı ve güvenli işlem protokolleri sayesinde finansal işlemleri dijital ortamda kolaylaştırır. ",
    extraResource:
      " https://tr.wikipedia.org/wiki/Blok_zinciri#:~:text=Blok%20zinciri%2C%20blokzincir%20ya%20da,sü rekli%20büyüyen%20bir%20kayıt%20listesidir.",
  },
  {
    term: "Crypto Derivatives",
    definition:
      "Crypto derivatives (kripto türevleri), bir kripto varlık (örneğin Bitcoin veya Ethereum) üzerindeki gelecekteki fiyat hareketlerine dayalı olarak ticaret yapılabilen finansal araçlardır. Türev ürünleri, genellikle belirli bir varlığın gelecekteki fiyatı üzerinden işlem yapılmasını sağlayan kontratlardır. Kripto türev ürünleri de aynı şekilde, kripto paraların fiyat değişimlerinden yararlanmak isteyen yatırımcılara fırsatlar sunar.",
  },
  {
    term: "Crypto Native Assets",
    definition:
      "Crypto Native Assets (kripto yerel varlıkları), bir blockchain ağında yerleşik olarak bulunan ve doğrudan o ağın işleyişine entegre olan dijital varlıklardır. Bu varlıklar, belirli bir blockchain üzerinde yerel olarak yaratılır, saklanır ve kullanılır. Yani, başka bir platforma veya ağda işlem görmeleri için taşınmalarına gerek yoktur ve bu varlıklar, genellikle o blockchain’in temel işlevlerine hizmet ederler",
  },
  {
    term: "Cryptocurrency",
    definition:
      "Kripto para, dijital veya sanal bir para birimidir ve genellikle blokzincir teknolojisi üzerine inşa edilir. Kripto paralar, merkeziyetsizdir ve bir merkezî otorite (banka veya hükümet gibi) tarafından kontrol edilmezler. Bunun yerine, ağdaki katılımcılar tarafından güvence altına alınır ve yönetilir. Kripto paralar, şifreleme teknikleri kullanarak güvenli hale getirilir ve bu sayede dolandırıcılık, sahtecilik gibi riskler minimize edilir. Kripto paraların en bilinen örneği Bitcoin (BTC)'dir, ancak günümüzde binlerce farklı kripto para bulunmaktadır.",
    extraResource:
      "https://gedik.com/yazilar/fintech/kripto-para-nedir-nasil-calisir",
  },
  {
    term: "Cryptoeconomics",
    definition:
      "Cryptoeconomics, kripto para sistemleri ve blockchain teknolojileri üzerinde ekonomik prensiplerin ve oyun teorisinin nasıl uygulandığını inceleyen bir alandır. Kripto ekonomisi, blockchain ağlarının güvenliğini, teşvik yapılarını, sürdürülebilirliğini ve merkeziyetsiz sistemlerin işleyişini optimize etmek için ekonomik motivasyonlar ve oyun teorisi stratejileri kullanır. Bu alan, özellikle tokenomics ve protokol tasarımı gibi konuları kapsar.",
  },
  {
    term: "Cryptographic Multisig",
    definition:
      "Cryptographic Multisignature (Multisig), bir dijital imza algoritmasının birden fazla imzacıdan gelen onayı gerektirdiği bir güvenlik özelliğidir. Bu, bir işlemin gerçekleştirilmesi için birden fazla tarafın imzasını (onayını) almayı gerektirir.",
  },
  {
    term: "Cryptographic Proofs",
    definition:
      "Kriptografik kanıtlar (cryptographic proofs), bir tarafın belirli bir bilgiyi doğruladığını ya da belirli bir iddiayı ispatladığını göstermek için kullanılan matematiksel yöntemlerdir. Bu kanıtlar, bilgilerin doğruluğunu veya geçerliliğini güvenli bir şekilde onaylamak için kriptografi kullanır, ancak kanıtı sunan tarafın gizliliğini korur.",
  },
  {
    term: "Cryptographic Signatures",
    definition:
      "Kriptografik imzalar, dijital ortamda bir belgenin, mesajın veya işlemin doğruluğunu ve bütünlüğünü kanıtlamak için kullanılan matematiksel bir araçtır. Kriptografik imzalar, genellikle public key cryptography (açık anahtar şifreleme) kullanılarak oluşturulur ve bir veri parçasının, belirli bir özel anahtarla imzalanarak doğruluğunun garanti edilmesini sağlar",
  },
  {
    term: "Cryptography",
    definition:
      "Kriptografi (Cryptography), bilgilerin güvenliğini sağlamak amacıyla kullanılan bilim dalıdır. Temel olarak, verilerin şifrelenmesi, şifresinin çözülmesi ve güvenli iletişimin sağlanmasıyla ilgilenir. Kriptografi, dijital dünyada verilerin gizliliğini, bütünlüğünü, kimlik doğrulamasını ve erişim kontrolünü sağlamak için kullanılır. Ayrıca, verilerin üçüncü şahıslar tarafından okunamaması ve değiştirilmemesi için çeşitli algoritmalar ve teknikler kullanılır.",
    extraResource:
      "https://www.kaspersky.com.tr/resource-center/definitions/what-is-cryptography",
  },
  {
    term: "Currency",
    definition:
      "Blockchain teknolojisinde currency (para), dijital bir değer birimi olarak kullanılabilen ve merkeziyetsiz bir ağ üzerinde işlem görebilen bir varlık türüdür. Bu para birimleri, geleneksel finansal sistemlerden farklı olarak, merkezi bir otorite veya aracı olmadan doğrudan kullanıcılar arasında transfer edilebilir.",
  },
  {
    term: "Curve (CRV)",
    definition:
      "Curve (CRV), Curve Finance adlı merkeziyetsiz finans (DeFi) protokolüne ait bir token'dır. Curve Finance, özellikle stablecoin (dolar sabitli kripto para birimleri gibi) ve benzer varlıklar arasında likidite sağlamak için optimize edilmiş bir merkeziyetsiz borsa (DEX) platformudur.",
    extraResource: "https://www.bitlo.com/rehber/curve-crv-nedir",
  },
  {
    term: "Custodial Wallets",
    definition:
      "Custodial Wallets (Varlık Saklama Cüzdanları), kullanıcıların kripto varlıklarını saklaması için bir üçüncü taraf hizmet sağlayıcısı tarafından yönetilen cüzdanlardır. Bu tür cüzdanlarda, kullanıcıların özel anahtarları (private key) genellikle cüzdan hizmeti sağlayıcısı tarafından kontrol edilir. Yani, bu cüzdanlarda kullanıcılar kripto para varlıklarına sahip olabilir, ancak bu varlıkların güvenliği ve yönetimi çoğunlukla üçüncü bir otoriteye, yani cüzdan sağlayıcısına emanet edilir.",
  },
  {
    term: "Cypherpunk",
    definition:
      "Cypherpunk, özellikle kişisel gizliliği, dijital özgürlüğü ve merkeziyetsizliği savunan bir topluluk ve hareket olarak tanımlanabilir. Cypherpunk hareketi, 1980'lerin sonlarından itibaren, özellikle internet ve dijital iletişimdeki gelişmelerle birlikte, şifreleme teknolojilerini (cryptography) kullanarak, bireylerin dijital dünyada mahremiyetlerini korumayı ve devlet ya da büyük kurumların denetiminden bağımsız olmayı hedeflemiştir.",
    extraResource:
      "https://tr.cointelegraph.com/learn/articles/what-is-cypherpunk",
  },
  {
    term: "DAC",
    definition:
      "DAC (Decentralized Autonomous Corporation), merkeziyetsiz otonom şirket anlamına gelir ve merkeziyetsiz bir yapıya sahip, blockchain teknolojisiyle yönetilen ve otonom şekilde işleyen bir organizasyon modelidir. DAC'ler, genellikle akıllı sözleşmeler (smart contracts) ve blockchain altyapıları kullanarak, geleneksel şirket yapılarının yerine geçen, kendi kendini yöneten ve kararlarını merkezi bir otoriteye ihtiyaç duymadan alabilen yapılardır.",
  },
  {
    term: "DAI",
    definition:
      "DAI, Ethereum blockchain üzerinde çalışan merkeziyetsiz bir stablecoin'dir. DAI, değeri Amerikan doları (USD) gibi geleneksel fiyat para birimlerine sabitlenmiş olup, blockchain üzerinde kullanıcılar için güvenli ve şeffaf bir dijital ödeme aracı sağlar.",
    extraResource: "https://www.kraken.com/learn/what-is-dai",
  },
  {
    term: "Danksharding",
    definition:
      "Danksharding, Ethereum'un blockchain ölçeklenebilirliğini artırmak için önerilen bir çözüm olan sharding teknolojisinin bir çeşididir. Sharding, büyük bir veri tabanını daha küçük parçalara (shard'lara) bölerek işlem kapasitesini artırmaya yönelik bir yöntemdir. Ethereum'un gelecekteki ölçeklenebilirlik çözümlerinden biri olarak Ethereum 2.0'ın parçasıdır ve genel olarak ağın verimliliğini artırmayı hedefler.",
  },
  {
    term: "DAO",
    definition:
      "DAO (Decentralized Autonomous Organization), blockchain teknolojisi üzerine kurulu ve merkeziyetsiz bir şekilde, kendi kendini yöneten bir organizasyon yapısını ifade eder. DAO'lar, belirli kurallar ve akıllı sözleşmelerle yönetilir ve bu yapılar, herhangi bir merkezi otoriteye veya liderliğe ihtiyaç duymadan, tamamen topluluk tarafından kontrol edilir.",
    extraResource: "https://webrazzi.com/2022/03/02/dao-nedir-nasil-calisir/",
  },
  {
    term: "DAO Governance",
    definition:
      "DAO Governance (DAO Yönetişimi), bir DAO içerisinde alınan kararların ve protokollerin nasıl yönetildiğini ve bu kararların nasıl alındığını belirleyen süreçtir. DAO'lar merkeziyetsiz yapılar oldukları için, karar alma süreci de merkezi bir otoriteye dayalı değil, topluluğun katılımı ile şekillenir. DAO yönetimi, genellikle bir token bazlı oylama sistemi ile gerçekleştirilir ve katılımcılar bu sistem üzerinden organizasyonun geleceğiyle ilgili önemli kararlar alabilirler.",
  },
  {
    term: "DApp",
    definition:
      "DApp (Decentralized Application), merkeziyetsiz bir şekilde çalışan, genellikle blockchain üzerine inşa edilmiş uygulamalardır. DApp'ler, merkezi bir sunucuya veya yöneticilere ihtiyaç duymazlar ve işlemleri şeffaf, güvenli bir şekilde gerçekleştirmek için blockchain teknolojisinden yararlanırlar. Geleneksel uygulamalardan farkları, verilerin ve işlemlerin merkezi bir otorite yerine blockchain üzerinde gerçekleşmesidir.",
    extraResource:
      "https://bilgiplatformu.btcturk.com/kripto-okur-yazarlik/dapp-nedir-neden-onemlidir/",
  },
  {
    term: "DappRadar",
    definition:
      "DappRadar, merkeziyetsiz uygulamaların (DApp'lerin) popülaritesini ve performansını izleyen bir platformdur. DappRadar, kullanıcıların çeşitli blockchain ağlarında yer alan DApp'leri keşfetmelerini, takip etmelerini ve analiz etmelerini sağlar. Platform, DApp'lerin işlem hacmi, kullanıcı sayısı, gelir gibi metriklerini sunar ve kullanıcıların bu uygulamalara dair bilgileri daha kolay edinmelerini sağlar.",
    extraResource:
      "https://kriptokoin.com/dappradar-nedir-ve-nasil-kullanilir/",
  },
  {
    term: "Data Availability",
    definition:
      "Data Availability (Veri Erişilebilirliği), blockchain veya merkeziyetsiz sistemlerde, verilerin doğru, zamanında ve güvenli bir şekilde erişilebilir ve kullanılabilir olma durumudur. Bu kavram, özellikle blockchain ağlarının güvenilirliğini sağlamak ve ağ katılımcılarının veriye her zaman ulaşabilmesini garanti etmek için önemlidir.",
  },
  {
    term: "Data Availability Committee",
    definition:
      "Data Availability Committee (DAC), yani Veri Kullanılabilirliği Komitesi, genellikle hassas veya özel verilerin paylaşımını düzenlemek ve yönetmek için kurulan bir komisyondur. Bu komite, verilere erişim taleplerini değerlendirir ve uygun kullanım politikalarına göre onaylar veya reddeder.",
  },
  {
    term: "Data Availability Sampling (DAS)",
    definition:
      "Data Availability Sampling (Veri Kullanılabilirliği Örnekleme), özellikle blockchain ve dağıtılmış sistemlerde, bir bloğun tüm verilerinin mevcut olup olmadığını doğrulamak için kullanılan bir tekniktir.",
  },
  {
    term: "Data Privacy",
    definition:
      "Veri gizliliği, kişisel veya hassas verilerin toplanması, saklanması, işlenmesi ve paylaşılması sırasında bireylerin mahremiyetini korumaya yönelik kurallar, politikalar ve uygulamaları kapsar.",
  },
  {
    term: "Data Sharding",
    definition:
      "Data Sharding (Veri Parçalama), büyük bir veri tabanını veya blok zinciri ağını, küçük ve yönetilebilir parçalara bölerek ölçeklenebilirliği ve performansı artıran bir tekniktir. Bu parçalar 'shard' (parça) olarak adlandırılır ve her biri bağımsız olarak çalışır.",
  },
  {
    term: "Decentraland (MANA)",
    definition:
      "Decentraland (MANA), Ethereum blok zinciri üzerine inşa edilmiş merkeziyetsiz bir sanal dünya (metaverse) platformudur. Kullanıcılar burada dijital araziler satın alabilir, inşa edebilir, ticaret yapabilir ve etkileşime girebilir.",
    extraResource: "https://www.bitlo.com/rehber/decentraland-mana-nedir",
  },
  {
    term: "Decentralized Exchange (DEX)",
    definition:
      "Decentralized Exchange (DEX), merkeziyetsiz borsalar olarak bilinen ve kullanıcıların doğrudan birbirleriyle kripto para alım satımı yaptığı, merkezi bir otoriteye sahip olmayan borsalardır. Yani, DEX'ler, kullanıcıların aracı olmadan, blockchain üzerinde birbirleriyle işlem yapmalarını sağlar.",
    extraResource: "https://www.bitlo.com/rehber/merkeziyetsiz-borsa-dex-nedir",
  },
  {
    term: "Decentralized Finance (DeFi)",
    definition:
      "Decentralized Finance (DeFi), merkeziyetsiz finans anlamına gelir ve blockchain teknolojisi üzerinde çalışarak geleneksel finansal hizmetlerin merkezi bir otoriteye bağlı olmadan sunulmasını sağlar. DeFi, finansal araçları ve hizmetleri merkeziyetsiz ağlar üzerinde sunar, bu da aracıları ortadan kaldırarak daha açık, erişilebilir ve şeffaf bir finansal sistem yaratır.",
    extraResource:
      "https://gedik.com/yazilar/fintech/merkeziyetsiz-finans-defi-nedir",
  },
  {
    term: "Decentralized Sequencer",
    definition:
      "Decentralized Sequencer (Merkeziyetsiz Sıralayıcı), merkeziyetsiz bir ağda veri işlem sırasını belirlemek ve işlemleri doğru bir sırayla işlemek için kullanılan bir sistemdir. Özellikle blockchain ve Layer 2 çözümleri gibi merkeziyetsiz ağlarda önemli bir rol oynar. Sequencer’lar, gelen işlemleri toplar, sıralar ve daha sonra bunları blockchain'e veya ilgili bir sisteme gönderir.",
  },
  {
    term: "Decentralized Web (Web3)",
    definition:
      "Web3, internetin merkeziyetsiz versiyonudur ve kullanıcılara veriler üzerinde tam kontrol sağlamayı amaçlar. Web3, blockchain teknolojisi, kripto para birimleri ve akıllı sözleşmeler gibi araçlar kullanarak, geleneksel Web2'nin sunduğu merkezi yapıdan uzaklaşır ve merkeziyetsiz bir internet deneyimi yaratır.",
    extraResource:
      " https://tr.wikipedia.org/wiki/Web3#:~:text=Web3%2C%20İnternet%27in%20merkezi%20olmayan,ve %202021%27de%20popülerlik%20kazandı",
  },
  {
    term: "Deflation",
    definition:
      "Deflation (Deflasyon), ekonomideki genel fiyat seviyelerinin süreklilik arz eden bir şekilde düşmesi durumudur. Bir başka deyişle, mal ve hizmetlerin fiyatlarının genel olarak azalma eğiliminde olması deflasyon anlamına gelir. Bu, enflasyonun tam tersidir, yani fiyatlar sürekli olarak yükselmek yerine düşer. ",
  },
  {
    term: "Delegation",
    definition:
      "Delegation Blockchain'de, bir kullanıcının sahip olduğu belirli bir kaynağı (örneğin, token veya stake edilmiş kripto para) bir başkasına devretmesi işlemidir. Bu, genellikle delegated proof-of stake (DPoS) gibi merkeziyetsiz ağların konsensüs mekanizmalarıyla ilişkilidir ve ağı güvence altına almak veya ağ yönetimine katkı sağlamak amacıyla kullanılır.",
  },
  {
    term: "Derivatives",
    definition:
      "Derivatives (Türev Ürünleri), blockchain üzerinde genellikle finansal piyasalarda kullanılan ve değeri başka bir varlığın (örneğin, bir kripto para biriminin veya hisse senedinin) değerine bağlı olan sözleşmeleri ifade eder. Blockchain türevleri, geleneksel türev ürünlerine benzer şekilde çalışır, ancak dijital varlıklar ve akıllı sözleşmeler üzerinden işlem görürler.",
  },
  {
    term: "Difficulty",
    definition:
      "Difficulty (Zorluk), bir blockchain ağındaki yeni blokların oluşturulma sürecini belirleyen bir parametredir. Özellikle Proof of Work (PoW) konsensüs mekanizmasıyla çalışan blockchain ağlarında, zorluk seviyesi, madencilerin yeni blokları başarıyla çıkarabilmesi için gereken hesaplama gücünü belirler.",
  },
  {
    term: "Digital Collectibles",
    definition:
      "Digital Collectibles (Dijital Koleksiyonluklar), blockchain teknolojisi kullanılarak dijital ortamda oluşturulan, saklanan ve takas yapılabilen eşsiz (non-fungible) dijital varlıklardır. Bu varlıklar, genellikle NFT'ler (Non- Fungible Tokens) olarak bilinen ve her biri benzersiz olan dijital token'larla temsil edilir. Dijital koleksiyonluklar, sanat eserlerinden dijital kartlara, oyun içi öğelere kadar geniş bir yelpazede yer alabilir.",
  },
  {
    term: "Digital Gold",
    definition:
      "Digital Gold (Dijital Altın), blockchain teknolojisini kullanarak dijital ortamda temsil edilen ve genellikle değer saklama aracı olarak kabul edilen bir varlıktır. Dijital altın, fiziksel altının dijital versiyonu olarak düşünülebilir, ancak bu varlık blockchain üzerinde token veya dijital temsil ile şekillenir. En popüler örneklerden biri Bitcoin'dir, çünkü Bitcoin sıklıkla 'dijital altın' olarak adlandırılır. Ancak, dijital altın kavramı, blockchain üzerinde değerli varlıkların dijital temsillerini geniş bir şekilde kapsar. ",
  },
  {
    term: "Digital Identity Tokens",
    definition:
      "Digital Identity (Dijital Kimlik) blockchain teknolojisi kullanılarak oluşturulan ve yönetilen, bir kişinin veya organizasyonun dijital ortamda kimliğini temsil eden güvenli bir veridir. Dijital kimlik, bir kişinin çevrimiçi ortamda doğrulanabilir, güvenli bir şekilde tanımlanabilmesini sağlayan bir kavramdır. Blockchain tabanlı dijital kimlikler, merkeziyetsiz ve şeffaf yapıları sayesinde güvenli, izlenebilir ve kontrol edilebilir kimlik doğrulama yöntemleri sunar.",
  },
  {
    term: "Digital Ledger",
    definition:
      "Digital Ledger (Dijital Defter), blockchain teknolojisinin temel bileşenlerinden biridir ve dijital ortamda gerçekleştirilen işlemleri kaydeden merkeziyetsiz, güvenli ve şeffaf bir kayıt sistemini ifade eder. Blockchain, aslında bir tür dijital defterdir ve her işlem bloklar halinde kaydedilir. Bu bloklar zincir şeklinde birbirine bağlanarak, her kaydın izlenebilir ve değiştirilemez olmasını sağlar. Dijital defterler, fiziksel defterler gibi geleneksel kayıt tutma yöntemlerinin dijital versiyonlarıdır, ancak blockchain ile merkeziyetsiz bir yapıya kavuşurlar.",
  },
  {
    term: "Distributed Key Generation",
    definition:
      "Distributed Key Generation (DKG), bir kripto sisteminde kullanılan anahtarların merkezi bir otorite olmadan, ağdaki bir grup katılımcı tarafından birlikte oluşturulmasını sağlayan bir protokoldür. Bu, özellikle merkeziyetsiz sistemler ve blockchain teknolojisi ile ilişkili olarak güvenliği artırmak amacıyla kullanılır. DKG, özellikle şifreleme ve gizli paylaşım alanlarında önemli bir rol oynar.",
  },
  {
    term: "Distributed Ledger Technology (DLT)",
    definition:
      "Distributed Ledger Technology (DLT), verilerin merkezi olmayan bir şekilde saklandığı ve doğrulandığı bir teknolojidir. DLT, merkeziyetsiz sistemlerde, verilerin güvenli bir şekilde kaydedilmesini ve paylaştırılmasını sağlar. Blockchain, en yaygın ve bilinen DLT türüdür, ancak DLT yalnızca blockchain ile sınırlı değildir.",
  },
  {
    term: "Dogecoin",
    definition:
      "Dogecoin (DOGE), 2013 yılında Billy Markus ve Jackson Palmer tarafından eğlenceli ve mizahi bir kripto para birimi olarak yaratılmış bir dijital para birimidir. Dogecoin, ilk başta bir şaka olarak yaratılmış olsa da zamanla büyük bir topluluk ve popülerlik kazanarak ciddi bir kripto para piyasası değeri elde etmiştir. Dogecoin'in logosu, o dönemde popüler olan ‘Doge’ adlı bir meme karakteri olan Shiba Inu köpeğinden ilham almıştır.",
    extraResource: "https://www.bitlo.com/rehber/dogecoin-doge-nedir",
  },
  {
    term: "DoS",
    definition:
      "DoS (Denial of Service), blockchain dahil olmak üzere bilgisayar ağlarında ve internet sistemlerinde, bir hizmeti veya kaynağı erişilemez hale getirmek için yapılan saldırılardır. Bu tür saldırılar, sistemin normal çalışmasını engellemek veya yavaşlatmak amacıyla gerçekleştirilir. Blockchain'de DoS saldırıları, özellikle merkeziyetsiz ağlar ve işlem doğrulama süreçleri üzerinde olumsuz etkiler yaratabilir.",
  },
  {
    term: "Double Spend Attack",
    definition:
      "Double Spend Attack (Çift Harcama Saldırısı), blockchain ve kripto para sistemlerinde, aynı dijital varlığın iki kez harcanmaya çalışılması durumu olarak tanımlanır. Bu, kripto para birimlerinin dijital doğasından kaynaklanan bir güvenlik açığının kötüye kullanılmasıdır. Blockchain teknolojisinin temel prensiplerinden biri, her bir varlığın yalnızca bir kez harcanabilmesidir. Ancak bir double spend attack, bu prensibi ihlal etmeye çalışır.",
  },
  {
    term: "Dump",
    definition:
      "Dump, genellikle bir kripto para biriminin veya token'ının değerinin hızla düşmesi anlamında kullanılır. Bu terim, özellikle piyasa katılımcılarının ellerindeki kripto varlıkları büyük bir hızla satmasıyla ilişkili bir durumu ifade eder. Dump, İngilizce'deki atmak veya dökme anlamından gelir ve kripto para piyasasında genellikle fiyatın çökmesine yol açan ani satışlar için kullanılır.",
  },
  {
    term: "Dusting Attack",
    definition:
      "Dusting Attack, blockchain sistemlerinde yapılan bir tür gizli saldırı olup, çok küçük miktarlarda kripto para birimi (dust) gönderilerek hedeflerin izlenmesi amacıyla yapılır. Bu saldırı türü, genellikle kullanıcıların anonimliklerini ihlal etmek, kimliklerini tespit etmek veya izlemek için kullanılır.",
    extraResource:
      "https://www.binance.tr/blog/Security/48569f78d6f54a149fd840153b4cec06",
  },
  {
    term: "dYdX",
    definition:
      "dYdX blockchain tabanlı bir merkeziyetsiz finans (DeFi) platformudur ve genellikle kripto para türevleri ticareti yapmak için kullanılır. dYdX, kullanıcıların kripto para birimleri üzerinde vadeli işlemler, borç alma ve borç verme ve marjin ticareti yapmalarına olanak tanır. Platform, Ethereum blockchain'i üzerinde inşa edilmiştir, ancak kendi özel protokollerini ve çözümlerini kullanarak daha yüksek verimlilik ve kullanıcı deneyimi sağlar.",
    extraResource: "https://www.bitlo.com/rehber/dydx-nedir",
  },
  {
    term: "DYOR",
    definition:
      "DYOR (Do Your Own Research), blockchain ve kripto para dünyasında yaygın olarak kullanılan bir terimdir. ‘Kendi Araştırmanı Yap’ anlamına gelir ve genellikle yatırımcıları veya kullanıcıları, bir projeye veya kripto para birimine yatırım yapmadan önce kendi araştırmalarını yapmaya teşvik etmek için kullanılır.",
  },
  {
    term: "ECDSA",
    definition:
      "ECDSA (Elliptic Curve Digital Signature Algorithm), blockchain teknolojisinde yaygın olarak kullanılan bir dijital imza algoritmasıdır. Özellikle kripto para birimleri ve blockchain ağlarında, işlem güvenliğini sağlamak için kullanılır. ECDSA, eliptik eğri kriptografisini temel alır ve gizlilik, doğrulama ve kimlik doğrulama sağlamak için kullanılır.",
    extraResource:
      "https://tr.wikipedia.org/wiki/Eliptik_eğri_dijital_imza_algoritması",
  },
  {
    term: "Eclipse Attack",
    definition:
      "Eclipse Attack (Eclipse Saldırısı), blockchain ve kripto para ağlarında, bir kullanıcının veya bir grubun, bir node veya birkaç node’a tam kontrol sağladığı bir tür saldırıdır. Bu saldırının amacı, hedeflenen node’un tüm ağdan izole edilmesi ve yalnızca saldırganların sağladığı verilere erişmesi için manipüle edilmesidir.",
  },
  {
    term: "EdDSA (Edwards-Curve Digital Signature Algorithm)",
    definition:
      "EdDSA (Edwards-curve Digital Signature Algorithm), eliptik eğri tabanlı bir dijital imza algoritmasıdır ve özellikle güvenlik, verimlilik ve kolay implementasyon sağlamak amacıyla tasarlanmıştır. EdDSA, Edwards eğrisi (yani, Twisted Edwards Curve) üzerinde çalışır ve kriptografik imzalar oluşturmak için kullanılır. Kripto para birimleri ve blockchain ağlarında, işlemlerin doğruluğunu ve güvenliğini sağlamak için yaygın olarak tercih edilir.",
  },
  {
    term: "Ethereum Improvement Proposals (EIP)",
    definition:
      "Ethereum Improvement Proposals (EIP), Ethereum blockchain'inin geliştirilmesi için önerilen değişikliklerin veya iyileştirmelerin teknik belgeleridir. Bu belgeler, ağın işleyişini, güvenliğini, performansını veya yeni özellikler eklemeyi amaçlayan öneriler içerir. EIP'ler, Ethereum topluluğu tarafından tartışılır ve onaylanır, ardından protokole dahil edilir.",
    extraResource: "https://github.com/ethereum/EIPs",
  },
  {
    term: "EIP-4844 (Proto-Danksharding)",
    definition:
      "EIP-4844, Ethereum'un sharding yöntemine yönelik bir öncül protokoldür. Bu protokol, Ethereum ağında işlem verilerinin daha verimli bir şekilde işlenmesini sağlamak ve daha fazla veri taşıma kapasitesine olanak tanımak için tasarlanmıştır.",
    extraResource: "https://blog.itublockchain.com/eip-4844-nedir-5a346fa68c74",
  },
  {
    term: "Elliptic Curve Cryptography (ECC)",
    definition:
      "Elliptic Curve Cryptography (ECC), şifreleme ve dijital imza oluşturma gibi güvenlik uygulamalarında kullanılan bir kriptografi algoritması türüdür. ECC, özellikle açık anahtarlı şifreleme sistemlerinde yaygın olarak kullanılır ve daha az işlem gücüyle güçlü güvenlik sağlar. Bu özellik, özellikle sınırlı kaynaklara sahip cihazlar ve sistemler için avantajlıdır.",
  },
  {
    term: "Elliptic Curve Pairings",
    definition:
      "Elliptic Curve Pairings (eliptik eğri eşlemeleri), eliptik eğri kriptografisi (ECC) üzerinde yapılan matematiksel işlemler olup, iki noktanın eşleşmesini sağlayan özel bir yapıdır. Bu eşlemeler, özellikle kriptografi ve gizlilik alanlarında önemli bir rol oynar ve birçok modern şifreleme protokolünde kullanılır.",
  },
  {
    term: "Emission",
    definition:
      "Emission terimi, blockchain ve kripto para dünyasında genellikle token ya da coin arzı ile ilgili bir kavram olarak kullanılır. Özellikle bir kripto paranın arzı, madencilik (mining), stake etme veya başka bir mekanizma aracılığıyla nasıl dağıldığını ifade eder.",
  },
  {
    term: "Emission Rate",
    definition:
      "Emission Rate (Arz Oranı), bir blockchain ağında yeni coin veya token’ların oluşturulma hızını ifade eder. Yani, blockchain ağındaki blok ödüllerinin ne kadar sürede ve hangi oranda dağıtıldığını belirleyen bir kavramdır. Bu oran, özellikle Proof of Work (PoW) ve Proof of Stake (PoS) gibi konsensüs mekanizmalarında önemlidir ve kripto paraların arzının nasıl yönetileceğini etkiler.",
  },
  {
    term: "End To End Encryption",
    definition:
      "End-to-End Encryption (E2EE), uçtan uca şifreleme olarak da bilinir, iletişimdeki verilerin yalnızca gönderen ve alıcı tarafından okunabilmesini sağlayan bir güvenlik yöntemidir. Bu tür şifreleme, verilerin iletilmesi sırasında herhangi bir üçüncü şahsın (örneğin, servis sağlayıcılar, hackerlar veya devlet kurumları) içeriği okumasını veya değiştirmesini engeller.",
  },
  {
    term: "Etherum Name Service (ENS)",
    definition:
      "ENS (Ethereum Name Service), Ethereum blockchain üzerinde bir alan adı sistemidir. ENS, Ethereum adreslerini, akıllı sözleşmeleri ve diğer dijital varlıkları, insanların daha kolay hatırlayabileceği ve kullanabileceği bir formatta temsil etmeyi amaçlar. ENS, Ethereum blok zincirinin üzerine inşa edilmiştir ve kullanıcıların karmaşık cüzdan adreslerini (uzun alfanümerik karakter dizileri) yerine daha kısa, okunabilir isimlerle değiştirmelerini sağlar.",
  },
  {
    term: "EOS",
    definition:
      "EOS, bir blockchain platformudur ve özellikle akıllı sözleşmeler (smart contracts) ve decentralized applications (DApps) geliştirmek için tasarlanmıştır. EOS, yüksek işlem hızları, esnek yapısı ve kullanıcı dostu özellikleriyle tanınır. Özellikle Ethereum gibi daha önceki blockchain platformlarının ölçeklenebilirlik sorunlarını çözmeyi hedefler.",
    extraResource:
      "https://kriptomat.io/tr/kripto-para-fiyatlari/eos-fiyati/nedir/",
  },
  {
    term: "Epoch",
    definition:
      "Epoch, blockchain sistemlerinde belirli bir zaman dilimini veya işlem döngüsünü ifade eden bir terimdir. Genellikle blockchain ağlarında, özellikle proof-of-stake(PoS) ve delegated proof-of-stake (DPoS) gibi konsensüs algoritmalarını kullanan ağlarda, epoch bir dizi bloktan oluşur ve çeşitli önemli işlemlerin gerçekleştiği bir süreyi ifade eder.",
  },
  {
    term: "Erasure Encoding",
    definition:
      "Erasure encoding, blockchain ve dağıtık sistemlerde verilerin güvenliğini ve dayanıklılığını artırmak için kullanılan bir tekniktir. Bu yöntem, veriyi parçalara böler ve her parçaya ek olarak bazı ‘yedek’ veriler (şifreli kodlar) ekler. Bu sayede, bir veya daha fazla veri parçası kaybolduğunda ya da bozulduğunda, orijinal veri yine de yeniden oluşturulabilir. Blockchain üzerinde erasure encoding, verilerin güvenli bir şekilde depolanmasını sağlar.",
    extraResource: "https://en.wikipedia.org/wiki/Erasure_code",
  },
  {
    term: "ERC",
    definition:
      "ERC (Ethereum Request for Comments), Ethereum blockchain'inde kullanılan ve yeni özelliklerin veya standartların geliştirilmesini sağlayan bir öneri sistemidir. ERC'ler, Ethereum ağındaki uygulamalar, token'lar ve akıllı sözleşmelerin nasıl çalışması gerektiğini tanımlayan teknik spesifikasyonlardır.",
    extraResource:
      "https://en.wikipedia.org/wiki/Ethereum_Request_for_Comments",
  },
  {
    term: "ERC-1155",
    definition:
      "Hem takas edilebilir (fungible) hem de takas edilemez (non-fungible) token'ları aynı akıllı sözleşme içinde yönetmeyi mümkün kılar.",
    extraResource:
      "https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1155.md",
  },
  {
    term: "ERC-20",
    definition:
      "ERC-20, Ethereum blockchain üzerinde kullanılan en yaygın token standardıdır. Bu standart, token'ların birbirleriyle uyumlu bir şekilde çalışabilmesini sağlar. ERC-20, token'ların nasıl oluşturulacağını ve ağda nasıl işlem yapacağını belirleyen bir dizi kural ve fonksiyondan oluşur. ERC-20 token'ları, genellikle kripto para birimleri, dijital varlıklar veya diğer token tabanlı projeler için kullanılır. Örneğin, USDT (Tether) ve Chainlink (LINK) gibi popüler token'lar ERC-20 standardına dayanır.",
    extraResource: [
      "https://en.wikipedia.org/wiki/Ethereum#ERC20",
      "https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md",
    ],
  },
  {
    term: "ERC-3643",
    definition:
      "ERC-3643, Ethereum blockchain üzerinde özellikle yasal düzenlemelere ve güvenlik gereksinimlerine uygun token'lar yaratmak için geliştirilmiş bir standarttır. Bu standart, geleneksel finansal piyasalarda (örneğin menkul kıymetler, varlıklar) kullanılan token'ların, belirli denetimlere ve düzenlemelere uyumlu olmasını sağlamak amacıyla tasarlanmıştır. ERC-3643, özellikle dijital menkul kıymetler ve tokenlaştırılmış varlıklar gibi düzenlemeye tabi varlıklar için uygundur.",
    extraResource:
      "https://github.com/ethereum/EIPs/blob/master/EIPS/eip-3643.md",
  },
  {
    term: "ERC-4337",
    definition:
      "ERC-4337, Ethereum blockchain'inde hesap soyutlaması sağlayan bir standarttır. Bu, kullanıcıların daha güvenli ve özelleştirilebilir hesaplar oluşturmasına olanak tanır. ERC-4337, işlem doğrulama ve gas ücretleri gibi işlemleri daha esnek hale getirir.",
    extraResource:
      "https://github.com/ethereum/EIPs/blob/master/EIPS/eip-4337.md",
  },
  {
    term: "ERC-721",
    definition:
      "ERC-721, Ethereum blockchain üzerinde benzersiz ve takas edilemez token'lar (NFT'ler) için bir standarttır. Her ERC-721 token'ı, kendine özgü bir kimliğe ve özelliklere sahip olup, bir diğer token ile değiştirilemez. Bu, özellikle dijital sanat eserleri, koleksiyonluk öğeler ve oyun içi varlıklar gibi benzersiz dijital varlıklar için kullanılır.",
    extraResource:
      "https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",
  },
  {
    term: "Escrow",
    definition:
      "Escrow, blockchain'de bir işlemin güvenliğini sağlamak için varlıkların bir üçüncü taraf tarafından geçici olarak tutulmasıdır. İşlem şartları yerine getirildiğinde, varlıklar serbest bırakılır. Genellikle akıllı sözleşmeler ile yönetilir.",
    extraResource: "https://en.wikipedia.org/wiki/Escrow",
  },
  {
    term: "ETF",
    definition:
      "ETF (Exchange-Traded Fund), borsada işlem gören bir yatırım fonudur. Blockchain dünyasında, kripto ETF'leri, kripto para birimlerine dayalı varlıkları takip eden ve yatırımcılara borsa üzerinden işlem yapma imkanı sunan finansal araçlardır. Yani, bir kripto ETF, Bitcoin veya Ethereum gibi dijital varlıklara yatırım yapmayı kolaylaştırır, ancak yatırımcıların doğrudan kripto para almak yerine borsada işlem gören bir ürün üzerinden yatırım yapmalarını sağlar.",
    extraResource: "https://cointelegraph.com/",
  },
  {
    term: "ETH",
    definition:
      "ETH (Ethereum), merkeziyetsiz uygulamalar (DApps) ve akıllı sözleşmeler geliştirmek için kullanılan bir blockchain platformudur. ETH, Ethereum ağındaki kripto para birimi olup, ağda işlem ücretlerini ödemek ve akıllı sözleşmeleri çalıştırmak için kullanılır. Ethereum, Bitcoin'den farklı olarak sadece bir dijital para birimi değil, aynı zamanda geliştiricilere çeşitli uygulamalar oluşturma imkanı sunar.",
    extraResource: "https://ethereum.org/tr/",
  },
  {
    term: "Ethereum Classic (ETC)",
    definition:
      "Ethereum Classic (ETC), Ethereum'un orijinal sürümüdür. 2016 yılında, Ethereum ağındaki büyük bir hack olayının ardından, Ethereum topluluğu ikiye ayrıldı. Bir grup, hack sonrası kaybolan fonların geri alınması için Ethereum'un hard fork yapmasını sağladı ve bu, Ethereum (ETH)'yi doğurdu. Diğer grup ise eski zinciri koruyarak hack'in etkilerini kabul etti ve Ethereum Classic oluştu.",
    extraResource: "https://ethereumclassic.org/",
  },
  {
    term: "Ethereum Foundation",
    definition:
      "Ethereum Foundation, Ethereum blockchain'inin gelişimini destekleyen ve sürdüren kar amacı gütmeyen bir kuruluştur. Ethereum ağının altyapısını geliştirmek, araştırma yapmak, yazılım araçları sağlamak ve ekosistemi büyütmek için çalışır. Ayrıca, Ethereum ile ilgili projeleri finanse eder ve topluluğa katkıda bulunur.",
    extraResource: "https://ethereum.foundation/",
  },
  {
    term: "Ethereum Virtual Machine (EVM)",
    definition:
      "Ethereum Virtual Machine (EVM), Ethereum blockchain'inde akıllı sözleşmelerin çalıştırılmasını sağlayan bir yazılım ortamıdır. EVM, Ethereum ağındaki tüm node’ların çalıştırdığı bir ‘sanallaştırma’katmanıdır ve bu ortamda kod çalıştırılarak işlemler gerçekleştirilir. EVM, Ethereum blockchain'inde kodun doğru ve güvenli bir şekilde yürütülmesini sağlar.",
    extraResource: [
      "https://bilgiplatformu.btcturk.com/blokzinciri/ethereum-virtual-machine-evm-nedir/",
      "https://www.coinbase.com/learn/crypto-glossary/what-is-the-ethereum-virtual-machine",
    ],
  },
  {
    term: "Etherscan",
    definition:
      "Etherscan, Ethereum blockchain'inde gerçekleştirilen işlemleri, akıllı sözleşmeleri ve blokları izlemeye yarayan bir blockchain gezginidir. Kullanıcılar, Etherscan aracılığıyla işlem geçmişini, cüzdan bakiyelerini ve diğer blockchain verilerini sorgulayabilir.",
    extraResource: [
      "https://www.coinbase.com/learn/crypto-glossary/what-is-etherscan-and-how-to-use-it",
      "https://koinly.io/blog/how-to-use-etherscan/",
    ],
  },
  {
    term: "Events",
    definition:
      "Events, blockchain uygulamalarında özellikle akıllı sözleşmelerin dış dünyaya bilgi vermek için kullandığı bir mekanizmadır. Akıllı sözleşmelerdeki belirli olaylar (örneğin bir işlem başarıyla tamamlandığında) tetiklendiğinde, bu olaylar event olarak kaydedilir ve dış dünyaya (örneğin bir dApp veya frontend uygulamaya) bildirilir.",
    extraResource: "https://eryilmaz0.medium.com/event-nedir-8f8fe080b23f",
  },
  {
    term: "EVM Equivalence",
    definition:
      "EVM Equivalence, Ethereum Virtual Machine (EVM) ile uyumlu olan ve aynı şekilde çalışan başka blockchain'leri ifade eder. EVM uyumlu bir blockchain, Ethereum'un işlem yapma, akıllı sözleşmeleri çalıştırma ve güvenlik gibi özelliklerini aynı şekilde destekler. Bu tür blockchain'ler, Ethereum ile benzer araçlar ve altyapı kullanarak geliştiricilere tanıdık bir ortam sağlar.",
    extraResource:
      "https://blog.itublockchain.com/evm-denkliği-vs-evm-uyumluluğu-a6084e3fff8a",
  },
  {
    term: "Exchange",
    definition:
      "Exchange, blockchain dünyasında, kripto para alım satımının yapıldığı dijital platformlardır. Kullanıcılar, kripto para birimlerini birbirine dönüştürebilir veya gerçek paraya çevirebilir.",
    extraResource: [
      "https://www.paribu.com/blog/sozluk/exchange-nedir/",
      "https://www.coinbase.com/",
    ],
  },
  {
    term: "Execution Environment",
    definition:
      "Execution Environment (Yürütme Ortamı), blockchain ağlarında işlemlerin ve akıllı sözleşmelerin çalıştırıldığı ortamı ifade eder. Bu ortam, akıllı sözleşmelerin doğru bir şekilde yürütülmesi, veri işlenmesi ve işlem sonuçlarının kaydedilmesi için gerekli altyapıyı sağlar. Ethereum gibi blockchain'lerde, Execution Environment, özellikle Ethereum Virtual Machine (EVM) gibi araçlar aracılığıyla akıllı sözleşmelerin işlediği sanal bir ortamdır. Bu ortam, kodların çalıştırıldığı, işlem doğrulamalarının yapıldığı ve sonuçların ağda kaydedildiği alandır.",
    extraResource:
      "https://doganeth.medium.com/trusted-execution-environment-ve-blockchaindeki-kullan%C4%B1m-alanlar%C4%B1-f49bda9d1583",
  },
  {
    term: "Farcaster",
    definition:
      "Farcaster, merkeziyetsiz sosyal medya platformları için bir protokoldür. Blockchain tabanlı bir yapıya sahip olan Farcaster, kullanıcıların sosyal medya hesaplarını merkezi olmayan bir ağda yönetmelerini sağlar. Farcaster, kullanıcılara daha fazla özgürlük, kontrol ve veri sahipliği sunmayı amaçlar. Kullanıcılar, içeriklerini ve etkileşimlerini merkezi olmayan bir ağda paylaşarak, geleneksel sosyal medya platformlarının kontrolünden bağımsız hale gelirler.",
    extraResource: [
      "https://www.farcaster.xyz/",
      "https://unchainedcrypto.com/what-is-farcaster/",
    ],
  },
  {
    term: "Faucet",
    definition:
      "Faucet, blockchain dünyasında, kullanıcıların küçük miktarlarda kripto para (genellikle test ağı token'ları) alabileceği platformlardır. Faucet'ler, genellikle yeni kullanıcıları teşvik etmek, test ağlarında işlem yapmalarını sağlamak veya belirli blockchain projelerini tanıtmak için kullanılır.",
  },
  {
    term: "Fee Market Dynamics",
    definition:
      "Fee market dynamics, bir ağda işlem ücretlerinin nasıl belirlendiği ve değiştiğini ifade eder. Özellikle blokzincir ağlarında (Bitcoin, Ethereum vb.) işlem ücretleri, ağın kapasitesi, işlem talebi ve ağın işlem doğrulayıcıları (madenciler veya doğrulayıcılar) tarafından belirlenir.",
    extraResource:
      "https://docs.uniswap.org/contracts/v4/concepts/dynamic-fees",
  },
  {
    term: "Fetch.ai",
    definition:
      "Fetch blockchain bağlamında, genellikle veri çekme veya sorgulama işlemiyle ilgilidir. Blockchain üzerinde, fetch terimi, bir kullanıcının veya bir uygulamanın, blokzincir ağından belirli verileri (örneğin, işlem bilgileri, bloklar, akıllı sözleşme durumu) almak için yaptığı sorguları ifade eder.",
    extraResource: "https://www.bitlo.com/rehber/fetch-ai-fet-nedir",
  },
  {
    term: "Fiat",
    definition:
      "Fiat, hükümetler tarafından yasal olarak kabul edilen, değerini fiziksel bir varlıktan almayan para birimidir (örneğin, dolar, euro). Blockchain’de, fiat para genellikle kripto paralara dönüştürülür.",
    extraResource: [
      "https://hedera.com/learning/fintech/fiat-vs-crypto",
      "https://coinmarketcap.com/academy/tr/glossary/fiat",
    ],
  },
  {
    term: "Fiat Off-Ramp",
    definition:
      "Fiat off-ramp, blockchain ve kripto para dünyasında, kripto paraların geleneksel fiat para birimlerine (örneğin, dolar, euro) dönüştürülmesini sağlayan süreçtir. Yani, kullanıcılar kripto varlıklarını fiat paraya çevirerek, normal bankacılık sistemine veya nakit olarak kullanabilirler. Bu genellikle borsalar veya ödeme platformları aracılığıyla yapılır.",
    extraResource: [
      "https://www.babypips.com/crypto/learn/what-are-fiat-on-ramps-and-off-ramps",
      "https://tr.cointelegraph.com/news/what-are-fiat-on-ramps-and-off-ramps",
    ],
  },
  {
    term: "Fiat On-Ramp",
    definition:
      "Fiat on-ramp, fiat para birimlerinin (örneğin, dolar, euro) kripto paralara (örneğin, Bitcoin, Ethereum) dönüştürülmesini sağlayan süreçtir. Kullanıcılar, fiat para ile kripto para satın almak için borsalar veya ödeme platformları gibi hizmetleri kullanır. Bu, geleneksel para birimlerinin blockchain ekosistemine girişini sağlar.",
  },
  {
    term: "Filecoin (FIL)",
    definition:
      "Filecoin, merkeziyetsiz bir depolama ağıdır. Kullanıcılar, boş depolama alanlarını diğer kullanıcılara kiralayarak gelir elde edebilirler. Aynı zamanda, verileri depolamak isteyen kişiler, Filecoin token'ları kullanarak depolama alanı kiralar. Blockchain teknolojisiyle çalışan Filecoin, verilerin güvenli bir şekilde depolanmasını ve erişilmesini sağlar.",
    extraResource: [
      "https://www.bitlo.com/rehber/filecoin-fil-nedir",
      "https://uzmancoin.com/fil-coin-nedir-yorumlari-gelecegi-projesi/",
    ],
  },
  {
    term: "Finality",
    definition:
      "Finality, bir blockchain işlem veya blokunun geri alınamaz ve değiştirilemez hale gelmesi durumudur. Yani, işlem onaylandıktan sonra, herhangi bir değişiklik veya iptal yapılamaz. Bu, ağın güvenliğini ve doğruluğunu sağlamak için kritik bir özelliktir. Farklı konsensüs mekanizmalarına göre finality süresi değişebilir.",
    extraResource: [
      "https://www.coindesk.com/learn/what-is-block-finality-in-crypto",
      "https://medium.com/@combfin/what-is-block-finality-8f735b10243d",
    ],
  },
  {
    term: "Finney Attack",
    definition:
      "Finney attack, bir kullanıcının, bir işlem yapmadan önce aynı coin'i başka bir işlemde harcamaya çalıştığı double-spending saldırısıdır. Bu, genellikle bir blok oluşturulmadan önce, işlemi doğrulayan ağın kontrol edilmesiyle gerçekleştirilir.",
    extraResource: [
      "https://www.investopedia.com/terms/d/doublespending.asp",
      "https://www.bithero.com/blog/cift-harcama-double-spending-nedir",
    ],
  },
  {
    term: "Flash Loan",
    definition:
      "Flash loan, merkeziyetsiz finans (DeFi) platformlarında kullanılan, teminatsız ve anında alınabilen bir kredi türüdür. Bu tür krediler, yalnızca tek bir işlem bloğu içinde alınıp geri ödenebilir. Yani, kullanıcılar krediyi aldıktan sonra, işlemi tamamlayarak geri ödemek zorundadırlar. Eğer geri ödeme yapılmazsa, işlem iptal edilir. Flash loan’lar, genellikle arbitraj fırsatlarını değerlendirmek veya likidite sağlamak için kullanılır.",
    extraResource: [
      "https://bilgiplatformu.btcturk.com/kripto-okur-yazarlik/flash-loan-nedir/",
      "https://www.cropty.io/tr/loan/flash-loans-crypto",
    ],
  },
  {
    term: "Flashbot MEV Auctions",
    definition:
      "Flashbot MEV auctions, Ethereum ve diğer blockchain ağlarında Maximal Extractable Value (MEV) adı verilen, işlem sırasını manipüle ederek veya işlem içeriğini değiştirerek kazanç sağlama fırsatlarını optimize etmek için kullanılan bir yöntemdir. Flashbot, bu fırsatları yakalamak için kullanılan bir araçtır ve MEV'yi çıkaran işlemlerin bir açık artırma şeklinde düzenlendiği bir sistem sunar. Kullanıcılar, ağdaki işlemleri önceliklendirerek veya belirli fırsatları (örneğin, arbitraj) değerlendirerek kazanç elde ederler. Bu süreç, ağdaki minerlar ve doğrulayıcılar tarafından yürütülür.",
    extraResource: [
      "https://milkroad.com/flashbots/",
      "https://medium.com/turansert/flashbots-mev-problemini-%C3%A7%C3%B6zebilir-mi-8808f358bcee",
    ],
  },
  {
    term: "Flippening",
    definition:
      "Flippening, Ethereum'un piyasa değeri veya işlem hacmi gibi bazı metriklerde Bitcoin'i geçmesi durumunu ifade eder. Yani, Ethereum'un Bitcoin'i geride bırakıp en büyük kripto para birimi haline gelmesiyle gerçekleşen bir olaydır. Bu terim, Ethereum'un büyümesini ve Bitcoin ile arasındaki farkın azalmasını anlatmak için kullanılır.",
    extraResource: [
      "https://coinmarketcap.com/academy/tr/glossary/flippening",
      "https://akademi.bitlo.com/sozluk/flippening",
    ],
  },
  {
    term: "FOMO",
    definition:
      "FOMO (Fear of Missing Out), bir fırsatı kaçırma korkusu anlamına gelir. Kripto para dünyasında, fiyatların hızla arttığına tanık olan bir kişinin, bu fırsatı kaçırma korkusuyla aceleyle yatırım yapması durumunu ifade eder. Genellikle, panik ve duygusal kararlar almayı tetikler.",
    extraResource: [
      "https://coinmarketcap.com/academy/tr/glossary/fomo",
      "https://bilgiplatformu.btcturk.com/kripto-okur-yazarlik/firsati-kacirma-korkusu-fear-of-missing-out-fomo/",
    ],
  },
  {
    term: "Fork of Chains",
    definition:
      "Fork of chains, bir blockchain ağının bir 'fork' sonucu ikiye bölünmesi anlamına gelir. Bu durum, ağdaki protokol veya yazılım değişiklikleri nedeniyle, blockchain'in iki farklı versiyonunun oluşmasına yol açar. Hard fork durumunda, iki ağ tamamen farklı hale gelirken, soft fork durumunda eski sürümle uyumlu kalınarak değişiklikler yapılır. Fork of chains, genellikle yeni özellikler eklemek veya hataları düzeltmek için yapılır.",
    extraResource: "https://www.bitlo.com/rehber/fork-nedir",
  },
  {
    term: "Software Fork",
    definition:
      "Software fork, bir yazılımın mevcut versiyonunun kopyalanarak yeni bir versiyonunun geliştirilmesi sürecidir. Blockchain bağlamında, bu terim bir ağın protokolünü veya yazılımını değiştiren ve iki farklı versiyonun oluşmasına yol açan bir güncellemeyi ifade eder.",
    extraResource: "https://www.investopedia.com/terms/s/soft-fork.asp",
  },
  {
    term: "Foundation",
    definition:
      "Blockchain dünyasında, bir foundation genellikle bir kripto para veya blockchain protokolünü geliştiren ve destekleyen, karar alma süreçlerini yöneten bir yapı olabilir. Örneğin, Ethereum Foundation, Ethereum ağı ve ekosisteminin gelişimini destekleyen bir vakıftır.",
    extraResource: "https://tr.bitdegree.org/crypto/foundation-incelemesi",
  },
  {
    term: "Fragmentation of Liquidity",
    definition:
      "Fragmentation of liquidity, likiditenin birden fazla piyasaya veya platforma dağılması durumudur. Bu, alım-satım işlemlerinin farklı borsalar veya likidite havuzları arasında bölünmesiyle gerçekleşir. Sonuç olarak, işlem yapanlar, daha az likiditeye sahip ortamlarda işlem yapabilir ve fiyatlar arasında farklar (spread) oluşabilir. Bu, piyasa verimliliğini ve fiyat keşfini zorlaştırabilir.",
    extraResource: [
      "https://medium.com/@analogtime/what-is-liquidity-fragmentation-and-why-its-killing-defi-e7b7ce390793",
      "https://www.editverse.com/tr/kripto-piyasas%C4%B1-likiditesi/",
    ],
  },
  {
    term: "Fragmentation of State",
    definition:
      "Fragmentation of state, bir blockchain ağında, verilerin veya durumu (state) birden fazla node veya ağ katmanına dağılması durumudur. Bu durum, ağın ölçeklenebilirliğini artırmak amacıyla kullanılır, ancak yönetim ve senkronizasyon zorlukları yaratabilir. Örneğin, her node ağdaki tüm veriyi saklamak yerine yalnızca belirli bir kısmını saklar, bu da ağın verimliliğini ve işlem hızını artırabilir.",
  },
  {
    term: "Friend.tech",
    definition:
      "Friend.tech, kullanıcıların sosyal medya etkileşimleri üzerinden dijital varlıklar oluşturabildiği bir platformdur. Blockchain tabanlı bir uygulama olan Friend.tech, kullanıcıların profil veya içeriklerine dayalı olarak dijital token'lar alıp satmalarını sağlar. Bu token'lar, belirli bir kişinin sosyal etkileşimlerine veya popülerliğine değer biçerek, kullanıcıların içerik üreticileriyle daha doğrudan etkileşime girmelerine olanak tanır.",
    extraResource: "https://coinmarketcap.com/tr/currencies/friend-tech/",
  },
  {
    term: "Front-Running",
    definition:
      "Front-running, bir işlem gerçekleşmeden önce, bir başkasının işlemi hakkında bilgi sahibi olan birinin, o işlemden önce kendi yararına işlem yapmasıdır. Kripto para ve finansal piyasalarda, bu, genellikle büyük bir işlemi takip ederek, fiyat hareketinden faydalanma amacıyla yapılan bir tür manipülasyondur. Bu tür eylemler, piyasa manipülasyonu olarak kabul edilir ve çoğu zaman yasadışıdır.",
    extraResource: [
      "https://webrazzi.com/2022/05/31/bilmeyenler-icin-front-running-nedir-ve-bundan-nasil-korunuruz/",
      "https://coinmarketcap.com/academy/tr/glossary/front-running",
    ],
  },
  {
    term: "FUD",
    definition:
      "FUD, Fear, Uncertainty, and Doubt (Korku, Belirsizlik ve Şüphe) kelimelerinin kısaltmasıdır. Blockchain ve kripto para dünyasında, FUD, yatırımcıları paniğe sevk etmek, olumsuz duygu yaratmak ve piyasa fiyatlarını etkilemek amacıyla yayılmaya çalışılan yanıltıcı veya abartılı bilgiler anlamına gelir. Bu, genellikle fiyatları düşürmek veya bir varlığın güvenilirliğini sorgulamak için kullanılır.",
    extraResource: [
      "https://bilgiplatformu.btcturk.com/kripto-okur-yazarlik/fud-nedir/",
      "https://www.binance.tr/tr/blog/makaleler/kripto-d%C3%BCnyas%C4%B1nda-fud-nedir-1034",
    ],
  },
  {
    term: "Full Node",
    definition:
      "Full node, bir blockchain ağında tüm blokları ve işlemleri tamamen doğrulayan ve ağda aktif olarak çalışan bir node’dur. Full node'lar, blockchain'in tam kopyasını saklar, böylece işlemleri ve blokları bağımsız olarak kontrol edebilir. Bu, ağın güvenliğini ve merkeziyetsizliğini artırır.",
    extraResource: [
      "https://www.bitpanda.com/academy/tr/dersler/bitcoin-node-nedir",
      "https://coinmarketcap.com/academy/tr/glossary/full-node",
    ],
  },
  {
    term: "FHE (Fully Homomorphic Encryption)",
    definition:
      "FHE (Fully Homomorphic Encryption), verilerin şifrelenmiş haldeyken üzerinde işlem yapılmasını sağlayan bir kriptografi yöntemidir. Blockchain bağlamında, FHE, verilerin şifreli kalmasına rağmen işlem yapılabilmesini sağlar, böylece kullanıcıların gizliliğini korurken veri üzerinde analiz ve işlem yapma imkanı sunar. Bu, özellikle merkeziyetsiz uygulamalar ve gizlilik odaklı blockchain projeleri için önemlidir.",
    extraResource: [
      "https://www.ibm.com/think/topics/homomorphic-encryption",
      "https://www.halborn.com/blog/post/fully-homomorphic-encryption-fhe-and-the-blockchain",
    ],
  },
  {
    term: "Fungible",
    definition:
      "Blockchain'de fungible, her bir birimin birbirinin yerine geçebilmesi anlamına gelir. Fungible varlıklar, her birimin aynı değeri taşıdığı ve birbirinin yerine kullanılabileceği varlıklardır. Örneğin, Bitcoin veya Ethereum gibi kripto paralar fungible'dir, çünkü her bir Bitcoin veya Ethereum aynı değere sahiptir ve birbirleriyle değiştirilebilir.",
    extraResource: "https://uzmancoin.com/fungible-non-fungible-nedir/",
  },
  {
    term: "Futures",
    definition:
      "Futures, blockchain ve kripto para piyasalarında, belirli bir varlığın gelecekteki fiyatı üzerinden yapılan sözleşmelerdir. Yatırımcılar, bu sözleşmeler aracılığıyla bir varlığın gelecekteki fiyatına dair tahminde bulunarak alım satım yaparlar. Futures sözleşmeleri, genellikle spekülasyon yapmak, riskten korunma sağlamak veya kaldıraçlı işlem yapmak için kullanılır.",
    extraResource: [
      "https://help.3commas.io/tr/articles/3768668-futures-futures-ve-kaldiracli-islemlerin-faydalari-nelerdir",
      "https://paritex.medium.com/kripto-paralarda-vadeli-i%CC%87%C5%9Flemler-crypto-futures-nedir-7a591ba2267e",
    ],
  },
  {
    term: "Game Theory",
    definition:
      "Game theory (oyun teorisi), blockchain bağlamında, katılımcıların (örneğin, madenciler, doğrulayıcılar) stratejik kararlar alarak, sistemin güvenliğini ve işleyişini optimize etmeye çalıştığı bir teoridir. Blockchain ağlarında, oyun teorisi, katılımcıların birbirlerinin davranışlarına göre en iyi stratejileri seçmelerini sağlar. Bu, özellikle Proof of Work ve Proof of Stake gibi konsensüs mekanizmalarında, katılımcıların ağda doğru davranmalarını ve kötü niyetli saldırılara karşı güvenliği sağlamak için kullanılır.",
    extraResource: [
      "https://calebandbrown.com/blog/the-game-theory-of-cryptocurrency/",
      "https://medium.com/@toprakyildiran/oyun-teorisi-blockchainin-temeli-e4308b1a34b4",
    ],
  },
  {
    term: "Game Theoretic Security",
    definition:
      "Game theoretic security, bir blockchain veya kripto para sisteminde, güvenliği sağlamak için oyun teorisi prensiplerinin kullanılmasıdır. Bu, katılımcıların (örneğin, madenciler veya doğrulayıcılar) stratejik kararlar alarak, sistemin güvenliğini ihlal etmeye yönelik riskleri minimize etmek amacıyla optimize edilen davranışlar sergilemelerini sağlar. Oyun teorisi, bu tür sistemlerdeki katılımcıların birbirlerinin hareketlerine göre en iyi stratejileri seçmelerini sağlayarak, güvenliği artırır.",
    extraResource: [
      "https://blockchain.ubc.ca/research-talks/blockchainubc-september-research-talk-rasoul-ramezanian",
      "https://research.itu.edu.tr/tr/publications/novel-game-theoretical-approach-in-blockchain-aided-communication",
    ],
  },
  {
    term: "GameFi",
    definition:
      "GameFi, blockchain teknolojisi kullanarak oyun ve finansı birleştiren bir konsepttir. Bu, oyuncuların oyun oynayarak NFT'ler veya kripto token'lar gibi dijital varlıklar kazandığı, oyun içi başarılarıyla ödüllendirildiği bir sistemdir. GameFi projeleri, oyun oynarken aynı zamanda DeFi (merkeziyetsiz finans) özelliklerini sunarak, oyuncuların kazandıkları varlıkları ticaret yapma veya yatırım için kullanmalarına olanak tanır.",
    extraResource: "https://www.bitlo.com/rehber/gamefi-gafi-nedir",
  },
  {
    term: "Gas",
    definition:
      "Gas, blockchain ağlarında işlemlerin gerçekleştirilmesi için gereken işlem ücretidir. Özellikle Ethereum gibi akıllı sözleşme platformlarında, bir işlem veya akıllı sözleşme çalıştırıldığında, bu işlemi işlemek için gas ödenmesi gerekir. Gas, ağdaki madencilere veya doğrulayıcılara ödeme olarak yapılır ve işlem yoğunluğuna göre değişebilir.",
    extraResource: [
      "https://www.web3labs.com/blockchain-explained-what-are-gas-fees",
      "https://bilgiplatformu.btcturk.com/blokzinciri/ethereum-gas-nedir/",
    ],
  },
  {
    term: "Gas Fee",
    definition:
      "Gas fee, blockchain ağlarında işlemlerin gerçekleştirilmesi için ödenen ücrettir. Özellikle Ethereum gibi platformlarda, işlemlerin doğrulanması ve ağda işlenmesi için gas ücretleri ödenir. Bu ücretler, işlemi gerçekleştiren madencilere veya doğrulayıcılara ödenir ve işlem yoğunluğuna, ağın trafiğine bağlı olarak değişebilir. Gas fee, aynı zamanda bir işlem veya akıllı sözleşmenin ne kadar karmaşık olduğuna göre de artabilir.",
    extraResource: "https://kriptrade.com/sozluk/gas-fee-gas-ucreti-nedir",
  },
  {
    term: "Gas Limit",
    definition:
      "Gas limit, bir blockchain işleminde harcanabilecek maksimum gas miktarını belirleyen sınırdır. Ethereum gibi platformlarda, bir işlem veya akıllı sözleşme çalıştırılırken, gas limit, işlemin gerçekleştirilmesi için gereken maksimum işlem gücünü ifade eder. Eğer işlem için gereken gas miktarı belirlenen limitin üzerinde olursa, işlem gerçekleştirilmez. Gas limit, kullanıcı tarafından ayarlanabilir ve ağdaki işlem yoğunluğuna göre değişebilir.",
    extraResource: [
      "https://masterthecrypto.com/ethereum-what-is-gas-gas-limit-gas-price/",
      "https://shardeum.org/blog/what-is-a-gas-limit/",
    ],
  },
  {
    term: "Gasless Transactions",
    definition:
      "Gasless transactions, blockchain ağlarında işlem ücretinin kullanıcı tarafından ödenmediği, yani gas ücretinin başka bir taraf (genellikle uygulama geliştiricisi veya üçüncü bir hizmet sağlayıcı) tarafından karşılandığı işlemlerdir. Bu tür işlemler, kullanıcıların blockchain işlemlerini daha kolay ve erişilebilir hale getirir, çünkü işlem ücretlerini doğrudan ödemek zorunda kalmazlar. Gasless işlemler, genellikle meta-transactions adı verilen bir teknikle gerçekleştirilir.",
    extraResource: [
      "https://www.alchemy.com/overviews/meta-transactions",
      "https://tonkeeper.com/en/article/how-tonkeeper-brings-gasless",
    ],
  },
  {
    term: "Genesis Block",
    definition:
      "Genesis block, bir blockchain ağındaki ilk bloktur. Bu blok, ağın başlangıcını temsil eder ve genellikle 'blok 0' olarak adlandırılır. Genesis block, ağın protokolünü ve kurallarını belirleyen temel bir yapı taşıdır. Örneğin, Bitcoin'in genesis bloğu, Bitcoin ağının ilk işlem ve ilk madencilik ödülünü içeren bloktur.",
    extraResource: [
      "https://bilgiplatformu.btcturk.com/blokzinciri/genesis-block-nedir/",
      "https://www.investopedia.com/terms/g/genesis-block.asp",
    ],
  },
  {
    term: "Geth",
    definition:
      "Geth (Go Ethereum), Ethereum blockchain ağını çalıştırmak ve etkileşimde bulunmak için kullanılan bir Ethereum istemcisidir. Go dilinde yazılmıştır ve kullanıcıların Ethereum ağına bağlanmasını, işlemleri doğrulamasını, akıllı sözleşmeleri çalıştırmasını ve diğer Ethereum ağ fonksiyonlarını yerine getirmesini sağlar. Geth, hem geliştiriciler hem de madenciler tarafından yaygın olarak kullanılan bir yazılımdır.",
    extraResource: "https://coinmarketcap.com/academy/tr/glossary/geth",
  },
  {
    term: "GitHub",
    definition:
      "GitHub, yazılım geliştirme projelerinin depolandığı ve paylaşıldığı bir platformdur. Blockchain projelerinde, GitHub genellikle açık kaynak kodlarının saklandığı, geliştiricilerin katkı sağladığı ve yazılımın sürümlerinin takip edildiği bir araç olarak kullanılır. Geliştiriciler, blockchain protokollerini ve uygulamalarını GitHub üzerinden geliştirebilir ve diğer kullanıcılarla paylaşabilir.",
    extraResource: [
      "https://akademi.bitlo.com/sozluk/github",
      "https://tr.bitdegree.org/crypto/ogren/kripto-terimleri/github-nedir",
    ],
  },
  {
    term: "Gossip Protocol",
    definition:
      "Gossip protocol, blockchain ağlarında, bilgi veya verilerin node’lar arasında hızlı ve verimli bir şekilde yayılmasını sağlayan bir iletişim yöntemidir. Bu protokolde, her node, aldığı bilgiyi diğer node’lara rastgele ileterek ağda hızla yayılmasını sağlar. Bu, ağın ölçeklenebilirliğini artırır ve ağdaki verilerin hızlı bir şekilde güncellenmesini sağlar. Blockchain'de, blokların ve işlemlerin yayılması için sıklıkla kullanılır.",
    extraResource: [
      "https://akademi.bitlo.com/sozluk/gossip-protocol",
      "https://tr.bitdegree.org/crypto/ogren/kripto-terimleri/gossip-protocol-nedir",
    ],
  },
  {
    term: "Governance",
    definition:
      "Blockchain'de 'governance' (yönetişim), bir ağın nasıl yönetildiği, kararların nasıl alındığı ve değişikliklerin nasıl uygulandığıyla ilgili süreçleri ifade eder. Yönetişim, ağdaki tüm katılımcıların (örneğin, doğrulayıcılar, madenciler veya token sahipleri) protokol güncellemeleri, oy hakları ve diğer kararlar üzerinde nasıl etkiye sahip olduğunu belirler.",
    extraResource:
      "https://tr.cointelegraph.com/news/what-are-governance-tokens-what-is-it-used-for",
  },
  {
    term: "Governance Token",
    definition:
      "Governance token, blockchain ağlarında katılımcılara protokol değişiklikleri ve kararlar üzerinde oy hakkı veren token'lardır. Bu token'lar, kullanıcıların ağın geleceğini şekillendirmelerine olanak tanır.",
    extraResource:
      "https://www.coinbase.com/learn/crypto-basics/what-is-a-governance-token",
  },
  {
    term: "GPU",
    definition:
      "GPU (Graphics Processing Unit), blockchain'de genellikle madencilik (mining) için kullanılan bir donanım türüdür. Özellikle, karmaşık matematiksel problemleri hızlı bir şekilde çözmek için kullanılır ve bu işlem, yeni blokların eklenmesini sağlar. GPU'lar, işlemcilerden (CPU) çok daha verimli çalışır, bu yüzden madencilikte tercih edilir.",
    extraResource: [
      "https://www.ibm.com/think/topics/gpu",
      "https://www.investopedia.com/tech/gpu-cryptocurrency-mining/",
    ],
  },
  {
    term: "GUI",
    definition:
      "Graphical User Interface (GUI), blockchain uygulamalarında kullanıcıların sistemi görsel olarak etkileşimde bulunmasını sağlayan arayüzdür. GUI, teknik bilgi gerektirmeden blockchain ağlarını yönetmeyi ve kullanmayı kolaylaştırır.",
    extraResource:
      "https://coinmuhendisi.com/blog/gui-inu-nedir-nereden-alinir/",
  },
  {
    term: "Gwei",
    definition:
      "Gwei, Ethereum ağında işlem ücretlerini ölçmek için kullanılan bir birimdir. 1 Gwei, 0.000000001 ETH'ye eşittir. Ethereum ağında işlem yaparken, işlem ücretleri genellikle Gwei cinsinden belirlenir. Gwei, küçük işlem ücretlerini daha anlaşılır hale getirmek için kullanılır.",
    extraResource: [
      "https://www.investopedia.com/terms/g/gwei-ethereum.asp",
      "https://explore.m2.com/tr/glossary/gwei",
    ],
  },
  {
    term: "Halving",
    definition:
      "Halving, bir blockchain ağında, genellikle madencilik ödüllerinin yarıya düşürülmesi olayıdır. Bitcoin gibi ağlarda, belirli bir blok sayısına ulaşıldığında madencilerin aldıkları ödüller yarıya iner. Bu, arzı sınırlı tutarak enflasyonu kontrol etmeyi amaçlar.",
    extraResource: [
      "https://tr.euronews.com/2024/04/19/bitcoin-yarilanmasi-halving-nedir-ve-neden-onemli",
      "https://bilgiplatformu.btcturk.com/bitcoin/bitcoin-blok-odulu-nedir/",
    ],
  },
  {
    term: "Hard Fork",
    definition:
      "Hard fork, blockchain ağında yapılan ve eski sürümle uyumsuz olan bir protokol değişikliğidir. Bu değişiklik, ağdaki tüm katılımcıların yeni kurallara uymalarını zorunlu kılar. Hard fork, genellikle ağda yeni özellikler eklemek, hataları düzeltmek veya toplulukla anlaşmazlıkları çözmek amacıyla yapılır. Eski sürümde kalanlar ve yeni sürüme geçenler farklı zincirlerde işlem yapmaya devam ederler.",
    extraResource: [
      "https://tr.cointelegraph.com/learn/articles/what-is-hard-fork",
      "https://coinmarketcap.com/academy/tr/glossary/hard-fork-blockchain",
    ],
  },
  {
    term: "Hardware Wallet",
    definition:
      "Hardware wallet, blockchain varlıklarını (kripto para gibi) güvenli bir şekilde saklamak için kullanılan fiziksel bir cihazdır. Özel anahtarlar bu cihaza kaydedilir ve internetten bağımsız çalışarak çevrimiçi saldırılara karşı daha güvenli olur.",
  },
  {
    term: "Hash",
    definition:
      "Hash, blockchain'de bir veriyi (örneğin, bir bloğu) sabit uzunlukta ve benzersiz bir diziye dönüştüren matematiksel bir işlemdir. Bu işlem, verinin güvenliğini sağlar ve her bloğun içeriğini değiştirilemez hale getirir. Hash, ayrıca işlemlerin doğruluğunu doğrulamak ve blokları birbirine bağlamak için kullanılır.",
    extraResource:
      "https://www.bithero.com/blog/blockchainde-hash-degeri-ve-onemi",
  },
  {
    term: "Hash Collision",
    definition:
      "Hash collision, blockchain'de iki farklı veri girişinin aynı hash değeri üretmesi durumudur. Bu, ideal olarak kaçınılması gereken bir durumdur çünkü hash fonksiyonları her giriş için benzersiz bir çıktı üretmelidir. Hash collision, güvenlik zafiyetlerine yol açabilir, çünkü bu durum, farklı verilerin aynı şekilde işlenmesine neden olabilir. Blockchain’de hash fonksiyonları, çakışmaların olmaması için özel olarak tasarlanır.",
    extraResource:
      "https://www.beyaz.net/tr/guvenlik/makaleler/kriptografik_hash_fonksiyonu_nedir.html",
  },
  {
    term: "Hash Function",
    definition:
      "Hash function, blockchain'de bir veriyi sabit uzunlukta benzersiz bir değere dönüştüren matematiksel bir işlemdir. Bu işlem, verinin güvenliğini sağlar ve verinin değiştiğini tespit etmeye yardımcı olur. Hash fonksiyonları, blokların birbirine bağlanmasında ve işlemlerin doğruluğunun kontrol edilmesinde kullanılır.",
    extraResource: "https://blog.whitebit-tr.com/what-is-a-hash-in-blockchain/",
  },
  {
    term: "Hash Rate",
    definition:
      "Hash rate, blockchain madenciliğinde, bir madencinin saniyede gerçekleştirebildiği hash hesaplama sayısını ifade eder. Yüksek hash rate, daha fazla işlem yapma kapasitesine ve dolayısıyla daha fazla blok çözme ve ödül kazanma şansına işaret eder. Bu oran, ağın güvenliğini de etkiler.",
    extraResource: [
      "https://www.coinbase.com/learn/crypto-glossary/what-is-hash-rate",
      "https://koinly.io/blog/what-is-hashrate/",
    ],
  },
  {
    term: "Hedging",
    definition:
      "Hedging, blockchain ve kripto dünyasında, fiyat dalgalanmalarına karşı riskleri azaltmak amacıyla yapılan bir stratejidir. Yatırımcılar, kripto paraların fiyatlarının düşmesini engellemek veya olası kayıplara karşı koruma sağlamak için türev ürünler veya farklı stratejiler kullanarak pozisyonlarını dengelerler. Bu sayede, piyasa risklerine karşı daha güvenli bir yatırım yapmayı amaçlarlar.",
    extraResource: [
      "https://www.kraken.com/learn/trading/hedging-strategies",
      "https://www.coinbase.com/learn/advanced-trading/hedging",
    ],
  },
  {
    term: "Height",
    definition:
      "Blockchain'de 'height', bir bloğun zincirdeki sırasını ifade eder. Yani, bir bloğun blockchain'deki pozisyonunu belirtir. Örneğin, 0. blok (genellikle Genesis blok olarak adlandırılır) blockchain'in ilk bloğudur, 1. blok ise ilk bloğun hemen ardından gelen bloktur. Bu sıralama, blok zincirindeki her bloğun kaçıncı sırada olduğunu belirler.",
    extraResource: [
      "https://coinguides.org/block-height/",
      "https://www.bithero.com/blog/blok-yuksekligi-block-height-nedir",
    ],
  },
  {
    term: "HODL",
    definition:
      "HODL, 'Hold' kelimesinin yanlış yazımı olarak ortaya çıkan bir terimdir ve blockchain ile kripto dünyasında, yatırımcıların kripto paralarını uzun vadeli tutma stratejisini ifade eder. HODL, fiyat dalgalanmalarına rağmen panik yapmadan, kripto paraları satmadan beklemek anlamına gelir. Bu terim, kripto topluluğu tarafından yatırım yaparken sabırlı olmanın ve uzun vadeli düşünmenin bir simgesi haline gelmiştir.",
    extraResource:
      "https://gedik.com/yazilar/fintech/hodl-ne-demek-kripto-para-dunyasinda-hodl-in-onemi",
  },
  {
    term: "Homomorphic Encryption",
    definition:
      "Homomorphic encryption, blockchain'de verilerin şifreli haldeyken işlem yapılabilmesini sağlayan bir şifreleme tekniğidir. Bu yöntem, verilerin şifreli olarak kalmasını sağlar, böylece veriler çözümlenmeden üzerinde hesaplamalar yapılabilir. Blockchain'de bu, kullanıcıların özel verilerini açıklamadan işlem yapmalarını ve bu verilerin gizliliğini korumalarını sağlar. Özellikle veri güvenliği ve gizlilik gereksinimlerinin yüksek olduğu durumlarda kullanılır.",
    extraResource:
      "https://medium.com/@Elifhilalumucu/veri-gizlili%C4%9Fi-homomorphic-%C5%9Fifreleme-nedir-bf7f25d0ddff",
  },
  {
    term: "Hot Wallet",
    definition:
      "Hot wallet, blockchain ve kripto para dünyasında, internet bağlantısı üzerinden erişilebilen bir cüzdan türüdür. Kullanıcıların kripto paralarına hızlıca erişmesini ve işlemler yapmasını sağlar. Ancak, internet bağlantısı nedeniyle güvenlik riskleri taşır, çünkü hacklenme ihtimali daha yüksektir. Hot wallet'lar genellikle günlük kullanım için tercih edilir.",
    extraResource: [
      "https://www.investopedia.com/terms/h/hot-wallet.asp",
      "https://www.coinbase.com/learn/wallet/hot-vs-cold-crypto-wallet-what-is-the-difference",
    ],
  },
  {
    term: "Hyperchains",
    definition:
      "Hyperchains, blockchain teknolojisinde, birbirine bağlı ve birlikte çalışan birden fazla blockchain ağı anlamına gelir. Bu yapılar, farklı zincirler arasında işlem ve veri paylaşımını mümkün kılarak, ağların ölçeklenebilirliğini artırmayı hedefler. Hyperchains, çapraz zincir etkileşimleri sağlamak için kullanılan bir yöntem olup, genellikle daha hızlı ve verimli işlem yapmayı amaçlar.",
    extraResource: "https://www.btchaber.com/hyperchain-x-hyper-nedir/",
  },
  {
    term: "Hyperledger",
    definition:
      "Hyperledger, açık kaynaklı bir blockchain projesi koleksiyonudur ve özellikle kurumsal çözümler için geliştirilmiştir. Linux Foundation tarafından desteklenen Hyperledger, farklı sektörlerde kullanılabilen güvenli, ölçeklenebilir ve özel blockchain platformları sağlar. Hyperledger projeleri, çeşitli organizasyonlar arasında güvenli veri paylaşımı ve işbirliği yapmayı mümkün kılar.",
    extraResource: "https://bctr.org/hyperledger-nedir-8652/",
  },
  {
    term: "ICO",
    definition:
      "ICO (Initial Coin Offering), bir blockchain projesinin finansman sağlamak için yatırımcılara kripto para veya token sattığı bir yöntemdir. Bu, genellikle yeni bir kripto para birimi veya proje için fon toplamak amacıyla yapılır ve yatırımcılara belirli bir token karşılığında erken erişim sunar.",
    extraResource: [
      "https://www.bitlo.com/rehber/ico-nedir",
      "https://www.coinbase.com/learn/tips-and-tutorials/what-are-initial-coin-offerings-and-how-do-they-work",
    ],
  },
  {
    term: "Immutable",
    definition:
      "Immutable, blockchain'de değiştirilemez veya silinemez anlamına gelir. Bir veri, blockchain'e kaydedildiğinde, bu veri geri alınamaz ve üzerinde değişiklik yapılamaz. Bu özellik, blockchain'in güvenliğini ve şeffaflığını sağlar, çünkü veriler manipüle edilemez ve her işlem kalıcı olarak kaydedilir.",
    extraResource: [
      "https://www.bitlo.com/rehber/immutable-x-imx-nedir",
      "https://rehber.icrypex.com.tr/blog/immutable-nedir/",
    ],
  },
  {
    term: "Indistinguishability Obfuscation (IO)",
    definition:
      "Indistinguishability Obfuscation (IO), blockchain'de bir yazılımın veya algoritmanın işleyişini şifreleyerek gizleyen bir güvenlik yöntemidir. Bu yöntem, bir programın işlevini değiştirmeden, dışarıdan bakıldığında o programın nasıl çalıştığını anlamayı imkansız hale getirir. IO, özellikle verilerin gizliliğini koruyarak, kötü niyetli kişilerin bilgiye erişmesini engellemeye yönelik bir teknik olarak kullanılabilir.",
    extraResource: [
      "https://crypto.stackexchange.com/questions/44770/what-is-indistinguishability-obfuscation",
      "https://medium.com/@laurippeltonen/indistinguishable-obfuscation-wait-what-49ed87a445aa",
    ],
  },
  {
    term: "Inflation",
    definition:
      "Inflation (enflasyon), blockchain'de, bir kripto para biriminin arzının zaman içinde artmasıyla değer kaybetmesi durumudur. Kripto paralarda enflasyon, genellikle yeni coin'lerin madencilik veya staking yoluyla sürekli olarak piyasaya sürülmesiyle gerçekleşir. Bu artış, belirli bir arz sınırlaması olmayan sistemlerde paranın değerini azaltabilir.",
    extraResource:
      "https://www.coinbase.com/learn/crypto-basics/what-is-inflation",
  },
  {
    term: "Infrastructure",
    definition:
      "Blockchain'de 'infrastructure' (altyapı), bir blockchain ağına güç sağlayan tüm teknolojik ve donanımsal bileşenleri ifade eder. Bu, ağın çalışabilmesi için gereken sunucular, yazılımlar, ağ protokolleri, veri depolama çözümleri ve madencilik donanımlarını içerir. Blockchain altyapısı, ağın güvenliğini, hızını ve verimliliğini sağlamak için kritik öneme sahiptir.",
    extraResource: [
      "https://www.coinbase.com/developer-platform/discover/dev-foundations/blockchain-infrastructure",
      "https://medium.com/@cartesi/what-kind-of-infrastructure-does-blockchain-run-on-edca0ff6c5e4",
    ],
  },
  {
    term: "Initial",
    definition:
      "Blockchain'de 'initial', genellikle bir projenin başlangıcını veya ilk aşamasını ifade eder. Örneğin, Initial Coin Offering (ICO), bir blockchain projesinin başlangıcında yatırımcılar için yapılan token satışını belirtir.",
  },
  {
    term: "Input",
    definition:
      "Blockchain'de 'input', bir işlemin kaynağını ifade eder. Örneğin, bir kullanıcı başka bir kullanıcıya kripto para gönderdiğinde, gönderilen miktarın kaynağı olan önceki işlem bir 'input' olarak kabul edilir. Input, işlemi başlatan veri veya kaynak bloktur.",
  },
  {
    term: "Interactive Fraud Proofs",
    definition:
      "Interactive fraud proofs, blockchain'de bir işlem veya veri hatası tespit edildiğinde, hatalı verinin doğruluğunu kanıtlamak için kullanılan bir yöntemdir. Bu teknik, taraflar arasında etkileşimli bir süreçle hatalı veriyi ispatlamayı amaçlar. Genellikle, katılımcılar arasındaki güveni sağlamak ve hatalı veya sahte işlemleri engellemek için kullanılır.",
    extraResource:
      "https://medium.com/offchainlabs/interactive-fraud-proofs-arbitrums-secret-sauce-debc3b019418",
  },
  {
    term: "Internet Communication Protocols (ICP)",
    definition:
      "Internet Communication Protocols (ICP), blockchain ağlarında farklı cihazlar ve sistemler arasında veri iletimini sağlayan kurallardır. Bu protokoller, ağdaki node’ların birbirleriyle iletişim kurmasını, veri alışverişi yapmasını ve işlemleri doğru şekilde senkronize etmesini sağlar. Blockchain'de, ICP'ler ağın güvenli, verimli ve hatasız bir şekilde çalışmasına yardımcı olur.",
  },
  {
    term: "Internet Computer Protocol",
    definition:
      "ICP (Internet Computer Protocol), blockchain tabanlı bir platformdur ve merkeziyetsiz uygulamalar (dApps) ve akıllı sözleşmelerin hızlı ve ölçeklenebilir bir şekilde çalışmasını sağlamak için geliştirilmiştir. ICP, kullanıcıların merkeziyetsiz internet hizmetlerine erişmesini ve bu hizmetlerin blockchain üzerinde çalışmasını mümkün kılar. Bu platform, geleneksel internet altyapısını dönüştürmeyi hedefler.",
    extraResource:
      "https://tr.cointelegraph.com/news/what-is-internet-computer-icp",
  },
  {
    term: "Interoperability",
    definition:
      "Interoperability, farklı blockchain ağlarının birbirleriyle veri ve işlem alışverişi yapabilme yeteneğidir. Bu, bir blockchain'in diğeriyle iletişimde bulunmasını sağlar, böylece farklı ağlar arasında bilgi paylaşımı ve çapraz zincir işlemleri mümkün hale gelir. Interoperability, blockchain ekosisteminin daha verimli ve entegre çalışmasına olanak tanır.",
    extraResource: [
      "https://www.gemini.com/cryptopedia/why-is-interoperability-important-for-blockchain",
      "https://cointelegraph.com/learn/articles/what-is-blockchain-interoperability-a-beginners-guide-to-cross-chain-technology",
    ],
  },
  {
    term: "IPFS",
    definition:
      "IPFS (InterPlanetary File System), blockchain ve merkeziyetsiz internet uygulamaları için kullanılan bir dosya depolama protokolüdür. IPFS, verileri dağıtık bir ağda saklar, böylece veriler merkezi bir sunucuda değil, birçok node’da depolanır. Bu, verilerin güvenli, şeffaf ve daha erişilebilir olmasını sağlar. Blockchain projelerinde, IPFS genellikle büyük veri dosyalarını saklamak ve zincir üzerinde verimli bir şekilde referanslamak için kullanılır.",
    extraResource: [
      "https://www.coinbase.com/learn/crypto-glossary/what-is-the-interplanetary-file-system-ipfs-in-crypto",
      "https://medium.com/@emirhangungormez/ipfs-nedir-1959f2c55869",
    ],
  },
  {
    term: "JavaScript",
    definition:
      "Blockchain'de JavaScript, blockchain uygulamaları geliştirmek için kullanılan bir programlama dilidir. Özellikle, akıllı sözleşmelerin yazılmasında, blockchain istemcilerinin ve arayüzlerinin oluşturulmasında kullanılır. JavaScript, kullanıcı arayüzleri (dApps) ve web tabanlı blockchain uygulamaları oluşturmak için yaygın olarak tercih edilir.",
    extraResource: [
      "https://medium.com/@upadhyayyuvi/developing-blockchain-applications-with-javascript-dca37d18388b",
      "https://tr.bitdegree.org/crypto/ogren/kripto-terimleri/javascript-nedir",
    ],
  },
  {
    term: "Kava Network",
    definition:
      "Kava Network, merkeziyetsiz finans (DeFi) uygulamaları için geliştirilmiş bir blockchain platformudur. Kava, özellikle kripto varlıklar ile teminatlı kredi verme, borçlanma ve diğer finansal işlemler için çözüm sunar. Aynı zamanda, Bitcoin, Ethereum ve diğer blockchain'lerle uyumlu çalışarak, farklı ağlar arasında işlem yapılmasını sağlar. Kava, çok zincirli bir yapı üzerinde çalışarak, DeFi ekosisteminin daha erişilebilir ve verimli olmasına katkı sağlar.",
    extraResource: [
      "https://bilgiplatformu.btcturk.com/kriptopara/kava-kava-nedir-nasil-calisir/",
      "https://coinmuhendisi.com/blog/kava-nedir/",
    ],
  },
  {
    term: "Keccak-256",
    definition:
      "Keccak-256, blockchain’de kullanılan bir hash fonksiyonudur ve özellikle Ethereum gibi ağlarda kullanılır. Veriyi sabit uzunlukta, benzersiz bir hash değerine dönüştürür. Keccak-256, güvenliği yüksek ve şifreleme işlemleri için dayanıklı bir fonksiyon olarak kabul edilir.",
    extraResource: [
      "https://akademi.bitlo.com/sozluk/keccak",
      "https://www.nervos.org/knowledge-base/what_is_keccak256_(explainCKBot)",
    ],
  },
  {
    term: "Key",
    definition:
      "Blockchain'de 'key' (anahtar), bir kullanıcının dijital varlıklarını güvenli bir şekilde erişebilmesi için kullanılan bir şifreleme aracıdır. İki türü vardır: public key (açık anahtar) ve private key (özel anahtar). Açık anahtar, başkalarıyla paylaşılırken, özel anahtar yalnızca sahibinde olur ve dijital imzalar ve işlemler için gereklidir.",
    extraResource: [
      "https://bilgiplatformu.btcturk.com/kripto-okur-yazarlik/private-key-nedir-public-key-nedir/",
      "https://kriptomat.io/tr/blockchain/ozel-anahtar-nedir/",
    ],
  },
  {
    term: "Keyless Wallets",
    definition:
      "Anahtarsız cüzdanlar, kripto para fonlarınıza erişmek için gereken kriptografik anahtarları birden fazla cihaz veya katılımcı arasında dağıtmak için MPC (Çok Taraflı Hesaplama) gücünden yararlanır. Bu katılımcılar, işlemleri imzalamak için birlikte çalışır ve böylece tek bir varlığın cüzdanınıza erişmek için gereken tüm bilgilere sahip olmasını engeller.",
  },
  {
    term: "KYC (Know Your Customer)",
    definition:
      "KYC (Know Your Customer - Müşterini Tanı), finansal kuruluşlar ve kripto para platformlarının, kullanıcılarının kimliğini doğrulamak için uyguladığı bir süreçtir. KYC, kara para aklamayı önleme (AML - Anti-Money Laundering) ve terör finansmanı ile mücadele (CFT - Counter Financing of Terrorism) gibi düzenleyici yasalara uyumluluk sağlamak amacıyla uygulanır.",
    extraResource: "https://notabene.id/crypto-travel-rule-101/kyc-crypto",
  },
  {
    term: "Layer",
    definition:
      "Layer (katman), blockchain ekosisteminde ölçeklenebilirlik, güvenlik ve merkeziyetsizlik arasındaki dengeyi sağlamak için geliştirilen farklı seviyelerdeki çözümleri ifade eder. Blockchain ağları, işlem hızını artırmak, işlem ücretlerini düşürmek ve ağın daha verimli çalışmasını sağlamak için katmanlı bir mimari kullanır.",
    extraResource: "https://www.lcx.com/layers-of-blockchain-explained/",
  },
  {
    term: "Layer 1",
    definition:
      "Layer 1, bir blockchain’in temel katmanıdır ve ağın güvenliği, merkeziyetsizliği ve işlemleri doğrudan blok zincirinde gerçekleştirdiği en alt seviye altyapıdır. Layer 1, tüm işlemleri ve akıllı sözleşmeleri zincir üzerinde işler, konsensüs mekanizmalarını çalıştırır ve yeni blokların eklenmesini sağlar.",
    extraResource: [
      "https://academy.binance.com/en/articles/what-is-layer-1-in-blockchain",
      "https://youtu.be/9sAUPLSPx7E?si=zjJFs4ZmnS6YxlGj",
    ],
  },
  {
    term: "Layer 2",
    definition:
      "Layer 2, Layer 1 blockchain’lerin ölçeklenebilirlik, hız ve işlem maliyetlerini iyileştirmek için geliştirilen ikinci katman çözümleridir. Layer 1 blok zincirlerinin güvenliğini kullanarak, işlemleri zincir dışında (off-chain) veya optimize edilmiş bir biçimde işleten sistemlerdir.",
    extraResource: "https://youtu.be/rj7-sE6H-Hs?si=x0q7l-7KXMh8ZNxA",
  },
  {
    term: "Layer 2 Rollups",
    definition:
      "Layer 2 Rollups, Ethereum gibi Layer 1 blok zincirlerinde işlem hızını artırmak ve gas ücretlerini düşürmek için tasarlanmış Layer 2 ölçeklendirme çözümleridir. Rollup'lar, işlemleri Ethereum’un ana zincirinin dışında işler ancak ana zincire belirli aralıklarla birleştirilmiş veri olarak kaydeder. Bu, Ethereum’un güvenliğini korurken daha hızlı ve düşük maliyetli işlemler yapılmasını sağlar.",
  },
  {
    term: "Layer 3",
    definition:
      "Layer 3 blockchainleri, blockchain teknolojisinin evriminde bir gelişmedir. Merkezi olmayan uygulamalar (DApps) için gelişmiş ölçeklenebilirlik, birlikte çalışabilirlik ve özel işlevsellik sağlamak üzere Layer 1 ve Layer 2 çözümlerinin temelleri üzerine inşa edilirler.",
    extraResource:
      " https://www.coinbase.com/learn/crypto-glossary/what-are-layer-3-blockchains-and-what-is- the-difference-with-layer-2- blockchains#:~:text=Layer%203%20blockchains%20are%20a,for%20decentralized%20applications%20(DApps ).",
  },
  {
    term: "Ledger",
    definition:
      "Ledger (Defter), blockchain’de gerçekleşen tüm işlemlerin kayıt altına alındığı, değiştirilemez ve dağıtılmış bir veri tabanıdır. Bu defter, merkezi bir otoriteye bağlı olmadan, tüm ağ katılımcıları tarafından paylaşılan ve güncellenen bir kayıt sistemidir.",
    extraResource:
      "https://www.geeksforgeeks.org/what-is-ledger-in-cryptocurrency/",
  },
  {
    term: "Lens Protocol",
    definition:
      "Lens Protocol, merkeziyetsiz sosyal medya uygulamaları oluşturmak için geliştirilen Web3 tabanlı bir sosyal grafik protokolüdür. Polygon blockchain üzerinde çalışır ve kullanıcıların sahip olduğu, sansüre dayanıklı, merkeziyetsiz sosyal medya deneyimi sunar.",
    extraResource: "https://members.delphidigital.io/projects/lens-protocol",
  },
  {
    term: "Lido",
    definition:
      "Lido, Ethereum ve diğer Proof of Stake blockchain'ler için likit staking hizmeti sunan merkeziyetsiz bir protokoldür. Kullanıcılar, stake ettikleri varlıkları kilitlemeden ödüller kazanabilir ve aynı zamanda likidite sağlayan tokenler alarak DeFi ekosisteminde kullanabilirler.",
  },
  {
    term: "Lightning Network",
    definition:
      "Lightning Network, Bitcoin (BTC) için ikinci katman bir çözümdür ve mikro ödeme kanallarını kullanarak blok zincirinin ölçeklenebilirliğini artırır, işlemleri daha verimli ve düşük maliyetli hale getirir. Bu teknoloji, zincir dışı işlemleri devreye sokarak Bitcoin ile ilgili ölçeklenebilirlik sorunlarını çözmek için tasarlanmıştır.",
    extraResource: "https://en.wikipedia.org/wiki/Lightning_Network",
  },
  {
    term: "Limit Order",
    definition:
      "Limit order (limit emir), yatırımcının belirlediği bir fiyattan veya daha iyi bir fiyattan alım veya satım yapmak için verdiği emirdir. Kripto para borsalarında piyasa emirlerinden (market order) farklı olarak, işlemin anında gerçekleşmesi yerine, belirlenen fiyat seviyesine ulaşılana kadar bekler.",
    extraResource:
      "https://osl.com/academy/article/what-is-limit-order-in-crypto",
  },
  {
    term: "Liquid Staking",
    definition:
      "Likit staking, kullanıcıların kripto varlıklarını bir blok zinciri ağına kilitleyerek (stake ederek) ödül kazanmalarını ve aynı zamanda bu varlıkları dondurmadan kullanabilmelerini sağlayan bir yöntemdir. Likit staking ile, stake edilen varlıklar karşılığında birebir değerde yeni bir token alınır ve bu token borsalarda alım satım yapılabilir, DeFi platformlarında teminat olarak kullanılabilir veya başka işlemler için değerlendirilebilir.",
    extraResource: "https://coinmarketcap.com/academy/glossary/liquid-staking",
  },
  {
    term: "Liquid Staking Derivatives (LSD)",
    definition:
      "Likit staking türevleri (LSD), kullanıcıların stake ettikleri varlıklar karşılığında aldıkları, alım-satımı yapılabilen veya DeFi ekosisteminde kullanılabilen tokenlerdir. Bu türev tokenler, likit staking platformları tarafından oluşturulur ve stake edilen varlıkların temsilcisi olarak blockchain’de dolaşır.",
    extraResource:
      "https://www.blocmates.com/articles/what-are-liquid-staking-derivatives-a-comparative-overview",
  },
  {
    term: "Liquidity",
    definition:
      "Likidite, kullanıcıların bir kripto parayı borsada başka bir kripto parayla ne kadar kolay takas edebileceğini ifade eder. Merkeziyetsiz bir borsada likidite doğrudan bir likidite havuzunda kilitli olan token miktarıyla ilişkilidir. Eğer bir token yeterli likiditeye sahip değilse, token sahipleri istedikleri zaman varlıklarını satamayabilir.",
    extraResource:
      "https://corporatefinanceinstitute.com/resources/cryptocurrency/liquidity-in-cryptocurrency/",
  },
  {
    term: "Liquidity Farming/ Liquidity Mining",
    definition:
      "Liquidity Farming/Mining (Likidite Madenciliği), kullanıcıların merkeziyetsiz borsalarda (DEX) likidite sağlayarak ödüller kazandığı bir DeFi mekanizmasıdır. Kullanıcılar, kripto paralarını bir likidite havuzuna yatırarak işlem ücretlerinden pay alır ve ek teşvikler (yield farming ödülleri) kazanır.",
  },
  {
    term: "Liquidity Pool",
    definition:
      "Liquidity Pool (Likidite Havuzu), merkeziyetsiz borsalar (DEX) ve DeFi protokollerinde işlemlerin gerçekleşmesi için kullanıcıların sağladığı tokenlerden oluşan bir varlık havuzudur. Bu sistemde alım-satım işlemlerinin gerçekleşmesi için kullanıcılar varlıklarını bir likidite havuzuna yatırır ve karşılığında ödüller kazanır.",
    extraResource: "https://crypto.com/glossary/liquidity-pool",
  },
  {
    term: "Liquidity Providers (LPs)",
    definition:
      "Liquidity Providers (LP), merkeziyetsiz borsalarda (DEX) ve DeFi platformlarında likidite havuzlarına kripto para yatırarak piyasadaki işlem akışını sağlayan kullanıcı veya kurumlara denir. Likidite sağlayıcılar, kripto varlıklarını belirli bir işlem çiftine eşit oranda yatırarak likidite havuzlarını oluşturur ve bunun karşılığında işlem ücretlerinden pay alır ve LP tokenleri kazanır.",
    extraResource: "https://alphapoint.com/blog/crypto-liquidity-provider/",
  },
  {
    term: "Litecoin (LTC)",
    definition:
      "Litecoin (LTC), Bitcoin’in daha hızlı ve düşük maliyetli bir alternatifini oluşturmak amacıyla 2011 yılında geliştirilen açık kaynaklı bir kripto para birimidir. Litecoin, Charlie Lee tarafından geliştirilmiş olup, Bitcoin'in kod tabanına dayanır ancak işlem hızını artırmak ve işlem ücretlerini düşürmek için bazı teknik iyileştirmeler sunar.",
    extraResource: "https://tr.wikipedia.org/wiki/Litecoin",
  },
  {
    term: "Loopring (LRC)",
    definition:
      "Loopring, Ethereum üzerinde çalışan merkeziyetsiz bir Layer 2 protokolüdür ve işlem maliyetlerini düşürerek hızlı ve güvenli işlemler sunan bir merkeziyetsiz borsa (DEX) protokolü sağlar. Loopring, Ethereum’un ölçeklenebilirlik sorunlarını çözmek için ZK-Rollup (Zero-Knowledge Rollups) teknolojisini kullanır ve kullanıcıların düşük gas ücretleri ile hızlı işlem yapmasını mümkün kılar.",
    extraResource: "https://www.bitlo.com/rehber/loopring-lrc-nedir",
  },
  {
    term: "LP Token",
    definition:
      "LP Token (Liquidity Provider Token), merkeziyetsiz borsalarda (DEX) likidite sağlayan kullanıcılara verilen ve onların havuzdaki payını temsil eden tokenlerdir.",
    extraResource:
      "https://academy.binance.com/en/articles/what-are-liquidity-pool-lp-tokens",
  },
  {
    term: "Mainnet",
    definition:
      "Mainnet, bir blockchain ağının tam olarak işlevsel ve bağımsız sürümüdür. Gerçek işlemlerin yapıldığı, tokenlerin gerçek değere sahip olduğu ve kullanıcıların blok zinciri üzerinde etkileşimde bulunduğu ana ağdır. Bir blockchain projesi testnet (deneme ağı) aşamasında geliştirildikten sonra, resmi olarak mainnet (ana ağ) üzerinde çalışmaya başlar.",
    extraResource: "https://academy.binance.com/en/glossary/mainnet",
  },
  {
    term: "MakerDAO",
    definition:
      "MakerDAO, merkeziyetsiz finans (DeFi) ekosisteminde borç verme ve istikrarlı kripto para (stablecoin) yönetimi sağlayan Ethereum tabanlı bir protokoldür. MakerDAO’nun temel amacı, Dai isimli merkeziyetsiz ve teminat destekli bir stablecoin oluşturmak ve yönetmektir. Kullanıcılar, kripto varlıklarını teminat olarak kilitleyerek Dai borç alabilir ve böylece merkeziyetsiz bir şekilde kredi kullanabilir.",
    extraResource:
      "https://corporatefinanceinstitute.com/resources/cryptocurrency/what-is-makerdao-and-dai/",
  },
  {
    term: "Margin Trading",
    definition:
      "Margin trading, merkeziyetsiz finans (DeFi) veya merkezi borsalar (CEX) üzerinde yatırımcıların borsalardan veya likidite havuzlardan borç alarak kaldıraçlı işlem açmasını sağlayan bir ticaret yöntemidir. Bu sistemde trader (yatırımcı), işlemlerini teminat olarak yatırdığı kripto varlıklar üzerinden açar ve kaldıraç kullanarak daha büyük pozisyonlar oluşturabilir.",
    extraResource:
      "https://www.coinbase.com/learn/advanced-trading/what-is-crypto-margin-trading",
  },
  {
    term: "Market",
    definition:
      "Market (Piyasa), blockchain ve kripto para ekosisteminde, dijital varlıkların alınıp satıldığı ortamdır. Kripto piyasası, fiyatların arz ve talebe göre belirlendiği merkezi (CEX) ve merkeziyetsiz (DEX) borsalar, NFT pazaryerleri ve türev platformlardan oluşur.",
    extraResource:
      " https://www.blockchainresearchlab.org/portfolio/crypto- markets/#:~:text=Crypto%20markets%20are%20an%20elemental,be%20emitted%20in%20various%20ways. ",
  },
  {
    term: "Market Capitalisation",
    definition:
      "Market capitalization (veya piyasa değeri), Bitcoin ve diğer kripto paralar için madencilik yoluyla üretilen tüm coinlerin toplam değerini gösterir. Kripto para piyasasında market cap, madencilikle üretilen toplam coin sayısının, belirli bir andaki tek bir coin fiyatıyla çarpılmasıyla hesaplanır.",
    extraResource:
      "https://www.coinbase.com/learn/crypto-basics/what-is-market-cap",
  },
  {
    term: "Market Order",
    definition:
      "Kripto para borsalarında market order (piyasa emri), sipariş defterinde mevcut olan en iyi alım veya satım fiyatıyla eşleşerek işlemi anında gerçekleştiren bir emir türüdür. Bu emir türü, hızlı işlem yapmak isteyen yatırımcılar tarafından tercih edilir ve fiyat üzerinde kontrol sağlanamaz.",
    extraResource:
      "https://osl.com/academy/article/what-is-market-order-in-crypto",
  },
  {
    term: "Maximum Extractable Value (MEV)",
    definition:
      "Maximal Extractable Value (MEV), blok üreticilerinin (doğrulayıcılar veya madenciler) kârlarını en üst düzeye çıkarmak için işlemleri kasıtlı olarak ekleyerek, çıkararak veya sıralamalarını değiştirerek kullandıkları bir stratejidir. MEV, blok ödülleri ve işlem ücretlerine ek olarak bir bloktan ekstra değer çıkardığı için bazen 'görünmez vergi' olarak adlandırılır.",
    extraResource:
      "https://www.ledger.com/academy/glossary/maximal-extractable-value-mev",
  },
  {
    term: "Memecoin",
    definition:
      "Memecoin, genellikle internet kültüründen, viral şakalardan veya popüler sosyal medya trendlerinden ilham alan, eğlence amaçlı üretilmiş kripto paralardır. Bu tokenler, Bitcoin veya Ethereum gibi büyük projelerden farklı olarak, teknolojik bir yenilik sunmak yerine, topluluk desteği ve sosyal medya gücüyle değer kazanır. Çoğu memecoin, spekülatif yatırımcılar tarafından büyük fiyat dalgalanmaları yaşadığı için yüksek riskli varlıklar olarak kabul edilir.",
    extraResource:
      " https://academy.binance.com/en/articles/what-are-meme- coins?utm_campaign=googleadsxacademy&utm_source=googleadwords_int&utm_medium=cpc&ref=WMNC7 PBZ&gad_source=1&gbraid=0AAAAABZJ- KavEJCXEsjaGd6zbjcsQqz9Q&gclid=EAIaIQobChMI0pKKu9i8iwMV55CDBx1M9R2AEAAYASAAEgKV M_D_BwE",
  },
  {
    term: "Mempool",
    definition:
      "Mempool (Memory Pool), blockchain ağlarında onaylanmayı bekleyen işlemlerin geçici olarak depolandığı işlem havuzudur. Bir kullanıcı bir işlem gönderdiğinde, bu işlem hemen blok zincirine eklenmez. Bunun yerine, madenciler (Proof-of-Work) veya doğrulayıcılar (Proof-of-Stake) tarafından işlenene kadar mempool’da bekler.",
    extraResource: "https://www.ledger.com/academy/what-is-a-mempool",
  },
  {
    term: "Merkle Proof",
    definition:
      "Merkle Proof, belirli bir işlemin büyük bir veri kümesi içinde yer aldığını kanıtlamak için kullanılan, Merkle Tree (Merkle Ağacı) yapısına dayanan bir doğrulama yöntemidir. Bu sistem, blockchain ağlarında verileri güvenli ve verimli bir şekilde doğrulamak için kullanılır. Özellikle Bitcoin, Ethereum ve diğer blockchain sistemlerinde işlemlerin bütünlüğünü ve değiştirilemezliğini garanti etmek için kullanılır.",
    extraResource: "https://www.webopedia.com/definitions/merkle-proof/",
  },
  {
    term: "Merkle Tree",
    definition:
      "Merkle Tree (Merkle Ağacı), büyük veri kümelerini güvenli ve verimli bir şekilde organize etmek için kullanılan bir kriptografik veri yapısıdır. Blockchain ağlarında, işlemlerin bütünlüğünü ve değiştirilemezliğini garanti etmek için Merkle Tree kullanılır. Özellikle Bitcoin, Ethereum ve diğer akıllı sözleşme platformlarında işlemlerin hash’lenerek hiyerarşik bir yapı oluşturduğu bir doğrulama mekanizmasıdır.",
    extraResource:
      " https://www.investopedia.com/terms/m/merkle- tree.asp#:~:text=Merkle%20trees%20are%20a%20structured,the%20root%20at%20the%20top.",
  },
  {
    term: "Metamask",
    definition:
      "MetaMask, kullanıcıların Ethereum ve Ethereum tabanlı ağlar ile etkileşime geçmesini sağlayan merkeziyetsiz bir kripto cüzdanıdır. MetaMask, Ethereum blockchain’inde kripto para saklamak, merkeziyetsiz uygulamalara bağlanmak ve token transferleri yapmak için kullanılır.",
    extraResource: "https://coinmarketcap.com/academy/article/what-is-metamask",
  },
  {
    term: "Metaverse",
    definition:
      "Metaverse, sanal ve artırılmış gerçeklik teknolojilerini blockchain ile birleştirerek, insanların dijital dünyada etkileşim kurmasına, varlık sahiplenmesine ve ticaret yapmasına olanak tanıyan merkeziyetsiz bir dijital evrendir. Bu kavram, NFT’ler (benzersiz dijital varlıklar), DeFi (merkeziyetsiz finans), oyun içi ekonomiler ve sanal gerçeklik (VR) gibi teknolojilerle birleşerek yeni bir dijital ekonomi oluşturur.",
    extraResource: "https://hedera.com/learning/metaverse/metaverse-crypto",
  },
  {
    term: "MEV Searchers",
    definition:
      "MEV Searchers, blockchain ağlarındaki işlemleri analiz eden, mempool’da kârlı fırsatları tespit eden ve bu işlemlerden maksimum kazanç elde etmeye çalışan bağımsız aktörlerdir. MEV searchers (MEV arayıcıları), akıllı kontratlar, arbitraj fırsatları ve likidasyon mekanizmalarını analiz ederek MEV işlemleri gerçekleştirir.",
  },
  {
    term: "Miner",
    definition:
      "Miner (Madenci), blockchain ağlarında işlem doğrulama ve blok üretme sürecini gerçekleştiren katılımcıdır. Madenciler, kripto para ağlarının güvenliğini sağlar ve yeni blokların oluşturulmasına yardımcı olur. Bu süreçte karmaşık matematiksel problemleri çözerler ve karşılığında blok ödülleri ve işlem ücretleri kazanırlar.",
  },
  {
    term: "Mining",
    definition:
      "Mining (Madencilik), blockchain ağlarında yeni bloklar oluşturmak, işlemleri doğrulamak ve ağı güvenli hale getirmek için kullanılan süreçtir. Madencilik, özellikle Proof of Work konsensüs mekanizmasına sahip blockchain ağlarında kullanılır. Madenciler, karmaşık matematiksel problemleri çözüp blok ekleyerek ödüller kazanır.",
    extraResource: "https://www.britannica.com/money/what-is-crypto-mining",
  },
  {
    term: "Mining Difficulty",
    definition:
      "Mining Difficulty (Madencilik Zorluğu), blockchain ağında yeni bir blok oluşturmak için gereken hesaplama gücünün seviyesini belirleyen bir parametredir. Madencilik zorluğu, blockchain ağının güvenliğini ve blok üretim süresinin dengeli kalmasını sağlamak için otomatik olarak ayarlanır.",
    extraResource: "https://youtu.be/o1gOyhU6XEw?si=iK3CJTYHlFKnt024",
  },
  {
    term: "Mining Pool",
    definition:
      "Mining Pool (Madencilik Havuzu), bireysel madencilerin hesaplama güçlerini birleştirerek blok bulma şanslarını artırdıkları ve kazançlarını daha istikrarlı hale getirdikleri bir sistemdir. Madencilik havuzları, bireysel madencilerin rekabet etmesini zorlaştıran yüksek madencilik zorluğuna karşı çözüm olarak ortaya çıkmıştır.",
    extraResource: "https://www.investopedia.com/terms/m/mining-pool.asp",
  },
  {
    term: "Mint",
    definition:
      "Minting, yeni bir kripto varlığın veya token’in blockchain üzerinde oluşturulması ve dolaşıma sokulması işlemidir. Mint işlemi, kripto para birimlerinin, NFT’lerin veya merkeziyetsiz finans protokollerindeki tokenlerin üretilmesini kapsar. Bu süreç, bir akıllı sözleşme (smart contract) tarafından yönetilir ve yeni varlıkların blok zincirine eklenmesini sağlar.",
  },
  {
    term: "Mirror Protocol",
    definition:
      "Mirror Protocol, gerçek dünya varlıklarının blockchain üzerinde tokenize edilmesini sağlayan bir DeFi (Merkeziyetsiz Finans) protokolüdür. Mirror Protocol, hisse senetleri, emtialar veya diğer finansal varlıkların 'sanal versiyonlarını' (synths veya mirrored assets - mAssets) oluşturarak kullanıcıların merkeziyetsiz bir şekilde ticaret yapmasına olanak tanır. Bu sistem, gerçek varlıkları fiziksel olarak satın almak zorunda kalmadan, fiyatlarını blockchain üzerinde takip edebilmeyi sağlar.",
  },
  {
    term: "MIT License",
    definition:
      "MIT License, özgür ve açık kaynaklı yazılım lisanslarından biridir ve geliştiricilere yazılımı serbestçe kullanma, değiştirme, dağıtma ve ticari olarak kullanma hakkı tanır. Bu lisans, özellikle blockchain projeleri, DeFi uygulamaları ve kripto cüzdanları gibi açık kaynaklı yazılımlarda yaygın olarak kullanılır.",
  },
  {
    term: "Mixer",
    definition:
      "Mixer’ler, kullanıcıların kripto varlıklarını karıştırarak işlemlerinin izlenmesini zorlaştırmak ve gizliliği arttırmak için kullanılan bir blockchain hizmetidir. Bu hizmetler, özellikle Bitcoin (BTC) ve Ethereum (ETH) gibi blockchain ağlarında işlem geçmişini anonim hale getirmek için kullanılır.",
    extraResource:
      "https://www.ledger.com/academy/topics/blockchain/what-is-a-bitcoin-mixer",
  },
  {
    term: "Modular Blockchains",
    definition:
      "Modular blockchain, blockchain ağının farklı bileşenlerini (konsensüs, yürütme, veri kullanılabilirliği, yerleşim) ayrı katmanlara ayırarak daha verimli, ölçeklenebilir ve esnek bir yapı sunan yeni nesil blockchain modelidir. Geleneksel blockchain sistemleri monolithic (tek parça) blockchain olarak çalışırken, modular blockchain’ler farklı işlemleri ayrı katmanlarda yürüterek ölçeklenebilirlik ve esneklik sağlar.",
    extraResource:
      "https://academy.binance.com/en/articles/what-are-modular-blockchains",
  },
  {
    term: "Monero (XMR)",
    definition:
      "Monero (XMR), kullanıcı gizliliğini ve anonimliği ön planda tutan merkeziyetsiz bir kripto para birimidir. Monero, Bitcoin ve diğer halka açık blockchain ağlarının aksine, işlemleri tamamen gizli ve takip edilemez şekilde gerçekleştirmek için geliştirilmiştir. Bu özellikleri sayesinde gizlilik odaklı blockchain projeleri arasında en popüler ve en güvenli olanlardan biridir.",
    extraResource: "https://www.getmonero.org/tr/resources/about/",
  },
  {
    term: "MPC Wallet",
    definition:
      "Multi-Party Computation Wallet (Çok Taraflı Hesaplama Cüzdanı), özel anahtarın (private key) hiçbir zaman tek bir noktada tutulmadığı bir kripto para cüzdanı türüdür. MPC teknolojisi, özel anahtarın tek bir cihazda saklanması yerine, farklı parçalara bölünerek birden fazla taraf (cihaz, sunucu veya kullanıcı) arasında dağıtılmasını sağlar. Bu sayede cüzdanın güvenliği artırılır ve özel anahtarın çalınma riski en aza indirilir.",
    extraResource: "https://www.fireblocks.com/what-is-mpc/",
  },
  {
    term: "Multi-Signature",
    definition:
      "Multi-Signature (Çoklu İmza), bir kripto para cüzdanında veya akıllı sözleşmede işlemlerin gerçekleştirilmesi için birden fazla imzanın (yetkilendirmenin) gerektiği bir güvenlik mekanizmasıdır. Multi-sig cüzdanlar, bireysel kullanıcılar, şirketler ve DAO’lar (merkeziyetsiz otonom organizasyonlar) gibi grupların fonları yönetmesini ve ekstra güvenlik sağlamasını mümkün kılar. Bu sistem, tek bir özel anahtarın ele geçirilmesi durumunda fonların çalınmasını önler.",
    extraResource: "https://en.bitcoin.it/wiki/Multi-signature",
  },
  {
    term: "Multi-Signature Management",
    definition:
      "Multi-Signature Management (Çoklu İmza Yönetimi), birden fazla kişinin veya tarafın bir cüzdan veya akıllı sözleşme üzerinde işlem yapabilmesi için gereken çoklu imza (multi-sig) yetkilendirme sürecini ifade eder. Bu yönetim mekanizması, kurumsal şirketler, DAO’lar (merkeziyetsiz otonom organizasyonlar), kripto yatırım fonları ve güvenliği artırmak isteyen bireysel kullanıcılar tarafından kullanılır. Multi-signature yönetimi, belirli yetkilendirme kurallarına göre işlemlerin onaylanmasını sağlar ve özel anahtar kaybı, hack saldırıları veya dolandırıcılık gibi riskleri minimize eder.",
  },
  {
    term: "Multi-Sig Transactions",
    definition:
      "Multisig Transactions (Çoklu İmza İşlemleri), bir blockchain işlemine onay vermek için birden fazla özel anahtarın (private key) gerekli olduğu işlemlerdir. Multisig (multi-signature) işlemleri, standart tek imzalı işlemlerden farklı olarak, belirli bir sayıda kullanıcının onayını gerektirir. Bu mekanizma, şirketler, DAO'lar (Merkeziyetsiz Otonom Organizasyonlar), yatırım fonları ve yüksek güvenlik gerektiren cüzdanlar için kullanılır.",
  },
  {
    term: "Multi-Signature Wallets",
    definition:
      "Multisignature Wallet (Çoklu İmza Cüzdanı), bir blockchain işleminin onaylanması için birden fazla özel anahtarın (private key) gerekli olduğu güvenli bir kripto para cüzdanıdır. Bu cüzdanlar, birden fazla kişi veya cihaz tarafından kontrol edilen fonlar için ek güvenlik sağlar. Özellikle şirketler, DAO’lar (merkeziyetsiz otonom organizasyonlar), yatırım fonları ve güvenliği ön planda tutan bireyler için kullanılır.",
    extraResource:
      "https://www.investopedia.com/multi-signature-wallets-definition-5271193",
  },
  {
    term: "Nakamoto Consensus",
    definition:
      "Nakamoto Consensus, Bitcoin ve diğer Proof of Work (PoW) tabanlı blockchain ağlarında kullanılan, madencilerin işlemleri doğrulamasını ve ağı güvenli hale getirmesini sağlayan merkeziyetsiz bir mutabakat mekanizmasıdır. Bu mekanizma, Bitcoin’in yaratıcısı Satoshi Nakamoto tarafından 2008’de Bitcoin Whitepaper'ında tanıtılmıştır. PoW algoritması ile çalışır ve madencilerin karmaşık matematiksel problemleri çözerek blok üretmesini gerektirir.",
    extraResource: "https://youtu.be/LllYm964z2I?si=Yjphj_g2WQOCe8P1",
  },
  {
    term: "NEAR Protocol",
    definition:
      "NEAR Protocol, merkeziyetsiz uygulamaları ölçeklenebilir, hızlı ve düşük maliyetli şekilde çalıştırmak için tasarlanmış bir Layer 1 blockchain platformudur. NEAR, Ethereum'a benzer şekilde akıllı sözleşmeleri destekler, ancak daha hızlı işlem süreleri ve düşük gas ücretleri sunar. Özellikle sharding (parçalama) teknolojisi sayesinde ölçeklenebilirliği artırarak yüksek işlem kapasitesine sahiptir. Web3 uygulamalarını daha verimli hale getirmek için geliştirilmiş ölçeklenebilir, hızlı ve kullanıcı dostu bir blockchain ağıdır.",
    extraResource: [
      "https://pages.near.org/papers/the-official-near-white-paper/",
      "https://youtu.be/aS_zb5Je4NI?si=LiILGDZg4V4CIRDd",
    ],
  },
  {
    term: "Network Sharding",
    definition:
      "Network Sharding, blockchain ağını daha ölçeklenebilir hale getirmek için ağı farklı parçalara (shards) bölerek işlemlerin paralel olarak yürütülmesini sağlayan bir ölçeklendirme tekniğidir. Bu yöntem, blockchain’in tüm ağı tek bir zincirde çalıştırmak yerine, işlemleri daha küçük ve yönetilebilir parçalara bölerek hızlandırmasını sağlar.",
    extraResource:
      "https://www.rootstrap.com/blog/what-is-sharding-and-how-is-it-helping-blockchain-protocols",
  },
  {
    term: "Nick Szabo",
    definition:
      "Nick Szabo, akıllı sözleşmeler (smart contracts) kavramını geliştiren ve Bitcoin’in öncülerinden biri olarak kabul edilen bir bilgisayar bilimcisi, hukukçu ve kriptografi uzmanıdır. Szabo, 1990’ların sonlarında 'akıllı sözleşme' terimini ilk kez kullanmış ve 2000’lerin başında Bitcoin’e benzeyen Bit Gold adlı merkeziyetsiz dijital para fikrini önermiştir. Bazı teorilere göre, Nick Szabo, Bitcoin’in anonim yaratıcısı Satoshi Nakamoto olabilir.",
    extraResource: "https://www.brickken.com/en/post/blog-nick-szabo",
  },
  {
    term: "Node",
    definition:
      "Node, bir blockchain ağının bir parçası olan ve ağın işleyişine katkıda bulunan bir bilgisayar veya cihazdır. Node'lar, blockchain ağında işlemleri doğrulayan, blokları saklayan ve ağın güvenliğini sağlayan merkeziyetsiz bileşenlerdir. Her node, blockchain’in bir kopyasını saklayabilir ve ağdaki diğer node’lara iletişim kurarak işlemleri doğrular.",
    extraResource: "https://youtu.be/6AwfOJCZmVU?si=pw_Eu65oqm_4hYGY",
  },
  {
    term: "Non-Custodial Wallets",
    definition:
      "Non-Custodial Wallet (Gözetimsiz Cüzdan), kullanıcının özel anahtarlarını (private key) tamamen kontrol ettiği, herhangi bir üçüncü tarafa bağımlı olmayan bir kripto para cüzdanıdır. Bu cüzdanlar, kripto varlıkların güvenliğini tamamen kullanıcıya bırakır ve merkezi bir otorite (borsa, banka vb.) tarafından yönetilmez. Non-custodial cüzdanlar sayesinde kullanıcılar, fonlarını kontrol edebilir, işlemlerini doğrudan blockchain üzerinde gerçekleştirebilir ve üçüncü tarafların erişimini engelleyebilir.",
  },
  {
    term: "Non-Fungible",
    definition:
      "Non-Fungible, bir varlığın benzersiz olduğunu ve başka bir varlıkla birebir değiştirilemeyeceğini ifade eden bir blockchain terimidir. Blockchain teknolojisinde, Non-Fungible Token (NFT) olarak bilinen varlıklar, benzersiz dijital öğeleri temsil eder. Her NFT, blockchain üzerinde kayıtlıdır ve kendine özgü bir kimliğe (Token ID) sahiptir.",
  },
  {
    term: "NFT (Non-Fungible Token)",
    definition:
      "NFT, bir varlığın sahipliğini ve benzersizliğini blockchain üzerinde kayıt altına alan dijital bir varlıktır. NFT’ler, sanat eserleri, müzik, oyun içi varlıklar, koleksiyon ürünleri ve sanal gayrimenkuller gibi dijital öğelerin sahipliğini doğrulamak için kullanılır. Her NFT, benzersiz bir kimlik numarasına (token ID) sahiptir ve başka bir NFT ile birebir değiştirilemez.",
    extraResource: "https://tr.wikipedia.org/wiki/NFT",
  },
  {
    term: "Non-Fungible Token Standards",
    definition:
      "Non-Fungible Token (NFT) standartları, blockchain ağlarında benzersiz ve değiştirilemez dijital varlıkları yönetmek için kullanılan akıllı sözleşme protokolleridir. Bu standartlar, NFT’lerin oluşturulmasını, transfer edilmesini, meta verilerinin saklanmasını ve diğer akıllı sözleşmelerle nasıl etkileşime gireceğini belirler. Her blockchain ağı, NFT’ler için farklı standartlar sunabilir ancak en yaygın kullanılanları Ethereum ve Solana (SPL) tabanlıdır.",
  },
  {
    term: "Nonce",
    definition:
      "Nonce (Number Used Once), blockchain ağlarında yalnızca bir kez kullanılan rastgele veya artan bir sayıdır. Nonce, madencilik süreçlerinde ve blockchain işlemlerinde güvenliği sağlamak için kullanılır. Kriptografi ve blockchain dünyasında iki temel kullanım alanı vardır. 1) Proof of Work (PoW) madenciliğinde nonce, madencilerin hash bulmacalarını çözmek için değiştirdiği sayıdır. 2) Blockchain işlemlerinde nonce, her kullanıcının işlemlerini benzersiz hale getiren artan bir sayıdır.",
  },
  {
    term: "On-Chain Governance",
    definition:
      "On-Chain Governance, blockchain ağlarının yönetim kararlarını doğrudan zincir (on-chain) üzerinde, akıllı sözleşmeler ve token sahipleri aracılığıyla aldığı merkeziyetsiz bir yönetim modelidir. Bu sistemde, blockchain protokolünde yapılacak değişiklikler veya güncellemeler, topluluk tarafından oylama yoluyla belirlenir ve sonuçlar otomatik olarak uygulanır.",
    extraResource:
      "https://www.investopedia.com/terms/o/onchain-governance.asp",
  },
  {
    term: "On-Chain Identity Proofs",
    definition:
      "On-Chain Identity Proofs, bir kullanıcının kimliğini blockchain üzerinde güvenli, merkeziyetsiz ve değiştirilemez bir şekilde doğrulayan sistemlerdir. Bu sistemler, kimlik bilgilerini doğrulamak için blockchain tabanlı akıllı sözleşmeleri ve kriptografik kanıtları kullanır. Kullanıcılar, KYC (Know Your Customer), DAO üyelikleri, DeFi erişimi veya diğer Web3 hizmetleri için kimliklerini blockchain üzerinde kanıtlayabilirler.",
  },
  {
    term: "On-Chain Randomness",
    definition:
      "On-Chain Randomness, blockchain ağlarında rastgelelik üretmek için kullanılan, güvenli, doğrulanabilir ve merkeziyetsiz bir sistemdir. Bu sistem, akıllı sözleşmelerin rastgele sonuçlar üretmesini sağlar ve özellikle NFT’ler, oyunlar, DeFi protokolleri ve güvenlik sistemleri için gereklidir. Rastgelelik üretmek, blockchain gibi deterministik sistemlerde (önceden tahmin edilebilir ağlarda) zorlu bir süreçtir.",
  },
  {
    term: "On-Chain Voting",
    definition:
      "On-Chain Voting, blockchain üzerinde gerçekleşen, akıllı sözleşmeler tarafından yürütülen merkeziyetsiz ve şeffaf bir oylama sistemidir. Bu sistemde, token sahipleri veya belirli bir topluluk, yönetim kararlarını blockchain üzerinde doğrudan oy kullanarak belirler. On-chain voting, DAO’lar (Merkeziyetsiz Otonom Organizasyonlar), DeFi protokolleri ve blockchain ağlarının yönetimi için kullanılır.",
  },
  {
    term: "On-Ledger Coin",
    definition:
      "On-Ledger Coin, bir blockchain ağının yerel kripto para birimidir ve doğrudan o blockchain’in ana defterinde (ledger) işlem görür. Bu tür kripto paralar, o blockchain’in güvenliğini sağlamak, işlemleri doğrulamak, akıllı sözleşmeleri çalıştırmak ve ağ içindeki ekonomik mekanizmayı yönetmek için kullanılır. Bitcoin (BTC), Ethereum (ETH) ve Solana (SOL) gibi kripto paralar on-ledger coin kategorisine girer.",
  },
  {
    term: "OP_CODE",
    definition:
      "OP_CODE (Operation Code), blockchain ağlarında işlem ve akıllı sözleşmelerin yürütülmesini sağlayan makine dilindeki komutlardır. Bu kodlar, blockchain ağında işlemleri doğrulamak, veri işlemek ve akıllı sözleşmeleri çalıştırmak için kullanılır. Özellikle Bitcoin ve Ethereum gibi blockchain'lerde OP_CODE'lar, işlemleri güvenli bir şekilde yürütmek için sanal makineler (VM) tarafından çalıştırılır.",
    extraResource:
      " https://academy.bit2me.com/en/what-is-an-op- code/#:~:text=An%20OP_CODE%20or%20Operation%20Code,nodes%20of%20a%20blockchain%20network.",
  },
  {
    term: "Open Source",
    definition:
      "Açık kaynak, bir yazılımın kaynak kodunun herkesin erişimine açık olduğu, isteyenlerin bu kodu inceleyip değiştirebildiği ve dağıtabildiği bir geliştirme modelidir. Bu yaklaşım, şeffaflık, iş birliği ve yeniliği teşvik eder. Blockchain teknolojisi, genellikle açık kaynaklı yazılımlar üzerine inşa edilir. Bu sayede, geliştiriciler ve kuruluşlar, blockchain ağlarının güvenliğini, güvenilirliğini ve işlevselliğini artırmak için birlikte çalışabilirler. Örneğin, Bitcoin ve Ethereum gibi popüler blockchain platformları açık kaynaklıdır ve bu sayede dünya çapındaki geliştiricilerin katkılarıyla sürekli olarak gelişmektedir.",
  },
  {
    term: "OpenZeppelin",
    definition:
      "OpenZeppelin, blockchain uygulamalarının güvenliğini sağlamak amacıyla geliştirilen açık kaynaklı bir platformdur. Özellikle Ethereum ve diğer EVM uyumlu blokzincirleri için güvenli akıllı sözleşmeler oluşturmayı kolaylaştıran bir dizi araç ve kütüphane sunar.",
    extraResource:
      "https://developers.moralis.com/what-is-openzeppelin-the-ultimate-guide/",
  },
  {
    term: "Optimistic Rollups",
    definition:
      "Optimistic Rollups, blockchain ağlarının ölçeklenebilirliğini artırmak için geliştirilen Layer-2 çözümleridir. Bu teknoloji, işlemleri ana zincir dışında gerçekleştirerek ağın işlem kapasitesini ve hızını artırır. 'Optimistic' (iyimser) terimi, işlemlerin varsayılan olarak geçerli kabul edilmesi ve yalnızca bir hata veya hile tespiti durumunda müdahale edilmesi yaklaşımından gelir.",
  },
  {
    term: "Oracle",
    definition:
      "Oracle, blok zinciri teknolojisinde, zincir dışındaki (off-chain) verileri zincir içine (on-chain) taşıyan bir aracı sistemdir. Blok zincirleri doğası gereği dış dünyadaki verilere doğrudan erişemezler. Bu nedenle, akıllı sözleşmelerin dış dünyadan veri almasını sağlamak için oracle'lar kullanılır.",
    extraResource:
      "https://cointelegraph.com/learn/articles/what-is-a-blockchain-oracle-and-how-does-it-work",
  },
  {
    term: "Oracle Price Feeds",
    definition:
      "Oracle Price Feeds, blok zincirinde çalışan akıllı sözleşmelere güvenilir ve güncel fiyat verilerini sağlayan bir tür oracle hizmetidir. Bu sistemler, farklı borsalardan, likidite havuzlarından ve diğer finansal kaynaklardan gelen fiyat verilerini toplar, doğrular ve merkeziyetsiz bir şekilde blok zincirine aktarır.",
  },
  {
    term: "Order Book",
    definition:
      "Order Book (Emir Defteri), bir borsa veya ticaret platformunda belirli bir kripto varlık için verilen alım (bid) ve satım (ask) emirlerinin gerçek zamanlı olarak listelendiği bir defterdir. Blok zinciri ekosisteminde hem merkezi (CEX) hem de merkeziyetsiz (DEX) borsalarda emirleri organize etmek için kullanılır.",
  },
  {
    term: "Ordinals",
    definition:
      "Bitcoin Ordinals, sanat veya medya gibi içeriklerin bireysel satoshiler (Bitcoin’in en küçük birimi) üzerine yazılmasıyla oluşturulan dijital koleksiyonlardır. Her yazılmış satoshi benzersizdir ve bir non-fungible token (NFT) gibi sahiplenilebilir, toplanabilir ve ticareti yapılabilir.",
    extraResource: "https://youtu.be/OszL_Q2wvNQ?si=smSyfOV-EnF2oo_W",
  },
  {
    term: "Orphan Block",
    definition:
      "Orphan Block, bir blok zincirinde geçici olarak madenciler tarafından doğrulanan ancak ana zincire eklenmeyen bloklara verilen isimdir. Blok zincirinde, madenciler aynı anda birden fazla blok oluşturabilir. Ancak, yalnızca bir blok zincire eklenebilir ve en uzun (veya en yüksek iş kanıtına sahip) zincir tercih edilir. Diğer bloklar orphan block (yetim blok) olarak kalır ve geçersiz olur.",
    extraResource: "https://www.nadcab.com/blog/orphan-block-in-blockchain",
  },
  {
    term: "OTC (Over-The-Counter)",
    definition:
      "Over-the-Counter (OTC), merkezi borsalar (CEX) veya merkeziyetsiz borsalar (DEX) dışında yapılan doğrudan alım-satım işlemleridir. Kripto para piyasasında, büyük yatırımcılar (balinalar, kurumsal yatırımcılar) veya özel alıcılar, fiyatları etkilememek için OTC piyasalarını kullanır.",
  },
  {
    term: "Overcollateralized Stablecoins",
    definition:
      "Overcollateralized stablecoins (Aşırı Teminatlandırılmış Stabilcoinler), teminat olarak verilen varlıkların değerinin, çıkarılan stabilcoin miktarından daha yüksek olduğu stabilcoinlerdir. Bu model, teminatın değerindeki dalgalanmalara karşı ekstra güvenlik sağlar ve özellikle merkeziyetsiz finans ekosisteminde yaygın olarak kullanılır.",
    extraResource:
      "https://trondao.org/blog/2022/08/09/tron-101-what-is-an-over-collateralized-stablecoin/",
  },
  {
    term: "PancakeSwap",
    definition:
      "PancakeSwap, Binance Smart Chain (BNB Chain) üzerinde çalışan merkeziyetsiz bir kripto para borsasıdır. Kullanıcılar, herhangi bir aracıya ihtiyaç duymadan kripto paralarını takas edebilir (swap) ve likidite sağlayarak ödüller kazanabilir. Ayrıca, CAKE token kazanmak için farming ve staking gibi DeFi hizmetleri sunar. PancakeSwap, geleneksel borsalar gibi alıcı ve satıcıları eşleştirmek yerine, likidite havuzlarını kullanarak işlemleri otomatik olarak gerçekleştirir.",
  },
  {
    term: "Peer-To-Peer",
    definition:
      "Peer-to-Peer (P2P), merkezi bir otoriteye ihtiyaç duymadan, kullanıcıların doğrudan birbirleriyle işlem yapabildiği bir sistemdir. Blockchain ve kripto para dünyasında, P2P işlemler, kullanıcıların bankalar veya borsalar gibi aracı kurumlar olmadan doğrudan alım-satım yapmalarını sağlar.",
  },
  {
    term: "Permissioned Blockchains",
    definition:
      "Permissioned Blockchain, yalnızca belirli kullanıcıların ağa katılmasına ve işlemleri doğrulamasına izin veren, izinli bir blok zinciri türüdür. Kimin ağa katılabileceği ve hangi işlemleri yapabileceği merkezi bir otorite veya konsorsiyum tarafından kontrol edilir. Bu sistem, özel (private) ve konsorsiyum (consortium) blockchain ağlarında yaygın olarak kullanılır ve kurumsal kullanım için uygundur.",
  },
  {
    term: "Permissioned Ledger",
    definition:
      "Permissioned Ledger (İzinli Defter), yalnızca belirli ve yetkilendirilmiş katılımcıların erişebildiği, veri ekleyebildiği veya doğrulayabildiği bir dağıtık defter (DLT - Distributed Ledger Technology) sistemidir. Bir merkezi otorite veya konsorsiyum tarafından yönetilir ve kontrol edilir. Bu tür defterler genellikle kurumsal ve özel uygulamalarda kullanılır ve Bitcoin, Ethereum gibi herkese açık (permissionless) blockchain’lerden farklıdır.",
    extraResource: "https://www.wallstreetmojo.com/permissioned-blockchain/",
  },
  {
    term: "Perpetual Protocol (PERP)",
    definition:
      "Perpetual Protocol (PERP), kullanıcıların vadeli işlem ticareti yapmasını sağlayan merkeziyetsiz bir türev borsasıdır. Ethereum ve Arbitrum gibi blok zincirlerinde çalışır ve perpetual (süresiz) vadeli işlemleri destekler. Piyasada vadeli işlemler genellikle belirli bir sona erme süresiyle gelirken, Perpetual Protocol’de işlemler süresiz olarak açık kalabilir. Bu model, geleneksel vadeli işlemlerden farklı olarak finansman oranı mekanizmasıyla çalışır.",
    extraResource: "https://weareblox.com/en-eu/perpetual-protocol",
  },
  {
    term: "Phishing",
    definition:
      "Phishing (Oltalama saldırısı), kötü niyetli kişilerin kullanıcıları kandırarak özel anahtarlarını, cüzdan bilgilerini veya giriş şifrelerini ele geçirmeye çalıştığı bir siber saldırı türüdür. Blockchain ve kripto dünyasında phishing saldırıları genellikle sahte web siteleri, e-postalar veya sosyal mühendislik yöntemleriyle gerçekleştirilir.",
    extraResource:
      "https://cointelegraph.com/learn/articles/what-is-a-phishing-attack-in-crypto-and-how-to-prevent-it",
  },
  {
    term: "Phrase",
    definition:
      "Phrase (Seed Phrase), bir kripto para cüzdanındaki özel anahtarları temsil eden bir güvenlik anahtarıdır. Genellikle 12, 18 veya 24 rastgele kelimeden oluşur ve cüzdanınızı kurtarmak, geri yüklemek veya başka bir cihaza taşımak için kullanılır. Bu kelimeler, BIP-39 (Bitcoin Improvement Proposal 39) standardına göre oluşturulur ve cüzdanın tüm adreslerini ve özel anahtarlarını şifreli bir şekilde saklar.",
    extraResource: "https://youtu.be/lOiVGTuh7dE?si=BZCbUlER6fJ85Bd1",
  },
  {
    term: "Pinata",
    definition:
      "Pinata, geliştiricilerin ve kullanıcıların IPFS (InterPlanetary File System) üzerinde NFT’ler, dosyalar ve diğer blockchain tabanlı içerikleri saklamasını sağlayan merkeziyetsiz bir depolama platformudur. Pinata, özellikle NFT projeleri, Web3 uygulamaları ve merkeziyetsiz içerik yönetimi için kullanılır. Geleneksel bulut hizmetleri (Google Drive, AWS) yerine merkeziyetsiz bir depolama çözümü sunar.",
    extraResource: "https://youtu.be/29k2C1JXyg4",
  },
  {
    term: "Pizza Day",
    definition:
      "Bitcoin Pizza Günü, 22 Mayıs 2010'da Bitcoin ile yapılan ilk gerçek dünya alışverişinin gerçekleştiği günü anmak için kutlanan bir gündür. Bu olay, bir bilgisayar programcısı olan Laszlo Hanyecz’in 10,000 BTC karşılığında 2 pizza satın almasıyla gerçekleşti. O dönemde Bitcoin'in fiyatı neredeyse sıfıra yakındı ve bu işlem, Bitcoin'in ilk gerçek ticari kullanımı olarak tarihe geçti.",
  },
  {
    term: "Plasma Chains",
    definition:
      "Plasma Chains, Ethereum ve diğer blok zincirleri için bir Layer-2 ölçeklendirme çözümüdür. Ethereum’un işlem hızını ve ölçeklenebilirliğini artırmak amacıyla geliştirilmiştir ve işlemleri ana zincir dışında işleyerek ağ tıkanıklığını azaltır. Plasma, Ethereum’un kurucularından Vitalik Buterin ve Joseph Poon tarafından 2017’de önerilmiş bir ölçeklendirme çözümüdür ve Yan Zincirler (Sidechains) mantığıyla çalışır.",
    extraResource: "https://ethereum.org/en/developers/docs/scaling/plasma/",
  },
  {
    term: "Plasma State Channels",
    definition:
      "Plasma State Channels, Ethereum ve diğer blok zincirleri için geliştirilen bir Layer-2 ölçeklendirme çözümüdür. Plasma mimarisi ile State Channels (Durum Kanalları) yaklaşımını birleştirerek daha hızlı ve düşük maliyetli işlemler sunmayı hedefler. Bu model, zincir dışı işlemleri kullanarak, Ethereum ana zincirine daha az yük bindirir ve ölçeklenebilirliği artırır.",
  },
  {
    term: "Play2Earn",
    definition:
      "Play-to-Earn (P2E), oyuncuların blockchain tabanlı oyunlarda görevleri tamamlayarak, varlıklarını geliştirerek veya rekabetçi mekaniklere katılarak, NFT veya kripto para cinsinden ödüller kazandığı merkeziyetsiz bir oyun modelidir. Bu sistem, GameFi (Gaming + DeFi) ekosisteminin bir parçası olarak, tokenizasyon, akıllı sözleşmeler ve NFT sahipliği gibi blockchain teknolojileriyle desteklenir.",
    extraResource:
      " https://www.coinbase.com/learn/your-crypto/what-is-play-to- earn#:~:text=Play2Earn%20is%20a%20blockchain%2Dbased,tokens%20(NFTs)%20and%20cryptocurrencies.",
  },
  {
    term: "Plonky2",
    definition:
      "Plonky2, Ethereum ve diğer blockchain ağlarını daha hızlı ve daha ucuz hale getirmek için geliştirilmiş bir sıfır bilgi kanıtı (ZK-Proof) teknolojisidir. Bu teknoloji, ZK-Rollups ve Layer-2 ölçeklendirme çözümleri için kullanılır. Polygon tarafından geliştirilmiştir ve blockchain üzerindeki işlemleri hızlandırırken, işlem ücretlerini düşürmeyi hedefler.",
    extraResource: "https://polygon.technology/blog/introducing-plonky2",
  },
  {
    term: "Polka Dots (DOT)",
    definition:
      "Polkadot (DOT), farklı blockchain ağlarını birbirine bağlayan, birlikte çalışabilirlik ve ölçeklenebilirlik sağlayan bir Layer-0 protokolüdür. Polkadot, parachain (yan zincir) teknolojisi ile farklı blok zincirlerinin güvenli bir şekilde veri ve varlık transferi yapmasını sağlar.",
  },
  {
    term: "Polygon (MATIC)",
    definition:
      "Polygon (eski adıyla Matic Network), Ethereum blockchain'ini daha hızlı, ölçeklenebilir ve düşük maliyetli hale getirmek için geliştirilen bir Layer-2 ölçeklendirme platformudur. Polygon, Ethereum’un güvenliğini kullanarak işlem hızlarını artırır ve gas ücretlerini düşürür. Bu sayede DeFi, NFT ve Web3 uygulamaları için daha verimli bir ortam sunar.",
  },
  {
    term: "Portfolio",
    definition:
      "Portfolio (Portföy), bir yatırımcının sahip olduğu kripto para varlıklarının toplamını ifade eden bir finansal terimdir. Kripto ekosisteminde portföy, yatırımcının farklı blockchain ağlarında ve platformlarda tuttuğu kripto paralar, tokenler, NFT’ler ve diğer dijital varlıkları kapsar.",
  },
  {
    term: "Post-Quantum Cryptography (PQC)",
    definition:
      "Kuantum bilgisayarların mevcut şifreleme algoritmalarını kırabileceği varsayımına dayanan kriptografik algoritmaların geliştirilmesi için bir çözümdür. Bu cihazlar gelecekte yaygınlaşırsa şifreleme yöntemleri artık yeterli olmayacak ve yeni yöntem geliştirilmesi gerekecek. PQC, bu ihtiyacı karşılamak için çalışmaktadır. PQC, iki ana kategoriye ayrılmaktadır: Simetrik ve Asimetrik şifreleme yöntemleri.",
    extraResource: [
      "https://www.paloaltonetworks.com/cyberpedia/what-is-post-quantum-cryptography-pqc",
      "https://www.techtarget.com/searchsecurity/definition/post-quantum-cryptography",
    ],
  },
  {
    term: "Privacy-Preserving Technologies",
    definition:
      "Kullanıcı verilerini korumaya ve gizliliği sağlamaya yönelik geliştirilen teknolojilerdir. Anonimlik, şifreleme ve veri minimizasyonu gibi yöntemler kullanarak kişisel bilgilerin ifşa edilmesini önler. Örnekler arasında sıfır bilgi ispatları (ZKP), homomorfik şifreleme ve farklılaştırılmış gizlilik bulunur.",
    extraResource: [
      "https://www.appsflyer.com/glossary/privacy-preserving-technologies/",
      "https://www.kaspersky.com.tr/blog/mozilla-privacy-preserving-attribution-explained/12665/",
    ],
  },
  {
    term: "Private Key",
    definition:
      "Kriptografik sistemlerde, özellikle blockchain ve dijital imza teknolojilerinde kullanılan, yalnızca sahibinin erişimine açık olan gizli anahtardır. İşlemleri imzalamak, dijital varlıklara erişmek ve kimlik doğrulamak için kullanılır. Kayıp veya çalınması durumunda ilgili varlıklara erişim tamamen kaybedilebilir.",
    extraResource:
      "https://bilgiplatformu.btcturk.com/kripto-okur-yazarlik/private-key-nedir-public-key-nedir/",
  },
  {
    term: "Private Smart Contracts",
    definition:
      "İşlem verilerini ve sözleşme mantığını yalnızca yetkilendirilmiş tarafların görebileceği şekilde çalıştıran akıllı sözleşmelerdir. Mahremiyet odaklı blockchain çözümlerinde kullanılır ve şifreleme, sıfır bilgi ispatları (ZKP) veya güvenilir yürütme ortamları (TEE) gibi teknolojilerle desteklenir.",
    extraResource: "https://tr.tradingview.com/news/coinotag:e93bdb41ed9e8:0/",
  },
  {
    term: "Programmable Cryptography",
    definition:
      "Kullanıcıların belirli kurallar ve koşullara göre özelleştirilmiş kriptografik işlemler gerçekleştirmesine olanak tanıyan bir teknolojidir. Akıllı sözleşmeler, sıfır bilgi ispatları (ZKP) ve şifreleme şemaları gibi güvenlik protokollerinde esneklik sağlar.",
    extraResource:
      " https://hackernoon.com/lang/tr/Gelecekteki-programlanabilir-kriptografinin- %C5%9Fifresini-%C3%A7%C3%B6zmek-ve-modern-teknolojideki-rol%C3%BCn%C3%BC- %C3%A7%C3%B6zmek",
  },
  {
    term: "Proof of Authority (PoA)",
    definition:
      "Blockchain ağlarında işlemleri doğrulamak ve yeni bloklar eklemek için güvenilir ve yetkilendirilmiş doğrulayıcıların kimliklerine dayanan bir konsensüs mekanizmasıdır. Düşük enerji tüketimi ve yüksek işlem hızı sunarken, merkeziyetçilik riski taşır. Genellikle özel ve kurumsal blockchain ağlarında kullanılır.",
    extraResource:
      "https://bilgiplatformu.btcturk.com/blokzinciri/proof-of-authority-nedir/",
  },
  {
    term: "Proof of Burn (PoB)",
    definition:
      "Katılımcıların belirli bir miktar kripto parayı geri alınamayacak şekilde yakarak (ağa göndererek) madencilik veya doğrulama hakkı kazandığı bir konsensüs mekanizmasıdır. Kaynak israfını azaltarak sürdürülebilirliği artırırken, ağ güvenliğini sağlamak için ekonomik bir teşvik oluşturur.",
    extraResource:
      "https://bilgiplatformu.btcturk.com/blokzinciri/proof-of-burn-nedir/",
  },
  {
    term: "Proof of Reserve (PoR)",
    definition:
      "Bir finansal kuruluşun veya kripto para platformunun, elinde tuttuğu varlıkları şeffaf bir şekilde kanıtlamasını sağlayan bir doğrulama mekanizmasıdır. Genellikle bağımsız denetimler veya kriptografik yöntemler kullanılarak gerçekleştirilir ve müşteri fonlarının eksiksiz olarak saklandığını göstermek için kullanılır.",
    extraResource: "https://crypto.com/tr/university/proof-of-reserves",
  },
  {
    term: "Proof of Stake (PoS)",
    definition:
      "Blockchain ağlarında işlemleri doğrulamak ve yeni bloklar eklemek için kullanıcıların belirli miktarda kripto varlığı teminat olarak kilitlemesine dayanan bir konsensüs mekanizmasıdır. Enerji verimli olup, doğrulayıcılar sahip oldukları varlık oranına göre seçilir.",
    extraResource:
      "https://bilgiplatformu.btcturk.com/blokzinciri/proof-of-stake-hisse-kaniti-nedir-nasil-calisir/",
  },
  {
    term: "Proof of Work (PoW)",
    definition:
      "Blockchain ağlarında işlemleri doğrulamak ve yeni bloklar eklemek için madencilerin karmaşık matematiksel problemleri çözmesini gerektiren bir konsensüs mekanizmasıdır. Yüksek güvenlik sağlar ancak enerji tüketimi fazladır. Bitcoin ve bazı diğer kripto para birimlerinde kullanılır.",
    extraResource: [
      "https://tr.tradingview.com/news/coinotag:ff30f27e9d9e8:0/",
      "https://bilgiplatformu.btcturk.com/blokzinciri/proof-of-work-is-kaniti-nedir-nasil-calisir/",
    ],
  },
  {
    term: "Proof of Capacity (PoC)",
    definition:
      "Blockchain ağlarında işlemleri doğrulamak ve yeni bloklar eklemek için madencilerin depolama alanlarını kullanmasına dayanan bir konsensüs mekanizmasıdır. Daha fazla depolama alanı ayıran kullanıcıların blok oluşturma şansı artar. Enerji verimli bir alternatif olarak geliştirilmiştir.",
    extraResource:
      "https://sarusapp.com/research/education/proof-of-capacity-kapasite-ispati-nedir",
  },
  {
    term: "Proof of Execution (PoE)",
    definition:
      "Bir işlemin veya akıllı sözleşmenin belirlenen kurallar çerçevesinde doğru şekilde çalıştırıldığını ve sonuçlandırıldığını kanıtlayan bir doğrulama mekanizmasıdır. Genellikle güvenilir yürütme ortamları (TEE) veya kriptografik yöntemler kullanılarak uygulanır.",
    extraResource:
      " https://www.bircom.com/blogs/blog/poe-nedir-ve-poe-kullanmanin-avantajlari-nelerdir#:~:text=PoE%20(Power%20Over%20Ethernet)%20a%C4%9F,%C3%A7al%C4%B1%C5%9Fmas%C4%B1%20i%C3%A7in%20bir%20g%C3%BC%C3%A7%20ba%C4%9Flant%C4%B1s%C4 %B1.",
  },
  {
    term: "Proof of History (PoH)",
    definition:
      "Blockchain ağlarında işlemlerin zaman damgalı ve sıralı olarak kaydedildiğini kanıtlayan bir konsensüs mekanizmasıdır. İşlem sırasını önceden belirleyerek ağın verimliliğini artırır ve yüksek hız sağlar. Solana blockchain tarafından kullanılır.",
    extraResource:
      "https://digicentralized.com/proof-of-history-tarih-kaniti-nedir-nasil-calisir/",
  },
  {
    term: "Proposal",
    definition:
      "Blockchain ağlarında, protokol güncellemeleri, yönetişim değişiklikleri veya yeni özelliklerin eklenmesi için topluluğa sunulan öneridir. Genellikle oylama mekanizmalarıyla değerlendirilir ve kabul edilirse uygulanır.",
    extraResource: "https://bilgiplatformu.btcturk.com/bitcoin/bip-nedir/",
  },
  {
    term: "Protocol (Protokol)",
    definition:
      "Blockchain ağlarında veri aktarımı, konsensüs mekanizmaları ve güvenlik kurallarını belirleyen sistem kuralları ve standartlar bütünüdür. Ağın işleyişini ve katılımcılar arasındaki etkileşimi düzenler.",
  },
  {
    term: "Public Blockchain",
    definition:
      "Herkesin katılım sağlayabildiği, işlem doğrulayabildiği ve ağ üzerinde tam erişime sahip olduğu merkeziyetsiz blockchain ağıdır. Şeffaflık ve güvenlik ön plandadır. Bitcoin ve Ethereum gibi ağlar bu kategoriye girer.",
    extraResource:
      " https://www.bithero.com/blog/public-blockchain-acik-blok-zinciri- nedir#:~:text=Public%20blockchain%2C%20di%C4%9Fer%20bir%20ad%C4%B1yla,t%C3%BCm%20i%C5%9Flemler%20anonim%20olarak%20ger%C3%A7ekle%C5%9Ftirilebilir",
  },
  {
    term: "Public Key",
    definition:
      "Kriptografik sistemlerde, özellikle blockchain ve dijital imza teknolojilerinde kullanılan, herkesle paylaşılabilen anahtardır. Özel anahtar ile eşleşerek veri şifreleme, doğrulama ve işlemlerin güvenliğini sağlamak için kullanılır.",
    extraResource:
      "https://bilgiplatformu.btcturk.com/kripto-okur-yazarlik/private-key-nedir-public-key-nedir/",
  },
  {
    term: "Public Key Cryptography",
    definition:
      "Şifreleme ve doğrulama işlemlerinde açık ve özel anahtar çiftleri kullanan kriptografik sistemdir. Açık anahtar herkesle paylaşılabilirken, özel anahtar gizli tutulur. Dijital imza, veri şifreleme ve güvenli iletişim için kullanılır.",
    extraResource: "https://digicentralized.com/acik-anahtar-sifreleme-nedir/",
  },
  {
    term: "Public Key Infrastructure (PKI)",
    definition:
      "Dijital sertifikalar, açık ve özel anahtarlar ile güvenli iletişimi sağlayan kriptografik sistemdir. Kimlik doğrulama, veri bütünlüğü ve şifreleme işlemleri için kullanılır. Sertifika otoriteleri (CA) tarafından yönetilir.",
    extraResource:
      " https://medium.com/@gokhansengun/pki-nedir-ve-nas%C4%B1l- %C3%A7al%C4%B1%C5%9F%C4%B1r-6f71db7a609e",
  },
  {
    term: "Pump",
    definition:
      "Kripto para piyasasında, bir varlığın fiyatını yapay olarak hızlı bir şekilde artırma sürecidir. Genellikle koordineli alımlar yoluyla gerçekleştirilir ve spekülatif kazanç elde etmeyi amaçlar.",
  },
  {
    term: "Pump and Dump",
    definition:
      "Kripto para ve hisse senedi piyasalarında, bir varlığın fiyatını yapay olarak yükseltip (pump) ardından yüksek fiyattan satıp ani bir düşüşe neden olma (dump) üzerine kurulu manipülatif bir stratejidir. Genellikle küçük yatırımcıları zarar ettiren spekülatif bir taktiktir.",
    extraResource:
      "https://www.ledger.com/tr/academy/what-is-a-pump-and-dump-in-crypto",
  },
  {
    term: "Quantum-proof",
    definition:
      "Kuantum bilgisayarların kırmasına karşı dirençli olacak şekilde tasarlanmış kriptografik algoritmalar ve güvenlik sistemleridir. Mevcut şifreleme yöntemlerine alternatif olarak geliştirilir ve post-kuantum kriptografi alanında önemli bir rol oynar.",
    extraResource:
      "https://kuantumturkiye.org/kuantum-sonrasi-kriptografi-nedir/",
  },
  {
    term: "Real World Assets (RWA)",
    definition:
      "Blockchain üzerinde tokenize edilen ve temsil edilen fiziksel veya finansal varlıklardır. Gayrimenkuller, emtialar, tahviller ve sanat eserleri gibi varlıkları dijital olarak transfer edilebilir ve parçalanabilir hale getirmeyi amaçlar.",
    extraResource:
      "https://bilgiplatformu.btcturk.com/blokzinciri/gercek-dunya-varliklari-real-world-asset- veya-rwa-nedir/#:~:text=Real%20world%20assets%20kelimelerinin%20k%C4%B1saltmas%C4%B1,d%C3%BCnya%20varl%C4%B1klar%C4%B1n%C4%B1n%20tokenizasyonunu%20ifade%20eder .",
  },
  {
    term: "Record High",
    definition:
      "Bir finansal varlığın veya piyasanın tarihindeki en yüksek fiyat seviyesine ulaşması durumudur. Genellikle güçlü alım baskısı ve olumlu piyasa koşullarıyla ilişkilendirilir.",
  },
  {
    term: "Recursive ZK-Proofs",
    definition:
      "Bir sıfır bilgi kanıtının (ZK-Proof), başka bir kanıt içinde doğrulanmasını sağlayan kriptografik bir tekniktir. Bu yöntem, çok sayıda işlemi tek bir kanıtta birleştirerek hesaplama yükünü azaltır ve blockchain ölçeklenebilirliğini artırır. Özyinelemeli sıfır bilgi kanıtları, özellikle layer-2 çözümleri, blok zincirlerinin işlem verimliliğini artırma, gizliliği koruma ve çoklu kanıtları tek bir doğrulama adımında birleştirme gibi alanlarda kullanılır. ZK-Rollups gibi teknolojilerde etkin bir şekilde uygulanarak işlem sürelerini kısaltır ve zincir üzerindeki veri yükünü azaltır.",
    extraResource:
      "https://scryptplatform.medium.com/recursive-zero-knowledge-proofs-27f2d934f953",
  },
  {
    term: "Regenerative Finance (ReFi)",
    definition:
      "Çevresel ve sosyal sürdürülebilirliği teşvik eden finansal sistemler ve blockchain tabanlı çözümlerdir. Karbon kredileri, doğal varlıkların tokenleştirilmesi ve etik yatırım modelleri gibi uygulamalar içerir.",
    extraResource:
      "https://medium.com/turansert/onar%C4%B1c%C4%B1-finans-regenerative-finance-refi-3654135a019a",
  },
  {
    term: "Rekt",
    definition:
      "Kripto para ve finans piyasalarında, büyük zarar eden veya iflas eden yatırımcıları tanımlayan argo bir terimdir. Genellikle yüksek riskli işlemler veya piyasa çöküşleri sonucunda kullanılır.",
    extraResource: "https://akademi.bitlo.com/sozluk/rekt",
  },
  {
    term: "Restaking",
    definition:
      "Halihazırda stake edilmiş varlıkların, ek güvenlik veya doğrulama görevleri için yeniden kullanılmasıdır. Blockchain ağlarında güvenliği artırmak ve ek ödüller kazanmak için uygulanır. EigenLayer gibi platformlar tarafından desteklenir.",
    extraResource:
      "https://crypto.com/tr/university/what-is-restaking-eigenlayer",
  },
  {
    term: "Return on Investment (ROI)",
    definition:
      "Yapılan bir yatırımın kârlılığını ölçen finansal orandır. Yatırımdan elde edilen kârın, başlangıç maliyetine oranlanmasıyla hesaplanır ve genellikle yüzde olarak ifade edilir.",
    extraResource: "https://www.avansas.com/blog/roi-nedir-nasil-hesaplanir",
  },
  {
    term: "Reward",
    definition:
      "Blockchain ağlarında, madenciler, doğrulayıcılar veya katılımcılar tarafından gerçekleştirilen işlemler veya katkılar karşılığında verilen teşviktir. Genellikle yeni basılan tokenler veya işlem ücretleri şeklinde dağıtılır.",
  },
  {
    term: "Ring Signature",
    definition:
      "Bir grup kullanıcının ortak bir dijital imza oluşturduğu, ancak imzayı kimin attığının belirlenemediği kriptografik bir yöntemdir. Anonimlik ve gizliliği artırmak için kullanılır. Monero gibi gizlilik odaklı kripto paralar tarafından tercih edilir.",
    extraResource:
      "https://akademi.bitlo.com/sozluk/ring-signature-cember-imza",
  },
  {
    term: "Ripple",
    definition:
      "Küresel ödeme ve para transferi sistemleri için geliştirilen blockchain tabanlı bir ağ ve dijital varlıktır. XRP tokeni ile hızlı ve düşük maliyetli sınır ötesi işlemleri destekler. Merkeziyetsiz defter teknolojisi (DLT) kullanır ve finansal kurumlar tarafından benimsenmiştir.",
    extraResource: "https://www.bitlo.com/rehber/ripple-nedir",
  },
  {
    term: "Rollup Bridges",
    definition:
      "Farklı blockchain ağları arasında varlık ve veri transferini sağlayan köprülerdir. Rollup çözümlerini ana ağlarla entegre ederek ölçeklenebilirlik ve birlikte çalışabilirliği artırır. ZK-Rollups ve Optimistic Rollups gibi katman-2 teknolojileriyle kullanılır.",
    extraResource:
      "https://medium.com/@CHARANKO/rollup-%C3%A7ali%C5%9Fma-mekani%CC%87zmasi-ve-%C3%A7e%C5%9Fi%CC%87tleri%CC%87-adb89a1780a6",
  },
  {
    term: "Rollup Decentralization",
    definition:
      "Rollup çözümlerinin, ağ güvenliğini ve sansür direncini artırmak için merkezi olmayan doğrulayıcılar ve operatörler tarafından yönetilmesi sürecidir. Veri kullanılabilirliği, sıralayıcı yapıları ve doğrulama mekanizmalarının dağıtık hale getirilmesiyle sağlanır.",
    extraResource:
      "https://taiko.mirror.xyz/sxR3iKyD-GvTuyI9moCg4_ggDI4E4CqnvhdwRq5yL0A",
  },
  {
    term: "Rollup Governance",
    definition:
      "Rollup ağlarının işleyiş kurallarını, güncellemelerini ve karar alma süreçlerini belirleyen yönetişim mekanizmasıdır. Protokol değişiklikleri, sıralayıcı seçimleri ve ücret politikaları gibi konularda topluluk veya belirlenmiş paydaşlar tarafından yönetilir.",
  },
  {
    term: "Rollup-Centric Future",
    definition:
      "Blockchain ölçeklenebilirliğini artırmak için ana katmanın güvenliğini kullanarak işlemleri rollup çözümleriyle gerçekleştiren bir yapıdır. Ethereum gibi ağlar, işlem yükünü rolluplara aktararak düşük maliyetli ve hızlı işlem gerçekleştirmeyi hedefler.",
    extraResource: "https://www.youtube.com/watch?v=rPjfBXhhuGo",
  },
  {
    term: "Rollups",
    definition:
      "Blockchain ağlarının ölçeklenebilirliğini artırmak için işlemleri zincir dışında (off-chain) işleyip, doğrulama verilerini ana zincire gönderen layer-2 çözümleridir. Daha düşük maliyet ve daha hızlı işlem onayı sağlar. ZK-Rollups ve Optimistic Rollups olmak üzere iki ana türü vardır.",
    extraResource:
      "https://muhabbit.com/rollup-nedir-optimistic-ve-zk-rolluplar-nasil-calisiyor/",
  },
  {
    term: "RPC (Remote Procedure Call)",
    definition:
      "Bir programın, ağ üzerinden başka bir bilgisayarda veya sunucuda çalışan bir işlemi sanki yerel olarak çalıştırıyormuş gibi çağırmasını sağlayan protokoldür. Blockchain ağlarında, node’larla etkileşim kurmak ve veri almak için kullanılır.",
    extraResource:
      "https://medium.com/turkiye-rust-community/rpc-nedir-ve-protokolleri-nelerdir-7db03994d3d0",
  },
  {
    term: "Rug Pull",
    definition:
      "Geliştiricilerin veya proje sahiplerinin, bir kripto para veya DeFi projesine yatırım çektikten sonra likiditeyi çekerek veya projeyi terk ederek yatırımcıları zarara uğrattığı dolandırıcılık türüdür. Genellikle merkeziyetsiz borsalarda (DEX) ve yeni çıkan token projelerinde görülür.",
    extraResource:
      "https://tr.tradingview.com/news/cointelegraph:9946ba8d1d9e8:0/",
  },
  {
    term: "Rune Protocol",
    definition:
      "Bitcoin ağında yerel varlık ihraç etmeyi ve yönetmeyi sağlayan bir protokoldür. Bitcoin’in güvenliğini ve değişmezliğini kullanarak, token oluşturma ve transfer işlemlerini gerçekleştirmeye odaklanır.",
  },
  {
    term: "Runes Protocol",
    definition:
      "Bitcoin ağı üzerinde verimli ve ölçeklenebilir şekilde token oluşturmayı sağlayan bir protokoldür. Bitcoin’in UTXO modeliyle çalışarak işlem maliyetlerini optimize eder ve Ordinals ekosistemine alternatif olarak geliştirilmiştir.",
    extraResource:
      " https://bilgiplatformu.btcturk.com/bitcoin/runes-protocol- nedir/#:~:text=Runes%20Protocol%2C%20Bitcoin%20blokzinciri%20%C3%BCzerinde,altcoinlerin%2C%20Bitcoin%20versiyonlar%C4%B1%20olarak%20g%C3%B6r%C3%BClebilir",
  },
  {
    term: "Rust",
    definition:
      "Hız, bellek güvenliği ve eşzamanlılık odaklı, sistem programlamaya yönelik bir programlama dilidir. Özellikle blockchain geliştirme, oyun motorları ve düşük seviyeli sistem yazılımlarında kullanılır. Ethereum’un geliştirme araçlarından biri olan Substrate ile entegredir.",
    extraResource:
      "https://medium.com/@AtesBagcabasi/rustta-blockchain-sim%C3%BClasyonu-18365ea23b25",
  },
  {
    term: "Satoshi",
    definition:
      "Bitcoin’in en küçük birimi olup, 1 Bitcoin’in 100 milyon’da 1’ine eşittir.",
    extraResource:
      "https://bilgiplatformu.btcturk.com/bitcoin/satoshi-sat-nedir/",
  },
  {
    term: "Satoshi Nakamoto",
    definition:
      "Bitcoin’i ve onun temelini oluşturan blockchain teknolojisini geliştiren, kimliği bilinmeyen kişi veya grup. 2008’de Bitcoin teknik dokümanını (whitepaper) yayımlamış ve 2009’da Bitcoin ağını başlatmıştır.",
    extraResource: "https://tr.wikipedia.org/wiki/Satoshi_Nakamoto",
  },
  {
    term: "Scalability",
    definition:
      "Bir blockchain ağının artan işlem hacmini verimli ve hızlı bir şekilde işleyebilme kapasitesidir. Daha düşük işlem maliyetleri ve daha yüksek hız sağlamak için layer-2 çözümleri, sharding ve rollup teknolojileri gibi yöntemler kullanılır.",
    extraResource: "https://crypto.com/tr/university/blockchain-scalability",
  },
  {
    term: "Securities and Exchange Commission (SEC)",
    definition:
      "Amerika Birleşik Devletleri'nde menkul kıymet piyasalarını düzenleyen ve denetleyen federal kurumdur. Yatırımcıları korumak, piyasa bütünlüğünü sağlamak ve dolandırıcılığı önlemek amacıyla faaliyet gösterir. Kripto paralar ve blockchain projeleri üzerinde de düzenleyici rol oynar.",
    extraResource:
      "https://akademi.bitlo.com/sozluk/securities-and-exchange-commission-sec",
  },
  {
    term: "Secure Hash Algorithm (SHA)",
    definition:
      "Veriyi sabit uzunlukta bir özet (hash) halinde dönüştüren kriptografik algoritma ailesidir. SHA-1, SHA-2 ve SHA-3 gibi farklı sürümleri vardır. Blockchain, dijital imza ve veri bütünlüğü doğrulama işlemlerinde yaygın olarak kullanılır.",
    extraResource:
      "https://www.encryptionconsulting.com/education-center/what-is-sha/",
  },
  {
    term: "Secure Multi-Party Computation (sMPC)",
    definition:
      "Birden fazla tarafın, özel verilerini ifşa etmeden ortak bir hesaplama yapmasına olanak tanıyan kriptografik tekniktir. Veri gizliliğini koruyarak güvenli işlem yürütmeyi sağlar ve blockchain, finans ve veri analitiği gibi alanlarda kullanılır.",
    extraResource:
      "https://en.wikipedia.org/wiki/Secure_multi-party_computation",
  },
  {
    term: "Seed Node",
    definition:
      "Yeni bağlanan node’ların, blockchain ağındaki diğer node’ları bulmasına ve ağa katılmasına yardımcı olan özel bir node. Ağın dağıtık yapısını korumak ve senkronizasyonu sağlamak için kullanılır.",
    extraResource: "https://academy.bit2me.com/en/what-is-a-seed-node/",
  },
  {
    term: "Seed Phrase",
    definition:
      "Kripto cüzdanlarının yedeklenmesi ve kurtarılması için kullanılan, genellikle 12, 18 veya 24 kelimeden oluşan gizli kelime dizisidir. Özel anahtarı oluşturur ve kaybedilmesi durumunda cüzdan erişimini geri kazanmak için kullanılır. Güvende tutulması kritik öneme sahiptir.",
    extraResource:
      " https://www.ledger.com/tr/academy/glossary/seed-phrase#:~:text=%E2%80%9CSeed%20Phrase%E2%80%9D%20nedir%3F,kullan%C4%B1c%C4%B1%20c%C3%BCzdan%C4%B1n%C4%B1%20ilk%20kurdu%C4%9Funda%20olu%C5%9Fturulur",
  },
  {
    term: "Segregated Witness (SegWit)",
    definition:
      "Bitcoin ve bazı blockchain ağlarında işlem verimliliğini artırmak için imza (tanık) verilerini işlem gövdesinden ayıran protokol yükseltmesidir. Blok boyutunu etkili bir şekilde genişleterek işlem hızını artırır ve güvenliği iyileştirir.",
    extraResource:
      "https://bilgiplatformu.btcturk.com/blokzinciri/segwit-nedir/",
  },
  {
    term: "Sepolia",
    definition:
      "Ethereum ağı için kullanılan bir testnet (test ağı). Geliştiricilerin akıllı kontratları ve blockchain tabanlı uygulamaları ana ağa (mainnet) geçirmeden önce test etmelerini sağlar. Göreceli olarak hafif ve verimli olduğu için popüler test ağlarından biridir.",
    extraResource:
      "https://getblock.medium.com/what-is-sepolia-a-beginners-guide-to-ethereum-test-networks-866663a26698",
  },
  {
    term: "SHA-256",
    definition:
      "Secure Hash Algorithm 256-bit, verileri 256 bitlik (32 bayt) bir hash değerine dönüştüren kriptografik özetleme algoritmasıdır. Bitcoin ve diğer blockchain ağlarında güvenlik, madencilik ve dijital imzalar için yaygın olarak kullanılır. SHA-2 ailesinin bir parçasıdır ve yüksek güvenlik sağlar.",
    extraResource:
      "https://tr.cointelegraph.com/news/what-is-hash-whats-the-meaning-of-bitcoin-sha-256-algorithm",
  },
  {
    term: "Sharding",
    definition:
      "Blockchain ağlarının ölçeklenebilirliğini artırmak için veriyi ve işlem yükünü daha küçük, bağımsız parçalara (shard) bölme yöntemidir. Her shard, ağın genel güvenliğini koruyarak işlemleri paralel şekilde işler. Ethereum 2.0 gibi projelerde verimliliği artırmak için kullanılır.",
    extraResource:
      "https://tr.cointelegraph.com/news/what-is-blockchain-sharding",
  },
  {
    term: "Shared Sequencer Networks",
    definition:
      "Farklı rollup ve layer-2 çözümlerinin işlemleri daha verimli ve senkronize şekilde sıralamasını sağlamak için kullanılan merkeziyetsiz ağlardır. Blockchain ağları arasında birlikte çalışabilirliği (interoperability) artırarak işlem önceliklendirme ve adil sıra yönetimi sunar.",
    extraResource:
      "https://www.bulbapp.io/p/07e6691e-c538-4e8f-803b-d0887e5e0c4b/sequencerlara-genel-bir-bak",
  },
  {
    term: "Shilling",
    definition:
      "Bir kripto para veya projenin değerini yapay olarak artırmak amacıyla abartılı veya yanıltıcı tanıtım yapılmasıdır. Genellikle sosyal medya, influencer'lar veya topluluklar aracılığıyla yatırımcı ilgisini çekmek için kullanılır.",
    extraResource:
      " https://www.ledger.com/tr/academy/series-tr/reading-room/kripto-shilling-nedir#:~:text=%E2%80%94%20Shilling%2C%20bir%20projeyi%20tan%C4%B1tmaya%20%C3%A7al%C4%B1%C5%9Fan,ve%20fiyat%C4%B1n%20y%C3%BCkselmesini%20sa%C4%9Flamak%20ist er.",
  },
  {
    term: "Shitcoin",
    definition:
      "Düşük piyasa değeri, zayıf kullanım alanı veya sürdürülebilirlikten yoksun olması nedeniyle değersiz veya spekülatif görülen kripto paralar için kullanılan argo bir terimdir. Genellikle aşırı volatiliteye sahip olup, yatırımcıları yanıltıcı projeler içerebilir.",
    extraResource: "https://akademi.bitlo.com/sozluk/shitcoin",
  },
  {
    term: "Sidechain",
    definition:
      "Ana blockchain’e (mainnet) bağlı, ancak bağımsız olarak çalışan bir yan zincirdir. İşlem yükünü azaltarak ölçeklenebilirliği artırır ve farklı kullanım senaryolarına olanak tanır. Sidechain'ler, ana zincir ile varlık transferi yapabilmek için köprüler (bridges) kullanır.",
    extraResource:
      " https://erdemkiiliic.medium.com/sidechain-nedir-nas%C4%B1l-ve-neden- kullan%C4%B1l%C4%B1r-706588f81660#:~:text=Sidechain%20asl%C4%B1nda%20kompres%C3%B6r%C3%BCn%20%C3%BCzerinde%20bulunan,istenen%20di%C4%9Fer%20sinyalleri%20ezme%20i%C5%9Flemidir",
  },
  {
    term: "Signature",
    definition:
      "Bir işlemin veya mesajın doğruluğunu ve bütünlüğünü kriptografik olarak doğrulamak için kullanılan dijital veridir. Blockchain’de işlemleri yetkilendirmek ve güvenliği sağlamak amacıyla özel anahtar (private key) ile oluşturulur ve herkese açık anahtar (public key) ile doğrulanabilir.",
    extraResource:
      "https://www.btchaber.com/digital-signature-nedir-ne-icin-kullanilir/",
  },
  {
    term: "Signature Aggregation",
    definition:
      "Birden fazla dijital imzayı tek bir imza halinde birleştiren kriptografik tekniktir. Blockchain ağlarında işlem boyutunu küçültmek, ağ verimliliğini artırmak ve doğrulama süreçlerini hızlandırmak için kullanılır. BLS ve Schnorr imzaları gibi yöntemlerle uygulanabilir.",
    extraResource:
      "https://bitmarkets.academy/en/crypto-for-advanced/imza-birlestirme-nedir",
  },
  {
    term: "Slashing",
    definition:
      "Proof of Stake (PoS) ve türevi konsensüs mekanizmalarında, ağ güvenliğini ihlal eden veya kötü niyetli davranan doğrulayıcıların (validator) stake edilen varlıklarının bir kısmının veya tamamının cezalandırma mekanizması olarak yakılmasıdır. Çift imzalama, çevrimdışı kalma veya ağ kurallarını ihlal etme gibi durumlarda uygulanır.",
    extraResource:
      "https://consensys.io/blog/understanding-slashing-in-ethereum-staking-its-importance-and-consequences",
  },
  {
    term: "Slashing Conditions",
    definition:
      "Proof of Stake (PoS) ve benzeri konsensüs mekanizmalarında, bir doğrulayıcının (validator) stake edilen varlıklarının kesilmesine (slashing) neden olan kurallardır. Çift imzalama (double signing), uzun süre çevrimdışı kalma (downtime) ve ağ kurallarına aykırı davranışlar gibi durumları içerir. Ağın güvenliğini ve istikrarını korumak için uygulanır.",
  },
  {
    term: "Slippage",
    definition:
      "Bir işlem için verilen emir fiyatı ile işlemin gerçekleştiği fiyat arasındaki farktır. Genellikle düşük likidite veya yüksek volatilite nedeniyle ortaya çıkar. Özellikle kripto para borsalarında ve merkeziyetsiz finans (DeFi) platformlarında sıkça görülür.",
    extraResource:
      "https://tr.cointelegraph.com/news/what-is-slippage-in-crypto",
  },
  {
    term: "Smart Contract",
    definition:
      "Önceden belirlenmiş kurallara göre otomatik olarak çalışan, blokzincir üzerinde çalışan dijital sözleşmelerdir. Aracıya ihtiyaç duymadan, güvenli ve şeffaf işlem yürütülmesini sağlar. Ethereum gibi blokzincir platformlarında yaygın olarak kullanılır.",
    extraResource:
      " https://bilgiplatformu.btcturk.com/blokzinciri/akilli-kontrat- nedir/#:~:text=Ak%C4%B1ll%C4%B1%20s%C3%B6zle%C5%9Fmeler%2C%20merkeziyetsiz%20platformlar%20%C3%BCzerindeki,i%C5%9Flemlerde%2C%20geriye%20d%C3%B6n%C3%BCk%20i %C5%9Flemler%20yap%C4%B1lmamaktad%C4%B1r",
  },
  {
    term: "Smart Contract Auditing",
    definition:
      "Akıllı kontratların güvenlik açıklarını, hatalarını ve olası zafiyetlerini tespit etmek için yapılan detaylı kod inceleme sürecidir. Akıllı kontratların güvenli ve hatasız çalışmasını sağlamak için manuel ve otomatik analiz yöntemleri kullanılır.",
    extraResource:
      "https://plisio.net/tr/blog/smart-contract- audit#:~:text=Ak%C4%B1ll%C4%B1%20s%C3%B6zle%C5%9Fme%20denetimi%2C%20s%C3%B6zle%C5%9Fmenin%20g%C3%BCvenli%C4%9Fini,inceleyen%20kapsaml%C4%B1%20bir%20incele me%20s%C3%BCrecidir",
  },
  {
    term: "Smart Contract Languages",
    definition:
      "Blockchain üzerinde akıllı kontratlar yazmak için kullanılan programlama dilleridir. Ethereum için Solidity, Solana için Rust, Cosmos için Go gibi farklı platformlara özgü diller bulunur. Güvenlik, verimlilik ve yürütme maliyetlerini optimize etmek için tasarlanmışlardır.",
  },
  {
    term: "Smart Contract Upgrades",
    definition:
      "Dağıtılmış bir akıllı kontratın hata düzeltmeleri, güvenlik iyileştirmeleri veya yeni özellikler eklenerek güncellenmesi sürecidir. Geleneksel yazılımlardan farklı olarak blockchain üzerindeki değişmezlik (immutability) nedeniyle doğrudan güncellenemez; proxy kontratlar, modüler mimari veya yönetişim mekanizmaları gibi yöntemler kullanılarak gerçekleştirilir.",
    extraResource: "https://dev.to/joshuajee/smart-contract-upgrade-1ec2",
  },
  {
    term: "Snapshot Voting",
    definition:
      "Blockchain projelerinde yönetişim (governance) süreçlerinde, belirli bir blok yüksekliğindeki token sahipliği verilerini kullanarak gerçekleştirilen oylama yöntemidir. Zincir dışı (off-chain) olarak çalışarak işlem maliyetlerini azaltır ve merkeziyetsiz oylama sistemlerinde yaygın olarak kullanılır.",
    extraResource:
      " https://medium.com/laykadao/merkeziyetsiz-oylama-sistemi-snapshot-nedir-d470d6d0de92#:~:text=Snapshot%2C%20merkeziyetsiz%20bir%20oylama%20sistemidir,%2Dchain)%2 0imzalama%20teknikleri%20kullan%C4%B1r .",
  },
  {
    term: "Soft Fork",
    definition:
      "Geriye dönük uyumlu (backward-compatible) bir blockchain protokol güncellemesidir. Eski node’lar güncellenmiş kurallara uymaya devam edebilir, ancak yeni kurallara tam uyum sağlamak için güncelleme yapmaları önerilir. Soft fork'lar, blok boyutu sınırlamaları veya işlem formatı değişiklikleri gibi iyileştirmeler için kullanılır.",
    extraResource:
      " https://bilgiplatformu.btcturk.com/blokzinciri/catallanma-hardfork-softfork- nedir/#:~:text=faaliyete%20devam%20edebilmi%C5%9Ftir.- ,Yumu%C5%9Fak%20%C3%87atallanma%20(Soft%20Fork)%20Nedir%3F,tamamen%20de%C4%9Fi%C5%9Ftirmezler%20ve%20uyumlu%20%C3%A7al%C4%B1%C5%9F%C4%B1rlar",
  },
  {
    term: "Solana",
    definition:
      "Yüksek işlem hızı, düşük maliyet ve ölçeklenebilirlik sunan, merkeziyetsiz bir blockchain platformudur. Proof of History (PoH) ve Proof of Stake (PoS) konsensüs mekanizmalarını birleştirerek saniyede binlerce işlem gerçekleştirebilir.",
    extraResource: "https://www.bitlo.com/rehber/solana-sol-nedir",
  },
  {
    term: "Solidity",
    definition:
      "Ethereum ve diğer EVM (Ethereum Virtual Machine) uyumlu blockchain platformlarında akıllı kontratlar yazmak için kullanılan, statik tipli, yüksek seviyeli bir programlama dilidir. JavaScript, Python ve C++ dillerinden esinlenerek geliştirilmiştir. Solidity, Ethereum’un akıllı kontratları için en yaygın kullanılan dildir ve DeFi, NFT, DAO gibi merkeziyetsiz uygulamaların (dApp) geliştirilmesine olanak tanır.",
    extraResource:
      " https://veliuysal.dev/solidity-nedir- 5ecf9ab55c66#:~:text=Solidity%2C%20Ethereum%20ve%20Ethereum%20Sanal%20Makinas%C4%B1%20(EVM)%20ile%20uyumlu,i%C5%9Flemleri%20ve%20verileri%20i%C5%9Fleyebilen%20platform lard%C4%B1r",
  },
  {
    term: "Stablecoin",
    definition:
      "Değeri genellikle ABD Doları (USD), Euro (EUR) veya altın gibi rezerv varlıklara sabitlenmiş kripto para birimidir. Piyasadaki fiyat dalgalanmalarını minimize ederek istikrarlı bir değer saklama ve transfer aracı olarak kullanılır. Fiat destekli (USDT, USDC), kripto teminatlı (DAI) ve algoritmik stablecoin’ler (UST, FRAX) gibi farklı türleri bulunur.",
    extraResource: "https://www.bitlo.com/rehber/stablecoin-nedir",
  },
  {
    term: "Stagflation",
    definition:
      "Ekonomide durgunluk (stagflation), yüksek enflasyon ve işsizlik oranlarının artışı gibi olumsuz faktörlerin aynı anda yaşandığı durumdur. Genellikle ekonomik büyümenin yavaşladığı, ancak fiyatların yükselmeye devam ettiği dönemleri ifade eder. Geleneksel ekonomi teorilerine aykırı olduğu için çözümü zor ve karmaşık bir ekonomik sorun olarak kabul edilir.",
    extraResource:
      " https://bilgiplatformu.btcturk.com/kripto-okur-yazarlik/stagflasyon- nedir/#:~:text=Stagflasyon%2C%20stagnasyon%20(durgunluk)%20ve,i%C5%9Fsizlik%20oran%C4% B1ndaki%20art%C4%B1%C5%9F%20takip%20eder .",
  },
  {
    term: "Staking",
    definition:
      "Bir blockchain ağında ödüller kazanmak ve ağın güvenliğini sağlamak amacıyla belirli bir miktar kripto parayı kilitleme sürecidir. Proof of Stake (PoS) ve türevi konsensüs mekanizmalarında kullanılır. Staking yapan kullanıcılar, ağın doğrulayıcıları (validators) olarak işlem onaylamaya katkıda bulunur ve karşılığında staking ödülleri kazanır.",
    extraResource:
      "https://bilgiplatformu.btcturk.com/kripto-okur-yazarlik/stake-etmek-staking-nedir/",
  },
  {
    term: "Staking Pool",
    definition:
      "Birden fazla kullanıcının, staking ödülleri kazanmak amacıyla kripto varlıklarını bir havuzda birleştirdiği sistemdir. Küçük yatırımcıların da Proof of Stake (PoS) tabanlı ağlarda doğrulayıcı (validator) olmadan staking yapmasına olanak tanır. Staking havuzu, katılımcılar adına ağı güvence altına alır ve kazançları paylaştırır.",
    extraResource: "https://akademi.bitlo.com/sozluk/staking-pool",
  },
  {
    term: "Staking Rewards",
    definition:
      "Proof of Stake (PoS) ve türevi konsensüs mekanizmalarında, ağın güvenliğini sağlamak ve işlemleri doğrulamak için kripto varlıklarını stake eden kullanıcılara verilen ödüllerdir. Ödüller, genellikle stake edilen token cinsinden dağıtılır ve ağın protokolüne bağlı olarak değişkenlik gösterebilir.",
    extraResource:
      "https://www.bitpanda.com/academy/en/lessons/staking-rewards-what-are-they/",
  },
  {
    term: "StarkNet",
    definition:
      "Ethereum üzerinde çalışan, layer-2 ölçeklendirme çözümü. ZK-Rollup teknolojisini kullanarak daha hızlı ve düşük maliyetli işlemler sunar. STARK tabanlı sıfır bilgi ispatları (Zero-Knowledge Proofs - ZKPs) sayesinde güvenliği Ethereum ana ağına bağlı kalırken, işlem hacmini önemli ölçüde artırır. Cairo programlama diliyle akıllı kontratlar geliştirilebilir.",
    extraResource: "https://www.bitlo.com/rehber/starknet-strk-nedir",
  },
  {
    term: "State",
    definition:
      "Bir blockchain ağında, hesap bakiyeleri, akıllı kontrat verileri ve işlem geçmişi gibi bilgilerin belirli bir anda tuttuğu mevcut durumdur. Blockchain’in her bloğunda state değişebilir ve bu değişiklik, ağın tüm node’ları tarafından doğrulanarak saklanır. Ethereum gibi akıllı kontrat platformlarında, global state sürekli güncellenir ve her işlemle birlikte değişir.",
  },
  {
    term: "State Channel",
    definition:
      "Blockchain işlemlerini zincir dışı (off-chain) olarak gerçekleştirerek hız ve ölçeklenebilirlik sağlayan layer-2 çözümüdür. Taraflar, zincir üzerinde bir başlangıç işlemi yaparak bir kanal açar, ardından işlemleri off-chain olarak yürütür ve yalnızca son durumu blockchain’e kaydederek işlem ücretlerini ve ağ tıkanıklığını azaltır. Bitcoin’de Lightning Network, Ethereum’da Raiden Network gibi örnekler bulunmaktadır.",
    extraResource:
      "https://ethereum.org/tr/developers/docs/scaling/state-channels/",
  },
  {
    term: "Stealth Addresses",
    definition:
      "Kripto para işlemlerinde alıcıların gizliliğini korumak için her işlemde benzersiz ve tek kullanımlık bir adres oluşturan bir gizlilik mekanizmasıdır. Bu yöntem, alıcının gerçek adresinin kamuya açık blockchain üzerinde görünmesini engeller ve işlemleri takip etmeyi zorlaştırır. Monero (XMR) ve diğer gizlilik odaklı blockchain ağlarında yaygın olarak kullanılır.",
    extraResource:
      "https://tr.cointelegraph.com/explained/what-are-stealth-addresses-and-how-do-they-work",
  },
  {
    term: "Stellar (XLM)",
    definition:
      "Küresel finansal işlemleri hızlı ve düşük maliyetle gerçekleştirmek için geliştirilen, açık kaynaklı ve merkeziyetsiz bir blockchain ağıdır. Sınır ötesi ödemeleri kolaylaştırmak, bankalar, ödeme sistemleri ve bireyler arasında bağlantı kurmak amacıyla tasarlanmıştır. Stellar’ın yerel tokeni Lumens (XLM), işlem ücretlerini ödemek ve ağı korumak için kullanılır. Ripple’a (XRP) benzer bir hedefe sahiptir ancak daha merkeziyetsiz bir yapıya sahiptir.",
    extraResource: "https://www.bitlo.com/rehber/stellar-lumens-xlm-nedir",
  },
  {
    term: "Sui",
    definition:
      "Dijital varlık yönetimi ve akıllı kontratlar için tasarlanmış, yüksek verimli ve ölçeklenebilir bir Layer 1 blockchain ağıdır. Move programlama diliyle geliştirilmiştir ve paralel işlem yürütme (parallel execution) özelliği sayesinde düşük işlem ücretleri ve hızlı işlem onay süreleri sunar. Sui, oyun, DeFi ve NFT gibi kullanım alanlarında ölçeklenebilir çözümler sağlamayı hedefler. Ağın yerel tokeni SUI, işlem ücretleri ve ağ güvenliği için kullanılır.",
    extraResource: "https://www.bitlo.com/rehber/sui-network-nedir",
  },
  {
    term: "Suitable",
    definition:
      "Belirli bir blockchain ağı, protokolü veya teknolojisinin belirli bir kullanım alanı, proje veya uygulama için uygun ve elverişli olup olmadığını ifade eden terimdir. Ölçeklenebilirlik, güvenlik, hız ve maliyet gibi faktörler, bir blockchain’in belirli bir senaryoya uygun olup olmadığını belirler. Örneğin, Ethereum akıllı kontratlar için suitable(uygun) görülürken, Bitcoin dijital değer saklama için daha suitable olabilir.",
  },
  {
    term: "SushiSwap",
    definition:
      "Ethereum ve diğer blockchain ağlarında çalışan, merkeziyetsiz bir borsa (DEX) protokolüdür. Uniswap’in bir fork’u olarak geliştirilmiş olup, kullanıcıların token takası (swap), likidite sağlama (liquidity providing) ve yield farming yapmasına olanak tanır. SUSHI adlı yerel tokeni, yönetişim (governance) ve ödüller için kullanılır. SushiSwap, DeFi ekosisteminde merkeziyetsiz finansal hizmetler sunmayı hedefler.",
    extraResource:
      "https://bilgiplatformu.btcturk.com/kriptopara/sushiswap-sushi-nedir-nasil-calisir/",
  },
  {
    term: "Swap",
    definition:
      "Kripto para dünyasında, bir dijital varlığın başka bir dijital varlık ile değiştirilmesi işlemine verilen addır. Merkeziyetsiz borsalar (DEX), örneğin Uniswap, PancakeSwap ve SushiSwap, kullanıcıların doğrudan cüzdanlarından token takası yapmasına olanak tanır. Geleneksel finans sisteminde ise, faiz oranı veya döviz kuru değişimlerini içeren türev sözleşmelerini ifade edebilir.",
    extraResource: "https://akademi.bitci.com.tr/swap-nedir",
  },
  {
    term: "Sybil Attack",
    definition:
      "Bir blockchain veya merkeziyetsiz ağda, bir kişi veya grup tarafından birden fazla sahte kimlik veya node oluşturularak yapılan saldırı türüdür. Amaç, ağın güvenliğini tehlikeye atmak, oylama süreçlerini manipüle etmek veya sahte işlemlerle sistemi bozmak olabilir. Sybil saldırılarına karşı korunmak için Proof of Work (PoW), Proof of Stake(PoS) ve kimlik doğrulama mekanizmaları gibi yöntemler kullanılır.",
    extraResource: "https://tr.cointelegraph.com/news/what-is-a-sybil-attack",
  },
  {
    term: "Symmetric Cryptography",
    definition:
      "Aynı anahtarın hem şifreleme hem de şifre çözme için kullanıldığı bir kriptografi yöntemidir. Blockchain teknolojisinde veri gizliliği ve güvenliği sağlamak için bazı özel kullanım alanlarında yer alabilir. Ancak, anahtar paylaşımı zorlukları nedeniyle blockchain ağlarında genellikle asimetrik kriptografi tercih edilir. AES (Advanced Encryption Standard) gibi simetrik şifreleme algoritmaları, blockchain tabanlı güvenli iletişim ve depolama çözümlerinde kullanılabilir.",
    extraResource:
      "https://bilgisayarkavramlari.com/2009/06/16/simetrik-sifreleme-symmetric-encryption/",
  },
  {
    term: "System Blockchain",
    definition:
      "Bir blockchain ağının temel altyapısını ve işleyişini yöneten, ağın güvenliğini, doğrulamasını ve konsensüs mekanizmasını sağlayan çekirdek katmandır. Bu tür blockchainler, genellikle ağın yönetimi, protokol güncellemeleri ve node’lar arasındaki iletişimi düzenlemek için kullanılır. Bitcoin ve Ethereum gibi Layer 1 blockchainler, birer system blockchain örneğidir.",
    extraResource: "https://www.investopedia.com/terms/b/blockchain.asp",
  },
  {
    term: "Taproot",
    definition:
      "Bitcoin ağında, işlem gizliliğini artırmak ve işlem verimliliğini yükseltmek için geliştirilmiş bir güncellemedir. Taproot, Schnorr imzaları ve Merkelized Abstract Syntax Trees (MAST) kullanarak daha esnek ve gizli akıllı kontratlar sunar. Bu güncelleme, Bitcoin'in blok verimliliğini artırırken aynı zamanda daha düşük işlem ücretleri ve daha yüksek gizlilik sağlar. Taproot, Bitcoin’in kriptografik kapasitesini güçlendirir ve daha karmaşık işlemler için olanak tanır.",
    extraResource:
      "https://akademi.bitlo.com/makale/bitcoin-taproot-guncellemesi-nedir",
  },
  {
    term: "Testnet",
    definition:
      "Bir blockchain ağının, gerçek para birimi yerine test amaçlı kullanılan bir versiyonudur. Geliştiriciler ve kullanıcılar, yeni özellikleri, uygulamaları veya protokolleri test etmek amacıyla testnet üzerinde işlem yapar. Testnet, gerçek ağda (mainnet) yapılabilecek hataların ve sorunların önceden tespit edilmesini sağlar. Testnet'teki tokenler gerçek para değeri taşımadığı için, risk olmadan deneme yapmaya olanak tanır.",
    extraResource: "https://coinmarketcap.com/academy/tr/glossary/testnet",
  },
  {
    term: "TGE (Token Generation Event)",
    definition:
      "Bir blockchain projesinin, tokenlerini oluşturup dağıttığı etkinliktir. TGE, genellikle token satışları veya başlangıç token dağıtımları sırasında gerçekleşir ve yatırımcılara veya topluluğa proje tokenlerini sunar. TGE, bir projenin finansman sağlama, topluluk oluşturma veya ağa başlangıç desteği sağlama amacı güder. Bu etkinlik, ICO (Initial Coin Offering) veya IDO (Initial DEX Offering) gibi token satışı süreçlerinin başlangıcı olabilir.",
    extraResource:
      "https://bilgiplatformu.btcturk.com/kripto-okur-yazarlik/tge-nedir/",
  },
  {
    term: "Throughput",
    definition:
      "Bir blockchain ağının birim zaman içinde gerçekleştirebileceği işlem sayısıdır. Yüksek throughput, ağın daha fazla işlemi hızlı bir şekilde işleyebilmesi anlamına gelir ve genellikle ağın verimliliğini, hızını ve ölçeklenebilirliğini değerlendirmek için kullanılır. Bitcoin gibi ağlar, işlem başına düşük throughput değerlerine sahipken, bazı Layer 2 çözümleri veya diğer blockchainler daha yüksek throughput değerleri sunar.",
    extraResource: "https://coinmarketcap.com/academy/glossary/throughput",
  },
  {
    term: "Timelock",
    definition:
      "Bir blockchain işleminde, belirli bir süre boyunca işlem veya akıllı kontratın gerçekleştirilememesini sağlayan özelliktir. Timelock, belirli bir zaman diliminde gerçekleşmesi gereken işlemleri sınırlayarak, ağdaki güvenliği artırabilir ve geçici güvenlik önlemleri almayı sağlar. Bu özellik, genellikle token transferleri, akıllı kontratlar veya multi-signature (çok imzalı) işlemler gibi durumlarda kullanılır. Timelock, blockchain'in zamanlayıcı mekanizmaları ile birlikte çalışarak, işlem gerçekleştirilmeden önce bir zaman kilidi (lock) oluşturur.",
    extraResource:
      "https://blog.coino.com.tr/tr/sozluk/timelock-zaman-kilidi-nedir",
  },
  {
    term: "Timestamp",
    definition:
      "Kripto paralarda zaman damgası, her blokta saklanan bir veri parçasıdır ve bloğun çıkarıldığı ve blok zincirine eklendiği zamanı kaydetmek için kullanılır. Zaman damgası, blok zincirinin bütünlüğünü sağlamaya yardımcı olur ve çifte harcamayı önlemeye yardımcı olur.",
    extraResource:
      "https://blog.coino.com.tr/tr/sozluk/timestamp-zaman-damgasi-nedir",
  },
  {
    term: "Token",
    definition:
      "Token, blok zinciri üzerinde oluşturulan ve genellikle bir projenin ekosistemi içinde belirli bir değere, hizmete ya da hakka karşılık gelen dijital bir varlıktır. Kripto paralar gibi tokenlar da transfer edilebilir, alınıp satılabilir ve yatırım aracı olarak kullanılabilir. Ancak tokenlar doğrudan bir para birimi olarak değil, genellikle bir platformun içindeki özel amaçlar için tasarlanmıştır.",
    extraResource: "https://www.getmidas.com/kripto-sozluk/token-nedir/",
  },
  {
    term: "Tokenization",
    definition:
      "Tokenizasyon, fiziksel veya dijital bir varlığın blok zinciri üzerinde sahipliği veya haklarının tokenlerle temsil edilmesidir. Tokenizasyon ile varlıkları dijital formata dönüştürürken sahiplik hakları genellikle bir blok zincire kaydedilir. Böylelikle, veriler daha güvenli bir şekilde saklanabilir ve yönetilebilir. Örneğin, kripto varlıkların tokenize edilmesi, kripto varlık verilerinin blok zinciri üzerinde saklanmasını mümkün kılar.",
    extraResource:
      "https://bilgiplatformu.btcturk.com/kripto-okur-yazarlik/tokenization-nedir/",
  },
  {
    term: "Tokenomics",
    definition:
      "Token ekonomisi ifadesinin kısaltması olan 'tokenomic', proje ekosistemi içinde tokenin nasıl kullanıldığını açıklayan veya projenin zamanla büyümesi durumunda tokenin nasıl bir para politikası izleyeceğini çevreleyen kurallar bütününü tarif eder. Kısacası bir kripto paranın arz-talep ilişkisini inceleyebildiğimiz verilerdir.",
    extraResource: "https://akademi.bitlo.com/makale/tokeneconomics-nedir",
  },
  {
    term: "Total Value Locked (TVL)",
    definition:
      "TVL, DeFi protokollerinde kilitlenmiş olan tüm varlıkların toplam değerini ifade eder. Bu terim, DeFi protokolü üzerinde bulunan staking, borç verme ve likidite havuzları gibi protokollerde yer alan uygulamaların üzerinde kilitlenmiş kripto paraların değerini de temsil eder.",
    extraResource:
      "https://tr.cointelegraph.com/explained/what-is-total-value-locked-tvl-in-crypto-and-why-does-it-matter",
  },
  {
    term: "TPS",
    definition:
      "Kriptoda TPS, bir blok zincirinin bir saniyede gerçekleştirebileceği maksimum işlem sayısını ifade eder. Bir ağın hızını ve ölçeklenebilirliği ölçmek için kullanılır.",
  },
  {
    term: "Trading",
    definition:
      "Trading, finansal piyasalarda varlıkların alım-satım işlemlerini yaparak kar elde etmeyi amaçlayan bir faaliyettir. Bu varlıklar hisse senetleri, kripto paralar, döviz (Forex), emtialar (altın, petrol vb.) veya türev ürünler olabilir. Trading, yatırım yapmaya benzer ancak daha kısa vadeli kazanç odaklıdır. Bir yatırımcı uzun vadede değer artışı beklerken, bir trader piyasa dalgalanmalarından faydalanarak kısa vadeli alım-satımlar yapar.",
    extraResource: "https://rankia.com.tr/trading-nedir/",
  },
  {
    term: "Trading Bot",
    definition:
      "Trading botlar, otomatik olarak bitcoin ve kripto para alım-satımı yapmanıza izin veren yazılımlardır ve geliştiriciler tarafından oluşturulan algoritmalara dayanmaktadır. Trading bot sayesinde yatırımcıların portföylerini ayarlamak ve alım-satım yapmak için gece gündüz online olmaları gerekmemektedir. Trading botları, tek işlem çiftlerinde alım-satım stratejilerini otomatikleştirebilmektedir. Kodlanmış olan trading bot teknolojisi, çok küçük fiyat değişimlerinden yararlanmak için gerçek zamanlı arbitraj yoluyla borsalarda alım- satım gibi çeşitli varlıklar ve eylemler arasındaki alım-satımların akıllıca yönlendirilmesine bile izin vermektedir.",
    extraResource:
      "https://www.coindeskturkiye.com/ogren/kripto-trading-botlari-nedir-ve-nasil-calisirlar-5277",
  },
  {
    term: "Transaction",
    definition:
      "Bir veya daha fazla SQL sorgusunun bir işlem içinde gruplandırılmasıdır. birlikte çalışması ve belli bir görevin düzenli şekilde yapılması gereken işlemler için Transaction kullanılır. Birbiri ile bağımlı sorgular için Transaction işlemleri yapılır. Ya sorguların hepsini çalıştırır ya da hiçbirini çalıştırmaz. Yani gruplandırma içindeki tüm sorguların çalışması gerekir, eğer grup içinde herhangi bir sorguda hata çıkarsa işlem iptal edilir.",
    extraResource:
      "https://furkanalaybeg.medium.com/sqlde-transaction-ve-acid-kavram%C4%B1-nedir-4c29e200c16f",
  },
  {
    term: "Transaction Fee Market",
    definition:
      "Transaction Fee Market, blockchain ağlarında işlemleri doğrulamak ve bloklara dahil etmek için ödenen işlem ücretlerinin(transaction fees) arz ve talep dengesine göre şekillendiği bir sistemdir. Bu sistem, kullanıcıların ödedikleri işlem ücretleri ile madenciler ve validatörler arasındaki dinamik etkileşimini ifade eder. İşlem ücreti pazarı, ağın tıkanıklığına ve kullanıcıların işlem önceliği tercihlerine göre değişir.",
  },
  {
    term: "Transaction Fees",
    definition:
      "Kripto para transfer işlemleri için ödenen işlem ücretini ifade eder. İşlem ücretleri her blok zincirinde farklılık gösterir.",
  },
  {
    term: "Transaction Finality",
    definition:
      "Transaction Finality, bir blockchain ağında bir işlemin geri döndürülemez ve kalıcı hale gelmesi sürecini ifade eder. Başka bir deyişle, bir işlemin kesin olarak tamamlandığı ve değiştirilemeyeceği anlamına gelir. Farklı blockchain ağlarında finality farklı şekillerde sağlanır ve bu süreç, kullanılan konsensüs mekanizmasına bağlıdır.",
    extraResource:
      "https://hackernoon.com/tr/e%C4%9Fitim-bayt%C4%B1-kriptoda-i%C5%9Flem-kesinli%C4%9Fi-nedir-ve-neden-%C3%B6nemlidir",
  },
  {
    term: "Transaction Pool",
    definition:
      "Transaction pool, blokzinciri ağına gönderilen ve henüz bir bloğa dahil edilmemiş işlemlerin geçici olarak saklandığı bir alandır.",
    extraResource:
      "https://btcblockchain.home.blog/2023/12/01/transaction-pool-mempool-nedir/",
  },
  {
    term: "Trusted Execution Environments (TEE)",
    definition:
      "Trusted Execution Environment (TEE), cihaz içindeki hassas verileri işlemek için izole edilmiş ve güvenli bir donanım ortamıdır. TEE, ana işletim sisteminden ayrı çalışarak yetkisiz erişimleri, kötü amaçlı yazılımları ve dış saldırıları engeller. Bu sayede hassas verilerin güvenli bir şekilde işlenmesini ve saklanmasını sağlar.",
    extraResource:
      "https://doganeth.medium.com/trusted-execution-environment-ve-blockchaindeki-kullan%C4%B1m-alanlar%C4%B1-f49bda9d1583",
  },
  {
    term: "Trustless",
    definition:
      "Trustless, blok zinciri ve merkeziyetsiz finans (DeFi) ekosistemlerinde kullanıcıların herhangi bir merkezi otoriteye veya üçüncü taraf aracıya güvenmek zorunda kalmadan işlem yapabilmesini sağlayan bir sistemdir. Blok zincirinde trustless olmak, işlemlerin merkezi bir otoriteye güvenmek yerine, matematiksel kurallar, kriptografi ve akıllı sözleşmeler ile doğrulandığı anlamına gelir.",
    extraResource: "https://www.coinkolik.com/trustless-nedir/",
  },
  {
    term: "Turing-Complete",
    definition:
      "Bir sistem, başka herhangi bir sistemi simüle etmek için kullanılabiliyorsa Turing complete demektir. Bu, ne kadar karmaşık olursa olsun, herhangi bir hesaplama problemini çözmek için kullanılabileceği anlamına gelir. Bir sistemin Turing'in eksiksiz olması için dört temel işlemi gerçekleştirme yeteneğine sahip olması gerekir: verileri okuma, yazma, depolama ve işleme. Bu işlemler tüm bilgisayar programlarının temelidir.",
    extraResource:
      " https://akademi.bitlo.com/sozluk/turing- complete#:~:text=Turing%20complete%20ya%20da%20Turing,yetene%C4%9Fini%2 0ifade%20eden%20bir%20kavramd%C4%B1r",
  },
  {
    term: "Two-Factor Authentication (2FA)",
    definition:
      "Two-Factor Authentication, bir kullanıcının kimliğini doğrulamak için iki farklı güvenlik adımı kullanarak ek koruma sağlayan bir güvenlik yöntemidir. 2FA, tek bir şifreye güvenmek yerine ek bir doğrulama yöntemiyle hesapları yetkisiz erişime karşı daha güvenli hale getirir.",
    extraResource:
      "https://crypto-com.webpkgcache.com/doc/-/s/crypto.com/tr/university/what-is-2fa-how-two-factor-authentication-can-protect-your-cryptocurrency",
  },
  {
    term: "Uniswap (UNI)",
    definition:
      "Uniswap, Ethereum blok zincirinde çalışan bir dizi akıllı sözleşmeden oluşan merkeziyetsiz bir takas projesidir. Uniswap, katılanlara işlem ücretlerinin ve yeni ihraç edilen UNI tokenlerin bir kısmını sunarak kullanıcılarını borsanın likiditesini korumaya teşvik eder. En popüler DeFi protokollerinden biri olan Uniswap, yerel UNI tokeni de dahil olmak üzere birden fazla kripto varlıktan yararlanarak, merkeziyetsizliğin getirdiği ek avantajlarla birlikte geleneksel bir borsayla neredeyse aynı hizmeti sunar. ",
    extraResource: "https://tr.wikipedia.org/wiki/Uniswap",
  },
  {
    term: "Unspent Transaction Output (UTXO)",
    definition:
      "Bitcoin blokzincirindeki işlemlerin ne şekilde gerçekleştiğini ve doğrulandığını anlamak için önemli kavramlardan biri olan UTXO, işlemden sonra arta kalan kriptopara miktarı olarak açıklanabilir. UTXO kavramına göre gerçekleşen işlem girdi, işlemden arta kalan kısım ise çıktı olarak tanımlanır. Diğer bir ifade ile unspent transaction output, blokzincirindeki harcanmamış işlemin kaydıdır. Buna göre bir transfer gerçekleştiğinde söz konusu işlemin harcamamış kısımları yani çıktılar, bir sonraki işlemlerde kullanılması amacıyla girdi olarak veri tabanına kaydedilir. UTXO bir nevi kullanılabilir bakiye veya alışverişteki para üstü olarak da düşünülebilir.",
    extraResource:
      "https://bilgiplatformu.btcturk.com/kripto-okur-yazarlik/utxo-nedir/",
  },
  {
    term: "USDC (USD Coin)",
    definition:
      "USD Coin, 1:1 oranında ABD dolarına sabitlenmiş; Ethereum, Stellar, Algorand, Solana, Tron ve Hedera Hashgraph sisteminde çalışan sabit kripto para birimidir. USD Coin, Circle tarafından kurulan ve kripto para borsası Coinbase ve Bitcoin madencilik şirketi Bitmain'den üyeleri içeren Centre adlı konsorsiyum tarafından yönetilmektedir.",
    extraResource: "https://www.bitlo.com/rehber/usd-coin-usdc-nedir",
  },
  {
    term: "USDT (Tether)",
    definition:
      "USDT, ABD dolarına 1:1 oranında sabitlenmiş bir stablecoindir. Yani 1 USDT her zaman yaklaşık olarak 1 USD değerindedir. Tether Limited tarafından 2015 yılında piyasaya sürülmüştür ve en popüler stabil kripto para birimlerinden biridir.",
    extraResource: "https://www.bitlo.com/rehber/tether-nedir",
  },
  {
    term: "Utility Token",
    definition:
      "Utility token, bir blok zinciri ekosistemi içinde belirli bir hizmete erişim sağlamak veya belli işlevleri yerine getirmek için kullanılan bir kripto para türüdür. Yani yatırım amaçlı değil, belirli bir platformda kullanım amacıyla üretilir.",
    extraResource:
      " https://bilgiplatformu.btcturk.com/kripto-okur-yazarlik/utility-token- nedir/#:~:text=Utility%20token%2C%20T%C3%BCrk%C3%A7e'de%20fayda,%C3 %B6zel%20olarak%20sunulan%20hizmetlere%20eri%C5%9Febilmektedir",
  },
  {
    term: "Validator",
    definition:
      "Validator yani doğrulayıcı, blokzincir ağında kullanılan proof of stake mekanizmasının önemli bir parçasıdır. Proof of work sisteminde madencinin aldığı rolü üstlenirler ve cihazlar yerine blok ekleme ve doğrulama işlemlerini yaparlar. Blokzincir üzerindeki işlemler, yalnızca validator tarafından onaylandığında tamamlanmış olur. Yani, zincirin kilit halkasıdır.",
    extraResource:
      "https://bilgiplatformu.btcturk.com/blokzinciri/validator-nedir/",
  },
  {
    term: "Validator Synchronization",
    definition:
      "Validator synchronization (doğrulayıcı senkronizasyonu), bir blok zinciri ağında bir validatör nodeunun güncel blok zinciri durumuna ulaşması sürecidir. Bu işlem, bir doğrulayıcının blok üretme, doğrulama ve fikir birliğine katılabilmesi için gereklidir.",
  },
  {
    term: "Validator Upgrades",
    definition:
      "Validator upgrades, bir blok zinciri ağındaki validator düğümlerinin yazılım, donanım veya protokol güncellemeleri yaparak ağın güncel sürümüne uyum sağlaması işlemidir. Bu güncellemeler, güvenliği artırmak, performansı iyileştirmek ve yeni özellikleri desteklemek için gereklidir.",
  },
  {
    term: "Validity Proof",
    definition:
      "Validity Proof (Geçerlilik Kanıtı), bir blok zinciri sisteminde işlemlerin veya blokların doğruluğunu matematiksel olarak kanıtlamak için kullanılan bir tekniktir. Özellikle Zero-Knowledge Proofs ve Rollups gibi ölçeklendirme çözümlerinde yaygın olarak kullanılır.",
    extraResource:
      "https://medium.com/starknet-t%C3%BCrkiye/fraud-proof-ve-validity-proof-nedir-6f340ed02885?responsesOpen=true&sortBy=REVERSE_CHRON",
  },
  {
    term: "Validium",
    definition:
      "Validium'lar, Ethereum Ana Ağı'ndaki işlemleri zincir dışı veri kullanılabilirliği ve hesaplama yoluyla işleyerek çıktı hacmini artırmak için tasarlanmış ölçeklendirme çözümleridir. ZK toplamaları gibi validiumlar da Ethereum'daki zincir dışı işlemleri doğrulamak için sıfır bilgi kanıtları yayımlar. Bu da geçersiz durum geçişlerini önler ve validium zincirinin güvenlik garantisini artırır.",
    extraResource:
      "https://tr.tradingview.com/news/cointelegraph:46136279ad9e8:0/",
  },
  {
    term: "VDF (Verifiable Delay Functions)",
    definition:
      "VDF (Doğrulanabilir Gecikme Fonksiyonu), belirli bir sürede hesaplanması zor, ancak doğrulanması kolay olan bir matematiksel fonksiyondur. Blok zinciri, kriptografi ve randomness gibi alanlarda kullanılır.",
    extraResource:
      "https://medium.com/rootstock-tech-blog/verifiable-delay-functions-8eb6390c5f4",
  },
  {
    term: "VRF (Verifiable Random Functions)",
    definition:
      "VRF (Doğrulanabilir Rastgele Fonksiyon), bir girdiyi rastgele bir çıktıya dönüştüren ve bu çıktının doğruluğunun kolayca kanıtlanmasını sağlayan bir kriptografik fonksiyondur. VRF'ler, merkeziyetsiz sistemlerde güvenilir rastgelelik üretmek için kullanılır.",
    extraResource:
      "https://chain.link/education-hub/verifiable-random-function- vrf#:~:text=A%20verifiable%20random%20function%20(VRF)%20is%20a%20crypto graphic%20function%20that,can%20be%20verified%20by%20anyone",
  },
  {
    term: "Vesting",
    definition:
      "Vesting, belirli bir süre boyunca kademeli olarak token veya hisse dağıtımını ifade eden bir mekanizmadır. Kripto para projelerinde, yatırımcıların, ekip üyelerinin veya danışmanların belirli bir süre boyunca tokenlerini satmalarını engelleyen bir lock-up sürecidir.",
    extraResource: "https://coinmuhendisi.com/blog/vesting-nedir/",
  },
  {
    term: "Virtual",
    definition:
      "’Virtual’, fiziksel olarak var olmayan ancak yazılım veya ağ üzerinden simüle edilen sistemleri ifade eder. Blockchain ekosisteminde 'sanal' terimi, dijital varlıklar, sanal makinalar veya merkeziyetsiz uygulamalar gibi fiziksel dünyada karşılığı olmayan ancak yazılım ile oluşturulmuş kavramlar için kullanılır. Örneğin, sanal cüzdanlar (virtual wallets), fiziksel bir kart veya kasa olmadan dijital olarak varlıkları saklar. Aynı şekilde, sanal dünyalar (metaverse) blockchain ile desteklenen dijital ortamlardır. Bu kavram, Web3 teknolojilerinde ve merkeziyetsiz finans sistemlerinde sıkça karşımıza çıkar.",
  },
  {
    term: "Virtual Machine (VM) - Sanal Makine",
    definition:
      "Sanal makine (VM), fiziksel bir bilgisayar donanımını taklit eden ve yazılım ortamında çalışan bir sistemdir. Blockchain ekosisteminde, Ethereum Virtual Machine (EVM) gibi sanal makineler, akıllı sözleşmelerin güvenli ve belirlenen kurallar çerçevesinde çalışmasını sağlar. VM’ler sayesinde, farklı cihazlar üzerinde standart bir ortam oluşturulabilir ve uygulamalar bağımsız olarak çalıştırılabilir. Ayrıca, sanal makineler merkeziyetsiz uygulamaların (DApp'ler) ölçeklenebilirliğini ve güvenliğini artırır. Özellikle Ethereum dışındaki blok zincirlerinde de benzer sanal makine çözümleri bulunmaktadır.",
    extraResource: [
      "https://www.youtube.com/watch?v=yIVXjl4SwVo",
      "https://x.com/>/broadcasts/1jMJgkgPjdjJL",
    ],
  },
  {
    term: "Volatile Market (Dalgalı Piyasa)",
    definition:
      "Volatile market, fiyatların kısa süre içinde büyük dalgalanmalar yaşadığı finans piyasalarını ifade eder. Kripto para piyasaları, likidite eksikliği, spekülasyon ve haber etkileri nedeniyle oldukça dalgalıdır. Bitcoin gibi varlıklar bazen saatler içinde %10'dan fazla değer kazanabilir veya kaybedebilir. Volatilite, yatırımcılar için hem büyük kazanç hem de büyük kayıplar anlamına gelir, bu yüzden risk yönetimi önemlidir. Kripto türev ürünleri ve stablecoin'ler, volatiliteye karşı koruma sağlayan finansal araçlar arasında yer alır. ",
  },
  {
    term: "VRF (Verifiable Random Functions) - Doğrulanabilir Rastgele Fonksiyonlar",
    definition:
      "VRF, belirli bir girişe dayalı olarak rastgele ancak kriptografik olarak doğrulanabilir bir çıktı üreten matematiksel bir fonksiyondur. Blockchain ekosisteminde, akıllı kontratların güvenli bir şekilde rastgelelik üretmesini sağlamak için kullanılır. Chainlink VRF gibi çözümler, NFT dağıtımları, oyun mekanikleri ve piyango sistemlerinde adil ve manipülasyona kapalı rastgelelik sağlar. VRF sayesinde, rastgele sayı üreten sistemler dışarıdan müdahaleye kapalı hale getirilir. Merkeziyetsiz uygulamalar için büyük bir güven katmanı sağlar.",
    extraResource:
      "https://cha\n-l\nk.translate.goog/educaton-hub/ver\fable-random-functon- vrf?_x_tr_sl=en&_x_tr_tl=tr&_x_tr_hl=tr&_x_tr_pto=tc",
  },
  {
    term: "Vyper",
    definition:
      "Vyper, Ethereum akıllı sözleşmeleri yazmak için geliştirilen, Python benzeri bir programlama dilidir. Solidity’ye alternatif olarak daha güvenli ve okunabilir olmayı hedefler. Karmaşıklığı azaltarak hata riskini düşürür ve özellikle finansal akıllı sözleşmelerde tercih edilir. Vyper, Solidity’nin bazı özelliklerini bilinçli olarak desteklemez, böylece saldırı yüzeyini en aza indirir. Ancak, Solidity kadar geniş bir ekosisteme sahip olmadığı için henüz sınırlı kullanım alanlarına sahiptir. ",
    extraResource: "https://docs.vyperlang.org/en/stable/",
  },
  {
    term: "Wallet (Cüzdan)",
    definition:
      "Kripto cüzdanı, kullanıcıların kripto para birimlerini saklamasını, göndermesini ve almasını sağlayan dijital bir araçtır. Yazılım veya donanım olarak kullanılabilir ve özel anahtarlar aracılığıyla kullanıcıların varlıklarına erişim sağlar. Cüzdanlar, aynı zamanda merkeziyetsiz uygulamalarla (DApp'ler) etkileşim için bir giriş kapısıdır. En yaygın türleri sıcak (online) ve soğuk (offline) cüzdanlardır. Blockchain teknolojisi sayesinde cüzdanlar güvenli ve şeffaf bir şekilde işlem yapmayı mümkün kılar. ",
    extraResource:
      "https://bilgiplatformu.btcturk.com/kripto-okur-yazarlik/kriptopara-cuzdani-nedir/",
  },
  {
    term: "Wallet Abstraction (Cüzdan Soyutlama)",
    definition:
      "Cüzdan soyutlama, kullanıcıların farklı cüzdan türleri veya blok zincirler arasında geçiş yapmasını kolaylaştıran bir teknoloji konseptidir. Bu sayede kullanıcılar, karmaşık özel anahtar işlemleri veya teknik detaylarla uğraşmadan, tek bir arayüz üzerinden işlemlerini gerçekleştirebilir. WalletConnect gibi araçlar bu soyutlamayı sağlayarak kullanıcı deneyimini iyileştirir. Hedef, blockchain teknolojisini herkes için erişilebilir ve kullanıcı dostu hale getirmektir. Bu özellik, özellikle Web3 uygulamaları için önem taşır.",
    extraResource: "https://www.youtube.com/watch?v=2sOnium-zZQ",
  },
  {
    term: "Wallet Address (Cüzdan Adresi)",
    definition:
      'Cüzdan adresi, blockchain ağında bir kullanıcıyı veya varlık deposunu temsil eden benzersiz bir tanımlayıcıdır. Genellikle harfler ve sayılardan oluşan bir dizi şeklindedir (örneğin, Ethereum adresleri "0x" ile başlar). Bu adresler, kripto para gönderme ve alma işlemlerinde kullanılır. Cüzdan adresi, sahibinin kimliğini doğrudan açığa çıkarmaz, ancak işlemleri blockchain üzerinde şeffaf bir şekilde görüntülenebilir hale getirir. Güvenlik nedeniyle, özel anahtarlarla karıştırılmamalıdır.',
    extraResource:
      "https://bilgiplatformu.btcturk.com/kripto-okur-yazarlik/cuzdan-adresi-nedir/",
  },
  {
    term: "Wallet Hardware (Donanım Cüzdanı)",
    definition:
      "Donanım cüzdan, kripto paraları saklamak için kullanılan fiziksel bir cihazdır ve internete bağlı olmadığından daha güvenlidir. Bu tür cüzdanlar, özel anahtarları dış müdahalelerden korur ve siber saldırılara karşı dayanıklıdır. Ledger veya Trezor gibi popüler donanım cüzdanlar, özellikle büyük miktarda kripto para saklayan kullanıcılar için önerilir. İşlemleri doğrulamak için cihaz fiziksel olarak kullanılmalıdır, bu da ekstra bir güvenlik katmanı sağlar. Ancak, cihazın kaybedilmesi durumunda seed phrase (yedekleme kelimeleri) kritik öneme sahiptir.",
    extraResource: "https://www.youtube.com/watch?v=WaxzDfJhZvM",
  },
  {
    term: "Wash Trading (Yapay İşlem)",
    definition:
      "Wash trading, bir yatırımcının veya kuruluşun piyasada yanıltıcı bir görüntü oluşturmak amacıyla aynı varlık üzerinde sürekli alım-satım yaptığı bir manipülasyon yöntemidir. Bu işlemler, genellikle işlem hacmini yapay olarak artırarak talep varmış gibi gösterir. Kripto para piyasasında, merkeziyetsiz borsalarda veya NFT platformlarında zaman zaman karşılaşılır. Wash trading, hem yatırımcıları yanıltır hem de piyasa bütünlüğüne zarar verir. Bu nedenle birçok platform ve düzenleyici kurum, bu tür işlemleri engellemek için politikalar geliştirmektedir.",
    extraResource: "https://www.youtube.com/watch?v=0q6bGwOkofU&t=31s",
  },
  {
    term: "Web Assembly (WASM)",
    definition:
      " Web Assembly, modern web tarayıcılarında yüksek performanslı uygulamalar çalıştırmak için tasarlanmış bir ikili kodlama standardıdır. Blockchain alanında, WASM, akıllı kontratları hızlı ve verimli bir şekilde çalıştırmak için kullanılır. Örneğin, Polkadot ve CosmWasm, bu teknolojiyi benimseyerek geliştirilmiş bir ekosistem sağlar. WASM, farklı programlama dillerini desteklediği için geliştiricilere esneklik sunar. Ayrıca, güvenli ve taşınabilir yapısı sayesinde blockchain teknolojisinde hızla popüler hale gelmiştir.",
    extraResource: "https://webassembly.org",
  },
  {
    term: "Web3",
    definition:
      "Web3, internetin merkeziyetsizleşmesini hedefleyen bir konsepttir ve blockchain teknolojisine dayanır. Bu kavram, kullanıcıların kendi verilerinin kontrolünü ele almasını ve dijital varlıklarla doğrudan işlem yapabilmesini sağlar. Merkezi olmayan uygulamalar (DApp'ler), akıllı sözleşmeler ve kripto cüzdanlar, Web3 ekosisteminin temel unsurlarını oluşturur. Web3, özellikle finansal bağımsızlık, sansüre dayanıklılık ve şeffaflık gibi avantajlar sunar. Bu devrim, interneti kullanıcı odaklı bir hale getirmeyi amaçlar.",
    extraResource: [
      " https://tr.wikipedia.org/wiki/Web3 ",
      "https://aws.amazon.com/tr/what-is/web3/",
    ],
  },
  {
    term: "Wrapped Ethereum (wETH - Sarılmış Ethereum)",
    definition:
      "Wrapped Ethereum (wETH), Ethereum'un ERC-20 standardına uygun hale getirilmiş versiyonudur. Ethereum'un kendi coin standardı ERC-20 ile uyumlu olmaması nedeniyle wETH, bu boşluğu doldurur. wETH, DApp'lerde, merkeziyetsiz finans (DeFi) protokollerinde ve NFT pazarlarında kullanılabilir. Ethereum ile birebir aynı değere sahiptir ve her zaman 1 ETH'ye dönüştürülebilir. Bu token, Ethereum ekosistemindeki esnekliği ve işlevselliği artırmak için önemli bir araçtır.",
    extraResource:
      "https://coinmarketcap-com.translate.goog/academy/article/what-is- wrapped-ethereum-weth?_x_tr_sl=en&_x_tr_tl=tr&_x_tr_hl=tr&_x_tr_pto=wa&_x_tr_hist=true",
  },
  {
    term: "Whale (Balina)",
    definition:
      "'Whale' terimi, büyük miktarda kripto para sahibi olan kişileri veya kuruluşları ifade eder. Bu kişiler, genellikle piyasa hareketlerini etkileyebilecek kadar büyük işlemler yapabilir. Balinalar, alım-satım faaliyetleriyle fiyatlarda ani dalgalanmalara yol açabilir ve likidite üzerinde önemli bir rol oynar. Bitcoin, Ethereum gibi büyük kripto paralarda balinaların işlemleri genellikle takip edilir ve piyasa analizlerinde önemli bir göstergedir. Balinaların faaliyetlerini izlemek için kullanılan çeşitli araçlar ve analiz platformları mevcuttur.",
    extraResource: " https://www.getmidas.com/kripto-sozluk/whale-nedir/",
  },
  {
    term: "Whitepaper (Teknik Doküman)",
    definition:
      "Whitepaper, bir blockchain projesinin teknik detaylarını, hedeflerini ve çözüm önerilerini açıklayan resmi bir dokümandır. Projelerin yatırımcılara ve topluluğa şeffaf bir şekilde kendilerini tanıtmaları için kullanılan önemli bir araçtır. Bitcoin’in 2008’de yayımlanan whitepaper’ı, kripto para sektörünün başlangıç noktasını oluşturur. Bu dokümanlar, genellikle teknik bilgiler, kullanım senaryoları ve ekonomik modeller içerir. Potansiyel yatırımcılar, bir projeye katılmadan önce whitepaper’ı detaylı bir şekilde incelemelidir.",
    extraResource: "https://bitcoin.org/bitcoin.pdf",
  },
  {
    term: "Witness Encryption (Şahit Şifreleme)",
    definition:
      "Witness Encryption, belirli bir şart sağlanmadan bir mesajın veya bilginin şifresinin açılamadığı bir kriptografi yöntemidir. Bu teknoloji, blok zincirlerinde şartlara bağlı işlemleri veya gizliliği artıran uygulamaları mümkün kılar. Örneğin, belirli bir işlem onaylanana kadar bir bilgiye erişimin engellenmesini sağlar. Henüz erken aşamada bir teknoloji olsa da, güvenlik ve şeffaflık açısından büyük bir potansiyele sahiptir. Kriptografide bu yöntem, özellikle zero knowledge ispatları (ZKP) ile birlikte kullanılabilir.",
    extraResource: " https://eprint.iacr.org/2013/258.pdf",
  },
  {
    term: "World State (Dünya Durumu)",
    definition:
      "World State, bir blockchain ağındaki tüm verilerin mevcut durumunu ifade eder. Ethereum gibi blockchain ağlarında, tüm hesap bakiyeleri, akıllı sözleşme verileri ve işlemler bu dünya durumu içinde yer alır. Her yeni işlemle birlikte world state güncellenir ve değişiklikler tüm düğümler arasında senkronize edilir. Bu kavram, blockchain'in şeffaflığını ve veri bütünlüğünü sağlar. World State, blockchain ağlarının temel işleyiş mekanizmalarından biridir.",
  },
  {
    term: "WorldCoin",
    definition:
      "WorldCoin, küresel bir dijital kimlik ve finansal katılım sağlama hedefiyle oluşturulmuş bir kripto para projesidir. Kullanıcıların kimliklerini doğrulamak için biyometrik veriler kullanılır ve karşılığında bir miktar WorldCoin token kazanılır. Bu sistem, dijital ekonomiye erişimi olmayan bireyleri dahil etmeyi ve eşitlikçi bir ekonomik düzen oluşturmayı amaçlar. Ancak, biyometrik veri kullanımı nedeniyle gizlilik ve güvenlik endişeleri sıkça tartışılır. WorldCoin, merkeziyetsizlik ve katılımı bir araya getiren yenilikçi bir projedir.",
    extraResource: "https://world.org",
  },
  {
    term: "Wrapped Bitcoin (wBTC - Sarılmış Bitcoin)",
    definition:
      "Wrapped Bitcoin (wBTC), Bitcoin’in ERC-20 standardına uygun olarak Ethereum blockchain’inde kullanılmasını sağlayan bir token türüdür. wBTC, 1:1 oranında Bitcoin tarafından desteklenir ve merkeziyetsiz finans (DeFi) protokollerinde kullanılabilir. wBTC, likiditeyi artırırken Bitcoin sahiplerine Ethereum tabanlı uygulamalara erişim imkanı sunar. Aynı zamanda, akıllı kontratlarla etkileşim kurma olanağı sağlayarak DeFi ekosistemini genişletir. Kullanıcılar, wBTC’yi BTC’ye geri dönüştürebilir ve bu süreç şeffaf bir şekilde takip edilebilir.",
    extraResource: "https://tr.wikipedia.org/wiki/Wrapped_Bitcoin",
  },
  {
    term: "Yield Farming",
    definition:
      "Yield farming, kripto paralardan kazanç elde etmek için varlıkların merkeziyetsiz finans (DeFi) platformlarında kilitlenmesi işlemidir. Kullanıcılar, likidite havuzlarına katkıda bulunarak token ödülleri kazanır. Bu yöntem, genellikle likidite sağlamak veya kredi verme protokollerinde kullanılan varlıklar üzerinden gelir elde etmeyi amaçlar. Ancak, yield farming yüksek kazanç vaat ederken, piyasa oynaklığı ve platform güvenliği nedeniyle riskler içerir. Yeni başlayanlar için önce küçük miktarlarla denemek önerilir.",
    extraResource:
      "https://www.coinbase.com/learn/your-crypto/what-is-yield-farming-and- how-does-it-work",
  },
  {
    term: "Zcash",
    definition:
      "Zcash, gizlilik odaklı bir kripto para birimidir ve kullanıcıların işlemlerini tamamen anonim olarak gerçekleştirmelerine olanak tanır. Zerocoin protokolüne dayanan Zcash, sıfır bilgi ispatları (Zero-Knowledge Proofs) kullanarak işlem göndericisi, alıcısı ve tutarını gizleyebilir. Kullanıcılar, gizlilik odaklı işlemler ile daha şeffaf işlemler arasında seçim yapabilir. Zcash, özellikle finansal gizlilik arayan bireyler ve kuruluşlar arasında popülerdir.",
    extraResource: "https://zcash.readthedocs.io/en/latest/",
  },
  {
    term: "Zero Knowledge – ZK (Sıfır Bilgi)",
    definition:
      "Zero-Knowledge Proof (ZKP), bir tarafın (ispatlayıcı - prover) belirli bir bilgiyi karşı tarafa (doğrulayıcı - verifier) açıklamadan doğrulayabildiği kriptografik bir yöntemdir. Bu teknik, gizliliği koruyarak kimlik doğrulama, blockchain ölçeklenebilirliği ve güvenli işlemler gibi alanlarda kullanılır. Örneğin, bir kullanıcının bir şifreye sahip olduğunu kanıtlaması ancak şifrenin ne olduğunu paylaşmaması mümkündür. ZKP, özellikle zk-SNARK ve zk-STARK gibi türevleri ile blockchain ekosisteminde yaygınlaşmaktadır. Gizlilik odaklı blockchain projeleri, işlemleri doğrularken kullanıcı verilerini korumak için bu yöntemi tercih eder.",
    extraResource: [
      "https://chain.link/education/zero-knowledge-proof-zkp",
      "https://www.youtube.com/watch?v=5qzNe1hk0oY",
    ],
  },
  {
    term: "zk-EVM (Zero-Knowledge Ethereum Virtual Machine)",
    definition:
      "zk-EVM, Ethereum'un akıllı kontrat işleyişini sıfır bilgi ispatlarını (ZKP) kullanarak doğrulayan bir sanal makinedir. Ethereum uyumlu zincirlerin, gizlilik ve ölçeklenebilirlik sorunlarını çözmeyi hedefler. Bu sistem, işlemleri onaylamak için sıfır bilgi ispatları sunar ve daha hızlı ve ucuz bir işlem süreci sağlar. Ethereum geliştiricilerinin mevcut kodlarını büyük değişiklikler yapmadan kullanmalarına olanak tanır. zk-EVM, özellikle zk-Rollups gibi Layer 2 çözümleriyle popülerdir.",
    extraResource: "https://x.com/i/broadcasts/1jMJgkgPjdjJL",
  },
  {
    term: "ZK-SNARKs (Zero-Knowledge Succinct Non-Interactive Argument of Knowledge)",
    definition:
      "ZK-snarks, bir bilginin doğruluğunu kanıtlamak için kullanılan, sıfır bilgiye dayalı ve kısa bir kanıt mekanizmasıdır. Bu yöntem, kanıt sunarken ispatçının bilgi detaylarını paylaşmasına gerek kalmadan çalışır. Özellikle gizlilik odaklı blockchain projelerinde, işlemleri doğrulamak için kullanılır. ZK-snarks, hızlı işlem doğrulama ve düşük veri boyutu avantajı sayesinde ölçeklenebilirlik sağlar. Ancak, ilk kurulum aşamasında güvene dayalı bir parametre gereksinimi vardır. Yine de, zk-SNARKs modern kriptografinin en etkili araçlarından biri olarak kabul edilir.",
    extraResource: "https://www.youtube.com/watch?v=Rku9pABMLKI",
  },
  {
    term: "zk-STARK (Zero-Knowledge Scalable Transparent Argument of Knowledge)",
    definition:
      "zk-STARK, ZK-snarks’a benzer şekilde sıfır bilgi ispatı sunan, ancak daha ölçeklenebilir ve güvenli bir kanıt protokolüdür. Bu yöntem, merkezi bir güvene dayalı başlangıç parametresi gerektirmez ve tamamen şeffaftır. zk-STARK, büyük veri setlerini daha hızlı işleme kapasitesine sahiptir ve blockchain uygulamalarında şeffaflık ve gizliliği artırır. Özellikle veri yoğun işlemlerin doğrulanmasında öne çıkar. Güvenlik, verimlilik ve şeffaflık nedeniyle blockchain dünyasında hızla popülerlik kazanmıştır.",
    extraResource:
      "https://kayprasla.medium.com/on-scalability-transparency-and-argument-of-knowledge-zk-stark-f3366922b668",
  },
  {
    term: "zkRollups (Zero-Knowledge Rollups)",
    definition:
      "zkRollups, sıfır bilgi ispatlarını kullanarak Ethereum gibi blockchain ağlarının ölçeklenebilirliğini artırmayı hedefleyen bir Layer 2 çözümüdür. İşlemleri zincir dışında gruplandırarak doğrulama sağlar ve yalnızca bu grupların kanıtını ana zincire gönderir. Bu sayede, işlem maliyetleri düşerken ağ tıkanıklığı azalır. zkRollups, güvenlikten ödün vermeden daha yüksek işlem hızları sunar. Özellikle DeFi ve NFT platformlarında tercih edilen bir teknolojidir.",
    extraResource:
      "https://www-identity-com.translate.goog/what-are-zk-rollups-scalability-and-privacy-in-blockchain/?_x_tr_sl=en&_x_tr_tl=tr&_x_tr_hl=tr&_x_tr_pto=wa",
  },
];

export default dictionaryTerms;
