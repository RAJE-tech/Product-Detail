import React from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import CarouselContainer from './CarouselContainer.jsx';
import CustomerInteraction from './CustomerInteraction.jsx';
import ProductOverview from './ProductOverview.jsx';

function App({ base }) {
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

  let { productId } = useParams();
  if (base === true) {
    productId = 1;
  }
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
          url: '',
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
  

  const [styleIndex, setStyleIndex] = React.useState(0);
  const [ratings, setRatings] = React.useState(0);
  const [carouselExpanded, setCarouselExpanded] = React.useState(false);

  const getStyles = () => axios.get(`http://52.26.193.201:3000/products/${productId}/styles`)
    .then((response) => setStyles(response.data.results));
  const getRatings = () => axios.get(`http://52.26.193.201:3000/reviews/${productId}/meta`)
    .then((response) => setRatings(response.data.ratings));

  React.useEffect(() => {
    getProduct();
    getStyles();
    getRatings();
  }, []);

  return (
    <div className="col">
      <div className="row ajs-top-half">
        <div className={carouselExpanded ? 'col-12 ajs-carousel-expanded' : 'col-12 col-md-8'}>
          <CarouselContainer
            photos={styles[styleIndex].photos}
            setCarouselExpanded={setCarouselExpanded}
            carouselExpanded={carouselExpanded}
          />
        </div>
        <div className={carouselExpanded ? 'col-md-4 col-12 ajs-magnifier-hidden' : 'col-md-4 col-12'}>
          <CustomerInteraction
            product={product}
            styles={styles}
            styleIndex={styleIndex}
            setStyleIndex={setStyleIndex}
            ratings={ratings}
            productId={productId}
          />
        </div>
        <div className="col-12 ajs-product-overview-container">
          <ProductOverview product={product}/>
        </div>
      </div>
    </div>
  );
}

export default App;