const MemberCard = ({ name, role, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden hover:-translate-y-1">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-gray-500 mt-1">{role}</p>
      </div>
    </div>
  )
}

export default MemberCard