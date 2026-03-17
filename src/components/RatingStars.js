import React, { useState } from "react";

const RatingStars = ({ rating }) => {
  const [currentRating, setCurrentRating] = useState(rating);

  return (
    <div>
      {[1,2,3,4,5].map((star)=>(
        <span
          key={star}
          style={{
            fontSize:"20px",
            cursor:"pointer",
            color: star <= currentRating ? "gold" : "gray"
          }}
          onClick={()=>setCurrentRating(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default RatingStars;