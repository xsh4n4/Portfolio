import React from 'react';
import { motion } from 'framer-motion';

interface TimelineCardProps {
  title: string;
  subtitle: string;
  duration: string;
  description: string;
  align: 'left' | 'right';
  icon?: React.ReactNode;
}

export const TimelineCard: React.FC<TimelineCardProps> = ({
  title,
  subtitle,
  duration,
  description,
  align,
  icon,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`relative w-full max-w-xl ${
        align === 'left' ? 'self-start' : 'self-end'
      } group`}
    >
      <div className="absolute top-3 w-4 h-4 bg-blue-500 rounded-full -left-2.5 border-4 border-black"></div>

      <div className="bg-zinc-900 border border-blue-600 rounded-xl p-6 shadow-md shadow-blue-500/20 hover:scale-[1.02] transition-transform backdrop-blur-sm">
        <div className="flex items-center gap-3 mb-2">
          {icon && <div className="text-blue-400">{icon}</div>}
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
        <p className="text-sm text-zinc-400">{subtitle} — <span>{duration}</span></p>
        <p className="mt-2 text-zinc-300">{description}</p>
      </div>
    </motion.div>
  );
};
