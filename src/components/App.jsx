import React from 'react';
import axios from 'axios';
import CarouselContainer from './CarouselContainer.jsx';

function App() {
  const [product, setProduct] = React.useState({
    id: null,
    name: null,
    slogan: null,
    description: null,
    category: null,
    default_price: null,
    features: [{
      feature: null,
      value: null,
    }],
  });
  const getProduct = () => axios.get('http://52.26.193.201:3000/products/1')
    .then((response) => {
      setProduct(response.data);
    });

  const [styles, setStyles] = React.useState([
    {
      style_id: null,
      name: null,
      original_price: null,
      sale_price: null,
      'default?': null,
      photos: [
        {
          thumbnail_url: null,
          url: null,
        },
      ],
      skus: {
        XS: null,
        S: null,
        M: null,
        L: null,
        XL: null,
      },
    },
  ]);
  const getStyles = () => axios.get('http://52.26.193.201:3000/products/1/styles')
    .then((response) => setStyles(response.data.results));

  const [styleIndex, setStyleIndex] = React.useState(0);

  React.useEffect(() => {
    getProduct();
    getStyles();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <CarouselContainer photos={styles[styleIndex].photos} />
          {/* <CustomerInteraction /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
