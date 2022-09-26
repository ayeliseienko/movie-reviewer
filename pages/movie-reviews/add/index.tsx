import type { NextPage } from 'next';
import { useRef, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import Card from '../../../components/Card/Card';
import Button from '../../../common/Button/Button';
import Input from '../../../common/Input/Input';

import fetchMovies from '../../../lib/fetchMovies';

interface MovieInterface {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

const AddReview: NextPage = () => {
  const [moviesList, setMoviesList] = useState<MovieInterface[]>([]);

  const movieSearch = useRef<HTMLInputElement>(null);

  function handleButtonClick() {
    if (!movieSearch.current!.value) {
      return;
    }

    fetchMovies(movieSearch.current!.value).then((res) =>
      setMoviesList(res.Search)
    );
  }

  return (
    <main className='w-3/4 mx-auto mt-8'>
      <div className='flex justify-center items-center gap-2'>
        <Input
          ref={movieSearch}
          label={{ isVisible: false, title: 'Movie title' }}
          input={{
            id: 'movieTitle',
            type: 'text',
            placeholder: 'Enter movie title...',
          }}
          className='flex-1'
        />
        <Button className='btn-lightGrey' onClick={handleButtonClick}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Button>
      </div>
      {moviesList && (
        <div className='flex flex-nowrap justify-start items-center overflow-auto hiddenScrollbar'>
          {moviesList
            .filter((movie) => movie.Poster !== 'N/A')
            .map((movie) => (
              <Card
                key={movie.imdbID}
                title={movie.Title}
                poster={movie.Poster}
              />
            ))}
        </div>
      )}
    </main>
  );
};

export default AddReview;
