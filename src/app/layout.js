import Link from 'next/link'
import "./globals.css";

export const metadata = {
  title: "株式会社サンプル",
  description: "株式会社サンプルのコーポレートサイト",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-gray-50">

        {/* ヘッダー：全ページ共通 */}
        <header className="bg-blue-600 text-white p-4 shadow-md">
          <div className="max-w-5xl mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">
              <Link href="/">株式会社サンプル</Link>
            </h1>
            <nav className="flex gap-8">
              <Link href="/" className="hover:opacity-70">トップ</Link>
              <Link href="/about" className="hover:opacity-70">会社概要</Link>
              <Link href="/members" className="hover:opacity-70">メンバー</Link>
            </nav>
          </div>
        </header>

        {/* 各ページの内容 */}
        <main>{children}</main>

        {/* フッター：全ページ共通 */}
        <footer className="bg-gray-800 text-white p-8 mt-auto">
          <div className="max-w-5xl mx-auto text-center">
            <p>© 2024 株式会社サンプル</p>
          </div>
        </footer>

      </body>
    </html>
  )
}