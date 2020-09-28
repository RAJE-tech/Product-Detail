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
  const roundedAvg = (Math.round(avgRating * 4) / 4).toFixed(2);

  return (
    <div>
      <Rating name="half-rating-read" defaultValue={Number(roundedAvg)} precision={0.5} readOnly />
      <a href="#">Read all reviews</a>
    </div>
  );
}

export default Review;
