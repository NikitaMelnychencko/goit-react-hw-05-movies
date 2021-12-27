import { useState, useEffect } from 'react';
import { renderMovieGlobal } from 'AppServise';
import Gallery from 'components/Gallery/Gallery';
import { useHistory, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Form from 'components/Form/Form';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import InfiniteScroll from 'react-infinite-scroll-component';

const MoviesPage = () => {
  const [searchName, setSearchName] = useState('');
  const [submitName, setSubmitName] = useState(null);
  const [movies, setMovies] = useState(null);
  const [status, setStatus] = useState('idle');
  const [page, setPage] = useState(1);
  const location = useLocation();
  const history = useHistory();
  const sortOrder = new URLSearchParams(location.search).get('searchBy');

  useEffect(() => {
    if (!submitName) {
      if (sortOrder) {
        setSubmitName(sortOrder);
        setStatus('pending');
      }
      return;
    }
    renderMovieGlobal(page, submitName).then(data => {
      if (status === 'pending') {
        setMovies(data.results);
      } else {
        setMovies([...movies, ...data.results]);
      }
      setStatus('resolved');
    });
  }, [page, submitName]);

  const handleNameChange = e => {
    setSearchName(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchName.trim() === '') {
      toast.warn('Input value!');
      return;
    }
    setSubmitName(searchName);
    setPage(1);
    setSearchName('');
    setStatus('pending');
    history.push({
      ...location,
      search: `searchBy=${searchName}`,
    });
  };

  return (
    <>
      <Form
        handleSubmit={handleSubmit}
        searchName={searchName}
        handleNameChange={handleNameChange}
      />
      {status === 'idle' && <p>Input value</p>}
      {status === 'pending' && (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
        />
      )}
      {status === 'resolved' && (
        <InfiniteScroll
          dataLength={movies.length}
          next={() => setPage(page + 1)}
          hasMore={true}
          style={{ overflow: 'hidden' }}
          loader={
            <Loader
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={3000}
            />
          }
        >
          <Gallery movies={movies} />
        </InfiniteScroll>
      )}
    </>
  );
};
export default MoviesPage;
