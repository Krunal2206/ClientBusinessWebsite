"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInRight } from "@/utils/animation";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa"; // Import Instagram Icon

const ContactInfoItem = ({ icon, title, content, link }) => (
  <div className="flex items-start space-x-4">
    <div className="text-blue-600">{icon}</div>
    <div>
      <p className="font-semibold text-black">{title}</p>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
          {content}
        </a>
      ) : (
        <p className="text-black">{content}</p>
      )}
    </div>
  </div>
);

const BusinessCard = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView={"visible"}
      variants={fadeInRight}
      viewport={{ once: true }}
      className="bg-white p-8 rounded-xl shadow-lg flex flex-col"
    >
      <h3 className="text-2xl font-semibold text-black mb-6">
        Contact Information
      </h3>

      <div className="relative w-full h-60 mb-8">
        <Image
          src="/contact.jpg"
          alt="contact"
          layout="fill"
          objectFit="cover"
          className="rounded"
        />
      </div>

      <div className="space-y-6">
        <ContactInfoItem
          icon={<FiMail className="w-6 h-6" />}
          title="Email"
          content="hecomputers2710@gmail.com"
          link="mailto:hecomputers2710@gmail.com"
        />
        <ContactInfoItem
          icon={<FiPhone className="w-6 h-6" />}
          title="Phone"
          content="+91-9727139719"
          link="tel:+919727139719"
        />
        <ContactInfoItem
          icon={<FiMapPin className="w-6 h-6" />}
          title="Address"
          content="16, Vakhariya Nagar-3, Near Kapileshwar Mahadev Temple, Kalol (N.G.), Pin-382721, Dist. Gandhinagar, Gujarat"
        />
        <ContactInfoItem
          icon={<FaInstagram className="w-6 h-6 text-pink-500" />} // Instagram Icon with style
          title="Instagram"
          content="@hecomputersales"
          link="https://www.instagram.com/hecomputersales?igsh=bzJ2OWRzYnY1OWZv&utm_source=qr"
        />
      </div>
    </motion.div>
  );
};

export default BusinessCard;
