
export interface Member {
  id: string;
  name: string;
  role: 'Professor' | 'PhD Student' | 'Master Student' | 'Undergraduate Intern' | 'Alumni';
  image: string;
  researchInterests: string[];
  email: string;
  links?: {
    googleScholar?: string;
    github?: string;
    website?: string;
  };
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: 'Journal' | 'Conference' | 'Workshop';
  link?: string;
  abstract?: string;
}

export interface ResearchArea {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string[];
}

export interface NewsItem {
  id: string;
  date: string;
  content: string;
  tag: 'Award' | 'Paper' | 'Event' | 'Project';
}
