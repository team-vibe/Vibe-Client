import React from 'react';
import axios from 'axios';
import './style.css'


const RestaurantRecommendationsCard = ({ result }) => {


  return (
    <div id="recommendationsCard">
      <h4>Review by {result.username}</h4>
      <p>created on {result.created_on.slice(0, 10)}:</p>
      <h2><p><i>{result.message}</i></p></h2>
      <p>Rating given: {result.rating}</p>
      {/* <div id="header">
        <h1>Review by {result.username}</h1>
        <p>{result.address}</p>
        <p>Google rating: {result.rating}</p>
        <p>Total ratings: {result.total_ratings}</p>
      </div>
      <div id="imgAndReviews">
        <div id="leftColumn">
          <img src={result.photo_url} alt="image not available" />
          {/* <button onClick={goToWebsite}>Go to website</button> */}
        {/* </div>
        <div id="rightColumn">
          <div id="reviewsDiv">
            Reviews
          </div>
        </div> */}
      {/* </div> */} 
    </div>
  );
}

export default RestaurantRecommendationsCard;
