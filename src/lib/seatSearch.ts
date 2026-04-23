import { Train, Seat } from './mockData';

export interface AvailablePair {
  row: number;
  seats: [string, string]; // e.g., ['A', 'B']
  trainId: string;
  trainName: string;
  date: string;
  time: string;
  departure: string;
  arrival: string;
}

/**
 * 新幹線で最前列（1行目）の隣り合った2席が空いている場所を検索（日付と区間で絞込み）
 */
export function findAvailableAdjacentSeats(
  trains: Train[],
  date?: string,
  departure?: string,
  arrival?: string
): AvailablePair[] {
  const results: AvailablePair[] = [];

  for (const train of trains) {
    // 日付でフィルタ
    if (date && train.date !== date) continue;

    // 出発地でフィルタ
    if (departure && train.departure !== departure) continue;

    // 到着地でフィルタ
    if (arrival && train.arrival !== arrival) continue;

    for (const seat of train.seats) {
      // 最前列（1行目）のみを検索
      if (seat.row !== 1) continue;

      // A-B が空いているか
      if (!seat.seatA && !seat.seatB) {
        results.push({
          row: seat.row,
          seats: ['A', 'B'],
          trainId: train.id,
          trainName: train.name,
          date: train.date,
          time: train.time,
          departure: train.departure,
          arrival: train.arrival,
        });
      }
      // D-E が空いているか
      if (!seat.seatD && !seat.seatE) {
        results.push({
          row: seat.row,
          seats: ['D', 'E'],
          trainId: train.id,
          trainName: train.name,
          date: train.date,
          time: train.time,
          departure: train.departure,
          arrival: train.arrival,
        });
      }
    }
  }

  // 日付と時間でソート
  return results.sort((a, b) => {
    if (a.date !== b.date) {
      return a.date.localeCompare(b.date);
    }
    return a.time.localeCompare(b.time);
  });
}
