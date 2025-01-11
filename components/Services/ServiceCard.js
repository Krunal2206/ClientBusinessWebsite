import Image from 'next/image';
import React from 'react'

const ServiceCard = ({ imageSrc, title, description }) => (
    <div className="p-6 border rounded-lg shadow hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 bg-white">
      <div className="relative w-full h-48 mb-4">
        <Image src={imageSrc} alt={title} layout="fill" objectFit="fill" className="rounded" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="mt-4 text-gray-600">{description}</p>
    </div>
  );

export default ServiceCard
