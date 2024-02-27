import React, { useState } from 'react';
import { ListItemButton } from '@mui/material';
import './Review.style.css';

const Review = ({ review }) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <div className="review-box">
            <h5>{review.author}</h5>
            <div className={`review-content ${open ? 'open' : ''}`} id={`review-content`}>
                {review.content}
            </div>
            <ListItemButton onClick={handleClick}>
                {open ? '접기' : '더보기'}
            </ListItemButton>            
        </div>
    );
};

export default Review;
