import React from 'react';
import * as S from './style';

interface CategoryButtonProps {
  category: string;
  filterFAQHandler: (category: string) => void;
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

function CategoryButton({ category, filterFAQHandler, activeCategory, setActiveCategory }: CategoryButtonProps) {
  const isActive = category === activeCategory;

  const clickHandler = (category: string) => {
    filterFAQHandler(category);
    setActiveCategory(category);
  };

  return (
    <S.CategoryFilterButton type="button" onClick={() => clickHandler(category)} isActive={isActive}>
      {category}
    </S.CategoryFilterButton>
  );
}

export default CategoryButton;
