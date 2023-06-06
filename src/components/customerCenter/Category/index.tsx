import React from 'react';
import CategoryButton from '../CategoryButton';
import * as S from './style';

interface CategoryProps {
  categories: string[];
  filterFAQHandler: (category: string) => void;
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

function Category({ categories, filterFAQHandler, activeCategory, setActiveCategory }: CategoryProps) {
  return (
    <S.CategoryList>
      {categories.map((category) => (
        <li key={category}>
          <CategoryButton
            category={category}
            filterFAQHandler={filterFAQHandler}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </li>
      ))}
    </S.CategoryList>
  );
}

export default Category;
