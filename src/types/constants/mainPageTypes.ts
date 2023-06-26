import React from 'react';

export type buttonElementGroupType = string[];
export type buttonRequestGroupType = {
  title: string;
  to: string;
};
export interface buttonTitlePriceType {
  title: string;
  price?: string;
}

export type mainGraphDataType = {
  title: string;
  graphSize: number;
  graphValue: string;
};

export type mainContentsDataType = {
  emoji?: string;
  p?: string;
  h1?: string;
  reverse?: boolean;
  type: 'button' | 'Carousel' | 'graph' | 'text' | 'image';
  contents?: React.ReactNode;
};
