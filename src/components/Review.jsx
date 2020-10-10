import React from 'react';
import Rating from '@material-ui/lab/Rating'

function Review({ ratings }) {
  let total = 0;
  let weightedTotal = 0;
  for( const key in ratings) {
    weightedTotal += Number(key)*ratings[key];
    total += ratings[key];
  }
  const avgRating = weightedTotal / total;

  return (
    <div className={total === 0 || NaN ? 'ajs-hidden ajs-review' : 'ajs-review'}>
      <Rating
        name="simple-controlled"
        value={avgRating}
        precision={0.25}
        readOnly
      />
      <a href="#reviews">Read all reviews</a>
    </div>
  );
}

export default Review;
