'use client';

import React, { useRef } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';

const hackathons = [
  { name: 'Aptos Hackathon 2025', prize: 'Third Runner Up', amount: '', track: 'Aptos' },
  { name: 'Stacks Hacker House 2025', prize: 'Winner', amount: '', track: 'Stacks' },
  { name: 'Flow Asia Hackathon 2025', prize: 'Nominee DemoDay', amount: '', track: 'Flow' },
  { name: 'Mantle APAC Hackathon 2025', prize: 'Third Prize', amount: '', track: 'Mantle' },
  { name: 'ETHIndia 2024', prize: 'Winner', amount: '$500', track: 'Ethereum' },
  { name: 'ETH Sea Manta Track', prize: 'Third Prize', amount: '$750', track: 'Manta' },
  { name: 'Decentralized AI Buildathon', prize: 'Winner', amount: '$1,750', track: 'AI' },
  { name: 'BNB Chain Hackathon 2024', prize: 'Sonorus Track Winner', amount: '$500', track: 'BNB' },
  { name: 'ETHDubai 2024', prize: 'XDC Network Prize', amount: '$2,000', track: 'XDC' },
  { name: 'Polygon DevX India Hackathon', prize: 'Chainlink CCIP Winner', amount: '$2,000', track: 'Polygon' },
  { name: 'ETH Riyadh', prize: 'SocialFi Track Winner', amount: '$1,000', track: 'Ethereum' },
  { name: 'Flow Hackathon Season 2', prize: 'Runner-Up', amount: '$6,000', track: 'Flow' },
  { name: 'Chainlink Constellation 2023', prize: 'Steel Perlot Winner', amount: '$3,000', track: 'Chainlink' },
];

export const Hackathons = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div ref={ref} className='relative z-[2] min-h-screen py-24' id='hackathons'>
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        <motion.div
          className='mb-12 text-center font-elgocAlt text-[4rem] sm:text-[6rem] md:text-[8rem] leading-[0.9] text-white'
          style={{ opacity }}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        >
          Hackathons
        </motion.div>
        <motion.div
          className='mb-12 text-center font-beatriceMedium text-base text-white/50'
          style={{ opacity }}
        >
          35 Wins out of 70+ Participated
        </motion.div>

        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {hackathons.map((hackathon, index) => (
            <motion.div
              key={`${hackathon.name}-${index}`}
              className='group relative overflow-hidden rounded-xl border border-white/5 bg-white/[0.03] p-5 backdrop-blur-md transition-all duration-500 hover:border-white/15 hover:bg-white/[0.08] hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ 
                delay: index * 0.04, 
                duration: 0.5,
                type: 'spring',
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                y: -6,
                transition: { duration: 0.3, type: 'spring', stiffness: 300 }
              }}
            >
              {/* Subtle gradient overlay */}
              <motion.div
                className='absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'
              />
              
              <div className='relative z-10'>
                <div className='mb-3 flex items-center justify-between'>
                  <span className='rounded-full bg-white/[0.12] border border-white/10 px-3 py-1 text-xs font-semibold text-white/80 backdrop-blur-sm'>
                    {hackathon.track}
                  </span>
                  {hackathon.amount && (
                    <span className='font-beatriceMedium text-sm font-bold text-white/90'>
                      {hackathon.amount}
                    </span>
                  )}
                </div>
                <h3 className='mb-2 font-beatriceMedium text-base font-semibold text-white leading-tight'>
                  {hackathon.name}
                </h3>
                <p className='text-sm font-medium text-white/50'>{hackathon.prize}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

