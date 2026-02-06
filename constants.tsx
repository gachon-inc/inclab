
import React from 'react';
import { Member, Publication, ResearchArea, NewsItem } from './types';

export const RESEARCH_AREAS: ResearchArea[] = [
  {
    id: 'intelligence',
    title: 'Intelligence',
    description: 'Deep Learning, Reinforcement Learning, and AI optimization for complex networked systems.',
    icon: '🧠',
    details: [
      'Multi-Agent Reinforcement Learning',
      'Federated Learning in Edge Computing',
      'Generative AI for Wireless Networks',
      'Explainable AI (XAI)'
    ]
  },
  {
    id: 'networking',
    title: 'Networking',
    description: 'Next-generation wireless communication and software-defined networking architectures.',
    icon: '📡',
    details: [
      '6G Network Orchestration',
      'V2X (Vehicle-to-Everything) Communication',
      'Low Latency Reliable Networking',
      'Network Slicing & Virtualization'
    ]
  },
  {
    id: 'computing',
    title: 'Computing',
    description: 'Edge, Fog, and Cloud computing paradigms for distributed intelligent applications.',
    icon: '💻',
    details: [
      'Edge Intelligence & Mobile Computing',
      'Distributed Systems Optimization',
      'High-Performance Computing for AI',
      'IoT Device Management'
    ]
  }
];

export const MEMBERS: Member[] = [
  {
    id: 'prof-kim',
    name: 'Joongheon Kim',
    role: 'Professor',
    image: 'https://picsum.photos/seed/prof/400/400',
    researchInterests: ['6G Networks', 'Reinforcement Learning', 'Cloud Computing'],
    email: 'joongheon@gachon.ac.kr',
    links: {
      googleScholar: '#',
      website: '#'
    }
  },
  {
    id: 'phd-1',
    name: 'Min-soo Kang',
    role: 'PhD Student',
    image: 'https://picsum.photos/seed/std1/400/400',
    researchInterests: ['MARL', 'UAV Networks'],
    email: 'mskang@gachon.ac.kr'
  },
  {
    id: 'master-1',
    name: 'Ji-won Lee',
    role: 'Master Student',
    image: 'https://picsum.photos/seed/std2/400/400',
    researchInterests: ['Federated Learning', 'IoT Security'],
    email: 'jwlee@gachon.ac.kr'
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: 'pub-1',
    title: 'Deep Reinforcement Learning for Autonomous Drone Swarms in 6G Edge Networks',
    authors: ['M. Kang', 'J. Kim', 'S. Park'],
    venue: 'IEEE Transactions on Wireless Communications',
    year: 2024,
    type: 'Journal',
    link: '#'
  },
  {
    id: 'pub-2',
    title: 'Federated Learning for Privacy-Preserving Traffic Prediction in Smart Cities',
    authors: ['J. Lee', 'H. Choi', 'J. Kim'],
    venue: 'IEEE INFOCOM',
    year: 2023,
    type: 'Conference',
    link: '#'
  }
];

export const NEWS: NewsItem[] = [
  {
    id: 'news-1',
    date: '2024.03.15',
    content: 'Our paper on 6G UAV networks has been accepted by IEEE TWC.',
    tag: 'Paper'
  },
  {
    id: 'news-2',
    date: '2024.02.10',
    content: 'INC Lab receives National Research Foundation (NRF) grant for Edge AI.',
    tag: 'Project'
  },
  {
    id: 'news-3',
    date: '2024.01.05',
    content: 'Welcome new PhD student Min-soo Kang to the team!',
    tag: 'Event'
  }
];
