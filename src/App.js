import {useState, useEffect} from 'react'
import ImageCard from './components/ImageCard';
import { ImageSearch } from './components/ImageSearch';

function App() {

  const[images, setImages] = useState([])
  const [term, setTerm] = useState('');

  useEffect( () => {
     // fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=yellow+flowers&image_type=photo&pretty=true`)
     //fetch('https://pixabay.com/api/?key=27088582-822778ecba4aeacddc33f04b2&q=yellow+flowers&image_type=photo&pretty=true')  
     //fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
     fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
     .then(res => res.json())
        .then(data => setImages(data.hits))
        //.catch(err => console.log(err))
  }, [term])

  return (
   <div className='container mx-auto'>
     <ImageSearch searchText={ text => setTerm(text)}/>
     <div className="grid grid-cols-4 gap-4">
      {images.map( image => (
        <ImageCard key={image.id} image={image} />
      ))}
     </div>
   </div>
  );
}

export default App;
