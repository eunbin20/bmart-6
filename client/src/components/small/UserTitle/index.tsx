import React from 'react';
import * as S from './style';

interface Props {
  title: string;
}

export default function UserTitle({ title }: Props) {
  return <S.Title>{title}</S.Title>;
}
