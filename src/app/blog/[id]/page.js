import { client } from '@/libs/microcms'

export const revalidate = 60 // 60秒ごとに更新（ISR）

export default async function BlogDetailPage({ params }) {
  const { id } = await params

  const post = await client.get({
    endpoint: 'blogs',
    contentId: id,
  })

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 mb-8 text-sm">
        {post.publishedAt?.slice(0, 10)}
      </p>
      <div className="bg-white rounded-xl shadow-sm p-8">
        <p>{post.content}</p>
      </div>
    </div>
  )
}