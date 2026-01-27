
// Added missing React import to resolve namespace error
import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export interface ProjectStats {
  label: string;
  value: string;
  suffix: string;
}