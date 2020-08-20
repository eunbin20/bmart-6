import React, { useState } from 'react';

import * as S from './style';
import { DropIcon } from '../../../commons/svgs';
import SortModal from '../ProductSortModal';

interface Props {
  sortBy: string;
  changeSort: Function;
}

function ProductCardGridHeader({ sortBy, changeSort }: Props): React.ReactElement {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <>
      <S.CardGridHeaderContainer>
        <S.SortContainer onClick={() => setIsModalOpen(true)}>
          {sortBy} {DropIcon()}
        </S.SortContainer>
      </S.CardGridHeaderContainer>
      <SortModal
        selectedOption={sortBy}
        changeSort={changeSort}
        isModalOpen={isModalOpen}
        onModalClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

export default ProductCardGridHeader;
