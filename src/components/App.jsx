import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CarouselContainer from './CarouselContainer.jsx';

function App(props) {
  const [style, setStyle] = useState({ photos: [{ url: '', thumbnail: '' }] });
  const getStyle = () => {
    return axios.get('http://52.26.193.201:3000/products/1/styles').then((response) => {
      setStyle(response.data.results[1]);
    });
  };

  useEffect(() => {
    getStyle();
  }, []);

  return (
    <div className="container">
      <CarouselContainer photos={style.photos} />
    </div>
  );
}

export default App;
