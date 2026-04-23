// 飲食店待ち時間検索データ
export interface Restaurant {
  id: string;
  name: string;
  genre: string; // ラーメン、焼肉、カレー、寿司など
  region: string; // 地域（東京、大阪、福岡など）
  address: string;
  waitTime: number; // 待ち時間（分）
  capacity: number; // 収容人数
  currentCustomers: number; // 現在の客数
  operatingHours: string; // 営業時間
  rating: number; // 評価 (0-5)
  phone: string;
  lastUpdated: string; // 最終更新時刻
}

// 利用可能な地域
export const regions = [
  '東京', '神奈川', '埼玉', '千葉',
  '大阪', '京都', '兵庫',
  '愛知', '福岡', '北海道'
];

// 利用可能なジャンル
export const genres = [
  'ラーメン', '焼肉', 'カレー', '寿司', 'うどん',
  'そば', 'パスタ', 'ハンバーガー', 'イタリアン', '中華',
  'タイ料理', 'インド料理', 'フレンチ', '居酒屋', '定食'
];

// モック飲食店データ生成関数
const generateRestaurants = (): Restaurant[] => {
  const restaurants: Restaurant[] = [];
  const restaurantNames: { [key: string]: string[] } = {
    'ラーメン': ['らーめん太郎', '味噌ラーメン家', 'とんこつ伝説', '醤油らーめん'],
    '焼肉': ['焼肉きんぐ', '牛角', '赤いれんが', '和牛レストラン'],
    'カレー': ['カレーハウスCoCo壱番屋', 'スパイスキッチン', 'インドカレーラージ', 'カレー本舗'],
    '寿司': ['寿司ザンマイ', '回転寿司屋台', '握り寿司職人', '海鮮丼スタジアム'],
    'うどん': ['はなまるうどん', 'うどん茶屋', '讃岐うどん', 'うどん本家'],
    'そば': ['そば処やぶ', '蕎麦居酒屋', 'そばの名店', '十割蕎麦'],
    'パスタ': ['パスタハウス', 'イタリアンキッチン', 'パスタの館', 'スパゲッティ本家'],
    'ハンバーガー': ['ハンバーグファクトリー', 'バーガーキング', 'フレッシュバーガー', 'ジューシーバーガー'],
  };

  const genreArray = Object.keys(restaurantNames);
  const regionArray = regions;

  let id = 1;
  for (const genre of genreArray) {
    for (const region of regionArray.slice(0, 6)) {
      const names = restaurantNames[genre];
      const name = names[Math.floor(Math.random() * names.length)];
      const waitTime = Math.floor(Math.random() * 120); // 0-120分
      const capacity = 20 + Math.floor(Math.random() * 80);
      const currentCustomers = Math.floor(Math.random() * capacity);
      const rating = Math.floor(Math.random() * 20) / 4 + 2.5; // 2.5-5.0

      restaurants.push({
        id: `R${id}`,
        name: `${name} ${region}`,
        genre,
        region,
        address: `${region}都市 〇〇区〇〇町`,
        waitTime,
        capacity,
        currentCustomers,
        operatingHours: '11:00-23:00',
        rating: Math.round(rating * 10) / 10,
        phone: `03-XXXX-${String(id).padStart(4, '0')}`,
        lastUpdated: new Date(Date.now() - Math.random() * 600000).toISOString().slice(11, 16),
      });
      id++;
    }
  }

  return restaurants;
};

export const mockRestaurants = generateRestaurants();
