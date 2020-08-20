import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';

const parseQuery = (queryString: string) => {
  // ?id=1&someting=2
  return queryString
    .slice(1)
    .split('&')
    .map((element) => element.split('='))
    .map(([key, value]) => ({ [key]: value }));
};

export default function ProductDetailPage({ history, location }: RouteComponentProps) {
  const { search } = location;

  useEffect(() => {
    if (!search) {
      history.push('/');
      return;
    }
    const query = parseQuery(search);
    const productId = query[0]['id'];
    if (!productId) {
      history.push('/');
      return;
    }
  }, []);
  return <div>This is Detail Modal</div>;
}
