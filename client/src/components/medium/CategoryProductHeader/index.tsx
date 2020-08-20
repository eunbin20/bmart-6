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
    const headerOffsetTop = headerRef.current.offsetTop == 0 ? 1758 : headerRef.current.offsetTop;
    const setSticky = function () {
      const header = headerRef.current;
      if (window.pageYOffset > headerOffsetTop) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    };

    const changeSelectedChip = function () {
      const nextTab = categoryRefs.current[selectedChipId + 1];
      const nextOffsetTop = nextTab && nextTab.offsetTop;

      if (nextOffsetTop && nextOffsetTop < window.pageYOffset) {
        setSelectedChipId(selectedChipId + 1);
      }
      const prevTab = selectedChipId - 1 != 0 && categoryRefs.current[selectedChipId - 1];
      const prevOffsetBottom = prevTab && prevTab.offsetTop + prevTab.offsetHeight;

      if (prevOffsetBottom && prevOffsetBottom > window.pageYOffset) {
        setSelectedChipId(selectedChipId - 1);
      }
    };

    window.onscroll = function () {
      setSticky();
      changeSelectedChip();
    };
  });

  return (
    <S.CategoryProductHeader ref={headerRef}>
      {categories.map((category) => (
        <S.CategoryChip
          key={category.id}
          className={selectedChipId === category.id ? 'selected' : ''}
        >
          {category.name}
        </S.CategoryChip>
      ))}
    </S.CategoryProductHeader>
  );
}

export default CategoryProductHeader;
