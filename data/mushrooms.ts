import { Mushroom, Season } from "@/lib/types";

export const mushrooms: Mushroom[] = [
  {
    id: "shiitake",
    name: "しいたけ",
    scientificName: "Lentinula edodes",
    edible: true,
    description: "日本で最も一般的に栽培されているきのこの一つ。香りが強く、肉厚で風味豊かな味わいが特徴です。",
    habitat: "広葉樹（主にクヌギ、コナラなど）の倒木や切り株",
    season: ["春", "秋"],
    characteristics: [
      "傘は茶色から濃い茶色",
      "若いうちは傘の縁が内側に巻いている",
      "表面にひび割れのような模様がある",
      "柄は太く、中心より少しずれている"
    ],
    similarSpecies: [
      {
        name: "カワラタケ",
        difference: "カワラタケは硬く、木質化しており、棚状に生える",
        dangerous: false
      }
    ],
    imageUrl: "https://images.pexels.com/photos/4417395/pexels-photo-4417395.jpeg"
  },
  {
    id: "enokitake",
    name: "えのきたけ",
    scientificName: "Flammulina velutipes",
    edible: true,
    description: "細長い茎と小さな傘が特徴的なきのこ。栽培されているものは白色で、野生のものは茶色をしています。",
    habitat: "広葉樹（主にエノキ）の倒木や切り株",
    season: ["秋", "冬"],
    characteristics: [
      "栽培品は白色で細長い",
      "野生種は茶色の傘を持つ",
      "群生することが多い",
      "柄は細長く弾力がある"
    ],
    similarSpecies: [
      {
        name: "クリタケ",
        difference: "クリタケは傘が栗色で、えのきたけより肉厚",
        dangerous: false
      },
      {
        name: "スギヒラタケ",
        difference: "スギヒラタケは平たい傘を持ち、現在は食中毒の危険があるとされている",
        dangerous: true
      }
    ],
    imageUrl: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg"
  },
  {
    id: "shimeji",
    name: "しめじ",
    scientificName: "Lyophyllum shimeji",
    edible: true,
    description: "傘の色は茶色から灰色で、柄は白っぽい。一般的に市販されているのはブナシメジです。",
    habitat: "ブナ林の地上",
    season: ["秋"],
    characteristics: [
      "傘の中心が盛り上がり、周辺が下に湾曲している",
      "ブナシメジは群生する",
      "傘は滑らかで湿り気がある",
      "柄は細長く白っぽい"
    ],
    similarSpecies: [
      {
        name: "クセジメジ",
        difference: "クセジメジは苦味があり、食用には向かない",
        dangerous: false
      }
    ],
    imageUrl: "https://images.pexels.com/photos/13452632/pexels-photo-13452632.jpeg"
  },
  {
    id: "maitake",
    name: "まいたけ",
    scientificName: "Grifola frondosa",
    edible: true,
    description: "多くの薄い傘が重なり合い、舞い踊るような形をしていることから名付けられました。旨味が強く、食用として人気があります。",
    habitat: "広葉樹（主にミズナラ、コナラ）の根元や切り株",
    season: ["秋"],
    characteristics: [
      "灰色から茶色の波打つような傘が重なり合う",
      "一つの根元から多数の傘が出る",
      "傘は薄く、縁はウェーブ状",
      "全体的に舞うような外観"
    ],
    similarSpecies: [
      {
        name: "カオリマイタケ",
        difference: "カオリマイタケはまいたけより小型で、香りが強い",
        dangerous: false
      }
    ],
    imageUrl: "https://images.pexels.com/photos/13693055/pexels-photo-13693055.jpeg"
  },
  {
    id: "eringi",
    name: "エリンギ",
    scientificName: "Pleurotus eryngii",
    edible: true,
    description: "肉厚で歯ごたえがあり、風味が豊かなきのこ。主に栽培されており、スーパーでよく見かけます。",
    habitat: "栽培種（野生ではセリ科植物の根に寄生）",
    season: ["通年（栽培）"],
    characteristics: [
      "傘は円形から不規則な形で、平たい",
      "色は淡いクリーム色から茶色",
      "柄は太くてしっかりしている",
      "肉は白く、厚みがある"
    ],
    similarSpecies: [
      {
        name: "ヒラタケ",
        difference: "ヒラタケは傘が薄く、柄が横についていることが多い",
        dangerous: false
      }
    ],
    imageUrl: "https://images.pexels.com/photos/2255825/pexels-photo-2255825.jpeg"
  },
  {
    id: "nameko",
    name: "なめこ",
    scientificName: "Pholiota microspora",
    edible: true,
    description: "表面にぬめりがあるきのこで、味噌汁や煮物に使われることが多いです。",
    habitat: "広葉樹（主にブナ科の木）の倒木や切り株",
    season: ["秋"],
    characteristics: [
      "傘は橙褐色で粘液に覆われている",
      "若いうちは傘の縁がカサの内側に巻き込まれている",
      "柄は細長く、上部に膜の痕跡がある",
      "群生することが多い"
    ],
    similarSpecies: [
      {
        name: "ニガクリタケ",
        difference: "ニガクリタケは強い苦味があり、中毒の恐れがある",
        dangerous: true
      }
    ],
    warning: "野生のなめこに似た毒きのこがあるので注意が必要です。",
    imageUrl: "https://images.pexels.com/photos/17030097/pexels-photo-17030097/free-photo-of-selective-focus-photo-of-mushroom.jpeg"
  },
  {
    id: "kikurage",
    name: "きくらげ",
    scientificName: "Auricularia auricula-judae",
    edible: true,
    description: "耳のような形をしたきのこで、乾燥すると硬くなりますが、水で戻すと柔らかくなります。中華料理によく使われます。",
    habitat: "広葉樹（特にニセアカシア）の枯れ木や枝",
    season: ["春", "夏", "秋"],
    characteristics: [
      "耳の形に似た不規則な形状",
      "ゼラチン質の柔らかい肉質",
      "色は茶色から黒褐色",
      "表面はビロード状で、裏面は滑らか"
    ],
    similarSpecies: [
      {
        name: "アラゲキクラゲ",
        difference: "アラゲキクラゲはきくらげより大型で、表面に毛がある",
        dangerous: false
      }
    ],
    imageUrl: "https://images.pexels.com/photos/17021137/pexels-photo-17021137/free-photo-of-white-fungus.jpeg"
  },
  {
    id: "matsutake",
    name: "まつたけ",
    scientificName: "Tricholoma matsutake",
    edible: true,
    description: "「松茸」とも書き、独特の芳香を持つ高級きのこ。赤松林に自生し、秋の味覚として珍重されます。",
    habitat: "赤松林の地中",
    season: ["秋"],
    characteristics: [
      "傘は若いうちは丸く、成長すると開く",
      "色は茶色から赤褐色",
      "柄は太く白っぽい",
      "特徴的な芳香がある"
    ],
    similarSpecies: [
      {
        name: "カラマツシメジ",
        difference: "カラマツシメジは松茸ほどの強い香りはなく、カラマツ林に生える",
        dangerous: false
      },
      {
        name: "ニセマツタケ",
        difference: "ニセマツタケは松茸に似ているが香りが異なり、中毒の恐れがある",
        dangerous: true
      }
    ],
    warning: "高価なため、似た毒きのこと間違える危険性があります。専門家の判断を仰ぐことをお勧めします。",
    imageUrl: "https://images.pexels.com/photos/4110401/pexels-photo-4110401.jpeg"
  },
  {
    id: "hiratake",
    name: "ひらたけ",
    scientificName: "Pleurotus ostreatus",
    edible: true,
    description: "「平茸」とも書き、傘が平たいことが名前の由来。風味がよく、食用として人気があります。",
    habitat: "広葉樹の倒木や切り株",
    season: ["秋", "冬"],
    characteristics: [
      "傘は平たく貝殻状",
      "色は灰色から茶色",
      "柄は短く、横についていることが多い",
      "複数重なって生える"
    ],
    similarSpecies: [
      {
        name: "ウスヒラタケ",
        difference: "ウスヒラタケはひらたけより薄く、白っぽい",
        dangerous: false
      },
      {
        name: "スギヒラタケ",
        difference: "スギヒラタケは現在、急性脳症を引き起こす可能性があるとして注意喚起されている",
        dangerous: true
      }
    ],
    warning: "スギヒラタケなど、似た見た目で危険なきのこが存在します。",
    imageUrl: "https://images.pexels.com/photos/7271769/pexels-photo-7271769.jpeg"
  },
  {
    id: "yamabushitake",
    name: "やまぶしたけ",
    scientificName: "Hericium erinaceus",
    edible: true,
    description: "「山伏茸」とも書き、白い棘状の突起が特徴的なきのこ。「ホワイトライオンマッシュルーム」とも呼ばれ、健康食品としても注目されています。",
    habitat: "広葉樹（主にブナ、ナラ）の生木や枯れ木",
    season: ["秋"],
    characteristics: [
      "白色の棘状の突起が特徴",
      "全体が丸みを帯びた塊状",
      "成長すると長い棘が下に垂れ下がる",
      "肉質は柔らかく白い"
    ],
    similarSpecies: [
      {
        name: "サンゴハリタケ",
        difference: "サンゴハリタケはやまぶしたけに似ているが、棘が短く、枝分かれが多い",
        dangerous: false
      }
    ],
    imageUrl: "https://images.pexels.com/photos/5273095/pexels-photo-5273095.jpeg"
  }
];

export const getMushroomById = (id: string): Mushroom | undefined => {
  return mushrooms.find(mushroom => mushroom.id === id);
};

export const getRandomMushroom = (): Mushroom => {
  const randomIndex = Math.floor(Math.random() * mushrooms.length);
  return mushrooms[randomIndex];
};

export const getSeasonalMushrooms = (season: Season): Mushroom[] => {
  return mushrooms.filter(mushroom => mushroom.season.includes(season));
};