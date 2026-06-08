import { client } from '@/libs/microcms'
import Link from 'next/link'

export const revalidate = 60 // 60秒ごとに更新（ISR）

export default async function BlogPage() {
  const data = await client.get({
    endpoint: 'blogs',
  })

  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">ブログ</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.contents.map((post) => (
          <Link href={`/blog/${post.id}`} key={post.id}>
            <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6">
              <h2 className="text-xl font-bold">{post.title}</h2>
              <p className="text-gray-500 mt-2 text-sm">
                {post.publishedAt?.slice(0, 10)}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}