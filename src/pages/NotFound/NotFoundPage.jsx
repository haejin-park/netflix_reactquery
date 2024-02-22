import React from 'react';
import { Container } from 'react-bootstrap';
import './NotFoundPage.style.css';

const NotFoundPage = () => {
  return (
      <Container>
        <div className='background'>
          <div className="title">404 Not Found</div>
          <img className="background-img" src='https://cdn.pixabay.com/photo/2017/08/27/23/29/kermit-2687975_1280.jpg' alt=""/>
        </div>
      </Container>
  )
}

export default NotFoundPage
