'use client';

import React, { useRef } from 'react';

import Image from 'next/image';

import { motion, useScroll, useTransform } from 'framer-motion';

// Map track names to their logo file paths
const getTrackLogo = (track: string): string | null => {
  const logoMap: Record<string, string> = {
    'Aptos': '/aptos.png',
    'Stacks': '/stacks.jpg',
    'Flow': '/flow.png',
    'Mantle': '/mantle.png',
    'Ethereum': '/ethereum.png', // Note: might not exist, will handle gracefully
    'Manta': '/manta.png',
    'BNB': '/bnb.png',
    'Polygon': '/polygon.png',
    'Chainlink': '/chainlink.png',
    'FVM': '/filecoin.png', // Filecoin Virtual Machine
    'XDC': '/xdc.png',
    'Avalanche': '/avalanche.png',
    'Inco': '/inco.png',
    'Celo': '/celo.png',
    'Oraichain': '/oraichain.png',
  };
  
  return logoMap[track] ?? null;
};

const hackathons = [
  // 2025
  { name: 'Stacks Hacker House 2025', prize: 'Winner', amount: '', track: 'Stacks', links: [], date: new Date('2025-01-01') },
  { name: 'Aptos Hackathon 2025', prize: 'Third Runner Up', amount: '', track: 'Aptos', links: [], date: new Date('2025-01-01') },
  { name: 'Mantle APAC Hackathon 2025', prize: 'Third Prize', amount: '', track: 'Mantle', links: [], date: new Date('2025-01-01') },
  { name: 'Flow Asia Hackathon 2025', prize: 'Nominee DemoDay', amount: '', track: 'Flow', links: [], date: new Date('2025-01-01') },
  
  // 2024
  { name: 'ETHIndia 2024', prize: 'Winner', amount: '$500', track: 'Ethereum', links: [], date: new Date('2024-12-01') },
  { name: 'ETHDubai 2024', prize: 'XDC Network Tokenization NEO Prize', amount: '$2,000', track: 'XDC', links: [], date: new Date('2024-03-01') },
  { name: 'BNB Chain Hackathon 2024', prize: 'Sonorus Track Winner', amount: '$500', track: 'BNB', links: [], date: new Date('2024-06-01') },
  { name: 'Polygon DevX India Hackathon', prize: 'Best Project Chainlink CCIP & Services', amount: '$2,000', track: 'Polygon', links: [], date: new Date('2024-08-01') },
  { name: 'ETH SEA', prize: '3rd Prize Manta Track', amount: '$750', track: 'Manta', links: [], date: new Date('2024-09-01') },
  { name: 'Decentralized AI Buildathon', prize: 'Winner', amount: '$1,750', track: 'AI', links: [], date: new Date('2024-10-01') },
  { name: 'Dcomm Valhalla Hackathon', prize: 'Loki Track Winner', amount: '$1,000', track: 'Dcomm', links: [], date: new Date('2024-11-01') },
  
  // 2023
  { name: 'Chainlink Constellation 2023', prize: 'Grand Prize Winner - Steel Perlot', amount: '$3,000', track: 'Chainlink', links: [], date: new Date('2023-12-01') },
  { name: 'ETH Riyadh 2023', prize: 'Meta Web3 Builder SocialFi Track Winner', amount: '$1,000', track: 'Ethereum', links: [], date: new Date('2023-11-01') },
  { name: 'FVM Space Wrap by ETHGlobal 2023', prize: 'Best use of Livepeer', amount: '$1,000', track: 'FVM', links: [], date: new Date('2023-10-01') },
  { name: 'HackX 2023', prize: 'Best Project Online Track', amount: '', track: 'General', links: [], date: new Date('2023-09-01') },
  { name: 'DAO Global 2023', prize: 'Runner-Up', amount: '$2,000', track: 'DAO', links: [], date: new Date('2023-08-01') },
  { name: 'Inco Hack 2023', prize: '4th Place FHE DApps', amount: '$500', track: 'Inco', links: [], date: new Date('2023-07-01') },
  { name: 'Flow Hackathon Season 2', prize: 'Winner', amount: '$6,000', track: 'Flow', links: [], date: new Date('2023-06-01') },
  { name: 'Avalanche Frontier', prize: 'Third Prize Chainlink CCIP Track', amount: '$1,000', track: 'Avalanche', links: [], date: new Date('2023-05-01') },
  { name: 'Celo Hackathon of Hope', prize: 'Top 20 Projects', amount: '$500', track: 'Celo', links: [], date: new Date('2023-04-01') },
  { name: 'Oraichain', prize: 'AI x DeFi Cook-Off Special Mention', amount: '$400', track: 'Oraichain', links: [], date: new Date('2023-03-01') },
  
  // 2022
  { name: 'BUIDL For Web3 Hack 2022', prize: 'Best DeFi App on Polygon', amount: '$1,000', track: 'Polygon', links: [], date: new Date('2022-12-01') },
  { name: 'Web3athon 2022', prize: 'Runner-Up', amount: '', track: 'General', links: [], date: new Date('2022-11-01') },
  { name: 'Garuda Hacks 3.0 2022', prize: 'Runner-Up Polygon Web3 Project', amount: '$350', track: 'Polygon', links: [], date: new Date('2022-10-01') },
].sort((a, b) => b.date.getTime() - a.date.getTime()); // Sort by most recent first

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
          initial={{ opacity: 0, y: -30 }}
          style={{ opacity }}
          transition={{ duration: 0.8, stiffness: 100, type: 'spring' }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Hackathons
        </motion.div>
        <motion.div
          className='mb-12 text-center font-beatriceMedium text-base text-white/50'
          style={{ opacity }}
        >
          40 Wins out of 70+ Participated
        </motion.div>

        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {hackathons.map((hackathon, index) => {
            const uniqueKey = `${hackathon.name}-${String(hackathon.track)}`;
            const delay = index * 0.04;
            
            return (
            <motion.div
              key={uniqueKey}
              className='group relative overflow-hidden rounded-xl border border-white/5 bg-white/[0.03] p-5 backdrop-blur-md transition-all duration-500 hover:border-white/15 hover:bg-white/[0.08] hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ delay, duration: 0.5, stiffness: 100, type: 'spring' }}
              viewport={{ margin: '-50px', once: true }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3, stiffness: 300, type: 'spring' },
                y: -6,
              }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
            >
              {/* Subtle gradient overlay */}
              <motion.div
                className='absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'
              />
              
              <div className='relative z-10'>
                <div className='mb-3 flex items-center justify-between'>
                  <span className='flex items-center gap-1.5 rounded-full bg-white/[0.12] border border-white/10 px-3 py-1 text-xs font-semibold text-white/80 backdrop-blur-sm'>
                    {(() => {
                      const trackLogo = getTrackLogo(hackathon.track);
                      return (
                        <>
                          {trackLogo && (
                            <div className='h-3 w-3 shrink-0 overflow-hidden rounded-sm'>
                              <Image
                                alt={hackathon.track}
                                className='object-contain'
                                height={12}
                                src={trackLogo}
                                width={12}
                              />
                            </div>
                          )}
                          {hackathon.track}
                        </>
                      );
                    })()}
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
            );
          })}
        </div>
      </div>
    </div>
  );
};

