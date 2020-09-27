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
      <div className="row ajs-top-half no-gutters">
        <div className="col-md-8">
          <CarouselContainer photos={styles[styleIndex].photos} />
        </div>
        <div className="col-md-4">
          <CustomerInteraction
            product={product}
            styles={styles}
            styleIndex={styleIndex}
            setStyleIndex={setStyleIndex}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
