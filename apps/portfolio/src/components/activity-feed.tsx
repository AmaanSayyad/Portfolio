'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Twitter, ExternalLink, GitCommit, GitPullRequest, Star, MessageCircle } from 'lucide-react';

interface ActivityItem {
  id: string;
  type: 'github' | 'twitter';
  action: string;
  title: string;
  description?: string;
  link: string;
  timestamp: Date;
  icon: string;
}

export const ActivityFeed: React.FC = () => {
  const [activities, setActivities] = useState<ActivityItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'github' | 'twitter'>('all');

  useEffect(() => {
    // Simulate fetching activities - in production, this would call GitHub/Twitter APIs
    const mockActivities: ActivityItem[] = [
      {
        id: '1',
        type: 'github',
        action: 'pushed',
        title: 'Portfolio',
        description: 'Added 3D rotating globe for hackathon locations',
        link: 'https://github.com/AmaanSayyad/Portfolio',
        timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 mins ago
        icon: 'commit',
      },
      {
        id: '2',
        type: 'twitter',
        action: 'tweeted',
        title: 'Just deployed my new portfolio with an interactive 3D globe! 🌍',
        description: 'Check it out and let me know what you think!',
        link: 'https://twitter.com',
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
        icon: 'tweet',
      },
      {
        id: '3',
        type: 'github',
        action: 'starred',
        title: 'awesome-blockchain',
        description: 'Starred a repository',
        link: 'https://github.com',
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5), // 5 hours ago
        icon: 'star',
      },
      {
        id: '4',
        type: 'github',
        action: 'opened',
        title: 'Pull Request #42',
        description: 'Added support for multi-chain transactions',
        link: 'https://github.com',
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 8), // 8 hours ago
        icon: 'pr',
      },
      {
        id: '5',
        type: 'twitter',
        action: 'tweeted',
        title: 'Excited to announce we won 1st place at ETHIndia! 🏆',
        description: 'Built a decentralized insurance platform using Chainlink oracles',
        link: 'https://twitter.com',
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
        icon: 'tweet',
      },
      {
        id: '6',
        type: 'github',
        action: 'pushed',
        title: 'HyperInsure',
        description: 'Fixed smart contract vulnerability',
        link: 'https://github.com/AmaanSayyad/HyperInsure',
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2), // 2 days ago
        icon: 'commit',
      },
    ];

    setTimeout(() => {
      setActivities(mockActivities);
      setIsLoading(false);
    }, 1000);
  }, []);

  const getRelativeTime = (date: Date): string => {
    const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
    
    if (seconds < 60) return 'just now';
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
    if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
    if (seconds < 604800) return `${Math.floor(seconds / 86400)}d ago`;
    return `${Math.floor(seconds / 604800)}w ago`;
  };

  const getActivityIcon = (icon: string) => {
    switch (icon) {
      case 'commit':
        return <GitCommit className="w-4 h-4" />;
      case 'pr':
        return <GitPullRequest className="w-4 h-4" />;
      case 'star':
        return <Star className="w-4 h-4" />;
      case 'tweet':
        return <MessageCircle className="w-4 h-4" />;
      default:
        return <GitCommit className="w-4 h-4" />;
    }
  };

  const filteredActivities = activities.filter(
    (activity) => filter === 'all' || activity.type === filter
  );

  return (
    <div className='relative z-[2] min-h-screen py-24' id='activity-feed'>
      {/* Animated background */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`activity-particle-${i}`}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
            }}
            className='absolute rounded-full bg-blue-400/10'
            style={{
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className='relative mx-auto max-w-5xl px-4 sm:px-6'>
        {/* Header */}
        <motion.div
          className='mb-12 text-center'
          initial={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className='mb-6 font-elgocAlt text-[4rem] sm:text-[6rem] md:text-[8rem] leading-[0.9] text-white'>
            Activity Feed
          </h2>
          <p className='font-beatriceMedium text-lg text-white/60'>
            Real-time updates from GitHub & Twitter
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className='flex justify-center gap-4 mb-8'
          initial={{ opacity: 0, scale: 0.95 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          {[
            { value: 'all', label: 'All', icon: null },
            { value: 'github', label: 'GitHub', icon: Github },
            { value: 'twitter', label: 'Twitter', icon: Twitter },
          ].map(({ value, label, icon: Icon }) => (
            <button
              key={value}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-beatriceMedium text-sm transition-all ${
                filter === value
                  ? 'bg-white text-black'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
              }`}
              onClick={() => setFilter(value as typeof filter)}
              type="button"
            >
              {Icon && <Icon className="w-4 h-4" />}
              {label}
            </button>
          ))}
        </motion.div>

        {/* Activity List */}
        <motion.div
          className='relative'
          initial={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          {isLoading ? (
            <div className='flex flex-col items-center justify-center py-20'>
              <div className='w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin mb-4' />
              <p className='text-white/50 font-beatriceMedium'>Loading activities...</p>
            </div>
          ) : (
            <div className='space-y-4'>
              <AnimatePresence mode='popLayout'>
                {filteredActivities.map((activity, index) => (
                  <motion.a
                    key={activity.id}
                    animate={{ opacity: 1, y: 0 }}
                    className='group block'
                    exit={{ opacity: 0, y: -10 }}
                    href={activity.link}
                    initial={{ opacity: 0, y: 20 }}
                    rel='noopener noreferrer'
                    target='_blank'
                    transition={{ delay: index * 0.05 }}
                  >
                    <div className='relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300'>
                      {/* Platform Badge */}
                      <div className='absolute top-4 right-4'>
                        <div
                          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg ${
                            activity.type === 'github'
                              ? 'bg-purple-500/20 text-purple-300'
                              : 'bg-blue-500/20 text-blue-300'
                          }`}
                        >
                          {activity.type === 'github' ? (
                            <Github className='w-3 h-3' />
                          ) : (
                            <Twitter className='w-3 h-3' />
                          )}
                          <span className='text-xs font-beatriceMedium'>
                            {activity.type}
                          </span>
                        </div>
                      </div>

                      <div className='flex items-start gap-4'>
                        {/* Icon */}
                        <div className='flex-shrink-0 w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/70 group-hover:text-white group-hover:bg-white/10 transition-all'>
                          {getActivityIcon(activity.icon)}
                        </div>

                        {/* Content */}
                        <div className='flex-1 min-w-0 pr-16'>
                          <div className='flex items-center gap-2 mb-1'>
                            <span className='text-white/50 text-sm font-beatriceMedium'>
                              {activity.action}
                            </span>
                            <span className='text-white font-beatriceMedium'>
                              {activity.title}
                            </span>
                          </div>
                          
                          {activity.description && (
                            <p className='text-white/60 text-sm mb-2 line-clamp-2'>
                              {activity.description}
                            </p>
                          )}
                          
                          <div className='flex items-center gap-3'>
                            <span className='text-white/40 text-xs font-beatriceMedium'>
                              {getRelativeTime(activity.timestamp)}
                            </span>
                            <ExternalLink className='w-3 h-3 text-white/40 opacity-0 group-hover:opacity-100 transition-opacity' />
                          </div>
                        </div>
                      </div>

                      {/* Hover Effect */}
                      <div className='absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-300 pointer-events-none' />
                    </div>
                  </motion.a>
                ))}
              </AnimatePresence>

              {filteredActivities.length === 0 && (
                <div className='text-center py-20'>
                  <p className='text-white/50 font-beatriceMedium'>
                    No activities found for this filter
                  </p>
                </div>
              )}
            </div>
          )}
        </motion.div>

        {/* Load More Button */}
        {!isLoading && filteredActivities.length > 0 && (
          <motion.div
            className='mt-12 text-center'
            initial={{ opacity: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1 }}
          >
            <button
              className='px-8 py-4 rounded-xl bg-white/5 text-white font-beatriceMedium hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all'
              type='button'
            >
              Load More Activities
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

