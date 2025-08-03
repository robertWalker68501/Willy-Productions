export interface NavLinksProps {
  id: string;
  href: string;
  text: string;
}

export interface SiteLogoProps {
  href: string;
  linkText: string;
  linkClasses?: string;
  imgAlt?: string;
  imgWidth?: number;
  imgHeight?: number;
  imgClasses?: string;
}

export interface SongCardProps {
  title: string;
  artist: string;
  album: string;
  year: string;
  file: string;
}
