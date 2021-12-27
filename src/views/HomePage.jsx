import { useEffect, useState } from 'react';
import Gallery from 'components/Gallery/Gallery';
import { renderMovieGlobal } from 'AppServise';

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    renderMovieGlobal(1, '', 'home').then(data => setMovies(data));
  }, []);
  return <>{movies && <Gallery movies={movies} />}</>;
};

export default HomePage;
