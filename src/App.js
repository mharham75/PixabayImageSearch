import { useState, useEffect } from 'react';
import ImageCard from './components/ImageCard';
import { ImageSearch } from './components/ImageSearch';
import { ErrorMessage } from './components/ErrorMessage';

function App() {
  const [images, setImages] = useState([]);
  const [term, setTerm] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=yellow+flowers&image_type=photo&pretty=true`)
    //fetch('https://pixabay.com/api/?key=27088582-822778ecba4aeacddc33f04b2&q=yellow+flowers&image_type=photo&pretty=true')
    //fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        console.log('length', data.hits.length);

        setError('');
      })
      .catch((err) => setError(err.message));
  }, [term]);

  return (
    <div className="container mx-auto px-4">
      <ImageSearch searchText={(text) => setTerm(text)} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-start">
        {error ? (
          <ErrorMessage message={error} />
        ) : images.length === 0 ? (
          <div className="col-span-full w-full flex flex-col items-center justify-center text-center py-16 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mb-3 text-gray-300"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 4a1 1 0 100 2 1 1 0 000-2zm-1 6l3-3 2 2 4-4 3 3v1a1 1 0 01-1 1H6a1 1 0 01-1-1v-1z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-lg font-medium">No matching images found</p>
            <p className="text-sm text-gray-400">Try a different search term</p>
          </div>
        ) : (
          <>
            {images.map((image, index) => (
              <ImageCard key={`${image.id}-${index}`} image={image} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
