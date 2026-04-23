'use client';

import { useState } from 'react';
import { regions, genres } from '@/lib/mockData';
import { searchRestaurants, SearchResult } from '@/lib/restaurantSearch';

export default function Home() {
  const [selectedRegion, setSelectedRegion] = useState<string>('');
  const [selectedGenre, setSelectedGenre] = useState<string>('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = () => {
    const foundRestaurants = searchRestaurants(
      selectedRegion || undefined,
      selectedGenre || undefined
    );
    setResults(foundRestaurants);
    setSearched(true);
  };

  const getUrgencyColor = (urgency: 'low' | 'medium' | 'high') => {
    switch (urgency) {
      case 'low':
        return 'bg-green-100 text-green-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'high':
        return 'bg-red-100 text-red-800';
    }
  };

  const getUrgencyLabel = (urgency: 'low' | 'medium' | 'high') => {
    switch (urgency) {
      case 'low':
        return '空いている';
      case 'medium':
        return 'やや混雑';
      case 'high':
        return '混雑中';
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100 p-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* ヘッダー */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              🍜 飲食店待ち時間リアルタイム検索
            </h1>
            <p className="text-gray-600">
              全国の飲食店の待ち時間をリアルタイムで検索できます
            </p>
          </div>

          {/* 検索フォーム */}
          <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* 地域選択 */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                📍 地域を選択
              </label>
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="">全ての地域</option>
                {regions.map((region) => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))}
              </select>
            </div>

            {/* ジャンル選択 */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                🍱 ジャンルを選択
              </label>
              <select
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="">全てのジャンル</option>
                {genres.map((genre) => (
                  <option key={genre} value={genre}>
                    {genre}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* 検索ボタン */}
          <button
            onClick={handleSearch}
            className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 mb-8"
          >
            検索開始
          </button>

          {/* 結果表示 */}
          {searched && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                検索結果: {results.length}件
              </h2>

              {results.length === 0 ? (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
                  <p className="text-blue-800 text-lg">
                    条件に合う飲食店がありません
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {results.map((result) => (
                    <div
                      key={result.id}
                      className="bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-500 rounded-lg p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                        <div>
                          <h3 className="text-lg font-bold text-gray-800">
                            {result.name}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {result.genre}
                          </p>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-semibold text-gray-700 mb-1">
                            待ち時間
                          </div>
                          <div className={`text-3xl font-bold ${
                            result.waitTime === 0 ? 'text-green-600' :
                            result.waitTime < 30 ? 'text-yellow-600' :
                            'text-red-600'
                          }`}>
                            {result.waitTime}分
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-semibold text-gray-700 mb-1">
                            混雑状況
                          </div>
                          <div className={`inline-block px-3 py-1 rounded-full text-sm font-bold ${getUrgencyColor(result.urgency)}`}>
                            {getUrgencyLabel(result.urgency)}
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-semibold text-gray-700 mb-1">
                            評価
                          </div>
                          <div className="text-2xl font-bold text-blue-600">
                            ⭐ {result.rating}
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-orange-200 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <p className="text-gray-600">🏢 所在地</p>
                          <p className="font-semibold text-gray-800">{result.region}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">👥 収容人数</p>
                          <p className="font-semibold text-gray-800">
                            {result.currentCustomers}/{result.capacity}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-600">📞 電話</p>
                          <p className="font-semibold text-gray-800 text-xs">{result.phone}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">🕐 更新</p>
                          <p className="font-semibold text-gray-800">{result.lastUpdated}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* 再検索ボタン */}
              <button
                onClick={handleSearch}
                className="w-full mt-8 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-lg transition-all duration-200"
              >
                再検索
              </button>
            </div>
          )}

          {/* フッター */}
          <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-600">
            <p className="text-sm">
              本サービスはデモンストレーション用です。
              <br />
              実際の待ち時間はGoogleマップやお店の公式情報をご確認ください。
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
