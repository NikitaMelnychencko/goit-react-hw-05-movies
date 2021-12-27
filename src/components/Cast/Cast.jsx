import { renderParamsCard } from 'AppServise';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CastItem from './Cast_item';
import s from './Cast.module.scss';
const Cast = () => {
  const [credits, setCredits] = useState(null);

  const params = useParams();
  useEffect(() => {
    renderParamsCard(params.movieId, 'credits').then(data => setCredits(data));
  }, []);
  return (
    <>
      {credits && (
        <ul className={s.CardList}>
          {credits.cast.map(el => (
            <CastItem key={el.id} data={el} />
          ))}
        </ul>
      )}
    </>
  );
};
export default Cast;
