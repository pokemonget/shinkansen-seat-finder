// モック新幹線データ
export interface Train {
  id: string;
  name: string;
  departure: string;
  arrival: string;
  date: string;
  seats: Seat[];
}

export interface Seat {
  row: number;
  seatA: boolean; // true = occupied, false = available
  seatB: boolean;
  seatC: boolean;
  seatD: boolean;
}

export const mockTrains: Train[] = [
  {
    id: 'N225',
    name: 'のぞみ225号',
    departure: '東京',
    arrival: '大阪',
    date: '2026-04-23',
    seats: [
      { row: 1, seatA: true, seatB: false, seatC: false, seatD: true },
      { row: 2, seatA: false, seatB: false, seatC: true, seatD: false },
      { row: 3, seatA: true, seatB: true, seatC: false, seatD: true },
      { row: 4, seatA: false, seatB: false, seatC: false, seatD: false },
      { row: 5, seatA: true, seatB: false, seatC: false, seatD: true },
      { row: 6, seatA: false, seatB: false, seatC: true, seatD: true },
      { row: 7, seatA: true, seatB: true, seatC: false, seatD: false },
      { row: 8, seatA: false, seatB: false, seatC: false, seatD: false },
      { row: 9, seatA: true, seatB: false, seatC: true, seatD: false },
      { row: 10, seatA: false, seatB: false, seatC: false, seatD: true },
    ],
  },
  {
    id: 'N226',
    name: 'のぞみ226号',
    departure: '東京',
    arrival: '京都',
    date: '2026-04-23',
    seats: [
      { row: 1, seatA: false, seatB: false, seatC: true, seatD: false },
      { row: 2, seatA: true, seatB: false, seatC: false, seatD: true },
      { row: 3, seatA: false, seatB: false, seatC: false, seatD: false },
      { row: 4, seatA: true, seatB: true, seatC: true, seatD: false },
      { row: 5, seatA: false, seatB: false, seatC: true, seatD: true },
      { row: 6, seatA: true, seatB: false, seatC: false, seatD: false },
      { row: 7, seatA: false, seatB: false, seatC: false, seatD: true },
      { row: 8, seatA: true, seatB: false, seatC: true, seatD: false },
      { row: 9, seatA: false, seatB: false, seatC: false, seatD: false },
      { row: 10, seatA: true, seatB: true, seatC: false, seatD: true },
    ],
  },
  {
    id: 'H201',
    name: 'ひかり201号',
    departure: '東京',
    arrival: '広島',
    date: '2026-04-23',
    seats: [
      { row: 1, seatA: false, seatB: false, seatC: false, seatD: true },
      { row: 2, seatA: false, seatB: false, seatC: false, seatD: false },
      { row: 3, seatA: true, seatB: false, seatC: false, seatD: true },
      { row: 4, seatA: false, seatB: false, seatC: true, seatD: false },
      { row: 5, seatA: true, seatB: true, seatC: false, seatD: false },
      { row: 6, seatA: false, seatB: false, seatC: false, seatD: false },
      { row: 7, seatA: true, seatB: false, seatC: true, seatD: true },
      { row: 8, seatA: false, seatB: false, seatC: false, seatD: false },
      { row: 9, seatA: true, seatB: false, seatC: false, seatD: true },
      { row: 10, seatA: false, seatB: false, seatC: false, seatD: false },
    ],
  },
];
