import { Link } from 'react-router-dom';
import img from '../../img/no-image.png';
import s from './Gallery.module.scss';

const Gallery = ({ movies }) => {
  return (
    <>
      <ul className={s.GalleryList}>
        {movies.results.map(movie => (
          <li className={s.GalleryListItem} key={movie.id}>
            <Link to={`/movies/${movie.id}`} className={s.link}>
              {movie.poster_path ? (
                <img
                  className={s.GalleryListImg}
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  loading="lazy"
                  width="274"
                  height="398"
                />
              ) : (
                <img
                  className={s.GalleryListImg}
                  src={img}
                  alt={movie.title}
                  loading="lazy"
                  width="274"
                  height="398"
                />
              )}

              <div className={s.GalleryListCard}>
                <h3 className={s.GalleryListTitle}>{movie.title}</h3>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Gallery;
