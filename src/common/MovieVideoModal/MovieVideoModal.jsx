import React from 'react'
import {useMovieVideoQuery} from '../../hooks/useMovieVideo';
import { Alert, Modal, Spinner } from 'react-bootstrap';
import YouTube from 'react-youtube';
import './MovieVideoModal.style.css';

const MovieVideoModal = ({movieId, show, setShow, fullscreen}) => {
  const {data, isLoading, isError, error} = useMovieVideoQuery({movieId});
  const opts = {
    playerVars: {
      autoplay: 1,
    },
  };

  if(isLoading) {
    return (
      <div className="loading-spinner">
        <Spinner className="home-loading-spinner" animation="border" variant="danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    )
  }
  if(isError) {
    return (
      <div className="error-alert">
        <Alert className="error-alert" variant="danger">
          {error.message}
        </Alert>
      </div>
    )
  }
  
  return (
    <div>
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header className="video-modal-header">
          <Modal.Title className="video-modal-title">Movie Trailer</Modal.Title>
          <svg onClick={() => setShow(false)} className="close-btn" width="20px" height="20px" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M32 22.6274L13.1514 3.77905L3.77906 13.1514L22.6274 32L3.77906 50.8484L13.1514 60.2207L32 41.3724L50.8484 60.2207L60.2208 50.8484L41.3724 32L60.2208 13.1514L50.8484 3.77905L32 22.6274Z" fill="white"/>
          </svg>
        </Modal.Header>
        <Modal.Body className="video-modal-body">
          <YouTube
            videoId={data?.results[1]?.key}          
            className='youtube-video'           // 영상을 둘러싼 박스
            iframeClassName='youtube-iframe'    // 영상
            opts={opts}                         // 자동 재생 1회
            onEnd={() => setShow(false)}        // 영상이 끝나면 바로 모달이 닫히게
          />
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default MovieVideoModal;
