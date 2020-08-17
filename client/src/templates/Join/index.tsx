import React from 'react';
import DefaultTemplate from '../Default';

interface Props {
  Join: React.ReactNode;
}

function JoinTemplate({ Join }: Props) {
  return <DefaultTemplate>{Join}</DefaultTemplate>;
}

export default JoinTemplate;
