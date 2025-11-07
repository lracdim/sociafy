
import React from 'react';
import { PlatformName } from '../types';

interface IconProps {
  platform: PlatformName;
  className?: string;
}

const YouTubeIcon = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.582,6.186c-0.23-0.854-0.906-1.531-1.76-1.76C18.254,4,12,4,12,4S5.746,4,4.178,4.426 c-0.854,0.23-1.531,0.906-1.76,1.76C2,7.754,2,12,2,12s0,4.246,0.418,5.814c0.23,0.854,0.906,1.531,1.76,1.76 C5.746,20,12,20,12,20s6.254,0,7.822-0.426c0.854-0.23,1.531-0.906,1.76-1.76C22,16.246,22,12,22,12S22,7.754,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z"/>
  </svg>
);

const TikTokIcon = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.03-4.83-1-6.7-2.9-1.85-1.85-2.76-4.33-2.47-6.91.24-2.12 1.3-4.13 2.89-5.57.81-.74 1.76-1.29 2.75-1.71.01 2.87-.01 5.74.02 8.61.01.21.05.42.12.62.27.78 1.02 1.32 1.81 1.34 1.05.03 1.92-.68 2.1-1.78.02-.15.04-.3.04-.45.02-2.82.01-5.64.01-8.46z"/>
  </svg>
);

const FacebookIcon = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M22,12c0-5.52-4.48-10-10-10S2,6.48,2,12c0,4.84,3.44,8.87,8,9.8V15H8v-3h2V9.5C10,7.57,11.57,6,13.5,6H16v3h-1.5 c-0.83,0-1.5,0.67-1.5,1.5V12h3l-0.5,3h-2.5v6.8C18.56,20.87,22,16.84,22,12z"/>
  </svg>
);

const InstagramIcon = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12,2c-2.72,0-3.05,0.01-4.12,0.06C6.88,0.12,5.9,0.3,5.06,0.65C4.22,1,3.5,1.4,2.8,2.1s-1.1,1.42-1.45,2.26 C0.3,5.9,0.12,6.88,0.06,7.88C0.01,8.95,0,9.28,0,12s0.01,3.05,0.06,4.12c0.06,1,0.24,1.98,0.59,2.82 c0.35,0.84,0.75,1.56,1.45,2.26s1.42,1.1,2.26,1.45c0.84,0.35,1.82,0.53,2.82,0.59C8.95,23.99,9.28,24,12,24 s3.05-0.01,4.12-0.06c1-0.06,1.98-0.24,2.82-0.59c0.84-0.35,1.56-0.75,2.26-1.45s1.1-1.42,1.45-2.26 c0.35-0.84,0.53-1.82,0.59-2.82C23.99,15.05,24,14.72,24,12s-0.01-3.05-0.06-4.12c-0.06-1-0.24-1.98-0.59-2.82 c-0.35-0.84-0.75-1.56-1.45-2.26S20.58,1,19.74,0.65C18.9,0.3,18.02,0.12,17.12,0.06C16.05,0.01,15.72,0,12,0z M12,4.8 c-3.97,0-7.2,3.23-7.2,7.2s3.23,7.2,7.2,7.2s7.2-3.23,7.2-7.2S15.97,4.8,12,4.8z M12,16.8c-2.65,0-4.8-2.15-4.8-4.8 s2.15-4.8,4.8-4.8s4.8,2.15,4.8,4.8S14.65,16.8,12,16.8z M18.4,6.4c-0.83,0-1.5-0.67-1.5-1.5s0.67-1.5,1.5-1.5 s1.5,0.67,1.5,1.5S19.23,6.4,18.4,6.4z"/>
  </svg>
);

const XIcon = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.931ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
  </svg>
);

const TwitchIcon = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.153 3.347L2 5.5v13h4.5v2.5h2.5l2.5-2.5H16l5-5V2H5.5L4.153 3.347zM19.5 13L17 15.5h-4.5l-2.5 2.5v-2.5H6V3.5h13.5v9.5z"/>
    <path d="M15.5 6.5v4h-2v-4h2zm-4.5 0v4h-2v-4h2z"/>
  </svg>
);


const ICONS: Record<PlatformName, React.FC<{className?: string}>> = {
  YouTube: YouTubeIcon,
  TikTok: TikTokIcon,
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  X: XIcon,
  Twitch: TwitchIcon,
};

const PlatformIcon: React.FC<IconProps> = ({ platform, className }) => {
  const IconComponent = ICONS[platform];
  return IconComponent ? <IconComponent className={className} /> : null;
};

export default PlatformIcon;
