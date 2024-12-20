import React, { useState } from 'react';
import ReactStars from 'react-stars';

const Review = () => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return (
    <div style={{paddingTop:"100px",paddingBottom:"100px",backgroundColor:"red"}}>
      <h3>Rate this Product</h3>
      <ReactStars
        count={5} // Total number of stars
        size={20} // Size of the stars
        value={rating} // The current rating value
        onChange={handleRatingChange} // Callback when the user clicks on a star
        color2={'#000000'} // Color of the filled stars (gold)
      />
      <p style={{color:"white"}}>Your rating: {rating} out of 5</p>
    </div>
  );
};

export default Review;
