'use client';

import { useState } from 'react';
import { mockTrains, stations, availableDates } from '@/lib/mockData';
import { findAvailableAdjacentSeats, AvailablePair } from '@/lib/seatSearch';

export default function Home() {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedDeparture, setSelectedDeparture] = useState<string>('');
  const [selectedArrival, setSelectedArrival] = useState<string>('');
  const [results, setResults] = useState<AvailablePair[]>([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = () => {
    const availableSeats = findAvailableAdjacentSeats(
      mockTrains,
      selectedDate || undefined,
      selectedDeparture || undefined,
      selectedArrival || undefined
    );
    setResults(availableSeats);
    setSearched(true);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* ヘッダー */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              🚄 新幹線 隣り合った2席検索
            </h1>
            <p className="text-gray-600">
              新幹線で隣り合った2席が空いている座席を検索します
            </p>
          </div>

          {/* 検索フォーム */}
          <div className="mb-8 space-y-4">
            {/* 日付選択 */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                📅 日付を選択
              </label>
              <select
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">全ての日付</option>
                {availableDates.map((date) => (
                  <option key={date} value={date}>
                    {date}
                  </option>
                ))}
              </select>
            </div>

            {/* 出発地選択 */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                🚉 出発地を選択
              </label>
              <select
                value={selectedDeparture}
                onChange={(e) => setSelectedDeparture(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">全ての出発地</option>
                {stations.map((station) => (
                  <option key={station} value={station}>
                    {station}
                  </option>
                ))}
              </select>
            </div>

            {/* 到着地選択 */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                🎯 到着地を選択
              </label>
              <select
                value={selectedArrival}
                onChange={(e) => setSelectedArrival(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">全ての到着地</option>
                {stations.map((station) => (
                  <option key={station} value={station}>
                    {station}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* 検索ボタン */}
          <button
            onClick={handleSearch}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 mb-8"
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
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
                  <p className="text-yellow-800 text-lg">
                    条件に合う座席がありません
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {results.map((result, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 rounded-lg p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h3 className="text-lg font-bold text-gray-800">
                            {result.trainName}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {result.trainId}
                          </p>
                          <p className="text-sm text-gray-600 mt-1">
                            {result.departure} → {result.arrival}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-semibold text-gray-700">
                            {result.date}
                          </div>
                          <div className="text-2xl font-bold text-green-600">
                            {result.time}
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-green-200">
                        <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-lg font-bold">
                          最前列 {result.seats[0]}-{result.seats[1]}席
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
              実際の空席情報は公式ウェブサイトをご確認ください。
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
