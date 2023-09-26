import React, { useState } from 'react';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const Rating = ({ value, onChange }) => {
  const [hoverValue, setHoverValue] = useState(null);

  return (
    <div>
      {[1, 2, 3, 4, 5].map((index) => (
        <span
          key={index}
          className="cursor-pointer"
          onMouseEnter={() => setHoverValue(index)}
          onMouseLeave={() => setHoverValue(null)}
          onClick={() => onChange(index)}
        >
          {index <= (hoverValue || value) ? <StarIcon className='text-orange-500'/> : <StarBorderIcon />}
        </span>
      ))}
    </div>
  );
};

export default Rating;
