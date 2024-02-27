import React, { useState } from 'react'
import useMovieReviews from '../../../../hooks/useMovieReviews';
import { Collapse, ListItemButton} from '@mui/material';
import './MovieReviews.style.css';
const MovieReviews = ({movieId}) => {
    const {data} = useMovieReviews({movieId});
    const [open, setOpen] = useState(false);
    const handleClick = (index) => {
      setOpen(prev => ({...prev, [index]: !prev[index] }));
    };
  return (
    <div>
        <h3>Reviews</h3>
        {data?.results?.map((review, index) => (
        <div className="review-box" key={index}>
            <h5>{review.author}</h5>
            {!open[index]? <div className="review-content">{review.content}</div>
            : 
            <Collapse in={open[index]} timeout="auto" unmountOnExit>
                {review.content}
            </Collapse>
            }
            <ListItemButton onClick={(event) => handleClick(index)}>
                {open[index]? '접기': '더보기'}
            </ListItemButton>
        </div>
        ))}
    </div>
  )
}

export default MovieReviews
