import { Restaurant, mockRestaurants } from './mockData';

export interface SearchResult extends Restaurant {
  urgency: 'low' | 'medium' | 'high'; // 待ち時間の緊急度
}

/**
 * 飲食店を地域とジャンルで検索
 */
export function searchRestaurants(
  region?: string,
  genre?: string
): SearchResult[] {
  let results = [...mockRestaurants];

  // 地域でフィルタ
  if (region && region !== '') {
    results = results.filter(r => r.region === region);
  }

  // ジャンルでフィルタ
  if (genre && genre !== '') {
    results = results.filter(r => r.genre === genre);
  }

  // 待ち時間の緊急度を計算
  const searchResults: SearchResult[] = results.map(r => {
    let urgency: 'low' | 'medium' | 'high' = 'low';
    if (r.waitTime >= 60) {
      urgency = 'high';
    } else if (r.waitTime >= 30) {
      urgency = 'medium';
    }

    return {
      ...r,
      urgency,
    };
  });

  // 待ち時間でソート（少ない順）
  return searchResults.sort((a, b) => a.waitTime - b.waitTime);
}
