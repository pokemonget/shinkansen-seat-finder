// モック新幹線データ
export interface Train {
  id: string;
  name: string;
  departure: string;
  arrival: string;
  date: string;
  time: string;
  seats: Seat[];
}

export interface Seat {
  row: number;
  seatA: boolean; // true = occupied, false = available
  seatB: boolean;
  seatC: boolean;
  seatD: boolean;
}

// 利用可能な駅
export const stations = ['東京', '名古屋', '京都', '大阪', '広島'];

// 利用可能な日付
export const availableDates = ['2026-04-23', '2026-04-24', '2026-04-25'];

// モック座席データ生成関数
const generateSeats = (seed: number): Seat[] => {
  const seats: Seat[] = [];
  for (let i = 1; i <= 10; i++) {
    const hash = (seed * i * 12345) % 256;
    seats.push({
      row: i,
      seatA: hash % 3 === 0,
      seatB: hash % 3 === 1,
      seatC: (hash + 1) % 3 === 0,
      seatD: (hash + 1) % 3 === 1,
    });
  }
  return seats;
};

export const mockTrains: Train[] = [
  // 2026-04-23
  {
    id: 'N225',
    name: 'のぞみ225号',
    departure: '東京',
    arrival: '大阪',
    date: '2026-04-23',
    time: '08:00',
    seats: generateSeats(1),
  },
  {
    id: 'N226',
    name: 'のぞみ226号',
    departure: '東京',
    arrival: '京都',
    date: '2026-04-23',
    time: '09:30',
    seats: generateSeats(2),
  },
  {
    id: 'H201',
    name: 'ひかり201号',
    departure: '東京',
    arrival: '広島',
    date: '2026-04-23',
    time: '10:00',
    seats: generateSeats(3),
  },
  {
    id: 'N227',
    name: 'のぞみ227号',
    departure: '東京',
    arrival: '大阪',
    date: '2026-04-23',
    time: '12:00',
    seats: generateSeats(4),
  },
  // 2026-04-24
  {
    id: 'N228',
    name: 'のぞみ228号',
    departure: '東京',
    arrival: '名古屋',
    date: '2026-04-24',
    time: '07:30',
    seats: generateSeats(5),
  },
  {
    id: 'N229',
    name: 'のぞみ229号',
    departure: '名古屋',
    arrival: '大阪',
    date: '2026-04-24',
    time: '08:15',
    seats: generateSeats(6),
  },
  {
    id: 'H202',
    name: 'ひかり202号',
    departure: '東京',
    arrival: '広島',
    date: '2026-04-24',
    time: '11:00',
    seats: generateSeats(7),
  },
  // 2026-04-25
  {
    id: 'N230',
    name: 'のぞみ230号',
    departure: '東京',
    arrival: '京都',
    date: '2026-04-25',
    time: '09:00',
    seats: generateSeats(8),
  },
  {
    id: 'N231',
    name: 'のぞみ231号',
    departure: '京都',
    arrival: '大阪',
    date: '2026-04-25',
    time: '09:45',
    seats: generateSeats(9),
  },
  {
    id: 'H203',
    name: 'ひかり203号',
    departure: '東京',
    arrival: '広島',
    date: '2026-04-25',
    time: '13:00',
    seats: generateSeats(10),
  },
  {
    id: 'N225_old',
    name: 'のぞみ225号',
    departure: '東京',
    arrival: '大阪',
    date: '2026-04-25',
    time: '14:30',
    seats: generateSeats(11),
  },
];
