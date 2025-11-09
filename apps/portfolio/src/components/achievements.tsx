'use client';

import React, { useRef } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';

const stats = [
  { label: 'Years in Web3', value: '4+', emoji: '🚀' },
  { label: 'Web3 Projects', value: '25+', emoji: '💻' },
  { label: 'Hackathons Won', value: '35', emoji: '🏆' },
  { label: 'Ecosystems', value: '30+', emoji: '🌐' },
  { label: 'Startups', value: '2', emoji: '🚀' },
  { label: 'Communities', value: '4', emoji: '👥' },
];

export const Achievements = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);

  return (
    <div ref={ref} className='relative z-[2] h-screen' id='achievements'>
      <div className='flex h-full flex-col items-center justify-center gap-16 px-4 sm:px-6'>
        <motion.div
          className='text-center font-elgocAlt text-[4rem] sm:text-[6rem] md:text-[8rem] leading-[0.9] text-white'
          style={{ opacity, scale }}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        >
          Achievements
        </motion.div>
        
        <motion.div
          className='grid w-full max-w-5xl grid-cols-2 gap-6 sm:grid-cols-3 lg:gap-8'
          style={{ opacity, scale }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className='group relative flex flex-col items-center justify-center overflow-hidden rounded-xl border border-white/5 bg-white/[0.03] p-8 backdrop-blur-md transition-all duration-500 hover:border-white/15 hover:bg-white/[0.08] hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ 
                delay: index * 0.06, 
                duration: 0.6,
                type: 'spring',
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.08,
                y: -8,
                transition: { duration: 0.3, type: 'spring', stiffness: 300 }
              }}
            >
              {/* Subtle gradient overlay on hover */}
              <motion.div
                className='absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'
              />
              
              <motion.div
                className='mb-4 text-3xl sm:text-4xl'
                whileHover={{ scale: 1.2, rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                {stat.emoji}
              </motion.div>
              <motion.div 
                className='font-elgocAlt text-4xl font-bold text-white sm:text-5xl md:text-6xl'
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                {stat.value}
              </motion.div>
              <div className='mt-3 text-center text-sm font-medium text-white/50 tracking-wide'>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

