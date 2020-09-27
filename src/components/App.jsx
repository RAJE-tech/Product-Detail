import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CarouselContainer from './CarouselContainer.jsx';

function App(props) {
  const [style, setStyle] = useState({ photos: [{ url: '', thumbnail: '' }] });
  const getStyle = () => {
    return axios.get('http://52.26.193.201:3000/products/1/styles').then((response) => {
      setStyle(response.data.results[3]);
    });
  };

  useEffect(() => {
    getStyle();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <CarouselContainer photos={style.photos} />
        </div>
      </div>
    </div>
  );
}

export default App;
