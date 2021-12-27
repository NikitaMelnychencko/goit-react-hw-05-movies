import { useState } from 'react';
import { renderMovieGlobal } from 'AppServise';
import Gallery from 'components/Gallery/Gallery';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Form from 'components/Form/Form';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const MoviesPage = () => {
  const [searchName, setSearchName] = useState('');
  const [movies, setMovies] = useState(null);
  const [status, setStatus] = useState('idle');
  const handleNameChange = e => {
    setSearchName(e.currentTarget.value.toLowerCase());
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (searchName.trim() === '') {
      toast.warn('Input value!');
      return;
    }
    setStatus('pending');
    renderMovieGlobal(1, searchName).then(data => {
      setMovies(data);
      setStatus('resolved');
    });
    setSearchName('');
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
      {status === 'resolved' && <Gallery movies={movies} />}
    </>
  );
};
export default MoviesPage;
