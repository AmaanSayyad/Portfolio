'use client';

import React, { useRef } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Mic, ExternalLink } from 'lucide-react';

const speakingEngagements = [
  {
    event: 'Web3 Developer Summit 2024',
    role: 'Keynote Speaker',
    topic: 'Building Scalable Web3 Communities',
    location: 'Virtual',
    date: '2024',
  },
  {
    event: 'Polygon Developer Conference',
    role: 'Panelist',
    topic: 'The Future of DeFi & GameFi',
    location: 'Bengaluru, India',
    date: '2023',
  },
  {
    event: 'ETHIndia Community Meetup',
    role: 'Workshop Host',
    topic: 'Smart Contract Development Best Practices',
    location: 'Mumbai, India',
    date: '2023',
  },
  {
    event: 'Blockchain Innovation Forum',
    role: 'Speaker',
    topic: 'From Zero to 10K: Community Building Strategies',
    location: 'Virtual',
    date: '2024',
  },
  {
    event: 'Aptos Ecosystem Summit',
    role: 'Technical Speaker',
    topic: 'Move Language & On-Chain Gaming',
    location: 'Virtual',
    date: '2024',
  },
  {
    event: 'Web3 Hackathon Series',
    role: 'Mentor & Judge',
    topic: 'Evaluating Innovative Web3 Projects',
    location: 'Multiple Locations',
    date: '2022-2024',
  },
];

export const Speaking = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div ref={ref} className='relative z-[2] min-h-screen py-24' id='speaking'>
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        <motion.div
          className='mb-16 text-center font-elgocAlt text-[4rem] sm:text-[6rem] md:text-[8rem] leading-[0.9] text-white'
          style={{ opacity }}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        >
          Speaking
        </motion.div>
        <motion.p
          className='mb-12 text-center font-beatriceMedium text-base text-white/50'
          style={{ opacity }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          12+ Speaking Engagements • Sharing Knowledge & Building Communities
        </motion.p>

        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {speakingEngagements.map((engagement, index) => (
            <motion.div
              key={`${engagement.event}-${index}`}
              className='group relative overflow-hidden rounded-xl border border-white/5 bg-white/[0.03] p-6 backdrop-blur-md transition-all duration-500 hover:border-white/15 hover:bg-white/[0.08] hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                delay: index * 0.06,
                duration: 0.5,
                type: 'spring',
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.05,
                y: -6,
                transition: { duration: 0.3, type: 'spring', stiffness: 300 },
              }}
            >
              <motion.div
                className='absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'
              />
              
              <div className='relative z-10'>
                <div className='mb-3 flex items-start gap-3'>
                  <div className='rounded-lg bg-white/[0.08] border border-white/5 p-2 backdrop-blur-sm'>
                    <Mic className='h-5 w-5 text-white/70' />
                  </div>
                  <div className='flex-1'>
                    <div className='mb-1 rounded-md bg-white/[0.12] border border-white/10 px-2 py-1 text-xs font-semibold text-white/80 inline-block backdrop-blur-sm'>
                      {engagement.role}
                    </div>
                  </div>
                </div>
                
                <h3 className='mb-2 font-beatriceMedium text-lg font-semibold text-white leading-tight'>
                  {engagement.event}
                </h3>
                <p className='mb-3 text-sm font-medium text-white/70'>{engagement.topic}</p>
                
                <div className='flex items-center justify-between text-xs text-white/50'>
                  <span>{engagement.location}</span>
                  <span>{engagement.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

