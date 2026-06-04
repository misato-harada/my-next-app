'use client'

import { useState } from 'react'

const members = [
  { id: 1, name: '原田', role: 'デザイナー', image: 'https://picsum.photos/seed/1/400/300' },
  { id: 2, name: '田中', role: 'エンジニア', image: 'https://picsum.photos/seed/2/400/300' },
  { id: 3, name: '鈴木', role: 'ディレクター', image: 'https://picsum.photos/seed/3/400/300' },
  { id: 4, name: '佐藤', role: 'デザイナー', image: 'https://picsum.photos/seed/4/400/300' },
  { id: 5, name: '伊藤', role: 'エンジニア', image: 'https://picsum.photos/seed/5/400/300' },
  { id: 6, name: '渡辺', role: 'ディレクター', image: 'https://picsum.photos/seed/6/400/300' },
]

const roles = ['全員', 'デザイナー', 'エンジニア', 'ディレクター']

export default function MembersPage() {
  const [selectedRole, setSelectedRole] = useState('全員')

  const filteredMembers = selectedRole === '全員'
    ? members
    : members.filter((member) => member.role === selectedRole)

  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">メンバー紹介</h1>

      {/* フィルターボタン */}
      <div className="flex gap-4 mb-8">
        {roles.map((role) => (
          <button
            key={role}
            onClick={() => setSelectedRole(role)}
            className={`py-2 px-6 rounded-full font-bold transition-colors duration-300 ${
              selectedRole === role
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-500 hover:bg-gray-100'
            }`}
          >
            {role}
          </button>
        ))}
      </div>

      {/* メンバーカード */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMembers.map((member) => (
          <div
            key={member.id}
            className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold">{member.name}</h2>
              <p className="text-gray-500 mt-1">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}