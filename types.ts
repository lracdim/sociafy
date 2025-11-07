
export type PlatformName = 'YouTube' | 'TikTok' | 'Facebook' | 'Instagram' | 'X' | 'Twitch';

export interface PlatformData {
  name: PlatformName;
  cpmMin: number;
  cpmMax: number;
  color: string;
  bgColor: string;
  borderColor: string;
  gradient: string;
}
