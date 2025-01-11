'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { aboutItemVariants1, aboutItemVariants2 } from '@/utils/animation';
import AboutCard from './AboutCard';

const coreValues = [
    { title: "Innovation", description: "Continuously evolving to provide cutting-edge solutions." },
    { title: "Integrity", description: "Building trust through honest and transparent services." },
    { title: "Customer Satisfaction", description: "Always putting customer needs first." },
    { title: "Reliability", description: "Ensuring dependable IT solutions every time." },
  ];
  
const whyChooseUs = [
    { title: "Expert Team", description: "Certified professionals with years of experience." },
    { title: "Comprehensive Solutions", description: "From software to hardware, we cover it all." },
    { title: "Affordable Services", description: "Cost-effective IT solutions without compromising quality." },
    { title: "Tailored Support", description: "Personalized services to meet your specific needs." },
];
  
const AboutCardContainer = () => {
  return (
    <>
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          variants={aboutItemVariants1} 
          viewport={{ once: true }}>
            <AboutCard
              title="Our Core Values"
              items={coreValues}
              imageSrc="/AboutImg.jpg"
            />
          </motion.div>

          <motion.div
            initial="hidden" 
            whileInView="visible" 
            variants={aboutItemVariants2} 
            viewport={{ once: true }}>
              <AboutCard
              title="Why Choose Us?"
              items={whyChooseUs}
              imageSrc="/about2.jpg"
              />
          </motion.div>
    </>
  )
}

export default AboutCardContainer
