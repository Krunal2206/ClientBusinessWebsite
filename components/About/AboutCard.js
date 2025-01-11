import Image from 'next/image';
import React from 'react'

const SectionHeader = ({ title }) => (
    <h3 className="text-2xl font-semibold text-black mb-6 flex items-center">
      <span className="w-2 h-8 bg-blue-500 mr-4"></span>
      {title}
    </h3>
  );
  
const ListItem = ({ title, description }) => (
    <li className="flex items-start">
      <span className="text-blue-500 mr-2">&#8226;</span>
      <div>
        <span className="font-bold text-black">{title}:</span>
        <span className="text-black"> {description}</span>
      </div>
    </li>
  );

const AboutCard = ({ title, items, imageSrc }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300">
    {/* Image */}
    <div className="relative w-full h-56 mb-6 overflow-hidden rounded-t-lg">
      <Image
        src={imageSrc}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="rounded-t-lg"
      />
    </div>
    {/* Title */}
    <SectionHeader title={title} />
    {/* List Items */}
    <ul className="space-y-4">
      {items.map((item, index) => (
        <ListItem key={index} title={item.title} description={item.description} />
      ))}
    </ul>
  </div>
  )
}

export default AboutCard
