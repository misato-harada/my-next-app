import Link from 'next/link'

export default function HomePage() {
  return (
    <div>
      {/* ヒーローセクション */}
      <div className="bg-blue-600 text-white py-24 px-8 text-center">
        <h1 className="text-5xl font-bold mb-6 animate-fade-in">
          株式会社サンプル
        </h1>
        <p className="text-xl mb-8 opacity-90">
          私たちは最高のサービスを提供します
        </p>
        <Link
          href="/members"
          className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-50 transition-colors duration-300 inline-block"
        >
          メンバーを見る
        </Link>
      </div>

      {/* サービスセクション */}
      <div className="max-w-5xl mx-auto py-16 px-8">
        <h2 className="text-3xl font-bold text-center mb-12">サービス</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Webデザイン', desc: '美しいデザインを提供します' },
            { title: 'システム開発', desc: '高品質なシステムを開発します' },
            { title: 'コンサルティング', desc: '最適な戦略をご提案します' },
          ].map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-8 text-center hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-500">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}