import React from 'react';

export type buttonElementGroupType = string[];
export type buttonRequestGroupType = string[];
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
  title?: string;
  description?: string;
  type: 'button' | 'carousel' | 'graph' | 'text' | 'image';
  contents?: React.ReactNode;
};
