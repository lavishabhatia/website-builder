import React from 'react'
import { teamMembers } from '../../data/data'

const TeamMember = () => {
  return (
    <div className="flex space-x-4 overflow-x-scroll py-8">
      {teamMembers?.map((member, index) => (
        <div
          key={index}
          className="group relative w-64 bg-white rounded-lg shadow-lg p-4 flex flex-col items-center"
        >
          <img
            src={member.img}
            alt={member.name}
            className="rounded-full w-32 h-32 object-cover mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
          <p className="text-gray-600 mb-4">{member.role}</p>
          <div className="absolute bottom-4 flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity">
            {Object.entries(member.socials).map(([key, url]) => (
              <a key={key} href={url} className="text-blue-500 hover:text-blue-700">
                <i className={`fab fa-${key} text-xl`}></i>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default TeamMember