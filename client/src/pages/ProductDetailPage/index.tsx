import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';

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
  const [state, setAction] = useProducts({ limit: 1, id: Number(parseQuery(search)[0].id) });
  console.log(state);
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
