'use client';

import { useState } from 'react';
import { mockTrains } from '@/lib/mockData';
import { findAvailableAdjacentSeats, AvailablePair } from '@/lib/seatSearch';

export default function Home() {
  const [results, setResults] = useState<AvailablePair[]>([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = () => {
    const availableSeats = findAvailableAdjacentSeats(mockTrains);
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
                    隣り合った2席が空いている座席はありません
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {results.map((result, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 rounded-lg p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">
                            {result.trainName}
                          </h3>
                          <p className="text-gray-600">
                            {result.trainId}
                          </p>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-green-600">
                            {result.row}行目
                          </div>
                          <div className="text-xl font-semibold text-green-600">
                            {result.seats[0]}-{result.seats[1]}席
                          </div>
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
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
