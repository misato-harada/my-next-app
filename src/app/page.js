import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">トップページ</h1>

      <div className="flex gap-4">
        <Link
          href="/about"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition-colors duration-300"
        >
          会社概要へ
        </Link>

        <Link
          href="/members"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded transition-colors duration-300"
        >
          メンバー紹介へ
        </Link>
      </div>
    </div>
  )
}