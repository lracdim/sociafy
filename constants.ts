
import { PlatformData } from './types';

export const PLATFORMS: PlatformData[] = [
  {
    name: 'YouTube',
    cpmMin: 1.00,
    cpmMax: 20.00,
    color: 'text-red-500',
    bgColor: 'hover:bg-red-500/10',
    borderColor: 'border-red-500',
    gradient: 'from-red-500 to-red-700',
  },
  {
    name: 'TikTok',
    cpmMin: 0.01,
    cpmMax: 1.00,
    color: 'text-black',
    bgColor: 'hover:bg-black/10',
    borderColor: 'border-black',
    gradient: 'from-black to-gray-700',
  },
  {
    name: 'Facebook',
    cpmMin: 0.30,
    cpmMax: 10.00,
    color: 'text-blue-600',
    bgColor: 'hover:bg-blue-600/10',
    borderColor: 'border-blue-600',
    gradient: 'from-blue-600 to-blue-800',
  },
  {
    name: 'Instagram',
    cpmMin: 0.01,
    cpmMax: 0.05,
    color: 'text-pink-500',
    bgColor: 'hover:bg-pink-500/10',
    borderColor: 'border-pink-500',
    gradient: 'from-pink-500 via-purple-500 to-yellow-500',
  },
  {
    name: 'X',
    cpmMin: 0.50,
    cpmMax: 3.00,
    color: 'text-gray-800 dark:text-gray-200',
    bgColor: 'hover:bg-gray-800/10 dark:hover:bg-gray-200/10',
    borderColor: 'border-gray-800 dark:border-gray-200',
    gradient: 'from-gray-700 to-black',
  },
  {
    name: 'Twitch',
    cpmMin: 3.00,
    cpmMax: 10.00,
    color: 'text-purple-600',
    bgColor: 'hover:bg-purple-600/10',
    borderColor: 'border-purple-600',
    gradient: 'from-purple-600 to-purple-800',
  },
];
