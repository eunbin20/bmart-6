import React, { useRef, useEffect, useState } from 'react';
import * as S from './style';
import { Category } from '../../../types/data';

interface Props {
  categories: Category[];
  categoryRefs: React.MutableRefObject<Array<HTMLDivElement>>;
  selectedId?: number;
}

function CategoryProductHeader({
  categories,
  categoryRefs,
  selectedId = 1,
}: Props): React.ReactElement {
  const headerRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [selectedChipId, setSelectedChipId] = useState(selectedId);

  useEffect(() => {
    const headerOffsetTop = categoryRefs.current[1]?.offsetTop - 75;
    const setSticky = function () {
      const header = headerRef.current;
      if (!header) return;
      if (window.pageYOffset > headerOffsetTop) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    };

    const scrollHandler = function () {
      let index = categoryRefs.current.findIndex(
        (tab) => tab && tab.offsetTop - 70 > window.pageYOffset,
      );
      if (index - 1 === selectedChipId) return;
      if (index === -1) index = 10;
      headerRef.current.children[index - 2]?.scrollIntoView({
        inline: 'center',
      });
      setSelectedChipId(index - 1 === 0 ? 1 : index - 1);
    };

    window.onscroll = function () {
      setSticky();
      scrollHandler();
    };
    return () => {
      window.onscroll = function () {};
    };
  });

  const changeSelectedChipId = function (categoryId: number) {
    window.scrollTo(0, categoryRefs.current[categoryId].offsetTop - 70);
  };

  return (
    <S.CategoryProductHeader ref={headerRef}>
      {categories.map((category) => (
        <S.CategoryChip
          key={category.id}
          className={selectedChipId === category.id ? 'selected' : ''}
          onClick={() => changeSelectedChipId(category.id)}
        >
          {category.name}
        </S.CategoryChip>
      ))}
    </S.CategoryProductHeader>
  );
}

export default CategoryProductHeader;
