import React from 'react';
import axios from 'axios';
import CarouselContainer from './CarouselContainer.jsx';
import CustomerInteraction from './CustomerInteraction.jsx'

function App() {
  const [product, setProduct] = React.useState({
    id: 0,
    name: '',
    slogan: '',
    description: '',
    category: '',
    default_price: 0,
    features: [{
      feature: '',
      value: '',
    }],
  });
  const productId = 1;
  const getProduct = () => axios.get(`http://52.26.193.201:3000/products/${productId}`)
    .then((response) => {
      setProduct(response.data);
    });

  const [styles, setStyles] = React.useState([
    {
      style_id: 0,
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
  const getStyles = () => axios.get(`http://52.26.193.201:3000/products/${productId}/styles`)
    .then((response) => setStyles(response.data.results));

  const [styleIndex, setStyleIndex] = React.useState(0);

  const [ratings, setRatings] = React.useState(0);
  const getRatings = () => axios.get(`http://52.26.193.201:3000/reviews/${productId}/meta`)
    .then((response) => setRatings(response.data.ratings));

  React.useEffect(() => {
    getProduct();
    getStyles();
    getRatings();
  }, []);

  return (
    <div className="container">
      <div className="row ajs-top-half">
        <div className="col-md-8 col-12">
          <CarouselContainer photos={styles[styleIndex].photos} />
        </div>
        <div className="col-md-4 col-12">
          <CustomerInteraction
            product={product}
            styles={styles}
            styleIndex={styleIndex}
            setStyleIndex={setStyleIndex}
            ratings={ratings}
            productId={productId}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
