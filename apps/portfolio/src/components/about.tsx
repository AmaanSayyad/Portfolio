'use client';

import React, { useRef } from 'react';

import { data } from '~/lib/data';
import { cn } from '~/lib/utils';

import { motion, useScroll, useTransform } from 'framer-motion';

import type { AboutSentence } from '~/types/data';

interface SentenceProps {
  parts: AboutSentence;
  index: number;
}

const Sentence = ({ index, parts }: SentenceProps) => {
  const isName = index === 1;
  
  return (
    <motion.div
      className={cn(
        'flex flex-wrap items-center justify-center gap-x-2 gap-y-1',
        isName ? 'my-8 sm:my-12 md:my-16' : 'mb-6 sm:mb-8 md:mb-10'
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
    >
      {parts.map((part, j) => {
        if (part.type === 'text') {
          return (
            <motion.span
              key={`about-${String(index)}-${String(j)}`}
              className={cn(
                'inline-block',
                part.className ?? 'font-beatriceMedium'
              )}
            >
              {part.content}
            </motion.span>
          );
        }
        const rotateValues: number[] = [0, -10, 10, -10, 0];
        return (
          <motion.span
            key={`about-${String(index)}-${String(j)}`}
            className={cn(
              'inline-flex items-center justify-center',
              part.className
            )}
            whileHover={{
              rotate: rotateValues,
              scale: 1.2,
              transition: { duration: 0.5 },
            }}
          >
            {part.content}
          </motion.span>
        );
      })}
    </motion.div>
  );
};

export const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div ref={ref} className='relative z-[2] min-h-screen py-24' id='about'>
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        <motion.div
          className='mb-16 text-center font-elgocAlt text-[4rem] sm:text-[6rem] md:text-[8rem] leading-[0.9] text-white'
          initial={{ opacity: 0, y: -30 }}
          style={{ opacity }}
          transition={{ duration: 0.8, stiffness: 100, type: 'spring' }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          About
        </motion.div>
        
        <motion.div
          className='group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03] p-8 sm:p-12 md:p-16 backdrop-blur-md transition-all duration-500 hover:border-white/15 hover:bg-white/[0.08] hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
          initial={{ opacity: 0, y: 30 }}
          style={{ opacity }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          {/* Subtle gradient overlay */}
          <motion.div
            className='absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'
          />
          
          <div className='relative z-10 flex flex-col items-center justify-center gap-2 sm:gap-3 font-beatriceMedium text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed text-center'>
            {data.about.map((sentence, i) => (
              <Sentence
                index={i}
                key={`sentence-${String(i)}`}
                parts={sentence}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
