import { Train, Seat } from './mockData';

export interface AvailablePair {
  row: number;
  seats: [string, string]; // e.g., ['A', 'B']
  trainId: string;
  trainName: string;
}

/**
 * 新幹線で最前列（1行目）の隣り合った2席が空いている場所を検索
 */
export function findAvailableAdjacentSeats(trains: Train[]): AvailablePair[] {
  const results: AvailablePair[] = [];

  for (const train of trains) {
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
        });
      }
      // C-D が空いているか
      if (!seat.seatC && !seat.seatD) {
        results.push({
          row: seat.row,
          seats: ['C', 'D'],
          trainId: train.id,
          trainName: train.name,
        });
      }
    }
  }

  // 新幹線IDでソート
  return results.sort((a, b) => {
    return a.trainId.localeCompare(b.trainId);
  });
}
