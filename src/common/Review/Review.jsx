import React, { useEffect, useState } from 'react';
import './Review.style.css';

const Review = ({ review, index }) => {
    const [open, setOpen] = useState(false);
    const [updatedContent, setUpdatedContent] = useState('');
    const handleClick = () => {
        setOpen(!open);
    };

    const truncateContent = (str, num) => {
        if(review.content.length <= num) 
        return setUpdatedContent(review.content);
        setUpdatedContent(review.content.slice(0, num));
    }

    useEffect(() => {
        truncateContent(review.content, 300);
    }, [updatedContent]);

    return (
        <div className="review-box">
            <div className="review-text-box">
                <h5>{review.author}</h5>
                <div className="review-content-box">
                    {open 
                    ? <div className={`review-content ${open? 'open' : 'close' }`}>{review.content}</div>
                    : <div className={`review-content ${open? 'open' : 'close' }`}>{updatedContent}</div>
                    }
                </div>
            </div>
            <div className="review-btn-box">
                {review.content.length > 300 &&  <button className ="review-btn" onClick={handleClick}>{open ? 'close' : 'open'}</button>}
            </div>
        </div>
    );
};

export default Review;
