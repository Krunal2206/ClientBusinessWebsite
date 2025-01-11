'use client'

import React from 'react'
import ServiceCard from './ServiceCard'
import { motion } from 'framer-motion';
import { servicesContainerVariants, servicesItemVariants } from '@/utils/animation';

const services = [
    {
      imageSrc: "/software.jpg",
      title: "Provide Licensed Software",
      description:
        "We ensure access to authentic, licensed software to enhance productivity and ensure compliance with legal standards.",
    },
    {
      imageSrc: "/hardware.jpg",
      title: "Hardware Solution",
      description:
        "Our hardware solutions include sales, installation, upgrades, and troubleshooting to keep your systems running efficiently.",
    },
    {
      imageSrc: "/network.jpg",
      title: "Networking Solution",
      description:
        "Build a robust, secure network infrastructure for seamless communication and data sharing across your organization.",
    },
    {
      imageSrc: "/cctv.jpg",
      title: "CCTV System",
      description:
        "Secure your premises with our high-quality CCTV systems, including installation, maintenance, and support services.",
    },
    {
      imageSrc: "/printer.jpg",
      title: "Printer Repairing",
      description:
        "Our expert printer repair services ensure minimal downtime and efficient operation for your printing needs.",
    },
    {
      imageSrc: "/cartridge.jpg",
      title: "Cartridge Refilling",
      description:
        "Save costs with our high-quality cartridge refilling services, ensuring top performance and print quality.",
    },
];

const ServicesContainer = () => {
  return (
    <motion.div
          initial="hidden"
          whileInView="visible"
          variants={servicesContainerVariants}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={servicesItemVariants} viewport={{ once: true }}>
            <ServiceCard
              imageSrc={service.imageSrc}
              title={service.title}
              description={service.description}
            />
            </motion.div>
          ))}
        </motion.div>
  )
}

export default ServicesContainer
